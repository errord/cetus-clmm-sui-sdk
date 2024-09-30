import { CoinBalance } from '@mysten/sui.js/dist/cjs/client/types/coins';
import { SuiTransactionBlockResponse, SuiMoveObject } from '@mysten/sui.js/dist/cjs/client';
import * as _mysten_sui_js_transactions from '@mysten/sui.js/transactions';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
import BN from 'bn.js';
import { Graph } from '@syntsugar/cc-graph';
import { TransactionObjectArgument, TransactionResult } from '@mysten/sui.js/dist/cjs/builder';
import Decimal, { Decimal as Decimal$1 } from 'decimal.js';
import { SuiClient, SuiEventFilter, SuiObjectResponseQuery, SuiObjectDataOptions, SuiObjectResponse, SuiTransactionBlockResponse as SuiTransactionBlockResponse$1, DevInspectResults, SuiObjectData, SuiObjectRef, OwnedObjectRef, SuiMoveObject as SuiMoveObject$1, ObjectOwner, DisplayFieldsResponse, SuiParsedData } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { Secp256k1Keypair } from '@mysten/sui.js/keypairs/secp256k1';

/**
 * Represents a SUI address, which is a string.
 */
type SuiAddressType = string;
/**
 * Represents a SUI object identifier, which is a string.
 */
type SuiObjectIdType = string;
/**
 * The address representing the clock in the system.
 */
declare const CLOCK_ADDRESS = "0x0000000000000000000000000000000000000000000000000000000000000006";
/**
 * Constants for different modules in the CLMM (Cryptocurrency Liquidity Mining Module).
 */
declare const ClmmPartnerModule = "partner";
declare const ClmmIntegratePoolModule = "pool_script";
declare const ClmmIntegratePoolV2Module = "pool_script_v2";
declare const ClmmIntegrateRouterModule = "router";
declare const ClmmIntegrateRouterWithPartnerModule = "router_with_partner";
declare const ClmmFetcherModule = "fetcher_script";
declare const ClmmExpectSwapModule = "expect_swap";
declare const ClmmIntegrateUtilsModule = "utils";
/**
 * The address for CoinInfo module.
 */
declare const CoinInfoAddress = "0x1::coin::CoinInfo";
/**
 * The address for CoinStore module.
 */
declare const CoinStoreAddress = "0x1::coin::CoinStore";
/**
 * Constants for different modules in the Deepbook system.
 */
declare const DeepbookCustodianV2Moudle = "custodian_v2";
declare const DeepbookClobV2Moudle = "clob_v2";
declare const DeepbookEndpointsV2Moudle = "endpoints_v2";
/**
 * Represents a SUI resource, which can be of any type.
 */
type SuiResource = any;
/**
 * Represents a paginated data page with optional cursor and limit.
 */
type DataPage<T> = {
    data: T[];
    nextCursor?: any;
    hasNextPage: boolean;
};
/**
 * Represents query parameters for pagination.
 */
type PageQuery = {
    cursor?: any;
    limit?: number | null;
};
/**
 * Represents arguments for pagination, with options for fetching all data or using PageQuery.
 */
type PaginationArgs = 'all' | PageQuery;
/**
 * Represents a Non-Fungible Token (NFT) with associated metadata.
 */
type NFT = {
    /**
     * The address or identifier of the creator of the NFT.
     */
    creator: string;
    /**
     * A description providing additional information about the NFT.
     */
    description: string;
    /**
     * The URL to the image representing the NFT visually.
     */
    image_url: string;
    /**
     * A link associated with the NFT, providing more details or interactions.
     */
    link: string;
    /**
     * The name or title of the NFT.
     */
    name: string;
    /**
     * The URL to the project or collection associated with the NFT.
     */
    project_url: string;
};
/**
 * Represents a SUI struct tag.
 */
type SuiStructTag = {
    /**
     * The full address of the struct.
     */
    full_address: string;
    /**
     * The source address of the struct.
     */
    source_address: string;
    /**
     * The address of the struct.
     */
    address: SuiAddressType;
    /**
     * The module to which the struct belongs.
     */
    module: string;
    /**
     * The name of the struct.
     */
    name: string;
    /**
     * An array of type arguments (SUI addresses) for the struct.
     */
    type_arguments: SuiAddressType[];
};
/**
 * Represents basic SUI data types.
 */
type SuiBasicTypes = 'address' | 'bool' | 'u8' | 'u16' | 'u32' | 'u64' | 'u128' | 'u256';
/**
 * Represents a SUI transaction argument, which can be of various types.
 */
type SuiTxArg = TransactionArgument | string | number | bigint | boolean;
/**
 * Represents input types for SUI data.
 */
type SuiInputTypes = 'object' | SuiBasicTypes;
/**
 * Gets the default SUI input type based on the provided value.
 * @param value - The value to determine the default input type for.
 * @returns The default SUI input type.
 * @throws Error if the type of the value is unknown.
 */
declare const getDefaultSuiInputType: (value: any) => SuiInputTypes;

/**
 * Enumerates the possible status values of a position within a liquidity mining module.
 */
declare enum ClmmPositionStatus {
    /**
     * The position has been deleted or removed.
     */
    'Deleted' = "Deleted",
    /**
     * The position exists and is active.
     */
    'Exists' = "Exists",
    /**
     * The position does not exist or is not active.
     */
    'NotExists' = "NotExists"
}
/**
 * Represents a package containing specific configuration or data.
 * @template T - The type of configuration or data contained in the package.
 */
type Package<T = undefined> = {
    /**
     * The unique identifier of the package.
     */
    package_id: string;
    /**
     * the package was published.
     */
    published_at: string;
    /**
     * The version number of the package (optional).
     */
    version?: number;
    /**
     * The configuration or data contained in the package (optional).
     */
    config?: T;
};
/**
 *  The Cetus clmmpool's position NFT.
 */
type Position = {
    /**
     * The unique identifier of the position object.
     */
    pos_object_id: SuiObjectIdType;
    /**
     * The owner of the position.
     */
    owner: SuiObjectIdType;
    /**
     * The liquidity pool associated with the position.
     */
    pool: SuiObjectIdType;
    /**
     * The type of position represented by an address.
     */
    type: SuiAddressType;
    /**
     * The address type of the first coin in the position.
     */
    coin_type_a: SuiAddressType;
    /**
     * The address type of the second coin in the position.
     */
    coin_type_b: SuiAddressType;
    /**
     * The index of the position.
     */
    index: number;
    /**
     * The amount of liquidity held by the position.
     */
    liquidity: string;
    /**
     * The lower tick index of the position range.
     */
    tick_lower_index: number;
    /**
     * The upper tick index of the position range.
     */
    tick_upper_index: number;
    /**
     * The status of the position within the liquidity mining module.
     */
    position_status: ClmmPositionStatus;
} & NFT & PositionReward;
/**
 * Represents reward information associated with a liquidity mining position.
 */
type PositionReward = {
    /**
     * The unique identifier of the position object.
     */
    pos_object_id: SuiObjectIdType;
    /**
     * The amount of liquidity held by the position.
     */
    liquidity: string;
    /**
     * The lower tick index of the position range.
     */
    tick_lower_index: number;
    /**
     * The upper tick index of the position range.
     */
    tick_upper_index: number;
    /**
     * The accumulated fee growth inside the first coin of the position.
     */
    fee_growth_inside_a: string;
    /**
     * The accumulated fee owed in the first coin of the position.
     */
    fee_owed_a: string;
    /**
     * The accumulated fee growth inside the second coin of the position.
     */
    fee_growth_inside_b: string;
    /**
     * The accumulated fee owed in the second coin of the position.
     */
    fee_owed_b: string;
    /**
     * The amount of reward owed in the first reward category.
     */
    reward_amount_owed_0: string;
    /**
     * The amount of reward owed in the second reward category.
     */
    reward_amount_owed_1: string;
    /**
     * The amount of reward owed in the third reward category.
     */
    reward_amount_owed_2: string;
    /**
     * The accumulated reward growth inside the first reward category.
     */
    reward_growth_inside_0: string;
    /**
     * The accumulated reward growth inside the second reward category.
     */
    reward_growth_inside_1: string;
    /**
     * The accumulated reward growth inside the third reward category.
     */
    reward_growth_inside_2: string;
};
/**
 * Represents a pair of coins used in a financial context.
 */
type CoinPairType = {
    /**
     * The address type of the coin a in the pair.
     */
    coinTypeA: SuiAddressType;
    /**
     * The address type of the coin b in the pair.
     */
    coinTypeB: SuiAddressType;
};
/**
 * Represents immutable properties of a liquidity pool.
 */
type PoolImmutables = {
    /**
     * The address of the liquidity pool.
     */
    poolAddress: string;
    /**
     * The tick spacing value used in the pool.
     */
    tickSpacing: string;
} & CoinPairType;
/**
 * "Pool" is the core module of Clmm protocol, which defines the trading pairs of "clmmpool".
 */
type Pool = {
    /**
     * Represents the type or category of a liquidity pool.
     */
    poolType: string;
    /**
     * The amount of coin a.
     */
    coinAmountA: number;
    /**
     * The amount of coin b.
     */
    coinAmountB: number;
    /**
     * The current sqrt price
     */
    current_sqrt_price: number;
    /**
     * The current tick index
     */
    current_tick_index: number;
    /**
     * The global fee growth of coin a as Q64.64
     */
    fee_growth_global_b: number;
    /**
     * The global fee growth of coin b as Q64.64
     */
    fee_growth_global_a: number;
    /**
     * The amounts of coin a owend to protocol
     */
    fee_protocol_coin_a: number;
    /**
     * The amounts of coin b owend to protocol
     */
    fee_protocol_coin_b: number;
    /**
     * The numerator of fee rate, the denominator is 1_000_000.
     */
    fee_rate: number;
    /**
     * is the pool pause
     */
    is_pause: boolean;
    /**
     * The liquidity of current tick index
     */
    liquidity: number;
    /**
     * The pool index
     */
    index: number;
    /**
     * The positions manager
     */
    position_manager: {
        positions_handle: string;
        size: number;
    };
    /**
     * The rewarder manager
     */
    rewarder_infos: Array<Rewarder>;
    rewarder_last_updated_time: string;
    /**
     * The tick manager handle
     */
    ticks_handle: string;
    /**
     * The url for pool and position
     */
    uri: string;
    /**
     * The name for pool
     */
    name: string;
} & PoolImmutables;
type Rewarder = {
    /**
     * The coin address where rewards will be distributed.
     */
    coinAddress: string;
    /**
     * The rate of emissions in coins per second.
     */
    emissions_per_second: number;
    /**
     * The global growth factor influencing reward emissions.
     */
    growth_global: number;
    /**
     * The total emissions in coins that occur every day.
     */
    emissionsEveryDay: number;
};
/**
 * Configuration settings for the Cryptocurrency Liquidity Mining Module (CLMM).
 */
type ClmmConfig = {
    /**
     * Identifier of the pools for liquidity mining.
     */
    pools_id: SuiObjectIdType;
    /**
     * Identifier of the global configuration for the module.
     */
    global_config_id: SuiObjectIdType;
    /**
     * Identifier of the administrative capacity for the module.
     */
    admin_cap_id: SuiObjectIdType;
    /**
     * Identifier of the global vault for the module.
     */
    global_vault_id: SuiObjectIdType;
    /**
     * Optional identifier of partners for the liquidity mining module.
     */
    partners_id?: SuiObjectIdType;
};
/**
 * Represents an event to create a liquidity mining partner.
 */
type CreatePartnerEvent = {
    /**
     * The name of the liquidity mining partner.
     */
    name: string;
    /**
     * The recipient's address for the partner.
     */
    recipient: SuiAddressType;
    /**
     * Identifier of the partner.
     */
    partner_id: SuiObjectIdType;
    /**
     * Identifier of the partner's capacity.
     */
    partner_cap_id: SuiObjectIdType;
    /**
     * The fee rate associated with the partner.
     */
    fee_rate: string;
    /**
     * The starting epoch of the partnership.
     */
    start_epoch: string;
    /**
     * The ending epoch of the partnership.
     */
    end_epoch: string;
};
/**
 * Represents a coin asset with address, object ID, and balance information.
 */
type CoinAsset = {
    /**
     * The address type of the coin asset.
     */
    coinAddress: SuiAddressType;
    /**
     * The object identifier of the coin asset.
     */
    coinObjectId: SuiObjectIdType;
    /**
     * The balance amount of the coin asset.
     */
    balance: bigint;
};
/**
 * Represents a faucet coin configuration.
 */
type FaucetCoin = {
    /**
     * The name or identifier of the transaction module.
     */
    transactionModule: string;
    /**
     * The supply ID or object identifier of the faucet coin.
     */
    suplyID: SuiObjectIdType;
    /**
     * The number of decimal places used for the faucet coin.
     */
    decimals: number;
};
/**
 * Represents parameters for creating a liquidity pool.
 */
type CreatePoolParams = {
    /**
     * The tick spacing value used for the pool.
     */
    tick_spacing: number;
    /**
     * The initial square root price value for the pool.
     */
    initialize_sqrt_price: string;
    /**
     * The Uniform Resource Identifier (URI) associated with the pool.
     */
    uri: string;
} & CoinPairType;
/**
 * Represents parameters for adding liquidity to a created liquidity pool.
 * Extends the CreatePoolParams type.
 */
type CreatePoolAddLiquidityParams = CreatePoolParams & {
    /**
     * The amount of the first coin to be added as liquidity.
     * Can be a number or a string.
     */
    amount_a: number | string;
    /**
     * The amount of the second coin to be added as liquidity.
     * Can be a number or a string.
     */
    amount_b: number | string;
    /**
     * Indicates whether the amount of the first coin is fixed.
     */
    fix_amount_a: boolean;
    /**
     * The lower tick index for liquidity provision.
     */
    tick_lower: number;
    /**
     * The upper tick index for liquidity provision.
     */
    tick_upper: number;
    /**
     * The allowed slippage percentage for the liquidity provision.
     */
    slippage: number;
};
type FetchParams = {
    pool_id: SuiObjectIdType;
} & CoinPairType;
type CommonParams = {
    /**
     * The object id about which pool you want to operation.
     */
    pool_id: SuiObjectIdType;
    /**
     * The object id about position.
     */
    pos_id: SuiObjectIdType;
};
type AddLiquidityFixTokenParams = {
    /**
     * If fixed amount A, you must set amount_a, amount_b will be auto calculated by ClmmPoolUtil.estLiquidityAndcoinAmountFromOneAmounts().
     */
    amount_a: number | string;
    /**
     * If fixed amount B, you must set amount_b, amount_a will be auto calculated by ClmmPoolUtil.estLiquidityAndcoinAmountFromOneAmounts().
     */
    amount_b: number | string;
    /**
     * Price slippage point.
     */
    slippage: number;
    /**
     * true means fixed coinA amount, false means fixed coinB amount
     */
    fix_amount_a: boolean;
    /**
     * control whether or not to create a new position or add liquidity on existed position.
     */
    is_open: boolean;
} & AddLiquidityCommonParams;
type AddLiquidityParams = {
    /**
     * The actual change in liquidity that has been added.
     */
    delta_liquidity: string;
    /**
     * The max limit about used coin a amount
     */
    max_amount_a: number | string;
    /**
     * The max limit about used coin b amount.
     */
    max_amount_b: number | string;
} & AddLiquidityCommonParams;
type AddLiquidityCommonParams = {
    /**
     * Represents the index of the lower tick boundary.
     */
    tick_lower: string | number;
    /**
     * Represents the index of the upper tick boundary.
     */
    tick_upper: string | number;
    /**
     * If you already has one position, you can select collect fees while adding liquidity.
     */
    collect_fee: boolean;
    /**
     * If these not empty, it will collect rewarder in this position, if you already open the position.
     */
    rewarder_coin_types: SuiAddressType[];
} & CoinPairType & CommonParams;
/**
 * Parameters for opening a position within a liquidity pool.
 * Extends the CoinPairType type.
 */
type OpenPositionParams = CoinPairType & {
    /**
     * The lower tick index for the position.
     */
    tick_lower: string;
    /**
     * The upper tick index for the position.
     */
    tick_upper: string;
    /**
     * The object identifier of the liquidity pool.
     */
    pool_id: SuiObjectIdType;
};
/**
 * Parameters for removing liquidity from a pool.
 * Extends the CoinPairType and CommonParams types.
 */
type RemoveLiquidityParams = CoinPairType & CommonParams & {
    /**
     * The change in liquidity amount to be removed.
     */
    delta_liquidity: string;
    /**
     * The minimum amount of the first coin to be received.
     */
    min_amount_a: string;
    /**
     * The minimum amount of the second coin to be received.
     */
    min_amount_b: string;
    /**
     * Indicates whether to collect fees during the removal.
     */
    collect_fee: boolean;
    /**
     * Coin types associated with rewarder contracts.
     */
    rewarder_coin_types: string[];
};
/**
 * Parameters for closing a position within a liquidity pool.
 * Extends the CoinPairType, CommonParams, and CommonParams types.
 */
