// Generated by dedot cli

import type { GenericSubstrateApi, RpcLegacy, RpcV2, RpcVersion } from 'dedot/types';
import { ChainConsts } from './consts.js';
import { ChainStorage } from './query.js';
import { ChainJsonRpcApis } from './json-rpc.js';
import { ChainErrors } from './errors.js';
import { ChainEvents } from './events.js';
import { RuntimeApis } from './runtime.js';
import { ChainTx } from './tx.js';

export * from './types.js';

export interface VersionedPolkadotPeopleApi<Rv extends RpcVersion> extends GenericSubstrateApi<Rv> {
  rpc: ChainJsonRpcApis<Rv>;
  consts: ChainConsts<Rv>;
  query: ChainStorage<Rv>;
  errors: ChainErrors<Rv>;
  events: ChainEvents<Rv>;
  call: RuntimeApis<Rv>;
  tx: ChainTx<Rv>;
}

/**
 * @name: PolkadotPeopleApi
 * @specVersion: 1004000
 **/
export interface PolkadotPeopleApi {
  legacy: VersionedPolkadotPeopleApi<RpcLegacy>;
  v2: VersionedPolkadotPeopleApi<RpcV2>;
}
