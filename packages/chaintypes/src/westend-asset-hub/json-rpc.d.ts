// Generated by dedot cli

import type { GenericJsonRpcApis, RpcVersion } from 'dedot/types';
import type { JsonRpcApis } from 'dedot/types/json-rpc';

export type ChainJsonRpcApis<Rv extends RpcVersion> = Pick<
  JsonRpcApis,
  | 'archive_unstable_body'
  | 'archive_unstable_call'
  | 'archive_unstable_finalizedHeight'
  | 'archive_unstable_genesisHash'
  | 'archive_unstable_hashByHeight'
  | 'archive_unstable_header'
  | 'archive_unstable_stopStorage'
  | 'archive_unstable_storage'
  | 'archive_unstable_storageDiff'
  | 'archive_unstable_storageDiff_stopStorageDiff'
  | 'author_hasKey'
  | 'author_hasSessionKeys'
  | 'author_insertKey'
  | 'author_pendingExtrinsics'
  | 'author_removeExtrinsic'
  | 'author_rotateKeys'
  | 'author_submitAndWatchExtrinsic'
  | 'author_submitExtrinsic'
  | 'chainHead_v1_body'
  | 'chainHead_v1_call'
  | 'chainHead_v1_continue'
  | 'chainHead_v1_follow'
  | 'chainHead_v1_header'
  | 'chainHead_v1_stopOperation'
  | 'chainHead_v1_storage'
  | 'chainHead_v1_unpin'
  | 'chainSpec_v1_chainName'
  | 'chainSpec_v1_genesisHash'
  | 'chainSpec_v1_properties'
  | 'chain_getBlock'
  | 'chain_getBlockHash'
  | 'chain_getFinalizedHead'
  | 'chain_getHeader'
  | 'chain_subscribeAllHeads'
  | 'chain_subscribeFinalizedHeads'
  | 'chain_subscribeNewHeads'
  | 'childstate_getKeys'
  | 'childstate_getKeysPaged'
  | 'childstate_getStorage'
  | 'childstate_getStorageEntries'
  | 'childstate_getStorageHash'
  | 'childstate_getStorageSize'
  | 'dev_getBlockStats'
  | 'offchain_localStorageClear'
  | 'offchain_localStorageGet'
  | 'offchain_localStorageSet'
  | 'payment_queryFeeDetails'
  | 'payment_queryInfo'
  | 'rpc_methods'
  | 'state_call'
  | 'state_getChildReadProof'
  | 'state_getKeys'
  | 'state_getKeysPaged'
  | 'state_getMetadata'
  | 'state_getPairs'
  | 'state_getReadProof'
  | 'state_getRuntimeVersion'
  | 'state_getStorage'
  | 'state_getStorageHash'
  | 'state_getStorageSize'
  | 'state_queryStorage'
  | 'state_queryStorageAt'
  | 'state_subscribeRuntimeVersion'
  | 'state_subscribeStorage'
  | 'state_traceBlock'
  | 'state_trieMigrationStatus'
  | 'system_accountNextIndex'
  | 'system_addLogFilter'
  | 'system_addReservedPeer'
  | 'system_chain'
  | 'system_chainType'
  | 'system_dryRun'
  | 'system_health'
  | 'system_localListenAddresses'
  | 'system_localPeerId'
  | 'system_name'
  | 'system_nodeRoles'
  | 'system_peers'
  | 'system_properties'
  | 'system_removeReservedPeer'
  | 'system_reservedPeers'
  | 'system_resetLogFilter'
  | 'system_syncState'
  | 'system_unstable_networkState'
  | 'system_version'
  | 'transactionWatch_v1_submitAndWatch'
  | 'transaction_v1_broadcast'
  | 'transaction_v1_stop'
> &
  GenericJsonRpcApis<Rv>;
