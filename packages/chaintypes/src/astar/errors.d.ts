// Generated by dedot cli

import type { GenericChainErrors, GenericPalletError, RpcVersion } from 'dedot/types';

export interface ChainErrors<Rv extends RpcVersion> extends GenericChainErrors<Rv> {
  /**
   * Pallet `System`'s errors
   **/
  system: {
    /**
     * The name of specification does not match between the current runtime
     * and the new runtime.
     **/
    InvalidSpecName: GenericPalletError<Rv>;

    /**
     * The specification version is not allowed to decrease between the current runtime
     * and the new runtime.
     **/
    SpecVersionNeedsToIncrease: GenericPalletError<Rv>;

    /**
     * Failed to extract the runtime version from the new runtime.
     *
     * Either calling `Core_version` or decoding `RuntimeVersion` failed.
     **/
    FailedToExtractRuntimeVersion: GenericPalletError<Rv>;

    /**
     * Suicide called when the account has non-default composite data.
     **/
    NonDefaultComposite: GenericPalletError<Rv>;

    /**
     * There is a non-zero reference count preventing the account from being purged.
     **/
    NonZeroRefCount: GenericPalletError<Rv>;

    /**
     * The origin filter prevent the call to be dispatched.
     **/
    CallFiltered: GenericPalletError<Rv>;

    /**
     * A multi-block migration is ongoing and prevents the current code from being replaced.
     **/
    MultiBlockMigrationsOngoing: GenericPalletError<Rv>;

    /**
     * No upgrade authorized.
     **/
    NothingAuthorized: GenericPalletError<Rv>;

    /**
     * The submitted code is not authorized.
     **/
    Unauthorized: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Utility`'s errors
   **/
  utility: {
    /**
     * Too many calls batched.
     **/
    TooManyCalls: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Identity`'s errors
   **/
  identity: {
    /**
     * Too many subs-accounts.
     **/
    TooManySubAccounts: GenericPalletError<Rv>;

    /**
     * Account isn't found.
     **/
    NotFound: GenericPalletError<Rv>;

    /**
     * Account isn't named.
     **/
    NotNamed: GenericPalletError<Rv>;

    /**
     * Empty index.
     **/
    EmptyIndex: GenericPalletError<Rv>;

    /**
     * Fee is changed.
     **/
    FeeChanged: GenericPalletError<Rv>;

    /**
     * No identity found.
     **/
    NoIdentity: GenericPalletError<Rv>;

    /**
     * Sticky judgement.
     **/
    StickyJudgement: GenericPalletError<Rv>;

    /**
     * Judgement given.
     **/
    JudgementGiven: GenericPalletError<Rv>;

    /**
     * Invalid judgement.
     **/
    InvalidJudgement: GenericPalletError<Rv>;

    /**
     * The index is invalid.
     **/
    InvalidIndex: GenericPalletError<Rv>;

    /**
     * The target is invalid.
     **/
    InvalidTarget: GenericPalletError<Rv>;

    /**
     * Maximum amount of registrars reached. Cannot add any more.
     **/
    TooManyRegistrars: GenericPalletError<Rv>;

    /**
     * Account ID is already named.
     **/
    AlreadyClaimed: GenericPalletError<Rv>;

    /**
     * Sender is not a sub-account.
     **/
    NotSub: GenericPalletError<Rv>;

    /**
     * Sub-account isn't owned by sender.
     **/
    NotOwned: GenericPalletError<Rv>;

    /**
     * The provided judgement was for a different identity.
     **/
    JudgementForDifferentIdentity: GenericPalletError<Rv>;

    /**
     * Error that occurs when there is an issue paying for judgement.
     **/
    JudgementPaymentFailed: GenericPalletError<Rv>;

    /**
     * The provided suffix is too long.
     **/
    InvalidSuffix: GenericPalletError<Rv>;

    /**
     * The sender does not have permission to issue a username.
     **/
    NotUsernameAuthority: GenericPalletError<Rv>;

    /**
     * The authority cannot allocate any more usernames.
     **/
    NoAllocation: GenericPalletError<Rv>;

    /**
     * The signature on a username was not valid.
     **/
    InvalidSignature: GenericPalletError<Rv>;

    /**
     * Setting this username requires a signature, but none was provided.
     **/
    RequiresSignature: GenericPalletError<Rv>;

    /**
     * The username does not meet the requirements.
     **/
    InvalidUsername: GenericPalletError<Rv>;

    /**
     * The username is already taken.
     **/
    UsernameTaken: GenericPalletError<Rv>;

    /**
     * The requested username does not exist.
     **/
    NoUsername: GenericPalletError<Rv>;

    /**
     * The username cannot be forcefully removed because it can still be accepted.
     **/
    NotExpired: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Multisig`'s errors
   **/
  multisig: {
    /**
     * Threshold must be 2 or greater.
     **/
    MinimumThreshold: GenericPalletError<Rv>;

    /**
     * Call is already approved by this signatory.
     **/
    AlreadyApproved: GenericPalletError<Rv>;

    /**
     * Call doesn't need any (more) approvals.
     **/
    NoApprovalsNeeded: GenericPalletError<Rv>;

    /**
     * There are too few signatories in the list.
     **/
    TooFewSignatories: GenericPalletError<Rv>;

    /**
     * There are too many signatories in the list.
     **/
    TooManySignatories: GenericPalletError<Rv>;

    /**
     * The signatories were provided out of order; they should be ordered.
     **/
    SignatoriesOutOfOrder: GenericPalletError<Rv>;

    /**
     * The sender was contained in the other signatories; it shouldn't be.
     **/
    SenderInSignatories: GenericPalletError<Rv>;

    /**
     * Multisig operation not found when attempting to cancel.
     **/
    NotFound: GenericPalletError<Rv>;

    /**
     * Only the account that originally created the multisig is able to cancel it.
     **/
    NotOwner: GenericPalletError<Rv>;

    /**
     * No timepoint was given, yet the multisig operation is already underway.
     **/
    NoTimepoint: GenericPalletError<Rv>;

    /**
     * A different timepoint was given to the multisig operation that is underway.
     **/
    WrongTimepoint: GenericPalletError<Rv>;

    /**
     * A timepoint was given, yet no multisig operation is underway.
     **/
    UnexpectedTimepoint: GenericPalletError<Rv>;

    /**
     * The maximum weight information provided was too low.
     **/
    MaxWeightTooLow: GenericPalletError<Rv>;

    /**
     * The data to be stored is already stored.
     **/
    AlreadyStored: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Proxy`'s errors
   **/
  proxy: {
    /**
     * There are too many proxies registered or too many announcements pending.
     **/
    TooMany: GenericPalletError<Rv>;

    /**
     * Proxy registration not found.
     **/
    NotFound: GenericPalletError<Rv>;

    /**
     * Sender is not a proxy of the account to be proxied.
     **/
    NotProxy: GenericPalletError<Rv>;

    /**
     * A call which is incompatible with the proxy type's filter was attempted.
     **/
    Unproxyable: GenericPalletError<Rv>;

    /**
     * Account is already a proxy.
     **/
    Duplicate: GenericPalletError<Rv>;

    /**
     * Call may not be made by proxy because it may escalate its privileges.
     **/
    NoPermission: GenericPalletError<Rv>;

    /**
     * Announcement, if made at all, was made too recently.
     **/
    Unannounced: GenericPalletError<Rv>;

    /**
     * Cannot add self as proxy.
     **/
    NoSelfProxy: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `ParachainSystem`'s errors
   **/
  parachainSystem: {
    /**
     * Attempt to upgrade validation function while existing upgrade pending.
     **/
    OverlappingUpgrades: GenericPalletError<Rv>;

    /**
     * Polkadot currently prohibits this parachain from upgrading its validation function.
     **/
    ProhibitedByPolkadot: GenericPalletError<Rv>;

    /**
     * The supplied validation function has compiled into a blob larger than Polkadot is
     * willing to run.
     **/
    TooBig: GenericPalletError<Rv>;

    /**
     * The inherent which supplies the validation data did not run this block.
     **/
    ValidationDataNotAvailable: GenericPalletError<Rv>;

    /**
     * The inherent which supplies the host configuration did not run this block.
     **/
    HostConfigurationNotAvailable: GenericPalletError<Rv>;

    /**
     * No validation function upgrade is currently scheduled.
     **/
    NotScheduled: GenericPalletError<Rv>;

    /**
     * No code upgrade has been authorized.
     **/
    NothingAuthorized: GenericPalletError<Rv>;

    /**
     * The given code upgrade has not been authorized.
     **/
    Unauthorized: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Balances`'s errors
   **/
  balances: {
    /**
     * Vesting balance too high to send value.
     **/
    VestingBalance: GenericPalletError<Rv>;

    /**
     * Account liquidity restrictions prevent withdrawal.
     **/
    LiquidityRestrictions: GenericPalletError<Rv>;

    /**
     * Balance too low to send value.
     **/
    InsufficientBalance: GenericPalletError<Rv>;

    /**
     * Value too low to create account due to existential deposit.
     **/
    ExistentialDeposit: GenericPalletError<Rv>;

    /**
     * Transfer/payment would kill account.
     **/
    Expendability: GenericPalletError<Rv>;

    /**
     * A vesting schedule already exists for this account.
     **/
    ExistingVestingSchedule: GenericPalletError<Rv>;

    /**
     * Beneficiary account must pre-exist.
     **/
    DeadAccount: GenericPalletError<Rv>;

    /**
     * Number of named reserves exceed `MaxReserves`.
     **/
    TooManyReserves: GenericPalletError<Rv>;

    /**
     * Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
     **/
    TooManyHolds: GenericPalletError<Rv>;

    /**
     * Number of freezes exceed `MaxFreezes`.
     **/
    TooManyFreezes: GenericPalletError<Rv>;

    /**
     * The issuance cannot be modified since it is already deactivated.
     **/
    IssuanceDeactivated: GenericPalletError<Rv>;

    /**
     * The delta cannot be zero.
     **/
    DeltaZero: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Vesting`'s errors
   **/
  vesting: {
    /**
     * The account given is not vesting.
     **/
    NotVesting: GenericPalletError<Rv>;

    /**
     * The account already has `MaxVestingSchedules` count of schedules and thus
     * cannot add another one. Consider merging existing schedules in order to add another.
     **/
    AtMaxVestingSchedules: GenericPalletError<Rv>;

    /**
     * Amount being transferred is too low to create a vesting schedule.
     **/
    AmountLow: GenericPalletError<Rv>;

    /**
     * An index was out of bounds of the vesting schedules.
     **/
    ScheduleIndexOutOfBounds: GenericPalletError<Rv>;

    /**
     * Failed to create a new schedule because some parameter was invalid.
     **/
    InvalidScheduleParams: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Inflation`'s errors
   **/
  inflation: {
    /**
     * Sum of all parts must be one whole (100%).
     **/
    InvalidInflationParameters: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `DappStaking`'s errors
   **/
  dappStaking: {
    /**
     * Pallet is disabled/in maintenance mode.
     **/
    Disabled: GenericPalletError<Rv>;

    /**
     * Smart contract already exists within dApp staking protocol.
     **/
    ContractAlreadyExists: GenericPalletError<Rv>;

    /**
     * Maximum number of smart contracts has been reached.
     **/
    ExceededMaxNumberOfContracts: GenericPalletError<Rv>;

    /**
     * Not possible to assign a new dApp Id.
     * This should never happen since current type can support up to 65536 - 1 unique dApps.
     **/
    NewDAppIdUnavailable: GenericPalletError<Rv>;

    /**
     * Specified smart contract does not exist in dApp staking.
     **/
    ContractNotFound: GenericPalletError<Rv>;

    /**
     * Call origin is not dApp owner.
     **/
    OriginNotOwner: GenericPalletError<Rv>;

    /**
     * Performing locking or staking with 0 amount.
     **/
    ZeroAmount: GenericPalletError<Rv>;

    /**
     * Total locked amount for staker is below minimum threshold.
     **/
    LockedAmountBelowThreshold: GenericPalletError<Rv>;

    /**
     * Account is not allowed to participate in dApp staking due to some external reason (e.g. account is already a collator).
     **/
    AccountNotAvailableForDappStaking: GenericPalletError<Rv>;

    /**
     * Cannot add additional unlocking chunks due to capacity limit.
     **/
    TooManyUnlockingChunks: GenericPalletError<Rv>;

    /**
     * Remaining stake prevents entire balance of starting the unlocking process.
     **/
    RemainingStakePreventsFullUnlock: GenericPalletError<Rv>;

    /**
     * There are no eligible unlocked chunks to claim. This can happen either if no eligible chunks exist, or if user has no chunks at all.
     **/
    NoUnlockedChunksToClaim: GenericPalletError<Rv>;

    /**
     * There are no unlocking chunks available to relock.
     **/
    NoUnlockingChunks: GenericPalletError<Rv>;

    /**
     * The amount being staked is too large compared to what's available for staking.
     **/
    UnavailableStakeFunds: GenericPalletError<Rv>;

    /**
     * There are unclaimed rewards remaining from past eras or periods. They should be claimed before attempting any stake modification again.
     **/
    UnclaimedRewards: GenericPalletError<Rv>;

    /**
     * An unexpected error occurred while trying to stake.
     **/
    InternalStakeError: GenericPalletError<Rv>;

    /**
     * Total staked amount on contract is below the minimum required value.
     **/
    InsufficientStakeAmount: GenericPalletError<Rv>;

    /**
     * Stake operation is rejected since period ends in the next era.
     **/
    PeriodEndsInNextEra: GenericPalletError<Rv>;

    /**
     * Unstaking is rejected since the period in which past stake was active has passed.
     **/
    UnstakeFromPastPeriod: GenericPalletError<Rv>;

    /**
     * Unstake amount is greater than the staked amount.
     **/
    UnstakeAmountTooLarge: GenericPalletError<Rv>;

    /**
     * Account has no staking information for the contract.
     **/
    NoStakingInfo: GenericPalletError<Rv>;

    /**
     * An unexpected error occurred while trying to unstake.
     **/
    InternalUnstakeError: GenericPalletError<Rv>;

    /**
     * Rewards are no longer claimable since they are too old.
     **/
    RewardExpired: GenericPalletError<Rv>;

    /**
     * Reward payout has failed due to an unexpected reason.
     **/
    RewardPayoutFailed: GenericPalletError<Rv>;

    /**
     * There are no claimable rewards.
     **/
    NoClaimableRewards: GenericPalletError<Rv>;

    /**
     * An unexpected error occurred while trying to claim staker rewards.
     **/
    InternalClaimStakerError: GenericPalletError<Rv>;

    /**
     * Account is has no eligible stake amount for bonus reward.
     **/
    NotEligibleForBonusReward: GenericPalletError<Rv>;

    /**
     * An unexpected error occurred while trying to claim bonus reward.
     **/
    InternalClaimBonusError: GenericPalletError<Rv>;

    /**
     * Claim era is invalid - it must be in history, and rewards must exist for it.
     **/
    InvalidClaimEra: GenericPalletError<Rv>;

    /**
     * No dApp tier info exists for the specified era. This can be because era has expired
     * or because during the specified era there were no eligible rewards or protocol wasn't active.
     **/
    NoDAppTierInfo: GenericPalletError<Rv>;

    /**
     * An unexpected error occurred while trying to claim dApp reward.
     **/
    InternalClaimDAppError: GenericPalletError<Rv>;

    /**
     * Contract is still active, not unregistered.
     **/
    ContractStillActive: GenericPalletError<Rv>;

    /**
     * There are too many contract stake entries for the account. This can be cleaned up by either unstaking or cleaning expired entries.
     **/
    TooManyStakedContracts: GenericPalletError<Rv>;

    /**
     * There are no expired entries to cleanup for the account.
     **/
    NoExpiredEntries: GenericPalletError<Rv>;

    /**
     * Force call is not allowed in production.
     **/
    ForceNotAllowed: GenericPalletError<Rv>;

    /**
     * Account doesn't have the freeze inconsistency
     **/
    AccountNotInconsistent: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Assets`'s errors
   **/
  assets: {
    /**
     * Account balance must be greater than or equal to the transfer amount.
     **/
    BalanceLow: GenericPalletError<Rv>;

    /**
     * The account to alter does not exist.
     **/
    NoAccount: GenericPalletError<Rv>;

    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError<Rv>;

    /**
     * The given asset ID is unknown.
     **/
    Unknown: GenericPalletError<Rv>;

    /**
     * The origin account is frozen.
     **/
    Frozen: GenericPalletError<Rv>;

    /**
     * The asset ID is already taken.
     **/
    InUse: GenericPalletError<Rv>;

    /**
     * Invalid witness data given.
     **/
    BadWitness: GenericPalletError<Rv>;

    /**
     * Minimum balance should be non-zero.
     **/
    MinBalanceZero: GenericPalletError<Rv>;

    /**
     * Unable to increment the consumer reference counters on the account. Either no provider
     * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
     * fewer then the maximum number of consumers has been reached.
     **/
    UnavailableConsumer: GenericPalletError<Rv>;

    /**
     * Invalid metadata given.
     **/
    BadMetadata: GenericPalletError<Rv>;

    /**
     * No approval exists that would allow the transfer.
     **/
    Unapproved: GenericPalletError<Rv>;

    /**
     * The source account would not survive the transfer and it needs to stay alive.
     **/
    WouldDie: GenericPalletError<Rv>;

    /**
     * The asset-account already exists.
     **/
    AlreadyExists: GenericPalletError<Rv>;

    /**
     * The asset-account doesn't have an associated deposit.
     **/
    NoDeposit: GenericPalletError<Rv>;

    /**
     * The operation would result in funds being burned.
     **/
    WouldBurn: GenericPalletError<Rv>;

    /**
     * The asset is a live asset and is actively being used. Usually emit for operations such
     * as `start_destroy` which require the asset to be in a destroying state.
     **/
    LiveAsset: GenericPalletError<Rv>;

    /**
     * The asset is not live, and likely being destroyed.
     **/
    AssetNotLive: GenericPalletError<Rv>;

    /**
     * The asset status is not the expected status.
     **/
    IncorrectStatus: GenericPalletError<Rv>;

    /**
     * The asset should be frozen before the given operation.
     **/
    NotFrozen: GenericPalletError<Rv>;

    /**
     * Callback action resulted in error
     **/
    CallbackFailed: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Oracle`'s errors
   **/
  oracle: {
    /**
     * Sender does not have permission
     **/
    NoPermission: GenericPalletError<Rv>;

    /**
     * Feeder has already feeded at this block
     **/
    AlreadyFeeded: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `OracleMembership`'s errors
   **/
  oracleMembership: {
    /**
     * Already a member.
     **/
    AlreadyMember: GenericPalletError<Rv>;

    /**
     * Not a member.
     **/
    NotMember: GenericPalletError<Rv>;

    /**
     * Too many members.
     **/
    TooManyMembers: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `CollatorSelection`'s errors
   **/
  collatorSelection: {
    /**
     * Too many candidates
     **/
    TooManyCandidates: GenericPalletError<Rv>;

    /**
     * Too few candidates
     **/
    TooFewCandidates: GenericPalletError<Rv>;

    /**
     * Unknown error
     **/
    Unknown: GenericPalletError<Rv>;

    /**
     * Permission issue
     **/
    Permission: GenericPalletError<Rv>;

    /**
     * User is already a candidate
     **/
    AlreadyCandidate: GenericPalletError<Rv>;

    /**
     * User is not a candidate
     **/
    NotCandidate: GenericPalletError<Rv>;

    /**
     * User is already an Invulnerable
     **/
    AlreadyInvulnerable: GenericPalletError<Rv>;

    /**
     * Account has no associated validator ID
     **/
    NoAssociatedValidatorId: GenericPalletError<Rv>;

    /**
     * Validator ID is not yet registered
     **/
    ValidatorNotRegistered: GenericPalletError<Rv>;

    /**
     * Account is now allowed to be a candidate due to an external reason (e.g. it might be participating in dApp staking)
     **/
    NotAllowedCandidate: GenericPalletError<Rv>;

    /**
     * The candidacy bond is currently in the un-bonding period.
     **/
    BondStillLocked: GenericPalletError<Rv>;

    /**
     * No candidacy bond available for withdrawal.
     **/
    NoCandidacyBond: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Session`'s errors
   **/
  session: {
    /**
     * Invalid ownership proof.
     **/
    InvalidProof: GenericPalletError<Rv>;

    /**
     * No associated validator ID for account.
     **/
    NoAssociatedValidatorId: GenericPalletError<Rv>;

    /**
     * Registered duplicate key.
     **/
    DuplicatedKey: GenericPalletError<Rv>;

    /**
     * No keys are associated with this account.
     **/
    NoKeys: GenericPalletError<Rv>;

    /**
     * Key setting account is not live, so it's impossible to associate keys.
     **/
    NoAccount: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `XcmpQueue`'s errors
   **/
  xcmpQueue: {
    /**
     * Setting the queue config failed since one of its values was invalid.
     **/
    BadQueueConfig: GenericPalletError<Rv>;

    /**
     * The execution is already suspended.
     **/
    AlreadySuspended: GenericPalletError<Rv>;

    /**
     * The execution is already resumed.
     **/
    AlreadyResumed: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `PolkadotXcm`'s errors
   **/
  polkadotXcm: {
    /**
     * The desired destination was unreachable, generally because there is a no way of routing
     * to it.
     **/
    Unreachable: GenericPalletError<Rv>;

    /**
     * There was some other issue (i.e. not to do with routing) in sending the message.
     * Perhaps a lack of space for buffering the message.
     **/
    SendFailure: GenericPalletError<Rv>;

    /**
     * The message execution fails the filter.
     **/
    Filtered: GenericPalletError<Rv>;

    /**
     * The message's weight could not be determined.
     **/
    UnweighableMessage: GenericPalletError<Rv>;

    /**
     * The destination `Location` provided cannot be inverted.
     **/
    DestinationNotInvertible: GenericPalletError<Rv>;

    /**
     * The assets to be sent are empty.
     **/
    Empty: GenericPalletError<Rv>;

    /**
     * Could not re-anchor the assets to declare the fees for the destination chain.
     **/
    CannotReanchor: GenericPalletError<Rv>;

    /**
     * Too many assets have been attempted for transfer.
     **/
    TooManyAssets: GenericPalletError<Rv>;

    /**
     * Origin is invalid for sending.
     **/
    InvalidOrigin: GenericPalletError<Rv>;

    /**
     * The version of the `Versioned` value used is not able to be interpreted.
     **/
    BadVersion: GenericPalletError<Rv>;

    /**
     * The given location could not be used (e.g. because it cannot be expressed in the
     * desired version of XCM).
     **/
    BadLocation: GenericPalletError<Rv>;

    /**
     * The referenced subscription could not be found.
     **/
    NoSubscription: GenericPalletError<Rv>;

    /**
     * The location is invalid since it already has a subscription from us.
     **/
    AlreadySubscribed: GenericPalletError<Rv>;

    /**
     * Could not check-out the assets for teleportation to the destination chain.
     **/
    CannotCheckOutTeleport: GenericPalletError<Rv>;

    /**
     * The owner does not own (all) of the asset that they wish to do the operation on.
     **/
    LowBalance: GenericPalletError<Rv>;

    /**
     * The asset owner has too many locks on the asset.
     **/
    TooManyLocks: GenericPalletError<Rv>;

    /**
     * The given account is not an identifiable sovereign account for any location.
     **/
    AccountNotSovereign: GenericPalletError<Rv>;

    /**
     * The operation required fees to be paid which the initiator could not meet.
     **/
    FeesNotMet: GenericPalletError<Rv>;

    /**
     * A remote lock with the corresponding data could not be found.
     **/
    LockNotFound: GenericPalletError<Rv>;

    /**
     * The unlock operation cannot succeed because there are still consumers of the lock.
     **/
    InUse: GenericPalletError<Rv>;

    /**
     * Invalid asset, reserve chain could not be determined for it.
     **/
    InvalidAssetUnknownReserve: GenericPalletError<Rv>;

    /**
     * Invalid asset, do not support remote asset reserves with different fees reserves.
     **/
    InvalidAssetUnsupportedReserve: GenericPalletError<Rv>;

    /**
     * Too many assets with different reserve locations have been attempted for transfer.
     **/
    TooManyReserves: GenericPalletError<Rv>;

    /**
     * Local XCM execution incomplete.
     **/
    LocalExecutionIncomplete: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `XcAssetConfig`'s errors
   **/
  xcAssetConfig: {
    /**
     * Asset is already registered.
     **/
    AssetAlreadyRegistered: GenericPalletError<Rv>;

    /**
     * Asset does not exist (hasn't been registered).
     **/
    AssetDoesNotExist: GenericPalletError<Rv>;

    /**
     * Failed to convert to latest versioned Location
     **/
    MultiLocationNotSupported: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `XTokens`'s errors
   **/
  xTokens: {
    /**
     * Asset has no reserve location.
     **/
    AssetHasNoReserve: GenericPalletError<Rv>;

    /**
     * Not cross-chain transfer.
     **/
    NotCrossChainTransfer: GenericPalletError<Rv>;

    /**
     * Invalid transfer destination.
     **/
    InvalidDest: GenericPalletError<Rv>;

    /**
     * Currency is not cross-chain transferable.
     **/
    NotCrossChainTransferableCurrency: GenericPalletError<Rv>;

    /**
     * The message's weight could not be determined.
     **/
    UnweighableMessage: GenericPalletError<Rv>;

    /**
     * XCM execution failed.
     **/
    XcmExecutionFailed: GenericPalletError<Rv>;

    /**
     * Could not re-anchor the assets to declare the fees for the
     * destination chain.
     **/
    CannotReanchor: GenericPalletError<Rv>;

    /**
     * Could not get ancestry of asset reserve location.
     **/
    InvalidAncestry: GenericPalletError<Rv>;

    /**
     * The Asset is invalid.
     **/
    InvalidAsset: GenericPalletError<Rv>;

    /**
     * The destination `Location` provided cannot be inverted.
     **/
    DestinationNotInvertible: GenericPalletError<Rv>;

    /**
     * The version of the `Versioned` value used is not able to be
     * interpreted.
     **/
    BadVersion: GenericPalletError<Rv>;

    /**
     * We tried sending distinct asset and fee but they have different
     * reserve chains.
     **/
    DistinctReserveForAssetAndFee: GenericPalletError<Rv>;

    /**
     * The fee is zero.
     **/
    ZeroFee: GenericPalletError<Rv>;

    /**
     * The transfering asset amount is zero.
     **/
    ZeroAmount: GenericPalletError<Rv>;

    /**
     * The number of assets to be sent is over the maximum.
     **/
    TooManyAssetsBeingSent: GenericPalletError<Rv>;

    /**
     * The specified index does not exist in a Assets struct.
     **/
    AssetIndexNonExistent: GenericPalletError<Rv>;

    /**
     * Fee is not enough.
     **/
    FeeNotEnough: GenericPalletError<Rv>;

    /**
     * Not supported Location
     **/
    NotSupportedLocation: GenericPalletError<Rv>;

    /**
     * MinXcmFee not registered for certain reserve location
     **/
    MinXcmFeeNotDefined: GenericPalletError<Rv>;

    /**
     * Asset transfer is limited by RateLimiter.
     **/
    RateLimited: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `MessageQueue`'s errors
   **/
  messageQueue: {
    /**
     * Page is not reapable because it has items remaining to be processed and is not old
     * enough.
     **/
    NotReapable: GenericPalletError<Rv>;

    /**
     * Page to be reaped does not exist.
     **/
    NoPage: GenericPalletError<Rv>;

    /**
     * The referenced message could not be found.
     **/
    NoMessage: GenericPalletError<Rv>;

    /**
     * The message was already processed and cannot be processed again.
     **/
    AlreadyProcessed: GenericPalletError<Rv>;

    /**
     * The message is queued for future execution.
     **/
    Queued: GenericPalletError<Rv>;

    /**
     * There is temporarily not enough weight to continue servicing messages.
     **/
    InsufficientWeight: GenericPalletError<Rv>;

    /**
     * This message is temporarily unprocessable.
     *
     * Such errors are expected, but not guaranteed, to resolve themselves eventually through
     * retrying.
     **/
    TemporarilyUnprocessable: GenericPalletError<Rv>;

    /**
     * The queue is paused and no message can be executed from it.
     *
     * This can change at any time and may resolve in the future by re-trying.
     **/
    QueuePaused: GenericPalletError<Rv>;

    /**
     * Another call is in progress and needs to finish before this call can happen.
     **/
    RecursiveDisallowed: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `EVM`'s errors
   **/
  evm: {
    /**
     * Not enough balance to perform action
     **/
    BalanceLow: GenericPalletError<Rv>;

    /**
     * Calculating total fee overflowed
     **/
    FeeOverflow: GenericPalletError<Rv>;

    /**
     * Calculating total payment overflowed
     **/
    PaymentOverflow: GenericPalletError<Rv>;

    /**
     * Withdraw fee failed
     **/
    WithdrawFailed: GenericPalletError<Rv>;

    /**
     * Gas price is too low.
     **/
    GasPriceTooLow: GenericPalletError<Rv>;

    /**
     * Nonce is invalid
     **/
    InvalidNonce: GenericPalletError<Rv>;

    /**
     * Gas limit is too low.
     **/
    GasLimitTooLow: GenericPalletError<Rv>;

    /**
     * Gas limit is too high.
     **/
    GasLimitTooHigh: GenericPalletError<Rv>;

    /**
     * The chain id is invalid.
     **/
    InvalidChainId: GenericPalletError<Rv>;

    /**
     * the signature is invalid.
     **/
    InvalidSignature: GenericPalletError<Rv>;

    /**
     * EVM reentrancy
     **/
    Reentrancy: GenericPalletError<Rv>;

    /**
     * EIP-3607,
     **/
    TransactionMustComeFromEOA: GenericPalletError<Rv>;

    /**
     * Undefined error.
     **/
    Undefined: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Ethereum`'s errors
   **/
  ethereum: {
    /**
     * Signature is invalid.
     **/
    InvalidSignature: GenericPalletError<Rv>;

    /**
     * Pre-log is present, therefore transact is not allowed.
     **/
    PreLogExists: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `DynamicEvmBaseFee`'s errors
   **/
  dynamicEvmBaseFee: {
    /**
     * Specified value is outside of the allowed range.
     **/
    ValueOutOfBounds: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Contracts`'s errors
   **/
  contracts: {
    /**
     * Invalid schedule supplied, e.g. with zero weight of a basic operation.
     **/
    InvalidSchedule: GenericPalletError<Rv>;

    /**
     * Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
     **/
    InvalidCallFlags: GenericPalletError<Rv>;

    /**
     * The executed contract exhausted its gas limit.
     **/
    OutOfGas: GenericPalletError<Rv>;

    /**
     * The output buffer supplied to a contract API call was too small.
     **/
    OutputBufferTooSmall: GenericPalletError<Rv>;

    /**
     * Performing the requested transfer failed. Probably because there isn't enough
     * free balance in the sender's account.
     **/
    TransferFailed: GenericPalletError<Rv>;

    /**
     * Performing a call was denied because the calling depth reached the limit
     * of what is specified in the schedule.
     **/
    MaxCallDepthReached: GenericPalletError<Rv>;

    /**
     * No contract was found at the specified address.
     **/
    ContractNotFound: GenericPalletError<Rv>;

    /**
     * The code supplied to `instantiate_with_code` exceeds the limit specified in the
     * current schedule.
     **/
    CodeTooLarge: GenericPalletError<Rv>;

    /**
     * No code could be found at the supplied code hash.
     **/
    CodeNotFound: GenericPalletError<Rv>;

    /**
     * No code info could be found at the supplied code hash.
     **/
    CodeInfoNotFound: GenericPalletError<Rv>;

    /**
     * A buffer outside of sandbox memory was passed to a contract API function.
     **/
    OutOfBounds: GenericPalletError<Rv>;

    /**
     * Input passed to a contract API function failed to decode as expected type.
     **/
    DecodingFailed: GenericPalletError<Rv>;

    /**
     * Contract trapped during execution.
     **/
    ContractTrapped: GenericPalletError<Rv>;

    /**
     * The size defined in `T::MaxValueSize` was exceeded.
     **/
    ValueTooLarge: GenericPalletError<Rv>;

    /**
     * Termination of a contract is not allowed while the contract is already
     * on the call stack. Can be triggered by `seal_terminate`.
     **/
    TerminatedWhileReentrant: GenericPalletError<Rv>;

    /**
     * `seal_call` forwarded this contracts input. It therefore is no longer available.
     **/
    InputForwarded: GenericPalletError<Rv>;

    /**
     * The subject passed to `seal_random` exceeds the limit.
     **/
    RandomSubjectTooLong: GenericPalletError<Rv>;

    /**
     * The amount of topics passed to `seal_deposit_events` exceeds the limit.
     **/
    TooManyTopics: GenericPalletError<Rv>;

    /**
     * The chain does not provide a chain extension. Calling the chain extension results
     * in this error. Note that this usually shouldn't happen as deploying such contracts
     * is rejected.
     **/
    NoChainExtension: GenericPalletError<Rv>;

    /**
     * Failed to decode the XCM program.
     **/
    XcmDecodeFailed: GenericPalletError<Rv>;

    /**
     * A contract with the same AccountId already exists.
     **/
    DuplicateContract: GenericPalletError<Rv>;

    /**
     * A contract self destructed in its constructor.
     *
     * This can be triggered by a call to `seal_terminate`.
     **/
    TerminatedInConstructor: GenericPalletError<Rv>;

    /**
     * A call tried to invoke a contract that is flagged as non-reentrant.
     * The only other cause is that a call from a contract into the runtime tried to call back
     * into `pallet-contracts`. This would make the whole pallet reentrant with regard to
     * contract code execution which is not supported.
     **/
    ReentranceDenied: GenericPalletError<Rv>;

    /**
     * Origin doesn't have enough balance to pay the required storage deposits.
     **/
    StorageDepositNotEnoughFunds: GenericPalletError<Rv>;

    /**
     * More storage was created than allowed by the storage deposit limit.
     **/
    StorageDepositLimitExhausted: GenericPalletError<Rv>;

    /**
     * Code removal was denied because the code is still in use by at least one contract.
     **/
    CodeInUse: GenericPalletError<Rv>;

    /**
     * The contract ran to completion but decided to revert its storage changes.
     * Please note that this error is only returned from extrinsics. When called directly
     * or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
     * to determine whether a reversion has taken place.
     **/
    ContractReverted: GenericPalletError<Rv>;

    /**
     * The contract's code was found to be invalid during validation.
     *
     * The most likely cause of this is that an API was used which is not supported by the
     * node. This happens if an older node is used with a new version of ink!. Try updating
     * your node to the newest available version.
     *
     * A more detailed error can be found on the node console if debug messages are enabled
     * by supplying `-lruntime::contracts=debug`.
     **/
    CodeRejected: GenericPalletError<Rv>;

    /**
     * An indeterministic code was used in a context where this is not permitted.
     **/
    Indeterministic: GenericPalletError<Rv>;

    /**
     * A pending migration needs to complete before the extrinsic can be called.
     **/
    MigrationInProgress: GenericPalletError<Rv>;

    /**
     * Migrate dispatch call was attempted but no migration was performed.
     **/
    NoMigrationPerformed: GenericPalletError<Rv>;

    /**
     * The contract has reached its maximum number of delegate dependencies.
     **/
    MaxDelegateDependenciesReached: GenericPalletError<Rv>;

    /**
     * The dependency was not found in the contract's delegate dependencies.
     **/
    DelegateDependencyNotFound: GenericPalletError<Rv>;

    /**
     * The contract already depends on the given delegate dependency.
     **/
    DelegateDependencyAlreadyExists: GenericPalletError<Rv>;

    /**
     * Can not add a delegate dependency to the code hash of the contract itself.
     **/
    CannotAddSelfAsDelegateDependency: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Sudo`'s errors
   **/
  sudo: {
    /**
     * Sender must be the Sudo account.
     **/
    RequireSudo: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
}
