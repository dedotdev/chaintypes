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

export interface VersionedWestendAssetHubApi<Rv extends RpcVersion> extends GenericSubstrateApi<Rv> {
  rpc: ChainJsonRpcApis<Rv>;
  consts: ChainConsts<Rv>;
  query: ChainStorage<Rv>;
  errors: ChainErrors<Rv>;
  events: ChainEvents<Rv>;
  call: RuntimeApis<Rv>;
  tx: ChainTx<Rv>;
}

/**
 * @name: WestendAssetHubApi
 * @specVersion: 1017001
 **/
export interface WestendAssetHubApi {
  legacy: VersionedWestendAssetHubApi<RpcLegacy>;
  v2: VersionedWestendAssetHubApi<RpcV2>;
}