type ClosePositionParams = CoinPairType & CommonParams & {
    /**
     * Coin types associated with rewarder contracts.
     */
    rewarder_coin_types: SuiAddressType[];
    /**
     * The minimum amount of the first coin to be received.
     */
    min_amount_a: string;
    /**
     * The minimum amount of the second coin to be received.
     */
    min_amount_b: string;
    /**
     * Indicates whether to collect fees during the closing.
     */
    collect_fee: boolean;
} & CoinPairType & CommonParams;
/**
 * Represents parameters for collecting fees.
 */
type CollectFeeParams = CommonParams & CoinPairType;
/**
 * Represents parameters for creating a test transfer transaction payload.
 */
type createTestTransferTxPayloadParams = {
    /**
     * The recipient account address.
     */
    account: string;
    /**
     * The value to transfer.
     */
    value: number;
};
/**
 * Represents parameters for calculating rates in a swap.
 */
type CalculateRatesParams = {
    /**
     * The number of decimal places for token A.
     */
    decimalsA: number;
    /**
     * The number of decimal places for token B.
     */
    decimalsB: number;
    /**
     * Specifies if the swap is from token A to token B.
     */
    a2b: boolean;
    /**
     * Specifies if the swap amount is specified in token A.
     */
    byAmountIn: boolean;
    /**
     * The amount to swap.
     */
    amount: BN;
    /**
     * An array of tick data for swap ticks.
     */
    swapTicks: Array<TickData>;
    /**
     * The current pool information.
     */
    currentPool: Pool;
};
/**
 * Represents the result of calculating rates in a swap.
 */
type CalculateRatesResult = {
    /**
     * The estimated amount in token A.
     */
    estimatedAmountIn: BN;
    /**
     * The estimated amount in token B.
     */
    estimatedAmountOut: BN;
    /**
     * The estimated ending square root price.
     */
    estimatedEndSqrtPrice: BN;
    /**
     * The estimated fee amount.
     */
    estimatedFeeAmount: BN;
    /**
     * Indicates if the estimated amount exceeds the limit.
     */
    isExceed: boolean;
    /**
     * The extra compute limit.
     */
    extraComputeLimit: number;
    /**
     * Specifies if the swap is from token A to token B.
     */
    aToB: boolean;
    /**
     * Specifies if the swap amount is specified in token A.
     */
    byAmountIn: boolean;
    /**
     * The amount to swap.
     */
    amount: BN;
    /**
     * The price impact percentage.
     */
    priceImpactPct: number;
};
/**
 * Represents parameters for a swap operation.
 */
type SwapParams = {
    /**
     * The identifier of the pool.
     */
    pool_id: SuiObjectIdType;
    /**
     * Specifies if the swap is from token A to token B.
     */
    a2b: boolean;
    /**
     * Specifies if the swap amount is specified in token A.
     */
    by_amount_in: boolean;
    /**
     * The swap amount.
     */
    amount: string;
    /**
     * The amount limit for the swap.
     */
    amount_limit: string;
    /**
     * The optional swap partner.
     */
    swap_partner?: string;
} & CoinPairType;
/**
 * Represents parameters for a pre-swap operation.
 */
type PreSwapParams = {
    /**
     * The pool information for the pre-swap.
     */
    pool: Pool;
    /**
     * The current square root price.
     */
    currentSqrtPrice: number;
    /**
     * The number of decimal places for token A.
     */
    decimalsA: number;
    /**
     * The number of decimal places for token B.
     */
    decimalsB: number;
    /**
     * Specifies if the swap is from token A to token B.
     */
    a2b: boolean;
    /**
     * Specifies if the swap amount is specified in token A.
     */
    byAmountIn: boolean;
    /**
     * The swap amount.
     */
    amount: string;
} & CoinPairType;
/**
 * Represents parameters for a pre-swap operation with multiple pools.
 */
type PreSwapWithMultiPoolParams = {
    /**
     * An array of pool addresses for the pre-swap.
     */
    poolAddresses: string[];
    /**
     * Specifies if the swap is from token A to token B.
     */
    a2b: boolean;
    /**
     * Specifies if the swap amount is specified in token A.
     */
    byAmountIn: boolean;
    /**
     * The swap amount.
     */
    amount: string;
} & CoinPairType;
/**
 * If changes in liquidity are required before the swap, then this parameter should be passed.
 */
type PreSwapLpChangeParams = {
    /**
     * Unique identifier for the liquidity pool involved in the transaction.
     */
    pool_id: string;
    /**
     * Lower bound of the liquidity range. In AMM models, like Uniswap V3, liquidity is provided within specific price ranges. This represents the lower limit of that range.
     */
    tick_lower: number;
    /**
     * Upper bound of the liquidity range, corresponding to the lower bound. This defines the upper limit of the range where liquidity is provided.
     */
    tick_upper: number;
    /**
     * The change in liquidity, which can be a large number and is thus represented as a string. It can be positive or negative, indicating an increase or decrease in liquidity.
     */
    delta_liquidity: number;
    /**
     * A boolean value indicating whether the 'delta_liquidity' represents an increase (true) or decrease (false) in liquidity.
     */
    is_increase: boolean;
};
/**
 * Represents parameters for a transitional pre-swap operation with multiple pools.
 */
type TransPreSwapWithMultiPoolParams = {
    /**
     * The address of the pool for the transitional pre-swap.
     */
    poolAddress: string;
    /**
     * Specifies if the swap is from token A to token B.
     */
    a2b: boolean;
    /**
     * Specifies if the swap amount is specified in token A.
     */
    byAmountIn: boolean;
    /**
     * The swap amount.
     */
    amount: string;
} & CoinPairType;
/**
 * Represents parameters for collecting rewarder fees.
 */
type CollectRewarderParams = {
    /**
     * The identifier of the pool.
     */
    pool_id: SuiObjectIdType;
    /**
     * The identifier of the position.
     */
    pos_id: SuiObjectIdType;
    /**
     * Specifies if the fee should be collected.
     */
    collect_fee: boolean;
    /**
     * An array of rewarder coin types.
     */
    rewarder_coin_types: SuiAddressType[];
} & CoinPairType;
/**
 * Represents the amount owed by a rewarder.
 */
type RewarderAmountOwed = {
    /**
     * The amount owed.
     */
    amount_owed: BN;
    /**
     * The address of the coin.
     */
    coin_address: string;
};
/**
 * Utility function to retrieve packager configurations from a package object.
 * @param {Package<T>} packageObj - The package object containing configurations.
 * @throws {Error} Throws an error if the package does not have a valid config.
 * @returns {T} The retrieved configuration.
 */
declare function getPackagerConfigs<T>(packageObj: Package<T>): T & ({} | null);

/**
 * Represents tick data for a liquidity pool.
 */
type TickData = {
    /**
     * The object identifier of the tick data.
     */
    objectId: string;
    /**
     * The index of the tick.
     */
    index: number;
    /**
     * The square root price value for the tick.
     */
    sqrtPrice: BN;
    /**
     * The net liquidity value for the tick.
     */
    liquidityNet: BN;
    /**
     * The gross liquidity value for the tick.
     */
    liquidityGross: BN;
    /**
     * The fee growth outside coin A for the tick.
     */
    feeGrowthOutsideA: BN;
    /**
     * The fee growth outside coin B for the tick.
     */
    feeGrowthOutsideB: BN;
    /**
     * An array of rewarders' growth outside values for the tick.
     */
    rewardersGrowthOutside: BN[];
};
/**
 * Represents a tick for a liquidity pool.
 */
type Tick = {
    /**
     * The index of the tick.
     */
    index: Bits;
    /**
     * The square root price value for the tick (string representation).
     */
    sqrt_price: string;
    /**
     * The net liquidity value for the tick (Bits format).
     */
    liquidity_net: Bits;
    /**
     * The gross liquidity value for the tick (string representation).
     */
    liquidity_gross: string;
    /**
     * The fee growth outside coin A for the tick (string representation).
     */
    fee_growth_outside_a: string;
    /**
     * The fee growth outside coin B for the tick (string representation).
     */
    fee_growth_outside_b: string;
    /**
     * An array of rewarders' growth outside values for the tick (array of string representations).
     */
    rewarders_growth_outside: string[3];
};
/**
 * Represents bits information.
 */
type Bits = {
    bits: string;
};
/**
 * Represents data for a liquidity mining pool.
 */
type ClmmpoolData = {
    coinA: string;
    coinB: string;
    currentSqrtPrice: BN;
    currentTickIndex: number;
    feeGrowthGlobalA: BN;
    feeGrowthGlobalB: BN;
    feeProtocolCoinA: BN;
    feeProtocolCoinB: BN;
    feeRate: BN;
    liquidity: BN;
    tickIndexes: number[];
    tickSpacing: number;
    ticks: Array<TickData>;
    collection_name: string;
};
/**
 * Transforms a Pool object into ClmmpoolData format.
 * @param {Pool} pool - The liquidity pool object to transform.
 * @returns {ClmmpoolData} The transformed ClmmpoolData object.
 */
declare function transClmmpoolDataWithoutTicks(pool: Pool): ClmmpoolData;
/**
 * Creates a Bits object from an index.
 * @param {number | string} index - The index value.
 * @returns {Bits} The created Bits object.
 */
declare function newBits(index: number | string): Bits;

/**
 * The maximum tick index supported by the clmmpool program.
 * @category Constants
 */
declare const MAX_TICK_INDEX = 443636;
/**
 * The minimum tick index supported by the clmmpool program.
 * @category Constants
 */
declare const MIN_TICK_INDEX = -443636;
/**
 * The maximum sqrt-price supported by the clmmpool program.
 * @category Constants
 */
declare const MAX_SQRT_PRICE = "79226673515401279992447579055";
/**
 * The number of initialized ticks that a tick-array account can hold.
 * @category Constants
 */
declare const TICK_ARRAY_SIZE = 64;
/**
 * The minimum sqrt-price supported by the clmmpool program.
 * @category Constants
 */
declare const MIN_SQRT_PRICE = "4295048016";
/**
 * The denominator which the fee rate is divided on.
 * @category Constants
 */
declare const FEE_RATE_DENOMINATOR: BN;

/**
 * Represents configuration for tokens.
 */
type TokenConfig = {
    /**
     * The object identifier of the coin registry.
     */
    coin_registry_id: SuiObjectIdType;
    /**
     * The object identifier of the coin list owner.
     */
    coin_list_owner: SuiObjectIdType;
    /**
     * The object identifier of the pool registry.
     */
    pool_registry_id: SuiObjectIdType;
    /**
     * The object identifier of the pool list owner.
     */
    pool_list_owner: SuiObjectIdType;
};
/**
 * Represents information about a token.
 */
type TokenInfo = {
    /**
     * The name of the token.
     */
    name: string;
    /**
     * The symbol of the token.
     */
    symbol: string;
    /**
     * The official symbol of the token.
     */
    official_symbol: string;
    /**
     * The Coingecko ID of the token.
     */
    coingecko_id: string;
    /**
     * The number of decimal places for the token.
     */
    decimals: number;
    /**
     * The project URL for the token.
     */
    project_url: string;
    /**
     * The URL to the logo image of the token.
     */
    logo_url: string;
    /**
     * The address of the token.
     */
    address: string;
} & Record<string, any>;
/**
 * Represents information about a liquidity pool.
 */
type PoolInfo = {
    /**
     * The symbol of the pool.
     */
    symbol: string;
    /**
     * The name of the pool.
     */
    name: string;
    /**
     * The number of decimal places for the pool.
     */
    decimals: number;
    /**
     * The fee for the pool.
     */
    fee: string;
    /**
     * The tick spacing for the pool.
     */
    tick_spacing: number;
    /**
     * The type of the pool.
     */
    type: string;
    /**
     * The address of the pool.
     */
    address: string;
    /**
     * The address of coin A for the pool.
     */
    coin_a_address: string;
    /**
     * The address of coin B for the pool.
     */
    coin_b_address: string;
    /**
     * The project URL for the pool.
     */
    project_url: string;
    /**
     * The sort order for the pool.
     */
    sort: number;
    /**
     * Indicates if the rewarder is displayed for the pool.
     */
    is_display_rewarder: boolean;
    /**
     * Indicates if rewarder 1 is displayed for the pool.
     */
    rewarder_display1: boolean;
    /**
     * Indicates if rewarder 2 is displayed for the pool.
     */
    rewarder_display2: boolean;
    /**
     * Indicates if rewarder 3 is displayed for the pool.
     */
    rewarder_display3: boolean;
    /**
     * Indicates if the pool is stable.
     */
    is_stable: boolean;
} & Record<string, any>;
/**
 * Represents an event related to token configuration.
 */
type TokenConfigEvent = {
    /**
     * The object identifier of the coin registry.
     */
    coin_registry_id: SuiObjectIdType;
    /**
     * The object identifier of the coin list owner.
     */
    coin_list_owner: SuiObjectIdType;
    /**
     * The object identifier of the pool registry.
     */
    pool_registry_id: SuiObjectIdType;
    /**
     * The object identifier of the pool list owner.
     */
    pool_list_owner: SuiObjectIdType;
};

/**
 * Represents configurations specific to the Cetus protocol.
 */
type CetusConfigs = {
    /**
     * The object identifier of the coin list.
     */
    coin_list_id: SuiObjectIdType;
    /**
     * The object identifier of the coin list handle.
     */
    coin_list_handle: SuiObjectIdType;
    /**
     * The object identifier of the launchpad pools.
     */
    launchpad_pools_id: SuiObjectIdType;
    /**
     * The object identifier of the launchpad pools handle.
     */
    launchpad_pools_handle: SuiObjectIdType;
    /**
     * The object identifier of the CLMM (Cryptocurrency Liquidity Mining Module) pools.
     */
    clmm_pools_id: SuiObjectIdType;
    /**
     * The object identifier of the CLMM pools handle.
     */
    clmm_pools_handle: SuiObjectIdType;
    /**
     * The object identifier of the admin cap.
     */
    admin_cap_id: SuiObjectIdType;
    /**
     * The object identifier of the global configuration.
     */
    global_config_id: SuiObjectIdType;
};
/**
 * Represents configuration data for a cryptocurrency coin.
 */
type CoinConfig = {
    /**
     * The unique identifier of the coin.
     */
    id: string;
    /**
     * The name of the coin.
     */
    name: string;
    /**
     * The symbol of the coin.
     */
    symbol: string;
    /**
     * The address associated with the coin.
     */
    address: string;
    /**
     * The Pyth identifier of the coin.
     */
    pyth_id: string;
    /**
     * The project URL related to the coin.
     */
    project_url: string;
    /**
     * The URL to the logo image of the coin.
     */
    logo_url: string;
    /**
     * The number of decimal places used for the coin.
     */
    decimals: number;
} & Record<string, any>;
/**
 * Represents configuration data for a CLMM pool.
 */
type ClmmPoolConfig = {
    /**
     * The unique identifier of the CLMM pool.
     */
    id: string;
    /**
     * Indicates if the CLMM pool is closed.
     */
    is_closed: boolean;
    /**
     * Indicates if the rewarder for the CLMM pool is shown.
     */
    is_show_rewarder: boolean;
    /**
     * The address of the CLMM pool.
     */
    pool_address: string;
    /**
     * The type of the CLMM pool.
     */
    pool_type: string;
    /**
     * The project URL related to the CLMM pool.
     */
    project_url: string;
    /**
     * Indicates if rewarder 1 is shown for the CLMM pool.
     */
    show_rewarder_1: boolean;
    /**
     * Indicates if rewarder 2 is shown for the CLMM pool.
     */
    show_rewarder_2: boolean;
    /**
     * Indicates if rewarder 3 is shown for the CLMM pool.
     */
    show_rewarder_3: boolean;
} & Record<string, any>;
/**
 * Represents configuration data for a launchpad pool.
 */
