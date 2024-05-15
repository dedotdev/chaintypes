import { generateTypes, generateTypesFromEndpoint } from '@dedot/codegen';
import { $Metadata, Metadata, PortableRegistry, RuntimeVersion } from '@dedot/codecs';
import { ConstantExecutor, Dedot } from 'dedot';
import { networks } from './networks';

const OUT_DIR: string = './packages/chaintypes/src';

async function run() {
  for (const network of networks) {
    const { chain, endpoint, staticData } = network;

    if (endpoint) {
      console.log(`Generate types for ${chain} via endpoint ${endpoint}`);
      await generateTypesFromEndpoint(chain, endpoint[0], OUT_DIR, undefined, true);
    } else if (staticData) {
      const { metadataHex = '0x', rpcMethods = [] } = staticData;
      console.log(`Generate types for ${chain} via raw data`);
      const metadata = $Metadata.tryDecode(metadataHex);
      const runtimeVersion = getRuntimeVersion(metadata);
      const runtimeApis = runtimeVersion.apis.reduce(
        (o, [name, version]) => {
          o[name] = version;
          return o;
        },
        {} as Record<string, number>,
      )

      await generateTypes(chain, metadata.latest, rpcMethods, runtimeApis, OUT_DIR, undefined, true);
    }
  }

  // TODO regenerate packages/chaintypes/src/index.ts file
  //  to update exported ChainApi interfaces

  console.log('DONE!');
}

const getRuntimeVersion = (metadata: Metadata): RuntimeVersion => {
  const registry = new PortableRegistry(metadata.latest);
  const executor = new ConstantExecutor({
    registry,
    metadataLatest: metadata.latest,
  } as unknown as Dedot);

  return executor.execute('system', 'version') as RuntimeVersion;
};

run().catch(console.log);
