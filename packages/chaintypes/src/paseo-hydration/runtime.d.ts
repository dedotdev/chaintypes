// Generated by dedot cli

import type { GenericRuntimeApis, GenericRuntimeApiMethod, RpcVersion } from 'dedot/types';
import type {
  RuntimeVersion,
  Header,
  DispatchError,
  Result,
  H256,
  Bytes,
  BytesLike,
  AccountId32Like,
  H160,
  U256,
  Permill,
  AccountId32,
  FixedBytes,
} from 'dedot/codecs';
import type {
  SpRuntimeBlock,
  SpRuntimeExtrinsicInclusionMode,
  SpCoreOpaqueMetadata,
  SpRuntimeTransactionValidityTransactionValidityError,
  FpSelfContainedUncheckedExtrinsic,
  SpInherentsInherentData,
  SpInherentsCheckInherentsResult,
  SpRuntimeTransactionValidityValidTransaction,
  SpRuntimeTransactionValidityTransactionSource,
  SpCoreCryptoKeyTypeId,
  SpConsensusSlotsSlotDuration,
  SpConsensusAuraSr25519AppSr25519Public,
  CumulusPrimitivesCoreCollationInfo,
  PalletCurrenciesRpcRuntimeApiAccountData,
  PalletTransactionPaymentRuntimeDispatchInfo,
  PalletTransactionPaymentFeeDetails,
  SpWeightsWeightV2Weight,
  EvmBackendBasic,
  FpEvmExecutionInfoV2,
  FpEvmExecutionInfoV2H160,
  EthereumBlock,
  EthereumReceiptReceiptV3,
  FpRpcTransactionStatus,
  EthereumTransactionTransactionV2,
  XcmVersionedAssetId,
  XcmRuntimeApisFeesError,
  XcmVersionedXcm,
  XcmVersionedAssets,
  XcmVersionedLocation,
  SpConsensusSlotsSlot,
  XcmRuntimeApisDryRunCallDryRunEffects,
  XcmRuntimeApisDryRunError,
  HydradxRuntimeOriginCaller,
  HydradxRuntimeRuntimeCallLike,
  XcmRuntimeApisDryRunXcmDryRunEffects,
  XcmRuntimeApisConversionsError,
  HydradxTraitsOracleOraclePeriod,
  HydradxRuntimeEvmAaveTradeExecutorPoolData,
} from './types.js';

