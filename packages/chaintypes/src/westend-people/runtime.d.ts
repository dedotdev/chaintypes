// Generated by dedot cli

import type { GenericRuntimeApis, GenericRuntimeApiMethod, RpcVersion } from 'dedot/types';
import type {
  H256,
  RuntimeVersion,
  Header,
  DispatchError,
  Result,
  UncheckedExtrinsicLike,
  UncheckedExtrinsic,
  Bytes,
  BytesLike,
  AccountId32Like,
  AccountId32,
} from 'dedot/codecs';
import type {
  SpConsensusSlotsSlotDuration,
  SpConsensusAuraSr25519AppSr25519Public,
  SpConsensusSlotsSlot,
  SpRuntimeBlock,
  SpRuntimeExtrinsicInclusionMode,
  SpCoreOpaqueMetadata,
  SpRuntimeTransactionValidityTransactionValidityError,
  SpInherentsInherentData,
  SpInherentsCheckInherentsResult,
  SpRuntimeTransactionValidityValidTransaction,
  SpRuntimeTransactionValidityTransactionSource,
  SpCoreCryptoKeyTypeId,
  PalletTransactionPaymentRuntimeDispatchInfo,
  PalletTransactionPaymentFeeDetails,
  SpWeightsWeightV2Weight,
  PeopleWestendRuntimeRuntimeCallLike,
  XcmVersionedAssetId,
  XcmRuntimeApisFeesError,
  XcmVersionedXcm,
  XcmVersionedAssets,
  XcmVersionedLocation,
  XcmRuntimeApisDryRunCallDryRunEffects,
  XcmRuntimeApisDryRunError,
  PeopleWestendRuntimeOriginCaller,
  XcmRuntimeApisDryRunXcmDryRunEffects,
  XcmRuntimeApisConversionsError,
  CumulusPrimitivesCoreCollationInfo,
  PolkadotPrimitivesVstagingCoreSelector,
  PolkadotPrimitivesVstagingClaimQueueOffset,
  XcmRuntimeApisTrustedQueryError,
  XcmVersionedAsset,
} from './types.js';