type LaunchpadPoolConfig = {
    /**
     * The object identifier of the launchpad pool.
     */
    id: SuiObjectIdType;
    /**
     * Indicates if the settlement is shown for the launchpad pool.
     */
    show_settle: boolean;
    /**
     * The symbol of the coin associated with the launchpad pool.
     */
    coin_symbol: string;
    /**
     * The name of the coin associated with the launchpad pool.
     */
    coin_name: string;
    /**
     * The icon of the coin associated with the launchpad pool.
     */
    coin_icon: string;
    /**
     * An array of banner URLs for the launchpad pool.
     */
    banners: string[];
    /**
     * The introduction text for the launchpad pool.
     */
    introduction: string;
    /**
     * Indicates if the launchpad pool is closed.
     */
    is_closed: boolean;
    /**
     * The address of the launchpad pool.
     */
    pool_address: string;
    /**
     * The project details for the launchpad pool.
     */
    project_details: string;
    /**
     * The regulation details for the launchpad pool.
     */
    regulation: string;
    /**
     * An array of social media links for the launchpad pool.
     */
    social_media: {
        name: string;
        link: string;
    }[];
    /**
     * The terms and conditions for the launchpad pool.
     */
    terms: string;
    /**
     * The tokenomics information for the launchpad pool.
     */
    tokenomics: string;
    /**
     * The website URL for the launchpad pool.
     */
    website: string;
    /**
     * The terms and conditions for the white list of the launchpad pool.
     */
    white_list_terms: string;
} & Record<string, any>;

/**
 * Represents input data for adding liquidity to a pool.
 */
type LiquidityInput = {
    /**
     * The amount of coin A.
     */
    coinAmountA: BN;
    /**
     * The amount of coin B.
     */
    coinAmountB: BN;
    /**
     * The maximum amount of token A.
     */
    tokenMaxA: BN;
    /**
     * The maximum amount of token B.
     */
    tokenMaxB: BN;
    /**
     * The liquidity amount.
     */
    liquidityAmount: BN;
    fix_amount_a: boolean;
};
/**
 * Represents the direction of a swap.
 */
declare enum SwapDirection {
    /**
     * Swap from coin A to coin B.
     */
    A2B = "a2b",
    /**
     * Swap from coin B to coin A.
     */
    B2A = "b2a"
}

type BigNumber = Decimal.Value | number | string;

interface IModule {
    readonly sdk: CetusClmmSDK;
}

/**
 * Helper class to help interact with clmm pools with a pool router interface.
 */
declare class PoolModule implements IModule {
    protected _sdk: CetusClmmSDK;
    private readonly _cache;
    constructor(sdk: CetusClmmSDK);
    get sdk(): CetusClmmSDK;
    /**
     * Gets a list of positions for the given positionHandle.
     * @param {string} positionHandle The handle for the position.
     * @returns {DataPage<Position>} A promise that resolves to an array of Position objects.
     */
    getPositionList(positionHandle: string, paginationArgs?: PaginationArgs): Promise<DataPage<Position>>;
    /**
     * Gets a list of pool immutables.
     * @param {string[]} assignPoolIDs An array of pool IDs to get.
     * @param {number} offset The offset to start at.
     * @param {number} limit The number of pools to get.
     * @param {boolean} forceRefresh Whether to force a refresh of the cache.
     * @returns {Promise<PoolImmutables[]>} array of PoolImmutable objects.
     */
    getPoolImmutables(assignPoolIDs?: string[], offset?: number, limit?: number, forceRefresh?: boolean): Promise<PoolImmutables[]>;
    /**
     * Gets a list of pools.
     * @param {string[]} assignPools An array of pool IDs to get.
     * @param {number} offset The offset to start at.
     * @param {number} limit The number of pools to get.
     * @returns {Promise<Pool[]>} array of Pool objects.
     */
    getPools(assignPools?: string[], offset?: number, limit?: number): Promise<Pool[]>;
    /**
     * Gets a list of pool immutables.
     * @param {PaginationArgs} paginationArgs The cursor and limit to start at.
     * @returns {Promise<DataPage<PoolImmutables>>} Array of PoolImmutable objects.
     */
    getPoolImmutablesWithPage(paginationArgs?: PaginationArgs, forceRefresh?: boolean): Promise<DataPage<PoolImmutables>>;
    /**
     * Gets a list of pools.
     * @param {string[]} assignPools An array of pool IDs to get.
     * @returns {Promise<Pool[]>} An array of Pool objects.
     */
    getPoolsWithPage(assignPools?: string[]): Promise<Pool[]>;
    /**
     * Gets a pool by its object ID.
     * @param {string} poolID The object ID of the pool to get.
     * @param {true} forceRefresh Whether to force a refresh of the cache.
     * @returns {Promise<Pool>} A promise that resolves to a Pool object.
     */
    getPool(poolID: string, forceRefresh?: boolean): Promise<Pool>;
    /**
     * Creates a transaction payload for creating multiple pools.
     * @param {CreatePoolParams[]} paramss The parameters for the pools.
     * @returns {Promise<TransactionBlock>} A promise that resolves to the transaction payload.
     */
    creatPoolsTransactionPayload(paramss: CreatePoolParams[]): Promise<TransactionBlock>;
    /**
     * Create a pool of clmmpool protocol. The pool is identified by (CoinTypeA, CoinTypeB, tick_spacing).
     * @param {CreatePoolParams | CreatePoolAddLiquidityParams} params
     * @returns {Promise<TransactionBlock>}
     */
    creatPoolTransactionPayload(params: CreatePoolParams | CreatePoolAddLiquidityParams): Promise<TransactionBlock>;
    /**
     * Gets the ClmmConfig object for the given package object ID.
     * @param {boolean} forceRefresh Whether to force a refresh of the cache.
     * @returns the ClmmConfig object.
     */
    getClmmConfigs(forceRefresh?: boolean): Promise<ClmmConfig>;
    /**
     * Gets the SUI transaction response for a given transaction digest.
     * @param digest - The digest of the transaction for which the SUI transaction response is requested.
     * @param forceRefresh - A boolean flag indicating whether to force a refresh of the response.
     * @returns A Promise that resolves with the SUI transaction block response or null if the response is not available.
     */
    getSuiTransactionResponse(digest: string, forceRefresh?: boolean): Promise<SuiTransactionBlockResponse | null>;
    /**
     * Create pool internal.
     * @param {CreatePoolParams[]}params The parameters for the pools.
     * @returns {Promise<TransactionBlock>} A promise that resolves to the transaction payload.
     */
    private creatPool;
    /**
     * Create pool and add liquidity internal. It will call create_pool_with_liquidity function.
     * @param {CreatePoolAddLiquidityParams}params The parameters for the create and liquidity.
     * @returns {Promise<TransactionBlock>} A promise that resolves to the transaction payload.
     */
    private creatPoolAndAddLiquidity;
    /**
     * Fetches ticks from the exchange.
     * @param {FetchParams} params The parameters for the fetch.
     * @returns {Promise<TickData[]>} A promise that resolves to an array of tick data.
     */
    fetchTicks(params: FetchParams): Promise<TickData[]>;
    /**
     * Fetches ticks from the exchange using the simulation exec tx.
     * @param {GetTickParams} params The parameters for the fetch.
     * @returns {Promise<TickData[]>} A promise that resolves to an array of tick data.
     */
    private getTicks;
    /**
     * Fetches a list of position rewards from the exchange.
     * @param {FetchParams} params The parameters for the fetch.
     * @returns {Promise<PositionReward[]>} A promise that resolves to an array of position rewards.
     */
    fetchPositionRewardList(params: FetchParams): Promise<PositionReward[]>;
    /**
     * Fetches ticks from the fullnode using the RPC API.
     * @param {string} tickHandle The handle for the tick.
     * @returns {Promise<TickData[]>} A promise that resolves to an array of tick data.
     */
    fetchTicksByRpc(tickHandle: string): Promise<TickData[]>;
    /**
     * Get ticks by tick object ids.
     * @param {string} tickObjectId The object ids of the ticks.
     * @returns {Promise<TickData[]>} A promise that resolves to an array of tick data.
     */
    private getTicksByRpc;
    /**
     * Gets the tick data for the given tick index.
     * @param {string} tickHandle The handle for the tick.
     * @param {number} tickIndex The index of the tick.
     * @returns {Promise<TickData | null>} A promise that resolves to the tick data.
     */
    getTickDataByIndex(tickHandle: string, tickIndex: number): Promise<TickData>;
    /**
     * Gets the tick data for the given object ID.
     * @param {string} tickId The object ID of the tick.
     * @returns {Promise<TickData | null>} A promise that resolves to the tick data.
     */
    getTickDataByObjectId(tickId: string): Promise<TickData | null>;
    /**
     * Get partner ref fee amount
     * @param {string}partner Partner object id
     * @returns {Promise<CoinAsset[]>} A promise that resolves to an array of coin asset.
     */
    getPartnerRefFeeAmount(partner: string): Promise<CoinAsset[]>;
    /**
     * Claim partner ref fee.
     * @param {string} partnerCap partner cap id.
     * @param {string} partner partner id.
     * @returns {Promise<TransactionBlock>} A promise that resolves to the transaction payload.
     */
    claimPartnerRefFeePayload(partnerCap: string, partner: string, coinType: string): Promise<TransactionBlock>;
    /**
     * Updates the cache for the given key.
     * @param key The key of the cache entry to update.
     * @param data The data to store in the cache.
     * @param time The time in minutes after which the cache entry should expire.
     */
    updateCache(key: string, data: SuiResource, time?: number): void;
    /**
     * Gets the cache entry for the given key.
     * @param key The key of the cache entry to get.
     * @param forceRefresh Whether to force a refresh of the cache entry.
     * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
     */
    getCache<T>(key: string, forceRefresh?: boolean): T | undefined;
}

declare function estPoolAPR(preBlockReward: BN, rewardPrice: BN, totalTradingFee: BN, totalLiquidityValue: BN): BN;
type estPosAPRResult = {
    feeAPR: Decimal;
    posRewarder0APR: Decimal;
    posRewarder1APR: Decimal;
    posRewarder2APR: Decimal;
};
declare function estPositionAPRWithDeltaMethod(currentTickIndex: number, lowerTickIndex: number, upperTickIndex: number, currentSqrtPriceX64: BN, poolLiquidity: BN, decimalsA: number, decimalsB: number, decimalsRewarder0: number, decimalsRewarder1: number, decimalsRewarder2: number, feeRate: number, amountAStr: string, amountBStr: string, poolAmountA: BN, poolAmountB: BN, swapVolumeStr: string, poolRewarders0Str: string, poolRewarders1Str: string, poolRewarders2Str: string, coinAPriceStr: string, coinBPriceStr: string, rewarder0PriceStr: string, rewarder1PriceStr: string, rewarder2PriceStr: string): estPosAPRResult;
declare function estPositionAPRWithMultiMethod(lowerUserPrice: number, upperUserPrice: number, lowerHistPrice: number, upperHistPrice: number): Decimal;

type SwapStepResult = {
    amountIn: BN;
    amountOut: BN;
    nextSqrtPrice: BN;
    feeAmount: BN;
};
type SwapResult = {
    amountIn: BN;
    amountOut: BN;
    feeAmount: BN;
    refAmount: BN;
    nextSqrtPrice: BN;
    crossTickNum: number;
};
type CoinAmounts = {
    coinA: BN;
    coinB: BN;
};
declare function toCoinAmount(a: number, b: number): CoinAmounts;
/**
 * Get the amount A delta about two prices, for give amount of liquidity.
 * `delta_a = (liquidity * delta_sqrt_price) / sqrt_price_upper * sqrt_price_lower)`
 *
 * @param sqrtPrice0 - A sqrt price
 * @param sqrtPrice1 - Another sqrt price
 * @param liquidity - The amount of usable liquidity
 * @param roundUp - Whether to round the amount up or down
 * @returns
 */
declare function getDeltaA(sqrtPrice0: BN, sqrtPrice1: BN, liquidity: BN, roundUp: boolean): BN;
/**
 * Get the amount B delta about two prices, for give amount of liquidity.
 * `delta_a = (liquidity * delta_sqrt_price) / sqrt_price_upper * sqrt_price_lower)`
 *
 * @param sqrtPrice0 - A sqrt price
 * @param sqrtPrice1 - Another sqrt price
 * @param liquidity - The amount of usable liquidity
 * @param roundUp - Whether to round the amount up or down
 * @returns
 */
declare function getDeltaB(sqrtPrice0: BN, sqrtPrice1: BN, liquidity: BN, roundUp: boolean): BN;
/**
 * Get the next sqrt price from give a delta of token_a.
 * `new_sqrt_price = (sqrt_price * liquidity) / (liquidity +/- amount * sqrt_price)`
 *
 * @param sqrtPrice - The start sqrt price
 * @param liquidity - The amount of usable liquidity
 * @param amount - The amount of token_a
 * @param byAmountIn - Weather to fixed input
 */
declare function getNextSqrtPriceAUp(sqrtPrice: BN, liquidity: BN, amount: BN, byAmountIn: boolean): BN;
/**
 * Get the next sqrt price from give a delta of token_b.
 * `new_sqrt_price = (sqrt_price +(delta_b / liquidity)`
 *
 * @param sqrtPrice - The start sqrt price
 * @param liquidity - The amount of usable liquidity
 * @param amount - The amount of token_a
 * @param byAmountIn - Weather to fixed input
 */
declare function getNextSqrtPriceBDown(sqrtPrice: BN, liquidity: BN, amount: BN, byAmountIn: boolean): BN;
/**
 * Get next sqrt price from input parameter.
 *
 * @param sqrtPrice
 * @param liquidity
 * @param amount
 * @param aToB
 * @returns
 */
declare function getNextSqrtPriceFromInput(sqrtPrice: BN, liquidity: BN, amount: BN, aToB: boolean): BN;
/**
 * Get the next sqrt price from output parameters.
 *
 * @param sqrtPrice
 * @param liquidity
 * @param amount
 * @param a2b
 * @returns
 */
declare function getNextSqrtPriceFromOutput(sqrtPrice: BN, liquidity: BN, amount: BN, a2b: boolean): BN;
/**
 * Get the amount of delta_a or delta_b from input parameters, and round up result.
 *
 * @param currentSqrtPrice
 * @param targetSqrtPrice
 * @param liquidity
 * @param a2b
 * @returns
 */
declare function getDeltaUpFromInput(currentSqrtPrice: BN, targetSqrtPrice: BN, liquidity: BN, a2b: boolean): BN;
/**
 * Get the amount of delta_a or delta_b from output parameters, and round down result.
 *
 * @param currentSqrtPrice
 * @param targetSqrtPrice
 * @param liquidity
 * @param a2b
 * @returns
 */
declare function getDeltaDownFromOutput(currentSqrtPrice: BN, targetSqrtPrice: BN, liquidity: BN, a2b: boolean): BN;
/**
 * Simulate per step of swap on every tick.
 *
 * @param currentSqrtPrice
 * @param targetSqrtPrice
 * @param liquidity
 * @param amount
 * @param feeRate
 * @param byAmountIn
 * @returns
 */
declare function computeSwapStep(currentSqrtPrice: BN, targetSqrtPrice: BN, liquidity: BN, amount: BN, feeRate: BN, byAmountIn: boolean): SwapStepResult;
/**
 * Simulate swap by imput lots of ticks.
 * @param aToB
 * @param byAmountIn
 * @param amount
 * @param poolData
 * @param swapTicks
 * @returns
 */
declare function computeSwap(aToB: boolean, byAmountIn: boolean, amount: BN, poolData: ClmmpoolData, swapTicks: Array<TickData>): SwapResult;
/**
 * Estimate liquidity for coin A
 * @param sqrtPriceX - coin A sqrtprice
 * @param sqrtPriceY - coin B sqrtprice
 * @param coinAmount - token amount
 * @return
 */
declare function estimateLiquidityForCoinA(sqrtPriceX: BN, sqrtPriceY: BN, coinAmount: BN): BN;
/**
 * Estimate liquidity for coin B
 * @param sqrtPriceX - coin A sqrtprice
 * @param sqrtPriceY - coin B sqrtprice
 * @param coinAmount - token amount
 * @return
 */
