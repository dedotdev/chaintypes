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
  | 'chainHead_unstable_body'
  | 'chainHead_unstable_call'
  | 'chainHead_unstable_continue'
  | 'chainHead_unstable_follow'
  | 'chainHead_unstable_genesisHash'
  | 'chainHead_unstable_header'
  | 'chainHead_unstable_stopOperation'
  | 'chainHead_unstable_storage'
  | 'chainHead_unstable_unpin'
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
  | 'eth_accounts'
  | 'eth_blockNumber'
  | 'eth_call'
  | 'eth_chainId'
  | 'eth_coinbase'
  | 'eth_estimateGas'
  | 'eth_feeHistory'
  | 'eth_gasPrice'
  | 'eth_getBalance'
  | 'eth_getBlockByHash'
  | 'eth_getBlockByNumber'
  | 'eth_getBlockReceipts'
  | 'eth_getBlockTransactionCountByHash'
  | 'eth_getBlockTransactionCountByNumber'
  | 'eth_getCode'
  | 'eth_getFilterChanges'
  | 'eth_getFilterLogs'
  | 'eth_getLogs'
  | 'eth_getStorageAt'
  | 'eth_getTransactionByBlockHashAndIndex'
  | 'eth_getTransactionByBlockNumberAndIndex'
  | 'eth_getTransactionByHash'
  | 'eth_getTransactionCount'
  | 'eth_getTransactionReceipt'
  | 'eth_getUncleByBlockHashAndIndex'
  | 'eth_getUncleByBlockNumberAndIndex'
  | 'eth_getUncleCountByBlockHash'
  | 'eth_getUncleCountByBlockNumber'
  | 'eth_getWork'
  | 'eth_hashrate'
  | 'eth_maxPriorityFeePerGas'
  | 'eth_mining'
  | 'eth_newBlockFilter'
  | 'eth_newFilter'
  | 'eth_newPendingTransactionFilter'
  | 'eth_protocolVersion'
  | 'eth_sendRawTransaction'
  | 'eth_sendTransaction'
  | 'eth_submitHashrate'
  | 'eth_submitWork'
  | 'eth_subscribe'
  | 'eth_syncing'
  | 'eth_uninstallFilter'
  | 'eth_unsubscribe'
  | 'net_listening'
  | 'net_peerCount'
  | 'net_version'
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
  | 'transaction_unstable_submitAndWatch'
  | 'transaction_unstable_unwatch'
  | 'web3_clientVersion'
  | 'web3_sha3'
> &
  GenericJsonRpcApis<Rv>;
