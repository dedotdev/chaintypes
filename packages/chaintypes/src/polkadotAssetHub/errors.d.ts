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
   * Pallet `CollatorSelection`'s errors
   **/
  collatorSelection: {
    /**
     * The pallet has too many candidates.
     **/
    TooManyCandidates: GenericPalletError<Rv>;

    /**
     * Leaving would result in too few candidates.
     **/
    TooFewEligibleCollators: GenericPalletError<Rv>;

    /**
     * Account is already a candidate.
     **/
    AlreadyCandidate: GenericPalletError<Rv>;

    /**
     * Account is not a candidate.
     **/
    NotCandidate: GenericPalletError<Rv>;

    /**
     * There are too many Invulnerables.
     **/
    TooManyInvulnerables: GenericPalletError<Rv>;

    /**
     * Account is already an Invulnerable.
     **/
    AlreadyInvulnerable: GenericPalletError<Rv>;

    /**
     * Account is not an Invulnerable.
     **/
    NotInvulnerable: GenericPalletError<Rv>;

    /**
     * Account has no associated validator ID.
     **/
    NoAssociatedValidatorId: GenericPalletError<Rv>;

    /**
     * Validator ID is not yet registered.
     **/
    ValidatorNotRegistered: GenericPalletError<Rv>;

    /**
     * Could not insert in the candidate list.
     **/
    InsertToCandidateListFailed: GenericPalletError<Rv>;

    /**
     * Could not remove from the candidate list.
     **/
    RemoveFromCandidateListFailed: GenericPalletError<Rv>;

    /**
     * New deposit amount would be below the minimum candidacy bond.
     **/
    DepositTooLow: GenericPalletError<Rv>;

    /**
     * Could not update the candidate list.
     **/
    UpdateCandidateListFailed: GenericPalletError<Rv>;

    /**
     * Deposit amount is too low to take the target's slot in the candidate list.
     **/
    InsufficientBond: GenericPalletError<Rv>;

    /**
     * The target account to be replaced in the candidate list is not a candidate.
     **/
    TargetIsNotCandidate: GenericPalletError<Rv>;

    /**
     * The updated deposit amount is equal to the amount already reserved.
     **/
    IdenticalDeposit: GenericPalletError<Rv>;

    /**
     * Cannot lower candidacy bond while occupying a future collator slot in the list.
     **/
    InvalidUnreserve: GenericPalletError<Rv>;

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
     * Invalid non-concrete asset.
     **/
    InvalidAssetNotConcrete: GenericPalletError<Rv>;

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
   * Pallet `Uniques`'s errors
   **/
  uniques: {
    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError<Rv>;

    /**
     * The given item ID is unknown.
     **/
    UnknownCollection: GenericPalletError<Rv>;

    /**
     * The item ID has already been used for an item.
     **/
    AlreadyExists: GenericPalletError<Rv>;

    /**
     * The owner turned out to be different to what was expected.
     **/
    WrongOwner: GenericPalletError<Rv>;

    /**
     * Invalid witness data given.
     **/
    BadWitness: GenericPalletError<Rv>;

    /**
     * The item ID is already taken.
     **/
    InUse: GenericPalletError<Rv>;

    /**
     * The item or collection is frozen.
     **/
    Frozen: GenericPalletError<Rv>;

    /**
     * The delegate turned out to be different to what was expected.
     **/
    WrongDelegate: GenericPalletError<Rv>;

    /**
     * There is no delegate approved.
     **/
    NoDelegate: GenericPalletError<Rv>;

    /**
     * No approval exists that would allow the transfer.
     **/
    Unapproved: GenericPalletError<Rv>;

    /**
     * The named owner has not signed ownership of the collection is acceptable.
     **/
    Unaccepted: GenericPalletError<Rv>;

    /**
     * The item is locked.
     **/
    Locked: GenericPalletError<Rv>;

    /**
     * All items have been minted.
     **/
    MaxSupplyReached: GenericPalletError<Rv>;

    /**
     * The max supply has already been set.
     **/
    MaxSupplyAlreadySet: GenericPalletError<Rv>;

    /**
     * The provided max supply is less to the amount of items a collection already has.
     **/
    MaxSupplyTooSmall: GenericPalletError<Rv>;

    /**
     * The given item ID is unknown.
     **/
    UnknownItem: GenericPalletError<Rv>;

    /**
     * Item is not for sale.
     **/
    NotForSale: GenericPalletError<Rv>;

    /**
     * The provided bid is too low.
     **/
    BidTooLow: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `Nfts`'s errors
   **/
  nfts: {
    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError<Rv>;

    /**
     * The given item ID is unknown.
     **/
    UnknownCollection: GenericPalletError<Rv>;

    /**
     * The item ID has already been used for an item.
     **/
    AlreadyExists: GenericPalletError<Rv>;

    /**
     * The approval had a deadline that expired, so the approval isn't valid anymore.
     **/
    ApprovalExpired: GenericPalletError<Rv>;

    /**
     * The owner turned out to be different to what was expected.
     **/
    WrongOwner: GenericPalletError<Rv>;

    /**
     * The witness data given does not match the current state of the chain.
     **/
    BadWitness: GenericPalletError<Rv>;

    /**
     * Collection ID is already taken.
     **/
    CollectionIdInUse: GenericPalletError<Rv>;

    /**
     * Items within that collection are non-transferable.
     **/
    ItemsNonTransferable: GenericPalletError<Rv>;

    /**
     * The provided account is not a delegate.
     **/
    NotDelegate: GenericPalletError<Rv>;

    /**
     * The delegate turned out to be different to what was expected.
     **/
    WrongDelegate: GenericPalletError<Rv>;

    /**
     * No approval exists that would allow the transfer.
     **/
    Unapproved: GenericPalletError<Rv>;

    /**
     * The named owner has not signed ownership acceptance of the collection.
     **/
    Unaccepted: GenericPalletError<Rv>;

    /**
     * The item is locked (non-transferable).
     **/
    ItemLocked: GenericPalletError<Rv>;

    /**
     * Item's attributes are locked.
     **/
    LockedItemAttributes: GenericPalletError<Rv>;

    /**
     * Collection's attributes are locked.
     **/
    LockedCollectionAttributes: GenericPalletError<Rv>;

    /**
     * Item's metadata is locked.
     **/
    LockedItemMetadata: GenericPalletError<Rv>;

    /**
     * Collection's metadata is locked.
     **/
    LockedCollectionMetadata: GenericPalletError<Rv>;

    /**
     * All items have been minted.
     **/
    MaxSupplyReached: GenericPalletError<Rv>;

    /**
     * The max supply is locked and can't be changed.
     **/
    MaxSupplyLocked: GenericPalletError<Rv>;

    /**
     * The provided max supply is less than the number of items a collection already has.
     **/
    MaxSupplyTooSmall: GenericPalletError<Rv>;

    /**
     * The given item ID is unknown.
     **/
    UnknownItem: GenericPalletError<Rv>;

    /**
     * Swap doesn't exist.
     **/
    UnknownSwap: GenericPalletError<Rv>;

    /**
     * The given item has no metadata set.
     **/
    MetadataNotFound: GenericPalletError<Rv>;

    /**
     * The provided attribute can't be found.
     **/
    AttributeNotFound: GenericPalletError<Rv>;

    /**
     * Item is not for sale.
     **/
    NotForSale: GenericPalletError<Rv>;

    /**
     * The provided bid is too low.
     **/
    BidTooLow: GenericPalletError<Rv>;

    /**
     * The item has reached its approval limit.
     **/
    ReachedApprovalLimit: GenericPalletError<Rv>;

    /**
     * The deadline has already expired.
     **/
    DeadlineExpired: GenericPalletError<Rv>;

    /**
     * The duration provided should be less than or equal to `MaxDeadlineDuration`.
     **/
    WrongDuration: GenericPalletError<Rv>;

    /**
     * The method is disabled by system settings.
     **/
    MethodDisabled: GenericPalletError<Rv>;

    /**
     * The provided setting can't be set.
     **/
    WrongSetting: GenericPalletError<Rv>;

    /**
     * Item's config already exists and should be equal to the provided one.
     **/
    InconsistentItemConfig: GenericPalletError<Rv>;

    /**
     * Config for a collection or an item can't be found.
     **/
    NoConfig: GenericPalletError<Rv>;

    /**
     * Some roles were not cleared.
     **/
    RolesNotCleared: GenericPalletError<Rv>;

    /**
     * Mint has not started yet.
     **/
    MintNotStarted: GenericPalletError<Rv>;

    /**
     * Mint has already ended.
     **/
    MintEnded: GenericPalletError<Rv>;

    /**
     * The provided Item was already used for claiming.
     **/
    AlreadyClaimed: GenericPalletError<Rv>;

    /**
     * The provided data is incorrect.
     **/
    IncorrectData: GenericPalletError<Rv>;

    /**
     * The extrinsic was sent by the wrong origin.
     **/
    WrongOrigin: GenericPalletError<Rv>;

    /**
     * The provided signature is incorrect.
     **/
    WrongSignature: GenericPalletError<Rv>;

    /**
     * The provided metadata might be too long.
     **/
    IncorrectMetadata: GenericPalletError<Rv>;

    /**
     * Can't set more attributes per one call.
     **/
    MaxAttributesLimitReached: GenericPalletError<Rv>;

    /**
     * The provided namespace isn't supported in this call.
     **/
    WrongNamespace: GenericPalletError<Rv>;

    /**
     * Can't delete non-empty collections.
     **/
    CollectionNotEmpty: GenericPalletError<Rv>;

    /**
     * The witness data should be provided.
     **/
    WitnessRequired: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
  /**
   * Pallet `ForeignAssets`'s errors
   **/
  foreignAssets: {
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
   * Pallet `PoolAssets`'s errors
   **/
  poolAssets: {
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
   * Pallet `AssetConversion`'s errors
   **/
  assetConversion: {
    /**
     * Provided asset pair is not supported for pool.
     **/
    InvalidAssetPair: GenericPalletError<Rv>;

    /**
     * Pool already exists.
     **/
    PoolExists: GenericPalletError<Rv>;

    /**
     * Desired amount can't be zero.
     **/
    WrongDesiredAmount: GenericPalletError<Rv>;

    /**
     * Provided amount should be greater than or equal to the existential deposit/asset's
     * minimal amount.
     **/
    AmountOneLessThanMinimal: GenericPalletError<Rv>;

    /**
     * Provided amount should be greater than or equal to the existential deposit/asset's
     * minimal amount.
     **/
    AmountTwoLessThanMinimal: GenericPalletError<Rv>;

    /**
     * Reserve needs to always be greater than or equal to the existential deposit/asset's
     * minimal amount.
     **/
    ReserveLeftLessThanMinimal: GenericPalletError<Rv>;

    /**
     * Desired amount can't be equal to the pool reserve.
     **/
    AmountOutTooHigh: GenericPalletError<Rv>;

    /**
     * The pool doesn't exist.
     **/
    PoolNotFound: GenericPalletError<Rv>;

    /**
     * An overflow happened.
     **/
    Overflow: GenericPalletError<Rv>;

    /**
     * The minimal amount requirement for the first token in the pair wasn't met.
     **/
    AssetOneDepositDidNotMeetMinimum: GenericPalletError<Rv>;

    /**
     * The minimal amount requirement for the second token in the pair wasn't met.
     **/
    AssetTwoDepositDidNotMeetMinimum: GenericPalletError<Rv>;

    /**
     * The minimal amount requirement for the first token in the pair wasn't met.
     **/
    AssetOneWithdrawalDidNotMeetMinimum: GenericPalletError<Rv>;

    /**
     * The minimal amount requirement for the second token in the pair wasn't met.
     **/
    AssetTwoWithdrawalDidNotMeetMinimum: GenericPalletError<Rv>;

    /**
     * Optimal calculated amount is less than desired.
     **/
    OptimalAmountLessThanDesired: GenericPalletError<Rv>;

    /**
     * Insufficient liquidity minted.
     **/
    InsufficientLiquidityMinted: GenericPalletError<Rv>;

    /**
     * Requested liquidity can't be zero.
     **/
    ZeroLiquidity: GenericPalletError<Rv>;

    /**
     * Amount can't be zero.
     **/
    ZeroAmount: GenericPalletError<Rv>;

    /**
     * Calculated amount out is less than provided minimum amount.
     **/
    ProvidedMinimumNotSufficientForSwap: GenericPalletError<Rv>;

    /**
     * Provided maximum amount is not sufficient for swap.
     **/
    ProvidedMaximumNotSufficientForSwap: GenericPalletError<Rv>;

    /**
     * The provided path must consists of 2 assets at least.
     **/
    InvalidPath: GenericPalletError<Rv>;

    /**
     * The provided path must consists of unique assets.
     **/
    NonUniquePath: GenericPalletError<Rv>;

    /**
     * It was not possible to get or increment the Id of the pool.
     **/
    IncorrectPoolAssetId: GenericPalletError<Rv>;

    /**
     * The destination account cannot exist with the swapped funds.
     **/
    BelowMinimum: GenericPalletError<Rv>;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError<Rv>;
  };
}
