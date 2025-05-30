// Generated by dedot cli

import type { GenericRuntimeApis, GenericRuntimeApiMethod, RpcVersion } from 'dedot/types';
import type {
  AccountId32Like,
  H256,
  Result,
  BytesLike,
  Bytes,
  RuntimeVersion,
  Header,
  DispatchError,
  UncheckedExtrinsicLike,
  UncheckedExtrinsic,
} from 'dedot/codecs';
import type {
  SpConsensusBabeBabeConfiguration,
  SpConsensusSlotsSlot,
  SpConsensusBabeEpoch,
  SpConsensusBabeOpaqueKeyOwnershipProof,
  SpConsensusBabeAppPublic,
  SpConsensusSlotsEquivocationProof,
  SpAuthorityDiscoveryAppPublic,
  PalletTransactionPaymentRuntimeDispatchInfo,
  VaraRuntimeRuntimeCallLike,
  PalletTransactionPaymentFeeDetails,
  SpWeightsWeightV2Weight,
  PalletGearStakingRewardsInflationInfo,
  PalletGearEthBridgeInternalProof,
  SpRuntimeBlock,
  SpRuntimeExtrinsicInclusionMode,
  SpCoreOpaqueMetadata,
  SpRuntimeTransactionValidityTransactionValidityError,
  SpInherentsInherentData,
  SpInherentsCheckInherentsResult,
  SpRuntimeTransactionValidityValidTransaction,
  SpRuntimeTransactionValidityTransactionSource,
  SpCoreCryptoKeyTypeId,
  SpConsensusGrandpaAppPublic,
  SpConsensusGrandpaEquivocationProof,
  SpRuntimeOpaqueValue,
  GearCoreMessageReplyInfo,
  GearCoreGasGasInfo,
  PalletGearManagerHandleKind,
} from './types.js';

