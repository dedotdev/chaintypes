# @dedot/chaintypes

TypeScript definitions for various PolkadotSDK-based known networks.

## Installation

```bash
# Install dedot
npm i dedot

# Install chaintypes as a dev dependency
npm i -D @dedot/chaintypes
```

> Note: 
> `@dedot/chaintypes` should be installed as a dev dependency since it only provides TypeScript type definitions for known-chains and is not needed at runtime.

## Usage

Import types for specific networks:

```typescript
// Import types for Polkadot
import type { PolkadotApi } from '@dedot/chaintypes';

// Import types for Kusama
import type { KusamaApi } from '@dedot/chaintypes';

// Import types for other networks
import type { 
  AstarApi,
  MoonbeamApi,
  // ... other networks
} from '@dedot/chaintypes';
```

You can also import types for specific networks directly:

```typescript
// Import types for Polkadot directly
import type { PolkadotApi } from '@dedot/chaintypes/polkadot';
```

## Initializing DedotClient with ChainTypes

To get full TypeScript support when working with a specific network, you can initialize a DedotClient with the appropriate `ChainApi`:

```typescript
import { DedotClient, WsProvider } from 'dedot';
import type { PolkadotApi } from '@dedot/chaintypes';

// Initialize a typed client for Polkadot
const client = await DedotClient.new<PolkadotApi>(new WsProvider('wss://rpc.polkadot.io'));

// Now you get full TypeScript support for Polkadot-specific APIs
const balance = await client.query.system.account('ADDRESS');
```

### Examples for Different Networks

```typescript
import { DedotClient, WsProvider } from 'dedot';
import type { PolkadotApi, KusamaApi, AstarApi, PolkadotAssetHubApi } from '@dedot/chaintypes';

// For Kusama
const kusamaClient = await DedotClient.new<KusamaApi>(new WsProvider('wss://kusama-rpc.polkadot.io'));

// For Astar
const astarClient = await DedotClient.new<AstarApi>(new WsProvider('wss://rpc.astar.network'));

// For Polkadot Asset Hub
const polkadotAssetHubClient = await DedotClient.new<PolkadotAssetHubApi>(
  new WsProvider('wss://polkadot-asset-hub-rpc.polkadot.io')
);
```

For more detailed information on connecting to networks, see the [official documentation](https://docs.dedot.dev/getting-started/connect-to-network#pick-chainapi-interface-for-the-network-youre-working-with).

## Supported Networks

- Polkadot
- Polkadot Asset Hub
- Polkadot People
- Kusama
- Kusama Asset Hub
- Kusama People
- Westend
- Westend Asset Hub
- Westend People
- Paseo
- Paseo Asset Hub
- Paseo People
- Paseo Hydration
- Astar
- Moonbeam
- Aleph
- Hydration
- Basilisk
- Vara

> Don't see your network? We welcome Pull Requests to add support for additional PolkadotSDK-based networks!

## License

Apache-2.0
