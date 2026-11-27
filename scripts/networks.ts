import { rpc } from '@polkadot/types-support/metadata/static-substrate';
import staticSubstrate from '@polkadot/types-support/metadata/v15/substrate-hex';
import { unwrapOpaqueMetadata } from 'dedot/codecs';

type NetworkInfo = {
  chain: string;
  endpoint?: string[];
  staticData?: {
    metadataHex?: string;
    rpcMethods?: string[];
  };
};

export const networks: NetworkInfo[] = [
  {
    chain: 'substrate',
    staticData: {
      metadataHex: unwrapOpaqueMetadata(staticSubstrate),
      rpcMethods: rpc.methods,
    },
  },
  {
    chain: 'polkadot',
    endpoint: ['wss://rpc.polkadot.io'],
  },
  {
    chain: 'polkadotAssetHub',
    endpoint: ['wss://polkadot-asset-hub-rpc.polkadot.io/'],
  },
  {
    chain: 'polkadotPeople',
    endpoint: ['wss://polkadot-people-rpc.polkadot.io'],
  },
  {
    chain: 'kusama',
    endpoint: ['wss://kusama-rpc.polkadot.io'],
  },
  {
    chain: 'kusamaAssetHub',
    endpoint: ['wss://kusama-asset-hub-rpc.polkadot.io/'],
  },
  {
    chain: 'kusamaPeople',
    endpoint: ['wss://kusama-people-rpc.polkadot.io'],
  },
  {
    chain: 'astar',
    endpoint: ['wss://rpc.astar.network'],
  },
  {
    chain: 'moonbeam',
    endpoint: ['wss://moonbeam.api.onfinality.io/public-ws'],
  },
  {
    chain: 'aleph',
    endpoint: ['wss://ws.azero.dev'],
  },
  {
    chain: 'westend',
    endpoint: ['wss://westend-rpc.polkadot.io'],
  },
  {
    chain: 'westendAssetHub',
    endpoint: ['wss://westend-asset-hub-rpc.polkadot.io'],
  },
  {
    chain: 'westendPeople',
    endpoint: ['wss://westend-people-rpc.polkadot.io'],
  },
  {
    chain: 'paseo',
    endpoint: ['wss://rpc-paseo.stakeworld.io', 'wss://paseo-rpc.n.dwellir.com', 'wss://paseo-v2.rpc.turboflakes.io'],
  },
  {
    chain: 'paseoAssetHub',
    // NOTE: wss://pas-rpc.stakeworld.io/assethub serves *Polkadot* Asset Hub, do not use
    endpoint: ['wss://asset-hub-paseo-rpc.n.dwellir.com', 'wss://sys.turboflakes.io/asset-hub-paseo'],
  },
  {
    chain: 'paseoPeople',
    endpoint: [
      'wss://people-paseo.rotko.net',
      'wss://people-paseo.gatotech.network',
      'wss://rpc.interweb-it.com/people-paseo',
    ],
  },
  {
    chain: 'hydration',
    endpoint: ['wss://hydration-rpc.n.dwellir.com'],
  },
  {
    chain: 'paseoHydration',
    endpoint: ['wss://paseo-rpc.play.hydration.cloud'],
  },
  {
    chain: 'basilisk',
    endpoint: ['wss://rpc.basilisk.cloud'],
  },
  {
    chain: 'vara',
    endpoint: ['wss://rpc.vara-network.io'],
  },
];