declare function estimateLiquidityForCoinB(sqrtPriceX: BN, sqrtPriceY: BN, coinAmount: BN): BN;
declare class ClmmPoolUtil {
    /**
     * Update fee rate.
     * @param clmm - clmmpool data
     * @param feeAmount - fee Amount
     * @param refRate - ref rate
     * @param protocolFeeRate - protocol fee rate
     * @param iscoinA - is token A
     * @returns percentage
     */
    static updateFeeRate(clmm: ClmmpoolData, feeAmount: BN, refRate: number, protocolFeeRate: number, iscoinA: boolean): {
        refFee: BN;
        clmm: ClmmpoolData;
    };
    /**
     * Get token amount fron liquidity.
     * @param liquidity - liquidity
     * @param curSqrtPrice - Pool current sqrt price
     * @param lowerSqrtPrice - position lower sqrt price
     * @param upperSqrtPrice - position upper sqrt price
     * @param roundUp - is round up
     * @returns
     */
    static getCoinAmountFromLiquidity(liquidity: BN, curSqrtPrice: BN, lowerSqrtPrice: BN, upperSqrtPrice: BN, roundUp: boolean): CoinAmounts;
    /**
     * Estimate liquidity and token amount from one amounts
     * @param lowerTick - lower tick
     * @param upperTick - upper tick
     * @param coinAmount - token amount
     * @param iscoinA - is token A
     * @param roundUp - is round up
     * @param isIncrease - is increase
     * @param slippage - slippage percentage
     * @param curSqrtPrice - current sqrt price.
     * @return IncreaseLiquidityInput
     */
    static estLiquidityAndcoinAmountFromOneAmounts(lowerTick: number, upperTick: number, coinAmount: BN, iscoinA: boolean, roundUp: boolean, slippage: number, curSqrtPrice: BN): LiquidityInput;
    /**
     * Estimate liquidity from token amounts
     * @param curSqrtPrice - current sqrt price.
     * @param lowerTick - lower tick
     * @param upperTick - upper tick
     * @param tokenAmount - token amount
     * @return
     */
    static estimateLiquidityFromcoinAmounts(curSqrtPrice: BN, lowerTick: number, upperTick: number, tokenAmount: CoinAmounts): BN;
    /**
     * Estimate coin amounts from total amount
     * @param lowerTick
     * @param upperTick
     * @param decimalsA
     * @param decimalsB
     * @param curSqrtPrice
     * @param totalAmount
     * @param tokenPriceA
     * @param tokenPriceB
     * @returns
     */
    static estCoinAmountsFromTotalAmount(lowerTick: number, upperTick: number, curSqrtPrice: BN, totalAmount: string, tokenPriceA: string, tokenPriceB: string): {
        amountA: Decimal;
        amountB: Decimal;
    };
    static calculateDepositRatioFixTokenA(lowerTick: number, upperTick: number, curSqrtPrice: BN): {
        ratioA: Decimal;
        ratioB: Decimal;
    };
}

declare const DEFAULT_GAS_BUDGET_FOR_SPLIT = 1000;
declare const DEFAULT_GAS_BUDGET_FOR_MERGE = 500;
declare const DEFAULT_GAS_BUDGET_FOR_TRANSFER = 100;
declare const DEFAULT_GAS_BUDGET_FOR_TRANSFER_SUI = 100;
declare const DEFAULT_GAS_BUDGET_FOR_STAKE = 1000;
declare const GAS_TYPE_ARG = "0x2::sui::SUI";
declare const GAS_TYPE_ARG_LONG = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
declare const GAS_SYMBOL = "SUI";
declare const DEFAULT_NFT_TRANSFER_GAS_FEE = 450;
declare const SUI_SYSTEM_STATE_OBJECT_ID = "0x0000000000000000000000000000000000000005";
/**
 * This class provides helper methods for working with coins.
 */
declare class CoinAssist {
    /**
     * Get the coin type argument from a SuiMoveObject.
     *
     * @param obj The SuiMoveObject to get the coin type argument from.
     * @returns The coin type argument, or null if it is not found.
     */
    static getCoinTypeArg(obj: SuiMoveObject): string | null;
    /**
     * Get whether a SuiMoveObject is a SUI coin.
     *
     * @param obj The SuiMoveObject to check.
     * @returns Whether the SuiMoveObject is a SUI coin.
     */
    static isSUI(obj: SuiMoveObject): boolean;
    /**
     * Get the coin symbol from a coin type argument.
     *
     * @param coinTypeArg The coin type argument to get the symbol from.
     * @returns The coin symbol.
     */
    static getCoinSymbol(coinTypeArg: string): string;
    /**
     * Get the balance of a SuiMoveObject.
     *
     * @param obj The SuiMoveObject to get the balance from.
     * @returns The balance of the SuiMoveObject.
     */
    static getBalance(obj: SuiMoveObject): bigint;
    /**
     * Get the total balance of a list of CoinAsset objects for a given coin address.
     *
     * @param objs The list of CoinAsset objects to get the total balance for.
     * @param coinAddress The coin address to get the total balance for.
     * @returns The total balance of the CoinAsset objects for the given coin address.
     */
    static totalBalance(objs: CoinAsset[], coinAddress: SuiAddressType): bigint;
    /**
     * Get the ID of a SuiMoveObject.
     *
     * @param obj The SuiMoveObject to get the ID from.
     * @returns The ID of the SuiMoveObject.
     */
    static getID(obj: SuiMoveObject): string;
    /**
     * Get the coin type from a coin type argument.
     *
     * @param coinTypeArg The coin type argument to get the coin type from.
     * @returns The coin type.
     */
    static getCoinTypeFromArg(coinTypeArg: string): string;
    /**
     * Get the FaucetCoin objects from a SuiTransactionBlockResponse.
     *
     * @param suiTransactionResponse The SuiTransactionBlockResponse to get the FaucetCoin objects from.
     * @returns The FaucetCoin objects.
     */
    static getFaucetCoins(suiTransactionResponse: SuiTransactionBlockResponse): FaucetCoin[];
    /**
     * Get the CoinAsset objects for a given coin type.
     *
     * @param coinType The coin type to get the CoinAsset objects for.
     * @param allSuiObjects The list of all SuiMoveObjects.
     * @returns The CoinAsset objects for the given coin type.
     */
    static getCoinAssets(coinType: string, allSuiObjects: CoinAsset[]): CoinAsset[];
    /**
     * Get whether a coin address is a SUI coin.
     *
     * @param coinAddress The coin address to check.
     * @returns Whether the coin address is a SUI coin.
     */
    static isSuiCoin(coinAddress: SuiAddressType): boolean;
    /**
     * Select the CoinAsset objects from a list of CoinAsset objects that have a balance greater than or equal to a given amount.
     *
     * @param coins The list of CoinAsset objects to select from.
     * @param amount The amount to select CoinAsset objects with a balance greater than or equal to.
     * @param exclude A list of CoinAsset objects to exclude from the selection.
     * @returns The CoinAsset objects that have a balance greater than or equal to the given amount.
     */
    static selectCoinObjectIdGreaterThanOrEqual(coins: CoinAsset[], amount: bigint, exclude?: string[]): {
        objectArray: string[];
        remainCoins: CoinAsset[];
        amountArray: string[];
    };
    /**
     * Select the CoinAsset objects from a list of CoinAsset objects that have a balance greater than or equal to a given amount.
     *
     * @param coins The list of CoinAsset objects to select from.
     * @param amount The amount to select CoinAsset objects with a balance greater than or equal to.
     * @param exclude A list of CoinAsset objects to exclude from the selection.
     * @returns The CoinAsset objects that have a balance greater than or equal to the given amount.
     */
    static selectCoinAssetGreaterThanOrEqual(coins: CoinAsset[], amount: bigint, exclude?: string[]): {
        selectedCoins: CoinAsset[];
        remainingCoins: CoinAsset[];
    };
    /**
     * Sort the CoinAsset objects by their balance.
     *
     * @param coins The CoinAsset objects to sort.
     * @returns The sorted CoinAsset objects.
     */
    static sortByBalance(coins: CoinAsset[]): CoinAsset[];
    static sortByBalanceDes(coins: CoinAsset[]): CoinAsset[];
    /**
     * Calculate the total balance of a list of CoinAsset objects.
     *
     * @param coins The list of CoinAsset objects to calculate the total balance for.
     * @returns The total balance of the CoinAsset objects.
     */
    static calculateTotalBalance(coins: CoinAsset[]): bigint;
}

/**
 * @category CollectFeesQuoteParam
 */
type CollectFeesQuoteParam = {
    clmmpool: Pool;
    position: Position;
    tickLower: TickData;
    tickUpper: TickData;
};
/**
 * @category CollectFeesQuote
 */
type CollectFeesQuote = {
    position_id: string;
    feeOwedA: BN;
    feeOwedB: BN;
};
/**
 * Get a fee quote on the outstanding fees owed to a position.
 *
 * @category CollectFeesQuoteParam
 * @param param A collection of fetched Clmmpool accounts to faciliate the quote.
 * @returns A quote object containing the fees owed for each token in the pool.
 */
declare function collectFeesQuote(param: CollectFeesQuoteParam): CollectFeesQuote;

/**
 * Percentage - the util set for percentage struct.
 */
declare class Percentage {
    readonly numerator: BN;
    readonly denominator: BN;
    constructor(numerator: BN, denominator: BN);
    /**
     * Get the percentage of a number.
     *
     * @param number
     * @returns
     */
    static fromDecimal(number: Decimal$1): Percentage;
    /**
     * Get the percentage of a fraction.
     *
     * @param numerator
     * @param denominator
     * @returns
     */
    static fromFraction(numerator: BN | number, denominator: BN | number): Percentage;
}

declare enum AmountSpecified {
    Input = "Specified input amount",
    Output = "Specified output amount"
}
declare enum PositionStatus {
    BelowRange = 0,
    InRange = 1,
    AboveRange = 2
}
/**
 * This class provides utility methods for working with positions.
 */
declare class PositionUtil {
    /**
     * Get the position status for the given tick indices.
     *
     * @param currentTickIndex The current tick index.
     * @param lowerTickIndex The lower tick index.
     * @param upperTickIndex The upper tick index.
     * @returns The position status.
     */
    static getPositionStatus(currentTickIndex: number, lowerTickIndex: number, upperTickIndex: number): PositionStatus;
}
/**
 * Get token A from liquidity.
 * @param liquidity - liquidity.
 * @param sqrtPrice0X64 - Current sqrt price of coin 0.
 * @param sqrtPrice1X64 - Current sqrt price of coin 1.
 * @param roundUp - If round up.
 *
 * @returns
 */
declare function getCoinAFromLiquidity(liquidity: BN, sqrtPrice0X64: BN, sqrtPrice1X64: BN, roundUp: boolean): BN;
/**
 * Get token B from liquidity.
 * @param liquidity - liqudity.
 * @param sqrtPrice0X64 - Current sqrt price of token 0.
 * @param sqrtPrice1X64 - Current sqrt price of token 1.
 * @param roundUp - If round up.
 *
 * @returns
 */
declare function getCoinBFromLiquidity(liquidity: BN, sqrtPrice0X64: BN, sqrtPrice1X64: BN, roundUp: boolean): BN;
/**
 * Get liquidity from token A.
 *
 * @param amount - The amount of token A.
 * @param sqrtPriceLowerX64 - The lower sqrt price.
 * @param sqrtPriceUpperX64 - The upper sqrt price.
 * @param roundUp - If round up.
 * @returns liquidity.
 */
declare function getLiquidityFromCoinA(amount: BN, sqrtPriceLowerX64: BN, sqrtPriceUpperX64: BN, roundUp: boolean): BN;
/**
 * Get liquidity from token B.
 * @param amount - The amount of token B.
 * @param sqrtPriceLowerX64 - The lower sqrt price.
 * @param sqrtPriceUpperX64 - The upper sqrt price.
 * @param roundUp - If round up.
 *
 * @returns liquidity.
 */
declare function getLiquidityFromCoinB(amount: BN, sqrtPriceLowerX64: BN, sqrtPriceUpperX64: BN, roundUp: boolean): BN;
/**
 * Get amount of fixed delta.
 * @param currentSqrtPriceX64 - Current sqrt price.
 * @param targetSqrtPriceX64 - Target sqrt price.
 * @param liquidity - liqudity.
 * @param amountSpecified - The amount specified in the swap.
 * @param swapDirection - The swap direction.
 *
 * @returns
 */
declare function getAmountFixedDelta(currentSqrtPriceX64: BN, targetSqrtPriceX64: BN, liquidity: BN, amountSpecified: AmountSpecified, swapDirection: SwapDirection): BN;
/**
 * Get amount of unfixed delta.
 * @param currentSqrtPriceX64 - Current sqrt price.
 * @param targetSqrtPriceX64 - Target sqrt price.
 * @param liquidity - liqudity.
 * @param amountSpecified - The amount specified in the swap.
 * @param swapDirection - The swap direction.
 *
 * @returns
 */
declare function getAmountUnfixedDelta(currentSqrtPriceX64: BN, targetSqrtPriceX64: BN, liquidity: BN, amountSpecified: AmountSpecified, swapDirection: SwapDirection): BN;
declare function adjustForSlippage(n: BN, { numerator, denominator }: Percentage, adjustUp: boolean): BN;
declare function adjustForCoinSlippage(tokenAmount: CoinAmounts, slippage: Percentage, adjustUp: boolean): {
    tokenMaxA: BN;
    tokenMaxB: BN;
};

declare class SwapUtils {
    /**
     * Get the default sqrt price limit for a swap.
     *
     * @param a2b - true if the swap is A to B, false if the swap is B to A.
     * @returns The default sqrt price limit for the swap.
     */
    static getDefaultSqrtPriceLimit(a2b: boolean): BN;
    /**
     * Get the default values for the otherAmountThreshold in a swap.
     *
     * @param amountSpecifiedIsInput - The direction of a swap
     * @returns The default values for the otherAmountThreshold parameter in a swap.
     */
    static getDefaultOtherAmountThreshold(amountSpecifiedIsInput: boolean): BN;
}
/**
 * Get lower sqrt price from token A.
 *
 * @param amount - The amount of tokens the user wanted to swap from.
 * @param liquidity - The liquidity of the pool.
 * @param sqrtPriceX64 - The sqrt price of the pool.
 * @returns LowesqrtPriceX64
 */
declare function getLowerSqrtPriceFromCoinA(amount: BN, liquidity: BN, sqrtPriceX64: BN): BN;
/**
 * Get upper sqrt price from token A.
 *
 * @param amount - The amount of tokens the user wanted to swap from.
 * @param liquidity - The liquidity of the pool.
 * @param sqrtPriceX64 - The sqrt price of the pool.
 * @returns LowesqrtPriceX64
 */
declare function getUpperSqrtPriceFromCoinA(amount: BN, liquidity: BN, sqrtPriceX64: BN): BN;
/**
 * Get lower sqrt price from coin B.
 *
 * @param amount - The amount of coins the user wanted to swap from.
 * @param liquidity - The liquidity of the pool.
 * @param sqrtPriceX64 - The sqrt price of the pool.
 * @returns LowesqrtPriceX64
 */
declare function getLowerSqrtPriceFromCoinB(amount: BN, liquidity: BN, sqrtPriceX64: BN): BN;
/**
 * Get upper sqrt price from coin B.
 *
 * @param amount - The amount of coins the user wanted to swap from.
 * @param liquidity - The liquidity of the pool.
 * @param sqrtPriceX64 - The sqrt price of the pool.
 * @returns LowesqrtPriceX64
 */
declare function getUpperSqrtPriceFromCoinB(amount: BN, liquidity: BN, sqrtPriceX64: BN): BN;

declare class TickMath {
    static priceToSqrtPriceX64(price: Decimal, decimalsA: number, decimalsB: number): BN;
    static sqrtPriceX64ToPrice(sqrtPriceX64: BN, decimalsA: number, decimalsB: number): Decimal;
    static tickIndexToSqrtPriceX64(tickIndex: number): BN;
    static sqrtPriceX64ToTickIndex(sqrtPriceX64: BN): number;
    static tickIndexToPrice(tickIndex: number, decimalsA: number, decimalsB: number): Decimal;
    static priceToTickIndex(price: Decimal, decimalsA: number, decimalsB: number): number;
    static priceToInitializableTickIndex(price: Decimal, decimalsA: number, decimalsB: number, tickSpacing: number): number;
    static getInitializableTickIndex(tickIndex: number, tickSpacing: number): number;
    /**
     *
     * @param tickIndex
     * @param tickSpacing
     * @returns
     */
    static getNextInitializableTickIndex(tickIndex: number, tickSpacing: number): number;
    static getPrevInitializableTickIndex(tickIndex: number, tickSpacing: number): number;
}
declare function getTickDataFromUrlData(ticks: any): any[];
declare function tickScore(tickIndex: number): Decimal;

declare const ZERO: BN;
declare const ONE: BN;
declare const TWO: BN;
declare const U128: BN;
declare const U64_MAX: BN;
declare const U128_MAX: BN;
/**
 * @category MathUtil
 */
declare class MathUtil {
    static toX64_BN(num: BN): BN;
    static toX64_Decimal(num: Decimal): Decimal;
    static toX64(num: Decimal): BN;
    static fromX64(num: BN): Decimal;
    static fromX64_Decimal(num: Decimal): Decimal;
    static fromX64_BN(num: BN): BN;
    static shiftRightRoundUp(n: BN): BN;
    static divRoundUp(n0: BN, n1: BN): BN;
    static subUnderflowU128(n0: BN, n1: BN): BN;
    static checkUnsignedSub(n0: BN, n1: BN): BN;
    static checkMul(n0: BN, n1: BN, limit: number): BN;
    static checkMulDivFloor(n0: BN, n1: BN, denom: BN, limit: number): BN;
    static checkMulDivCeil(n0: BN, n1: BN, denom: BN, limit: number): BN;
    static checkMulDivRound(n0: BN, n1: BN, denom: BN, limit: number): BN;
    static checkMulShiftRight(n0: BN, n1: BN, shift: number, limit: number): BN;
    static checkMulShiftRight64RoundUpIf(n0: BN, n1: BN, limit: number, roundUp: boolean): BN;
    static checkMulShiftLeft(n0: BN, n1: BN, shift: number, limit: number): BN;
    static checkDivRoundUpIf(n0: BN, n1: BN, roundUp: boolean): BN;
    static isOverflow(n: BN, bit: number): boolean;
    static sign(v: BN): number;
    static is_neg(v: BN): boolean;
    static abs_u128(v: BN): BN;
    static u128_neg(v: BN): BN;
    static neg(v: BN): BN;
    static abs(v: BN): BN;
    static neg_from(v: BN): BN;
}

