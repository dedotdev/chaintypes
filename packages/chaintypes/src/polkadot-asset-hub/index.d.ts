// Generated by dedot cli

import type { GenericSubstrateApi, RpcLegacy, RpcV2, RpcVersion } from 'dedot/types';
import { ChainConsts } from './consts';
import { ChainStorage } from './query';
import { ChainJsonRpcApis } from './json-rpc';
import { ChainErrors } from './errors';
import { ChainEvents } from './events';
import { RuntimeApis } from './runtime';
import { ChainTx } from './tx';

export * from './types';

export interface VersionedPolkadotAssetHubApi<Rv extends RpcVersion> extends GenericSubstrateApi<Rv> {
  rpc: ChainJsonRpcApis<Rv>;
  consts: ChainConsts<Rv>;
  query: ChainStorage<Rv>;
  errors: ChainErrors<Rv>;
  events: ChainEvents<Rv>;
  call: RuntimeApis<Rv>;
  tx: ChainTx<Rv>;
}

/**
 * @name: PolkadotAssetHubApi
 * @specVersion: 1003003
 **/
export interface PolkadotAssetHubApi {
  legacy: VersionedPolkadotAssetHubApi<RpcLegacy>;
  v2: VersionedPolkadotAssetHubApi<RpcV2>;
}
