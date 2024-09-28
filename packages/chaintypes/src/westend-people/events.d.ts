// Generated by dedot cli

import type { GenericChainEvents, GenericPalletEvent, RpcVersion } from 'dedot/types';
import type { DispatchInfo, DispatchError, AccountId32, H256, FixedBytes, Result, Bytes } from 'dedot/codecs';
import type {
  SpWeightsWeightV2Weight,
  FrameSupportTokensMiscBalanceStatus,
  StagingXcmV4TraitsOutcome,
  StagingXcmV4Location,
  StagingXcmV4Xcm,
  StagingXcmV4Response,
  XcmVersionedAssets,
  StagingXcmV4AssetAssets,
  XcmV3TraitsError,
  XcmVersionedLocation,
  CumulusPrimitivesCoreAggregateMessageOrigin,
  FrameSupportMessagesProcessMessageError,
  PalletMultisigTimepoint,
  PeopleWestendRuntimeProxyType,
} from './types';

export interface ChainEvents<Rv extends RpcVersion> extends GenericChainEvents<Rv> {
  /**
   * Pallet `System`'s events
   **/
  system: {
    /**
     * An extrinsic completed successfully.
     **/
    ExtrinsicSuccess: GenericPalletEvent<Rv, 'System', 'ExtrinsicSuccess', { dispatchInfo: DispatchInfo }>;

    /**
     * An extrinsic failed.
     **/
    ExtrinsicFailed: GenericPalletEvent<
      Rv,
      'System',
      'ExtrinsicFailed',
      { dispatchError: DispatchError; dispatchInfo: DispatchInfo }
    >;

    /**
     * `:code` was updated.
     **/
    CodeUpdated: GenericPalletEvent<Rv, 'System', 'CodeUpdated', null>;

    /**
     * A new account was created.
     **/
    NewAccount: GenericPalletEvent<Rv, 'System', 'NewAccount', { account: AccountId32 }>;

    /**
     * An account was reaped.
     **/
    KilledAccount: GenericPalletEvent<Rv, 'System', 'KilledAccount', { account: AccountId32 }>;

    /**
     * On on-chain remark happened.
     **/
    Remarked: GenericPalletEvent<Rv, 'System', 'Remarked', { sender: AccountId32; hash: H256 }>;

    /**
     * An upgrade was authorized.
     **/
    UpgradeAuthorized: GenericPalletEvent<Rv, 'System', 'UpgradeAuthorized', { codeHash: H256; checkVersion: boolean }>;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `ParachainSystem`'s events
   **/
  parachainSystem: {
    /**
     * The validation function has been scheduled to apply.
     **/
    ValidationFunctionStored: GenericPalletEvent<Rv, 'ParachainSystem', 'ValidationFunctionStored', null>;

    /**
     * The validation function was applied as of the contained relay chain block number.
     **/
    ValidationFunctionApplied: GenericPalletEvent<
      Rv,
      'ParachainSystem',
      'ValidationFunctionApplied',
      { relayChainBlockNum: number }
    >;

    /**
     * The relay-chain aborted the upgrade process.
     **/
    ValidationFunctionDiscarded: GenericPalletEvent<Rv, 'ParachainSystem', 'ValidationFunctionDiscarded', null>;

    /**
     * Some downward messages have been received and will be processed.
     **/
    DownwardMessagesReceived: GenericPalletEvent<Rv, 'ParachainSystem', 'DownwardMessagesReceived', { count: number }>;

    /**
     * Downward messages were processed using the given weight.
     **/
    DownwardMessagesProcessed: GenericPalletEvent<
      Rv,
      'ParachainSystem',
      'DownwardMessagesProcessed',
      { weightUsed: SpWeightsWeightV2Weight; dmqHead: H256 }
    >;

    /**
     * An upward message was sent to the relay chain.
     **/
    UpwardMessageSent: GenericPalletEvent<
      Rv,
      'ParachainSystem',
      'UpwardMessageSent',
      { messageHash?: FixedBytes<32> | undefined }
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `Balances`'s events
   **/
  balances: {
    /**
     * An account was created with some free balance.
     **/
    Endowed: GenericPalletEvent<Rv, 'Balances', 'Endowed', { account: AccountId32; freeBalance: bigint }>;

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     **/
    DustLost: GenericPalletEvent<Rv, 'Balances', 'DustLost', { account: AccountId32; amount: bigint }>;

    /**
     * Transfer succeeded.
     **/
    Transfer: GenericPalletEvent<Rv, 'Balances', 'Transfer', { from: AccountId32; to: AccountId32; amount: bigint }>;

    /**
     * A balance was set by root.
     **/
    BalanceSet: GenericPalletEvent<Rv, 'Balances', 'BalanceSet', { who: AccountId32; free: bigint }>;

    /**
     * Some balance was reserved (moved from free to reserved).
     **/
    Reserved: GenericPalletEvent<Rv, 'Balances', 'Reserved', { who: AccountId32; amount: bigint }>;

    /**
     * Some balance was unreserved (moved from reserved to free).
     **/
    Unreserved: GenericPalletEvent<Rv, 'Balances', 'Unreserved', { who: AccountId32; amount: bigint }>;

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     **/
    ReserveRepatriated: GenericPalletEvent<
      Rv,
      'Balances',
      'ReserveRepatriated',
      { from: AccountId32; to: AccountId32; amount: bigint; destinationStatus: FrameSupportTokensMiscBalanceStatus }
    >;

    /**
     * Some amount was deposited (e.g. for transaction fees).
     **/
    Deposit: GenericPalletEvent<Rv, 'Balances', 'Deposit', { who: AccountId32; amount: bigint }>;

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     **/
    Withdraw: GenericPalletEvent<Rv, 'Balances', 'Withdraw', { who: AccountId32; amount: bigint }>;

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     **/
    Slashed: GenericPalletEvent<Rv, 'Balances', 'Slashed', { who: AccountId32; amount: bigint }>;

    /**
     * Some amount was minted into an account.
     **/
    Minted: GenericPalletEvent<Rv, 'Balances', 'Minted', { who: AccountId32; amount: bigint }>;

    /**
     * Some amount was burned from an account.
     **/
    Burned: GenericPalletEvent<Rv, 'Balances', 'Burned', { who: AccountId32; amount: bigint }>;

    /**
     * Some amount was suspended from an account (it can be restored later).
     **/
    Suspended: GenericPalletEvent<Rv, 'Balances', 'Suspended', { who: AccountId32; amount: bigint }>;

    /**
     * Some amount was restored into an account.
     **/
    Restored: GenericPalletEvent<Rv, 'Balances', 'Restored', { who: AccountId32; amount: bigint }>;

    /**
     * An account was upgraded.
     **/
    Upgraded: GenericPalletEvent<Rv, 'Balances', 'Upgraded', { who: AccountId32 }>;

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     **/
    Issued: GenericPalletEvent<Rv, 'Balances', 'Issued', { amount: bigint }>;

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     **/
    Rescinded: GenericPalletEvent<Rv, 'Balances', 'Rescinded', { amount: bigint }>;

    /**
     * Some balance was locked.
     **/
    Locked: GenericPalletEvent<Rv, 'Balances', 'Locked', { who: AccountId32; amount: bigint }>;

    /**
     * Some balance was unlocked.
     **/
    Unlocked: GenericPalletEvent<Rv, 'Balances', 'Unlocked', { who: AccountId32; amount: bigint }>;

    /**
     * Some balance was frozen.
     **/
    Frozen: GenericPalletEvent<Rv, 'Balances', 'Frozen', { who: AccountId32; amount: bigint }>;

    /**
     * Some balance was thawed.
     **/
    Thawed: GenericPalletEvent<Rv, 'Balances', 'Thawed', { who: AccountId32; amount: bigint }>;

    /**
     * The `TotalIssuance` was forcefully changed.
     **/
    TotalIssuanceForced: GenericPalletEvent<Rv, 'Balances', 'TotalIssuanceForced', { old: bigint; new: bigint }>;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `TransactionPayment`'s events
   **/
  transactionPayment: {
    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     **/
    TransactionFeePaid: GenericPalletEvent<
      Rv,
      'TransactionPayment',
      'TransactionFeePaid',
      { who: AccountId32; actualFee: bigint; tip: bigint }
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `CollatorSelection`'s events
   **/
  collatorSelection: {
    /**
     * New Invulnerables were set.
     **/
    NewInvulnerables: GenericPalletEvent<
      Rv,
      'CollatorSelection',
      'NewInvulnerables',
      { invulnerables: Array<AccountId32> }
    >;

    /**
     * A new Invulnerable was added.
     **/
    InvulnerableAdded: GenericPalletEvent<Rv, 'CollatorSelection', 'InvulnerableAdded', { accountId: AccountId32 }>;

    /**
     * An Invulnerable was removed.
     **/
    InvulnerableRemoved: GenericPalletEvent<Rv, 'CollatorSelection', 'InvulnerableRemoved', { accountId: AccountId32 }>;

    /**
     * The number of desired candidates was set.
     **/
    NewDesiredCandidates: GenericPalletEvent<
      Rv,
      'CollatorSelection',
      'NewDesiredCandidates',
      { desiredCandidates: number }
    >;

    /**
     * The candidacy bond was set.
     **/
    NewCandidacyBond: GenericPalletEvent<Rv, 'CollatorSelection', 'NewCandidacyBond', { bondAmount: bigint }>;

    /**
     * A new candidate joined.
     **/
    CandidateAdded: GenericPalletEvent<
      Rv,
      'CollatorSelection',
      'CandidateAdded',
      { accountId: AccountId32; deposit: bigint }
    >;

    /**
     * Bond of a candidate updated.
     **/
    CandidateBondUpdated: GenericPalletEvent<
      Rv,
      'CollatorSelection',
      'CandidateBondUpdated',
      { accountId: AccountId32; deposit: bigint }
    >;

    /**
     * A candidate was removed.
     **/
    CandidateRemoved: GenericPalletEvent<Rv, 'CollatorSelection', 'CandidateRemoved', { accountId: AccountId32 }>;

    /**
     * An account was replaced in the candidate list by another one.
     **/
    CandidateReplaced: GenericPalletEvent<
      Rv,
      'CollatorSelection',
      'CandidateReplaced',
      { old: AccountId32; new: AccountId32; deposit: bigint }
    >;

    /**
     * An account was unable to be added to the Invulnerables because they did not have keys
     * registered. Other Invulnerables may have been set.
     **/
    InvalidInvulnerableSkipped: GenericPalletEvent<
      Rv,
      'CollatorSelection',
      'InvalidInvulnerableSkipped',
      { accountId: AccountId32 }
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `Session`'s events
   **/
  session: {
    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     **/
    NewSession: GenericPalletEvent<Rv, 'Session', 'NewSession', { sessionIndex: number }>;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `XcmpQueue`'s events
   **/
  xcmpQueue: {
    /**
     * An HRMP message was sent to a sibling parachain.
     **/
    XcmpMessageSent: GenericPalletEvent<Rv, 'XcmpQueue', 'XcmpMessageSent', { messageHash: FixedBytes<32> }>;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `PolkadotXcm`'s events
   **/
  polkadotXcm: {
    /**
     * Execution of an XCM message was attempted.
     **/
    Attempted: GenericPalletEvent<Rv, 'PolkadotXcm', 'Attempted', { outcome: StagingXcmV4TraitsOutcome }>;

    /**
     * A XCM message was sent.
     **/
    Sent: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'Sent',
      {
        origin: StagingXcmV4Location;
        destination: StagingXcmV4Location;
        message: StagingXcmV4Xcm;
        messageId: FixedBytes<32>;
      }
    >;

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     **/
    UnexpectedResponse: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'UnexpectedResponse',
      { origin: StagingXcmV4Location; queryId: bigint }
    >;

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     **/
    ResponseReady: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'ResponseReady',
      { queryId: bigint; response: StagingXcmV4Response }
    >;

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     **/
    Notified: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'Notified',
      { queryId: bigint; palletIndex: number; callIndex: number }
    >;

    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     **/
    NotifyOverweight: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'NotifyOverweight',
      {
        queryId: bigint;
        palletIndex: number;
        callIndex: number;
        actualWeight: SpWeightsWeightV2Weight;
        maxBudgetedWeight: SpWeightsWeightV2Weight;
      }
    >;

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     **/
    NotifyDispatchError: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'NotifyDispatchError',
      { queryId: bigint; palletIndex: number; callIndex: number }
    >;

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     **/
    NotifyDecodeFailed: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'NotifyDecodeFailed',
      { queryId: bigint; palletIndex: number; callIndex: number }
    >;

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     **/
    InvalidResponder: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'InvalidResponder',
      { origin: StagingXcmV4Location; queryId: bigint; expectedLocation?: StagingXcmV4Location | undefined }
    >;

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     **/
    InvalidResponderVersion: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'InvalidResponderVersion',
      { origin: StagingXcmV4Location; queryId: bigint }
    >;

    /**
     * Received query response has been read and removed.
     **/
    ResponseTaken: GenericPalletEvent<Rv, 'PolkadotXcm', 'ResponseTaken', { queryId: bigint }>;

    /**
     * Some assets have been placed in an asset trap.
     **/
    AssetsTrapped: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'AssetsTrapped',
      { hash: H256; origin: StagingXcmV4Location; assets: XcmVersionedAssets }
    >;

    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     **/
    VersionChangeNotified: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'VersionChangeNotified',
      { destination: StagingXcmV4Location; result: number; cost: StagingXcmV4AssetAssets; messageId: FixedBytes<32> }
    >;

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     **/
    SupportedVersionChanged: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'SupportedVersionChanged',
      { location: StagingXcmV4Location; version: number }
    >;

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     **/
    NotifyTargetSendFail: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'NotifyTargetSendFail',
      { location: StagingXcmV4Location; queryId: bigint; error: XcmV3TraitsError }
    >;

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     **/
    NotifyTargetMigrationFail: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'NotifyTargetMigrationFail',
      { location: XcmVersionedLocation; queryId: bigint }
    >;

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     **/
    InvalidQuerierVersion: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'InvalidQuerierVersion',
      { origin: StagingXcmV4Location; queryId: bigint }
    >;

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     **/
    InvalidQuerier: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'InvalidQuerier',
      {
        origin: StagingXcmV4Location;
        queryId: bigint;
        expectedQuerier: StagingXcmV4Location;
        maybeActualQuerier?: StagingXcmV4Location | undefined;
      }
    >;

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     **/
    VersionNotifyStarted: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'VersionNotifyStarted',
      { destination: StagingXcmV4Location; cost: StagingXcmV4AssetAssets; messageId: FixedBytes<32> }
    >;

    /**
     * We have requested that a remote chain send us XCM version change notifications.
     **/
    VersionNotifyRequested: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'VersionNotifyRequested',
      { destination: StagingXcmV4Location; cost: StagingXcmV4AssetAssets; messageId: FixedBytes<32> }
    >;

    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     **/
    VersionNotifyUnrequested: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'VersionNotifyUnrequested',
      { destination: StagingXcmV4Location; cost: StagingXcmV4AssetAssets; messageId: FixedBytes<32> }
    >;

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     **/
    FeesPaid: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'FeesPaid',
      { paying: StagingXcmV4Location; fees: StagingXcmV4AssetAssets }
    >;

    /**
     * Some assets have been claimed from an asset trap
     **/
    AssetsClaimed: GenericPalletEvent<
      Rv,
      'PolkadotXcm',
      'AssetsClaimed',
      { hash: H256; origin: StagingXcmV4Location; assets: XcmVersionedAssets }
    >;

    /**
     * A XCM version migration finished.
     **/
    VersionMigrationFinished: GenericPalletEvent<Rv, 'PolkadotXcm', 'VersionMigrationFinished', { version: number }>;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `CumulusXcm`'s events
   **/
  cumulusXcm: {
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     **/
    InvalidFormat: GenericPalletEvent<Rv, 'CumulusXcm', 'InvalidFormat', FixedBytes<32>>;

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     **/
    UnsupportedVersion: GenericPalletEvent<Rv, 'CumulusXcm', 'UnsupportedVersion', FixedBytes<32>>;

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     **/
    ExecutedDownward: GenericPalletEvent<
      Rv,
      'CumulusXcm',
      'ExecutedDownward',
      [FixedBytes<32>, StagingXcmV4TraitsOutcome]
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `MessageQueue`'s events
   **/
  messageQueue: {
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     **/
    ProcessingFailed: GenericPalletEvent<
      Rv,
      'MessageQueue',
      'ProcessingFailed',
      {
        /**
         * The `blake2_256` hash of the message.
         **/
        id: H256;

        /**
         * The queue of the message.
         **/
        origin: CumulusPrimitivesCoreAggregateMessageOrigin;

        /**
         * The error that occurred.
         *
         * This error is pretty opaque. More fine-grained errors need to be emitted as events
         * by the `MessageProcessor`.
         **/
        error: FrameSupportMessagesProcessMessageError;
      }
    >;

    /**
     * Message is processed.
     **/
    Processed: GenericPalletEvent<
      Rv,
      'MessageQueue',
      'Processed',
      {
        /**
         * The `blake2_256` hash of the message.
         **/
        id: H256;

        /**
         * The queue of the message.
         **/
        origin: CumulusPrimitivesCoreAggregateMessageOrigin;

        /**
         * How much weight was used to process the message.
         **/
        weightUsed: SpWeightsWeightV2Weight;

        /**
         * Whether the message was processed.
         *
         * Note that this does not mean that the underlying `MessageProcessor` was internally
         * successful. It *solely* means that the MQ pallet will treat this as a success
         * condition and discard the message. Any internal error needs to be emitted as events
         * by the `MessageProcessor`.
         **/
        success: boolean;
      }
    >;

    /**
     * Message placed in overweight queue.
     **/
    OverweightEnqueued: GenericPalletEvent<
      Rv,
      'MessageQueue',
      'OverweightEnqueued',
      {
        /**
         * The `blake2_256` hash of the message.
         **/
        id: FixedBytes<32>;

        /**
         * The queue of the message.
         **/
        origin: CumulusPrimitivesCoreAggregateMessageOrigin;

        /**
         * The page of the message.
         **/
        pageIndex: number;

        /**
         * The index of the message within the page.
         **/
        messageIndex: number;
      }
    >;

    /**
     * This page was reaped.
     **/
    PageReaped: GenericPalletEvent<
      Rv,
      'MessageQueue',
      'PageReaped',
      {
        /**
         * The queue of the page.
         **/
        origin: CumulusPrimitivesCoreAggregateMessageOrigin;

        /**
         * The index of the page.
         **/
        index: number;
      }
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `Utility`'s events
   **/
  utility: {
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     **/
    BatchInterrupted: GenericPalletEvent<Rv, 'Utility', 'BatchInterrupted', { index: number; error: DispatchError }>;

    /**
     * Batch of dispatches completed fully with no error.
     **/
    BatchCompleted: GenericPalletEvent<Rv, 'Utility', 'BatchCompleted', null>;

    /**
     * Batch of dispatches completed but has errors.
     **/
    BatchCompletedWithErrors: GenericPalletEvent<Rv, 'Utility', 'BatchCompletedWithErrors', null>;

    /**
     * A single item within a Batch of dispatches has completed with no error.
     **/
    ItemCompleted: GenericPalletEvent<Rv, 'Utility', 'ItemCompleted', null>;

    /**
     * A single item within a Batch of dispatches has completed with error.
     **/
    ItemFailed: GenericPalletEvent<Rv, 'Utility', 'ItemFailed', { error: DispatchError }>;

    /**
     * A call was dispatched.
     **/
    DispatchedAs: GenericPalletEvent<Rv, 'Utility', 'DispatchedAs', { result: Result<[], DispatchError> }>;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `Multisig`'s events
   **/
  multisig: {
    /**
     * A new multisig operation has begun.
     **/
    NewMultisig: GenericPalletEvent<
      Rv,
      'Multisig',
      'NewMultisig',
      { approving: AccountId32; multisig: AccountId32; callHash: FixedBytes<32> }
    >;

    /**
     * A multisig operation has been approved by someone.
     **/
    MultisigApproval: GenericPalletEvent<
      Rv,
      'Multisig',
      'MultisigApproval',
      { approving: AccountId32; timepoint: PalletMultisigTimepoint; multisig: AccountId32; callHash: FixedBytes<32> }
    >;

    /**
     * A multisig operation has been executed.
     **/
    MultisigExecuted: GenericPalletEvent<
      Rv,
      'Multisig',
      'MultisigExecuted',
      {
        approving: AccountId32;
        timepoint: PalletMultisigTimepoint;
        multisig: AccountId32;
        callHash: FixedBytes<32>;
        result: Result<[], DispatchError>;
      }
    >;

    /**
     * A multisig operation has been cancelled.
     **/
    MultisigCancelled: GenericPalletEvent<
      Rv,
      'Multisig',
      'MultisigCancelled',
      { cancelling: AccountId32; timepoint: PalletMultisigTimepoint; multisig: AccountId32; callHash: FixedBytes<32> }
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `Proxy`'s events
   **/
  proxy: {
    /**
     * A proxy was executed correctly, with the given.
     **/
    ProxyExecuted: GenericPalletEvent<Rv, 'Proxy', 'ProxyExecuted', { result: Result<[], DispatchError> }>;

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     **/
    PureCreated: GenericPalletEvent<
      Rv,
      'Proxy',
      'PureCreated',
      { pure: AccountId32; who: AccountId32; proxyType: PeopleWestendRuntimeProxyType; disambiguationIndex: number }
    >;

    /**
     * An announcement was placed to make a call in the future.
     **/
    Announced: GenericPalletEvent<Rv, 'Proxy', 'Announced', { real: AccountId32; proxy: AccountId32; callHash: H256 }>;

    /**
     * A proxy was added.
     **/
    ProxyAdded: GenericPalletEvent<
      Rv,
      'Proxy',
      'ProxyAdded',
      { delegator: AccountId32; delegatee: AccountId32; proxyType: PeopleWestendRuntimeProxyType; delay: number }
    >;

    /**
     * A proxy was removed.
     **/
    ProxyRemoved: GenericPalletEvent<
      Rv,
      'Proxy',
      'ProxyRemoved',
      { delegator: AccountId32; delegatee: AccountId32; proxyType: PeopleWestendRuntimeProxyType; delay: number }
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `Identity`'s events
   **/
  identity: {
    /**
     * A name was set or reset (which will remove all judgements).
     **/
    IdentitySet: GenericPalletEvent<Rv, 'Identity', 'IdentitySet', { who: AccountId32 }>;

    /**
     * A name was cleared, and the given balance returned.
     **/
    IdentityCleared: GenericPalletEvent<Rv, 'Identity', 'IdentityCleared', { who: AccountId32; deposit: bigint }>;

    /**
     * A name was removed and the given balance slashed.
     **/
    IdentityKilled: GenericPalletEvent<Rv, 'Identity', 'IdentityKilled', { who: AccountId32; deposit: bigint }>;

    /**
     * A judgement was asked from a registrar.
     **/
    JudgementRequested: GenericPalletEvent<
      Rv,
      'Identity',
      'JudgementRequested',
      { who: AccountId32; registrarIndex: number }
    >;

    /**
     * A judgement request was retracted.
     **/
    JudgementUnrequested: GenericPalletEvent<
      Rv,
      'Identity',
      'JudgementUnrequested',
      { who: AccountId32; registrarIndex: number }
    >;

    /**
     * A judgement was given by a registrar.
     **/
    JudgementGiven: GenericPalletEvent<
      Rv,
      'Identity',
      'JudgementGiven',
      { target: AccountId32; registrarIndex: number }
    >;

    /**
     * A registrar was added.
     **/
    RegistrarAdded: GenericPalletEvent<Rv, 'Identity', 'RegistrarAdded', { registrarIndex: number }>;

    /**
     * A sub-identity was added to an identity and the deposit paid.
     **/
    SubIdentityAdded: GenericPalletEvent<
      Rv,
      'Identity',
      'SubIdentityAdded',
      { sub: AccountId32; main: AccountId32; deposit: bigint }
    >;

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     **/
    SubIdentityRemoved: GenericPalletEvent<
      Rv,
      'Identity',
      'SubIdentityRemoved',
      { sub: AccountId32; main: AccountId32; deposit: bigint }
    >;

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     **/
    SubIdentityRevoked: GenericPalletEvent<
      Rv,
      'Identity',
      'SubIdentityRevoked',
      { sub: AccountId32; main: AccountId32; deposit: bigint }
    >;

    /**
     * A username authority was added.
     **/
    AuthorityAdded: GenericPalletEvent<Rv, 'Identity', 'AuthorityAdded', { authority: AccountId32 }>;

    /**
     * A username authority was removed.
     **/
    AuthorityRemoved: GenericPalletEvent<Rv, 'Identity', 'AuthorityRemoved', { authority: AccountId32 }>;

    /**
     * A username was set for `who`.
     **/
    UsernameSet: GenericPalletEvent<Rv, 'Identity', 'UsernameSet', { who: AccountId32; username: Bytes }>;

    /**
     * A username was queued, but `who` must accept it prior to `expiration`.
     **/
    UsernameQueued: GenericPalletEvent<
      Rv,
      'Identity',
      'UsernameQueued',
      { who: AccountId32; username: Bytes; expiration: number }
    >;

    /**
     * A queued username passed its expiration without being claimed and was removed.
     **/
    PreapprovalExpired: GenericPalletEvent<Rv, 'Identity', 'PreapprovalExpired', { whose: AccountId32 }>;

    /**
     * A username was set as a primary and can be looked up from `who`.
     **/
    PrimaryUsernameSet: GenericPalletEvent<Rv, 'Identity', 'PrimaryUsernameSet', { who: AccountId32; username: Bytes }>;

    /**
     * A dangling username (as in, a username corresponding to an account that has removed its
     * identity) has been removed.
     **/
    DanglingUsernameRemoved: GenericPalletEvent<
      Rv,
      'Identity',
      'DanglingUsernameRemoved',
      { who: AccountId32; username: Bytes }
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
  /**
   * Pallet `IdentityMigrator`'s events
   **/
  identityMigrator: {
    /**
     * The identity and all sub accounts were reaped for `who`.
     **/
    IdentityReaped: GenericPalletEvent<Rv, 'IdentityMigrator', 'IdentityReaped', { who: AccountId32 }>;

    /**
     * The deposits held for `who` were updated. `identity` is the new deposit held for
     * identity info, and `subs` is the new deposit held for the sub-accounts.
     **/
    DepositUpdated: GenericPalletEvent<
      Rv,
      'IdentityMigrator',
      'DepositUpdated',
      { who: AccountId32; identity: bigint; subs: bigint }
    >;

    /**
     * Generic pallet event
     **/
    [prop: string]: GenericPalletEvent<Rv>;
  };
}
