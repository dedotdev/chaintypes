// Generated by @dedot/codegen

import type { GenericChainErrors, GenericPalletError } from '@dedot/types';

export interface ChainErrors extends GenericChainErrors {
  /**
   * Pallet `System`'s errors
   **/
  system: {
    /**
     * The name of specification does not match between the current runtime
     * and the new runtime.
     **/
    InvalidSpecName: GenericPalletError;

    /**
     * The specification version is not allowed to decrease between the current runtime
     * and the new runtime.
     **/
    SpecVersionNeedsToIncrease: GenericPalletError;

    /**
     * Failed to extract the runtime version from the new runtime.
     *
     * Either calling `Core_version` or decoding `RuntimeVersion` failed.
     **/
    FailedToExtractRuntimeVersion: GenericPalletError;

    /**
     * Suicide called when the account has non-default composite data.
     **/
    NonDefaultComposite: GenericPalletError;

    /**
     * There is a non-zero reference count preventing the account from being purged.
     **/
    NonZeroRefCount: GenericPalletError;

    /**
     * The origin filter prevent the call to be dispatched.
     **/
    CallFiltered: GenericPalletError;

    /**
     * No upgrade authorized.
     **/
    NothingAuthorized: GenericPalletError;

    /**
     * The submitted code is not authorized.
     **/
    Unauthorized: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `ParachainSystem`'s errors
   **/
  parachainSystem: {
    /**
     * Attempt to upgrade validation function while existing upgrade pending.
     **/
    OverlappingUpgrades: GenericPalletError;

    /**
     * Polkadot currently prohibits this parachain from upgrading its validation function.
     **/
    ProhibitedByPolkadot: GenericPalletError;

    /**
     * The supplied validation function has compiled into a blob larger than Polkadot is
     * willing to run.
     **/
    TooBig: GenericPalletError;

    /**
     * The inherent which supplies the validation data did not run this block.
     **/
    ValidationDataNotAvailable: GenericPalletError;

    /**
     * The inherent which supplies the host configuration did not run this block.
     **/
    HostConfigurationNotAvailable: GenericPalletError;

    /**
     * No validation function upgrade is currently scheduled.
     **/
    NotScheduled: GenericPalletError;

    /**
     * No code upgrade has been authorized.
     **/
    NothingAuthorized: GenericPalletError;

    /**
     * The given code upgrade has not been authorized.
     **/
    Unauthorized: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `Balances`'s errors
   **/
  balances: {
    /**
     * Vesting balance too high to send value.
     **/
    VestingBalance: GenericPalletError;

    /**
     * Account liquidity restrictions prevent withdrawal.
     **/
    LiquidityRestrictions: GenericPalletError;

    /**
     * Balance too low to send value.
     **/
    InsufficientBalance: GenericPalletError;

    /**
     * Value too low to create account due to existential deposit.
     **/
    ExistentialDeposit: GenericPalletError;

    /**
     * Transfer/payment would kill account.
     **/
    Expendability: GenericPalletError;

    /**
     * A vesting schedule already exists for this account.
     **/
    ExistingVestingSchedule: GenericPalletError;

    /**
     * Beneficiary account must pre-exist.
     **/
    DeadAccount: GenericPalletError;

    /**
     * Number of named reserves exceed `MaxReserves`.
     **/
    TooManyReserves: GenericPalletError;

    /**
     * Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
     **/
    TooManyHolds: GenericPalletError;

    /**
     * Number of freezes exceed `MaxFreezes`.
     **/
    TooManyFreezes: GenericPalletError;

    /**
     * The issuance cannot be modified since it is already deactivated.
     **/
    IssuanceDeactivated: GenericPalletError;

    /**
     * The delta cannot be zero.
     **/
    DeltaZero: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `CollatorSelection`'s errors
   **/
  collatorSelection: {
    /**
     * The pallet has too many candidates.
     **/
    TooManyCandidates: GenericPalletError;

    /**
     * Leaving would result in too few candidates.
     **/
    TooFewEligibleCollators: GenericPalletError;

    /**
     * Account is already a candidate.
     **/
    AlreadyCandidate: GenericPalletError;

    /**
     * Account is not a candidate.
     **/
    NotCandidate: GenericPalletError;

    /**
     * There are too many Invulnerables.
     **/
    TooManyInvulnerables: GenericPalletError;

    /**
     * Account is already an Invulnerable.
     **/
    AlreadyInvulnerable: GenericPalletError;

    /**
     * Account is not an Invulnerable.
     **/
    NotInvulnerable: GenericPalletError;

    /**
     * Account has no associated validator ID.
     **/
    NoAssociatedValidatorId: GenericPalletError;

    /**
     * Validator ID is not yet registered.
     **/
    ValidatorNotRegistered: GenericPalletError;

    /**
     * Could not insert in the candidate list.
     **/
    InsertToCandidateListFailed: GenericPalletError;

    /**
     * Could not remove from the candidate list.
     **/
    RemoveFromCandidateListFailed: GenericPalletError;

    /**
     * New deposit amount would be below the minimum candidacy bond.
     **/
    DepositTooLow: GenericPalletError;

    /**
     * Could not update the candidate list.
     **/
    UpdateCandidateListFailed: GenericPalletError;

    /**
     * Deposit amount is too low to take the target's slot in the candidate list.
     **/
    InsufficientBond: GenericPalletError;

    /**
     * The target account to be replaced in the candidate list is not a candidate.
     **/
    TargetIsNotCandidate: GenericPalletError;

    /**
     * The updated deposit amount is equal to the amount already reserved.
     **/
    IdenticalDeposit: GenericPalletError;

    /**
     * Cannot lower candidacy bond while occupying a future collator slot in the list.
     **/
    InvalidUnreserve: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `Session`'s errors
   **/
  session: {
    /**
     * Invalid ownership proof.
     **/
    InvalidProof: GenericPalletError;

    /**
     * No associated validator ID for account.
     **/
    NoAssociatedValidatorId: GenericPalletError;

    /**
     * Registered duplicate key.
     **/
    DuplicatedKey: GenericPalletError;

    /**
     * No keys are associated with this account.
     **/
    NoKeys: GenericPalletError;

    /**
     * Key setting account is not live, so it's impossible to associate keys.
     **/
    NoAccount: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `XcmpQueue`'s errors
   **/
  xcmpQueue: {
    /**
     * Setting the queue config failed since one of its values was invalid.
     **/
    BadQueueConfig: GenericPalletError;

    /**
     * The execution is already suspended.
     **/
    AlreadySuspended: GenericPalletError;

    /**
     * The execution is already resumed.
     **/
    AlreadyResumed: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `PolkadotXcm`'s errors
   **/
  polkadotXcm: {
    /**
     * The desired destination was unreachable, generally because there is a no way of routing
     * to it.
     **/
    Unreachable: GenericPalletError;

    /**
     * There was some other issue (i.e. not to do with routing) in sending the message.
     * Perhaps a lack of space for buffering the message.
     **/
    SendFailure: GenericPalletError;

    /**
     * The message execution fails the filter.
     **/
    Filtered: GenericPalletError;

    /**
     * The message's weight could not be determined.
     **/
    UnweighableMessage: GenericPalletError;

    /**
     * The destination `Location` provided cannot be inverted.
     **/
    DestinationNotInvertible: GenericPalletError;

    /**
     * The assets to be sent are empty.
     **/
    Empty: GenericPalletError;

    /**
     * Could not re-anchor the assets to declare the fees for the destination chain.
     **/
    CannotReanchor: GenericPalletError;

    /**
     * Too many assets have been attempted for transfer.
     **/
    TooManyAssets: GenericPalletError;

    /**
     * Origin is invalid for sending.
     **/
    InvalidOrigin: GenericPalletError;

    /**
     * The version of the `Versioned` value used is not able to be interpreted.
     **/
    BadVersion: GenericPalletError;

    /**
     * The given location could not be used (e.g. because it cannot be expressed in the
     * desired version of XCM).
     **/
    BadLocation: GenericPalletError;

    /**
     * The referenced subscription could not be found.
     **/
    NoSubscription: GenericPalletError;

    /**
     * The location is invalid since it already has a subscription from us.
     **/
    AlreadySubscribed: GenericPalletError;

    /**
     * Could not check-out the assets for teleportation to the destination chain.
     **/
    CannotCheckOutTeleport: GenericPalletError;

    /**
     * The owner does not own (all) of the asset that they wish to do the operation on.
     **/
    LowBalance: GenericPalletError;

    /**
     * The asset owner has too many locks on the asset.
     **/
    TooManyLocks: GenericPalletError;

    /**
     * The given account is not an identifiable sovereign account for any location.
     **/
    AccountNotSovereign: GenericPalletError;

    /**
     * The operation required fees to be paid which the initiator could not meet.
     **/
    FeesNotMet: GenericPalletError;

    /**
     * A remote lock with the corresponding data could not be found.
     **/
    LockNotFound: GenericPalletError;

    /**
     * The unlock operation cannot succeed because there are still consumers of the lock.
     **/
    InUse: GenericPalletError;

    /**
     * Invalid non-concrete asset.
     **/
    InvalidAssetNotConcrete: GenericPalletError;

    /**
     * Invalid asset, reserve chain could not be determined for it.
     **/
    InvalidAssetUnknownReserve: GenericPalletError;

    /**
     * Invalid asset, do not support remote asset reserves with different fees reserves.
     **/
    InvalidAssetUnsupportedReserve: GenericPalletError;

    /**
     * Too many assets with different reserve locations have been attempted for transfer.
     **/
    TooManyReserves: GenericPalletError;

    /**
     * Local XCM execution incomplete.
     **/
    LocalExecutionIncomplete: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `MessageQueue`'s errors
   **/
  messageQueue: {
    /**
     * Page is not reapable because it has items remaining to be processed and is not old
     * enough.
     **/
    NotReapable: GenericPalletError;

    /**
     * Page to be reaped does not exist.
     **/
    NoPage: GenericPalletError;

    /**
     * The referenced message could not be found.
     **/
    NoMessage: GenericPalletError;

    /**
     * The message was already processed and cannot be processed again.
     **/
    AlreadyProcessed: GenericPalletError;

    /**
     * The message is queued for future execution.
     **/
    Queued: GenericPalletError;

    /**
     * There is temporarily not enough weight to continue servicing messages.
     **/
    InsufficientWeight: GenericPalletError;

    /**
     * This message is temporarily unprocessable.
     *
     * Such errors are expected, but not guaranteed, to resolve themselves eventually through
     * retrying.
     **/
    TemporarilyUnprocessable: GenericPalletError;

    /**
     * The queue is paused and no message can be executed from it.
     *
     * This can change at any time and may resolve in the future by re-trying.
     **/
    QueuePaused: GenericPalletError;

    /**
     * Another call is in progress and needs to finish before this call can happen.
     **/
    RecursiveDisallowed: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `Utility`'s errors
   **/
  utility: {
    /**
     * Too many calls batched.
     **/
    TooManyCalls: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `Multisig`'s errors
   **/
  multisig: {
    /**
     * Threshold must be 2 or greater.
     **/
    MinimumThreshold: GenericPalletError;

    /**
     * Call is already approved by this signatory.
     **/
    AlreadyApproved: GenericPalletError;

    /**
     * Call doesn't need any (more) approvals.
     **/
    NoApprovalsNeeded: GenericPalletError;

    /**
     * There are too few signatories in the list.
     **/
    TooFewSignatories: GenericPalletError;

    /**
     * There are too many signatories in the list.
     **/
    TooManySignatories: GenericPalletError;

    /**
     * The signatories were provided out of order; they should be ordered.
     **/
    SignatoriesOutOfOrder: GenericPalletError;

    /**
     * The sender was contained in the other signatories; it shouldn't be.
     **/
    SenderInSignatories: GenericPalletError;

    /**
     * Multisig operation not found when attempting to cancel.
     **/
    NotFound: GenericPalletError;

    /**
     * Only the account that originally created the multisig is able to cancel it.
     **/
    NotOwner: GenericPalletError;

    /**
     * No timepoint was given, yet the multisig operation is already underway.
     **/
    NoTimepoint: GenericPalletError;

    /**
     * A different timepoint was given to the multisig operation that is underway.
     **/
    WrongTimepoint: GenericPalletError;

    /**
     * A timepoint was given, yet no multisig operation is underway.
     **/
    UnexpectedTimepoint: GenericPalletError;

    /**
     * The maximum weight information provided was too low.
     **/
    MaxWeightTooLow: GenericPalletError;

    /**
     * The data to be stored is already stored.
     **/
    AlreadyStored: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `Proxy`'s errors
   **/
  proxy: {
    /**
     * There are too many proxies registered or too many announcements pending.
     **/
    TooMany: GenericPalletError;

    /**
     * Proxy registration not found.
     **/
    NotFound: GenericPalletError;

    /**
     * Sender is not a proxy of the account to be proxied.
     **/
    NotProxy: GenericPalletError;

    /**
     * A call which is incompatible with the proxy type's filter was attempted.
     **/
    Unproxyable: GenericPalletError;

    /**
     * Account is already a proxy.
     **/
    Duplicate: GenericPalletError;

    /**
     * Call may not be made by proxy because it may escalate its privileges.
     **/
    NoPermission: GenericPalletError;

    /**
     * Announcement, if made at all, was made too recently.
     **/
    Unannounced: GenericPalletError;

    /**
     * Cannot add self as proxy.
     **/
    NoSelfProxy: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `Assets`'s errors
   **/
  assets: {
    /**
     * Account balance must be greater than or equal to the transfer amount.
     **/
    BalanceLow: GenericPalletError;

    /**
     * The account to alter does not exist.
     **/
    NoAccount: GenericPalletError;

    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError;

    /**
     * The given asset ID is unknown.
     **/
    Unknown: GenericPalletError;

    /**
     * The origin account is frozen.
     **/
    Frozen: GenericPalletError;

    /**
     * The asset ID is already taken.
     **/
    InUse: GenericPalletError;

    /**
     * Invalid witness data given.
     **/
    BadWitness: GenericPalletError;

    /**
     * Minimum balance should be non-zero.
     **/
    MinBalanceZero: GenericPalletError;

    /**
     * Unable to increment the consumer reference counters on the account. Either no provider
     * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
     * fewer then the maximum number of consumers has been reached.
     **/
    UnavailableConsumer: GenericPalletError;

    /**
     * Invalid metadata given.
     **/
    BadMetadata: GenericPalletError;

    /**
     * No approval exists that would allow the transfer.
     **/
    Unapproved: GenericPalletError;

    /**
     * The source account would not survive the transfer and it needs to stay alive.
     **/
    WouldDie: GenericPalletError;

    /**
     * The asset-account already exists.
     **/
    AlreadyExists: GenericPalletError;

    /**
     * The asset-account doesn't have an associated deposit.
     **/
    NoDeposit: GenericPalletError;

    /**
     * The operation would result in funds being burned.
     **/
    WouldBurn: GenericPalletError;

    /**
     * The asset is a live asset and is actively being used. Usually emit for operations such
     * as `start_destroy` which require the asset to be in a destroying state.
     **/
    LiveAsset: GenericPalletError;

    /**
     * The asset is not live, and likely being destroyed.
     **/
    AssetNotLive: GenericPalletError;

    /**
     * The asset status is not the expected status.
     **/
    IncorrectStatus: GenericPalletError;

    /**
     * The asset should be frozen before the given operation.
     **/
    NotFrozen: GenericPalletError;

    /**
     * Callback action resulted in error
     **/
    CallbackFailed: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `Uniques`'s errors
   **/
  uniques: {
    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError;

    /**
     * The given item ID is unknown.
     **/
    UnknownCollection: GenericPalletError;

    /**
     * The item ID has already been used for an item.
     **/
    AlreadyExists: GenericPalletError;

    /**
     * The owner turned out to be different to what was expected.
     **/
    WrongOwner: GenericPalletError;

    /**
     * Invalid witness data given.
     **/
    BadWitness: GenericPalletError;

    /**
     * The item ID is already taken.
     **/
    InUse: GenericPalletError;

    /**
     * The item or collection is frozen.
     **/
    Frozen: GenericPalletError;

    /**
     * The delegate turned out to be different to what was expected.
     **/
    WrongDelegate: GenericPalletError;

    /**
     * There is no delegate approved.
     **/
    NoDelegate: GenericPalletError;

    /**
     * No approval exists that would allow the transfer.
     **/
    Unapproved: GenericPalletError;

    /**
     * The named owner has not signed ownership of the collection is acceptable.
     **/
    Unaccepted: GenericPalletError;

    /**
     * The item is locked.
     **/
    Locked: GenericPalletError;

    /**
     * All items have been minted.
     **/
    MaxSupplyReached: GenericPalletError;

    /**
     * The max supply has already been set.
     **/
    MaxSupplyAlreadySet: GenericPalletError;

    /**
     * The provided max supply is less to the amount of items a collection already has.
     **/
    MaxSupplyTooSmall: GenericPalletError;

    /**
     * The given item ID is unknown.
     **/
    UnknownItem: GenericPalletError;

    /**
     * Item is not for sale.
     **/
    NotForSale: GenericPalletError;

    /**
     * The provided bid is too low.
     **/
    BidTooLow: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `Nfts`'s errors
   **/
  nfts: {
    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError;

    /**
     * The given item ID is unknown.
     **/
    UnknownCollection: GenericPalletError;

    /**
     * The item ID has already been used for an item.
     **/
    AlreadyExists: GenericPalletError;

    /**
     * The approval had a deadline that expired, so the approval isn't valid anymore.
     **/
    ApprovalExpired: GenericPalletError;

    /**
     * The owner turned out to be different to what was expected.
     **/
    WrongOwner: GenericPalletError;

    /**
     * The witness data given does not match the current state of the chain.
     **/
    BadWitness: GenericPalletError;

    /**
     * Collection ID is already taken.
     **/
    CollectionIdInUse: GenericPalletError;

    /**
     * Items within that collection are non-transferable.
     **/
    ItemsNonTransferable: GenericPalletError;

    /**
     * The provided account is not a delegate.
     **/
    NotDelegate: GenericPalletError;

    /**
     * The delegate turned out to be different to what was expected.
     **/
    WrongDelegate: GenericPalletError;

    /**
     * No approval exists that would allow the transfer.
     **/
    Unapproved: GenericPalletError;

    /**
     * The named owner has not signed ownership acceptance of the collection.
     **/
    Unaccepted: GenericPalletError;

    /**
     * The item is locked (non-transferable).
     **/
    ItemLocked: GenericPalletError;

    /**
     * Item's attributes are locked.
     **/
    LockedItemAttributes: GenericPalletError;

    /**
     * Collection's attributes are locked.
     **/
    LockedCollectionAttributes: GenericPalletError;

    /**
     * Item's metadata is locked.
     **/
    LockedItemMetadata: GenericPalletError;

    /**
     * Collection's metadata is locked.
     **/
    LockedCollectionMetadata: GenericPalletError;

    /**
     * All items have been minted.
     **/
    MaxSupplyReached: GenericPalletError;

    /**
     * The max supply is locked and can't be changed.
     **/
    MaxSupplyLocked: GenericPalletError;

    /**
     * The provided max supply is less than the number of items a collection already has.
     **/
    MaxSupplyTooSmall: GenericPalletError;

    /**
     * The given item ID is unknown.
     **/
    UnknownItem: GenericPalletError;

    /**
     * Swap doesn't exist.
     **/
    UnknownSwap: GenericPalletError;

    /**
     * The given item has no metadata set.
     **/
    MetadataNotFound: GenericPalletError;

    /**
     * The provided attribute can't be found.
     **/
    AttributeNotFound: GenericPalletError;

    /**
     * Item is not for sale.
     **/
    NotForSale: GenericPalletError;

    /**
     * The provided bid is too low.
     **/
    BidTooLow: GenericPalletError;

    /**
     * The item has reached its approval limit.
     **/
    ReachedApprovalLimit: GenericPalletError;

    /**
     * The deadline has already expired.
     **/
    DeadlineExpired: GenericPalletError;

    /**
     * The duration provided should be less than or equal to `MaxDeadlineDuration`.
     **/
    WrongDuration: GenericPalletError;

    /**
     * The method is disabled by system settings.
     **/
    MethodDisabled: GenericPalletError;

    /**
     * The provided setting can't be set.
     **/
    WrongSetting: GenericPalletError;

    /**
     * Item's config already exists and should be equal to the provided one.
     **/
    InconsistentItemConfig: GenericPalletError;

    /**
     * Config for a collection or an item can't be found.
     **/
    NoConfig: GenericPalletError;

    /**
     * Some roles were not cleared.
     **/
    RolesNotCleared: GenericPalletError;

    /**
     * Mint has not started yet.
     **/
    MintNotStarted: GenericPalletError;

    /**
     * Mint has already ended.
     **/
    MintEnded: GenericPalletError;

    /**
     * The provided Item was already used for claiming.
     **/
    AlreadyClaimed: GenericPalletError;

    /**
     * The provided data is incorrect.
     **/
    IncorrectData: GenericPalletError;

    /**
     * The extrinsic was sent by the wrong origin.
     **/
    WrongOrigin: GenericPalletError;

    /**
     * The provided signature is incorrect.
     **/
    WrongSignature: GenericPalletError;

    /**
     * The provided metadata might be too long.
     **/
    IncorrectMetadata: GenericPalletError;

    /**
     * Can't set more attributes per one call.
     **/
    MaxAttributesLimitReached: GenericPalletError;

    /**
     * The provided namespace isn't supported in this call.
     **/
    WrongNamespace: GenericPalletError;

    /**
     * Can't delete non-empty collections.
     **/
    CollectionNotEmpty: GenericPalletError;

    /**
     * The witness data should be provided.
     **/
    WitnessRequired: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `ForeignAssets`'s errors
   **/
  foreignAssets: {
    /**
     * Account balance must be greater than or equal to the transfer amount.
     **/
    BalanceLow: GenericPalletError;

    /**
     * The account to alter does not exist.
     **/
    NoAccount: GenericPalletError;

    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError;

    /**
     * The given asset ID is unknown.
     **/
    Unknown: GenericPalletError;

    /**
     * The origin account is frozen.
     **/
    Frozen: GenericPalletError;

    /**
     * The asset ID is already taken.
     **/
    InUse: GenericPalletError;

    /**
     * Invalid witness data given.
     **/
    BadWitness: GenericPalletError;

    /**
     * Minimum balance should be non-zero.
     **/
    MinBalanceZero: GenericPalletError;

    /**
     * Unable to increment the consumer reference counters on the account. Either no provider
     * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
     * fewer then the maximum number of consumers has been reached.
     **/
    UnavailableConsumer: GenericPalletError;

    /**
     * Invalid metadata given.
     **/
    BadMetadata: GenericPalletError;

    /**
     * No approval exists that would allow the transfer.
     **/
    Unapproved: GenericPalletError;

    /**
     * The source account would not survive the transfer and it needs to stay alive.
     **/
    WouldDie: GenericPalletError;

    /**
     * The asset-account already exists.
     **/
    AlreadyExists: GenericPalletError;

    /**
     * The asset-account doesn't have an associated deposit.
     **/
    NoDeposit: GenericPalletError;

    /**
     * The operation would result in funds being burned.
     **/
    WouldBurn: GenericPalletError;

    /**
     * The asset is a live asset and is actively being used. Usually emit for operations such
     * as `start_destroy` which require the asset to be in a destroying state.
     **/
    LiveAsset: GenericPalletError;

    /**
     * The asset is not live, and likely being destroyed.
     **/
    AssetNotLive: GenericPalletError;

    /**
     * The asset status is not the expected status.
     **/
    IncorrectStatus: GenericPalletError;

    /**
     * The asset should be frozen before the given operation.
     **/
    NotFrozen: GenericPalletError;

    /**
     * Callback action resulted in error
     **/
    CallbackFailed: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `NftFractionalization`'s errors
   **/
  nftFractionalization: {
    /**
     * Asset ID does not correspond to locked NFT.
     **/
    IncorrectAssetId: GenericPalletError;

    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError;

    /**
     * NFT doesn't exist.
     **/
    NftNotFound: GenericPalletError;

    /**
     * NFT has not yet been fractionalised.
     **/
    NftNotFractionalized: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `PoolAssets`'s errors
   **/
  poolAssets: {
    /**
     * Account balance must be greater than or equal to the transfer amount.
     **/
    BalanceLow: GenericPalletError;

    /**
     * The account to alter does not exist.
     **/
    NoAccount: GenericPalletError;

    /**
     * The signing account has no permission to do the operation.
     **/
    NoPermission: GenericPalletError;

    /**
     * The given asset ID is unknown.
     **/
    Unknown: GenericPalletError;

    /**
     * The origin account is frozen.
     **/
    Frozen: GenericPalletError;

    /**
     * The asset ID is already taken.
     **/
    InUse: GenericPalletError;

    /**
     * Invalid witness data given.
     **/
    BadWitness: GenericPalletError;

    /**
     * Minimum balance should be non-zero.
     **/
    MinBalanceZero: GenericPalletError;

    /**
     * Unable to increment the consumer reference counters on the account. Either no provider
     * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
     * fewer then the maximum number of consumers has been reached.
     **/
    UnavailableConsumer: GenericPalletError;

    /**
     * Invalid metadata given.
     **/
    BadMetadata: GenericPalletError;

    /**
     * No approval exists that would allow the transfer.
     **/
    Unapproved: GenericPalletError;

    /**
     * The source account would not survive the transfer and it needs to stay alive.
     **/
    WouldDie: GenericPalletError;

    /**
     * The asset-account already exists.
     **/
    AlreadyExists: GenericPalletError;

    /**
     * The asset-account doesn't have an associated deposit.
     **/
    NoDeposit: GenericPalletError;

    /**
     * The operation would result in funds being burned.
     **/
    WouldBurn: GenericPalletError;

    /**
     * The asset is a live asset and is actively being used. Usually emit for operations such
     * as `start_destroy` which require the asset to be in a destroying state.
     **/
    LiveAsset: GenericPalletError;

    /**
     * The asset is not live, and likely being destroyed.
     **/
    AssetNotLive: GenericPalletError;

    /**
     * The asset status is not the expected status.
     **/
    IncorrectStatus: GenericPalletError;

    /**
     * The asset should be frozen before the given operation.
     **/
    NotFrozen: GenericPalletError;

    /**
     * Callback action resulted in error
     **/
    CallbackFailed: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
  /**
   * Pallet `AssetConversion`'s errors
   **/
  assetConversion: {
    /**
     * Provided asset pair is not supported for pool.
     **/
    InvalidAssetPair: GenericPalletError;

    /**
     * Pool already exists.
     **/
    PoolExists: GenericPalletError;

    /**
     * Desired amount can't be zero.
     **/
    WrongDesiredAmount: GenericPalletError;

    /**
     * Provided amount should be greater than or equal to the existential deposit/asset's
     * minimal amount.
     **/
    AmountOneLessThanMinimal: GenericPalletError;

    /**
     * Provided amount should be greater than or equal to the existential deposit/asset's
     * minimal amount.
     **/
    AmountTwoLessThanMinimal: GenericPalletError;

    /**
     * Reserve needs to always be greater than or equal to the existential deposit/asset's
     * minimal amount.
     **/
    ReserveLeftLessThanMinimal: GenericPalletError;

    /**
     * Desired amount can't be equal to the pool reserve.
     **/
    AmountOutTooHigh: GenericPalletError;

    /**
     * The pool doesn't exist.
     **/
    PoolNotFound: GenericPalletError;

    /**
     * An overflow happened.
     **/
    Overflow: GenericPalletError;

    /**
     * The minimal amount requirement for the first token in the pair wasn't met.
     **/
    AssetOneDepositDidNotMeetMinimum: GenericPalletError;

    /**
     * The minimal amount requirement for the second token in the pair wasn't met.
     **/
    AssetTwoDepositDidNotMeetMinimum: GenericPalletError;

    /**
     * The minimal amount requirement for the first token in the pair wasn't met.
     **/
    AssetOneWithdrawalDidNotMeetMinimum: GenericPalletError;

    /**
     * The minimal amount requirement for the second token in the pair wasn't met.
     **/
    AssetTwoWithdrawalDidNotMeetMinimum: GenericPalletError;

    /**
     * Optimal calculated amount is less than desired.
     **/
    OptimalAmountLessThanDesired: GenericPalletError;

    /**
     * Insufficient liquidity minted.
     **/
    InsufficientLiquidityMinted: GenericPalletError;

    /**
     * Requested liquidity can't be zero.
     **/
    ZeroLiquidity: GenericPalletError;

    /**
     * Amount can't be zero.
     **/
    ZeroAmount: GenericPalletError;

    /**
     * Calculated amount out is less than provided minimum amount.
     **/
    ProvidedMinimumNotSufficientForSwap: GenericPalletError;

    /**
     * Provided maximum amount is not sufficient for swap.
     **/
    ProvidedMaximumNotSufficientForSwap: GenericPalletError;

    /**
     * The provided path must consists of 2 assets at least.
     **/
    InvalidPath: GenericPalletError;

    /**
     * The provided path must consists of unique assets.
     **/
    NonUniquePath: GenericPalletError;

    /**
     * It was not possible to get or increment the Id of the pool.
     **/
    IncorrectPoolAssetId: GenericPalletError;

    /**
     * The destination account cannot exist with the swapped funds.
     **/
    BelowMinimum: GenericPalletError;

    /**
     * Generic pallet error
     **/
    [error: string]: GenericPalletError;
  };
}
