// Generated by dedot cli

import type { GenericJsonRpcApis, RpcVersion } from 'dedot/types';
import type { JsonRpcApis } from 'dedot/types/json-rpc';

export type ChainJsonRpcApis<Rv extends RpcVersion> = Pick<
  JsonRpcApis,
  | 'author_hasKey'
  | 'author_hasSessionKeys'
  | 'author_insertKey'
  | 'author_pendingExtrinsics'
  | 'author_removeExtrinsic'
  | 'author_rotateKeys'
  | 'author_submitAndWatchExtrinsic'
  | 'author_submitExtrinsic'
  | 'babe_epochAuthorship'
  | 'beefy_getFinalizedHead'
  | 'beefy_subscribeJustifications'
  | 'chainHead_unstable_body'
  | 'chainHead_unstable_call'
  | 'chainHead_unstable_continue'
  | 'chainHead_unstable_follow'
  | 'chainHead_unstable_header'
  | 'chainHead_unstable_stopOperation'
  | 'chainHead_unstable_storage'
  | 'chainHead_unstable_unpin'
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
  | 'grandpa_proveFinality'
  | 'grandpa_roundState'
  | 'grandpa_subscribeJustifications'
  | 'mmr_generateProof'
  | 'mmr_root'
  | 'mmr_verifyProof'
  | 'mmr_verifyProofStateless'
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
  | 'statement_broadcasts'
  | 'statement_dump'
  | 'statement_posted'
  | 'statement_postedClear'
  | 'statement_remove'
  | 'statement_submit'
  | 'sync_state_genSyncSpec'
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
  | 'transactionWatch_unstable_submitAndWatch'
> &
  GenericJsonRpcApis<Rv>;