declare enum SplitUnit {
    FIVE = 5,
    TEN = 10,
    TWENTY = 20,
    TWENTY_FIVE = 25,
    FIVETY = 50,
    HUNDRED = 100
}
declare function createSplitArray(minSplitUnit: SplitUnit): number[];
declare function createSplitAmountArray(amount: BN, minSplitUnit: SplitUnit): BN[];
type SplitSwapResult = {
    amountInArray: BN[];
    amountOutArray: BN[];
    feeAmountArray: BN[];
    nextSqrtPriceArray: BN[];
    isExceed: boolean[];
};
declare class SplitSwap {
    readonly minSplitUnit: number;
    amountArray: BN[];
    private byAmountIn;
    private a2b;
    private clmmpool;
    private ticks;
    private splitSwapResult;
    constructor(amount: BN, unit: SplitUnit, clmmpool: Pool, a2b: boolean, byAmountIn: boolean, tickData: TickData[]);
    createSplitSwapParams(amount: BN, unit: SplitUnit): void;
    computeSwap(): SplitSwapResult;
}

type FetchPosRewardParams = {
    poolAddress: string;
    positionId: string;
    coinTypeA: string;
    coinTypeB: string;
    rewarderInfo: Rewarder[];
};
type FetchPosFeeParams = {
    poolAddress: string;
    positionId: string;
    coinTypeA: string;
    coinTypeB: string;
};
type PosRewarderResult = {
    poolAddress: string;
    positionId: string;
    rewarderAmountOwed: RewarderAmountOwed[];
};
/**
 * Helper class to help interact with clmm position rewaeder with a rewaeder router interface.
 */
declare class RewarderModule implements IModule {
    protected _sdk: CetusClmmSDK;
    private growthGlobal;
    constructor(sdk: CetusClmmSDK);
    get sdk(): CetusClmmSDK;
    /**
     * Gets the emissions for the given pool every day.
     *
     * @param {string} poolID The object ID of the pool.
     * @returns {Promise<Array<{emissions: number, coinAddress: string}>>} A promise that resolves to an array of objects with the emissions and coin address for each rewarder.
     */
    emissionsEveryDay(poolID: string): Promise<{
        emissions: number;
        coin_address: string;
    }[] | null>;
    /**
     * Updates the rewarder for the given pool.
     *
     * @param {string} poolID The object ID of the pool.
     * @param {BN} currentTime The current time in seconds since the Unix epoch.
     * @returns {Promise<Pool>} A promise that resolves to the updated pool.
     */
    private updatePoolRewarder;
    /**
     * Gets the amount owed to the rewarders for the given position.
     *
     * @param {string} poolID The object ID of the pool.
     * @param {string} positionHandle The handle of the position.
     * @param {string} positionID The ID of the position.
     * @returns {Promise<Array<{amountOwed: number}>>} A promise that resolves to an array of objects with the amount owed to each rewarder.
     * @deprecated This method is deprecated and may be removed in future versions. Use `sdk.Rewarder.fetchPosRewardersAmount()` instead.
     */
    posRewardersAmount(poolID: string, positionHandle: string, positionID: string): Promise<RewarderAmountOwed[]>;
    /**
     * Gets the amount owed to the rewarders for the given account and pool.
     *
     * @param {string} accountAddress The account address.
     * @param {string} poolID The object ID of the pool.
     * @returns {Promise<Array<{amountOwed: number}>>} A promise that resolves to an array of objects with the amount owed to each rewarder.
     * @deprecated This method is deprecated and may be removed in future versions. Use `sdk.Rewarder.fetchPosRewardersAmount()` instead.
     */
    poolRewardersAmount(accountAddress: string, poolID: string): Promise<BN[]>;
    /**
     * Gets the amount owed to the rewarders for the given account and pool.
     * @param {Pool} pool Pool object
     * @param {PositionReward} position Position object
     * @param {TickData} tickLower Lower tick data
     * @param {TickData} tickUpper Upper tick data
     * @returns {RewarderAmountOwed[]}
     */
    private posRewardersAmountInternal;
    /**
     * Fetches the Position reward amount for a given list of addresses.
     * @param {string[]}positionIDs An array of position object ids.
     * @returns {Promise<Record<string, RewarderAmountOwed[]>>} A Promise that resolves with the fetched position reward amount for the specified position object ids.
     */
    batchFetchPositionRewarders(positionIDs: string[]): Promise<Record<string, RewarderAmountOwed[]>>;
    /**
     * Fetch the position rewards for a given pool.
     * @param {Pool}pool Pool object
     * @param {string}positionId Position object id
     * @returns {Promise<RewarderAmountOwed[]>} A Promise that resolves with the fetched position reward amount for the specified position object id.
     */
    fetchPositionRewarders(pool: Pool, positionId: string): Promise<RewarderAmountOwed[]>;
    /**
     * Fetches the Position fee amount for a given list of addresses.
     * @param positionIDs An array of position object ids.
     * @returns {Promise<Record<string, CollectFeesQuote>>} A Promise that resolves with the fetched position fee amount for the specified position object ids.
     * @deprecated This method is deprecated and may be removed in future versions. Use alternative methods if available.
     */
    batchFetchPositionFees(positionIDs: string[]): Promise<Record<string, CollectFeesQuote>>;
    /**
     * Fetches the Position fee amount for a given list of addresses.
     * @param params  An array of FetchPosFeeParams objects containing the target addresses and their corresponding amounts.
     * @returns
     */
    fetchPosFeeAmount(params: FetchPosFeeParams[]): Promise<CollectFeesQuote[]>;
    /**
     * Fetches the Position reward amount for a given list of addresses.
     * @param params  An array of FetchPosRewardParams objects containing the target addresses and their corresponding amounts.
     * @returns
     */
    fetchPosRewardersAmount(params: FetchPosRewardParams[]): Promise<PosRewarderResult[]>;
    /**
     * Fetches the pool reward amount for a given account and pool object id.
     * @param {string} account - The target account.
     * @param {string} poolObjectId - The target pool object id.
     * @returns {Promise<number|null>} - A Promise that resolves with the fetched pool reward amount for the specified account and pool, or null if the fetch is unsuccessful.
     */
    fetchPoolRewardersAmount(account: string, poolObjectId: string): Promise<BN[]>;
    private getPoolLowerAndUpperTicks;
    /**
     * Collect rewards from Position.
     * @param params
     * @param gasBudget
     * @returns
     */
    collectRewarderTransactionPayload(params: CollectRewarderParams): Promise<TransactionBlock>;
    createCollectRewarderPaylod(params: CollectRewarderParams, tx: TransactionBlock, primaryCoinInputs: TransactionArgument[]): TransactionBlock;
}

/**
 * Helper class to help interact with clmm position with a position router interface.
 */
declare class PositionModule implements IModule {
    protected _sdk: CetusClmmSDK;
    private readonly _cache;
    constructor(sdk: CetusClmmSDK);
    get sdk(): CetusClmmSDK;
    /**
     * Builds the full address of the Position type.
     * @returns The full address of the Position type.
     */
    buildPositionType(): string;
    /**
     * Gets a list of positions for the given account address.
     * @param accountAddress The account address to get positions for.
     * @param assignPoolIds An array of pool IDs to filter the positions by.
     * @returns array of Position objects.
     */
    getPositionList(accountAddress: string, assignPoolIds?: string[]): Promise<Position[]>;
    /**
     * Gets a position by its handle and ID. But it needs pool info, so it is not recommended to use this method.
     * if you want to get a position, you can use getPositionById method directly.
     * @param {string} positionHandle The handle of the position to get.
     * @param {string} positionID The ID of the position to get.
     * @param {boolean} calculateRewarder Whether to calculate the rewarder of the position.
     * @returns {Promise<Position>} Position object.
     */
    getPosition(positionHandle: string, positionID: string, calculateRewarder?: boolean): Promise<Position>;
    /**
     * Gets a position by its ID.
     * @param {string} positionID The ID of the position to get.
     * @param {boolean} calculateRewarder Whether to calculate the rewarder of the position.
     * @returns {Promise<Position>} Position object.
     */
    getPositionById(positionID: string, calculateRewarder?: boolean): Promise<Position>;
    /**
     * Gets a simple position for the given position ID.
     * @param {string} positionID The ID of the position to get.
     * @returns {Promise<Position>} Position object.
     */
    getSimplePosition(positionID: string): Promise<Position>;
    /**
     * Gets a simple position for the given position ID.
     * @param {string} positionID Position object id
     * @returns {Position | undefined} Position object
     */
    private getSimplePositionByCache;
    /**
     * Gets a list of simple positions for the given position IDs.
     * @param {SuiObjectIdType[]} positionIDs The IDs of the positions to get.
     * @returns {Promise<Position[]>} A promise that resolves to an array of Position objects.
     */
    getSipmlePositionList(positionIDs: SuiObjectIdType[]): Promise<Position[]>;
    /**
     * Updates the rewarders of position
     * @param {string} positionHandle Position handle
     * @param {Position} position Position object
     * @returns {Promise<Position>} A promise that resolves to an array of Position objects.
     */
    private updatePositionRewarders;
    /**
     * Gets the position rewarders for the given position handle and position object ID.
     * @param {string} positionHandle The handle of the position.
     * @param {string} positionID The ID of the position object.
     * @returns {Promise<PositionReward | undefined>} PositionReward object.
     */
    getPositionRewarders(positionHandle: string, positionID: string): Promise<PositionReward | undefined>;
    /**
     * Fetches the Position fee amount for a given list of addresses.
     * @param {FetchPosFeeParams[]} params  An array of FetchPosFeeParams objects containing the target addresses and their corresponding amounts.
     * @returns {Promise<CollectFeesQuote[]>} A Promise that resolves with the fetched position fee amount for the specified addresses.
     */
    fetchPosFeeAmount(params: FetchPosFeeParams[]): Promise<CollectFeesQuote[]>;
    /**
     * Fetches the Position fee amount for a given list of addresses.
     * @param positionIDs An array of position object ids.
     * @returns {Promise<Record<string, CollectFeesQuote>>} A Promise that resolves with the fetched position fee amount for the specified position object ids.
     */
    batchFetchPositionFees(positionIDs: string[]): Promise<Record<string, CollectFeesQuote>>;
    /**
     * create add liquidity transaction payload with fix token
     * @param {AddLiquidityFixTokenParams} params
     * @param gasEstimateArg : When the fix input amount is SUI, gasEstimateArg can control whether to recalculate the number of SUI to prevent insufficient gas.
     * If this parameter is not passed, gas estimation is not performed
     * @returns {Promise<TransactionBlock>}
     */
    createAddLiquidityFixTokenPayload(params: AddLiquidityFixTokenParams, gasEstimateArg?: {
        slippage: number;
        curSqrtPrice: BN;
    }): Promise<TransactionBlock>;
    /**
     * create add liquidity transaction payload
     * @param {AddLiquidityParams} params
     * @returns {Promise<TransactionBlock>}
     */
    createAddLiquidityPayload(params: AddLiquidityParams): Promise<TransactionBlock>;
    /**
     * Remove liquidity from a position.
     * @param {RemoveLiquidityParams} params
     * @returns {TransactionBlock}
     */
    removeLiquidityTransactionPayload(params: RemoveLiquidityParams): Promise<TransactionBlock>;
    /**
     * Close position and remove all liquidity and collect_reward
     * @param {ClosePositionParams} params
     * @returns {TransactionBlock}
     */
    closePositionTransactionPayload(params: ClosePositionParams): Promise<TransactionBlock>;
    /**
     * Open position in clmmpool.
     * @param {OpenPositionParams} params
     * @returns {TransactionBlock}
     */
    openPositionTransactionPayload(params: OpenPositionParams): TransactionBlock;
    /**
     * Collect LP fee from Position.
     * @param {CollectFeeParams} params
     * @param {TransactionBlock} tx
     * @returns {TransactionBlock}
     */
    collectFeeTransactionPayload(params: CollectFeeParams): Promise<TransactionBlock>;
    createCollectFeePaylod(params: CollectFeeParams, tx: TransactionBlock, primaryCoinAInput: TransactionArgument, primaryCoinBInput: TransactionArgument): TransactionBlock;
    /**
     * calculate fee
     * @param {CollectFeeParams} params
     * @returns
     */
    calculateFee(params: CollectFeeParams): Promise<{
        feeOwedA: any;
        feeOwedB: any;
    }>;
    /**
     * Updates the cache for the given key.
     * @param {string} key The key of the cache entry to update.
     * @param {SuiResource} data The data to store in the cache.
     * @param {cacheTime5min} time The time in minutes after which the cache entry should expire.
     */
    private updateCache;
    /**
     * Gets the cache entry for the given key.
     * @param {string} key The key of the cache entry to get.
     * @param {boolean} forceRefresh Whether to force a refresh of the cache entry.
     * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
     */
    private getCache;
}

interface CoinNode {
    address: string;
    decimals: number;
}
interface CoinProvider {
    coins: CoinNode[];
}
interface PathLink {
    base: string;
    quote: string;
    addressMap: Map<number, string>;
}
interface PathProvider {
    paths: PathLink[];
}
type OnePath = {
    amountIn: BN;
    amountOut: BN;
    poolAddress: string[];
    a2b: boolean[];
    rawAmountLimit: BN[];
    isExceed: boolean;
    coinType: string[];
};
type AddressAndDirection = {
    addressMap: Map<number, string>;
    direction: boolean;
};
type SwapWithRouterParams = {
    paths: OnePath[];
    partner: string;
    priceSlippagePoint: number;
};
type PreRouterSwapParams = {
    stepNums: number;
    poolAB: string;
    poolBC: string | undefined;
    a2b: boolean;
    b2c: boolean | undefined;
    byAmountIn: boolean;
    amount: BN;
    coinTypeA: SuiAddressType;
    coinTypeB: SuiAddressType;
    coinTypeC: SuiAddressType | undefined;
};
type PreSwapResult = {
    index: number;
    amountIn: BN;
    amountMedium: BN;
    amountOut: BN;
    targetSqrtPrice: BN[];
    currentSqrtPrice: BN[];
    isExceed: boolean;
    stepNum: number;
};
type PriceResult = {
    amountIn: BN;
    amountOut: BN;
    paths: OnePath[];
    a2b: boolean;
    b2c: boolean | undefined;
    byAmountIn: boolean;
    isExceed: boolean;
    targetSqrtPrice: BN[];
    currentSqrtPrice: BN[];
    coinTypeA: SuiAddressType;
    coinTypeB: SuiAddressType;
    coinTypeC: SuiAddressType | undefined;
    createTxParams: SwapWithRouterParams | undefined;
};
type PoolWithTvl = {
    poolAddress: String;
    tvl: number;
};
declare class RouterModule implements IModule {
    readonly graph: Graph;
    readonly pathProviders: PathProvider[];
    private coinProviders;
    private _coinAddressMap;
    private poolAddressMap;
    protected _sdk: CetusClmmSDK;
    constructor(sdk: CetusClmmSDK);
    get sdk(): CetusClmmSDK;
    /**
     * Get pool address map with direction
     * @param {string} base base coin
     * @param {string} quote quote coin
     * @returns {AddressAndDirection} address with direction
     */
    getPoolAddressMapAndDirection(base: string, quote: string): AddressAndDirection | undefined;
    /**
     * set coin list in coin address map
     */
    private setCoinList;
    /**
     * Find best router must load graph first
     * @param {CoinProvider} coins all coins
     * @param {PathProvider} paths all paths
     */
    loadGraph(coins: CoinProvider, paths: PathProvider): void;
    /**
     * Add path provider to router graph
     * @param {PathProvider} provider path provider
     * @returns {RouterModule} module of router
     */
    private addPathProvider;
    /**
     * Add coin provider to router graph
     * @param {CoinProvider} provider  coin provider
     * @returns {RouterModule} module of router
     */
    private addCoinProvider;
    /**
     * Get token info from coin address map
     * @param {string} key coin type
     * @returns {CoinNode | undefined}
     */
    tokenInfo(key: string): CoinNode | undefined;
    /**
     * Get fee rate info from pool address map
     * @param from from coin type
     * @param to to coin type
     * @param address pool address
     * @returns fee rate of pool
     */
    getFeeRate(from: string, to: string, address: string): number;
    /**
     * Get the best price from router graph.
     *
     * @param {string} from from coin type
     * @param {string} to to coin type
     * @param {BN} amount coin amount
     * @param {boolean} byAmountIn weather fixed inoput amount
     * @param {number} priceSlippagePoint price splippage point
     * @param {string} partner partner object id
     * @param {PreSwapWithMultiPoolParams} swapWithMultiPoolParams use to downgrade
     * @returns {Promise<PriceResult | undefined>} best swap router
     */
    price(from: string, to: string, amount: BN, byAmountIn: boolean, priceSlippagePoint: number, partner: string, swapWithMultiPoolParams?: PreSwapWithMultiPoolParams): Promise<PriceResult | undefined>;
    preRouterSwapA2B2C(params: PreRouterSwapParams[]): Promise<PreSwapResult | null>;
    getPoolWithTVL(): Promise<PoolWithTvl[]>;
}