export interface RuntimeApis<Rv extends RpcVersion> extends GenericRuntimeApis<Rv> {
  /**
   * @runtimeapi: BabeApi - 0xcbca25e39f142387
   **/
  babeApi: {
    /**
     * Return the configuration for BABE.
     *
     * @callname: BabeApi_configuration
     **/
    configuration: GenericRuntimeApiMethod<Rv, () => Promise<SpConsensusBabeBabeConfiguration>>;

    /**
     * Returns the slot that started the current epoch.
     *
     * @callname: BabeApi_current_epoch_start
     **/
    currentEpochStart: GenericRuntimeApiMethod<Rv, () => Promise<SpConsensusSlotsSlot>>;

    /**
     * Returns information regarding the current epoch.
     *
     * @callname: BabeApi_current_epoch
     **/
    currentEpoch: GenericRuntimeApiMethod<Rv, () => Promise<SpConsensusBabeEpoch>>;

    /**
     * Returns information regarding the next epoch (which was already
     * previously announced).
     *
     * @callname: BabeApi_next_epoch
     **/
    nextEpoch: GenericRuntimeApiMethod<Rv, () => Promise<SpConsensusBabeEpoch>>;

    /**
     * Generates a proof of key ownership for the given authority in the
     * current epoch. An example usage of this module is coupled with the
     * session historical module to prove that a given authority key is
     * tied to a given staking identity during a specific session. Proofs
     * of key ownership are necessary for submitting equivocation reports.
     * NOTE: even though the API takes a `slot` as parameter the current
     * implementations ignores this parameter and instead relies on this
     * method being called at the correct block height, i.e. any point at
     * which the epoch for the given slot is live on-chain. Future
     * implementations will instead use indexed data through an offchain
     * worker, not requiring older states to be available.
     *
     * @callname: BabeApi_generate_key_ownership_proof
     * @param {SpConsensusSlotsSlot} slot
     * @param {SpConsensusBabeAppPublic} authority_id
     **/
    generateKeyOwnershipProof: GenericRuntimeApiMethod<
      Rv,
      (
        slot: SpConsensusSlotsSlot,
        authorityId: SpConsensusBabeAppPublic,
      ) => Promise<SpConsensusBabeOpaqueKeyOwnershipProof | undefined>
    >;

    /**
     * Submits an unsigned extrinsic to report an equivocation. The caller
     * must provide the equivocation proof and a key ownership proof
     * (should be obtained using `generate_key_ownership_proof`). The
     * extrinsic will be unsigned and should only be accepted for local
     * authorship (not to be broadcast to the network). This method returns
     * `None` when creation of the extrinsic fails, e.g. if equivocation
     * reporting is disabled for the given runtime (i.e. this method is
     * hardcoded to return `None`). Only useful in an offchain context.
     *
     * @callname: BabeApi_submit_report_equivocation_unsigned_extrinsic
     * @param {SpConsensusSlotsEquivocationProof} equivocation_proof
     * @param {SpConsensusBabeOpaqueKeyOwnershipProof} key_owner_proof
     **/
    submitReportEquivocationUnsignedExtrinsic: GenericRuntimeApiMethod<
      Rv,
      (
        equivocationProof: SpConsensusSlotsEquivocationProof,
        keyOwnerProof: SpConsensusBabeOpaqueKeyOwnershipProof,
      ) => Promise<[] | undefined>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: AuthorityDiscoveryApi - 0x687ad44ad37f03c2
   **/
  authorityDiscoveryApi: {
    /**
     * Retrieve authority identifiers of the current and next authority set.
     *
     * @callname: AuthorityDiscoveryApi_authorities
     **/
    authorities: GenericRuntimeApiMethod<Rv, () => Promise<Array<SpAuthorityDiscoveryAppPublic>>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: TransactionPaymentCallApi - 0xf3ff14d5ab527059
   **/
  transactionPaymentCallApi: {
    /**
     * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
     *
     * @callname: TransactionPaymentCallApi_query_call_info
     * @param {VaraRuntimeRuntimeCallLike} call
     * @param {number} len
     **/
    queryCallInfo: GenericRuntimeApiMethod<
      Rv,
      (call: VaraRuntimeRuntimeCallLike, len: number) => Promise<PalletTransactionPaymentRuntimeDispatchInfo>
    >;

    /**
     * Query fee details of a given encoded `Call`.
     *
     * @callname: TransactionPaymentCallApi_query_call_fee_details
     * @param {VaraRuntimeRuntimeCallLike} call
     * @param {number} len
     **/
    queryCallFeeDetails: GenericRuntimeApiMethod<
      Rv,
      (call: VaraRuntimeRuntimeCallLike, len: number) => Promise<PalletTransactionPaymentFeeDetails>
    >;

    /**
     * Query the output of the current `WeightToFee` given some input.
     *
     * @callname: TransactionPaymentCallApi_query_weight_to_fee
     * @param {SpWeightsWeightV2Weight} weight
     **/
    queryWeightToFee: GenericRuntimeApiMethod<Rv, (weight: SpWeightsWeightV2Weight) => Promise<bigint>>;

    /**
     * Query the output of the current `LengthToFee` given some input.
     *
     * @callname: TransactionPaymentCallApi_query_length_to_fee
     * @param {number} length
     **/
    queryLengthToFee: GenericRuntimeApiMethod<Rv, (length: number) => Promise<bigint>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: NominationPoolsApi - 0x17a6bc0d0062aeb3
   **/
  nominationPoolsApi: {
    /**
     * Returns the pending rewards for the member that the AccountId was given for.
     *
     * @callname: NominationPoolsApi_pending_rewards
     * @param {AccountId32Like} who
     **/
    pendingRewards: GenericRuntimeApiMethod<Rv, (who: AccountId32Like) => Promise<bigint>>;

    /**
     * Returns the equivalent balance of `points` for a given pool.
     *
     * @callname: NominationPoolsApi_points_to_balance
     * @param {number} pool_id
     * @param {bigint} points
     **/
    pointsToBalance: GenericRuntimeApiMethod<Rv, (poolId: number, points: bigint) => Promise<bigint>>;

    /**
     * Returns the equivalent points of `new_funds` for a given pool.
     *
     * @callname: NominationPoolsApi_balance_to_points
     * @param {number} pool_id
     * @param {bigint} new_funds
     **/
    balanceToPoints: GenericRuntimeApiMethod<Rv, (poolId: number, newFunds: bigint) => Promise<bigint>>;

    /**
     * Returns the pending slash for a given pool.
     *
     * @callname: NominationPoolsApi_pool_pending_slash
     * @param {number} pool_id
     **/
    poolPendingSlash: GenericRuntimeApiMethod<Rv, (poolId: number) => Promise<bigint>>;

    /**
     * Returns the pending slash for a given pool member.
     *
     * @callname: NominationPoolsApi_member_pending_slash
     * @param {AccountId32Like} member
     **/
    memberPendingSlash: GenericRuntimeApiMethod<Rv, (member: AccountId32Like) => Promise<bigint>>;

    /**
     * Returns true if the pool with `pool_id` needs migration.
     *
     * This can happen when the `pallet-nomination-pools` has switched to using strategy
     * [`DelegateStake`](pallet_nomination_pools::adapter::DelegateStake) but the pool
     * still has funds that were staked using the older strategy
     * [TransferStake](pallet_nomination_pools::adapter::TransferStake). Use
     * [`migrate_pool_to_delegate_stake`](pallet_nomination_pools::Call::migrate_pool_to_delegate_stake)
     * to migrate the pool.
     *
     * @callname: NominationPoolsApi_pool_needs_delegate_migration
     * @param {number} pool_id
     **/
    poolNeedsDelegateMigration: GenericRuntimeApiMethod<Rv, (poolId: number) => Promise<boolean>>;

    /**
     * Returns true if the delegated funds of the pool `member` needs migration.
     *
     * Once a pool has successfully migrated to the strategy
     * [`DelegateStake`](pallet_nomination_pools::adapter::DelegateStake), the funds of the
     * member can be migrated from pool account to the member's account. Use
     * [`migrate_delegation`](pallet_nomination_pools::Call::migrate_delegation)
     * to migrate the funds of the pool member.
     *
     * @callname: NominationPoolsApi_member_needs_delegate_migration
     * @param {AccountId32Like} member
     **/
    memberNeedsDelegateMigration: GenericRuntimeApiMethod<Rv, (member: AccountId32Like) => Promise<boolean>>;

    /**
     * Returns the total contribution of a pool member including any balance that is unbonding.
     *
     * @callname: NominationPoolsApi_member_total_balance
     * @param {AccountId32Like} who
     **/
    memberTotalBalance: GenericRuntimeApiMethod<Rv, (who: AccountId32Like) => Promise<bigint>>;

    /**
     * Total balance contributed to the pool.
     *
     * @callname: NominationPoolsApi_pool_balance
     * @param {number} pool_id
     **/
    poolBalance: GenericRuntimeApiMethod<Rv, (poolId: number) => Promise<bigint>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: StakingApi - 0x18ef58a3b67ba770
   **/
  stakingApi: {
    /**
     * Returns the nominations quota for a nominator with a given balance.
     *
     * @callname: StakingApi_nominations_quota
     * @param {bigint} balance
     **/
    nominationsQuota: GenericRuntimeApiMethod<Rv, (balance: bigint) => Promise<number>>;

    /**
     * Returns the page count of exposures for a validator `account` in a given era.
     *
     * @callname: StakingApi_eras_stakers_page_count
     * @param {number} era
     * @param {AccountId32Like} account
     **/
    erasStakersPageCount: GenericRuntimeApiMethod<Rv, (era: number, account: AccountId32Like) => Promise<number>>;

    /**
     * Returns true if validator `account` has pages to be claimed for the given era.
     *
     * @callname: StakingApi_pending_rewards
     * @param {number} era
     * @param {AccountId32Like} account
     **/
    pendingRewards: GenericRuntimeApiMethod<Rv, (era: number, account: AccountId32Like) => Promise<boolean>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: GearStakingRewardsApi - 0x29ca33476f4108aa
   **/
  gearStakingRewardsApi: {
    /**
     * Calculate token economics related data.
     *
     * @callname: GearStakingRewardsApi_inflation_info
     **/
    inflationInfo: GenericRuntimeApiMethod<Rv, () => Promise<PalletGearStakingRewardsInflationInfo>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: GearBuiltinApi - 0xf757f704c8ea14fe
   **/
  gearBuiltinApi: {
    /**
     * Calculate `ProgramId` (a.k.a. actor id) for a given builtin id.
     *
     * @callname: GearBuiltinApi_query_actor_id
     * @param {bigint} builtin_id
     **/
    queryActorId: GenericRuntimeApiMethod<Rv, (builtinId: bigint) => Promise<H256>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: GearEthBridgeApi - 0xfe1bbc43de74baec
   **/
  gearEthBridgeApi: {
    /**
     * Generate merkle inclusion proof of the message hash in bridge queue.
     *
     * @callname: GearEthBridgeApi_merkle_proof
     * @param {H256} hash
     **/
    merkleProof: GenericRuntimeApiMethod<Rv, (hash: H256) => Promise<PalletGearEthBridgeInternalProof | undefined>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: GenesisBuilder - 0xfbc577b9d747efd6
   **/
  genesisBuilder: {
    /**
     * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the
     * storage.
     *
     * In the case of a FRAME-based runtime, this function deserializes the full `RuntimeGenesisConfig` from the given JSON blob and
     * puts it into the storage. If the provided JSON blob is incorrect or incomplete or the
     * deserialization fails, an error is returned.
     *
     * Please note that provided JSON blob must contain all `RuntimeGenesisConfig` fields, no
     * defaults will be used.
     *
     * @callname: GenesisBuilder_build_state
     * @param {BytesLike} json
     **/
    buildState: GenericRuntimeApiMethod<Rv, (json: BytesLike) => Promise<Result<[], string>>>;

    /**
     * Returns a JSON blob representation of the built-in `RuntimeGenesisConfig` identified by
     * `id`.
     *
     * If `id` is `None` the function returns JSON blob representation of the default
     * `RuntimeGenesisConfig` struct of the runtime. Implementation must provide default
     * `RuntimeGenesisConfig`.
     *
     * Otherwise function returns a JSON representation of the built-in, named
     * `RuntimeGenesisConfig` preset identified by `id`, or `None` if such preset does not
     * exist. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of
     * (potentially nested) key-value pairs that are intended for customizing the default
     * runtime genesis config. The patch shall be merged (rfc7386) with the JSON representation
     * of the default `RuntimeGenesisConfig` to create a comprehensive genesis config that can
     * be used in `build_state` method.
     *
     * @callname: GenesisBuilder_get_preset
     * @param {string | undefined} id
     **/
    getPreset: GenericRuntimeApiMethod<Rv, (id?: string | undefined) => Promise<Bytes | undefined>>;

    /**
     * Returns a list of identifiers for available builtin `RuntimeGenesisConfig` presets.
     *
     * The presets from the list can be queried with [`GenesisBuilder::get_preset`] method. If
     * no named presets are provided by the runtime the list is empty.
     *
     * @callname: GenesisBuilder_preset_names
     **/
    presetNames: GenericRuntimeApiMethod<Rv, () => Promise<Array<string>>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: Core - 0xdf6acb689907609b
   **/
  core: {
    /**
     * Returns the version of the runtime.
     *
     * @callname: Core_version
     **/
    version: GenericRuntimeApiMethod<Rv, () => Promise<RuntimeVersion>>;

    /**
     * Execute the given block.
     *
     * @callname: Core_execute_block
     * @param {SpRuntimeBlock} block
     **/
    executeBlock: GenericRuntimeApiMethod<Rv, (block: SpRuntimeBlock) => Promise<[]>>;

    /**
     * Initialize a block with the given header and return the runtime executive mode.
     *
     * @callname: Core_initialize_block
     * @param {Header} header
     **/
    initializeBlock: GenericRuntimeApiMethod<Rv, (header: Header) => Promise<SpRuntimeExtrinsicInclusionMode>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: Metadata - 0x37e397fc7c91f5e4
   **/
  metadata: {
    /**
     * Returns the metadata of a runtime.
     *
     * @callname: Metadata_metadata
     **/
    metadata: GenericRuntimeApiMethod<Rv, () => Promise<SpCoreOpaqueMetadata>>;

    /**
     * Returns the metadata at a given version.
     *
     * If the given `version` isn't supported, this will return `None`.
     * Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
     *
     * @callname: Metadata_metadata_at_version
     * @param {number} version
     **/
    metadataAtVersion: GenericRuntimeApiMethod<Rv, (version: number) => Promise<SpCoreOpaqueMetadata | undefined>>;

    /**
     * Returns the supported metadata versions.
     *
     * This can be used to call `metadata_at_version`.
     *
     * @callname: Metadata_metadata_versions
     **/
    metadataVersions: GenericRuntimeApiMethod<Rv, () => Promise<Array<number>>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: BlockBuilder - 0x40fe3ad401f8959a
   **/
  blockBuilder: {
    /**
     * Apply the given extrinsic.
     *
     * Returns an inclusion outcome which specifies if this extrinsic is included in
     * this block or not.
     *
     * @callname: BlockBuilder_apply_extrinsic
     * @param {UncheckedExtrinsicLike} extrinsic
     **/
    applyExtrinsic: GenericRuntimeApiMethod<
      Rv,
      (
        extrinsic: UncheckedExtrinsicLike,
      ) => Promise<Result<Result<[], DispatchError>, SpRuntimeTransactionValidityTransactionValidityError>>
    >;

    /**
     * Finish the current block.
     *
     * @callname: BlockBuilder_finalize_block
     **/
    finalizeBlock: GenericRuntimeApiMethod<Rv, () => Promise<Header>>;

    /**
     * Generate inherent extrinsics. The inherent data will vary from chain to chain.
     *
     * @callname: BlockBuilder_inherent_extrinsics
     * @param {SpInherentsInherentData} inherent
     **/
    inherentExtrinsics: GenericRuntimeApiMethod<
      Rv,
      (inherent: SpInherentsInherentData) => Promise<Array<UncheckedExtrinsic>>
    >;

    /**
     * Check that the inherents are valid. The inherent data will vary from chain to chain.
     *
     * @callname: BlockBuilder_check_inherents
     * @param {SpRuntimeBlock} block
     * @param {SpInherentsInherentData} data
     **/
    checkInherents: GenericRuntimeApiMethod<
      Rv,
      (block: SpRuntimeBlock, data: SpInherentsInherentData) => Promise<SpInherentsCheckInherentsResult>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: TaggedTransactionQueue - 0xd2bc9897eed08f15
   **/
  taggedTransactionQueue: {
    /**
     * Validate the transaction.
     *
     * This method is invoked by the transaction pool to learn details about given transaction.
     * The implementation should make sure to verify the correctness of the transaction
     * against current state. The given `block_hash` corresponds to the hash of the block
     * that is used as current state.
     *
     * Note that this call may be performed by the pool multiple times and transactions
     * might be verified in any possible order.
     *
     * @callname: TaggedTransactionQueue_validate_transaction
     * @param {SpRuntimeTransactionValidityTransactionSource} source
     * @param {UncheckedExtrinsicLike} tx
     * @param {H256} block_hash
     **/
    validateTransaction: GenericRuntimeApiMethod<
      Rv,
      (
        source: SpRuntimeTransactionValidityTransactionSource,
        tx: UncheckedExtrinsicLike,
        blockHash: H256,
      ) => Promise<
        Result<SpRuntimeTransactionValidityValidTransaction, SpRuntimeTransactionValidityTransactionValidityError>
      >
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: OffchainWorkerApi - 0xf78b278be53f454c
   **/
  offchainWorkerApi: {
    /**
     * Starts the off-chain task for given block header.
     *
     * @callname: OffchainWorkerApi_offchain_worker
     * @param {Header} header
     **/
    offchainWorker: GenericRuntimeApiMethod<Rv, (header: Header) => Promise<[]>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: SessionKeys - 0xab3c0572291feb8b
   **/
  sessionKeys: {
    /**
     * Generate a set of session keys with optionally using the given seed.
     * The keys should be stored within the keystore exposed via runtime
     * externalities.
     *
     * The seed needs to be a valid `utf8` string.
     *
     * Returns the concatenated SCALE encoded public keys.
     *
     * @callname: SessionKeys_generate_session_keys
     * @param {BytesLike | undefined} seed
     **/
    generateSessionKeys: GenericRuntimeApiMethod<Rv, (seed?: BytesLike | undefined) => Promise<Bytes>>;

    /**
     * Decode the given public session keys.
     *
     * Returns the list of public raw public keys + key type.
     *
     * @callname: SessionKeys_decode_session_keys
     * @param {BytesLike} encoded
     **/
    decodeSessionKeys: GenericRuntimeApiMethod<
      Rv,
      (encoded: BytesLike) => Promise<Array<[Bytes, SpCoreCryptoKeyTypeId]> | undefined>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: GrandpaApi - 0xed99c5acb25eedf5
   **/
  grandpaApi: {
    /**
     * Get the current GRANDPA authorities and weights. This should not change except
     * for when changes are scheduled and the corresponding delay has passed.
     *
     * When called at block B, it will return the set of authorities that should be
     * used to finalize descendants of this block (B+1, B+2, ...). The block B itself
     * is finalized by the authorities from block B-1.
     *
     * @callname: GrandpaApi_grandpa_authorities
     **/
    grandpaAuthorities: GenericRuntimeApiMethod<Rv, () => Promise<Array<[SpConsensusGrandpaAppPublic, bigint]>>>;

    /**
     * Submits an unsigned extrinsic to report an equivocation. The caller
     * must provide the equivocation proof and a key ownership proof
     * (should be obtained using `generate_key_ownership_proof`). The
     * extrinsic will be unsigned and should only be accepted for local
     * authorship (not to be broadcast to the network). This method returns
     * `None` when creation of the extrinsic fails, e.g. if equivocation
     * reporting is disabled for the given runtime (i.e. this method is
     * hardcoded to return `None`). Only useful in an offchain context.
     *
     * @callname: GrandpaApi_submit_report_equivocation_unsigned_extrinsic
     * @param {SpConsensusGrandpaEquivocationProof} equivocation_proof
     * @param {SpRuntimeOpaqueValue} key_owner_proof
     **/
    submitReportEquivocationUnsignedExtrinsic: GenericRuntimeApiMethod<
      Rv,
      (
        equivocationProof: SpConsensusGrandpaEquivocationProof,
        keyOwnerProof: SpRuntimeOpaqueValue,
      ) => Promise<[] | undefined>
    >;

    /**
     * Generates a proof of key ownership for the given authority in the
     * given set. An example usage of this module is coupled with the
     * session historical module to prove that a given authority key is
     * tied to a given staking identity during a specific session. Proofs
     * of key ownership are necessary for submitting equivocation reports.
     * NOTE: even though the API takes a `set_id` as parameter the current
     * implementations ignore this parameter and instead rely on this
     * method being called at the correct block height, i.e. any point at
     * which the given set id is live on-chain. Future implementations will
     * instead use indexed data through an offchain worker, not requiring
     * older states to be available.
     *
     * @callname: GrandpaApi_generate_key_ownership_proof
     * @param {bigint} set_id
     * @param {SpConsensusGrandpaAppPublic} authority_id
     **/
    generateKeyOwnershipProof: GenericRuntimeApiMethod<
      Rv,
      (setId: bigint, authorityId: SpConsensusGrandpaAppPublic) => Promise<SpRuntimeOpaqueValue | undefined>
    >;

    /**
     * Get current GRANDPA authority set id.
     *
     * @callname: GrandpaApi_current_set_id
     **/
    currentSetId: GenericRuntimeApiMethod<Rv, () => Promise<bigint>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: AccountNonceApi - 0xbc9d89904f5b923f
   **/
  accountNonceApi: {
    /**
     * Get current account nonce of given `AccountId`.
     *
     * @callname: AccountNonceApi_account_nonce
     * @param {AccountId32Like} account
     **/
    accountNonce: GenericRuntimeApiMethod<Rv, (account: AccountId32Like) => Promise<number>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: TransactionPaymentApi - 0x37c8bb1350a9a2a8
   **/
  transactionPaymentApi: {
    /**
     *
     * @callname: TransactionPaymentApi_query_info
     * @param {UncheckedExtrinsicLike} uxt
     * @param {number} len
     **/
    queryInfo: GenericRuntimeApiMethod<
      Rv,
      (uxt: UncheckedExtrinsicLike, len: number) => Promise<PalletTransactionPaymentRuntimeDispatchInfo>
    >;

    /**
     *
     * @callname: TransactionPaymentApi_query_fee_details
     * @param {UncheckedExtrinsicLike} uxt
     * @param {number} len
     **/
    queryFeeDetails: GenericRuntimeApiMethod<
      Rv,
      (uxt: UncheckedExtrinsicLike, len: number) => Promise<PalletTransactionPaymentFeeDetails>
    >;

    /**
     *
     * @callname: TransactionPaymentApi_query_weight_to_fee
     * @param {SpWeightsWeightV2Weight} weight
     **/
    queryWeightToFee: GenericRuntimeApiMethod<Rv, (weight: SpWeightsWeightV2Weight) => Promise<bigint>>;

    /**
     *
     * @callname: TransactionPaymentApi_query_length_to_fee
     * @param {number} length
     **/
    queryLengthToFee: GenericRuntimeApiMethod<Rv, (length: number) => Promise<bigint>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: GearApi - 0xff8dc88037f26223
   **/
  gearApi: {
    /**
     *
     * @callname: GearApi_calculate_reply_for_handle
     * @param {H256} origin
     * @param {H256} destination
     * @param {BytesLike} payload
     * @param {bigint} gas_limit
     * @param {bigint} value
     * @param {bigint} allowance_multiplier
     **/
    calculateReplyForHandle: GenericRuntimeApiMethod<
      Rv,
      (
        origin: H256,
        destination: H256,
        payload: BytesLike,
        gasLimit: bigint,
        value: bigint,
        allowanceMultiplier: bigint,
      ) => Promise<Result<GearCoreMessageReplyInfo, Bytes>>
    >;

    /**
     *
     * @callname: GearApi_calculate_gas_info
     * @param {H256} source
     * @param {PalletGearManagerHandleKind} kind
     * @param {BytesLike} payload
     * @param {bigint} value
     * @param {boolean} allow_other_panics
     * @param {bigint | undefined} initial_gas
     * @param {bigint | undefined} allowance_multiplier
     **/
    calculateGasInfo: GenericRuntimeApiMethod<
      Rv,
      (
        source: H256,
        kind: PalletGearManagerHandleKind,
        payload: BytesLike,
        value: bigint,
        allowOtherPanics: boolean,
        initialGas?: bigint | undefined,
        allowanceMultiplier?: bigint | undefined,
      ) => Promise<Result<GearCoreGasGasInfo, Bytes>>
    >;

    /**
     * Generate inherent-like extrinsic that runs message queue processing.
     *
     * @callname: GearApi_gear_run_extrinsic
     * @param {bigint | undefined} max_gas
     **/
    gearRunExtrinsic: GenericRuntimeApiMethod<Rv, (maxGas?: bigint | undefined) => Promise<UncheckedExtrinsic>>;

    /**
     *
     * @callname: GearApi_read_state
     * @param {H256} program_id
     * @param {BytesLike} payload
     * @param {bigint | undefined} allowance_multiplier
     **/
    readState: GenericRuntimeApiMethod<
      Rv,
      (programId: H256, payload: BytesLike, allowanceMultiplier?: bigint | undefined) => Promise<Result<Bytes, Bytes>>
    >;

    /**
     *
     * @callname: GearApi_read_state_using_wasm
     * @param {H256} program_id
     * @param {BytesLike} payload
     * @param {BytesLike} fn_name
     * @param {BytesLike} wasm
     * @param {BytesLike | undefined} argument
     * @param {bigint | undefined} allowance_multiplier
     **/
    readStateUsingWasm: GenericRuntimeApiMethod<
      Rv,
      (
        programId: H256,
        payload: BytesLike,
        fnName: BytesLike,
        wasm: BytesLike,
        argument?: BytesLike | undefined,
        allowanceMultiplier?: bigint | undefined,
      ) => Promise<Result<Bytes, Bytes>>
    >;

    /**
     *
     * @callname: GearApi_read_metahash
     * @param {H256} program_id
     * @param {bigint | undefined} allowance_multiplier
     **/
    readMetahash: GenericRuntimeApiMethod<
      Rv,
      (programId: H256, allowanceMultiplier?: bigint | undefined) => Promise<Result<H256, Bytes>>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
}