export interface RuntimeApis<Rv extends RpcVersion> extends GenericRuntimeApis<Rv> {
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
     * @param {FpSelfContainedUncheckedExtrinsic} extrinsic
     **/
    applyExtrinsic: GenericRuntimeApiMethod<
      Rv,
      (
        extrinsic: FpSelfContainedUncheckedExtrinsic,
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
      (inherent: SpInherentsInherentData) => Promise<Array<FpSelfContainedUncheckedExtrinsic>>
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
     * @param {FpSelfContainedUncheckedExtrinsic} tx
     * @param {H256} block_hash
     **/
    validateTransaction: GenericRuntimeApiMethod<
      Rv,
      (
        source: SpRuntimeTransactionValidityTransactionSource,
        tx: FpSelfContainedUncheckedExtrinsic,
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
   * @runtimeapi: CurrenciesApi - 0x9af86751b70c112d
   **/
  currenciesApi: {
    /**
     *
     * @callname: CurrenciesApi_account
     * @param {number} asset_id
     * @param {AccountId32Like} who
     **/
    account: GenericRuntimeApiMethod<
      Rv,
      (assetId: number, who: AccountId32Like) => Promise<PalletCurrenciesRpcRuntimeApiAccountData>
    >;

    /**
     *
     * @callname: CurrenciesApi_accounts
     * @param {AccountId32Like} who
     **/
    accounts: GenericRuntimeApiMethod<
      Rv,
      (who: AccountId32Like) => Promise<Array<[number, PalletCurrenciesRpcRuntimeApiAccountData]>>
    >;

    /**
     *
     * @callname: CurrenciesApi_free_balance
     * @param {number} asset_id
     * @param {AccountId32Like} who
     **/
    freeBalance: GenericRuntimeApiMethod<Rv, (assetId: number, who: AccountId32Like) => Promise<bigint>>;

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
     * @param {FpSelfContainedUncheckedExtrinsic} uxt
     * @param {number} len
     **/
    queryInfo: GenericRuntimeApiMethod<
      Rv,
      (uxt: FpSelfContainedUncheckedExtrinsic, len: number) => Promise<PalletTransactionPaymentRuntimeDispatchInfo>
    >;

    /**
     *
     * @callname: TransactionPaymentApi_query_fee_details
     * @param {FpSelfContainedUncheckedExtrinsic} uxt
     * @param {number} len
     **/
    queryFeeDetails: GenericRuntimeApiMethod<
      Rv,
      (uxt: FpSelfContainedUncheckedExtrinsic, len: number) => Promise<PalletTransactionPaymentFeeDetails>
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
   * @runtimeapi: EthereumRuntimeRPCApi - 0x582211f65bb14b89
   **/
  ethereumRuntimeRPCApi: {
    /**
     * Returns runtime defined pallet_evm::ChainId.
     *
     * @callname: EthereumRuntimeRPCApi_chain_id
     **/
    chainId: GenericRuntimeApiMethod<Rv, () => Promise<bigint>>;

    /**
     * Returns pallet_evm::Accounts by address.
     *
     * @callname: EthereumRuntimeRPCApi_account_basic
     * @param {H160} address
     **/
    accountBasic: GenericRuntimeApiMethod<Rv, (address: H160) => Promise<EvmBackendBasic>>;

    /**
     * Returns FixedGasPrice::min_gas_price
     *
     * @callname: EthereumRuntimeRPCApi_gas_price
     **/
    gasPrice: GenericRuntimeApiMethod<Rv, () => Promise<U256>>;

    /**
     * For a given account address, returns pallet_evm::AccountCodes.
     *
     * @callname: EthereumRuntimeRPCApi_account_code_at
     * @param {H160} address
     **/
    accountCodeAt: GenericRuntimeApiMethod<Rv, (address: H160) => Promise<Bytes>>;

    /**
     * Returns the converted FindAuthor::find_author authority id.
     *
     * @callname: EthereumRuntimeRPCApi_author
     **/
    author: GenericRuntimeApiMethod<Rv, () => Promise<H160>>;

    /**
     * For a given account address and index, returns pallet_evm::AccountStorages.
     *
     * @callname: EthereumRuntimeRPCApi_storage_at
     * @param {H160} address
     * @param {U256} index
     **/
    storageAt: GenericRuntimeApiMethod<Rv, (address: H160, index: U256) => Promise<H256>>;

    /**
     *
     * @callname: EthereumRuntimeRPCApi_call
     * @param {H160} from
     * @param {H160} to
     * @param {BytesLike} data
     * @param {U256} value
     * @param {U256} gas_limit
     * @param {U256 | undefined} max_fee_per_gas
     * @param {U256 | undefined} max_priority_fee_per_gas
     * @param {U256 | undefined} nonce
     * @param {boolean} estimate
     * @param {Array<[H160, Array<H256>]> | undefined} access_list
     **/
    call: GenericRuntimeApiMethod<
      Rv,
      (
        from: H160,
        to: H160,
        data: BytesLike,
        value: U256,
        gasLimit: U256,
        maxFeePerGas: U256 | undefined,
        maxPriorityFeePerGas: U256 | undefined,
        nonce: U256 | undefined,
        estimate: boolean,
        accessList?: Array<[H160, Array<H256>]> | undefined,
      ) => Promise<Result<FpEvmExecutionInfoV2, DispatchError>>
    >;

    /**
     *
     * @callname: EthereumRuntimeRPCApi_create
     * @param {H160} from
     * @param {BytesLike} data
     * @param {U256} value
     * @param {U256} gas_limit
     * @param {U256 | undefined} max_fee_per_gas
     * @param {U256 | undefined} max_priority_fee_per_gas
     * @param {U256 | undefined} nonce
     * @param {boolean} estimate
     * @param {Array<[H160, Array<H256>]> | undefined} access_list
     **/
    create: GenericRuntimeApiMethod<
      Rv,
      (
        from: H160,
        data: BytesLike,
        value: U256,
        gasLimit: U256,
        maxFeePerGas: U256 | undefined,
        maxPriorityFeePerGas: U256 | undefined,
        nonce: U256 | undefined,
        estimate: boolean,
        accessList?: Array<[H160, Array<H256>]> | undefined,
      ) => Promise<Result<FpEvmExecutionInfoV2H160, DispatchError>>
    >;

    /**
     * Return the current block.
     *
     * @callname: EthereumRuntimeRPCApi_current_block
     **/
    currentBlock: GenericRuntimeApiMethod<Rv, () => Promise<EthereumBlock | undefined>>;

    /**
     * Return the current receipt.
     *
     * @callname: EthereumRuntimeRPCApi_current_receipts
     **/
    currentReceipts: GenericRuntimeApiMethod<Rv, () => Promise<Array<EthereumReceiptReceiptV3> | undefined>>;

    /**
     * Return the current transaction status.
     *
     * @callname: EthereumRuntimeRPCApi_current_transaction_statuses
     **/
    currentTransactionStatuses: GenericRuntimeApiMethod<Rv, () => Promise<Array<FpRpcTransactionStatus> | undefined>>;

    /**
     *
     * @callname: EthereumRuntimeRPCApi_current_all
     **/
    currentAll: GenericRuntimeApiMethod<
      Rv,
      () => Promise<
        [
          EthereumBlock | undefined,
          Array<EthereumReceiptReceiptV3> | undefined,
          Array<FpRpcTransactionStatus> | undefined,
        ]
      >
    >;

    /**
     * Receives a `Vec<OpaqueExtrinsic>` and filters all the ethereum transactions.
     *
     * @callname: EthereumRuntimeRPCApi_extrinsic_filter
     * @param {Array<FpSelfContainedUncheckedExtrinsic>} xts
     **/
    extrinsicFilter: GenericRuntimeApiMethod<
      Rv,
      (xts: Array<FpSelfContainedUncheckedExtrinsic>) => Promise<Array<EthereumTransactionTransactionV2>>
    >;

    /**
     * Return the elasticity multiplier.
     *
     * @callname: EthereumRuntimeRPCApi_elasticity
     **/
    elasticity: GenericRuntimeApiMethod<Rv, () => Promise<Permill | undefined>>;

    /**
     * Used to determine if gas limit multiplier for non-transactional calls (eth_call/estimateGas)
     * is supported.
     *
     * @callname: EthereumRuntimeRPCApi_gas_limit_multiplier_support
     **/
    gasLimitMultiplierSupport: GenericRuntimeApiMethod<Rv, () => Promise<[]>>;

    /**
     * Return the pending block.
     *
     * @callname: EthereumRuntimeRPCApi_pending_block
     * @param {Array<FpSelfContainedUncheckedExtrinsic>} xts
     **/
    pendingBlock: GenericRuntimeApiMethod<
      Rv,
      (
        xts: Array<FpSelfContainedUncheckedExtrinsic>,
      ) => Promise<[EthereumBlock | undefined, Array<FpRpcTransactionStatus> | undefined]>
    >;

    /**
     * Initialize the pending block.
     * The behavior should be the same as the runtime api Core_initialize_block but
     * for a "pending" block.
     * If your project don't need to have a different behavior to initialize "pending" blocks,
     * you can copy your Core_initialize_block implementation.
     *
     * @callname: EthereumRuntimeRPCApi_initialize_pending_block
     * @param {Header} header
     **/
    initializePendingBlock: GenericRuntimeApiMethod<Rv, (header: Header) => Promise<[]>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: ConvertTransactionRuntimeApi - 0xe65b00e46cedd0aa
   **/
  convertTransactionRuntimeApi: {
    /**
     *
     * @callname: ConvertTransactionRuntimeApi_convert_transaction
     * @param {EthereumTransactionTransactionV2} transaction
     **/
    convertTransaction: GenericRuntimeApiMethod<
      Rv,
      (transaction: EthereumTransactionTransactionV2) => Promise<FpSelfContainedUncheckedExtrinsic>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: EvmAccountsApi - 0x0bb67a52fcd040ff
   **/
  evmAccountsApi: {
    /**
     * get the EVM address from the substrate address.
     *
     * @callname: EvmAccountsApi_evm_address
     * @param {AccountId32Like} account_id
     **/
    evmAddress: GenericRuntimeApiMethod<Rv, (accountId: AccountId32Like) => Promise<H160>>;

    /**
     * Return the Substrate address bound to the EVM account. If not bound, returns `None`.
     *
     * @callname: EvmAccountsApi_bound_account_id
     * @param {H160} evm_address
     **/
    boundAccountId: GenericRuntimeApiMethod<Rv, (evmAddress: H160) => Promise<AccountId32 | undefined>>;

    /**
     * Get the Substrate address from the EVM address.
     * Returns the truncated version of the address if the address wasn't bind.
     *
     * @callname: EvmAccountsApi_account_id
     * @param {H160} evm_address
     **/
    accountId: GenericRuntimeApiMethod<Rv, (evmAddress: H160) => Promise<AccountId32>>;

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
   * @runtimeapi: AuraUnincludedSegmentApi - 0xd7bdd8a272ca0d65
   **/
  auraUnincludedSegmentApi: {
    /**
     * Whether it is legal to extend the chain, assuming the given block is the most
     * recently included one as-of the relay parent that will be built against, and
     * the given slot.
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
   * @runtimeapi: DryRunApi - 0x91b1c8b16328eb92
   **/
  dryRunApi: {
    /**
     * Dry run call.
     *
     * @callname: DryRunApi_dry_run_call
     * @param {HydradxRuntimeOriginCaller} origin
     * @param {HydradxRuntimeRuntimeCallLike} call
     **/
    dryRunCall: GenericRuntimeApiMethod<
      Rv,
      (
        origin: HydradxRuntimeOriginCaller,
        call: HydradxRuntimeRuntimeCallLike,
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
   * @runtimeapi: ChainlinkAdapterApi - 0x2b5f5bcd2460e4f0
   **/
  chainlinkAdapterApi: {
    /**
     *
     * @callname: ChainlinkAdapterApi_encode_oracle_address
     * @param {number} asset_id_a
     * @param {number} asset_id_b
     * @param {HydradxTraitsOracleOraclePeriod} period
     * @param {FixedBytes<8>} source
     **/
    encodeOracleAddress: GenericRuntimeApiMethod<
      Rv,
      (
        assetIdA: number,
        assetIdB: number,
        period: HydradxTraitsOracleOraclePeriod,
        source: FixedBytes<8>,
      ) => Promise<H160>
    >;

    /**
     *
     * @callname: ChainlinkAdapterApi_decode_oracle_address
     * @param {H160} oracle_address
     **/
    decodeOracleAddress: GenericRuntimeApiMethod<
      Rv,
      (oracleAddress: H160) => Promise<[number, number, HydradxTraitsOracleOraclePeriod, FixedBytes<8>] | undefined>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: AaveTradeExecutor - 0xa2b2b484fcb86943
   **/
  aaveTradeExecutor: {
    /**
     *
     * @callname: AaveTradeExecutor_pairs
     **/
    pairs: GenericRuntimeApiMethod<Rv, () => Promise<Array<[number, number]>>>;

    /**
     *
     * @callname: AaveTradeExecutor_liquidity_depth
     * @param {number} asset_in
     * @param {number} asset_out
     **/
    liquidityDepth: GenericRuntimeApiMethod<Rv, (assetIn: number, assetOut: number) => Promise<bigint | undefined>>;

    /**
     *
     * @callname: AaveTradeExecutor_pool
     * @param {number} reserve
     * @param {number} atoken
     **/
    pool: GenericRuntimeApiMethod<
      Rv,
      (reserve: number, atoken: number) => Promise<HydradxRuntimeEvmAaveTradeExecutorPoolData>
    >;

    /**
     *
     * @callname: AaveTradeExecutor_pools
     **/
    pools: GenericRuntimeApiMethod<Rv, () => Promise<Array<HydradxRuntimeEvmAaveTradeExecutorPoolData>>>;

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
}
