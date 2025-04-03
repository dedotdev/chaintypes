// Generated by dedot cli

import type { GenericChainConsts, RpcVersion } from 'dedot/types';
import type { RuntimeVersion, Permill, Bytes, Perbill, FixedU128 } from 'dedot/codecs';
import type {
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsBlockLength,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
  FrameSupportPalletId,
  PalletReferendaTrackInfo,
  StagingXcmV4Junctions,
} from './types.js';

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
     * Get the chain's in-code version.
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
   * Pallet `Babe`'s constants
   **/
  babe: {
    /**
     * The amount of time, in slots, that each epoch should last.
     * NOTE: Currently it is not possible to change the epoch duration after
     * the chain has started. Attempting to do so will brick block production.
     **/
    epochDuration: bigint;

    /**
     * The expected average block time at which BABE should be creating
     * blocks. Since BABE is probabilistic it is not trivial to figure out
     * what the expected average block time should be based on the slot
     * duration and the security parameter `c` (where `1 - c` represents
     * the probability of a slot being empty).
     **/
    expectedBlockTime: bigint;

    /**
     * Max number of authorities allowed
     **/
    maxAuthorities: number;

    /**
     * The maximum number of nominators for each validator.
     **/
    maxNominators: number;

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
   * Pallet `Indices`'s constants
   **/
  indices: {
    /**
     * The deposit needed for reserving an index.
     **/
    deposit: bigint;

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
     *
     * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
     **/
    maxLocks: number;

    /**
     * The maximum number of named reserves that can exist on an account.
     *
     * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
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
   * Pallet `Authorship`'s constants
   **/
  authorship: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Staking`'s constants
   **/
  staking: {
    /**
     * Number of eras to keep in history.
     *
     * Following information is kept for eras in `[current_era -
     * HistoryDepth, current_era]`: `ErasStakers`, `ErasStakersClipped`,
     * `ErasValidatorPrefs`, `ErasValidatorReward`, `ErasRewardPoints`,
     * `ErasTotalStake`, `ErasStartSessionIndex`, `ClaimedRewards`, `ErasStakersPaged`,
     * `ErasStakersOverview`.
     *
     * Must be more than the number of eras delayed by session.
     * I.e. active era must always be in history. I.e. `active_era >
     * current_era - history_depth` must be guaranteed.
     *
     * If migrating an existing pallet from storage value to config value,
     * this should be set to same value or greater as in storage.
     *
     * Note: `HistoryDepth` is used as the upper bound for the `BoundedVec`
     * item `StakingLedger.legacy_claimed_rewards`. Setting this value lower than
     * the existing value can lead to inconsistencies in the
     * `StakingLedger` and will need to be handled properly in a migration.
     * The test `reducing_history_depth_abrupt` shows this effect.
     **/
    historyDepth: number;

    /**
     * Number of sessions per era.
     **/
    sessionsPerEra: number;

    /**
     * Number of eras that staked funds must remain bonded for.
     **/
    bondingDuration: number;

    /**
     * Number of eras that slashes are deferred by, after computation.
     *
     * This should be less than the bonding duration. Set to 0 if slashes
     * should be applied immediately, without opportunity for intervention.
     **/
    slashDeferDuration: number;

    /**
     * The maximum size of each `T::ExposurePage`.
     *
     * An `ExposurePage` is weakly bounded to a maximum of `MaxExposurePageSize`
     * nominators.
     *
     * For older non-paged exposure, a reward payout was restricted to the top
     * `MaxExposurePageSize` nominators. This is to limit the i/o cost for the
     * nominator payout.
     *
     * Note: `MaxExposurePageSize` is used to bound `ClaimedRewards` and is unsafe to reduce
     * without handling it in a migration.
     **/
    maxExposurePageSize: number;

    /**
     * The maximum number of `unlocking` chunks a [`StakingLedger`] can
     * have. Effectively determines how many unique eras a staker may be
     * unbonding in.
     *
     * Note: `MaxUnlockingChunks` is used as the upper bound for the
     * `BoundedVec` item `StakingLedger.unlocking`. Setting this value
     * lower than the existing value can lead to inconsistencies in the
     * `StakingLedger` and will need to be handled properly in a runtime
     * migration. The test `reducing_max_unlocking_chunks_abrupt` shows
     * this effect.
     **/
    maxUnlockingChunks: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Offences`'s constants
   **/
  offences: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Historical`'s constants
   **/
  historical: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Session`'s constants
   **/
  session: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Grandpa`'s constants
   **/
  grandpa: {
    /**
     * Max Authorities in use
     **/
    maxAuthorities: number;

    /**
     * The maximum number of nominators for each validator.
     **/
    maxNominators: number;

    /**
     * The maximum number of entries to keep in the set id to session index mapping.
     *
     * Since the `SetIdSession` map is only used for validating equivocations this
     * value should relate to the bonding duration of whatever staking system is
     * being used (if any). If equivocation handling is not enabled then this value
     * can be zero.
     **/
    maxSetIdSessionEntries: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `AuthorityDiscovery`'s constants
   **/
  authorityDiscovery: {
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
   * Pallet `Origins`'s constants
   **/
  origins: {
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
   * Pallet `Claims`'s constants
   **/
  claims: {
    prefix: Bytes;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Vesting`'s constants
   **/
  vesting: {
    /**
     * The minimum amount transferred to call `vested_transfer`.
     **/
    minVestedTransfer: bigint;
    maxVestingSchedules: number;

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
   * Pallet `Bounties`'s constants
   **/
  bounties: {
    /**
     * The amount held on deposit for placing a bounty proposal.
     **/
    bountyDepositBase: bigint;

    /**
     * The delay period for which a bounty beneficiary need to wait before claim the payout.
     **/
    bountyDepositPayoutDelay: number;

    /**
     * Bounty duration in blocks.
     **/
    bountyUpdatePeriod: number;

    /**
     * The curator deposit is calculated as a percentage of the curator fee.
     *
     * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
     * `CuratorDepositMin`.
     **/
    curatorDepositMultiplier: Permill;

    /**
     * Maximum amount of funds that should be placed in a deposit for making a proposal.
     **/
    curatorDepositMax: bigint | undefined;

    /**
     * Minimum amount of funds that should be placed in a deposit for making a proposal.
     **/
    curatorDepositMin: bigint | undefined;

    /**
     * Minimum value for a bounty.
     **/
    bountyValueMinimum: bigint;

    /**
     * The amount held on deposit per byte within the tip report reason or bounty description.
     **/
    dataDepositPerByte: bigint;

    /**
     * Maximum acceptable reason length.
     *
     * Benchmarks depend on this value, be sure to update weights file when changing this value
     **/
    maximumReasonLength: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ChildBounties`'s constants
   **/
  childBounties: {
    /**
     * Maximum number of child bounties that can be added to a parent bounty.
     **/
    maxActiveChildBountyCount: number;

    /**
     * Minimum value for a child-bounty.
     **/
    childBountyValueMinimum: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ElectionProviderMultiPhase`'s constants
   **/
  electionProviderMultiPhase: {
    /**
     * The minimum amount of improvement to the solution score that defines a solution as
     * "better" in the Signed phase.
     **/
    betterSignedThreshold: Perbill;

    /**
     * The repeat threshold of the offchain worker.
     *
     * For example, if it is 5, that means that at least 5 blocks will elapse between attempts
     * to submit the worker's solution.
     **/
    offchainRepeat: number;

    /**
     * The priority of the unsigned transaction submitted in the unsigned-phase
     **/
    minerTxPriority: bigint;

    /**
     * Maximum number of signed submissions that can be queued.
     *
     * It is best to avoid adjusting this during an election, as it impacts downstream data
     * structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you
     * update this value during an election, you _must_ ensure that
     * `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,
     * attempts to submit new solutions may cause a runtime panic.
     **/
    signedMaxSubmissions: number;

    /**
     * Maximum weight of a signed solution.
     *
     * If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of
     * this pallet), then [`MinerConfig::solution_weight`] is used to compare against
     * this value.
     **/
    signedMaxWeight: SpWeightsWeightV2Weight;

    /**
     * The maximum amount of unchecked solutions to refund the call fee for.
     **/
    signedMaxRefunds: number;

    /**
     * Base reward for a signed solution
     **/
    signedRewardBase: bigint;

    /**
     * Per-byte deposit for a signed solution.
     **/
    signedDepositByte: bigint;

    /**
     * Per-weight deposit for a signed solution.
     **/
    signedDepositWeight: bigint;

    /**
     * The maximum number of winners that can be elected by this `ElectionProvider`
     * implementation.
     *
     * Note: This must always be greater or equal to `T::DataProvider::desired_targets()`.
     **/
    maxWinners: number;
    minerMaxLength: number;
    minerMaxWeight: SpWeightsWeightV2Weight;
    minerMaxVotesPerVoter: number;
    minerMaxWinners: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `VoterList`'s constants
   **/
  voterList: {
    /**
     * The list of thresholds separating the various bags.
     *
     * Ids are separated into unsorted bags according to their score. This specifies the
     * thresholds separating the bags. An id's bag is the largest bag for which the id's score
     * is less than or equal to its upper threshold.
     *
     * When ids are iterated, higher bags are iterated completely before lower bags. This means
     * that iteration is _semi-sorted_: ids of higher score tend to come before ids of lower
     * score, but peer ids within a particular bag are sorted in insertion order.
     *
     * # Expressing the constant
     *
     * This constant must be sorted in strictly increasing order. Duplicate items are not
     * permitted.
     *
     * There is an implied upper limit of `Score::MAX`; that value does not need to be
     * specified within the bag. For any two threshold lists, if one ends with
     * `Score::MAX`, the other one does not, and they are otherwise equal, the two
     * lists will behave identically.
     *
     * # Calculation
     *
     * It is recommended to generate the set of thresholds in a geometric series, such that
     * there exists some constant ratio such that `threshold[k + 1] == (threshold[k] *
     * constant_ratio).max(threshold[k] + 1)` for all `k`.
     *
     * The helpers in the `/utils/frame/generate-bags` module can simplify this calculation.
     *
     * # Examples
     *
     * - If `BagThresholds::get().is_empty()`, then all ids are put into the same bag, and
     * iteration is strictly in insertion order.
     * - If `BagThresholds::get().len() == 64`, and the thresholds are determined according to
     * the procedure given above, then the constant ratio is equal to 2.
     * - If `BagThresholds::get().len() == 200`, and the thresholds are determined according to
     * the procedure given above, then the constant ratio is approximately equal to 1.248.
     * - If the threshold list begins `[1, 2, 3, ...]`, then an id with score 0 or 1 will fall
     * into bag 0, an id with score 2 will fall into bag 1, etc.
     *
     * # Migration
     *
     * In the event that this list ever changes, a copy of the old bags list must be retained.
     * With that `List::migrate` can be called, which will perform the appropriate migration.
     **/
    bagThresholds: Array<bigint>;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `NominationPools`'s constants
   **/
  nominationPools: {
    /**
     * The nomination pool's pallet id.
     **/
    palletId: FrameSupportPalletId;

    /**
     * The maximum pool points-to-balance ratio that an `open` pool can have.
     *
     * This is important in the event slashing takes place and the pool's points-to-balance
     * ratio becomes disproportional.
     *
     * Moreover, this relates to the `RewardCounter` type as well, as the arithmetic operations
     * are a function of number of points, and by setting this value to e.g. 10, you ensure
     * that the total number of points in the system are at most 10 times the total_issuance of
     * the chain, in the absolute worse case.
     *
     * For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.
     * Such a scenario would also be the equivalent of the pool being 90% slashed.
     **/
    maxPointsToBalance: number;

    /**
     * The maximum number of simultaneous unbonding chunks that can exist per member.
     **/
    maxUnbonding: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `FastUnstake`'s constants
   **/
  fastUnstake: {
    /**
     * Deposit to take for unstaking, to make sure we're able to slash the it in order to cover
     * the costs of resources on unsuccessful unstake.
     **/
    deposit: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `DelegatedStaking`'s constants
   **/
  delegatedStaking: {
    /**
     * Injected identifier for the pallet.
     **/
    palletId: FrameSupportPalletId;

    /**
     * Fraction of the slash that is rewarded to the caller of pending slash to the agent.
     **/
    slashRewardFraction: Perbill;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParachainsOrigin`'s constants
   **/
  parachainsOrigin: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Configuration`'s constants
   **/
  configuration: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParasShared`'s constants
   **/
  parasShared: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParaInclusion`'s constants
   **/
  paraInclusion: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParaInherent`'s constants
   **/
  paraInherent: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParaScheduler`'s constants
   **/
  paraScheduler: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Paras`'s constants
   **/
  paras: {
    unsignedPriority: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Initializer`'s constants
   **/
  initializer: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Dmp`'s constants
   **/
  dmp: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Hrmp`'s constants
   **/
  hrmp: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParaSessionInfo`'s constants
   **/
  paraSessionInfo: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParasDisputes`'s constants
   **/
  parasDisputes: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParasSlashing`'s constants
   **/
  parasSlashing: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `OnDemand`'s constants
   **/
  onDemand: {
    /**
     * The default value for the spot traffic multiplier.
     **/
    trafficDefaultValue: FixedU128;

    /**
     * The maximum number of blocks some historical revenue
     * information stored for.
     **/
    maxHistoricalRevenue: number;

    /**
     * Identifier for the internal revenue balance.
     **/
    palletId: FrameSupportPalletId;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `CoretimeAssignmentProvider`'s constants
   **/
  coretimeAssignmentProvider: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Registrar`'s constants
   **/
  registrar: {
    /**
     * The deposit to be paid to run a on-demand parachain.
     * This should include the cost for storing the genesis head and validation code.
     **/
    paraDeposit: bigint;

    /**
     * The deposit to be paid per byte stored on chain.
     **/
    dataDepositPerByte: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Slots`'s constants
   **/
  slots: {
    /**
     * The number of blocks over which a single period lasts.
     **/
    leasePeriod: number;

    /**
     * The number of blocks to offset each lease period by.
     **/
    leaseOffset: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Auctions`'s constants
   **/
  auctions: {
    /**
     * The number of blocks over which an auction may be retroactively ended.
     **/
    endingPeriod: number;

    /**
     * The length of each sample to take during the ending period.
     *
     * `EndingPeriod` / `SampleLength` = Total # of Samples
     **/
    sampleLength: number;
    slotRangeCount: number;
    leasePeriodsPerSlot: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Crowdloan`'s constants
   **/
  crowdloan: {
    /**
     * `PalletId` for the crowdloan pallet. An appropriate value could be
     * `PalletId(*b"py/cfund")`
     **/
    palletId: FrameSupportPalletId;

    /**
     * The minimum amount that may be contributed into a crowdloan. Should almost certainly be
     * at least `ExistentialDeposit`.
     **/
    minContribution: bigint;

    /**
     * Max number of storage keys to remove per extrinsic call.
     **/
    removeKeysLimit: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Coretime`'s constants
   **/
  coretime: {
    /**
     * The ParaId of the coretime chain.
     **/
    brokerId: number;

    /**
     * The coretime chain pot location.
     **/
    brokerPotLocation: StagingXcmV4Junctions;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `StateTrieMigration`'s constants
   **/
  stateTrieMigration: {
    /**
     * Maximal number of bytes that a key can have.
     *
     * FRAME itself does not limit the key length.
     * The concrete value must therefore depend on your storage usage.
     * A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of
     * keys which are then hashed and concatenated, resulting in arbitrarily long keys.
     *
     * Use the *state migration RPC* to retrieve the length of the longest key in your
     * storage: <https://github.com/paritytech/substrate/issues/11642>
     *
     * The migration will halt with a `Halted` event if this value is too small.
     * Since there is no real penalty from over-estimating, it is advised to use a large
     * value. The default is 512 byte.
     *
     * Some key lengths for reference:
     * - [`frame_support::storage::StorageValue`]: 32 byte
     * - [`frame_support::storage::StorageMap`]: 64 byte
     * - [`frame_support::storage::StorageDoubleMap`]: 96 byte
     *
     * For more info see
     * <https://www.shawntabrizi.com/blog/substrate/querying-substrate-storage-via-rpc/>
     **/
    maxKeyLen: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `XcmPallet`'s constants
   **/
  xcmPallet: {
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
     * servicing enqueued items `on_initialize`.
     *
     * This may be legitimately `None` in the case that you will call
     * `ServiceQueues::service_queues` manually or set [`Self::IdleMaxServiceWeight`] to have
     * it run in `on_idle`.
     **/
    serviceWeight: SpWeightsWeightV2Weight | undefined;

    /**
     * The maximum amount of weight (if any) to be used from remaining weight `on_idle` which
     * should be provided to the message queue for servicing enqueued items `on_idle`.
     * Useful for parachains to process messages at the same block they are received.
     *
     * If `None`, it will not call `ServiceQueues::service_queues` in `on_idle`.
     **/
    idleMaxServiceWeight: SpWeightsWeightV2Weight | undefined;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `AssetRate`'s constants
   **/
  assetRate: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Beefy`'s constants
   **/
  beefy: {
    /**
     * The maximum number of authorities that can be added.
     **/
    maxAuthorities: number;

    /**
     * The maximum number of nominators for each validator.
     **/
    maxNominators: number;

    /**
     * The maximum number of entries to keep in the set id to session index mapping.
     *
     * Since the `SetIdSession` map is only used for validating equivocations this
     * value should relate to the bonding duration of whatever staking system is
     * being used (if any). If equivocation handling is not enabled then this value
     * can be zero.
     **/
    maxSetIdSessionEntries: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Mmr`'s constants
   **/
  mmr: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `BeefyMmrLeaf`'s constants
   **/
  beefyMmrLeaf: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
}
