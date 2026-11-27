import { generateTypes, generateTypesFromEndpoint } from '@dedot/codegen';
import { $Metadata, Metadata, PortableRegistry, RuntimeVersion } from 'dedot/codecs';
import { ConstantExecutor, DedotClient, SubstrateRuntimeVersion } from 'dedot';
import { networks } from './networks';

const OUT_DIR: string = './packages/chaintypes/src';
const ENDPOINT_TIMEOUT_MS = 120_000;

const withTimeout = <T>(promise: Promise<T>, ms: number, label: string): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timed out after ${ms}ms: ${label}`)), ms);
    promise.then(
      (v) => (clearTimeout(timer), resolve(v)),
      (e) => (clearTimeout(timer), reject(e)),
    );
  });

// WebSocket ErrorEvents hide the reason behind a symbol, dig it out for readable logs
const describeError = (e: any): string => {
  if (e?.message) return e.message;
  if (e?.error?.message) return e.error.message;
  const symbolMessage = e && Object.getOwnPropertySymbols(e).find((s) => s.description === 'kMessage');
  if (symbolMessage && e[symbolMessage]) return e[symbolMessage];
  return e?.type === 'error' ? 'WebSocket connection error' : String(e);
};

// Try each endpoint in order, fall back to the next one on failure
async function generateFromEndpoints(chain: string, endpoints: string[]) {
  const errors: string[] = [];
  for (const endpoint of endpoints) {
    try {
      console.log(`Generate types for ${chain} via endpoint ${endpoint}`);
      await withTimeout(
        generateTypesFromEndpoint({ chain, endpoint, outDir: OUT_DIR, useSubPaths: true }),
        ENDPOINT_TIMEOUT_MS,
        endpoint,
      );
      return;
    } catch (e: any) {
      const message = describeError(e);
      console.warn(`  ! ${chain} failed via ${endpoint}: ${message}`);
      errors.push(`${endpoint}: ${message}`);
    }
  }
  throw new Error(`All endpoints failed for ${chain}:\n  - ${errors.join('\n  - ')}`);
}

async function run() {
  const failed: string[] = [];

  for (const network of networks) {
    const { chain, endpoint, staticData } = network;

    if (endpoint) {
      try {
        await generateFromEndpoints(chain, endpoint);
      } catch (e: any) {
        console.error(e.message);
        failed.push(chain);
      }
    } else if (staticData) {
      const { metadataHex = '0x', rpcMethods = [] } = staticData;
      console.log(`Generate types for ${chain} via raw data`);
      const metadata = $Metadata.tryDecode(metadataHex);
      const runtimeVersion = getRuntimeVersion(metadata);
      const substrateRuntimeVersion: SubstrateRuntimeVersion = {
        ...runtimeVersion,
        apis: runtimeVersion.apis.reduce(
          (o, [name, version]) => {
            o[name] = version;
            return o;
          },
          {} as Record<string, number>,
        ),
      };

      await generateTypes({
        chain,
        metadata: metadata.latest,
        rpcMethods,
        runtimeVersion: substrateRuntimeVersion,
        outDir: OUT_DIR,
        useSubPaths: true,
      });
    }
  }

  // TODO regenerate packages/chaintypes/src/index.ts file
  //  to update exported ChainApi interfaces

  if (failed.length > 0) {
    // Fail the job so a partial regeneration is never committed/published silently
    throw new Error(`Failed to generate types for: ${failed.join(', ')}`);
  }

  console.log('DONE!');
}

const getRuntimeVersion = (metadata: Metadata): RuntimeVersion => {
  const registry = new PortableRegistry(metadata.latest);
  const executor = new ConstantExecutor({
    registry,
    metadataLatest: metadata.latest,
  } as unknown as DedotClient);

  return executor.execute('system', 'version') as RuntimeVersion;
};

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