type BasePath = {
    direction: boolean;
    label: string;
    poolAddress: string;
    fromCoin: string;
    toCoin: string;
    feeRate: number;
    outputAmount: number;
    inputAmount: number;
    currentSqrtPrice: BN;
    fromDecimal: number;
    toDecimal: number;
    currentPrice: Decimal;
};
type SplitPath = {
    percent: number;
    inputAmount: number;
    outputAmount: number;
    pathIndex: number;
    lastQuoteOutput: number;
    basePaths: BasePath[];
};
type AggregatorResult = {
    isExceed: boolean;
    isTimeout: boolean;
    inputAmount: number;
    outputAmount: number;
    fromCoin: string;
    toCoin: string;
    byAmountIn: boolean;
    splitPaths: SplitPath[];
};
declare class RouterModuleV2 implements IModule {
    protected _sdk: CetusClmmSDK;
    constructor(sdk: CetusClmmSDK);
    get sdk(): CetusClmmSDK;
    private calculatePrice;
    private parseJsonResult;
    private fetchWithTimeout;
    private fetchAndParseData;
    /**
     * Optimal routing method with fallback functionality.
     * This method first attempts to find the optimal route using the routing backend. If the optimal route is available, it will return this route.
     * If the optimal route is not available (for example, due to network issues or API errors), this method will activate a fallback mechanism,
     * and try to find a suboptimal route using the routing algorithm built into the SDK, which only includes clmm pool. This way, even if the optimal route is not available, this method can still provide a usable route.
     * This method uses a fallback strategy to ensure that it can provide the best available route when facing problems, rather than failing completely.
     *
     * @param {string} from Sold `from` coin
     * @param {string} from: get `to` coin
     * @param {number} from: the amount of sold coin
     * @param {boolena} byAmountIn:
     */
    getBestRouter(from: string, to: string, amount: number, byAmountIn: boolean, priceSplitPoint: number, partner: string, 
    /**
     * @deprecated don't need to pass, just use empty string.
     */
    _senderAddress?: string, swapWithMultiPoolParams?: PreSwapWithMultiPoolParams, orderSplit?: boolean, externalRouter?: boolean, lpChanges?: PreSwapLpChangeParams[]): Promise<{
        result: AggregatorResult;
        version: string;
    }>;
}

declare const AMM_SWAP_MODULE = "amm_swap";
declare const POOL_STRUCT = "Pool";
/**
 * Helper class to help interact with clmm pool swap with a swap router interface.
 */
declare class SwapModule implements IModule {
    protected _sdk: CetusClmmSDK;
    constructor(sdk: CetusClmmSDK);
    get sdk(): CetusClmmSDK;
    calculateSwapFee(paths: SplitPath[]): string;
    calculateSwapPriceImpact(paths: SplitPath[]): string;
    private calculateSingleImpact;
    /**
     * Performs a pre-swap with multiple pools.
     *
     * @param {PreSwapWithMultiPoolParams} params The parameters for the pre-swap.
     * @returns {Promise<SwapWithMultiPoolData>} A promise that resolves to the swap data.
     */
    preSwapWithMultiPool(params: PreSwapWithMultiPoolParams): Promise<{
        poolAddress: string;
        estimatedAmountIn: string;
        estimatedAmountOut: any;
        estimatedEndSqrtPrice: any;
        estimatedStartSqrtPrice: any;
        estimatedFeeAmount: any;
        isExceed: any;
        amount: string;
        aToB: boolean;
        byAmountIn: boolean;
    } | null>;
    /**
     * Performs a pre-swap.
     *
     * @param {PreSwapParams} params The parameters for the pre-swap.
     * @returns {Promise<PreSwapParams>} A promise that resolves to the swap data.
     */
    preswap(params: PreSwapParams): Promise<{
        poolAddress: string;
        currentSqrtPrice: number;
        estimatedAmountIn: string;
        estimatedAmountOut: any;
        estimatedEndSqrtPrice: any;
        estimatedFeeAmount: any;
        isExceed: any;
        amount: string;
        aToB: boolean;
        byAmountIn: boolean;
    } | null>;
    private transformSwapData;
    private transformSwapWithMultiPoolData;
    /**
     * Calculates the rates for a swap.
     * @param {CalculateRatesParams} params The parameters for the calculation.
     * @returns {CalculateRatesResult} The results of the calculation.
     */
    calculateRates(params: CalculateRatesParams): CalculateRatesResult;
    /**
     * create swap transaction payload
     * @param params
     * @param gasEstimateArg When the fix input amount is SUI, gasEstimateArg can control whether to recalculate the number of SUI to prevent insufficient gas.
     * If this parameter is not passed, gas estimation is not performed
     * @returns
     */
    createSwapTransactionPayload(params: SwapParams, gasEstimateArg?: {
        byAmountIn: boolean;
        slippage: Percentage;
        decimalsA: number;
        decimalsB: number;
        swapTicks: Array<TickData>;
        currentPool: Pool;
    }): Promise<TransactionBlock>;
    /**
   * create swap transaction without transfer coins payload
   * @param params
   * @param gasEstimateArg When the fix input amount is SUI, gasEstimateArg can control whether to recalculate the number of SUI to prevent insufficient gas.
   * If this parameter is not passed, gas estimation is not performed
   * @returns tx and coin ABs
   */
    createSwapTransactionWithoutTransferCoinsPayload(params: SwapParams, gasEstimateArg?: {
        byAmountIn: boolean;
        slippage: Percentage;
        decimalsA: number;
        decimalsB: number;
        swapTicks: Array<TickData>;
        currentPool: Pool;
    }): Promise<{
        tx: TransactionBlock;
        coinABs: TransactionObjectArgument[];
    }>;
}

/**
 * Helper class to help interact with pool and token config
 * @deprecated TokenModule is no longer maintained. Please use ConfigModule instead
 */
declare class TokenModule implements IModule {
    protected _sdk: CetusClmmSDK;
    private readonly _cache;
    constructor(sdk: CetusClmmSDK);
    get sdk(): CetusClmmSDK;
    /**
     * Get all registered token list.
     * @param forceRefresh
     * @returns
     */
    getAllRegisteredTokenList(forceRefresh?: boolean): Promise<TokenInfo[]>;
    /**
     * Get token list by owner address.
     * @param listOwnerAddr
     * @param forceRefresh
     * @returns
     */
    getOwnerTokenList(listOwnerAddr?: string, forceRefresh?: boolean): Promise<TokenInfo[]>;
    /**
     * Get all registered pool list
     * @param forceRefresh
     * @returns
     */
    getAllRegisteredPoolList(forceRefresh?: boolean): Promise<PoolInfo[]>;
    /**
     * Get pool list by owner address.
     * @param listOwnerAddr
     * @param forceRefresh
     * @returns
     */
    getOwnerPoolList(listOwnerAddr?: string, forceRefresh?: boolean): Promise<PoolInfo[]>;
    /**
     * Get warp pool list.
     * @param forceRefresh
     * @returns
     */
    getWarpPoolList(forceRefresh?: boolean): Promise<PoolInfo[]>;
    /**
     * Get warp pool list by pool owner address and coin owner address.
     * @param poolOwnerAddr
     * @param coinOwnerAddr
     * @param forceRefresh
     * @returns
     */
    getOwnerWarpPoolList(poolOwnerAddr?: string, coinOwnerAddr?: string, forceRefresh?: boolean): Promise<PoolInfo[]>;
    /**
     * Get token list by coin types.
     * @param coinTypes
     * @returns
     */
    getTokenListByCoinTypes(coinTypes: SuiAddressType[]): Promise<Record<string, TokenInfo>>;
    private factchTokenList;
    private factchPoolList;
    private factchWarpPoolList;
    /**
     * Get the token config event.
     *
     * @param forceRefresh Whether to force a refresh of the event.
     * @returns The token config event.
     */
    getTokenConfigEvent(forceRefresh?: boolean): Promise<TokenConfigEvent>;
    private transformData;
    /**
     * Updates the cache for the given key.
     *
     * @param key The key of the cache entry to update.
     * @param data The data to store in the cache.
     * @param time The time in minutes after which the cache entry should expire.
     */
    updateCache(key: string, data: SuiResource, time?: number): void;
    /**
     * Gets the cache entry for the given key.
     *
     * @param key The key of the cache entry to get.
     * @param forceRefresh Whether to force a refresh of the cache entry.
     * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
     */
    getCache<T>(key: string, forceRefresh?: boolean): T | undefined;
}

/**
 * Helper class to help interact with clmm pool and coin and launchpad pool config.
 */
declare class ConfigModule implements IModule {
    protected _sdk: CetusClmmSDK;
    private readonly _cache;
    constructor(sdk: CetusClmmSDK);
    get sdk(): CetusClmmSDK;
    /**
     * Set default token list cache.
     * @param {CoinConfig[]}coinList
     */
    setTokenListCache(coinList: CoinConfig[]): void;
    /**
     * Get token config list by coin type list.
     * @param {SuiAddressType[]} coinTypes Coin type list.
     * @returns {Promise<Record<string, CoinConfig>>} Token config map.
     */
    getTokenListByCoinTypes(coinTypes: SuiAddressType[]): Promise<Record<string, CoinConfig>>;
    /**
     * Get coin config list.
     * @param {boolean} forceRefresh Whether to force a refresh of the cache entry.
     * @param {boolean} transformExtensions Whether to transform extensions.
     * @returns {Promise<CoinConfig[]>} Coin config list.
     */
    getCoinConfigs(forceRefresh?: boolean, transformExtensions?: boolean): Promise<CoinConfig[]>;
    /**
     * Get coin config by coin type.
     * @param {string} coinType Coin type.
     * @param {boolean} forceRefresh Whether to force a refresh of the cache entry.
     * @param {boolean} transformExtensions Whether to transform extensions.
     * @returns {Promise<CoinConfig>} Coin config.
     */
    getCoinConfig(coinType: string, forceRefresh?: boolean, transformExtensions?: boolean): Promise<CoinConfig>;
    /**
     * Build coin config.
     * @param {SuiObjectResponse} object Coin object.
     * @param {boolean} transformExtensions Whether to transform extensions.
     * @returns {CoinConfig} Coin config.
     */
    private buildCoinConfig;
    /**
     * Get clmm pool config list.
     * @param forceRefresh
     * @returns
     */
    getClmmPoolConfigs(forceRefresh?: boolean, transformExtensions?: boolean): Promise<ClmmPoolConfig[]>;
    getClmmPoolConfig(poolAddress: string, forceRefresh?: boolean, transformExtensions?: boolean): Promise<ClmmPoolConfig>;
    private buildClmmPoolConfig;
    /**
     * Get launchpad pool config list.
     * @param forceRefresh
     * @returns
     */
    getLaunchpadPoolConfigs(forceRefresh?: boolean, transformExtensions?: boolean): Promise<LaunchpadPoolConfig[]>;
    getLaunchpadPoolConfig(poolAddress: string, forceRefresh?: boolean, transformExtensions?: boolean): Promise<LaunchpadPoolConfig>;
    private buildLaunchpadPoolConfig;
    private transformExtensions;
    /**
     * Get the token config event.
     *
     * @param forceRefresh Whether to force a refresh of the event.
     * @returns The token config event.
     */
    getCetusConfig(forceRefresh?: boolean): Promise<CetusConfigs>;
    private getCetusConfigHandle;
    /**
     * Updates the cache for the given key.
     * @param key The key of the cache entry to update.
     * @param data The data to store in the cache.
     * @param time The time in minutes after which the cache entry should expire.
     */
    updateCache(key: string, data: SuiResource, time?: number): void;
    /**
     * Gets the cache entry for the given key.
     * @param key The key of the cache entry to get.
     * @param forceRefresh Whether to force a refresh of the cache entry.
     * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
     */
    getCache<T>(key: string, forceRefresh?: boolean): T | undefined;
}

/**
 * Represents a module for making RPC (Remote Procedure Call) requests.
 */
declare class RpcModule extends SuiClient {
    /**
     * Get events for a given query criteria
     * @param query
     * @param paginationArgs
     * @returns
     */
    queryEventsByPage(query: SuiEventFilter, paginationArgs?: PaginationArgs): Promise<DataPage<any>>;
    /**
     * Get all objects owned by an address
     * @param owner
     * @param query
     * @param paginationArgs
     * @returns
     */
    getOwnedObjectsByPage(owner: string, query: SuiObjectResponseQuery, paginationArgs?: PaginationArgs): Promise<DataPage<any>>;
    /**
     * Return the list of dynamic field objects owned by an object
     * @param parentId
     * @param paginationArgs
     * @returns
     */
    getDynamicFieldsByPage(parentId: SuiObjectIdType, paginationArgs?: PaginationArgs): Promise<DataPage<any>>;
    /**
     * Batch get details about a list of objects. If any of the object ids are duplicates the call will fail
     * @param ids
     * @param options
     * @param limit
     * @returns
     */
    batchGetObjects(ids: SuiObjectIdType[], options?: SuiObjectDataOptions, limit?: number): Promise<SuiObjectResponse[]>;
    /**
     * Calculates the gas cost of a transaction block.
     * @param {TransactionBlock} tx - The transaction block to calculate gas for.
     * @returns {Promise<number>} - The estimated gas cost of the transaction block.
     * @throws {Error} - Throws an error if the sender is empty.
     */
    calculationTxGas(tx: TransactionBlock): Promise<number>;
    /**
     * Sends a transaction block after signing it with the provided keypair.
     *
     * @param {Ed25519Keypair | Secp256k1Keypair} keypair - The keypair used for signing the transaction.
     * @param {TransactionBlock} tx - The transaction block to send.
     * @returns {Promise<SuiTransactionBlockResponse | undefined>} - The response of the sent transaction block.
     */
    sendTransaction(keypair: Ed25519Keypair | Secp256k1Keypair, tx: TransactionBlock): Promise<SuiTransactionBlockResponse$1 | undefined>;
    /**
     * Send a simulation transaction.
     * @param tx - The transaction block.
     * @param simulationAccount - The simulation account.
     * @param useDevInspect - A flag indicating whether to use DevInspect. Defaults to true.
     * @returns A promise that resolves to DevInspectResults or undefined.
     */
    sendSimulationTransaction(tx: TransactionBlock, simulationAccount: string, useDevInspect?: boolean): Promise<DevInspectResults | undefined>;
}

/**
 * Represents options and configurations for an SDK.
 */
type SdkOptions = {
    /**
     * The full URL for interacting with the RPC (Remote Procedure Call) service.
     */
    fullRpcUrl: string;
    /**
     * Optional URL for the faucet service.
     */
    faucetURL?: string;
    /**
     * Configuration for the simulation account.
     */
    simulationAccount: {
        /**
         * The address of the simulation account.
         */
        address: string;
    };
    /**
     * Package containing faucet-related configurations.
     */
    faucet?: Package;
    /**
     * Package containing token-related configurations.
     */
    token?: Package<TokenConfig>;
    /**
     * Package containing Cetus protocol configurations.
     */
    cetus_config: Package<CetusConfigs>;
    /**
     * Package containing Cryptocurrency Liquidity Mining Module (CLMM) pool configurations.
     */
    clmm_pool: Package<ClmmConfig>;
    /**
     * Package containing integration-related configurations.
     */
    integrate: Package;
    /**
     * Package containing DeepBook-related configurations.
     */
    deepbook: Package;
    /**
     * Package containing DeepBook endpoint version 2 configurations.
     */
    deepbook_endpoint_v2: Package;
    /**
     * The URL for the aggregator service.
     */
    aggregatorUrl: string;
    /**
     * The URL for the swap count
     */
    swapCountUrl?: string;
};
/**
 * The entry class of CetusClmmSDK, which is almost responsible for all interactions with CLMM.
 */
