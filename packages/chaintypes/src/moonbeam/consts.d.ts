// Generated by @dedot/codegen

import type { GenericChainConsts, RpcVersion } from 'dedot/types';
import type { RuntimeVersion, Permill, Perbill, Bytes } from 'dedot/codecs';
import type {
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsBlockLength,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
  PalletReferendaTrackInfo,
  FrameSupportPalletId,
  StagingXcmV4Location,
} from './types';

export interface ChainConsts<Rv extends RpcVersion> extends GenericChainConsts<Rv> {
  /**
   * Pallet `System`'s constants
   **/
  system: {
    /**
     * Block & extrinsics weights: base values and limits.
     **/
    blockWeights: FrameSystemLimitsBlockWeights;

    /**
     * The maximum length of a block (in bytes).
     **/
    blockLength: FrameSystemLimitsBlockLength;

    /**
     * Maximum number of block number to block hash mappings to keep (oldest pruned first).
     **/
    blockHashCount: number;

    /**
     * The weight of runtime database operations the runtime can invoke.
     **/
    dbWeight: SpWeightsRuntimeDbWeight;

    /**
     * Get the chain's current version.
     **/
    version: RuntimeVersion;

    /**
     * The designated SS58 prefix of this chain.
     *
     * This replaces the "ss58Format" property declared in the chain spec. Reason is
     * that the runtime should know about the prefix in order to make use of it as
     * an identifier of the chain.
     **/
    ss58Prefix: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParachainSystem`'s constants
   **/
  parachainSystem: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Timestamp`'s constants
   **/
  timestamp: {
    /**
     * The minimum period between blocks.
     *
     * Be aware that this is different to the *expected* period that the block production
     * apparatus provides. Your chosen consensus system will generally work with this to
     * determine a sensible block time. For example, in the Aura pallet it will be double this
     * period on default settings.
     **/
    minimumPeriod: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParachainInfo`'s constants
   **/
  parachainInfo: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `RootTesting`'s constants
   **/
  rootTesting: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Balances`'s constants
   **/
  balances: {
    /**
     * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
     *
     * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
     * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
     * In case you have multiple sources of provider references, you may also get unexpected
     * behaviour if you set this to zero.
     *
     * Bottom line: Do yourself a favour and make it at least one!
     **/
    existentialDeposit: bigint;

    /**
     * The maximum number of locks that should exist on an account.
     * Not strictly enforced, but used for weight estimation.
     **/
    maxLocks: number;

    /**
     * The maximum number of named reserves that can exist on an account.
     **/
    maxReserves: number;

    /**
     * The maximum number of individual freeze locks that can exist on an account at any time.
     **/
    maxFreezes: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `TransactionPayment`'s constants
   **/
  transactionPayment: {
    /**
     * A fee multiplier for `Operational` extrinsics to compute "virtual tip" to boost their
     * `priority`
     *
     * This value is multiplied by the `final_fee` to obtain a "virtual tip" that is later
     * added to a tip component in regular `priority` calculations.
     * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
     * extrinsic (with no tip), by including a tip value greater than the virtual tip.
     *
     * ```rust,ignore
     * // For `Normal`
     * let priority = priority_calc(tip);
     *
     * // For `Operational`
     * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
     * let priority = priority_calc(tip + virtual_tip);
     * ```
     *
     * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
     * sent with the transaction. So, not only does the transaction get a priority bump based
     * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
     * transactions.
     **/
    operationalFeeMultiplier: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParachainStaking`'s constants
   **/
  parachainStaking: {
    /**
     * Minimum number of blocks per round
     **/
    minBlocksPerRound: number;

    /**
     * If a collator doesn't produce any block on this number of rounds, it is notified as inactive.
     * This value must be less than or equal to RewardPaymentDelay.
     **/
    maxOfflineRounds: number;

    /**
     * Number of rounds that candidates remain bonded before exit request is executable
     **/
    leaveCandidatesDelay: number;

    /**
     * Number of rounds candidate requests to decrease self-bond must wait to be executable
     **/
    candidateBondLessDelay: number;

    /**
     * Number of rounds that delegators remain bonded before exit request is executable
     **/
    leaveDelegatorsDelay: number;

    /**
     * Number of rounds that delegations remain bonded before revocation request is executable
     **/
    revokeDelegationDelay: number;

    /**
     * Number of rounds that delegation less requests must wait before executable
     **/
    delegationBondLessDelay: number;

    /**
     * Number of rounds after which block authors are rewarded
     **/
    rewardPaymentDelay: number;

    /**
     * Minimum number of selected candidates every round
     **/
    minSelectedCandidates: number;

    /**
     * Maximum top delegations counted per candidate
     **/
    maxTopDelegationsPerCandidate: number;

    /**
     * Maximum bottom delegations (not counted) per candidate
     **/
    maxBottomDelegationsPerCandidate: number;

    /**
     * Maximum delegations per delegator
     **/
    maxDelegationsPerDelegator: number;

    /**
     * Minimum stake required for any account to be a collator candidate
     **/
    minCandidateStk: bigint;

    /**
     * Minimum stake for any registered on-chain account to delegate
     **/
    minDelegation: bigint;

    /**
     * Get the slot duration in milliseconds
     **/
    slotDuration: bigint;

    /**
     * Get the average time beetween 2 blocks in milliseconds
     **/
    blockTime: bigint;

    /**
     * Maximum candidates
     **/
    maxCandidates: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `AuthorInherent`'s constants
   **/
  authorInherent: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `AuthorFilter`'s constants
   **/
  authorFilter: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `AuthorMapping`'s constants
   **/
  authorMapping: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `MoonbeamOrbiters`'s constants
   **/
  moonbeamOrbiters: {
    /**
     * Maximum number of orbiters per collator.
     **/
    maxPoolSize: number;

    /**
     * Maximum number of round to keep on storage.
     **/
    maxRoundArchive: number;

    /**
     * Number of rounds before changing the selected orbiter.
     * WARNING: when changing `RotatePeriod`, you need a migration code that sets
     * `ForceRotation` to true to avoid holes in `OrbiterPerRound`.
     **/
    rotatePeriod: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Utility`'s constants
   **/
  utility: {
    /**
     * The limit on the number of batched calls.
     **/
    batchedCallsLimit: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Proxy`'s constants
   **/
  proxy: {
    /**
     * The base amount of currency needed to reserve for creating a proxy.
     *
     * This is held for an additional storage item whose value size is
     * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
     **/
    proxyDepositBase: bigint;

    /**
     * The amount of currency needed per proxy added.
     *
     * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
     * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
     * into account `32 + proxy_type.encode().len()` bytes of data.
     **/
    proxyDepositFactor: bigint;

    /**
     * The maximum amount of proxies allowed for a single account.
     **/
    maxProxies: number;

    /**
     * The maximum amount of time-delayed announcements that are allowed to be pending.
     **/
    maxPending: number;

    /**
     * The base amount of currency needed to reserve for creating an announcement.
     *
     * This is held when a new storage item holding a `Balance` is created (typically 16
     * bytes).
     **/
    announcementDepositBase: bigint;

    /**
     * The amount of currency needed per announcement made.
     *
     * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
     * into a pre-existing storage value.
     **/
    announcementDepositFactor: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `MaintenanceMode`'s constants
   **/
  maintenanceMode: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Identity`'s constants
   **/
  identity: {
    /**
     * The amount held on deposit for a registered identity.
     **/
    basicDeposit: bigint;

    /**
     * The amount held on deposit per encoded byte for a registered identity.
     **/
    byteDeposit: bigint;

    /**
     * The amount held on deposit for a registered subaccount. This should account for the fact
     * that one storage item's value will increase by the size of an account ID, and there will
     * be another trie item whose value is the size of an account ID plus 32 bytes.
     **/
    subAccountDeposit: bigint;

    /**
     * The maximum number of sub-accounts allowed per identified account.
     **/
    maxSubAccounts: number;

    /**
     * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
     * of, e.g., updating judgements.
     **/
    maxRegistrars: number;

    /**
     * The number of blocks within which a username grant must be accepted.
     **/
    pendingUsernameExpiration: number;

    /**
     * The maximum length of a suffix.
     **/
    maxSuffixLength: number;

    /**
     * The maximum length of a username, including its suffix and any system-added delimiters.
     **/
    maxUsernameLength: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Migrations`'s constants
   **/
  migrations: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ProxyGenesisCompanion`'s constants
   **/
  proxyGenesisCompanion: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Multisig`'s constants
   **/
  multisig: {
    /**
     * The base amount of currency needed to reserve for creating a multisig execution or to
     * store a dispatch call for later.
     *
     * This is held for an additional storage item whose value size is
     * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
     * `32 + sizeof(AccountId)` bytes.
     **/
    depositBase: bigint;

    /**
     * The amount of currency needed per unit threshold when creating a multisig execution.
     *
     * This is held for adding 32 bytes more into a pre-existing storage value.
     **/
    depositFactor: bigint;

    /**
     * The maximum amount of signatories allowed in the multisig.
     **/
    maxSignatories: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `MoonbeamLazyMigrations`'s constants
   **/
  moonbeamLazyMigrations: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `EthereumChainId`'s constants
   **/
  ethereumChainId: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `EVM`'s constants
   **/
  evm: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Ethereum`'s constants
   **/
  ethereum: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Scheduler`'s constants
   **/
  scheduler: {
    /**
     * The maximum weight that may be scheduled per block for any dispatchables.
     **/
    maximumWeight: SpWeightsWeightV2Weight;

    /**
     * The maximum number of scheduled calls in the queue for a single block.
     *
     * NOTE:
     * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
     * higher limit under `runtime-benchmarks` feature.
     **/
    maxScheduledPerBlock: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Preimage`'s constants
   **/
  preimage: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ConvictionVoting`'s constants
   **/
  convictionVoting: {
    /**
     * The maximum number of concurrent votes an account may have.
     *
     * Also used to compute weight, an overly large value can lead to extrinsics with large
     * weight estimation: see `delegate` for instance.
     **/
    maxVotes: number;

    /**
     * The minimum period of vote locking.
     *
     * It should be no shorter than enactment period to ensure that in the case of an approval,
     * those successful voters are locked into the consequences that their votes entail.
     **/
    voteLockingPeriod: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Referenda`'s constants
   **/
  referenda: {
    /**
     * The minimum amount to be used as a deposit for a public referendum proposal.
     **/
    submissionDeposit: bigint;

    /**
     * Maximum size of the referendum queue for a single track.
     **/
    maxQueued: number;

    /**
     * The number of blocks after submission that a referendum must begin being decided by.
     * Once this passes, then anyone may cancel the referendum.
     **/
    undecidingTimeout: number;

    /**
     * Quantization level for the referendum wakeup scheduler. A higher number will result in
     * fewer storage reads/writes needed for smaller voters, but also result in delays to the
     * automatic referendum status changes. Explicit servicing instructions are unaffected.
     **/
    alarmInterval: number;

    /**
     * Information concerning the different referendum tracks.
     **/
    tracks: Array<[number, PalletReferendaTrackInfo]>;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Whitelist`'s constants
   **/
  whitelist: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `TreasuryCouncilCollective`'s constants
   **/
  treasuryCouncilCollective: {
    /**
     * The maximum weight of a dispatch call that can be proposed and executed.
     **/
    maxProposalWeight: SpWeightsWeightV2Weight;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `OpenTechCommitteeCollective`'s constants
   **/
  openTechCommitteeCollective: {
    /**
     * The maximum weight of a dispatch call that can be proposed and executed.
     **/
    maxProposalWeight: SpWeightsWeightV2Weight;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Treasury`'s constants
   **/
  treasury: {
    /**
     * Fraction of a proposal's value that should be bonded in order to place the proposal.
     * An accepted proposal gets these back. A rejected proposal does not.
     **/
    proposalBond: Permill;

    /**
     * Minimum amount of funds that should be placed in a deposit for making a proposal.
     **/
    proposalBondMinimum: bigint;

    /**
     * Maximum amount of funds that should be placed in a deposit for making a proposal.
     **/
    proposalBondMaximum: bigint | undefined;

    /**
     * Period between successive spends.
     **/
    spendPeriod: number;

    /**
     * Percentage of spare funds (if any) that are burnt per spend period.
     **/
    burn: Permill;

    /**
     * The treasury's pallet id, used for deriving its sovereign account ID.
     **/
    palletId: FrameSupportPalletId;

    /**
     * The maximum number of approvals that can wait in the spending queue.
     *
     * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
     **/
    maxApprovals: number;

    /**
     * The period during which an approved treasury spend has to be claimed.
     **/
    payoutPeriod: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `CrowdloanRewards`'s constants
   **/
  crowdloanRewards: {
    /**
     * Percentage to be payed at initialization
     **/
    initializationPayment: Perbill;
    maxInitContributors: number;

    /**
     * A fraction representing the percentage of proofs
     * that need to be presented to change a reward address through the relay keys
     **/
    rewardAddressRelayVoteThreshold: Perbill;

    /**
     * Network Identifier to be appended into the signatures for reward address change/association
     * Prevents replay attacks from one network to the other
     **/
    signatureNetworkIdentifier: Bytes;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `XcmpQueue`'s constants
   **/
  xcmpQueue: {
    /**
     * The maximum number of inbound XCMP channels that can be suspended simultaneously.
     *
     * Any further channel suspensions will fail and messages may get dropped without further
     * notice. Choosing a high value (1000) is okay; the trade-off that is described in
     * [`InboundXcmpSuspended`] still applies at that scale.
     **/
    maxInboundSuspended: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `CumulusXcm`'s constants
   **/
  cumulusXcm: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `DmpQueue`'s constants
   **/
  dmpQueue: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `PolkadotXcm`'s constants
   **/
  polkadotXcm: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Assets`'s constants
   **/
  assets: {
    /**
     * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
     *
     * Must be configured to result in a weight that makes each call fit in a block.
     **/
    removeItemsLimit: number;

    /**
     * The basic amount of funds that must be reserved for an asset.
     **/
    assetDeposit: bigint;

    /**
     * The amount of funds that must be reserved for a non-provider asset account to be
     * maintained.
     **/
    assetAccountDeposit: bigint;

    /**
     * The basic amount of funds that must be reserved when adding metadata to your asset.
     **/
    metadataDepositBase: bigint;

    /**
     * The additional funds that must be reserved for the number of bytes you store in your
     * metadata.
     **/
    metadataDepositPerByte: bigint;

    /**
     * The amount of funds that must be reserved when creating a new approval.
     **/
    approvalDeposit: bigint;

    /**
     * The maximum length of a name or symbol stored on-chain.
     **/
    stringLimit: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `AssetManager`'s constants
   **/
  assetManager: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `XTokens`'s constants
   **/
  xTokens: {
    /**
     * Self chain location.
     **/
    selfLocation: StagingXcmV4Location;

    /**
     * Base XCM weight.
     *
     * The actually weight for an XCM message is `T::BaseXcmWeight +
     * T::Weigher::weight(&msg)`.
     **/
    baseXcmWeight: SpWeightsWeightV2Weight;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `XcmTransactor`'s constants
   **/
  xcmTransactor: {
    /**
     * Self chain location.
     **/
    selfLocation: StagingXcmV4Location;

    /**
     *
     * The actual weight for an XCM message is `T::BaseXcmWeight +
     * T::Weigher::weight(&msg)`.
     **/
    baseXcmWeight: SpWeightsWeightV2Weight;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `EthereumXcm`'s constants
   **/
  ethereumXcm: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Erc20XcmBridge`'s constants
   **/
  erc20XcmBridge: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `MessageQueue`'s constants
   **/
  messageQueue: {
    /**
     * The size of the page; this implies the maximum message size which can be sent.
     *
     * A good value depends on the expected message sizes, their weights, the weight that is
     * available for processing them and the maximal needed message size. The maximal message
     * size is slightly lower than this as defined by [`MaxMessageLenOf`].
     **/
    heapSize: number;

    /**
     * The maximum number of stale pages (i.e. of overweight messages) allowed before culling
     * can happen. Once there are more stale pages than this, then historical pages may be
     * dropped, even if they contain unprocessed overweight messages.
     **/
    maxStale: number;

    /**
     * The amount of weight (if any) which should be provided to the message queue for
     * servicing enqueued items.
     *
     * This may be legitimately `None` in the case that you will call
     * `ServiceQueues::service_queues` manually.
     **/
    serviceWeight: SpWeightsWeightV2Weight | undefined;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `RelayStorageRoots`'s constants
   **/
  relayStorageRoots: {
    /**
     * Limit the number of relay storage roots that will be stored.
     * This limit applies to the number of items, not to their age. Decreasing the value of
     * `MaxStorageRoots` is a breaking change and needs a migration to clean the
     * `RelayStorageRoots` mapping.
     **/
    maxStorageRoots: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `PrecompileBenchmarks`'s constants
   **/
  precompileBenchmarks: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Randomness`'s constants
   **/
  randomness: {
    /**
     * The amount that should be taken as a security deposit when requesting randomness.
     **/
    deposit: bigint;

    /**
     * Maximum number of random words that can be requested per request
     **/
    maxRandomWords: number;

    /**
     * Local per-block VRF requests must be at least this many blocks after the block in which
     * they were requested
     **/
    minBlockDelay: number;

    /**
     * Local per-block VRF requests must be at most this many blocks after the block in which
     * they were requested
     **/
    maxBlockDelay: number;

    /**
     * Local requests expire and can be purged from storage after this many blocks/epochs
     **/
    blockExpirationDelay: number;

    /**
     * Babe requests expire and can be purged from storage after this many blocks/epochs
     **/
    epochExpirationDelay: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
}
