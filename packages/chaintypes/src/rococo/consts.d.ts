// Generated by dedot cli

import type { GenericChainConsts, RpcVersion } from 'dedot/types';
import type { RuntimeVersion, Permill, Bytes, Perquintill, FixedU128 } from 'dedot/codecs';
import type {
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsBlockLength,
  SpWeightsRuntimeDbWeight,
  FrameSupportPalletId,
  PalletReferendaTrackInfo,
  SpWeightsWeightV2Weight,
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
   * Pallet `Parameters`'s constants
   **/
  parameters: {
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
   * Pallet `FellowshipCollective`'s constants
   **/
  fellowshipCollective: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `FellowshipReferenda`'s constants
   **/
  fellowshipReferenda: {
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
     * Maximum number of registrars allowed in the system. Needed to bound the complexity
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
   * Pallet `Society`'s constants
   **/
  society: {
    /**
     * The societies's pallet id
     **/
    palletId: FrameSupportPalletId;

    /**
     * The maximum number of strikes before a member gets funds slashed.
     **/
    graceStrikes: number;

    /**
     * The amount of incentive paid within each period. Doesn't include VoterTip.
     **/
    periodSpend: bigint;

    /**
     * The number of blocks on which new candidates should be voted on. Together with
     * `ClaimPeriod`, this sums to the number of blocks between candidate intake periods.
     **/
    votingPeriod: number;

    /**
     * The number of blocks on which new candidates can claim their membership and be the
     * named head.
     **/
    claimPeriod: number;

    /**
     * The maximum duration of the payout lock.
     **/
    maxLockDuration: number;

    /**
     * The number of blocks between membership challenges.
     **/
    challengePeriod: number;

    /**
     * The maximum number of payouts a member may have waiting unclaimed.
     **/
    maxPayouts: number;

    /**
     * The maximum number of bids at once.
     **/
    maxBids: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Recovery`'s constants
   **/
  recovery: {
    /**
     * The base amount of currency needed to reserve for creating a recovery configuration.
     *
     * This is held for an additional storage item whose value size is
     * `2 + sizeof(BlockNumber, Balance)` bytes.
     **/
    configDepositBase: bigint;

    /**
     * The amount of currency needed per additional user when creating a recovery
     * configuration.
     *
     * This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage
     * value.
     **/
    friendDepositFactor: bigint;

    /**
     * The maximum amount of friends allowed in a recovery configuration.
     *
     * NOTE: The threshold programmed in this Pallet uses u16, so it does
     * not really make sense to have a limit here greater than u16::MAX.
     * But also, that is a lot more than you should probably set this value
     * to anyway...
     **/
    maxFriends: number;

    /**
     * The base amount of currency needed to reserve for starting a recovery.
     *
     * This is primarily held for deterring malicious recovery attempts, and should
     * have a value large enough that a bad actor would choose not to place this
     * deposit. It also acts to fund additional storage item whose value size is
     * `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable
     * threshold.
     **/
    recoveryDeposit: bigint;

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
   * Pallet `Preimage`'s constants
   **/
  preimage: {
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
   * Pallet `Nis`'s constants
   **/
  nis: {
    /**
     * The treasury's pallet id, used for deriving its sovereign account ID.
     **/
    palletId: FrameSupportPalletId;

    /**
     * Number of duration queues in total. This sets the maximum duration supported, which is
     * this value multiplied by `Period`.
     **/
    queueCount: number;

    /**
     * Maximum number of items that may be in each duration queue.
     *
     * Must be larger than zero.
     **/
    maxQueueLen: number;

    /**
     * Portion of the queue which is free from ordering and just a FIFO.
     *
     * Must be no greater than `MaxQueueLen`.
     **/
    fifoQueueLen: number;

    /**
     * The base period for the duration queues. This is the common multiple across all
     * supported freezing durations that can be bid upon.
     **/
    basePeriod: number;

    /**
     * The minimum amount of funds that may be placed in a bid. Note that this
     * does not actually limit the amount which may be represented in a receipt since bids may
     * be split up by the system.
     *
     * It should be at least big enough to ensure that there is no possible storage spam attack
     * or queue-filling attack.
     **/
    minBid: bigint;

    /**
     * The minimum amount of funds which may intentionally be left remaining under a single
     * receipt.
     **/
    minReceipt: Perquintill;

    /**
     * The number of blocks between consecutive attempts to dequeue bids and create receipts.
     *
     * A larger value results in fewer storage hits each block, but a slower period to get to
     * the target.
     **/
    intakePeriod: number;

    /**
     * The maximum amount of bids that can consolidated into receipts in a single intake. A
     * larger value here means less of the block available for transactions should there be a
     * glut of bids.
     **/
    maxIntakeWeight: SpWeightsWeightV2Weight;

    /**
     * The maximum proportion which may be thawed and the period over which it is reset.
     **/
    thawThrottle: [Perquintill, number];

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `NisCounterpartBalances`'s constants
   **/
  nisCounterpartBalances: {
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
   * Pallet `OnDemandAssignmentProvider`'s constants
   **/
  onDemandAssignmentProvider: {
    /**
     * The default value for the spot traffic multiplier.
     **/
    trafficDefaultValue: FixedU128;

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
   * Pallet `MmrLeaf`'s constants
   **/
  mmrLeaf: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `IdentityMigrator`'s constants
   **/
  identityMigrator: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ParasSudoWrapper`'s constants
   **/
  parasSudoWrapper: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `AssignedSlots`'s constants
   **/
  assignedSlots: {
    /**
     * The number of lease periods a permanent parachain slot lasts.
     **/
    permanentSlotLeasePeriodLength: number;

    /**
     * The number of lease periods a temporary parachain slot lasts.
     **/
    temporarySlotLeasePeriodLength: number;

    /**
     * The max number of temporary slots to be scheduled per lease periods.
     **/
    maxTemporarySlotPerLeasePeriod: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `ValidatorManager`'s constants
   **/
  validatorManager: {
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
   * Pallet `RootTesting`'s constants
   **/
  rootTesting: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Sudo`'s constants
   **/
  sudo: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
}