export interface RuntimeApis<Rv extends RpcVersion> extends GenericRuntimeApis<Rv> {
  /**
   * @runtimeapi: AuraApi - 0xdd718d5cc53262d4
   **/
  auraApi: {
    /**
     * Returns the slot duration for Aura.
     *
     * Currently, only the value provided by this type at genesis will be used.
     *
     * @callname: AuraApi_slot_duration
     **/
    slotDuration: GenericRuntimeApiMethod<Rv, () => Promise<SpConsensusSlotsSlotDuration>>;

    /**
     * Return the current set of authorities.
     *
     * @callname: AuraApi_authorities
     **/
    authorities: GenericRuntimeApiMethod<Rv, () => Promise<Array<SpConsensusAuraSr25519AppSr25519Public>>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: AuraUnincludedSegmentApi - 0xd7bdd8a272ca0d65
   **/
  auraUnincludedSegmentApi: {
    /**
     * Whether it is legal to extend the chain, assuming the given block is the most
     * recently included one as-of the relay parent that will be built against, and
     * the given relay chain slot.
     *
     * This should be consistent with the logic the runtime uses when validating blocks to
     * avoid issues.
     *
     * When the unincluded segment is empty, i.e. `included_hash == at`, where at is the block
     * whose state we are querying against, this must always return `true` as long as the slot
     * is more recent than the included block itself.
     *
     * @callname: AuraUnincludedSegmentApi_can_build_upon
     * @param {H256} included_hash
     * @param {SpConsensusSlotsSlot} slot
     **/
    canBuildUpon: GenericRuntimeApiMethod<Rv, (includedHash: H256, slot: SpConsensusSlotsSlot) => Promise<boolean>>;

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
   * @runtimeapi: TransactionPaymentCallApi - 0xf3ff14d5ab527059
   **/
  transactionPaymentCallApi: {
    /**
     * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
     *
     * @callname: TransactionPaymentCallApi_query_call_info
     * @param {PeopleWestendRuntimeRuntimeCallLike} call
     * @param {number} len
     **/
    queryCallInfo: GenericRuntimeApiMethod<
      Rv,
      (call: PeopleWestendRuntimeRuntimeCallLike, len: number) => Promise<PalletTransactionPaymentRuntimeDispatchInfo>
    >;

    /**
     * Query fee details of a given encoded `Call`.
     *
     * @callname: TransactionPaymentCallApi_query_call_fee_details
     * @param {PeopleWestendRuntimeRuntimeCallLike} call
     * @param {number} len
     **/
    queryCallFeeDetails: GenericRuntimeApiMethod<
      Rv,
      (call: PeopleWestendRuntimeRuntimeCallLike, len: number) => Promise<PalletTransactionPaymentFeeDetails>
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
   * @runtimeapi: XcmPaymentApi - 0x6ff52ee858e6c5bd
   **/
  xcmPaymentApi: {
    /**
     * Returns a list of acceptable payment assets.
     *
     * # Arguments
     *
     * * `xcm_version`: Version.
     *
     * @callname: XcmPaymentApi_query_acceptable_payment_assets
     * @param {number} xcm_version
     **/
    queryAcceptablePaymentAssets: GenericRuntimeApiMethod<
      Rv,
      (xcmVersion: number) => Promise<Result<Array<XcmVersionedAssetId>, XcmRuntimeApisFeesError>>
    >;

    /**
     * Returns a weight needed to execute a XCM.
     *
     * # Arguments
     *
     * * `message`: `VersionedXcm`.
     *
     * @callname: XcmPaymentApi_query_xcm_weight
     * @param {XcmVersionedXcm} message
     **/
    queryXcmWeight: GenericRuntimeApiMethod<
      Rv,
      (message: XcmVersionedXcm) => Promise<Result<SpWeightsWeightV2Weight, XcmRuntimeApisFeesError>>
    >;

    /**
     * Converts a weight into a fee for the specified `AssetId`.
     *
     * # Arguments
     *
     * * `weight`: convertible `Weight`.
     * * `asset`: `VersionedAssetId`.
     *
     * @callname: XcmPaymentApi_query_weight_to_asset_fee
     * @param {SpWeightsWeightV2Weight} weight
     * @param {XcmVersionedAssetId} asset
     **/
    queryWeightToAssetFee: GenericRuntimeApiMethod<
      Rv,
      (weight: SpWeightsWeightV2Weight, asset: XcmVersionedAssetId) => Promise<Result<bigint, XcmRuntimeApisFeesError>>
    >;

    /**
     * Get delivery fees for sending a specific `message` to a `destination`.
     * These always come in a specific asset, defined by the chain.
     *
     * # Arguments
     * * `message`: The message that'll be sent, necessary because most delivery fees are based on the
     * size of the message.
     * * `destination`: The destination to send the message to. Different destinations may use
     * different senders that charge different fees.
     *
     * @callname: XcmPaymentApi_query_delivery_fees
     * @param {XcmVersionedLocation} destination
     * @param {XcmVersionedXcm} message
     **/
    queryDeliveryFees: GenericRuntimeApiMethod<
      Rv,
      (
        destination: XcmVersionedLocation,
        message: XcmVersionedXcm,
      ) => Promise<Result<XcmVersionedAssets, XcmRuntimeApisFeesError>>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: DryRunApi - 0x91b1c8b16328eb92
   **/
  dryRunApi: {
    /**
     * Dry run call V2.
     *
     * @callname: DryRunApi_dry_run_call
     * @param {PeopleWestendRuntimeOriginCaller} origin
     * @param {PeopleWestendRuntimeRuntimeCallLike} call
     * @param {number} result_xcms_version
     **/
    dryRunCall: GenericRuntimeApiMethod<
      Rv,
      (
        origin: PeopleWestendRuntimeOriginCaller,
        call: PeopleWestendRuntimeRuntimeCallLike,
        resultXcmsVersion: number,
      ) => Promise<Result<XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError>>
    >;

    /**
     * Dry run XCM program
     *
     * @callname: DryRunApi_dry_run_xcm
     * @param {XcmVersionedLocation} origin_location
     * @param {XcmVersionedXcm} xcm
     **/
    dryRunXcm: GenericRuntimeApiMethod<
      Rv,
      (
        originLocation: XcmVersionedLocation,
        xcm: XcmVersionedXcm,
      ) => Promise<Result<XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisDryRunError>>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: LocationToAccountApi - 0x9ffb505aa738d69c
   **/
  locationToAccountApi: {
    /**
     * Converts `Location` to `AccountId`.
     *
     * @callname: LocationToAccountApi_convert_location
     * @param {XcmVersionedLocation} location
     **/
    convertLocation: GenericRuntimeApiMethod<
      Rv,
      (location: XcmVersionedLocation) => Promise<Result<AccountId32, XcmRuntimeApisConversionsError>>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: CollectCollationInfo - 0xea93e3f16f3d6962
   **/
  collectCollationInfo: {
    /**
     * Collect information about a collation.
     *
     * The given `header` is the header of the built block for that
     * we are collecting the collation info for.
     *
     * @callname: CollectCollationInfo_collect_collation_info
     * @param {Header} header
     **/
    collectCollationInfo: GenericRuntimeApiMethod<Rv, (header: Header) => Promise<CumulusPrimitivesCoreCollationInfo>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: GetCoreSelectorApi - 0x695c80446b8b3d4e
   **/
  getCoreSelectorApi: {
    /**
     * Retrieve core selector and claim queue offset for the next block.
     *
     * @callname: GetCoreSelectorApi_core_selector
     **/
    coreSelector: GenericRuntimeApiMethod<
      Rv,
      () => Promise<[PolkadotPrimitivesVstagingCoreSelector, PolkadotPrimitivesVstagingClaimQueueOffset]>
    >;

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
     * In the case of a FRAME-based runtime, this function deserializes the full
     * `RuntimeGenesisConfig` from the given JSON blob and puts it into the storage. If the
     * provided JSON blob is incorrect or incomplete or the deserialization fails, an error
     * is returned.
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
     * If `id` is `None` the function should return JSON blob representation of the default
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
   * @runtimeapi: TrustedQueryApi - 0x2609be83ac4468dc
   **/
  trustedQueryApi: {
    /**
     * Returns if the location is a trusted reserve for the asset.
     *
     * # Arguments
     * * `asset`: `VersionedAsset`.
     * * `location`: `VersionedLocation`.
     *
     * @callname: TrustedQueryApi_is_trusted_reserve
     * @param {XcmVersionedAsset} asset
     * @param {XcmVersionedLocation} location
     **/
    isTrustedReserve: GenericRuntimeApiMethod<
      Rv,
      (
        asset: XcmVersionedAsset,
        location: XcmVersionedLocation,
      ) => Promise<Result<boolean, XcmRuntimeApisTrustedQueryError>>
    >;

    /**
     * Returns if the asset can be teleported to the location.
     *
     * # Arguments
     * * `asset`: `VersionedAsset`.
     * * `location`: `VersionedLocation`.
     *
     * @callname: TrustedQueryApi_is_trusted_teleporter
     * @param {XcmVersionedAsset} asset
     * @param {XcmVersionedLocation} location
     **/
    isTrustedTeleporter: GenericRuntimeApiMethod<
      Rv,
      (
        asset: XcmVersionedAsset,
        location: XcmVersionedLocation,
      ) => Promise<Result<boolean, XcmRuntimeApisTrustedQueryError>>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
}
