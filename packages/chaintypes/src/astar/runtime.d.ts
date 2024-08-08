// Generated by dedot cli

import type { GenericRuntimeApis, GenericRuntimeApiMethod, RpcVersion } from 'dedot/types';
import type {
  RuntimeVersion,
  Header,
  DispatchError,
  Result,
  H256,
  AccountId32Like,
  Bytes,
  BytesLike,
  H160,
  U256,
  Permill,
} from 'dedot/codecs';
import type {
  SpRuntimeBlock,
  SpRuntimeExtrinsicInclusionMode,
  SpCoreOpaqueMetadata,
  SpConsensusSlotsSlotDuration,
  SpConsensusAuraSr25519AppSr25519Public,
  SpRuntimeTransactionValidityTransactionValidityError,
  FpSelfContainedUncheckedExtrinsic,
  SpInherentsInherentData,
  SpInherentsCheckInherentsResult,
  SpRuntimeTransactionValidityValidTransaction,
  SpRuntimeTransactionValidityTransactionSource,
  PalletTransactionPaymentRuntimeDispatchInfo,
  PalletTransactionPaymentFeeDetails,
  SpWeightsWeightV2Weight,
  AstarRuntimeRuntimeCallLike,
  SpCoreCryptoKeyTypeId,
  CumulusPrimitivesCoreCollationInfo,
  EvmBackendBasic,
  FpEvmExecutionInfoV2,
  FpEvmExecutionInfoV2H160,
  EthereumBlock,
  EthereumReceiptReceiptV3,
  FpRpcTransactionStatus,
  EthereumTransactionTransactionV2,
  PalletContractsPrimitivesContractResult,
  PalletContractsPrimitivesContractResultResult,
  PalletContractsPrimitivesCode,
  PalletContractsPrimitivesCodeUploadReturnValue,
  PalletContractsWasmDeterminism,
  PalletContractsPrimitivesContractAccessError,
  AstarPrimitivesDappStakingRankedTier,
} from './types';

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
   * @runtimeapi: TransactionPaymentCallApi - 0xf3ff14d5ab527059
   **/
  transactionPaymentCallApi: {
    /**
     * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
     *
     * @callname: TransactionPaymentCallApi_query_call_info
     * @param {AstarRuntimeRuntimeCallLike} call
     * @param {number} len
     **/
    queryCallInfo: GenericRuntimeApiMethod<
      Rv,
      (call: AstarRuntimeRuntimeCallLike, len: number) => Promise<PalletTransactionPaymentRuntimeDispatchInfo>
    >;

    /**
     * Query fee details of a given encoded `Call`.
     *
     * @callname: TransactionPaymentCallApi_query_call_fee_details
     * @param {AstarRuntimeRuntimeCallLike} call
     * @param {number} len
     **/
    queryCallFeeDetails: GenericRuntimeApiMethod<
      Rv,
      (call: AstarRuntimeRuntimeCallLike, len: number) => Promise<PalletTransactionPaymentFeeDetails>
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
   * @runtimeapi: ContractsApi - 0x68b66ba122c93fa7
   **/
  contractsApi: {
    /**
     * Perform a call from a specified account to a given contract.
     *
     * See [`crate::Pallet::bare_call`].
     *
     * @callname: ContractsApi_call
     * @param {AccountId32Like} origin
     * @param {AccountId32Like} dest
     * @param {bigint} value
     * @param {SpWeightsWeightV2Weight | undefined} gas_limit
     * @param {bigint | undefined} storage_deposit_limit
     * @param {BytesLike} input_data
     **/
    call: GenericRuntimeApiMethod<
      Rv,
      (
        origin: AccountId32Like,
        dest: AccountId32Like,
        value: bigint,
        gasLimit: SpWeightsWeightV2Weight | undefined,
        storageDepositLimit: bigint | undefined,
        inputData: BytesLike,
      ) => Promise<PalletContractsPrimitivesContractResult>
    >;

    /**
     * Instantiate a new contract.
     *
     * See `[crate::Pallet::bare_instantiate]`.
     *
     * @callname: ContractsApi_instantiate
     * @param {AccountId32Like} origin
     * @param {bigint} value
     * @param {SpWeightsWeightV2Weight | undefined} gas_limit
     * @param {bigint | undefined} storage_deposit_limit
     * @param {PalletContractsPrimitivesCode} code
     * @param {BytesLike} data
     * @param {BytesLike} salt
     **/
    instantiate: GenericRuntimeApiMethod<
      Rv,
      (
        origin: AccountId32Like,
        value: bigint,
        gasLimit: SpWeightsWeightV2Weight | undefined,
        storageDepositLimit: bigint | undefined,
        code: PalletContractsPrimitivesCode,
        data: BytesLike,
        salt: BytesLike,
      ) => Promise<PalletContractsPrimitivesContractResultResult>
    >;

    /**
     * Upload new code without instantiating a contract from it.
     *
     * See [`crate::Pallet::bare_upload_code`].
     *
     * @callname: ContractsApi_upload_code
     * @param {AccountId32Like} origin
     * @param {BytesLike} code
     * @param {bigint | undefined} storage_deposit_limit
     * @param {PalletContractsWasmDeterminism} determinism
     **/
    uploadCode: GenericRuntimeApiMethod<
      Rv,
      (
        origin: AccountId32Like,
        code: BytesLike,
        storageDepositLimit: bigint | undefined,
        determinism: PalletContractsWasmDeterminism,
      ) => Promise<Result<PalletContractsPrimitivesCodeUploadReturnValue, DispatchError>>
    >;

    /**
     * Query a given storage key in a given contract.
     *
     * Returns `Ok(Some(Vec<u8>))` if the storage value exists under the given key in the
     * specified account and `Ok(None)` if it doesn't. If the account specified by the address
     * doesn't exist, or doesn't have a contract then `Err` is returned.
     *
     * @callname: ContractsApi_get_storage
     * @param {AccountId32Like} address
     * @param {BytesLike} key
     **/
    getStorage: GenericRuntimeApiMethod<
      Rv,
      (
        address: AccountId32Like,
        key: BytesLike,
      ) => Promise<Result<Bytes | undefined, PalletContractsPrimitivesContractAccessError>>
    >;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
  /**
   * @runtimeapi: DappStakingApi - 0xe8accb82fb152951
   **/
  dappStakingApi: {
    /**
     * How many periods are there in one cycle.
     *
     * @callname: DappStakingApi_periods_per_cycle
     **/
    periodsPerCycle: GenericRuntimeApiMethod<Rv, () => Promise<number>>;

    /**
     * For how many standard era lengths does the voting subperiod last.
     *
     * @callname: DappStakingApi_eras_per_voting_subperiod
     **/
    erasPerVotingSubperiod: GenericRuntimeApiMethod<Rv, () => Promise<number>>;

    /**
     * How many standard eras are there in the build&earn subperiod.
     *
     * @callname: DappStakingApi_eras_per_build_and_earn_subperiod
     **/
    erasPerBuildAndEarnSubperiod: GenericRuntimeApiMethod<Rv, () => Promise<number>>;

    /**
     * How many blocks are there per standard era.
     *
     * @callname: DappStakingApi_blocks_per_era
     **/
    blocksPerEra: GenericRuntimeApiMethod<Rv, () => Promise<number>>;

    /**
     * Get dApp ranked tier assignment for the given dApp.
     *
     * @callname: DappStakingApi_get_dapp_tier_assignment
     **/
    getDappTierAssignment: GenericRuntimeApiMethod<
      Rv,
      () => Promise<Array<[number, AstarPrimitivesDappStakingRankedTier]>>
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
     * Creates the default `RuntimeGenesisConfig` and returns it as a JSON blob.
     *
     * This function instantiates the default `RuntimeGenesisConfig` struct for the runtime and serializes it into a JSON
     * blob. It returns a `Vec<u8>` containing the JSON representation of the default `RuntimeGenesisConfig`.
     *
     * @callname: GenesisBuilder_create_default_config
     **/
    createDefaultConfig: GenericRuntimeApiMethod<Rv, () => Promise<Bytes>>;

    /**
     * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the storage.
     *
     * This function deserializes the full `RuntimeGenesisConfig` from the given JSON blob and puts it into the storage.
     * If the provided JSON blob is incorrect or incomplete or the deserialization fails, an error is returned.
     * It is recommended to log any errors encountered during the process.
     *
     * Please note that provided json blob must contain all `RuntimeGenesisConfig` fields, no defaults will be used.
     *
     * @callname: GenesisBuilder_build_config
     * @param {BytesLike} json
     **/
    buildConfig: GenericRuntimeApiMethod<Rv, (json: BytesLike) => Promise<Result<[], string>>>;

    /**
     * Generic runtime api call
     **/
    [method: string]: GenericRuntimeApiMethod<Rv>;
  };
}
