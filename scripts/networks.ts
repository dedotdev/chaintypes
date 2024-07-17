import { rpc } from '@polkadot/types-support/metadata/static-substrate';
import staticSubstrate from '@polkadot/types-support/metadata/v15/substrate-hex';

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
      metadataHex: staticSubstrate,
      rpcMethods: rpc.methods,
    },
  },
  {
    chain: 'polkadot',
    endpoint: ['wss://rpc.polkadot.io'],
  },
  {
    chain: 'kusama',
    endpoint: ['wss://kusama-rpc.polkadot.io'],
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
    chain: 'polkadotAssetHub',
    endpoint: ['wss://polkadot-asset-hub-rpc.polkadot.io/'],
  },
  {
    chain: 'kusamaAssetHub',
    endpoint: ['wss://kusama-asset-hub-rpc.polkadot.io/'],
  },
  {
    chain: 'rococo',
    endpoint: ['wss://rococo-rpc.polkadot.io/'],
  },
  {
    chain: 'rococoAssetHub',
    endpoint: ['wss://rococo-asset-hub-rpc.polkadot.io/'],
  },
  {
    chain: 'aleph',
    endpoint: ['wss://aleph-zero.api.onfinality.io/public-ws'],
  },
  {
    chain: 'westend',
    endpoint: ['wss://westend-rpc.dwellir.com'],
  },
  {
    chain: 'westendAssetHub',
    endpoint: ['wss://westend-asset-hub-rpc.polkadot.io'],
  },
  {
    chain: 'westendPeople',
    endpoint: ['wss://people-westend-rpc.dwellir.com'],
  },
  {
    chain: 'paseo',
    endpoint: ['wss://pas-rpc.stakeworld.io'],
  },
];