declare class CetusClmmSDK {
    private readonly _cache;
    /**
     * RPC provider on the SUI chain
     */
    protected _rpcModule: RpcModule;
    /**
     * Provide interact with clmm pools with a pool router interface.
     */
    protected _pool: PoolModule;
    /**
     * Provide interact with clmm position with a position router interface.
     */
    protected _position: PositionModule;
    /**
     * Provide interact with a pool swap router interface.
     */
    protected _swap: SwapModule;
    /**
     * Provide interact  with a position rewarder interface.
     */
    protected _rewarder: RewarderModule;
    /**
     * Provide interact with a pool router interface.
     */
    protected _router: RouterModule;
    /**
     * Provide interact with a pool routerV2 interface.
     */
    protected _router_v2: RouterModuleV2;
    /**
     * Provide interact with pool and token config (contain token base info for metadat).
     * @deprecated Please use CetusConfig instead
     */
    protected _token: TokenModule;
    /**
     * Provide  interact with clmm pool and coin and launchpad pool config
     */
    protected _config: ConfigModule;
    /**
     *  Provide sdk options
     */
    protected _sdkOptions: SdkOptions;
    /**
     * After connecting the wallet, set the current wallet address to senderAddress.
     */
    protected _senderAddress: string;
    constructor(options: SdkOptions);
    /**
     * Getter for the sender address property.
     * @returns {SuiAddressType} The sender address.
     */
    get senderAddress(): SuiAddressType;
    /**
     * Setter for the sender address property.
     * @param {string} value - The new sender address value.
     */
    set senderAddress(value: string);
    /**
     * Getter for the Swap property.
     * @returns {SwapModule} The Swap property value.
     */
    get Swap(): SwapModule;
    /**
     * Getter for the fullClient property.
     * @returns {RpcModule} The fullClient property value.
     */
    get fullClient(): RpcModule;
    /**
     * Getter for the sdkOptions property.
     * @returns {SdkOptions} The sdkOptions property value.
     */
    get sdkOptions(): SdkOptions;
    /**
     * Getter for the Pool property.
     * @returns {PoolModule} The Pool property value.
     */
    get Pool(): PoolModule;
    /**
     * Getter for the Position property.
     * @returns {PositionModule} The Position property value.
     */
    get Position(): PositionModule;
    /**
     * Getter for the Rewarder property.
     * @returns {RewarderModule} The Rewarder property value.
     */
    get Rewarder(): RewarderModule;
    /**
     * Getter for the Router property.
     * @returns {RouterModule} The Router property value.
     */
    get Router(): RouterModule;
    /**
     * Getter for the RouterV2 property.
     * @returns {RouterModuleV2} The RouterV2 property value.
     */
    get RouterV2(): RouterModuleV2;
    /**
     * Getter for the CetusConfig property.
     * @returns {ConfigModule} The CetusConfig property value.
     */
    get CetusConfig(): ConfigModule;
    /**
     * @deprecated Token is no longer maintained. Please use CetusConfig instead
     */
    get Token(): TokenModule;
    /**
     * Gets all coin assets for the given owner and coin type.
     *
     * @param suiAddress The address of the owner.
     * @param coinType The type of the coin.
     * @returns an array of coin assets.
     */
    getOwnerCoinAssets(suiAddress: string, coinType?: string | null, forceRefresh?: boolean): Promise<CoinAsset[]>;
    /**
     * Gets all coin balances for the given owner and coin type.
     *
     * @param suiAddress The address of the owner.
     * @param coinType The type of the coin.
     * @returns an array of coin balances.
     */
    getOwnerCoinBalances(suiAddress: string, coinType?: string | null): Promise<CoinBalance[]>;
    /**
     * Updates the cache for the given key.
     *
     * @param key The key of the cache entry to update.
     * @param data The data to store in the cache.
     * @param time The time in minutes after which the cache entry should expire.
     */
    updateCache(key: string, data: SuiResource, time?: number): void;
    /**
     * Gets the cache entry for the given key.
     *
     * @param key The key of the cache entry to get.
     * @param forceRefresh Whether to force a refresh of the cache entry.
     * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
     */
    getCache<T>(key: string, forceRefresh?: boolean): T | undefined;
}

declare const cacheTime5min: number;
declare const cacheTime24h: number;
declare function getFutureTime(interval: number): number;
/**
 * Defines the structure of a CachedContent object, used for caching resources in memory.
 */
declare class CachedContent {
    overdueTime: number;
    value: SuiResource | null;
    constructor(value: SuiResource | null, overdueTime?: number);
    isValid(): boolean;
}

/**
 * Converts an amount to a decimal value, based on the number of decimals specified.
 * @param  {number | string} amount - The amount to convert to decimal.
 * @param  {number | string} decimals - The number of decimals to use in the conversion.
 * @returns {number} - Returns the converted amount as a number.
 */
declare function toDecimalsAmount(amount: number | string, decimals: number | string): number;
/**
 * Converts a bigint to an unsigned integer of the specified number of bits.
 * @param {bigint} int - The bigint to convert.
 * @param {number} bits - The number of bits to use in the conversion. Defaults to 32 bits.
 * @returns {string} - Returns the converted unsigned integer as a string.
 */
declare function asUintN(int: bigint, bits?: number): string;
/**
 * Converts a bigint to a signed integer of the specified number of bits.
 * @param {bigint} int - The bigint to convert.
 * @param {number} bits - The number of bits to use in the conversion. Defaults to 32 bits.
 * @returns {number} - Returns the converted signed integer as a number.
 */
declare function asIntN(int: bigint, bits?: number): number;
/**
 * Converts an amount in decimals to its corresponding numerical value.
 * @param {number|string} amount - The amount to convert.
 * @param {number|string} decimals - The number of decimal places used in the amount.
 * @returns {number} - Returns the converted numerical value.
 */
declare function fromDecimalsAmount(amount: number | string, decimals: number | string): number;
/**
 * Converts a secret key in string or Uint8Array format to an Ed25519 key pair.
 * @param {string|Uint8Array} secretKey - The secret key to convert.
 * @param {string} ecode - The encoding of the secret key ('hex' or 'base64'). Defaults to 'hex'.
 * @returns {Ed25519Keypair} - Returns the Ed25519 key pair.
 */
declare function secretKeyToEd25519Keypair(secretKey: string | Uint8Array, ecode?: 'hex' | 'base64'): Ed25519Keypair;
/**
 * Converts a secret key in string or Uint8Array format to a Secp256k1 key pair.
 * @param {string|Uint8Array} secretKey - The secret key to convert.
 * @param {string} ecode - The encoding of the secret key ('hex' or 'base64'). Defaults to 'hex'.
 * @returns {Ed25519Keypair} - Returns the Secp256k1 key pair.
 */
declare function secretKeyToSecp256k1Keypair(secretKey: string | Uint8Array, ecode?: 'hex' | 'base64'): Secp256k1Keypair;
/**
 * Builds a Pool object based on a SuiObjectResponse.
 * @param {SuiObjectResponse} objects - The SuiObjectResponse containing information about the pool.
 * @returns {Pool} - The built Pool object.
 */
declare function buildPool(objects: SuiObjectResponse): Pool;
/**
 * Builds an NFT object based on a response containing information about the NFT.
 * @param {any} objects - The response containing information about the NFT.
 * @returns {NFT} - The built NFT object.
 */
declare function buildNFT(objects: any): NFT;
/** Builds a Position object based on a SuiObjectResponse.
 * @param {SuiObjectResponse} objects - The SuiObjectResponse containing information about the position.
 * @returns {Position} - The built Position object.
 */
declare function buildPosition(objects: SuiObjectResponse): Position;
/**
 * Builds a PositionReward object based on a response containing information about the reward.
 * @param {any} fields - The response containing information about the reward.
 * @returns {PositionReward} - The built PositionReward object.
 */
declare function buildPositionReward(fields: any): PositionReward;
/**
 * Builds a TickData object based on a response containing information about tick data.
 * It must check if the response contains the required fields.
 * @param {SuiObjectResponse} objects - The response containing information about tick data.
 * @returns {TickData} - The built TickData object.
 */
declare function buildTickData(objects: SuiObjectResponse): TickData;
/**
 * Builds a TickData object based on a given event's fields.
 * @param {any} fields - The fields of an event.
 * @returns {TickData} - The built TickData object.
 * @throws {Error} If any required field is missing.
 */
declare function buildTickDataByEvent(fields: any): TickData;

declare function isSortedSymbols(symbolX: string, symbolY: string): boolean;
declare function composeType(address: string, generics: SuiAddressType[]): SuiAddressType;
declare function composeType(address: string, struct: string, generics?: SuiAddressType[]): SuiAddressType;
declare function composeType(address: string, module: string, struct: string, generics?: SuiAddressType[]): SuiAddressType;
declare function extractAddressFromType(type: string): string;
declare function extractStructTagFromType(type: string): SuiStructTag;
declare function normalizeCoinType(coinType: string): string;
declare function fixSuiObjectId(value: string): string;
/**
 * Fixes and normalizes a coin type by removing or keeping the prefix.
 *
 * @param {string} coinType - The coin type to be fixed.
 * @param {boolean} removePrefix - Whether to remove the prefix or not (default: true).
 * @returns {string} - The fixed and normalized coin type.
 */
declare const fixCoinType: (coinType: string, removePrefix?: boolean) => string;
/**
 * Recursively traverses the given data object and patches any string values that represent Sui object IDs.
 *
 * @param {any} data - The data object to be patched.
 */
declare function patchFixSuiObjectId(data: any): void;

declare function addHexPrefix(hex: string): string;
declare function removeHexPrefix(hex: string): string;
declare function shortString(str: string, start?: number, end?: number): string;
declare function shortAddress(address: string, start?: number, end?: number): string;
declare function checkAddress(address: any, options?: {
    leadingZero: boolean;
}): boolean;
/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
 * @param v the value
 */
declare function toBuffer(v: any): Buffer;
declare function bufferToHex(buffer: Buffer): string;
/**
 * '\x02\x00\x00\x00' to 2
 * @param binaryData
 */
declare function hexToNumber(binaryData: string): number;
declare function utf8to16(str: string): string;
declare function hexToString(str: string): string;

declare function d(value?: Decimal.Value): Decimal.Instance;
declare function decimalsMultiplier(decimals?: Decimal.Value): Decimal.Instance;

declare class TickUtil {
    /**
     * Get min tick index.
     * @param tick_spacing tick spacing
     * @retruns min tick index
     */
    static getMinIndex(tickSpacing: number): number;
    /**
     * Get max tick index.
     * @param tick_spacing - tick spacing
     * @retruns max tick index
     */
    static getMaxIndex(tickSpacing: number): number;
}
/**
 * Get nearest tick by current tick.
 *
 * @param tickIndex
 * @param tickSpacing
 * @returns
 */
declare function getNearestTickByTick(tickIndex: number, tickSpacing: number): number;
/**
 * Calculate reward amount in tick range.
 * @param {Pool}pool Pool object.
 * @param {TickData}tickLower Tick lower data.
 * @param {TickData}tickUpper Tick upper data.
 * @param {number}tickLowerIndex Tick lower index.
 * @param {number}tickUpperIndex Tick upper index.
 * @param {BN[]}growthGlobal
 * @returns
 */
declare function getRewardInTickRange(pool: Pool, tickLower: TickData, tickUpper: TickData, tickLowerIndex: number, tickUpperIndex: number, growthGlobal: BN[]): BN[];

type AdjustResult = {
    isAdjustCoinA: boolean;
    isAdjustCoinB: boolean;
};
/**
 * Adjust coinpair is sui
 * @param {CoinPairType} coinPair
 * @returns
 */
declare function findAdjustCoin(coinPair: CoinPairType): AdjustResult;
type BuildCoinResult = {
    targetCoin: TransactionObjectArgument;
    remainCoins: CoinAsset[];
    isMintZeroCoin: boolean;
    tragetCoinAmount: string;
    originalSplitedCoin?: TransactionObjectArgument;
};
type CoinInputInterval = {
    amountSecond: bigint;
    amountFirst: bigint;
};
declare function printTransaction(tx: TransactionBlock, isPrint?: boolean): Promise<void>;
declare class TransactionUtil {
    static createCollectRewarderAndFeeParams(sdk: CetusClmmSDK, tx: TransactionBlock, params: CollectRewarderParams, allCoinAsset: CoinAsset[], allCoinAssetA?: CoinAsset[], allCoinAssetB?: CoinAsset[]): TransactionBlock;
    /**
     * adjust transaction for gas
     * @param sdk
     * @param amount
     * @param tx
     * @returns
     */
    static adjustTransactionForGas(sdk: CetusClmmSDK, allCoins: CoinAsset[], amount: bigint, tx: TransactionBlock): Promise<{
        fixAmount: bigint;
        newTx?: TransactionBlock;
    }>;
    /**
     * build add liquidity transaction
     * @param params
     * @param slippage
     * @param curSqrtPrice
     * @returns
     */
    static buildAddLiquidityFixTokenForGas(sdk: CetusClmmSDK, allCoins: CoinAsset[], params: AddLiquidityFixTokenParams, gasEstimateArg: {
        slippage: number;
        curSqrtPrice: BN;
    }): Promise<TransactionBlock>;
    /**
     * build add liquidity transaction
     * @param params
     * @param packageId
     * @returns
     */
    static buildAddLiquidityFixToken(sdk: CetusClmmSDK, allCoinAsset: CoinAsset[], params: AddLiquidityFixTokenParams): Promise<TransactionBlock>;
    static buildAddLiquidityFixTokenCoinInput(tx: TransactionBlock, need_interval_amount: boolean, amount: number | string, slippage: number, coinType: string, allCoinAsset: CoinAsset[], buildVector?: boolean): BuildCoinResult;
    /**
     * fix add liquidity fix token for coin amount
     * @param params
     * @param slippage
     * @param curSqrtPrice
     * @returns
     */
    static fixAddLiquidityFixTokenParams(params: AddLiquidityFixTokenParams, slippage: number, curSqrtPrice: BN): AddLiquidityFixTokenParams;
    private static buildAddLiquidityFixTokenArgs;
    /**
     * build add liquidity transaction
     * @param params
     * @param slippage
     * @param curSqrtPrice
     * @returns
     */
    static buildSwapTransactionForGas(sdk: CetusClmmSDK, params: SwapParams, allCoinAsset: CoinAsset[], gasEstimateArg: {
        byAmountIn: boolean;
        slippage: Percentage;
        decimalsA: number;
        decimalsB: number;
        swapTicks: Array<TickData>;
        currentPool: Pool;
    }): Promise<TransactionBlock>;
    /**
     * build swap transaction
     * @param params
     * @param packageId
     * @returns
     */
    static buildSwapTransaction(sdk: CetusClmmSDK, params: SwapParams, allCoinAsset: CoinAsset[]): TransactionBlock;
    /**
     * build swap transaction
     * @param params
     * @param packageId
     * @returns
     */
    static buildSwapTransactionArgs(tx: TransactionBlock, params: SwapParams, sdkOptions: SdkOptions, primaryCoinInputA: BuildCoinResult, primaryCoinInputB: BuildCoinResult): TransactionBlock;
    /**
     * build add liquidity transaction with out transfer coins
     * @param params
     * @param slippage
     * @param curSqrtPrice
     * @returns
     */
    static buildSwapTransactionWithoutTransferCoinsForGas(sdk: CetusClmmSDK, params: SwapParams, allCoinAsset: CoinAsset[], gasEstimateArg: {
        byAmountIn: boolean;
        slippage: Percentage;
        decimalsA: number;
        decimalsB: number;
        swapTicks: Array<TickData>;
        currentPool: Pool;
    }): Promise<{
        tx: TransactionBlock;
        coinABs: TransactionObjectArgument[];
    }>;
    /**
     * build swap transaction and return swaped coin
     * @param params
     * @param packageId
     * @returns
     */
    static buildSwapTransactionWithoutTransferCoins(sdk: CetusClmmSDK, params: SwapParams, allCoinAsset: CoinAsset[]): {
        tx: TransactionBlock;
        coinABs: TransactionObjectArgument[];
    };
    /**
     * build swap transaction
     * @param params
     * @param packageId
     * @returns
     */
    static buildSwapTransactionWithoutTransferCoinArgs(sdk: CetusClmmSDK, tx: TransactionBlock, params: SwapParams, sdkOptions: SdkOptions, primaryCoinInputA: BuildCoinResult, primaryCoinInputB: BuildCoinResult): {
        tx: TransactionBlock;
        txRes: TransactionObjectArgument[];
    };
    static fixSwapParams(sdk: CetusClmmSDK, params: SwapParams, gasEstimateArg: {
        byAmountIn: boolean;
        slippage: Percentage;
        decimalsA: number;
        decimalsB: number;
        swapTicks: Array<TickData>;
        currentPool: Pool;
    }): Promise<SwapParams>;
    static syncBuildCoinInputForAmount(sdk: CetusClmmSDK, tx: TransactionBlock, amount: bigint, coinType: string, buildVector?: boolean): Promise<TransactionObjectArgument | undefined>;
    static buildCoinForAmount(tx: TransactionBlock, allCoins: CoinAsset[], amount: bigint, coinType: string, buildVector?: boolean, fixAmount?: boolean, checkAmountTotal = true): BuildCoinResult;
    private static buildCoin;
    private static buildZeroValueCoin;
    static buildCoinForAmountInterval(tx: TransactionBlock, allCoins: CoinAsset[], amounts: CoinInputInterval, coinType: string, buildVector?: boolean): BuildCoinResult;
    static callMintZeroValueCoin: (txb: TransactionBlock, coinType: string) => _mysten_sui_js_transactions.TransactionResult;
    static buildRouterSwapTransaction(sdk: CetusClmmSDK, params: SwapWithRouterParams, byAmountIn: boolean, allCoinAsset: CoinAsset[], recipient?: string): Promise<TransactionBlock>;
    static buildRouterBasePathTx(sdk: CetusClmmSDK, params: SwapWithRouterParams, byAmountIn: boolean, allCoinAsset: CoinAsset[], tx: TransactionBlock, recipient?: string): Promise<TransactionBlock>;
    static buildRouterBasePathReturnCoins(sdk: CetusClmmSDK, params: SwapWithRouterParams, byAmountIn: boolean, fromCoinBuildRes: BuildCoinResult, toCoinBuildRes: BuildCoinResult, tx: TransactionBlock): Promise<{
        fromCoin: TransactionObjectArgument;
        toCoin: TransactionObjectArgument;
        tx: TransactionBlock;
    }>;
    static buildAggregatorSwapReturnCoins(sdk: CetusClmmSDK, param: AggregatorResult, fromCoinBuildRes: BuildCoinResult, toCoinBuildRes: BuildCoinResult, partner: string, priceSplitPoint: number, tx: TransactionBlock, recipient?: string): Promise<{
        fromCoin: TransactionObjectArgument;
        toCoin: TransactionObjectArgument;
        tx: TransactionBlock;
    }>;
    static buildAggregatorSwapTransaction(sdk: CetusClmmSDK, param: AggregatorResult, allCoinAsset: CoinAsset[], partner: string, priceSlippagePoint: number, recipient?: string): Promise<TransactionBlock>;
    static checkCoinThreshold(sdk: CetusClmmSDK, byAmountIn: boolean, tx: TransactionBlock, coin: TransactionObjectArgument, amountLimit: number, coinType: string): void;
    static buildDeepbookBasePathTx(sdk: CetusClmmSDK, basePath: BasePath, tx: TransactionBlock, accountCap: any, from: TransactionObjectArgument, to: TransactionObjectArgument, middleStep: boolean): {
        from: TransactionObjectArgument;
        to: TransactionObjectArgument;
        tx: TransactionBlock;
    };
    private static buildClmmBasePathTx;
    static buildCoinTypePair(coinTypes: string[], partitionQuantities: number[]): string[][];
    static buildTransferCoinToSender(sdk: CetusClmmSDK, tx: TransactionBlock, coin: TransactionObjectArgument, coinType: string): void;
    static buildTransferCoin(sdk: CetusClmmSDK, tx: TransactionBlock, coin: TransactionObjectArgument, coinType: string, recipient?: string): void;
}

