// Generated by dedot cli

import type { GenericChainConsts, RpcVersion } from 'dedot/types';
import type { RuntimeVersion, Permill, Perbill } from 'dedot/codecs';
import type {
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsBlockLength,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
  FrameSupportPalletId,
  PalletContractsSchedule,
  PalletContractsEnvironment,
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
   * Pallet `RandomnessCollectiveFlip`'s constants
   **/
  randomnessCollectiveFlip: {
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
   * Pallet `Aura`'s constants
   **/
  aura: {
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
     * The maximum number of holds that can exist on an account at any time.
     **/
    maxHolds: number;

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
     * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
     * `priority`
     *
     * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
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
     * `ErasTotalStake`, `ErasStartSessionIndex`,
     * `StakingLedger.claimed_rewards`.
     *
     * Must be more than the number of eras delayed by session.
     * I.e. active era must always be in history. I.e. `active_era >
     * current_era - history_depth` must be guaranteed.
     *
     * If migrating an existing pallet from storage value to config value,
     * this should be set to same value or greater as in storage.
     *
     * Note: `HistoryDepth` is used as the upper bound for the `BoundedVec`
     * item `StakingLedger.claimed_rewards`. Setting this value lower than
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
     * The maximum number of nominators rewarded for each validator.
     *
     * For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can
     * claim their reward. This used to limit the i/o cost for the nominator payout.
     **/
    maxNominatorRewardedPerValidator: number;

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
   * Pallet `History`'s constants
   **/
  history: {
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
   * Pallet `Aleph`'s constants
   **/
  aleph: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Elections`'s constants
   **/
  elections: {
    /**
     * The maximum number of winners that can be elected by this `ElectionProvider`
     * implementation.
     *
     * Note: This must always be greater or equal to `T::DataProvider::desired_targets()`.
     **/
    maxWinners: number;

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
   * Pallet `Sudo`'s constants
   **/
  sudo: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Contracts`'s constants
   **/
  contracts: {
    /**
     * Cost schedule and limits.
     **/
    schedule: PalletContractsSchedule;

    /**
     * The amount of balance a caller has to pay for each byte of storage.
     *
     * # Note
     *
     * Changing this value for an existing chain might need a storage migration.
     **/
    depositPerByte: bigint;

    /**
     * Fallback value to limit the storage deposit if it's not being set by the caller.
     **/
    defaultDepositLimit: bigint;

    /**
     * The amount of balance a caller has to pay for each storage item.
     *
     * # Note
     *
     * Changing this value for an existing chain might need a storage migration.
     **/
    depositPerItem: bigint;

    /**
     * The percentage of the storage deposit that should be held for using a code hash.
     * Instantiating a contract, or calling [`chain_extension::Ext::add_delegate_dependency`]
     * protects the code from being removed. In order to prevent abuse these actions are
     * protected with a percentage of the code deposit.
     **/
    codeHashLockupDepositPercent: Perbill;

    /**
     * The maximum length of a contract code in bytes.
     *
     * The value should be chosen carefully taking into the account the overall memory limit
     * your runtime has, as well as the [maximum allowed callstack
     * depth](#associatedtype.CallStack). Look into the `integrity_test()` for some insights.
     **/
    maxCodeLen: number;

    /**
     * The maximum allowable length in bytes for storage keys.
     **/
    maxStorageKeyLen: number;

    /**
     * The maximum number of delegate_dependencies that a contract can lock with
     * [`chain_extension::Ext::add_delegate_dependency`].
     **/
    maxDelegateDependencies: number;

    /**
     * Make contract callable functions marked as `#[unstable]` available.
     *
     * Contracts that use `#[unstable]` functions won't be able to be uploaded unless
     * this is set to `true`. This is only meant for testnets and dev nodes in order to
     * experiment with new features.
     *
     * # Warning
     *
     * Do **not** set to `true` on productions chains.
     **/
    unsafeUnstableInterface: boolean;

    /**
     * The maximum length of the debug buffer in bytes.
     **/
    maxDebugBufferLen: number;

    /**
     * Type that bundles together all the runtime configurable interface types.
     *
     * This is not a real config. We just mention the type here as constant so that
     * its type appears in the metadata. Only valid value is `()`.
     **/
    environment: PalletContractsEnvironment;

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
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `Identity`'s constants
   **/
  identity: {
    /**
     * The amount held on deposit for a registered identity
     **/
    basicDeposit: bigint;

    /**
     * The amount held on deposit per additional field for a registered identity.
     **/
    fieldDeposit: bigint;

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
     * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
     * required to access an identity, but can be pretty high.
     **/
    maxAdditionalFields: number;

    /**
     * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
     * of, e.g., updating judgements.
     **/
    maxRegistrars: number;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `CommitteeManagement`'s constants
   **/
  committeeManagement: {
    /**
     * Nr of blocks in the session.
     **/
    sessionPeriod: number;

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
   * Pallet `Operations`'s constants
   **/
  operations: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
}
