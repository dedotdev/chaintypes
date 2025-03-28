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

export interface VersionedAlephApi<Rv extends RpcVersion> extends GenericSubstrateApi<Rv> {
  rpc: ChainJsonRpcApis<Rv>;
  consts: ChainConsts<Rv>;
  query: ChainStorage<Rv>;
  errors: ChainErrors<Rv>;
  events: ChainEvents<Rv>;
  call: RuntimeApis<Rv>;
  tx: ChainTx<Rv>;
}

/**
 * @name: AlephApi
 * @specVersion: 15000000
 **/
export interface AlephApi {
  legacy: VersionedAlephApi<RpcLegacy>;
  v2: VersionedAlephApi<RpcV2>;
}
