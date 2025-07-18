// Generated by dedot cli

import type { GenericChainConsts, RpcVersion } from 'dedot/types';
import type { RuntimeVersion } from 'dedot/codecs';
import type {
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsBlockLength,
  SpWeightsRuntimeDbWeight,
  PolkadotParachainPrimitivesPrimitivesId,
  SpWeightsWeightV2Weight,
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
   * Pallet `ParachainSystem`'s constants
   **/
  parachainSystem: {
    /**
     * Returns the parachain ID we are running with.
     **/
    selfParaId: PolkadotParachainPrimitivesPrimitivesId;

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
   * Pallet `MultiBlockMigrations`'s constants
   **/
  multiBlockMigrations: {
    /**
     * The maximal length of an encoded cursor.
     *
     * A good default needs to selected such that no migration will ever have a cursor with MEL
     * above this limit. This is statically checked in `integrity_test`.
     **/
    cursorMaxLen: number;

    /**
     * The maximal length of an encoded identifier.
     *
     * A good default needs to selected such that no migration will ever have an identifier
     * with MEL above this limit. This is statically checked in `integrity_test`.
     **/
    identifierMaxLen: number;

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
   * Pallet `CollatorSelection`'s constants
   **/
  collatorSelection: {
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
   * Pallet `Aura`'s constants
   **/
  aura: {
    /**
     * The slot duration Aura should run with, expressed in milliseconds.
     * The effective value of this type should not change while the chain is running.
     *
     * For backwards compatibility either use [`MinimumPeriodTimesTwo`] or a const.
     **/
    slotDuration: bigint;

    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
  /**
   * Pallet `AuraExt`'s constants
   **/
  auraExt: {
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
     * Maximal number of outbound XCMP channels that can have messages queued at the same time.
     *
     * If this is reached, then no further messages can be sent to channels that do not yet
     * have a message queued. This should be set to the expected maximum of outbound channels
     * which is determined by [`Self::ChannelInfo`]. It is important to set this large enough,
     * since otherwise the congestion control protocol will not work as intended and messages
     * may be dropped. This value increases the PoV and should therefore not be picked too
     * high. Governance needs to pay attention to not open more channels than this value.
     **/
    maxActiveOutboundChannels: number;

    /**
     * The maximal page size for HRMP message pages.
     *
     * A lower limit can be set dynamically, but this is the hard-limit for the PoV worst case
     * benchmarking. The limit for the size of a message is slightly below this, since some
     * overhead is incurred for encoding the format.
     **/
    maxPageSize: number;

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
   * Pallet `CumulusXcm`'s constants
   **/
  cumulusXcm: {
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
     * The amount held on deposit per registered username. This value should change only in
     * runtime upgrades with proper migration of existing deposits.
     **/
    usernameDeposit: bigint;

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
     * The number of blocks that must pass to enable the permanent deletion of a username by
     * its respective authority.
     **/
    usernameGracePeriod: number;

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
   * Pallet `Sudo`'s constants
   **/
  sudo: {
    /**
     * Generic pallet constant
     **/
    [name: string]: any;
  };
}