declare class TxBlock {
    txBlock: TransactionBlock;
    constructor();
    /**
     * Transfer sui to many recipoents.
     * @param {string[]}recipients The recipient addresses.
     * @param {number[]}amounts The amounts of sui coins to be transferred.
     * @returns this
     */
    transferSuiToMany(recipients: string[], amounts: number[]): this;
    /**
     * Transfer sui to one recipient.
     * @param {string}recipient recipient cannot be empty or invalid sui address.
     * @param {number}amount
     * @returns this
     */
    transferSui(recipient: string, amount: number): this;
    /**
     * Transfer coin to many recipients.
     * @param {string}recipient recipient cannot be empty or invalid sui address.
     * @param {number}amount amount cannot be empty or invalid sui address.
     * @param {string[]}coinObjectIds object ids of coins to be transferred.
     * @returns this
     * @deprecated use transferAndDestoryZeroCoin instead
     */
    transferCoin(recipient: string, amount: number, coinObjectIds: string[]): this;
    /**
     * Transfer objects to many recipients.
     * @param {SuiTxArg[]}objects The objects to be transferred.
     * @param {string}recipient The recipient address.
     * @returns
     */
    transferObjects(objects: SuiTxArg[], recipient: string): this;
    /**
     * @description Move call
     * @param {string}target `${string}::${string}::${string}`, e.g. `0x3::sui_system::request_add_stake`
     * @param {string[]}typeArguments the type arguments of the move call, such as `['0x2::sui::SUI']`
     * @param {any[]}args the arguments of the move call, such as `['0x1', '0x2']`
     * @returns {TransactionResult}
     */
    moveCall(target: string, typeArguments?: string[], args?: any[]): TransactionResult;
    /**
     * Create pure address arguments
     * @param {string}value
     * @returns
     */
    address(value: string): {
        index: number;
        kind: "Input";
        type?: "object" | undefined;
        value?: any;
    } | {
        type: "pure";
        index: number;
        kind: "Input";
        value?: any;
    };
    /**
     * Create pure arguments
     * @param {any}value
     * @returns
     */
    pure(value: any): {
        index: number;
        kind: "Input";
        type?: "object" | undefined;
        value?: any;
    } | {
        type: "pure";
        index: number;
        kind: "Input";
        value?: any;
    };
    /**
     * Create object arguments
     * @param {string}value
     * @returns
     */
    object(value: string): {
        index: number;
        kind: "Input";
        type?: "object" | undefined;
        value?: any;
    };
    /**
     * Create move vec arguments
     * @param {number}gasBudget
     * @returns
     */
    setGasBudget(gasBudget: number): void;
    /**
     * Since we know the elements in the array are the same type
     * If type is not provided, we will try to infer the type from the first element
     * By default,
     *
     * string starting with `0x` =====> object id
     * number, bigint ====> u64
     * boolean =====> bool
     *
     *
     * If type is provided, we will use the type to convert the array
     * @param args
     * @param type 'address' | 'bool' | 'u8' | 'u16' | 'u32' | 'u64' | 'u128' | 'u256' | 'object'
     */
    makeMoveVec(args: SuiTxArg[], type?: SuiInputTypes): TransactionResult;
    private convertArgs;
}
/**
 * Check if the address is a valid sui address.
 * @param {string}address
 * @returns
 */
declare function checkInvalidSuiAddress(address: string): boolean;

type Order = {
    quantity: number;
    price: number;
};
type DeepbookPool = {
    poolID: string;
    tickSize: number;
    lotSize: number;
    baseAsset: string;
    quoteAsset: string;
    takerFeeRate: number;
    makerRebateRate: number;
};
declare class DeepbookUtils {
    static createAccountCap(senderAddress: string, sdkOptions: SdkOptions, tx: TransactionBlock, isTransfer?: boolean): ({
        index: number;
        resultIndex: number;
        kind: "NestedResult";
    } | TransactionBlock)[];
    static deleteAccountCap(accountCap: string, sdkOptions: SdkOptions, tx: TransactionBlock): TransactionBlock;
    static deleteAccountCapByObject(accountCap: TransactionArgument, sdkOptions: SdkOptions, tx: TransactionBlock): TransactionBlock;
    static getAccountCap(sdk: CetusClmmSDK): Promise<string>;
    static getPools(sdk: CetusClmmSDK): Promise<DeepbookPool[]>;
    static getPoolAsks(sdk: CetusClmmSDK, poolAddress: string, baseCoin: string, quoteCoin: string): Promise<Order[]>;
    static getPoolBids(sdk: CetusClmmSDK, poolAddress: string, baseCoin: string, quoteCoin: string): Promise<Order[]>;
    static preSwap(sdk: CetusClmmSDK, pool: DeepbookPool, a2b: boolean, amountIn: number): Promise<{
        poolAddress: string;
        estimatedAmountIn: number;
        estimatedAmountOut: number;
        estimatedFeeAmount: BN;
        isExceed: boolean;
        amount: number;
        aToB: boolean;
        byAmountIn: boolean;
    }>;
    static simulateSwap(sdk: CetusClmmSDK, poolID: string, baseCoin: string, quoteCoin: string, a2b: boolean, amount: number): Promise<{
        poolAddress: any;
        estimatedAmountIn: any;
        estimatedAmountOut: any;
        aToB: any;
    } | null>;
}

declare function getSuiObjectData(resp: SuiObjectResponse): SuiObjectData | null | undefined;
declare function getObjectDeletedResponse(resp: SuiObjectResponse): SuiObjectRef | undefined;
declare function getObjectNotExistsResponse(resp: SuiObjectResponse): string | undefined;
declare function getObjectReference(resp: SuiObjectResponse | OwnedObjectRef): SuiObjectRef | undefined;
declare function getObjectId(data: SuiObjectResponse | SuiObjectRef | OwnedObjectRef): string;
declare function getObjectVersion(data: SuiObjectResponse | SuiObjectRef | SuiObjectData): string | number | undefined;
declare function isSuiObjectResponse(resp: SuiObjectResponse | SuiObjectData): resp is SuiObjectResponse;
declare function getMovePackageContent(data: SuiObjectResponse): any | undefined;
declare function getMoveObject(data: SuiObjectResponse | SuiObjectData): SuiMoveObject$1 | undefined;
declare function getMoveObjectType(resp: SuiObjectResponse): string | undefined;
/**
 * Deriving the object type from the object response
 * @returns 'package' if the object is a package, move object type(e.g., 0x2::coin::Coin<0x2::sui::SUI>)
 * if the object is a move object
 */
declare function getObjectType(resp: SuiObjectResponse | SuiObjectData): string | null | undefined;
declare function getObjectPreviousTransactionDigest(resp: SuiObjectResponse): string | null | undefined;
declare function getObjectOwner(resp: SuiObjectResponse): ObjectOwner | null | undefined;
declare function getObjectDisplay(resp: SuiObjectResponse): DisplayFieldsResponse;
/**
 * Get the fields of a sui object response or data. The dataType of the object must be moveObject.
 * @param {SuiObjectResponse | SuiObjectData}object The object to get the fields from.
 * @returns {any} The fields of the object.
 */
declare function getObjectFields(object: SuiObjectResponse | SuiObjectData): any;
interface SuiObjectDataWithContent extends SuiObjectData {
    content: SuiParsedData;
}
/**
 * Return hasPublicTransfer of a move object.
 * @param {SuiObjectResponse | SuiObjectData}data
 * @returns
 */
declare function hasPublicTransfer(data: SuiObjectResponse | SuiObjectData): boolean;

export { AMM_SWAP_MODULE, AddLiquidityCommonParams, AddLiquidityFixTokenParams, AddLiquidityParams, AddressAndDirection, AdjustResult, AggregatorResult, AmountSpecified, BasePath, BigNumber, Bits, BuildCoinResult, CLOCK_ADDRESS, CachedContent, CalculateRatesParams, CalculateRatesResult, CetusClmmSDK, CetusConfigs, ClmmConfig, ClmmExpectSwapModule, ClmmFetcherModule, ClmmIntegratePoolModule, ClmmIntegratePoolV2Module, ClmmIntegrateRouterModule, ClmmIntegrateRouterWithPartnerModule, ClmmIntegrateUtilsModule, ClmmPartnerModule, ClmmPoolConfig, ClmmPoolUtil, ClmmPositionStatus, ClmmpoolData, ClosePositionParams, CoinAmounts, CoinAsset, CoinAssist, CoinConfig, CoinInfoAddress, CoinNode, CoinPairType, CoinProvider, CoinStoreAddress, CollectFeeParams, CollectFeesQuote, CollectFeesQuoteParam, CollectRewarderParams, ConfigModule, CreatePartnerEvent, CreatePoolAddLiquidityParams, CreatePoolParams, DEFAULT_GAS_BUDGET_FOR_MERGE, DEFAULT_GAS_BUDGET_FOR_SPLIT, DEFAULT_GAS_BUDGET_FOR_STAKE, DEFAULT_GAS_BUDGET_FOR_TRANSFER, DEFAULT_GAS_BUDGET_FOR_TRANSFER_SUI, DEFAULT_NFT_TRANSFER_GAS_FEE, DataPage, DeepbookClobV2Moudle, DeepbookCustodianV2Moudle, DeepbookEndpointsV2Moudle, DeepbookPool, DeepbookUtils, FEE_RATE_DENOMINATOR, FaucetCoin, FetchParams, GAS_SYMBOL, GAS_TYPE_ARG, GAS_TYPE_ARG_LONG, LaunchpadPoolConfig, LiquidityInput, MAX_SQRT_PRICE, MAX_TICK_INDEX, MIN_SQRT_PRICE, MIN_TICK_INDEX, MathUtil, NFT, ONE, OnePath, OpenPositionParams, Order, POOL_STRUCT, Package, PageQuery, PaginationArgs, PathLink, PathProvider, Percentage, Pool, PoolImmutables, PoolInfo, PoolModule, Position, PositionModule, PositionReward, PositionStatus, PositionUtil, PreRouterSwapParams, PreSwapLpChangeParams, PreSwapParams, PreSwapResult, PreSwapWithMultiPoolParams, PriceResult, RemoveLiquidityParams, Rewarder, RewarderAmountOwed, RouterModule, RouterModuleV2, RpcModule, SUI_SYSTEM_STATE_OBJECT_ID, SdkOptions, SplitPath, SplitSwap, SplitSwapResult, SplitUnit, SuiAddressType, SuiBasicTypes, SuiInputTypes, SuiObjectDataWithContent, SuiObjectIdType, SuiResource, SuiStructTag, SuiTxArg, SwapDirection, SwapModule, SwapParams, SwapResult, SwapStepResult, SwapUtils, SwapWithRouterParams, TICK_ARRAY_SIZE, TWO, Tick, TickData, TickMath, TickUtil, TokenConfig, TokenConfigEvent, TokenInfo, TokenModule, TransPreSwapWithMultiPoolParams, TransactionUtil, TxBlock, U128, U128_MAX, U64_MAX, ZERO, addHexPrefix, adjustForCoinSlippage, adjustForSlippage, asIntN, asUintN, bufferToHex, buildNFT, buildPool, buildPosition, buildPositionReward, buildTickData, buildTickDataByEvent, cacheTime24h, cacheTime5min, checkAddress, checkInvalidSuiAddress, collectFeesQuote, composeType, computeSwap, computeSwapStep, createSplitAmountArray, createSplitArray, createTestTransferTxPayloadParams, d, decimalsMultiplier, CetusClmmSDK as default, estPoolAPR, estPosAPRResult, estPositionAPRWithDeltaMethod, estPositionAPRWithMultiMethod, estimateLiquidityForCoinA, estimateLiquidityForCoinB, extractAddressFromType, extractStructTagFromType, findAdjustCoin, fixCoinType, fixSuiObjectId, fromDecimalsAmount, getAmountFixedDelta, getAmountUnfixedDelta, getCoinAFromLiquidity, getCoinBFromLiquidity, getDefaultSuiInputType, getDeltaA, getDeltaB, getDeltaDownFromOutput, getDeltaUpFromInput, getFutureTime, getLiquidityFromCoinA, getLiquidityFromCoinB, getLowerSqrtPriceFromCoinA, getLowerSqrtPriceFromCoinB, getMoveObject, getMoveObjectType, getMovePackageContent, getNearestTickByTick, getNextSqrtPriceAUp, getNextSqrtPriceBDown, getNextSqrtPriceFromInput, getNextSqrtPriceFromOutput, getObjectDeletedResponse, getObjectDisplay, getObjectFields, getObjectId, getObjectNotExistsResponse, getObjectOwner, getObjectPreviousTransactionDigest, getObjectReference, getObjectType, getObjectVersion, getPackagerConfigs, getRewardInTickRange, getSuiObjectData, getTickDataFromUrlData, getUpperSqrtPriceFromCoinA, getUpperSqrtPriceFromCoinB, hasPublicTransfer, hexToNumber, hexToString, isSortedSymbols, isSuiObjectResponse, newBits, normalizeCoinType, patchFixSuiObjectId, printTransaction, removeHexPrefix, secretKeyToEd25519Keypair, secretKeyToSecp256k1Keypair, shortAddress, shortString, tickScore, toBuffer, toCoinAmount, toDecimalsAmount, transClmmpoolDataWithoutTicks, utf8to16 };
