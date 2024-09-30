"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AMM_SWAP_MODULE: () => AMM_SWAP_MODULE,
  AmountSpecified: () => AmountSpecified,
  CLOCK_ADDRESS: () => CLOCK_ADDRESS,
  CachedContent: () => CachedContent,
  CetusClmmSDK: () => CetusClmmSDK,
  ClmmExpectSwapModule: () => ClmmExpectSwapModule,
  ClmmFetcherModule: () => ClmmFetcherModule,
  ClmmIntegratePoolModule: () => ClmmIntegratePoolModule,
  ClmmIntegratePoolV2Module: () => ClmmIntegratePoolV2Module,
  ClmmIntegrateRouterModule: () => ClmmIntegrateRouterModule,
  ClmmIntegrateRouterWithPartnerModule: () => ClmmIntegrateRouterWithPartnerModule,
  ClmmIntegrateUtilsModule: () => ClmmIntegrateUtilsModule,
  ClmmPartnerModule: () => ClmmPartnerModule,
  ClmmPoolUtil: () => ClmmPoolUtil,
  ClmmPositionStatus: () => ClmmPositionStatus,
  CoinAssist: () => CoinAssist,
  CoinInfoAddress: () => CoinInfoAddress,
  CoinStoreAddress: () => CoinStoreAddress,
  ConfigModule: () => ConfigModule,
  DEFAULT_GAS_BUDGET_FOR_MERGE: () => DEFAULT_GAS_BUDGET_FOR_MERGE,
  DEFAULT_GAS_BUDGET_FOR_SPLIT: () => DEFAULT_GAS_BUDGET_FOR_SPLIT,
  DEFAULT_GAS_BUDGET_FOR_STAKE: () => DEFAULT_GAS_BUDGET_FOR_STAKE,
  DEFAULT_GAS_BUDGET_FOR_TRANSFER: () => DEFAULT_GAS_BUDGET_FOR_TRANSFER,
  DEFAULT_GAS_BUDGET_FOR_TRANSFER_SUI: () => DEFAULT_GAS_BUDGET_FOR_TRANSFER_SUI,
  DEFAULT_NFT_TRANSFER_GAS_FEE: () => DEFAULT_NFT_TRANSFER_GAS_FEE,
  DeepbookClobV2Moudle: () => DeepbookClobV2Moudle,
  DeepbookCustodianV2Moudle: () => DeepbookCustodianV2Moudle,
  DeepbookEndpointsV2Moudle: () => DeepbookEndpointsV2Moudle,
  DeepbookUtils: () => DeepbookUtils,
  FEE_RATE_DENOMINATOR: () => FEE_RATE_DENOMINATOR,
  GAS_SYMBOL: () => GAS_SYMBOL,
  GAS_TYPE_ARG: () => GAS_TYPE_ARG,
  GAS_TYPE_ARG_LONG: () => GAS_TYPE_ARG_LONG,
  MAX_SQRT_PRICE: () => MAX_SQRT_PRICE,
  MAX_TICK_INDEX: () => MAX_TICK_INDEX,
  MIN_SQRT_PRICE: () => MIN_SQRT_PRICE,
  MIN_TICK_INDEX: () => MIN_TICK_INDEX,
  MathUtil: () => MathUtil,
  ONE: () => ONE,
  POOL_STRUCT: () => POOL_STRUCT,
  Percentage: () => Percentage,
  PoolModule: () => PoolModule,
  PositionModule: () => PositionModule,
  PositionStatus: () => PositionStatus,
  PositionUtil: () => PositionUtil,
  RouterModule: () => RouterModule,
  RouterModuleV2: () => RouterModuleV2,
  RpcModule: () => RpcModule,
  SUI_SYSTEM_STATE_OBJECT_ID: () => SUI_SYSTEM_STATE_OBJECT_ID,
  SplitSwap: () => SplitSwap,
  SplitUnit: () => SplitUnit,
  SwapDirection: () => SwapDirection,
  SwapModule: () => SwapModule,
  SwapUtils: () => SwapUtils,
  TICK_ARRAY_SIZE: () => TICK_ARRAY_SIZE,
  TWO: () => TWO,
  TickMath: () => TickMath,
  TickUtil: () => TickUtil,
  TokenModule: () => TokenModule,
  TransactionUtil: () => TransactionUtil,
  TxBlock: () => TxBlock,
  U128: () => U128,
  U128_MAX: () => U128_MAX,
  U64_MAX: () => U64_MAX,
  ZERO: () => ZERO,
  addHexPrefix: () => addHexPrefix,
  adjustForCoinSlippage: () => adjustForCoinSlippage,
  adjustForSlippage: () => adjustForSlippage,
  asIntN: () => asIntN,
  asUintN: () => asUintN,
  bufferToHex: () => bufferToHex,
  buildNFT: () => buildNFT,
  buildPool: () => buildPool,
  buildPosition: () => buildPosition,
  buildPositionReward: () => buildPositionReward,
  buildTickData: () => buildTickData,
  buildTickDataByEvent: () => buildTickDataByEvent,
  cacheTime24h: () => cacheTime24h,
  cacheTime5min: () => cacheTime5min,
  checkAddress: () => checkAddress,
  checkInvalidSuiAddress: () => checkInvalidSuiAddress,
  collectFeesQuote: () => collectFeesQuote,
  composeType: () => composeType,
  computeSwap: () => computeSwap,
  computeSwapStep: () => computeSwapStep,
  createSplitAmountArray: () => createSplitAmountArray,
  createSplitArray: () => createSplitArray,
  d: () => d,
  decimalsMultiplier: () => decimalsMultiplier,
  default: () => src_default,
  estPoolAPR: () => estPoolAPR,
  estPositionAPRWithDeltaMethod: () => estPositionAPRWithDeltaMethod,
  estPositionAPRWithMultiMethod: () => estPositionAPRWithMultiMethod,
  estimateLiquidityForCoinA: () => estimateLiquidityForCoinA,
  estimateLiquidityForCoinB: () => estimateLiquidityForCoinB,
  extractAddressFromType: () => extractAddressFromType,
  extractStructTagFromType: () => extractStructTagFromType,
  findAdjustCoin: () => findAdjustCoin,
  fixCoinType: () => fixCoinType,
  fixSuiObjectId: () => fixSuiObjectId,
  fromDecimalsAmount: () => fromDecimalsAmount,
  getAmountFixedDelta: () => getAmountFixedDelta,
  getAmountUnfixedDelta: () => getAmountUnfixedDelta,
  getCoinAFromLiquidity: () => getCoinAFromLiquidity,
  getCoinBFromLiquidity: () => getCoinBFromLiquidity,
  getDefaultSuiInputType: () => getDefaultSuiInputType,
  getDeltaA: () => getDeltaA,
  getDeltaB: () => getDeltaB,
  getDeltaDownFromOutput: () => getDeltaDownFromOutput,
  getDeltaUpFromInput: () => getDeltaUpFromInput,
  getFutureTime: () => getFutureTime,
  getLiquidityFromCoinA: () => getLiquidityFromCoinA,
  getLiquidityFromCoinB: () => getLiquidityFromCoinB,
  getLowerSqrtPriceFromCoinA: () => getLowerSqrtPriceFromCoinA,
  getLowerSqrtPriceFromCoinB: () => getLowerSqrtPriceFromCoinB,
  getMoveObject: () => getMoveObject,
  getMoveObjectType: () => getMoveObjectType,
  getMovePackageContent: () => getMovePackageContent,
  getNearestTickByTick: () => getNearestTickByTick,
  getNextSqrtPriceAUp: () => getNextSqrtPriceAUp,
  getNextSqrtPriceBDown: () => getNextSqrtPriceBDown,
  getNextSqrtPriceFromInput: () => getNextSqrtPriceFromInput,
  getNextSqrtPriceFromOutput: () => getNextSqrtPriceFromOutput,
  getObjectDeletedResponse: () => getObjectDeletedResponse,
  getObjectDisplay: () => getObjectDisplay,
  getObjectFields: () => getObjectFields,
  getObjectId: () => getObjectId,
  getObjectNotExistsResponse: () => getObjectNotExistsResponse,
  getObjectOwner: () => getObjectOwner,
  getObjectPreviousTransactionDigest: () => getObjectPreviousTransactionDigest,
  getObjectReference: () => getObjectReference,
  getObjectType: () => getObjectType,
  getObjectVersion: () => getObjectVersion,
  getPackagerConfigs: () => getPackagerConfigs,
  getRewardInTickRange: () => getRewardInTickRange,
  getSuiObjectData: () => getSuiObjectData,
  getTickDataFromUrlData: () => getTickDataFromUrlData,
  getUpperSqrtPriceFromCoinA: () => getUpperSqrtPriceFromCoinA,
  getUpperSqrtPriceFromCoinB: () => getUpperSqrtPriceFromCoinB,
  hasPublicTransfer: () => hasPublicTransfer,
  hexToNumber: () => hexToNumber,
  hexToString: () => hexToString,
  isSortedSymbols: () => isSortedSymbols,
  isSuiObjectResponse: () => isSuiObjectResponse,
  newBits: () => newBits,
  normalizeCoinType: () => normalizeCoinType,
  patchFixSuiObjectId: () => patchFixSuiObjectId,
  printTransaction: () => printTransaction,
  removeHexPrefix: () => removeHexPrefix,
  secretKeyToEd25519Keypair: () => secretKeyToEd25519Keypair,
  secretKeyToSecp256k1Keypair: () => secretKeyToSecp256k1Keypair,
  shortAddress: () => shortAddress,
  shortString: () => shortString,
  tickScore: () => tickScore,
  toBuffer: () => toBuffer,
  toCoinAmount: () => toCoinAmount,
  toDecimalsAmount: () => toDecimalsAmount,
  transClmmpoolDataWithoutTicks: () => transClmmpoolDataWithoutTicks,
  utf8to16: () => utf8to16
});
module.exports = __toCommonJS(src_exports);

// src/modules/poolModule.ts
var import_utils14 = require("@mysten/sui.js/utils");
var import_transactions4 = require("@mysten/sui.js/transactions");

// src/utils/cachedContent.ts
var cacheTime5min = 5 * 60 * 1e3;
var cacheTime24h = 24 * 60 * 60 * 1e3;
function getFutureTime(interval) {
  return Date.parse((/* @__PURE__ */ new Date()).toString()) + interval;
}
var CachedContent = class {
  overdueTime;
  value;
  constructor(value, overdueTime = 0) {
    this.overdueTime = overdueTime;
    this.value = value;
  }
  isValid() {
    if (this.value === null) {
      return false;
    }
    if (this.overdueTime === 0) {
      return true;
    }
    if (Date.parse((/* @__PURE__ */ new Date()).toString()) > this.overdueTime) {
      return false;
    }
    return true;
  }
};

// src/utils/common.ts
var import_bn11 = __toESM(require("bn.js"));
var import_bcs = require("@mysten/bcs");
var import_ed25519 = require("@mysten/sui.js/keypairs/ed25519");
var import_secp256k1 = require("@mysten/sui.js/keypairs/secp256k1");

// src/types/clmmpool.ts
var import_bn2 = __toESM(require("bn.js"));

// src/math/utils.ts
var import_bn = __toESM(require("bn.js"));

// src/utils/decimal.ts
var import_decimal = __toESM(require("decimal.js"));
import_decimal.default.config({
  precision: 64,
  rounding: import_decimal.default.ROUND_DOWN,
  toExpNeg: -64,
  toExpPos: 64
});
var decimal_default = import_decimal.default;

// src/errors/errors.ts
var ClmmpoolsError = class extends Error {
  message;
  errorCode;
  constructor(message, errorCode) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
  }
  static isClmmpoolsErrorCode(e, code) {
    return e instanceof ClmmpoolsError && e.errorCode === code;
  }
};

// src/math/utils.ts
var ZERO = new import_bn.default(0);
var ONE = new import_bn.default(1);
var TWO = new import_bn.default(2);
var U128 = TWO.pow(new import_bn.default(128));
var U64_MAX = TWO.pow(new import_bn.default(64)).sub(ONE);
var U128_MAX = TWO.pow(new import_bn.default(128)).sub(ONE);
var MathUtil = class {
  static toX64_BN(num) {
    return num.mul(new import_bn.default(2).pow(new import_bn.default(64)));
  }
  static toX64_Decimal(num) {
    return num.mul(decimal_default.pow(2, 64));
  }
  static toX64(num) {
    return new import_bn.default(num.mul(decimal_default.pow(2, 64)).floor().toFixed());
  }
  static fromX64(num) {
    return new decimal_default(num.toString()).mul(decimal_default.pow(2, -64));
  }
  static fromX64_Decimal(num) {
    return num.mul(decimal_default.pow(2, -64));
  }
  static fromX64_BN(num) {
    return num.div(new import_bn.default(2).pow(new import_bn.default(64)));
  }
  static shiftRightRoundUp(n) {
    let result = n.shrn(64);
    if (n.mod(U64_MAX).gt(ZERO)) {
      result = result.add(ONE);
    }
    return result;
  }
  static divRoundUp(n0, n1) {
    const hasRemainder = !n0.mod(n1).eq(ZERO);
    if (hasRemainder) {
      return n0.div(n1).add(new import_bn.default(1));
    }
    return n0.div(n1);
  }
  static subUnderflowU128(n0, n1) {
    if (n0.lt(n1)) {
      return n0.sub(n1).add(U128_MAX);
    }
    return n0.sub(n1);
  }
  static checkUnsignedSub(n0, n1) {
    const n = n0.sub(n1);
    if (n.isNeg()) {
      throw new ClmmpoolsError("Unsigned integer sub overflow", "UnsignedIntegerOverflow" /* UnsignedIntegerOverflow */);
    }
    return n;
  }
  static checkMul(n0, n1, limit) {
    const n = n0.mul(n1);
    if (this.isOverflow(n, limit)) {
      throw new ClmmpoolsError("Multiplication overflow", "MultiplicationOverflow" /* MulOverflow */);
    }
    return n;
  }
  static checkMulDivFloor(n0, n1, denom, limit) {
    if (denom.eq(ZERO)) {
      throw new ClmmpoolsError("Devide by zero", "DivideByZero" /* DivideByZero */);
    }
    const n = n0.mul(n1).div(denom);
    if (this.isOverflow(n, limit)) {
      throw new ClmmpoolsError("Multiplication div overflow", "MulDivOverflow" /* MulDivOverflow */);
    }
    return n;
  }
  static checkMulDivCeil(n0, n1, denom, limit) {
    if (denom.eq(ZERO)) {
      throw new ClmmpoolsError("Devide by zero", "DivideByZero" /* DivideByZero */);
    }
    const n = n0.mul(n1).add(denom.sub(ONE)).div(denom);
    if (this.isOverflow(n, limit)) {
      throw new ClmmpoolsError("Multiplication div overflow", "MulDivOverflow" /* MulDivOverflow */);
    }
    return n;
  }
  static checkMulDivRound(n0, n1, denom, limit) {
    if (denom.eq(ZERO)) {
      throw new ClmmpoolsError("Devide by zero", "DivideByZero" /* DivideByZero */);
    }
    const n = n0.mul(n1.add(denom.shrn(1))).div(denom);
    if (this.isOverflow(n, limit)) {
      throw new ClmmpoolsError("Multiplication div overflow", "MulDivOverflow" /* MulDivOverflow */);
    }
    return n;
  }
  static checkMulShiftRight(n0, n1, shift, limit) {
    const n = n0.mul(n1).div(new import_bn.default(2).pow(new import_bn.default(shift)));
    if (this.isOverflow(n, limit)) {
      throw new ClmmpoolsError("Multiplication shift right overflow", "MulShiftRightOverflow" /* MulShiftRightOverflow */);
    }
    return n;
  }
  static checkMulShiftRight64RoundUpIf(n0, n1, limit, roundUp) {
    const p = n0.mul(n1);
    const shoudRoundUp = roundUp && p.and(U64_MAX).gt(ZERO);
    const result = shoudRoundUp ? p.shrn(64).add(ONE) : p.shrn(64);
    if (this.isOverflow(result, limit)) {
      throw new ClmmpoolsError("Multiplication shift right overflow", "MulShiftRightOverflow" /* MulShiftRightOverflow */);
    }
    return result;
  }
  static checkMulShiftLeft(n0, n1, shift, limit) {
    const n = n0.mul(n1).shln(shift);
    if (this.isOverflow(n, limit)) {
      throw new ClmmpoolsError("Multiplication shift left overflow", "MulShiftLeftOverflow" /* MulShiftLeftOverflow */);
    }
    return n;
  }
  static checkDivRoundUpIf(n0, n1, roundUp) {
    if (n1.eq(ZERO)) {
      throw new ClmmpoolsError("Devide by zero", "DivideByZero" /* DivideByZero */);
    }
    if (roundUp) {
      return this.divRoundUp(n0, n1);
    }
    return n0.div(n1);
  }
  static isOverflow(n, bit) {
    return n.gte(TWO.pow(new import_bn.default(bit)));
  }
  static sign(v) {
    const signBit = v.testn(127) ? 1 : 0;
    return signBit;
  }
  static is_neg(v) {
    return this.sign(v) === 1;
  }
  static abs_u128(v) {
    if (v.gt(ZERO)) {
      return v;
    }
    return this.u128_neg(v.subn(1));
  }
  static u128_neg(v) {
    return v.uxor(new import_bn.default("ffffffffffffffffffffffffffffffff", 16));
  }
  static neg(v) {
    if (this.is_neg(v)) {
      return v.abs();
    }
    return this.neg_from(v);
  }
  static abs(v) {
    if (this.sign(v) === 0) {
      return v;
    }
    return this.u128_neg(v.sub(new import_bn.default(1)));
  }
  static neg_from(v) {
    if (v.eq(ZERO)) {
      return v;
    }
    return this.u128_neg(v).add(new import_bn.default(1)).or(new import_bn.default(1).shln(127));
  }
};

// src/types/clmmpool.ts
function transClmmpoolDataWithoutTicks(pool) {
  const poolData = {
    coinA: pool.coinTypeA,
    // string
    coinB: pool.coinTypeB,
    // string
    currentSqrtPrice: new import_bn2.default(pool.current_sqrt_price),
    // BN
    currentTickIndex: pool.current_tick_index,
    // number
    feeGrowthGlobalA: new import_bn2.default(pool.fee_growth_global_a),
    // BN
    feeGrowthGlobalB: new import_bn2.default(pool.fee_growth_global_b),
    // BN
    feeProtocolCoinA: new import_bn2.default(pool.fee_protocol_coin_a),
    // BN
    feeProtocolCoinB: new import_bn2.default(pool.fee_protocol_coin_b),
    // BN
    feeRate: new import_bn2.default(pool.fee_rate),
    // number
    liquidity: new import_bn2.default(pool.liquidity),
    // BN
    tickIndexes: [],
    // number[]
    tickSpacing: Number(pool.tickSpacing),
    // number
    ticks: [],
    // Array<TickData>
    collection_name: ""
  };
  return poolData;
}
function newBits(index) {
  const index_BN = new import_bn2.default(index);
  if (index_BN.lt(ZERO)) {
    return {
      bits: index_BN.neg().xor(new import_bn2.default(2).pow(new import_bn2.default(64)).sub(new import_bn2.default(1))).add(new import_bn2.default(1)).toString()
    };
  }
  return {
    bits: index_BN.toString()
  };
}

// src/types/constants.ts
var import_bn3 = __toESM(require("bn.js"));
var MAX_TICK_INDEX = 443636;
var MIN_TICK_INDEX = -443636;
var MAX_SQRT_PRICE = "79226673515401279992447579055";
var TICK_ARRAY_SIZE = 64;
var MIN_SQRT_PRICE = "4295048016";
var FEE_RATE_DENOMINATOR = new import_bn3.default(1e6);

// src/types/sui.ts
var CLOCK_ADDRESS = "0x0000000000000000000000000000000000000000000000000000000000000006";
var ClmmPartnerModule = "partner";
var ClmmIntegratePoolModule = "pool_script";
var ClmmIntegratePoolV2Module = "pool_script_v2";
var ClmmIntegrateRouterModule = "router";
var ClmmIntegrateRouterWithPartnerModule = "router_with_partner";
var ClmmFetcherModule = "fetcher_script";
var ClmmExpectSwapModule = "expect_swap";
var ClmmIntegrateUtilsModule = "utils";
var CoinInfoAddress = "0x1::coin::CoinInfo";
var CoinStoreAddress = "0x1::coin::CoinStore";
var DeepbookCustodianV2Moudle = "custodian_v2";
var DeepbookClobV2Moudle = "clob_v2";
var DeepbookEndpointsV2Moudle = "endpoints_v2";
var getDefaultSuiInputType = (value) => {
  if (typeof value === "string" && value.startsWith("0x")) {
    return "object";
  }
  if (typeof value === "number" || typeof value === "bigint") {
    return "u64";
  }
  if (typeof value === "boolean") {
    return "bool";
  }
  throw new ClmmpoolsError(`Unknown type for value: ${value}`, "InvalidType" /* InvalidType */);
};

// src/types/clmm_type.ts
var ClmmPositionStatus = /* @__PURE__ */ ((ClmmPositionStatus2) => {
  ClmmPositionStatus2["Deleted"] = "Deleted";
  ClmmPositionStatus2["Exists"] = "Exists";
  ClmmPositionStatus2["NotExists"] = "NotExists";
  return ClmmPositionStatus2;
})(ClmmPositionStatus || {});
function getPackagerConfigs(packageObj) {
  if (packageObj.config === void 0) {
    throw new ClmmpoolsError(`package: ${packageObj.package_id}  not config in sdk SdkOptions`, "InvalidConfig" /* InvalidConfig */);
  }
  return packageObj.config;
}

// src/types/liquidity.ts
var SwapDirection = /* @__PURE__ */ ((SwapDirection2) => {
  SwapDirection2["A2B"] = "a2b";
  SwapDirection2["B2A"] = "b2a";
  return SwapDirection2;
})(SwapDirection || {});

// src/math/apr.ts
var import_bn5 = __toESM(require("bn.js"));
var import_decimal4 = __toESM(require("decimal.js"));

// src/math/tick.ts
var import_bn4 = __toESM(require("bn.js"));
var BIT_PRECISION = 14;
var LOG_B_2_X32 = "59543866431248";
var LOG_B_P_ERR_MARGIN_LOWER_X64 = "184467440737095516";
var LOG_B_P_ERR_MARGIN_UPPER_X64 = "15793534762490258745";
var TICK_BOUND = 443636;
function signedShiftLeft(n0, shiftBy, bitWidth) {
  const twosN0 = n0.toTwos(bitWidth).shln(shiftBy);
  twosN0.imaskn(bitWidth + 1);
  return twosN0.fromTwos(bitWidth);
}
function signedShiftRight(n0, shiftBy, bitWidth) {
  const twoN0 = n0.toTwos(bitWidth).shrn(shiftBy);
  twoN0.imaskn(bitWidth - shiftBy + 1);
  return twoN0.fromTwos(bitWidth - shiftBy);
}
function tickIndexToSqrtPricePositive(tick) {
  let ratio;
  if ((tick & 1) !== 0) {
    ratio = new import_bn4.default("79232123823359799118286999567");
  } else {
    ratio = new import_bn4.default("79228162514264337593543950336");
  }
  if ((tick & 2) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("79236085330515764027303304731")), 96, 256);
  }
  if ((tick & 4) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("79244008939048815603706035061")), 96, 256);
  }
  if ((tick & 8) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("79259858533276714757314932305")), 96, 256);
  }
  if ((tick & 16) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("79291567232598584799939703904")), 96, 256);
  }
  if ((tick & 32) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("79355022692464371645785046466")), 96, 256);
  }
  if ((tick & 64) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("79482085999252804386437311141")), 96, 256);
  }
  if ((tick & 128) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("79736823300114093921829183326")), 96, 256);
  }
  if ((tick & 256) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("80248749790819932309965073892")), 96, 256);
  }
  if ((tick & 512) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("81282483887344747381513967011")), 96, 256);
  }
  if ((tick & 1024) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("83390072131320151908154831281")), 96, 256);
  }
  if ((tick & 2048) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("87770609709833776024991924138")), 96, 256);
  }
  if ((tick & 4096) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("97234110755111693312479820773")), 96, 256);
  }
  if ((tick & 8192) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("119332217159966728226237229890")), 96, 256);
  }
  if ((tick & 16384) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("179736315981702064433883588727")), 96, 256);
  }
  if ((tick & 32768) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("407748233172238350107850275304")), 96, 256);
  }
  if ((tick & 65536) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("2098478828474011932436660412517")), 96, 256);
  }
  if ((tick & 131072) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("55581415166113811149459800483533")), 96, 256);
  }
  if ((tick & 262144) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("38992368544603139932233054999993551")), 96, 256);
  }
  return signedShiftRight(ratio, 32, 256);
}
function tickIndexToSqrtPriceNegative(tickIndex) {
  const tick = Math.abs(tickIndex);
  let ratio;
  if ((tick & 1) !== 0) {
    ratio = new import_bn4.default("18445821805675392311");
  } else {
    ratio = new import_bn4.default("18446744073709551616");
  }
  if ((tick & 2) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("18444899583751176498")), 64, 256);
  }
  if ((tick & 4) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("18443055278223354162")), 64, 256);
  }
  if ((tick & 8) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("18439367220385604838")), 64, 256);
  }
  if ((tick & 16) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("18431993317065449817")), 64, 256);
  }
  if ((tick & 32) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("18417254355718160513")), 64, 256);
  }
  if ((tick & 64) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("18387811781193591352")), 64, 256);
  }
  if ((tick & 128) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("18329067761203520168")), 64, 256);
  }
  if ((tick & 256) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("18212142134806087854")), 64, 256);
  }
  if ((tick & 512) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("17980523815641551639")), 64, 256);
  }
  if ((tick & 1024) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("17526086738831147013")), 64, 256);
  }
  if ((tick & 2048) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("16651378430235024244")), 64, 256);
  }
  if ((tick & 4096) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("15030750278693429944")), 64, 256);
  }
  if ((tick & 8192) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("12247334978882834399")), 64, 256);
  }
  if ((tick & 16384) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("8131365268884726200")), 64, 256);
  }
  if ((tick & 32768) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("3584323654723342297")), 64, 256);
  }
  if ((tick & 65536) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("696457651847595233")), 64, 256);
  }
  if ((tick & 131072) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("26294789957452057")), 64, 256);
  }
  if ((tick & 262144) !== 0) {
    ratio = signedShiftRight(ratio.mul(new import_bn4.default("37481735321082")), 64, 256);
  }
  return ratio;
}
var TickMath = class {
  static priceToSqrtPriceX64(price, decimalsA, decimalsB) {
    return MathUtil.toX64(price.mul(decimal_default.pow(10, decimalsB - decimalsA)).sqrt());
  }
  static sqrtPriceX64ToPrice(sqrtPriceX64, decimalsA, decimalsB) {
    return MathUtil.fromX64(sqrtPriceX64).pow(2).mul(decimal_default.pow(10, decimalsA - decimalsB));
  }
  static tickIndexToSqrtPriceX64(tickIndex) {
    if (tickIndex > 0) {
      return new import_bn4.default(tickIndexToSqrtPricePositive(tickIndex));
    }
    return new import_bn4.default(tickIndexToSqrtPriceNegative(tickIndex));
  }
  static sqrtPriceX64ToTickIndex(sqrtPriceX64) {
    if (sqrtPriceX64.gt(new import_bn4.default(MAX_SQRT_PRICE)) || sqrtPriceX64.lt(new import_bn4.default(MIN_SQRT_PRICE))) {
      throw new ClmmpoolsError("Provided sqrtPrice is not within the supported sqrtPrice range.", "InvalidSqrtPrice" /* InvalidSqrtPrice */);
    }
    const msb = sqrtPriceX64.bitLength() - 1;
    const adjustedMsb = new import_bn4.default(msb - 64);
    const log2pIntegerX32 = signedShiftLeft(adjustedMsb, 32, 128);
    let bit = new import_bn4.default("8000000000000000", "hex");
    let precision = 0;
    let log2pFractionX64 = new import_bn4.default(0);
    let r = msb >= 64 ? sqrtPriceX64.shrn(msb - 63) : sqrtPriceX64.shln(63 - msb);
    while (bit.gt(new import_bn4.default(0)) && precision < BIT_PRECISION) {
      r = r.mul(r);
      const rMoreThanTwo = r.shrn(127);
      r = r.shrn(63 + rMoreThanTwo.toNumber());
      log2pFractionX64 = log2pFractionX64.add(bit.mul(rMoreThanTwo));
      bit = bit.shrn(1);
      precision += 1;
    }
    const log2pFractionX32 = log2pFractionX64.shrn(32);
    const log2pX32 = log2pIntegerX32.add(log2pFractionX32);
    const logbpX64 = log2pX32.mul(new import_bn4.default(LOG_B_2_X32));
    const tickLow = signedShiftRight(logbpX64.sub(new import_bn4.default(LOG_B_P_ERR_MARGIN_LOWER_X64)), 64, 128).toNumber();
    const tickHigh = signedShiftRight(logbpX64.add(new import_bn4.default(LOG_B_P_ERR_MARGIN_UPPER_X64)), 64, 128).toNumber();
    if (tickLow === tickHigh) {
      return tickLow;
    }
    const derivedTickHighSqrtPriceX64 = TickMath.tickIndexToSqrtPriceX64(tickHigh);
    if (derivedTickHighSqrtPriceX64.lte(sqrtPriceX64)) {
      return tickHigh;
    }
    return tickLow;
  }
  static tickIndexToPrice(tickIndex, decimalsA, decimalsB) {
    return TickMath.sqrtPriceX64ToPrice(TickMath.tickIndexToSqrtPriceX64(tickIndex), decimalsA, decimalsB);
  }
  static priceToTickIndex(price, decimalsA, decimalsB) {
    return TickMath.sqrtPriceX64ToTickIndex(TickMath.priceToSqrtPriceX64(price, decimalsA, decimalsB));
  }
  static priceToInitializableTickIndex(price, decimalsA, decimalsB, tickSpacing) {
    return TickMath.getInitializableTickIndex(TickMath.priceToTickIndex(price, decimalsA, decimalsB), tickSpacing);
  }
  static getInitializableTickIndex(tickIndex, tickSpacing) {
    return tickIndex - tickIndex % tickSpacing;
  }
  /**
   *
   * @param tickIndex
   * @param tickSpacing
   * @returns
   */
  static getNextInitializableTickIndex(tickIndex, tickSpacing) {
    return TickMath.getInitializableTickIndex(tickIndex, tickSpacing) + tickSpacing;
  }
  static getPrevInitializableTickIndex(tickIndex, tickSpacing) {
    return TickMath.getInitializableTickIndex(tickIndex, tickSpacing) - tickSpacing;
  }
};
function getTickDataFromUrlData(ticks) {
  const tickdatas = [];
  for (const tick of ticks) {
    const td = {
      objectId: tick.objectId,
      index: Number(asIntN(BigInt(tick.index)).toString()),
      sqrtPrice: tick.sqrtPrice,
      liquidityNet: new import_bn4.default(BigInt.asIntN(128, BigInt(BigInt(tick.liquidityNet.toString()))).toString()),
      liquidityGross: tick.liquidityGross,
      feeGrowthOutsideA: tick.feeGrowthOutsideA,
      feeGrowthOutsideB: tick.feeGrowthOutsideB,
      rewardersGrowthOutside: [
        new import_bn4.default(tick.rewardersGrowthOutside[0]),
        new import_bn4.default(tick.rewardersGrowthOutside[1]),
        new import_bn4.default(tick.rewardersGrowthOutside[2])
      ]
    };
    tickdatas.push(td);
  }
  return tickdatas;
}
function tickScore(tickIndex) {
  return d(tickIndex).add(d(TICK_BOUND));
}

// src/math/apr.ts
var D365 = new import_bn5.default(365);
var H24 = new import_bn5.default(24);
var S3600 = new import_bn5.default(3600);
var B05 = new import_bn5.default(0.5);
function estPoolAPR(preBlockReward, rewardPrice, totalTradingFee, totalLiquidityValue) {
  const annualRate = D365.mul(H24).mul(S3600).mul(B05);
  const APR = annualRate.mul(preBlockReward.mul(rewardPrice).add(totalTradingFee).div(totalLiquidityValue));
  return APR;
}
function calculatePoolValidTVL(amountA, amountB, decimalsA, decimalsB, coinAPrice, coinBPrice) {
  const poolValidAmountA = new import_decimal4.default(amountA.toString()).div(new import_decimal4.default(10 ** decimalsA));
  const poolValidAmountB = new import_decimal4.default(amountB.toString()).div(new import_decimal4.default(10 ** decimalsB));
  const TVL = poolValidAmountA.mul(coinAPrice).add(poolValidAmountB.mul(coinBPrice));
  return TVL;
}
function estPositionAPRWithDeltaMethod(currentTickIndex, lowerTickIndex, upperTickIndex, currentSqrtPriceX64, poolLiquidity, decimalsA, decimalsB, decimalsRewarder0, decimalsRewarder1, decimalsRewarder2, feeRate, amountAStr, amountBStr, poolAmountA, poolAmountB, swapVolumeStr, poolRewarders0Str, poolRewarders1Str, poolRewarders2Str, coinAPriceStr, coinBPriceStr, rewarder0PriceStr, rewarder1PriceStr, rewarder2PriceStr) {
  const amountA = new import_decimal4.default(amountAStr);
  const amountB = new import_decimal4.default(amountBStr);
  const swapVolume = new import_decimal4.default(swapVolumeStr);
  const poolRewarders0 = new import_decimal4.default(poolRewarders0Str);
  const poolRewarders1 = new import_decimal4.default(poolRewarders1Str);
  const poolRewarders2 = new import_decimal4.default(poolRewarders2Str);
  const coinAPrice = new import_decimal4.default(coinAPriceStr);
  const coinBPrice = new import_decimal4.default(coinBPriceStr);
  const rewarder0Price = new import_decimal4.default(rewarder0PriceStr);
  const rewarder1Price = new import_decimal4.default(rewarder1PriceStr);
  const rewarder2Price = new import_decimal4.default(rewarder2PriceStr);
  const lowerSqrtPriceX64 = TickMath.tickIndexToSqrtPriceX64(lowerTickIndex);
  const upperSqrtPriceX64 = TickMath.tickIndexToSqrtPriceX64(upperTickIndex);
  const lowerSqrtPriceD = MathUtil.toX64_Decimal(MathUtil.fromX64(lowerSqrtPriceX64)).round();
  const upperSqrtPriceD = MathUtil.toX64_Decimal(MathUtil.fromX64(upperSqrtPriceX64)).round();
  const currentSqrtPriceD = MathUtil.toX64_Decimal(MathUtil.fromX64(currentSqrtPriceX64)).round();
  let deltaLiquidity;
  const liquidityAmount0 = amountA.mul(new import_decimal4.default(10 ** decimalsA)).mul(upperSqrtPriceD.mul(lowerSqrtPriceD)).div(upperSqrtPriceD.sub(lowerSqrtPriceD)).round();
  const liquidityAmount1 = amountB.mul(new import_decimal4.default(10 ** decimalsB)).div(upperSqrtPriceD.sub(lowerSqrtPriceD)).round();
  if (currentTickIndex < lowerTickIndex) {
    deltaLiquidity = liquidityAmount0;
  } else if (currentTickIndex > upperTickIndex) {
    deltaLiquidity = liquidityAmount1;
  } else {
    deltaLiquidity = import_decimal4.default.min(liquidityAmount0, liquidityAmount1);
  }
  const deltaY = deltaLiquidity.mul(currentSqrtPriceD.sub(lowerSqrtPriceD));
  const deltaX = deltaLiquidity.mul(upperSqrtPriceD.sub(currentSqrtPriceD)).div(currentSqrtPriceD.mul(upperSqrtPriceD));
  const posValidTVL = deltaX.div(new import_decimal4.default(10 ** decimalsA)).mul(coinAPrice).add(deltaY.div(new import_decimal4.default(10 ** decimalsB).mul(coinBPrice)));
  const poolValidTVL = calculatePoolValidTVL(poolAmountA, poolAmountB, decimalsA, decimalsB, coinAPrice, coinBPrice);
  const posValidRate = posValidTVL.div(poolValidTVL);
  const feeAPR = deltaLiquidity.eq(new import_decimal4.default(0)) ? new import_decimal4.default(0) : new import_decimal4.default(feeRate / 1e4).mul(swapVolume).mul(new import_decimal4.default(deltaLiquidity.toString()).div(new import_decimal4.default(poolLiquidity.toString()).add(new import_decimal4.default(deltaLiquidity.toString())))).div(posValidTVL);
  const aprCoe = posValidRate.eq(new import_decimal4.default(0)) ? new import_decimal4.default(0) : posValidRate.mul(new import_decimal4.default(36500 / 7)).div(posValidTVL);
  const posRewarder0APR = poolRewarders0.div(new import_decimal4.default(10 ** decimalsRewarder0)).mul(rewarder0Price).mul(aprCoe);
  const posRewarder1APR = poolRewarders1.div(new import_decimal4.default(10 ** decimalsRewarder1)).mul(rewarder1Price).mul(aprCoe);
  const posRewarder2APR = poolRewarders2.div(new import_decimal4.default(10 ** decimalsRewarder2)).mul(rewarder2Price).mul(aprCoe);
  return {
    feeAPR,
    posRewarder0APR,
    posRewarder1APR,
    posRewarder2APR
  };
}
function estPositionAPRWithMultiMethod(lowerUserPrice, upperUserPrice, lowerHistPrice, upperHistPrice) {
  const retroLower = Math.max(lowerUserPrice, lowerHistPrice);
  const retroUpper = Math.min(upperUserPrice, upperHistPrice);
  const retroRange = retroUpper - retroLower;
  const userRange = upperUserPrice - lowerUserPrice;
  const histRange = upperHistPrice - lowerHistPrice;
  const userRangeD = new import_decimal4.default(userRange.toString());
  const histRangeD = new import_decimal4.default(histRange.toString());
  const retroRangeD = new import_decimal4.default(retroRange.toString());
  let m = new import_decimal4.default("0");
  if (retroRange < 0) {
    m = new import_decimal4.default("0");
  } else if (userRange === retroRange) {
    m = histRangeD.div(retroRangeD);
  } else if (histRange === retroRange) {
    m = retroRangeD.div(userRangeD);
  } else {
    m = retroRangeD.mul(retroRangeD).div(histRangeD).div(userRangeD);
  }
  return m;
}

// src/math/clmm.ts
var import_bn7 = __toESM(require("bn.js"));

// src/math/swap.ts
var import_bn6 = __toESM(require("bn.js"));
var SwapUtils = class {
  /**
   * Get the default sqrt price limit for a swap.
   *
   * @param a2b - true if the swap is A to B, false if the swap is B to A.
   * @returns The default sqrt price limit for the swap.
   */
  static getDefaultSqrtPriceLimit(a2b) {
    return new import_bn6.default(a2b ? MIN_SQRT_PRICE : MAX_SQRT_PRICE);
  }
  /**
   * Get the default values for the otherAmountThreshold in a swap.
   *
   * @param amountSpecifiedIsInput - The direction of a swap
   * @returns The default values for the otherAmountThreshold parameter in a swap.
   */
  static getDefaultOtherAmountThreshold(amountSpecifiedIsInput) {
    return amountSpecifiedIsInput ? ZERO : U64_MAX;
  }
};
function getLowerSqrtPriceFromCoinA(amount, liquidity, sqrtPriceX64) {
  const numerator = liquidity.mul(sqrtPriceX64).shln(64);
  const denominator = liquidity.shln(64).add(amount.mul(sqrtPriceX64));
  return MathUtil.divRoundUp(numerator, denominator);
}
function getUpperSqrtPriceFromCoinA(amount, liquidity, sqrtPriceX64) {
  const numerator = liquidity.mul(sqrtPriceX64).shln(64);
  const denominator = liquidity.shln(64).sub(amount.mul(sqrtPriceX64));
  return MathUtil.divRoundUp(numerator, denominator);
}
function getLowerSqrtPriceFromCoinB(amount, liquidity, sqrtPriceX64) {
  return sqrtPriceX64.sub(MathUtil.divRoundUp(amount.shln(64), liquidity));
}
function getUpperSqrtPriceFromCoinB(amount, liquidity, sqrtPriceX64) {
  return sqrtPriceX64.add(amount.shln(64).div(liquidity));
}

// src/math/clmm.ts
function toCoinAmount(a, b) {
  return {
    coinA: new import_bn7.default(a.toString()),
    coinB: new import_bn7.default(b.toString())
  };
}
function getDeltaA(sqrtPrice0, sqrtPrice1, liquidity, roundUp) {
  const sqrtPriceDiff = sqrtPrice0.gt(sqrtPrice1) ? sqrtPrice0.sub(sqrtPrice1) : sqrtPrice1.sub(sqrtPrice0);
  const numberator = liquidity.mul(sqrtPriceDiff).shln(64);
  const denomminator = sqrtPrice0.mul(sqrtPrice1);
  const quotient = numberator.div(denomminator);
  const remainder = numberator.mod(denomminator);
  const result = roundUp && !remainder.eq(ZERO) ? quotient.add(new import_bn7.default(1)) : quotient;
  return result;
}
function getDeltaB(sqrtPrice0, sqrtPrice1, liquidity, roundUp) {
  const sqrtPriceDiff = sqrtPrice0.gt(sqrtPrice1) ? sqrtPrice0.sub(sqrtPrice1) : sqrtPrice1.sub(sqrtPrice0);
  if (liquidity.eq(ZERO) || sqrtPriceDiff.eq(ZERO)) {
    return ZERO;
  }
  const p = liquidity.mul(sqrtPriceDiff);
  const shoudRoundUp = roundUp && p.and(U64_MAX).gt(ZERO);
  const result = shoudRoundUp ? p.shrn(64).add(ONE) : p.shrn(64);
  if (MathUtil.isOverflow(result, 64)) {
    throw new ClmmpoolsError("Result large than u64 max", "IntegerDowncastOverflow" /* IntegerDowncastOverflow */);
  }
  return result;
}
function getNextSqrtPriceAUp(sqrtPrice, liquidity, amount, byAmountIn) {
  if (amount.eq(ZERO)) {
    return sqrtPrice;
  }
  const numberator = MathUtil.checkMulShiftLeft(sqrtPrice, liquidity, 64, 256);
  const liquidityShl64 = liquidity.shln(64);
  const product = MathUtil.checkMul(sqrtPrice, amount, 256);
  if (!byAmountIn && liquidityShl64.lte(product)) {
    throw new ClmmpoolsError("getNextSqrtPriceAUp - Unable to divide liquidityShl64 by product", "DivideByZero" /* DivideByZero */);
  }
  const nextSqrtPrice = byAmountIn ? MathUtil.checkDivRoundUpIf(numberator, liquidityShl64.add(product), true) : MathUtil.checkDivRoundUpIf(numberator, liquidityShl64.sub(product), true);
  if (nextSqrtPrice.lt(new import_bn7.default(MIN_SQRT_PRICE))) {
    throw new ClmmpoolsError("getNextSqrtPriceAUp - Next sqrt price less than min sqrt price", "CoinAmountMinSubceeded " /* CoinAmountMinSubceeded */);
  }
  if (nextSqrtPrice.gt(new import_bn7.default(MAX_SQRT_PRICE))) {
    throw new ClmmpoolsError("getNextSqrtPriceAUp - Next sqrt price greater than max sqrt price", "CoinAmountMaxExceeded" /* CoinAmountMaxExceeded */);
  }
  return nextSqrtPrice;
}
function getNextSqrtPriceBDown(sqrtPrice, liquidity, amount, byAmountIn) {
  const deltaSqrtPrice = MathUtil.checkDivRoundUpIf(amount.shln(64), liquidity, !byAmountIn);
  const nextSqrtPrice = byAmountIn ? sqrtPrice.add(deltaSqrtPrice) : sqrtPrice.sub(deltaSqrtPrice);
  if (nextSqrtPrice.lt(new import_bn7.default(MIN_SQRT_PRICE)) || nextSqrtPrice.gt(new import_bn7.default(MAX_SQRT_PRICE))) {
    throw new ClmmpoolsError("getNextSqrtPriceAUp - Next sqrt price out of bounds", "SqrtPriceOutOfBounds" /* SqrtPriceOutOfBounds */);
  }
  return nextSqrtPrice;
}
function getNextSqrtPriceFromInput(sqrtPrice, liquidity, amount, aToB) {
  return aToB ? getNextSqrtPriceAUp(sqrtPrice, liquidity, amount, true) : getNextSqrtPriceBDown(sqrtPrice, liquidity, amount, true);
}
function getNextSqrtPriceFromOutput(sqrtPrice, liquidity, amount, a2b) {
  return a2b ? getNextSqrtPriceBDown(sqrtPrice, liquidity, amount, false) : getNextSqrtPriceAUp(sqrtPrice, liquidity, amount, false);
}
function getDeltaUpFromInput(currentSqrtPrice, targetSqrtPrice, liquidity, a2b) {
  const sqrtPriceDiff = currentSqrtPrice.gt(targetSqrtPrice) ? currentSqrtPrice.sub(targetSqrtPrice) : targetSqrtPrice.sub(currentSqrtPrice);
  if (liquidity.lte(ZERO) || sqrtPriceDiff.eq(ZERO)) {
    return ZERO;
  }
  let result;
  if (a2b) {
    const numberator = new import_bn7.default(liquidity).mul(new import_bn7.default(sqrtPriceDiff)).shln(64);
    const denomminator = targetSqrtPrice.mul(currentSqrtPrice);
    const quotient = numberator.div(denomminator);
    const remainder = numberator.mod(denomminator);
    result = !remainder.eq(ZERO) ? quotient.add(ONE) : quotient;
  } else {
    const product = new import_bn7.default(liquidity).mul(new import_bn7.default(sqrtPriceDiff));
    const shoudRoundUp = product.and(U64_MAX).gt(ZERO);
    result = shoudRoundUp ? product.shrn(64).add(ONE) : product.shrn(64);
  }
  return result;
}
function getDeltaDownFromOutput(currentSqrtPrice, targetSqrtPrice, liquidity, a2b) {
  const sqrtPriceDiff = currentSqrtPrice.gt(targetSqrtPrice) ? currentSqrtPrice.sub(targetSqrtPrice) : targetSqrtPrice.sub(currentSqrtPrice);
  if (liquidity.lte(ZERO) || sqrtPriceDiff.eq(ZERO)) {
    return ZERO;
  }
  let result;
  if (a2b) {
    const product = liquidity.mul(sqrtPriceDiff);
    result = product.shrn(64);
  } else {
    const numberator = liquidity.mul(sqrtPriceDiff).shln(64);
    const denomminator = targetSqrtPrice.mul(currentSqrtPrice);
    result = numberator.div(denomminator);
  }
  return result;
}
function computeSwapStep(currentSqrtPrice, targetSqrtPrice, liquidity, amount, feeRate, byAmountIn) {
  if (liquidity === ZERO) {
    return {
      amountIn: ZERO,
      amountOut: ZERO,
      nextSqrtPrice: targetSqrtPrice,
      feeAmount: ZERO
    };
  }
  const a2b = currentSqrtPrice.gte(targetSqrtPrice);
  let amountIn;
  let amountOut;
  let nextSqrtPrice;
  let feeAmount;
  if (byAmountIn) {
    const amountRemain = MathUtil.checkMulDivFloor(
      amount,
      MathUtil.checkUnsignedSub(FEE_RATE_DENOMINATOR, feeRate),
      FEE_RATE_DENOMINATOR,
      64
    );
    const maxAmountIn = getDeltaUpFromInput(currentSqrtPrice, targetSqrtPrice, liquidity, a2b);
    if (maxAmountIn.gt(amountRemain)) {
      amountIn = amountRemain;
      feeAmount = MathUtil.checkUnsignedSub(amount, amountRemain);
      nextSqrtPrice = getNextSqrtPriceFromInput(currentSqrtPrice, liquidity, amountRemain, a2b);
    } else {
      amountIn = maxAmountIn;
      feeAmount = MathUtil.checkMulDivCeil(amountIn, feeRate, FEE_RATE_DENOMINATOR.sub(feeRate), 64);
      nextSqrtPrice = targetSqrtPrice;
    }
    amountOut = getDeltaDownFromOutput(currentSqrtPrice, nextSqrtPrice, liquidity, a2b);
  } else {
    const maxAmountOut = getDeltaDownFromOutput(currentSqrtPrice, targetSqrtPrice, liquidity, a2b);
    if (maxAmountOut.gt(amount)) {
      amountOut = amount;
      nextSqrtPrice = getNextSqrtPriceFromOutput(currentSqrtPrice, liquidity, amount, a2b);
    } else {
      amountOut = maxAmountOut;
      nextSqrtPrice = targetSqrtPrice;
    }
    amountIn = getDeltaUpFromInput(currentSqrtPrice, nextSqrtPrice, liquidity, a2b);
    feeAmount = MathUtil.checkMulDivCeil(amountIn, feeRate, FEE_RATE_DENOMINATOR.sub(feeRate), 64);
  }
  return {
    amountIn,
    amountOut,
    nextSqrtPrice,
    feeAmount
  };
}
function computeSwap(aToB, byAmountIn, amount, poolData, swapTicks) {
  let remainerAmount = amount;
  let currentLiquidity = poolData.liquidity;
  let { currentSqrtPrice } = poolData;
  const swapResult = {
    amountIn: ZERO,
    amountOut: ZERO,
    feeAmount: ZERO,
    refAmount: ZERO,
    nextSqrtPrice: ZERO,
    crossTickNum: 0
  };
  let targetSqrtPrice;
  let signedLiquidityChange;
  const sqrtPriceLimit = SwapUtils.getDefaultSqrtPriceLimit(aToB);
  for (const tick of swapTicks) {
    if (aToB && poolData.currentTickIndex < tick.index) {
      continue;
    }
    if (!aToB && poolData.currentTickIndex >= tick.index) {
      continue;
    }
    if (tick === null) {
      continue;
    }
    if (aToB && sqrtPriceLimit.gt(tick.sqrtPrice) || !aToB && sqrtPriceLimit.lt(tick.sqrtPrice)) {
      targetSqrtPrice = sqrtPriceLimit;
    } else {
      targetSqrtPrice = tick.sqrtPrice;
    }
    const stepResult = computeSwapStep(currentSqrtPrice, targetSqrtPrice, currentLiquidity, remainerAmount, poolData.feeRate, byAmountIn);
    if (!stepResult.amountIn.eq(ZERO)) {
      remainerAmount = byAmountIn ? remainerAmount.sub(stepResult.amountIn.add(stepResult.feeAmount)) : remainerAmount.sub(stepResult.amountOut);
    }
    swapResult.amountIn = swapResult.amountIn.add(stepResult.amountIn);
    swapResult.amountOut = swapResult.amountOut.add(stepResult.amountOut);
    swapResult.feeAmount = swapResult.feeAmount.add(stepResult.feeAmount);
    if (stepResult.nextSqrtPrice.eq(tick.sqrtPrice)) {
      signedLiquidityChange = tick.liquidityNet.mul(new import_bn7.default(-1));
      if (aToB) {
        if (MathUtil.is_neg(signedLiquidityChange)) {
          currentLiquidity = currentLiquidity.add(new import_bn7.default(asUintN(BigInt(signedLiquidityChange.toString()), 128)));
        } else {
          currentLiquidity = currentLiquidity.add(signedLiquidityChange);
        }
      } else if (MathUtil.is_neg(signedLiquidityChange)) {
        currentLiquidity = currentLiquidity.sub(new import_bn7.default(asUintN(BigInt(signedLiquidityChange.toString()), 128)));
      } else {
        currentLiquidity = currentLiquidity.sub(signedLiquidityChange);
      }
      currentSqrtPrice = tick.sqrtPrice;
    } else {
      currentSqrtPrice = stepResult.nextSqrtPrice;
    }
    swapResult.crossTickNum += 1;
    if (remainerAmount.eq(ZERO)) {
      break;
    }
  }
  swapResult.amountIn = swapResult.amountIn.add(swapResult.feeAmount);
  swapResult.nextSqrtPrice = currentSqrtPrice;
  return swapResult;
}
function estimateLiquidityForCoinA(sqrtPriceX, sqrtPriceY, coinAmount) {
  const lowerSqrtPriceX64 = import_bn7.default.min(sqrtPriceX, sqrtPriceY);
  const upperSqrtPriceX64 = import_bn7.default.max(sqrtPriceX, sqrtPriceY);
  const num = MathUtil.fromX64_BN(coinAmount.mul(upperSqrtPriceX64).mul(lowerSqrtPriceX64));
  const dem = upperSqrtPriceX64.sub(lowerSqrtPriceX64);
  return num.div(dem);
}
function estimateLiquidityForCoinB(sqrtPriceX, sqrtPriceY, coinAmount) {
  const lowerSqrtPriceX64 = import_bn7.default.min(sqrtPriceX, sqrtPriceY);
  const upperSqrtPriceX64 = import_bn7.default.max(sqrtPriceX, sqrtPriceY);
  const delta = upperSqrtPriceX64.sub(lowerSqrtPriceX64);
  return coinAmount.shln(64).div(delta);
}
var ClmmPoolUtil = class {
  /**
   * Update fee rate.
   * @param clmm - clmmpool data
   * @param feeAmount - fee Amount
   * @param refRate - ref rate
   * @param protocolFeeRate - protocol fee rate
   * @param iscoinA - is token A
   * @returns percentage
   */
  static updateFeeRate(clmm, feeAmount, refRate, protocolFeeRate, iscoinA) {
    const protocolFee = MathUtil.checkMulDivCeil(feeAmount, new import_bn7.default(protocolFeeRate), FEE_RATE_DENOMINATOR, 64);
    const refFee = refRate === 0 ? ZERO : MathUtil.checkMulDivFloor(feeAmount, new import_bn7.default(refRate), FEE_RATE_DENOMINATOR, 64);
    const poolFee = feeAmount.mul(protocolFee).mul(refFee);
    if (iscoinA) {
      clmm.feeProtocolCoinA = clmm.feeProtocolCoinA.add(protocolFee);
    } else {
      clmm.feeProtocolCoinB = clmm.feeProtocolCoinB.add(protocolFee);
    }
    if (poolFee.eq(ZERO) || clmm.liquidity.eq(ZERO)) {
      return { refFee, clmm };
    }
    const growthFee = poolFee.shln(64).div(clmm.liquidity);
    if (iscoinA) {
      clmm.feeGrowthGlobalA = clmm.feeGrowthGlobalA.add(growthFee);
    } else {
      clmm.feeGrowthGlobalB = clmm.feeGrowthGlobalB.add(growthFee);
    }
    return { refFee, clmm };
  }
  /**
   * Get token amount fron liquidity.
   * @param liquidity - liquidity
   * @param curSqrtPrice - Pool current sqrt price
   * @param lowerSqrtPrice - position lower sqrt price
   * @param upperSqrtPrice - position upper sqrt price
   * @param roundUp - is round up
   * @returns
   */
  static getCoinAmountFromLiquidity(liquidity, curSqrtPrice, lowerSqrtPrice, upperSqrtPrice, roundUp) {
    const liq = new decimal_default(liquidity.toString());
    const curSqrtPriceStr = new decimal_default(curSqrtPrice.toString());
    const lowerPriceStr = new decimal_default(lowerSqrtPrice.toString());
    const upperPriceStr = new decimal_default(upperSqrtPrice.toString());
    let coinA;
    let coinB;
    if (curSqrtPrice.lt(lowerSqrtPrice)) {
      coinA = MathUtil.toX64_Decimal(liq).mul(upperPriceStr.sub(lowerPriceStr)).div(lowerPriceStr.mul(upperPriceStr));
      coinB = new decimal_default(0);
    } else if (curSqrtPrice.lt(upperSqrtPrice)) {
      coinA = MathUtil.toX64_Decimal(liq).mul(upperPriceStr.sub(curSqrtPriceStr)).div(curSqrtPriceStr.mul(upperPriceStr));
      coinB = MathUtil.fromX64_Decimal(liq.mul(curSqrtPriceStr.sub(lowerPriceStr)));
    } else {
      coinA = new decimal_default(0);
      coinB = MathUtil.fromX64_Decimal(liq.mul(upperPriceStr.sub(lowerPriceStr)));
    }
    if (roundUp) {
      return {
        coinA: new import_bn7.default(coinA.ceil().toString()),
        coinB: new import_bn7.default(coinB.ceil().toString())
      };
    }
    return {
      coinA: new import_bn7.default(coinA.floor().toString()),
      coinB: new import_bn7.default(coinB.floor().toString())
    };
  }
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
  static estLiquidityAndcoinAmountFromOneAmounts(lowerTick, upperTick, coinAmount, iscoinA, roundUp, slippage, curSqrtPrice) {
    const currentTick = TickMath.sqrtPriceX64ToTickIndex(curSqrtPrice);
    const lowerSqrtPrice = TickMath.tickIndexToSqrtPriceX64(lowerTick);
    const upperSqrtPrice = TickMath.tickIndexToSqrtPriceX64(upperTick);
    let liquidity;
    if (currentTick < lowerTick) {
      if (!iscoinA) {
        throw new ClmmpoolsError("lower tick cannot calculate liquidity by coinB", "NotSupportedThisCoin" /* NotSupportedThisCoin */);
      }
      liquidity = estimateLiquidityForCoinA(lowerSqrtPrice, upperSqrtPrice, coinAmount);
    } else if (currentTick > upperTick) {
      if (iscoinA) {
        throw new ClmmpoolsError("upper tick cannot calculate liquidity by coinA", "NotSupportedThisCoin" /* NotSupportedThisCoin */);
      }
      liquidity = estimateLiquidityForCoinB(upperSqrtPrice, lowerSqrtPrice, coinAmount);
    } else if (iscoinA) {
      liquidity = estimateLiquidityForCoinA(curSqrtPrice, upperSqrtPrice, coinAmount);
    } else {
      liquidity = estimateLiquidityForCoinB(curSqrtPrice, lowerSqrtPrice, coinAmount);
    }
    const coinAmounts = ClmmPoolUtil.getCoinAmountFromLiquidity(liquidity, curSqrtPrice, lowerSqrtPrice, upperSqrtPrice, roundUp);
    const tokenLimitA = roundUp ? d(coinAmounts.coinA.toString()).mul(1 + slippage).toString() : d(coinAmounts.coinA.toString()).mul(1 - slippage).toString();
    const tokenLimitB = roundUp ? d(coinAmounts.coinB.toString()).mul(1 + slippage).toString() : d(coinAmounts.coinB.toString()).mul(1 - slippage).toString();
    return {
      coinAmountA: coinAmounts.coinA,
      coinAmountB: coinAmounts.coinB,
      tokenMaxA: roundUp ? new import_bn7.default(decimal_default.ceil(tokenLimitA).toString()) : new import_bn7.default(decimal_default.floor(tokenLimitA).toString()),
      tokenMaxB: roundUp ? new import_bn7.default(decimal_default.ceil(tokenLimitB).toString()) : new import_bn7.default(decimal_default.floor(tokenLimitB).toString()),
      liquidityAmount: liquidity,
      fix_amount_a: iscoinA
    };
  }
  /**
   * Estimate liquidity from token amounts
   * @param curSqrtPrice - current sqrt price.
   * @param lowerTick - lower tick
   * @param upperTick - upper tick
   * @param tokenAmount - token amount
   * @return
   */
  static estimateLiquidityFromcoinAmounts(curSqrtPrice, lowerTick, upperTick, tokenAmount) {
    if (lowerTick > upperTick) {
      throw new ClmmpoolsError("lower tick cannot be greater than lower tick", "InvalidTwoTickIndex" /* InvalidTwoTickIndex */);
    }
    const currTick = TickMath.sqrtPriceX64ToTickIndex(curSqrtPrice);
    const lowerSqrtPrice = TickMath.tickIndexToSqrtPriceX64(lowerTick);
    const upperSqrtPrice = TickMath.tickIndexToSqrtPriceX64(upperTick);
    if (currTick < lowerTick) {
      return estimateLiquidityForCoinA(lowerSqrtPrice, upperSqrtPrice, tokenAmount.coinA);
    }
    if (currTick >= upperTick) {
      return estimateLiquidityForCoinB(upperSqrtPrice, lowerSqrtPrice, tokenAmount.coinB);
    }
    const estimateLiquidityAmountA = estimateLiquidityForCoinA(curSqrtPrice, upperSqrtPrice, tokenAmount.coinA);
    const estimateLiquidityAmountB = estimateLiquidityForCoinB(curSqrtPrice, lowerSqrtPrice, tokenAmount.coinB);
    return import_bn7.default.min(estimateLiquidityAmountA, estimateLiquidityAmountB);
  }
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
  static estCoinAmountsFromTotalAmount(lowerTick, upperTick, curSqrtPrice, totalAmount, tokenPriceA, tokenPriceB) {
    const { ratioA, ratioB } = ClmmPoolUtil.calculateDepositRatioFixTokenA(lowerTick, upperTick, curSqrtPrice);
    const amountA = d(totalAmount).mul(ratioA).div(tokenPriceA);
    const amountB = d(totalAmount).mul(ratioB).div(tokenPriceB);
    return { amountA, amountB };
  }
  static calculateDepositRatioFixTokenA(lowerTick, upperTick, curSqrtPrice) {
    const coinAmountA = new import_bn7.default(1e8);
    const { coinAmountB } = ClmmPoolUtil.estLiquidityAndcoinAmountFromOneAmounts(
      lowerTick,
      upperTick,
      coinAmountA,
      true,
      true,
      0,
      curSqrtPrice
    );
    const currPrice = TickMath.sqrtPriceX64ToPrice(curSqrtPrice, 0, 0);
    const transformAmountB = d(coinAmountA.toString()).mul(currPrice);
    const totalAmount = transformAmountB.add(coinAmountB.toString());
    const ratioA = transformAmountB.div(totalAmount);
    const ratioB = d(coinAmountB.toString()).div(totalAmount);
    return { ratioA, ratioB };
  }
};

// src/utils/contracts.ts
var import_utils8 = require("@mysten/sui.js/utils");

// src/utils/hex.ts
var HEX_REGEXP = /^[-+]?[0-9A-Fa-f]+\.?[0-9A-Fa-f]*?$/;
function addHexPrefix(hex) {
  return !hex.startsWith("0x") ? `0x${hex}` : hex;
}
function removeHexPrefix(hex) {
  return hex.startsWith("0x") ? `${hex.slice(2)}` : hex;
}
function shortString(str, start = 4, end = 4) {
  const slen = Math.max(start, 1);
  const elen = Math.max(end, 1);
  return `${str.slice(0, slen + 2)} ... ${str.slice(-elen)}`;
}
function shortAddress(address, start = 4, end = 4) {
  return shortString(addHexPrefix(address), start, end);
}
function checkAddress(address, options = { leadingZero: true }) {
  if (typeof address !== "string") {
    return false;
  }
  let str = address;
  if (options.leadingZero) {
    if (!address.startsWith("0x")) {
      return false;
    }
    str = str.substring(2);
  }
  return HEX_REGEXP.test(str);
}
function toBuffer(v) {
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v)) {
      v = Buffer.from(v);
    } else if (typeof v === "string") {
      if (exports.isHexString(v)) {
        v = Buffer.from(exports.padToEven(exports.stripHexPrefix(v)), "hex");
      } else {
        v = Buffer.from(v);
      }
    } else if (typeof v === "number") {
      v = exports.intToBuffer(v);
    } else if (v === null || v === void 0) {
      v = Buffer.allocUnsafe(0);
    } else if (v.toArray) {
      v = Buffer.from(v.toArray());
    } else {
      throw new ClmmpoolsError(`Invalid type`, "InvalidType" /* InvalidType */);
    }
  }
  return v;
}
function bufferToHex(buffer) {
  return addHexPrefix(toBuffer(buffer).toString("hex"));
}
function hexToNumber(binaryData) {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  for (let i = 0; i < binaryData.length; i++) {
    view.setUint8(i, binaryData.charCodeAt(i));
  }
  const number = view.getUint32(0, true);
  return number;
}
function utf8to16(str) {
  let out;
  let i;
  let c;
  let char2;
  let char3;
  out = "";
  const len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        out += str.charAt(i - 1);
        break;
      case 12:
      case 13:
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode((c & 31) << 6 | char2 & 63);
        break;
      case 14:
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode((c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0);
        break;
    }
  }
  return out;
}
function hexToString(str) {
  let val = "";
  const newStr = removeHexPrefix(str);
  const len = newStr.length / 2;
  for (let i = 0; i < len; i++) {
    val += String.fromCharCode(parseInt(newStr.substr(i * 2, 2), 16));
  }
  return utf8to16(val);
}

// src/utils/contracts.ts
var EQUAL = 0;
var LESS_THAN = 1;
var GREATER_THAN = 2;
function cmp(a, b) {
  if (a === b) {
    return EQUAL;
  }
  if (a < b) {
    return LESS_THAN;
  }
  return GREATER_THAN;
}
function compare(symbolX, symbolY) {
  let i = 0;
  const len = symbolX.length <= symbolY.length ? symbolX.length : symbolY.length;
  const lenCmp = cmp(symbolX.length, symbolY.length);
  while (i < len) {
    const elemCmp = cmp(symbolX.charCodeAt(i), symbolY.charCodeAt(i));
    i += 1;
    if (elemCmp !== 0) {
      return elemCmp;
    }
  }
  return lenCmp;
}
function isSortedSymbols(symbolX, symbolY) {
  return compare(symbolX, symbolY) === LESS_THAN;
}
function composeType(address, ...args) {
  const generics = Array.isArray(args[args.length - 1]) ? args.pop() : [];
  const chains = [address, ...args].filter(Boolean);
  let result = chains.join("::");
  if (generics && generics.length) {
    result += `<${generics.join(", ")}>`;
  }
  return result;
}
function extractAddressFromType(type) {
  return type.split("::")[0];
}
function extractStructTagFromType(type) {
  try {
    let _type = type.replace(/\s/g, "");
    const genericsString = _type.match(/(<.+>)$/);
    const generics = genericsString?.[0]?.match(/(\w+::\w+::\w+)(?:<.*?>(?!>))?/g);
    if (generics) {
      _type = _type.slice(0, _type.indexOf("<"));
      const tag = extractStructTagFromType(_type);
      const structTag2 = {
        ...tag,
        type_arguments: generics.map((item) => extractStructTagFromType(item).source_address)
      };
      structTag2.type_arguments = structTag2.type_arguments.map((item) => {
        return CoinAssist.isSuiCoin(item) ? item : extractStructTagFromType(item).source_address;
      });
      structTag2.source_address = composeType(structTag2.full_address, structTag2.type_arguments);
      return structTag2;
    }
    const parts = _type.split("::");
    const isSuiCoin = _type === GAS_TYPE_ARG || _type === GAS_TYPE_ARG_LONG;
    const structTag = {
      full_address: _type,
      address: isSuiCoin ? "0x2" : (0, import_utils8.normalizeSuiObjectId)(parts[0]),
      module: parts[1],
      name: parts[2],
      type_arguments: [],
      source_address: ""
    };
    structTag.full_address = `${structTag.address}::${structTag.module}::${structTag.name}`;
    structTag.source_address = composeType(structTag.full_address, structTag.type_arguments);
    return structTag;
  } catch (error) {
    return {
      full_address: type,
      address: "",
      module: "",
      name: "",
      type_arguments: [],
      source_address: type
    };
  }
}
function normalizeCoinType(coinType) {
  return extractStructTagFromType(coinType).source_address;
}
function fixSuiObjectId(value) {
  if (value.toLowerCase().startsWith("0x")) {
    return (0, import_utils8.normalizeSuiObjectId)(value);
  }
  return value;
}
var fixCoinType = (coinType, removePrefix = true) => {
  const arr = coinType.split("::");
  const address = arr.shift();
  let normalizeAddress = (0, import_utils8.normalizeSuiObjectId)(address);
  if (removePrefix) {
    normalizeAddress = removeHexPrefix(normalizeAddress);
  }
  return `${normalizeAddress}::${arr.join("::")}`;
};
function patchFixSuiObjectId(data) {
  for (const key in data) {
    const type = typeof data[key];
    if (type === "object") {
      patchFixSuiObjectId(data[key]);
    } else if (type === "string") {
      const value = data[key];
      data[key] = fixSuiObjectId(value);
    }
  }
}

// src/math/CoinAssist.ts
var COIN_TYPE = "0x2::coin::Coin";
var COIN_TYPE_ARG_REGEX = /^0x2::coin::Coin<(.+)>$/;
var DEFAULT_GAS_BUDGET_FOR_SPLIT = 1e3;
var DEFAULT_GAS_BUDGET_FOR_MERGE = 500;
var DEFAULT_GAS_BUDGET_FOR_TRANSFER = 100;
var DEFAULT_GAS_BUDGET_FOR_TRANSFER_SUI = 100;
var DEFAULT_GAS_BUDGET_FOR_STAKE = 1e3;
var GAS_TYPE_ARG = "0x2::sui::SUI";
var GAS_TYPE_ARG_LONG = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
var GAS_SYMBOL = "SUI";
var DEFAULT_NFT_TRANSFER_GAS_FEE = 450;
var SUI_SYSTEM_STATE_OBJECT_ID = "0x0000000000000000000000000000000000000005";
var CoinAssist = class {
  /**
   * Get the coin type argument from a SuiMoveObject.
   *
   * @param obj The SuiMoveObject to get the coin type argument from.
   * @returns The coin type argument, or null if it is not found.
   */
  static getCoinTypeArg(obj) {
    const res = obj.type.match(COIN_TYPE_ARG_REGEX);
    return res ? res[1] : null;
  }
  /**
   * Get whether a SuiMoveObject is a SUI coin.
   *
   * @param obj The SuiMoveObject to check.
   * @returns Whether the SuiMoveObject is a SUI coin.
   */
  static isSUI(obj) {
    const arg = CoinAssist.getCoinTypeArg(obj);
    return arg ? CoinAssist.getCoinSymbol(arg) === "SUI" : false;
  }
  /**
   * Get the coin symbol from a coin type argument.
   *
   * @param coinTypeArg The coin type argument to get the symbol from.
   * @returns The coin symbol.
   */
  static getCoinSymbol(coinTypeArg) {
    return coinTypeArg.substring(coinTypeArg.lastIndexOf(":") + 1);
  }
  /**
   * Get the balance of a SuiMoveObject.
   *
   * @param obj The SuiMoveObject to get the balance from.
   * @returns The balance of the SuiMoveObject.
   */
  static getBalance(obj) {
    return BigInt(obj.fields.balance);
  }
  /**
   * Get the total balance of a list of CoinAsset objects for a given coin address.
   *
   * @param objs The list of CoinAsset objects to get the total balance for.
   * @param coinAddress The coin address to get the total balance for.
   * @returns The total balance of the CoinAsset objects for the given coin address.
   */
  static totalBalance(objs, coinAddress) {
    let balanceTotal = BigInt(0);
    objs.forEach((obj) => {
      if (coinAddress === obj.coinAddress) {
        balanceTotal += BigInt(obj.balance);
      }
    });
    return balanceTotal;
  }
  /**
   * Get the ID of a SuiMoveObject.
   *
   * @param obj The SuiMoveObject to get the ID from.
   * @returns The ID of the SuiMoveObject.
   */
  static getID(obj) {
    return obj.fields.id.id;
  }
  /**
   * Get the coin type from a coin type argument.
   *
   * @param coinTypeArg The coin type argument to get the coin type from.
   * @returns The coin type.
   */
  static getCoinTypeFromArg(coinTypeArg) {
    return `${COIN_TYPE}<${coinTypeArg}>`;
  }
  /**
   * Get the FaucetCoin objects from a SuiTransactionBlockResponse.
   *
   * @param suiTransactionResponse The SuiTransactionBlockResponse to get the FaucetCoin objects from.
   * @returns The FaucetCoin objects.
   */
  static getFaucetCoins(suiTransactionResponse) {
    const { events } = suiTransactionResponse;
    const faucetCoin = [];
    events?.forEach((item) => {
      const { type } = item;
      if (extractStructTagFromType(type).name === "InitEvent") {
        const fields = item.parsedJson;
        faucetCoin.push({
          transactionModule: item.transactionModule,
          suplyID: fields.suplyID,
          decimals: fields.decimals
        });
      }
    });
    return faucetCoin;
  }
  /**
   * Get the CoinAsset objects for a given coin type.
   *
   * @param coinType The coin type to get the CoinAsset objects for.
   * @param allSuiObjects The list of all SuiMoveObjects.
   * @returns The CoinAsset objects for the given coin type.
   */
  static getCoinAssets(coinType, allSuiObjects) {
    const coins = [];
    allSuiObjects.forEach((anObj) => {
      if (normalizeCoinType(anObj.coinAddress) === normalizeCoinType(coinType)) {
        coins.push(anObj);
      }
    });
    return coins;
  }
  /**
   * Get whether a coin address is a SUI coin.
   *
   * @param coinAddress The coin address to check.
   * @returns Whether the coin address is a SUI coin.
   */
  static isSuiCoin(coinAddress) {
    return extractStructTagFromType(coinAddress).full_address === GAS_TYPE_ARG;
  }
  /**
   * Select the CoinAsset objects from a list of CoinAsset objects that have a balance greater than or equal to a given amount.
   *
   * @param coins The list of CoinAsset objects to select from.
   * @param amount The amount to select CoinAsset objects with a balance greater than or equal to.
   * @param exclude A list of CoinAsset objects to exclude from the selection.
   * @returns The CoinAsset objects that have a balance greater than or equal to the given amount.
   */
  static selectCoinObjectIdGreaterThanOrEqual(coins, amount, exclude = []) {
    const selectedResult = CoinAssist.selectCoinAssetGreaterThanOrEqual(coins, amount, exclude);
    const objectArray = selectedResult.selectedCoins.map((item) => item.coinObjectId);
    const remainCoins = selectedResult.remainingCoins;
    const amountArray = selectedResult.selectedCoins.map((item) => item.balance.toString());
    return { objectArray, remainCoins, amountArray };
  }
  /**
   * Select the CoinAsset objects from a list of CoinAsset objects that have a balance greater than or equal to a given amount.
   *
   * @param coins The list of CoinAsset objects to select from.
   * @param amount The amount to select CoinAsset objects with a balance greater than or equal to.
   * @param exclude A list of CoinAsset objects to exclude from the selection.
   * @returns The CoinAsset objects that have a balance greater than or equal to the given amount.
   */
  static selectCoinAssetGreaterThanOrEqual(coins, amount, exclude = []) {
    const sortedCoins = CoinAssist.sortByBalance(coins.filter((c) => !exclude.includes(c.coinObjectId)));
    const total = CoinAssist.calculateTotalBalance(sortedCoins);
    if (total < amount) {
      return { selectedCoins: [], remainingCoins: sortedCoins };
    }
    if (total === amount) {
      return { selectedCoins: sortedCoins, remainingCoins: [] };
    }
    let sum = BigInt(0);
    const selectedCoins = [];
    const remainingCoins = [...sortedCoins];
    while (sum < total) {
      const target = amount - sum;
      const coinWithSmallestSufficientBalanceIndex = remainingCoins.findIndex((c) => c.balance >= target);
      if (coinWithSmallestSufficientBalanceIndex !== -1) {
        selectedCoins.push(remainingCoins[coinWithSmallestSufficientBalanceIndex]);
        remainingCoins.splice(coinWithSmallestSufficientBalanceIndex, 1);
        break;
      }
      const coinWithLargestBalance = remainingCoins.pop();
      if (coinWithLargestBalance.balance > 0) {
        selectedCoins.push(coinWithLargestBalance);
        sum += coinWithLargestBalance.balance;
      }
    }
    return { selectedCoins: CoinAssist.sortByBalance(selectedCoins), remainingCoins: CoinAssist.sortByBalance(remainingCoins) };
  }
  /**
   * Sort the CoinAsset objects by their balance.
   *
   * @param coins The CoinAsset objects to sort.
   * @returns The sorted CoinAsset objects.
   */
  static sortByBalance(coins) {
    return coins.sort((a, b) => a.balance < b.balance ? -1 : a.balance > b.balance ? 1 : 0);
  }
  static sortByBalanceDes(coins) {
    return coins.sort((a, b) => a.balance > b.balance ? -1 : a.balance < b.balance ? 0 : 1);
  }
  /**
   * Calculate the total balance of a list of CoinAsset objects.
   *
   * @param coins The list of CoinAsset objects to calculate the total balance for.
   * @returns The total balance of the CoinAsset objects.
   */
  static calculateTotalBalance(coins) {
    return coins.reduce((partialSum, c) => partialSum + c.balance, BigInt(0));
  }
};

// src/math/collect-fees.ts
var import_bn8 = __toESM(require("bn.js"));
function getFeeInTickRange(clmmpool, tickLower, tickUpper) {
  let fee_growth_below_a = new import_bn8.default(0);
  let fee_growth_below_b = new import_bn8.default(0);
  if (clmmpool.current_tick_index < tickLower.index) {
    fee_growth_below_a = MathUtil.subUnderflowU128(new import_bn8.default(clmmpool.fee_growth_global_a), new import_bn8.default(tickLower.feeGrowthOutsideA));
    fee_growth_below_b = MathUtil.subUnderflowU128(new import_bn8.default(clmmpool.fee_growth_global_b), new import_bn8.default(tickLower.feeGrowthOutsideB));
  } else {
    fee_growth_below_a = new import_bn8.default(tickLower.feeGrowthOutsideA);
    fee_growth_below_b = new import_bn8.default(tickLower.feeGrowthOutsideB);
  }
  let fee_growth_above_a = new import_bn8.default(0);
  let fee_growth_above_b = new import_bn8.default(0);
  if (clmmpool.current_tick_index < tickUpper.index) {
    fee_growth_above_a = new import_bn8.default(tickUpper.feeGrowthOutsideA);
    fee_growth_above_b = new import_bn8.default(tickUpper.feeGrowthOutsideB);
  } else {
    fee_growth_above_a = MathUtil.subUnderflowU128(new import_bn8.default(clmmpool.fee_growth_global_a), new import_bn8.default(tickUpper.feeGrowthOutsideA));
    fee_growth_above_b = MathUtil.subUnderflowU128(new import_bn8.default(clmmpool.fee_growth_global_b), new import_bn8.default(tickUpper.feeGrowthOutsideB));
  }
  const fee_growth_inside_a = MathUtil.subUnderflowU128(
    MathUtil.subUnderflowU128(new import_bn8.default(clmmpool.fee_growth_global_a), fee_growth_below_a),
    fee_growth_above_a
  );
  const fee_growth_inside_b = MathUtil.subUnderflowU128(
    MathUtil.subUnderflowU128(new import_bn8.default(clmmpool.fee_growth_global_b), fee_growth_below_b),
    fee_growth_above_b
  );
  return { fee_growth_inside_a, fee_growth_inside_b };
}
function updateFees(position, fee_growth_inside_a, fee_growth_inside_b) {
  const growth_delta_a = MathUtil.subUnderflowU128(fee_growth_inside_a, new import_bn8.default(position.fee_growth_inside_a));
  const fee_delta_a = new import_bn8.default(position.liquidity).mul(growth_delta_a).shrn(64);
  const growth_delta_b = MathUtil.subUnderflowU128(fee_growth_inside_b, new import_bn8.default(position.fee_growth_inside_b));
  const fee_delta_b = new import_bn8.default(position.liquidity).mul(growth_delta_b).shrn(64);
  const fee_owed_a = new import_bn8.default(position.fee_owed_a).add(fee_delta_a);
  const fee_owed_b = new import_bn8.default(position.fee_owed_b).add(fee_delta_b);
  return {
    position_id: position.pos_object_id,
    feeOwedA: fee_owed_a,
    feeOwedB: fee_owed_b
  };
}
function collectFeesQuote(param) {
  const { fee_growth_inside_a, fee_growth_inside_b } = getFeeInTickRange(param.clmmpool, param.tickLower, param.tickUpper);
  return updateFees(param.position, fee_growth_inside_a, fee_growth_inside_b);
}

// src/math/percentage.ts
var import_bn9 = __toESM(require("bn.js"));
var Percentage = class {
  numerator;
  denominator;
  constructor(numerator, denominator) {
    this.toString = () => {
      return `${this.numerator.toString()}/${this.denominator.toString()}`;
    };
    this.numerator = numerator;
    this.denominator = denominator;
  }
  /**
   * Get the percentage of a number.
   *
   * @param number
   * @returns
   */
  static fromDecimal(number) {
    return Percentage.fromFraction(number.toDecimalPlaces(1).mul(10).toNumber(), 1e3);
  }
  /**
   * Get the percentage of a fraction.
   *
   * @param numerator
   * @param denominator
   * @returns
   */
  static fromFraction(numerator, denominator) {
    const num = typeof numerator === "number" ? new import_bn9.default(numerator.toString()) : numerator;
    const denom = typeof denominator === "number" ? new import_bn9.default(denominator.toString()) : denominator;
    return new Percentage(num, denom);
  }
};

// src/math/position.ts
var AmountSpecified = /* @__PURE__ */ ((AmountSpecified2) => {
  AmountSpecified2["Input"] = "Specified input amount";
  AmountSpecified2["Output"] = "Specified output amount";
  return AmountSpecified2;
})(AmountSpecified || {});
var PositionStatus = /* @__PURE__ */ ((PositionStatus2) => {
  PositionStatus2[PositionStatus2["BelowRange"] = 0] = "BelowRange";
  PositionStatus2[PositionStatus2["InRange"] = 1] = "InRange";
  PositionStatus2[PositionStatus2["AboveRange"] = 2] = "AboveRange";
  return PositionStatus2;
})(PositionStatus || {});
var PositionUtil = class {
  /**
   * Get the position status for the given tick indices.
   *
   * @param currentTickIndex The current tick index.
   * @param lowerTickIndex The lower tick index.
   * @param upperTickIndex The upper tick index.
   * @returns The position status.
   */
  static getPositionStatus(currentTickIndex, lowerTickIndex, upperTickIndex) {
    if (currentTickIndex < lowerTickIndex) {
      return 0 /* BelowRange */;
    }
    if (currentTickIndex < upperTickIndex) {
      return 1 /* InRange */;
    }
    return 2 /* AboveRange */;
  }
};
function orderSqrtPrice(sqrtPrice0X64, sqrtPrice1X64) {
  if (sqrtPrice0X64.lt(sqrtPrice1X64)) {
    return [sqrtPrice0X64, sqrtPrice1X64];
  }
  return [sqrtPrice1X64, sqrtPrice0X64];
}
function getCoinAFromLiquidity(liquidity, sqrtPrice0X64, sqrtPrice1X64, roundUp) {
  const [sqrtPriceLowerX64, sqrtPriceUpperX64] = orderSqrtPrice(sqrtPrice0X64, sqrtPrice1X64);
  const numerator = liquidity.mul(sqrtPriceUpperX64.sub(sqrtPriceLowerX64)).shln(64);
  const denominator = sqrtPriceUpperX64.mul(sqrtPriceLowerX64);
  if (roundUp) {
    return MathUtil.divRoundUp(numerator, denominator);
  }
  return numerator.div(denominator);
}
function getCoinBFromLiquidity(liquidity, sqrtPrice0X64, sqrtPrice1X64, roundUp) {
  const [sqrtPriceLowerX64, sqrtPriceUpperX64] = orderSqrtPrice(sqrtPrice0X64, sqrtPrice1X64);
  const result = liquidity.mul(sqrtPriceUpperX64.sub(sqrtPriceLowerX64));
  if (roundUp) {
    return MathUtil.shiftRightRoundUp(result);
  }
  return result.shrn(64);
}
function getLiquidityFromCoinA(amount, sqrtPriceLowerX64, sqrtPriceUpperX64, roundUp) {
  const result = amount.mul(sqrtPriceLowerX64).mul(sqrtPriceUpperX64).div(sqrtPriceUpperX64.sub(sqrtPriceLowerX64));
  if (roundUp) {
    return MathUtil.shiftRightRoundUp(result);
  }
  return result.shrn(64);
}
function getLiquidityFromCoinB(amount, sqrtPriceLowerX64, sqrtPriceUpperX64, roundUp) {
  const numerator = amount.shln(64);
  const denominator = sqrtPriceUpperX64.sub(sqrtPriceLowerX64);
  if (roundUp) {
    return MathUtil.divRoundUp(numerator, denominator);
  }
  return numerator.div(denominator);
}
function getAmountFixedDelta(currentSqrtPriceX64, targetSqrtPriceX64, liquidity, amountSpecified, swapDirection) {
  if (amountSpecified === "Specified input amount" /* Input */ === (swapDirection === "a2b" /* A2B */)) {
    return getCoinAFromLiquidity(liquidity, currentSqrtPriceX64, targetSqrtPriceX64, amountSpecified === "Specified input amount" /* Input */);
  }
  return getCoinBFromLiquidity(liquidity, currentSqrtPriceX64, targetSqrtPriceX64, amountSpecified === "Specified input amount" /* Input */);
}
function getAmountUnfixedDelta(currentSqrtPriceX64, targetSqrtPriceX64, liquidity, amountSpecified, swapDirection) {
  if (amountSpecified === "Specified input amount" /* Input */ === (swapDirection === "a2b" /* A2B */)) {
    return getCoinBFromLiquidity(liquidity, currentSqrtPriceX64, targetSqrtPriceX64, amountSpecified === "Specified output amount" /* Output */);
  }
  return getCoinAFromLiquidity(liquidity, currentSqrtPriceX64, targetSqrtPriceX64, amountSpecified === "Specified output amount" /* Output */);
}
function adjustForSlippage(n, { numerator, denominator }, adjustUp) {
  if (adjustUp) {
    return n.mul(denominator.add(numerator)).div(denominator);
  }
  return n.mul(denominator).div(denominator.add(numerator));
}
function adjustForCoinSlippage(tokenAmount, slippage, adjustUp) {
  return {
    tokenMaxA: adjustForSlippage(tokenAmount.coinA, slippage, adjustUp),
    tokenMaxB: adjustForSlippage(tokenAmount.coinB, slippage, adjustUp)
  };
}

// src/math/SplitSwap.ts
var import_bn10 = __toESM(require("bn.js"));
var SplitUnit = /* @__PURE__ */ ((SplitUnit2) => {
  SplitUnit2[SplitUnit2["FIVE"] = 5] = "FIVE";
  SplitUnit2[SplitUnit2["TEN"] = 10] = "TEN";
  SplitUnit2[SplitUnit2["TWENTY"] = 20] = "TWENTY";
  SplitUnit2[SplitUnit2["TWENTY_FIVE"] = 25] = "TWENTY_FIVE";
  SplitUnit2[SplitUnit2["FIVETY"] = 50] = "FIVETY";
  SplitUnit2[SplitUnit2["HUNDRED"] = 100] = "HUNDRED";
  return SplitUnit2;
})(SplitUnit || {});
function createSplitArray(minSplitUnit) {
  let unit;
  switch (minSplitUnit) {
    case 5 /* FIVE */:
      unit = 5;
      break;
    case 10 /* TEN */:
      unit = 10;
      break;
    case 20 /* TWENTY */:
      unit = 20;
      break;
    case 25 /* TWENTY_FIVE */:
      unit = 25;
      break;
    case 50 /* FIVETY */:
      unit = 50;
      break;
    case 100 /* HUNDRED */:
      unit = 100;
      break;
    default:
      unit = 1;
  }
  const length = 100 / unit + 1;
  const splitArray = new Array(length);
  for (let i = 0; i < length; i += 1) {
    splitArray[i] = i * unit;
  }
  return splitArray;
}
function createSplitAmountArray(amount, minSplitUnit) {
  const splitArray = createSplitArray(minSplitUnit);
  const splitAmountArray = new Array(splitArray.length);
  for (let i = 0; i < splitArray.length; i += 1) {
    splitAmountArray[i] = amount.muln(splitArray[i]).divn(100);
  }
  return splitAmountArray;
}
function updateSplitSwapResult(maxIndex, currentIndex, splitSwapResult, stepResult) {
  for (let index = currentIndex; index < maxIndex; index += 1) {
    splitSwapResult.amountInArray[index] = splitSwapResult.amountInArray[index].add(stepResult.amountIn);
    splitSwapResult.amountOutArray[index] = splitSwapResult.amountOutArray[index].add(stepResult.amountOut);
    splitSwapResult.feeAmountArray[index] = splitSwapResult.feeAmountArray[index].add(stepResult.feeAmount);
  }
  return splitSwapResult;
}
function computeSplitSwap(a2b, byAmountIn, amounts, poolData, swapTicks) {
  let currentLiquidity = new import_bn10.default(poolData.liquidity);
  let { currentSqrtPrice } = poolData;
  let splitSwapResult = {
    amountInArray: [],
    amountOutArray: [],
    feeAmountArray: [],
    nextSqrtPriceArray: [],
    isExceed: []
  };
  amounts.forEach(() => {
    splitSwapResult.amountInArray.push(ZERO);
    splitSwapResult.amountOutArray.push(ZERO);
    splitSwapResult.feeAmountArray.push(ZERO);
    splitSwapResult.nextSqrtPriceArray.push(ZERO);
  });
  let targetSqrtPrice;
  let signedLiquidityChange;
  const sqrtPriceLimit = SwapUtils.getDefaultSqrtPriceLimit(a2b);
  const maxIndex = amounts.length;
  let remainerAmount = amounts[1];
  let currentIndex = 1;
  let ticks;
  if (a2b) {
    ticks = swapTicks.sort((a, b) => {
      return b.index - a.index;
    });
  } else {
    ticks = swapTicks.sort((a, b) => {
      return a.index - b.index;
    });
  }
  for (const tick of ticks) {
    if (a2b) {
      if (poolData.currentTickIndex < tick.index) {
        continue;
      }
    } else if (poolData.currentTickIndex > tick.index) {
      continue;
    }
    if (tick === null) {
      continue;
    }
    if (a2b && sqrtPriceLimit.gt(tick.sqrtPrice) || !a2b && sqrtPriceLimit.lt(tick.sqrtPrice)) {
      targetSqrtPrice = sqrtPriceLimit;
    } else {
      targetSqrtPrice = tick.sqrtPrice;
    }
    let tempStepResult = {
      amountIn: ZERO,
      amountOut: ZERO,
      nextSqrtPrice: ZERO,
      feeAmount: ZERO
    };
    const tempSqrtPrice = currentSqrtPrice;
    const tempLiquidity = currentLiquidity;
    let tempRemainerAmount = remainerAmount;
    let currentTempIndex = currentIndex;
    for (let i = currentIndex; i < maxIndex; i += 1) {
      const stepResult = computeSwapStep(
        currentSqrtPrice,
        targetSqrtPrice,
        currentLiquidity,
        remainerAmount,
        new import_bn10.default(poolData.feeRate),
        byAmountIn
      );
      tempStepResult = stepResult;
      if (!stepResult.amountIn.eq(ZERO)) {
        remainerAmount = byAmountIn ? remainerAmount.sub(stepResult.amountIn.add(stepResult.feeAmount)) : remainerAmount.sub(stepResult.amountOut);
      }
      if (remainerAmount.eq(ZERO)) {
        splitSwapResult.amountInArray[i] = splitSwapResult.amountInArray[i].add(stepResult.amountIn);
        splitSwapResult.amountOutArray[i] = splitSwapResult.amountOutArray[i].add(stepResult.amountOut);
        splitSwapResult.feeAmountArray[i] = splitSwapResult.feeAmountArray[i].add(stepResult.feeAmount);
        if (stepResult.nextSqrtPrice.eq(tick.sqrtPrice)) {
          signedLiquidityChange = a2b ? tick.liquidityNet.mul(new import_bn10.default(-1)) : tick.liquidityNet;
          currentLiquidity = signedLiquidityChange.gt(ZERO) ? currentLiquidity.add(signedLiquidityChange) : currentLiquidity.sub(signedLiquidityChange.abs());
          currentSqrtPrice = tick.sqrtPrice;
        } else {
          currentSqrtPrice = stepResult.nextSqrtPrice;
        }
        splitSwapResult.amountInArray[i] = splitSwapResult.amountInArray[i].add(splitSwapResult.feeAmountArray[i]);
        splitSwapResult.nextSqrtPriceArray[i] = currentSqrtPrice;
        currentLiquidity = tempLiquidity;
        currentSqrtPrice = tempSqrtPrice;
        if (i !== maxIndex - 1) {
          remainerAmount = tempRemainerAmount.add(amounts[i + 1].sub(amounts[currentTempIndex]));
        }
        currentIndex += 1;
      } else {
        splitSwapResult = updateSplitSwapResult(maxIndex, i, splitSwapResult, stepResult);
        tempRemainerAmount = remainerAmount;
        currentTempIndex = currentIndex;
        break;
      }
    }
    if (currentIndex === maxIndex) {
      break;
    }
    if (tempStepResult.nextSqrtPrice.eq(tick.sqrtPrice)) {
      signedLiquidityChange = a2b ? tick.liquidityNet.mul(new import_bn10.default(-1)) : tick.liquidityNet;
      currentLiquidity = signedLiquidityChange.gt(ZERO) ? currentLiquidity.add(signedLiquidityChange) : currentLiquidity.sub(signedLiquidityChange.abs());
      currentSqrtPrice = tick.sqrtPrice;
    } else {
      currentSqrtPrice = tempStepResult.nextSqrtPrice;
    }
  }
  if (byAmountIn) {
    amounts.forEach((a, i) => {
      splitSwapResult.isExceed.push(splitSwapResult.amountInArray[i].lt(a));
    });
  } else {
    amounts.forEach((a, i) => {
      splitSwapResult.isExceed.push(splitSwapResult.amountOutArray[i].lt(a));
    });
  }
  return splitSwapResult;
}
var SplitSwap = class {
  minSplitUnit;
  amountArray;
  byAmountIn;
  a2b;
  clmmpool;
  ticks;
  splitSwapResult;
  constructor(amount, unit, clmmpool, a2b, byAmountIn, tickData) {
    this.minSplitUnit = unit;
    this.a2b = a2b;
    this.byAmountIn = byAmountIn;
    this.clmmpool = clmmpool;
    this.ticks = tickData;
    this.amountArray = [];
    this.createSplitSwapParams = this.createSplitSwapParams.bind(this);
    this.createSplitSwapParams(amount, unit);
    this.splitSwapResult = {
      amountInArray: [],
      amountOutArray: [],
      feeAmountArray: [],
      nextSqrtPriceArray: [],
      isExceed: []
    };
    this.computeSwap = this.computeSwap.bind(this);
  }
  createSplitSwapParams(amount, unit) {
    const amountArray = createSplitAmountArray(amount, unit);
    this.amountArray = amountArray;
  }
  computeSwap() {
    const pool = transClmmpoolDataWithoutTicks(this.clmmpool);
    this.splitSwapResult = computeSplitSwap(this.a2b, this.byAmountIn, this.amountArray, pool, this.ticks);
    return this.splitSwapResult;
  }
};

// src/utils/numbers.ts
var import_decimal6 = __toESM(require("decimal.js"));
function d(value) {
  if (import_decimal6.default.isDecimal(value)) {
    return value;
  }
  return new import_decimal6.default(value === void 0 ? 0 : value);
}
function decimalsMultiplier(decimals) {
  return d(10).pow(d(decimals).abs());
}

// src/utils/objects.ts
function getSuiObjectData(resp) {
  return resp.data;
}
function getObjectDeletedResponse(resp) {
  if (resp.error && "object_id" in resp.error && "version" in resp.error && "digest" in resp.error) {
    const { error } = resp;
    return {
      objectId: error.object_id,
      version: error.version,
      digest: error.digest
    };
  }
  return void 0;
}
function getObjectNotExistsResponse(resp) {
  if (resp.error && "object_id" in resp.error && !("version" in resp.error) && !("digest" in resp.error)) {
    return resp.error.object_id;
  }
  return void 0;
}
function getObjectReference(resp) {
  if ("reference" in resp) {
    return resp.reference;
  }
  const exists = getSuiObjectData(resp);
  if (exists) {
    return {
      objectId: exists.objectId,
      version: exists.version,
      digest: exists.digest
    };
  }
  return getObjectDeletedResponse(resp);
}
function getObjectId(data) {
  if ("objectId" in data) {
    return data.objectId;
  }
  return getObjectReference(data)?.objectId ?? getObjectNotExistsResponse(data);
}
function getObjectVersion(data) {
  if ("version" in data) {
    return data.version;
  }
  return getObjectReference(data)?.version;
}
function isSuiObjectResponse(resp) {
  return resp.data !== void 0;
}
function isSuiObjectDataWithContent(data) {
  return data.content !== void 0;
}
function getMovePackageContent(data) {
  const suiObject = getSuiObjectData(data);
  if (suiObject?.content?.dataType !== "package") {
    return void 0;
  }
  return suiObject.content.disassembled;
}
function getMoveObject(data) {
  const suiObject = "data" in data ? getSuiObjectData(data) : data;
  if (!suiObject || !isSuiObjectDataWithContent(suiObject) || suiObject.content.dataType !== "moveObject") {
    return void 0;
  }
  return suiObject.content;
}
function getMoveObjectType(resp) {
  return getMoveObject(resp)?.type;
}
function getObjectType(resp) {
  const data = isSuiObjectResponse(resp) ? resp.data : resp;
  if (!data?.type && "data" in resp) {
    if (data?.content?.dataType === "package") {
      return "package";
    }
    return getMoveObjectType(resp);
  }
  return data?.type;
}
function getObjectPreviousTransactionDigest(resp) {
  return getSuiObjectData(resp)?.previousTransaction;
}
function getObjectOwner(resp) {
  return getSuiObjectData(resp)?.owner;
}
function getObjectDisplay(resp) {
  const display = getSuiObjectData(resp)?.display;
  if (!display) {
    return { data: null, error: null };
  }
  return display;
}
function getObjectFields(object) {
  const fields = getMoveObject(object)?.fields;
  if (fields) {
    if ("fields" in fields) {
      return fields.fields;
    }
    return fields;
  }
  return void 0;
}
function hasPublicTransfer(data) {
  return getMoveObject(data)?.hasPublicTransfer ?? false;
}

// src/utils/common.ts
function toDecimalsAmount(amount, decimals) {
  const mul = decimalsMultiplier(d(decimals));
  return Number(d(amount).mul(mul));
}
function asUintN(int, bits = 32) {
  return BigInt.asUintN(bits, BigInt(int)).toString();
}
function asIntN(int, bits = 32) {
  return Number(BigInt.asIntN(bits, BigInt(int)));
}
function fromDecimalsAmount(amount, decimals) {
  const mul = decimalsMultiplier(d(decimals));
  return Number(d(amount).div(mul));
}
function secretKeyToEd25519Keypair(secretKey, ecode = "hex") {
  if (secretKey instanceof Uint8Array) {
    const key = Buffer.from(secretKey);
    return import_ed25519.Ed25519Keypair.fromSecretKey(key);
  }
  const hexKey = ecode === "hex" ? (0, import_bcs.fromHEX)(secretKey) : (0, import_bcs.fromB64)(secretKey);
  return import_ed25519.Ed25519Keypair.fromSecretKey(hexKey);
}
function secretKeyToSecp256k1Keypair(secretKey, ecode = "hex") {
  if (secretKey instanceof Uint8Array) {
    const key = Buffer.from(secretKey);
    return import_secp256k1.Secp256k1Keypair.fromSecretKey(key);
  }
  const hexKey = ecode === "hex" ? (0, import_bcs.fromHEX)(secretKey) : (0, import_bcs.fromB64)(secretKey);
  return import_secp256k1.Secp256k1Keypair.fromSecretKey(hexKey);
}
function buildPoolName(coin_type_a, coin_type_b, tick_spacing) {
  const coinNameA = extractStructTagFromType(coin_type_a).name;
  const coinNameB = extractStructTagFromType(coin_type_b).name;
  return `${coinNameA}-${coinNameB}[${tick_spacing}]`;
}
function buildPool(objects) {
  const type = getMoveObjectType(objects);
  const formatType = extractStructTagFromType(type);
  const fields = getObjectFields(objects);
  if (fields == null) {
    throw new ClmmpoolsError(`Pool id ${getObjectId(objects)} not exists.`, "InvalidPoolObject" /* InvalidPoolObject */);
  }
  const rewarders = [];
  fields.rewarder_manager.fields.rewarders.forEach((item) => {
    const { emissions_per_second } = item.fields;
    const emissionSeconds = MathUtil.fromX64(new import_bn11.default(emissions_per_second));
    const emissionsEveryDay = Math.floor(emissionSeconds.toNumber() * 60 * 60 * 24);
    rewarders.push({
      emissions_per_second,
      coinAddress: extractStructTagFromType(item.fields.reward_coin.fields.name).source_address,
      growth_global: item.fields.growth_global,
      emissionsEveryDay
    });
  });
  const pool = {
    poolAddress: getObjectId(objects),
    poolType: type,
    coinTypeA: formatType.type_arguments[0],
    coinTypeB: formatType.type_arguments[1],
    coinAmountA: fields.coin_a,
    coinAmountB: fields.coin_b,
    current_sqrt_price: fields.current_sqrt_price,
    current_tick_index: asIntN(BigInt(fields.current_tick_index.fields.bits)),
    fee_growth_global_a: fields.fee_growth_global_a,
    fee_growth_global_b: fields.fee_growth_global_b,
    fee_protocol_coin_a: fields.fee_protocol_coin_a,
    fee_protocol_coin_b: fields.fee_protocol_coin_b,
    fee_rate: fields.fee_rate,
    is_pause: fields.is_pause,
    liquidity: fields.liquidity,
    position_manager: {
      positions_handle: fields.position_manager.fields.positions.fields.id.id,
      size: fields.position_manager.fields.positions.fields.size
    },
    rewarder_infos: rewarders,
    rewarder_last_updated_time: fields.rewarder_manager.fields.last_updated_time,
    tickSpacing: fields.tick_spacing,
    ticks_handle: fields.tick_manager.fields.ticks.fields.id.id,
    uri: fields.url,
    index: Number(fields.index),
    name: ""
  };
  pool.name = buildPoolName(pool.coinTypeA, pool.coinTypeB, pool.tickSpacing);
  return pool;
}
function buildNFT(objects) {
  const fields = getObjectDisplay(objects).data;
  const nft = {
    creator: "",
    description: "",
    image_url: "",
    link: "",
    name: "",
    project_url: ""
  };
  if (fields) {
    nft.creator = fields.creator;
    nft.description = fields.description;
    nft.image_url = fields.image_url;
    nft.link = fields.link;
    nft.name = fields.name;
    nft.project_url = fields.project_url;
  }
  return nft;
}
function buildPosition(objects) {
  if (objects.error != null || objects.data?.content?.dataType !== "moveObject") {
    throw new ClmmpoolsError(`Position not exists. Get Position error:${objects.error}`, "InvalidPositionObject" /* InvalidPositionObject */);
  }
  let nft = {
    creator: "",
    description: "",
    image_url: "",
    link: "",
    name: "",
    project_url: ""
  };
  let position = {
    ...nft,
    pos_object_id: "",
    owner: "",
    type: "",
    coin_type_a: "",
    coin_type_b: "",
    liquidity: "",
    tick_lower_index: 0,
    tick_upper_index: 0,
    index: 0,
    pool: "",
    reward_amount_owed_0: "0",
    reward_amount_owed_1: "0",
    reward_amount_owed_2: "0",
    reward_growth_inside_0: "0",
    reward_growth_inside_1: "0",
    reward_growth_inside_2: "0",
    fee_growth_inside_a: "0",
    fee_owed_a: "0",
    fee_growth_inside_b: "0",
    fee_owed_b: "0",
    position_status: "Exists" /* Exists */
  };
  let fields = getObjectFields(objects);
  if (fields) {
    const type = getMoveObjectType(objects);
    const ownerWarp = getObjectOwner(objects);
    if ("nft" in fields) {
      fields = fields.nft.fields;
      nft.description = fields.description;
      nft.name = fields.name;
      nft.link = fields.url;
    } else {
      nft = buildNFT(objects);
    }
    position = {
      ...nft,
      pos_object_id: fields.id.id,
      owner: ownerWarp.AddressOwner,
      type,
      coin_type_a: fields.coin_type_a.fields.name,
      coin_type_b: fields.coin_type_b.fields.name,
      liquidity: fields.liquidity,
      tick_lower_index: asIntN(BigInt(fields.tick_lower_index.fields.bits)),
      tick_upper_index: asIntN(BigInt(fields.tick_upper_index.fields.bits)),
      index: fields.index,
      pool: fields.pool,
      reward_amount_owed_0: "0",
      reward_amount_owed_1: "0",
      reward_amount_owed_2: "0",
      reward_growth_inside_0: "0",
      reward_growth_inside_1: "0",
      reward_growth_inside_2: "0",
      fee_growth_inside_a: "0",
      fee_owed_a: "0",
      fee_growth_inside_b: "0",
      fee_owed_b: "0",
      position_status: "Exists" /* Exists */
    };
  }
  const deletedResponse = getObjectDeletedResponse(objects);
  if (deletedResponse) {
    position.pos_object_id = deletedResponse.objectId;
    position.position_status = "Deleted" /* Deleted */;
  }
  const objectNotExistsResponse = getObjectNotExistsResponse(objects);
  if (objectNotExistsResponse) {
    position.pos_object_id = objectNotExistsResponse;
    position.position_status = "NotExists" /* NotExists */;
  }
  return position;
}
function buildPositionReward(fields) {
  const rewarders = {
    reward_amount_owed_0: "0",
    reward_amount_owed_1: "0",
    reward_amount_owed_2: "0",
    reward_growth_inside_0: "0",
    reward_growth_inside_1: "0",
    reward_growth_inside_2: "0"
  };
  fields = "fields" in fields ? fields.fields : fields;
  fields.rewards.forEach((item, index) => {
    const { amount_owned, growth_inside } = "fields" in item ? item.fields : item;
    if (index === 0) {
      rewarders.reward_amount_owed_0 = amount_owned;
      rewarders.reward_growth_inside_0 = growth_inside;
    } else if (index === 1) {
      rewarders.reward_amount_owed_1 = amount_owned;
      rewarders.reward_growth_inside_1 = growth_inside;
    } else if (index === 2) {
      rewarders.reward_amount_owed_2 = amount_owned;
      rewarders.reward_growth_inside_2 = growth_inside;
    }
  });
  const tick_lower_index = "fields" in fields.tick_lower_index ? fields.tick_lower_index.fields.bits : fields.tick_lower_index.bits;
  const tick_upper_index = "fields" in fields.tick_upper_index ? fields.tick_upper_index.fields.bits : fields.tick_upper_index.bits;
  const possition = {
    liquidity: fields.liquidity,
    tick_lower_index: asIntN(BigInt(tick_lower_index)),
    tick_upper_index: asIntN(BigInt(tick_upper_index)),
    ...rewarders,
    fee_growth_inside_a: fields.fee_growth_inside_a,
    fee_owed_a: fields.fee_owned_a,
    fee_growth_inside_b: fields.fee_growth_inside_b,
    fee_owed_b: fields.fee_owned_b,
    pos_object_id: fields.position_id
  };
  return possition;
}
function buildTickData(objects) {
  if (objects.error != null || objects.data?.content?.dataType !== "moveObject") {
    throw new ClmmpoolsError(`Tick not exists. Get tick data error:${objects.error}`, "InvalidTickObject" /* InvalidTickObject */);
  }
  const fields = getObjectFields(objects);
  const valueItem = fields.value.fields.value.fields;
  const possition = {
    objectId: getObjectId(objects),
    index: asIntN(BigInt(valueItem.index.fields.bits)),
    sqrtPrice: new import_bn11.default(valueItem.sqrt_price),
    liquidityNet: new import_bn11.default(valueItem.liquidity_net.fields.bits),
    liquidityGross: new import_bn11.default(valueItem.liquidity_gross),
    feeGrowthOutsideA: new import_bn11.default(valueItem.fee_growth_outside_a),
    feeGrowthOutsideB: new import_bn11.default(valueItem.fee_growth_outside_b),
    rewardersGrowthOutside: valueItem.rewards_growth_outside
  };
  return possition;
}
function buildTickDataByEvent(fields) {
  if (!fields || !fields.index || !fields.sqrt_price || !fields.liquidity_net || !fields.liquidity_gross || !fields.fee_growth_outside_a || !fields.fee_growth_outside_b) {
    throw new ClmmpoolsError(`Invalid tick fields.`, "InvalidTickFields" /* InvalidTickFields */);
  }
  const index = asIntN(BigInt(fields.index.bits));
  const sqrtPrice = new import_bn11.default(fields.sqrt_price);
  const liquidityNet = new import_bn11.default(fields.liquidity_net.bits);
  const liquidityGross = new import_bn11.default(fields.liquidity_gross);
  const feeGrowthOutsideA = new import_bn11.default(fields.fee_growth_outside_a);
  const feeGrowthOutsideB = new import_bn11.default(fields.fee_growth_outside_b);
  const rewardersGrowthOutside = fields.rewards_growth_outside || [];
  const tick = {
    objectId: "",
    index,
    sqrtPrice,
    liquidityNet,
    liquidityGross,
    feeGrowthOutsideA,
    feeGrowthOutsideB,
    rewardersGrowthOutside
  };
  return tick;
}

// src/utils/tick.ts
var import_bn12 = __toESM(require("bn.js"));
var TickUtil = class {
  /**
   * Get min tick index.
   * @param tick_spacing tick spacing
   * @retruns min tick index
   */
  static getMinIndex(tickSpacing) {
    return MIN_TICK_INDEX + Math.abs(MIN_TICK_INDEX) % tickSpacing;
  }
  /**
   * Get max tick index.
   * @param tick_spacing - tick spacing
   * @retruns max tick index
   */
  // eslint-disable-next-line camelcase
  static getMaxIndex(tickSpacing) {
    return MAX_TICK_INDEX - MAX_TICK_INDEX % tickSpacing;
  }
};
function getNearestTickByTick(tickIndex, tickSpacing) {
  const mod = Math.abs(tickIndex) % tickSpacing;
  if (tickIndex > 0) {
    if (mod > tickSpacing / 2) {
      return tickIndex + tickSpacing - mod;
    }
    return tickIndex - mod;
  }
  if (mod > tickSpacing / 2) {
    return tickIndex - tickSpacing + mod;
  }
  return tickIndex + mod;
}
function getRewardInTickRange(pool, tickLower, tickUpper, tickLowerIndex, tickUpperIndex, growthGlobal) {
  const rewarderInfos = pool.rewarder_infos;
  const rewarderGrowthInside = [];
  for (let i = 0; i < rewarderInfos.length; i += 1) {
    let rewarder_growth_below = growthGlobal[i];
    if (tickLower !== null) {
      if (pool.current_tick_index < tickLowerIndex) {
        rewarder_growth_below = growthGlobal[i].sub(new import_bn12.default(tickLower.rewardersGrowthOutside[i]));
      } else {
        rewarder_growth_below = tickLower.rewardersGrowthOutside[i];
      }
    }
    let rewarder_growth_above = new import_bn12.default(0);
    if (tickUpper !== null) {
      if (pool.current_tick_index >= tickUpperIndex) {
        rewarder_growth_above = growthGlobal[i].sub(new import_bn12.default(tickUpper.rewardersGrowthOutside[i]));
      } else {
        rewarder_growth_above = tickUpper.rewardersGrowthOutside[i];
      }
    }
    const rewGrowthInside = MathUtil.subUnderflowU128(
      MathUtil.subUnderflowU128(new import_bn12.default(growthGlobal[i]), new import_bn12.default(rewarder_growth_below)),
      new import_bn12.default(rewarder_growth_above)
    );
    rewarderGrowthInside.push(rewGrowthInside);
  }
  return rewarderGrowthInside;
}

// src/utils/transaction-util.ts
var import_bn13 = __toESM(require("bn.js"));
var import_decimal7 = __toESM(require("decimal.js"));
var import_transactions = require("@mysten/sui.js/transactions");
function findAdjustCoin(coinPair) {
  const isAdjustCoinA = CoinAssist.isSuiCoin(coinPair.coinTypeA);
  const isAdjustCoinB = CoinAssist.isSuiCoin(coinPair.coinTypeB);
  return { isAdjustCoinA, isAdjustCoinB };
}
function reverSlippageAmount(slippageAmount, slippage) {
  return import_decimal7.default.ceil(d(slippageAmount).div(1 + slippage)).toString();
}
async function printTransaction(tx, isPrint = true) {
  console.log(`inputs`, tx.blockData.inputs);
  tx.blockData.transactions.forEach((item, index) => {
    if (isPrint) {
      console.log(`transaction ${index}: `, item);
    }
  });
}
var _TransactionUtil = class {
  static createCollectRewarderAndFeeParams(sdk, tx, params, allCoinAsset, allCoinAssetA, allCoinAssetB) {
    if (allCoinAssetA === void 0) {
      allCoinAssetA = [...allCoinAsset];
    }
    if (allCoinAssetB === void 0) {
      allCoinAssetB = [...allCoinAsset];
    }
    const coinTypeA = normalizeCoinType(params.coinTypeA);
    const coinTypeB = normalizeCoinType(params.coinTypeB);
    if (params.collect_fee) {
      const primaryCoinAInput = _TransactionUtil.buildCoinForAmount(tx, allCoinAssetA, BigInt(0), coinTypeA, false);
      allCoinAssetA = primaryCoinAInput.remainCoins;
      const primaryCoinBInput = _TransactionUtil.buildCoinForAmount(tx, allCoinAssetB, BigInt(0), coinTypeB, false);
      allCoinAssetB = primaryCoinBInput.remainCoins;
      tx = sdk.Position.createCollectFeePaylod(
        {
          pool_id: params.pool_id,
          pos_id: params.pos_id,
          coinTypeA: params.coinTypeA,
          coinTypeB: params.coinTypeB
        },
        tx,
        primaryCoinAInput.targetCoin,
        primaryCoinBInput.targetCoin
      );
    }
    const primaryCoinInputs = [];
    params.rewarder_coin_types.forEach((type) => {
      switch (normalizeCoinType(type)) {
        case coinTypeA:
          primaryCoinInputs.push(_TransactionUtil.buildCoinForAmount(tx, allCoinAssetA, BigInt(0), type, false).targetCoin);
          break;
        case coinTypeB:
          primaryCoinInputs.push(_TransactionUtil.buildCoinForAmount(tx, allCoinAssetB, BigInt(0), type, false).targetCoin);
          break;
        default:
          primaryCoinInputs.push(_TransactionUtil.buildCoinForAmount(tx, allCoinAsset, BigInt(0), type, false).targetCoin);
          break;
      }
    });
    tx = sdk.Rewarder.createCollectRewarderPaylod(params, tx, primaryCoinInputs);
    return tx;
  }
  /**
   * adjust transaction for gas
   * @param sdk
   * @param amount
   * @param tx
   * @returns
   */
  static async adjustTransactionForGas(sdk, allCoins, amount, tx) {
    tx.setSender(sdk.senderAddress);
    const amountCoins = CoinAssist.selectCoinAssetGreaterThanOrEqual(allCoins, amount).selectedCoins;
    if (amountCoins.length === 0) {
      throw new ClmmpoolsError(`Insufficient balance`, "InsufficientBalance" /* InsufficientBalance */);
    }
    const totalAmount = CoinAssist.calculateTotalBalance(allCoins);
    if (totalAmount - amount > 1e9) {
      return { fixAmount: amount };
    }
    const estimateGas = await sdk.fullClient.calculationTxGas(tx);
    const gasCoins = CoinAssist.selectCoinAssetGreaterThanOrEqual(
      allCoins,
      BigInt(estimateGas),
      amountCoins.map((item) => item.coinObjectId)
    ).selectedCoins;
    if (gasCoins.length === 0) {
      const newGas = BigInt(estimateGas) + BigInt(500);
      if (totalAmount - amount < newGas) {
        amount -= newGas;
        if (amount < 0) {
          throw new ClmmpoolsError(`gas Insufficient balance`, "InsufficientBalance" /* InsufficientBalance */);
        }
        const newTx = new import_transactions.TransactionBlock();
        return { fixAmount: amount, newTx };
      }
    }
    return { fixAmount: amount };
  }
  // -----------------------------------------liquidity-----------------------------------------------//
  /**
   * build add liquidity transaction
   * @param params
   * @param slippage
   * @param curSqrtPrice
   * @returns
   */
  static async buildAddLiquidityFixTokenForGas(sdk, allCoins, params, gasEstimateArg) {
    let tx = await _TransactionUtil.buildAddLiquidityFixToken(sdk, allCoins, params);
    const { isAdjustCoinA } = findAdjustCoin(params);
    const suiAmount = isAdjustCoinA ? params.amount_a : params.amount_b;
    const newResult = await _TransactionUtil.adjustTransactionForGas(
      sdk,
      CoinAssist.getCoinAssets(isAdjustCoinA ? params.coinTypeA : params.coinTypeB, allCoins),
      BigInt(suiAmount),
      tx
    );
    const { fixAmount } = newResult;
    const { newTx } = newResult;
    if (newTx !== void 0) {
      let primaryCoinAInputs;
      let primaryCoinBInputs;
      if (isAdjustCoinA) {
        params.amount_a = Number(fixAmount);
        primaryCoinAInputs = _TransactionUtil.buildAddLiquidityFixTokenCoinInput(
          newTx,
          !params.fix_amount_a,
          fixAmount.toString(),
          params.slippage,
          params.coinTypeA,
          allCoins,
          false
        );
        primaryCoinBInputs = _TransactionUtil.buildAddLiquidityFixTokenCoinInput(
          newTx,
          params.fix_amount_a,
          params.amount_b,
          params.slippage,
          params.coinTypeB,
          allCoins,
          false
        );
      } else {
        params.amount_b = Number(fixAmount);
        primaryCoinAInputs = _TransactionUtil.buildAddLiquidityFixTokenCoinInput(
          newTx,
          !params.fix_amount_a,
          params.amount_a,
          params.slippage,
          params.coinTypeA,
          allCoins,
          false
        );
        primaryCoinBInputs = _TransactionUtil.buildAddLiquidityFixTokenCoinInput(
          newTx,
          params.fix_amount_a,
          fixAmount.toString(),
          params.slippage,
          params.coinTypeB,
          allCoins,
          false
        );
        params = _TransactionUtil.fixAddLiquidityFixTokenParams(params, gasEstimateArg.slippage, gasEstimateArg.curSqrtPrice);
        tx = await _TransactionUtil.buildAddLiquidityFixTokenArgs(newTx, sdk, allCoins, params, primaryCoinAInputs, primaryCoinBInputs);
        return tx;
      }
    }
    return tx;
  }
  /**
   * build add liquidity transaction
   * @param params
   * @param packageId
   * @returns
   */
  static async buildAddLiquidityFixToken(sdk, allCoinAsset, params) {
    if (sdk.senderAddress.length === 0) {
      throw Error("this config sdk senderAddress is empty");
    }
    let tx = new import_transactions.TransactionBlock();
    const primaryCoinAInputs = _TransactionUtil.buildAddLiquidityFixTokenCoinInput(
      tx,
      !params.fix_amount_a,
      params.amount_a,
      params.slippage,
      params.coinTypeA,
      allCoinAsset,
      false
    );
    const primaryCoinBInputs = _TransactionUtil.buildAddLiquidityFixTokenCoinInput(
      tx,
      params.fix_amount_a,
      params.amount_b,
      params.slippage,
      params.coinTypeB,
      allCoinAsset,
      false
    );
    tx = _TransactionUtil.buildAddLiquidityFixTokenArgs(
      tx,
      sdk,
      allCoinAsset,
      params,
      primaryCoinAInputs,
      primaryCoinBInputs
    );
    return tx;
  }
  static buildAddLiquidityFixTokenCoinInput(tx, need_interval_amount, amount, slippage, coinType, allCoinAsset, buildVector = true) {
    return need_interval_amount ? _TransactionUtil.buildCoinForAmountInterval(
      tx,
      allCoinAsset,
      { amountSecond: BigInt(reverSlippageAmount(amount, slippage)), amountFirst: BigInt(amount) },
      coinType,
      buildVector
    ) : _TransactionUtil.buildCoinForAmount(tx, allCoinAsset, BigInt(amount), coinType, buildVector);
  }
  /**
   * fix add liquidity fix token for coin amount
   * @param params
   * @param slippage
   * @param curSqrtPrice
   * @returns
   */
  static fixAddLiquidityFixTokenParams(params, slippage, curSqrtPrice) {
    const coinAmount = params.fix_amount_a ? params.amount_a : params.amount_b;
    const liquidityInput = ClmmPoolUtil.estLiquidityAndcoinAmountFromOneAmounts(
      Number(params.tick_lower),
      Number(params.tick_upper),
      new import_bn13.default(coinAmount),
      params.fix_amount_a,
      true,
      slippage,
      curSqrtPrice
    );
    params.amount_a = params.fix_amount_a ? params.amount_a : liquidityInput.tokenMaxA.toNumber();
    params.amount_b = params.fix_amount_a ? liquidityInput.tokenMaxB.toNumber() : params.amount_b;
    return params;
  }
  static buildAddLiquidityFixTokenArgs(tx, sdk, allCoinAsset, params, primaryCoinAInputs, primaryCoinBInputs) {
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const functionName = params.is_open ? "open_position_with_liquidity_by_fix_coin" : "add_liquidity_by_fix_coin";
    const { clmm_pool, integrate } = sdk.sdkOptions;
    if (!params.is_open) {
      tx = _TransactionUtil.createCollectRewarderAndFeeParams(
        sdk,
        tx,
        params,
        allCoinAsset,
        primaryCoinAInputs.remainCoins,
        primaryCoinBInputs.remainCoins
      );
    }
    const clmmConfig = getPackagerConfigs(clmm_pool);
    const args = params.is_open ? [
      tx.object(clmmConfig.global_config_id),
      tx.object(params.pool_id),
      tx.pure(asUintN(BigInt(params.tick_lower)).toString()),
      tx.pure(asUintN(BigInt(params.tick_upper)).toString()),
      primaryCoinAInputs.targetCoin,
      primaryCoinBInputs.targetCoin,
      tx.pure(params.amount_a),
      tx.pure(params.amount_b),
      tx.pure(params.fix_amount_a),
      tx.object(CLOCK_ADDRESS)
    ] : [
      tx.object(clmmConfig.global_config_id),
      tx.object(params.pool_id),
      tx.object(params.pos_id),
      primaryCoinAInputs.targetCoin,
      primaryCoinBInputs.targetCoin,
      tx.pure(params.amount_a),
      tx.pure(params.amount_b),
      tx.pure(params.fix_amount_a),
      tx.object(CLOCK_ADDRESS)
    ];
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmIntegratePoolV2Module}::${functionName}`,
      typeArguments,
      arguments: args
    });
    return tx;
  }
  // -------------------------------------------swap--------------------------------------------------//
  /**
   * build add liquidity transaction
   * @param params
   * @param slippage
   * @param curSqrtPrice
   * @returns
   */
  static async buildSwapTransactionForGas(sdk, params, allCoinAsset, gasEstimateArg) {
    let tx = _TransactionUtil.buildSwapTransaction(sdk, params, allCoinAsset);
    tx.setSender(sdk.senderAddress);
    const newResult = await _TransactionUtil.adjustTransactionForGas(
      sdk,
      CoinAssist.getCoinAssets(params.a2b ? params.coinTypeA : params.coinTypeB, allCoinAsset),
      BigInt(params.by_amount_in ? params.amount : params.amount_limit),
      tx
    );
    const { fixAmount, newTx } = newResult;
    if (newTx !== void 0) {
      newTx.setSender(sdk.senderAddress);
      if (params.by_amount_in) {
        params.amount = fixAmount.toString();
      } else {
        params.amount_limit = fixAmount.toString();
      }
      params = await _TransactionUtil.fixSwapParams(sdk, params, gasEstimateArg);
      const primaryCoinInputA = _TransactionUtil.buildCoinForAmount(
        tx,
        allCoinAsset,
        params.a2b ? BigInt(params.by_amount_in ? params.amount : params.amount_limit) : BigInt(0),
        params.coinTypeA
      );
      const primaryCoinInputB = _TransactionUtil.buildCoinForAmount(
        tx,
        allCoinAsset,
        params.a2b ? BigInt(0) : BigInt(params.by_amount_in ? params.amount : params.amount_limit),
        params.coinTypeB
      );
      tx = _TransactionUtil.buildSwapTransactionArgs(newTx, params, sdk.sdkOptions, primaryCoinInputA, primaryCoinInputB);
    }
    return tx;
  }
  /**
   * build swap transaction
   * @param params
   * @param packageId
   * @returns
   */
  static buildSwapTransaction(sdk, params, allCoinAsset) {
    let tx = new import_transactions.TransactionBlock();
    tx.setSender(sdk.senderAddress);
    const primaryCoinInputA = _TransactionUtil.buildCoinForAmount(
      tx,
      allCoinAsset,
      params.a2b ? BigInt(params.by_amount_in ? params.amount : params.amount_limit) : BigInt(0),
      params.coinTypeA,
      false
    );
    const primaryCoinInputB = _TransactionUtil.buildCoinForAmount(
      tx,
      allCoinAsset,
      params.a2b ? BigInt(0) : BigInt(params.by_amount_in ? params.amount : params.amount_limit),
      params.coinTypeB,
      false
    );
    tx = _TransactionUtil.buildSwapTransactionArgs(tx, params, sdk.sdkOptions, primaryCoinInputA, primaryCoinInputB);
    return tx;
  }
  /**
   * build swap transaction
   * @param params
   * @param packageId
   * @returns
   */
  static buildSwapTransactionArgs(tx, params, sdkOptions, primaryCoinInputA, primaryCoinInputB) {
    const { clmm_pool, integrate } = sdkOptions;
    const sqrtPriceLimit = SwapUtils.getDefaultSqrtPriceLimit(params.a2b);
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const { global_config_id } = getPackagerConfigs(clmm_pool);
    if (global_config_id === void 0) {
      throw Error("clmm.config.global_config_id is undefined");
    }
    const hasSwapPartner = params.swap_partner !== void 0;
    const functionName = hasSwapPartner ? params.a2b ? "swap_a2b_with_partner" : "swap_b2a_with_partner" : params.a2b ? "swap_a2b" : "swap_b2a";
    const args = hasSwapPartner ? [
      tx.pure(global_config_id),
      tx.pure(params.pool_id),
      tx.pure(params.swap_partner),
      primaryCoinInputA.targetCoin,
      primaryCoinInputB.targetCoin,
      tx.pure(params.by_amount_in),
      tx.pure(params.amount),
      tx.pure(params.amount_limit),
      tx.pure(sqrtPriceLimit.toString()),
      tx.pure(CLOCK_ADDRESS)
    ] : [
      tx.pure(global_config_id),
      tx.pure(params.pool_id),
      primaryCoinInputA.targetCoin,
      primaryCoinInputB.targetCoin,
      tx.pure(params.by_amount_in),
      tx.pure(params.amount),
      tx.pure(params.amount_limit),
      tx.pure(sqrtPriceLimit.toString()),
      tx.pure(CLOCK_ADDRESS)
    ];
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmIntegratePoolV2Module}::${functionName}`,
      typeArguments,
      arguments: args
    });
    return tx;
  }
  // -------------------------------------swap-with-out-transfer-coin-----------------------------------------//
  /**
   * build add liquidity transaction with out transfer coins
   * @param params
   * @param slippage
   * @param curSqrtPrice
   * @returns
   */
  static async buildSwapTransactionWithoutTransferCoinsForGas(sdk, params, allCoinAsset, gasEstimateArg) {
    let { tx, coinABs } = _TransactionUtil.buildSwapTransactionWithoutTransferCoins(sdk, params, allCoinAsset);
    tx.setSender(sdk.senderAddress);
    const newResult = await _TransactionUtil.adjustTransactionForGas(
      sdk,
      CoinAssist.getCoinAssets(params.a2b ? params.coinTypeA : params.coinTypeB, allCoinAsset),
      BigInt(params.by_amount_in ? params.amount : params.amount_limit),
      tx
    );
    const { fixAmount, newTx } = newResult;
    if (newTx !== void 0) {
      newTx.setSender(sdk.senderAddress);
      if (params.by_amount_in) {
        params.amount = fixAmount.toString();
      } else {
        params.amount_limit = fixAmount.toString();
      }
      params = await _TransactionUtil.fixSwapParams(sdk, params, gasEstimateArg);
      const primaryCoinInputA = _TransactionUtil.buildCoinForAmount(
        tx,
        allCoinAsset,
        params.a2b ? BigInt(params.by_amount_in ? params.amount : params.amount_limit) : BigInt(0),
        params.coinTypeA,
        false,
        true
      );
      const primaryCoinInputB = _TransactionUtil.buildCoinForAmount(
        tx,
        allCoinAsset,
        params.a2b ? BigInt(0) : BigInt(params.by_amount_in ? params.amount : params.amount_limit),
        params.coinTypeB,
        false,
        true
      );
      const res = _TransactionUtil.buildSwapTransactionWithoutTransferCoinArgs(sdk, newTx, params, sdk.sdkOptions, primaryCoinInputA, primaryCoinInputB);
      tx = res.tx;
      coinABs = res.txRes;
    }
    return { tx, coinABs };
  }
  /**
   * build swap transaction and return swaped coin
   * @param params
   * @param packageId
   * @returns
   */
  static buildSwapTransactionWithoutTransferCoins(sdk, params, allCoinAsset) {
    let tx = new import_transactions.TransactionBlock();
    tx.setSender(sdk.senderAddress);
    const primaryCoinInputA = _TransactionUtil.buildCoinForAmount(
      tx,
      allCoinAsset,
      params.a2b ? BigInt(params.by_amount_in ? params.amount : params.amount_limit) : BigInt(0),
      params.coinTypeA,
      false,
      true
    );
    const primaryCoinInputB = _TransactionUtil.buildCoinForAmount(
      tx,
      allCoinAsset,
      params.a2b ? BigInt(0) : BigInt(params.by_amount_in ? params.amount : params.amount_limit),
      params.coinTypeB,
      false,
      true
    );
    let res = _TransactionUtil.buildSwapTransactionWithoutTransferCoinArgs(sdk, tx, params, sdk.sdkOptions, primaryCoinInputA, primaryCoinInputB);
    return { tx: res.tx, coinABs: res.txRes };
  }
  /**
   * build swap transaction
   * @param params
   * @param packageId
   * @returns
   */
  static buildSwapTransactionWithoutTransferCoinArgs(sdk, tx, params, sdkOptions, primaryCoinInputA, primaryCoinInputB) {
    const { clmm_pool, integrate } = sdkOptions;
    const sqrtPriceLimit = SwapUtils.getDefaultSqrtPriceLimit(params.a2b);
    const { global_config_id } = getPackagerConfigs(clmm_pool);
    if (global_config_id === void 0) {
      throw Error("clmm.config.global_config_id is undefined");
    }
    const hasSwapPartner = params.swap_partner !== void 0;
    const functionName = hasSwapPartner ? "swap_with_partner" : "swap";
    const moduleName = hasSwapPartner ? ClmmIntegrateRouterWithPartnerModule : ClmmIntegrateRouterModule;
    const args = hasSwapPartner ? [
      tx.pure(global_config_id),
      tx.pure(params.pool_id),
      tx.pure(params.swap_partner),
      primaryCoinInputA.targetCoin,
      primaryCoinInputB.targetCoin,
      tx.pure(params.a2b),
      tx.pure(params.by_amount_in),
      tx.pure(params.amount),
      tx.pure(sqrtPriceLimit.toString()),
      tx.pure(false),
      // use coin value always set false.
      tx.pure(CLOCK_ADDRESS)
    ] : [
      tx.pure(global_config_id),
      tx.pure(params.pool_id),
      primaryCoinInputA.targetCoin,
      primaryCoinInputB.targetCoin,
      tx.pure(params.a2b),
      tx.pure(params.by_amount_in),
      tx.pure(params.amount),
      tx.pure(sqrtPriceLimit.toString()),
      tx.pure(false),
      // use coin value always set false.
      tx.pure(CLOCK_ADDRESS)
    ];
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const coinABs = tx.moveCall({
      target: `${integrate.published_at}::${moduleName}::${functionName}`,
      typeArguments,
      arguments: args
    });
    if (params.by_amount_in) {
      const toCoinType = params.a2b ? params.coinTypeB : params.coinTypeA;
      const toCoin = params.a2b ? coinABs[1] : coinABs[0];
      const totalAmount = Number(params.amount_limit);
      this.checkCoinThreshold(sdk, params.by_amount_in, tx, toCoin, totalAmount, toCoinType);
    }
    return { tx, txRes: coinABs };
  }
  static async fixSwapParams(sdk, params, gasEstimateArg) {
    const { currentPool } = gasEstimateArg;
    try {
      const res = await sdk.Swap.preswap({
        decimalsA: gasEstimateArg.decimalsA,
        decimalsB: gasEstimateArg.decimalsB,
        a2b: params.a2b,
        byAmountIn: params.by_amount_in,
        amount: params.amount,
        pool: currentPool,
        currentSqrtPrice: currentPool.current_sqrt_price,
        coinTypeA: currentPool.coinTypeA,
        coinTypeB: currentPool.coinTypeB
      });
      const toAmount = gasEstimateArg.byAmountIn ? res.estimatedAmountOut : res.estimatedAmountIn;
      const amountLimit = adjustForSlippage(toAmount, gasEstimateArg.slippage, !gasEstimateArg.byAmountIn);
      params.amount_limit = amountLimit.toString();
    } catch (error) {
      console.log("fixSwapParams", error);
    }
    return params;
  }
  static async syncBuildCoinInputForAmount(sdk, tx, amount, coinType, buildVector = true) {
    if (sdk.senderAddress.length === 0) {
      throw Error("this config sdk senderAddress is empty");
    }
    const allCoins = await sdk.getOwnerCoinAssets(sdk.senderAddress, coinType);
    const primaryCoinInput = _TransactionUtil.buildCoinForAmount(tx, allCoins, amount, coinType, buildVector).targetCoin;
    return primaryCoinInput;
  }
  static buildCoinForAmount(tx, allCoins, amount, coinType, buildVector = true, fixAmount = false, checkAmountTotal = true) {
    const coinAssets = CoinAssist.getCoinAssets(coinType, allCoins);
    if (amount === BigInt(0) && coinAssets.length === 0) {
      return _TransactionUtil.buildZeroValueCoin(allCoins, tx, coinType, buildVector);
    }
    const amountTotal = CoinAssist.calculateTotalBalance(coinAssets);
    if (checkAmountTotal && amountTotal < amount) {
      throw new ClmmpoolsError(`The amount(${amountTotal}) is Insufficient balance for ${coinType} , expect ${amount} `, "InsufficientBalance" /* InsufficientBalance */);
    }
    return _TransactionUtil.buildCoin(tx, allCoins, coinAssets, amount, coinType, buildVector, fixAmount);
  }
  static buildCoin(tx, allCoins, coinAssets, amount, coinType, buildVector = true, fixAmount = false) {
    if (CoinAssist.isSuiCoin(coinType)) {
      if (buildVector) {
        const amountCoin2 = tx.splitCoins(tx.gas, [tx.pure(amount.toString())]);
        return {
          targetCoin: tx.makeMoveVec({ objects: [amountCoin2] }),
          remainCoins: allCoins,
          tragetCoinAmount: amount.toString(),
          isMintZeroCoin: false,
          originalSplitedCoin: tx.gas
        };
      }
      if (amount === 0n && coinAssets.length > 1) {
        const selectedCoinsResult3 = CoinAssist.selectCoinObjectIdGreaterThanOrEqual(coinAssets, amount);
        return {
          targetCoin: tx.object(selectedCoinsResult3.objectArray[0]),
          remainCoins: selectedCoinsResult3.remainCoins,
          tragetCoinAmount: selectedCoinsResult3.amountArray[0],
          isMintZeroCoin: false
        };
      }
      const selectedCoinsResult2 = CoinAssist.selectCoinObjectIdGreaterThanOrEqual(coinAssets, amount);
      const amountCoin = tx.splitCoins(tx.gas, [tx.pure(amount.toString())]);
      return {
        targetCoin: amountCoin,
        remainCoins: selectedCoinsResult2.remainCoins,
        tragetCoinAmount: amount.toString(),
        isMintZeroCoin: false,
        originalSplitedCoin: tx.gas
      };
    }
    const selectedCoinsResult = CoinAssist.selectCoinObjectIdGreaterThanOrEqual(coinAssets, amount);
    const totalSelectedCoinAmount = selectedCoinsResult.amountArray.reduce((a, b) => Number(a) + Number(b), 0).toString();
    const coinObjectIds = selectedCoinsResult.objectArray;
    if (buildVector) {
      return {
        targetCoin: tx.makeMoveVec({ objects: coinObjectIds.map((id) => tx.object(id)) }),
        remainCoins: selectedCoinsResult.remainCoins,
        tragetCoinAmount: selectedCoinsResult.amountArray.reduce((a, b) => Number(a) + Number(b), 0).toString(),
        isMintZeroCoin: false
      };
    }
    const [primaryCoinA, ...mergeCoinAs] = coinObjectIds;
    const primaryCoinAObject = tx.object(primaryCoinA);
    let targetCoin = primaryCoinAObject;
    let tragetCoinAmount = selectedCoinsResult.amountArray.reduce((a, b) => Number(a) + Number(b), 0).toString();
    let originalSplitedCoin;
    if (mergeCoinAs.length > 0) {
      tx.mergeCoins(
        primaryCoinAObject,
        mergeCoinAs.map((coin) => tx.object(coin))
      );
    }
    if (fixAmount && Number(totalSelectedCoinAmount) > Number(amount)) {
      targetCoin = tx.splitCoins(primaryCoinAObject, [tx.pure(amount.toString())]);
      tragetCoinAmount = amount.toString();
      originalSplitedCoin = primaryCoinAObject;
    }
    return {
      targetCoin,
      remainCoins: selectedCoinsResult.remainCoins,
      originalSplitedCoin,
      tragetCoinAmount,
      isMintZeroCoin: false
    };
  }
  static buildZeroValueCoin(allCoins, tx, coinType, buildVector = true) {
    const zeroCoin = _TransactionUtil.callMintZeroValueCoin(tx, coinType);
    let targetCoin;
    if (buildVector) {
      targetCoin = tx.makeMoveVec({ objects: [zeroCoin] });
    } else {
      targetCoin = zeroCoin;
    }
    return {
      targetCoin,
      remainCoins: allCoins,
      isMintZeroCoin: true,
      tragetCoinAmount: "0"
    };
  }
  static buildCoinForAmountInterval(tx, allCoins, amounts, coinType, buildVector = true) {
    const coinAssets = CoinAssist.getCoinAssets(coinType, allCoins);
    if (amounts.amountFirst === BigInt(0)) {
      if (coinAssets.length > 0) {
        return _TransactionUtil.buildCoin(tx, [...allCoins], [...coinAssets], amounts.amountFirst, coinType, buildVector);
      }
      return _TransactionUtil.buildZeroValueCoin(allCoins, tx, coinType, buildVector);
    }
    const amountTotal = CoinAssist.calculateTotalBalance(coinAssets);
    if (amountTotal >= amounts.amountFirst) {
      return _TransactionUtil.buildCoin(tx, [...allCoins], [...coinAssets], amounts.amountFirst, coinType, buildVector);
    }
    if (amountTotal < amounts.amountSecond) {
      throw new ClmmpoolsError(`The amount(${amountTotal}) is Insufficient balance for ${coinType} , expect ${amounts.amountSecond} `, "InsufficientBalance" /* InsufficientBalance */);
    }
    return _TransactionUtil.buildCoin(tx, [...allCoins], [...coinAssets], amounts.amountSecond, coinType, buildVector);
  }
  // ------------------------------------------router-v1-------------------------------------------------//
  static async buildRouterSwapTransaction(sdk, params, byAmountIn, allCoinAsset, recipient) {
    let tx = new import_transactions.TransactionBlock();
    if (params.paths.length > 1) {
      params.partner = "";
    }
    tx = await this.buildRouterBasePathTx(sdk, params, byAmountIn, allCoinAsset, tx, recipient);
    return tx;
  }
  static async buildRouterBasePathTx(sdk, params, byAmountIn, allCoinAsset, tx, recipient) {
    const validPaths = params.paths.filter((path) => path && path.poolAddress);
    const inputAmount = Number(validPaths.reduce((total, path) => total.add(path.amountIn), ZERO).toString());
    const outputAmount = Number(validPaths.reduce((total, path) => total.add(path.amountOut), ZERO).toString());
    const totalAmountLimit = byAmountIn ? Math.round(Number(outputAmount.toString()) * (1 - params.priceSlippagePoint)) : Math.round(Number(inputAmount.toString()) * (1 + params.priceSlippagePoint));
    const fromCoinType = params.paths[0].coinType[0];
    const toCoinType = params.paths[0].coinType[params.paths[0].coinType.length - 1];
    const fromCoinBuildResult = _TransactionUtil.buildCoinForAmount(
      tx,
      allCoinAsset,
      byAmountIn ? BigInt(inputAmount) : BigInt(totalAmountLimit),
      fromCoinType,
      false,
      true
    );
    const isSplited = fromCoinBuildResult.originalSplitedCoin !== void 0;
    const toCoinBuildResult = _TransactionUtil.buildCoinForAmount(tx, allCoinAsset, 0n, toCoinType, false);
    const buildRouterBasePathReturnCoin = await this.buildRouterBasePathReturnCoins(
      sdk,
      params,
      byAmountIn,
      fromCoinBuildResult,
      toCoinBuildResult,
      tx
    );
    const transferedCoins = [];
    const { toCoin, fromCoin } = buildRouterBasePathReturnCoin;
    tx = buildRouterBasePathReturnCoin.tx;
    if (toCoinBuildResult.isMintZeroCoin) {
      transferedCoins.push({
        coinType: toCoinType,
        coin: toCoin
      });
    } else if (toCoinBuildResult.originalSplitedCoin !== void 0) {
      tx.mergeCoins(toCoinBuildResult.originalSplitedCoin, [toCoin]);
    } else {
      tx.mergeCoins(toCoinBuildResult.targetCoin, [toCoin]);
    }
    if (isSplited) {
      const originalSplitedFromCoin = fromCoinBuildResult?.originalSplitedCoin;
      tx.mergeCoins(originalSplitedFromCoin, [fromCoin]);
    } else {
      transferedCoins.push({
        coinType: fromCoinType,
        coin: fromCoin
      });
    }
    for (let i = 0; i < transferedCoins.length; i++) {
      this.buildTransferCoin(sdk, tx, transferedCoins[i].coin, transferedCoins[i].coinType, recipient);
    }
    return tx;
  }
  static async buildRouterBasePathReturnCoins(sdk, params, byAmountIn, fromCoinBuildRes, toCoinBuildRes, tx) {
    const { clmm_pool, integrate } = sdk.sdkOptions;
    const globalConfigID = getPackagerConfigs(clmm_pool).global_config_id;
    const validPaths = params.paths.filter((path) => path && path.poolAddress);
    const inputAmount = Number(validPaths.reduce((total, path) => total.add(path.amountIn), ZERO).toString());
    const outputAmount = Number(validPaths.reduce((total, path) => total.add(path.amountOut), ZERO).toString());
    const totalAmountLimit = byAmountIn ? Math.round(Number(outputAmount.toString()) * (1 - params.priceSlippagePoint)) : Math.round(Number(inputAmount.toString()) * (1 + params.priceSlippagePoint));
    const fromCoinType = params.paths[0].coinType[0];
    const toCoinType = params.paths[0].coinType[params.paths[0].coinType.length - 1];
    let fromCoin = fromCoinBuildRes.targetCoin;
    let toCoin;
    if (toCoinBuildRes.isMintZeroCoin || toCoinBuildRes.originalSplitedCoin !== void 0) {
      toCoin = toCoinBuildRes.targetCoin;
    } else {
      toCoin = _TransactionUtil.callMintZeroValueCoin(tx, toCoinType);
    }
    const noPartner = params.partner === "";
    const moduleName = noPartner ? ClmmIntegrateRouterModule : ClmmIntegrateRouterWithPartnerModule;
    for (const path of validPaths) {
      if (path.poolAddress.length === 1) {
        const a2b = path.a2b[0];
        const swapParams = {
          amount: Number(path.amountIn.toString()),
          amountLimit: totalAmountLimit,
          poolCoinA: path.a2b[0] ? fromCoinType : toCoinType,
          poolCoinB: path.a2b[0] ? toCoinType : fromCoinType
        };
        const functionName = noPartner ? "swap" : "swap_with_partner";
        const poolCoinA = a2b ? fromCoin : toCoin;
        const poolCoinB = a2b ? toCoin : fromCoin;
        const amount = byAmountIn ? path.amountIn.toString() : path.amountOut.toString();
        const sqrtPriceLimit = SwapUtils.getDefaultSqrtPriceLimit(a2b).toString();
        const args = noPartner ? [
          tx.object(globalConfigID),
          tx.object(path.poolAddress[0]),
          poolCoinA,
          poolCoinB,
          tx.pure(a2b),
          tx.pure(byAmountIn),
          tx.pure(amount),
          tx.pure(sqrtPriceLimit),
          tx.pure(false),
          tx.object(CLOCK_ADDRESS)
        ] : [
          tx.object(globalConfigID),
          tx.object(path.poolAddress[0]),
          tx.pure(params.partner),
          poolCoinA,
          poolCoinB,
          tx.pure(a2b),
          tx.pure(byAmountIn),
          tx.pure(amount),
          tx.pure(sqrtPriceLimit),
          tx.pure(false),
          tx.object(CLOCK_ADDRESS)
        ];
        const typeArguments = [swapParams.poolCoinA, swapParams.poolCoinB];
        const coinABs = tx.moveCall({
          target: `${sdk.sdkOptions.integrate.published_at}::${moduleName}::${functionName}`,
          typeArguments,
          arguments: args
        });
        fromCoin = a2b ? coinABs[0] : coinABs[1];
        toCoin = a2b ? coinABs[1] : coinABs[0];
      } else {
        const amount0 = byAmountIn ? path.amountIn : path.rawAmountLimit[0];
        const amount1 = byAmountIn ? 0 : path.amountOut;
        let functionName = "";
        if (path.a2b[0]) {
          if (path.a2b[1]) {
            functionName = "swap_ab_bc";
          } else {
            functionName = "swap_ab_cb";
          }
        } else if (path.a2b[1]) {
          functionName = "swap_ba_bc";
        } else {
          functionName = "swap_ba_cb";
        }
        if (!noPartner) {
          functionName = `${functionName}_with_partner`;
        }
        const sqrtPriceLimit0 = SwapUtils.getDefaultSqrtPriceLimit(path.a2b[0]);
        const sqrtPriceLimit1 = SwapUtils.getDefaultSqrtPriceLimit(path.a2b[1]);
        const args = noPartner ? [
          tx.object(globalConfigID),
          tx.object(path.poolAddress[0]),
          tx.object(path.poolAddress[1]),
          fromCoin,
          toCoin,
          tx.pure(byAmountIn),
          tx.pure(amount0.toString()),
          tx.pure(amount1.toString()),
          tx.pure(sqrtPriceLimit0.toString()),
          tx.pure(sqrtPriceLimit1.toString()),
          tx.object(CLOCK_ADDRESS)
        ] : [
          tx.object(globalConfigID),
          tx.object(path.poolAddress[0]),
          tx.object(path.poolAddress[1]),
          tx.pure(params.partner),
          fromCoin,
          toCoin,
          tx.pure(byAmountIn),
          tx.pure(amount0.toString()),
          tx.pure(amount1.toString()),
          tx.pure(sqrtPriceLimit0.toString()),
          tx.pure(sqrtPriceLimit1.toString()),
          tx.object(CLOCK_ADDRESS)
        ];
        const typeArguments = [path.coinType[0], path.coinType[1], path.coinType[2]];
        const fromToCoins = tx.moveCall({
          target: `${integrate.published_at}::${moduleName}::${functionName}`,
          typeArguments,
          arguments: args
        });
        fromCoin = fromToCoins[0];
        toCoin = fromToCoins[1];
      }
    }
    this.checkCoinThreshold(sdk, byAmountIn, tx, toCoin, totalAmountLimit, toCoinType);
    return { fromCoin, toCoin, tx };
  }
  // ------------------------------------------router-v2-------------------------------------------------//
  static async buildAggregatorSwapReturnCoins(sdk, param, fromCoinBuildRes, toCoinBuildRes, partner, priceSplitPoint, tx, recipient) {
    if (recipient == null) {
      if (sdk.senderAddress.length === 0) {
        throw Error("recipient and this config sdk senderAddress all not set");
      }
      recipient = sdk.senderAddress;
    }
    if (param.splitPaths.length > 1) {
      partner = "";
    }
    let fromCoin;
    let toCoin;
    const hasExternalPool = param.splitPaths.some((splitPath) => splitPath.basePaths.some((basePath) => basePath.label === "Deepbook"));
    if ((!param.byAmountIn || param.splitPaths.length === 1) && !hasExternalPool) {
      const onePaths = [];
      for (const splitPath of param.splitPaths) {
        const a2b = [];
        const poolAddress = [];
        const rawAmountLimit = [];
        const coinType = [];
        for (let i = 0; i < splitPath.basePaths.length; i += 1) {
          const basePath = splitPath.basePaths[i];
          a2b.push(basePath.direction);
          poolAddress.push(basePath.poolAddress);
          rawAmountLimit.push(new import_bn13.default(basePath.inputAmount.toString()));
          if (i === 0) {
            coinType.push(basePath.fromCoin, basePath.toCoin);
          } else {
            coinType.push(basePath.toCoin);
          }
        }
        const onePath = {
          amountIn: new import_bn13.default(splitPath.inputAmount.toString()),
          amountOut: new import_bn13.default(splitPath.outputAmount.toString()),
          poolAddress,
          a2b,
          rawAmountLimit,
          isExceed: false,
          coinType
        };
        onePaths.push(onePath);
      }
      const params = {
        paths: onePaths,
        partner,
        priceSlippagePoint: priceSplitPoint
      };
      const buildRouterBasePathReturnCoinRes = await this.buildRouterBasePathReturnCoins(
        sdk,
        params,
        param.byAmountIn,
        fromCoinBuildRes,
        toCoinBuildRes,
        tx
      );
      fromCoin = buildRouterBasePathReturnCoinRes.fromCoin;
      toCoin = buildRouterBasePathReturnCoinRes.toCoin;
      tx = buildRouterBasePathReturnCoinRes.tx;
    } else {
      const amountLimit = Math.round(param.outputAmount * (1 - priceSplitPoint));
      fromCoin = fromCoinBuildRes.targetCoin;
      if (toCoinBuildRes.isMintZeroCoin || toCoinBuildRes.originalSplitedCoin !== void 0) {
        toCoin = toCoinBuildRes.targetCoin;
      } else {
        toCoin = _TransactionUtil.callMintZeroValueCoin(tx, param.toCoin);
      }
      let isCreateAccountCap = false;
      let accountCap;
      if (hasExternalPool) {
        const [cap, createAccountCapTX] = DeepbookUtils.createAccountCap(recipient, sdk.sdkOptions, tx);
        tx = createAccountCapTX;
        accountCap = cap;
        isCreateAccountCap = true;
      }
      for (let i = 0; i < param.splitPaths.length; i += 1) {
        const splitPath = param.splitPaths[i];
        let middleCoin;
        for (let i2 = 0; i2 < splitPath.basePaths.length; i2 += 1) {
          const basePath = splitPath.basePaths[i2];
          if (basePath.label === "Deepbook") {
            if (i2 === 0) {
              if (splitPath.basePaths.length === 1) {
                const deepbookTxBuild = this.buildDeepbookBasePathTx(sdk, basePath, tx, accountCap, fromCoin, toCoin, false);
                fromCoin = deepbookTxBuild.from;
                toCoin = deepbookTxBuild.to;
              } else {
                middleCoin = _TransactionUtil.callMintZeroValueCoin(tx, basePath.toCoin);
                const deepbookTxBuild = this.buildDeepbookBasePathTx(sdk, basePath, tx, accountCap, fromCoin, middleCoin, false);
                fromCoin = deepbookTxBuild.from;
                middleCoin = deepbookTxBuild.to;
              }
            } else {
              const deepbookTxBuild = this.buildDeepbookBasePathTx(sdk, basePath, tx, accountCap, middleCoin, toCoin, true);
              middleCoin = deepbookTxBuild.from;
              toCoin = deepbookTxBuild.to;
            }
          }
          if (basePath.label === "Cetus") {
            if (i2 === 0) {
              if (splitPath.basePaths.length === 1) {
                const clmmTxBuild = this.buildClmmBasePathTx(sdk, basePath, tx, param.byAmountIn, fromCoin, toCoin, false, partner);
                fromCoin = clmmTxBuild.from;
                toCoin = clmmTxBuild.to;
              } else {
                middleCoin = _TransactionUtil.callMintZeroValueCoin(tx, basePath.toCoin);
                const clmmTxBuild = this.buildClmmBasePathTx(sdk, basePath, tx, param.byAmountIn, fromCoin, middleCoin, false, partner);
                fromCoin = clmmTxBuild.from;
                middleCoin = clmmTxBuild.to;
              }
            } else {
              const clmmTxBuild = this.buildClmmBasePathTx(sdk, basePath, tx, param.byAmountIn, middleCoin, toCoin, true, partner);
              middleCoin = clmmTxBuild.from;
              toCoin = clmmTxBuild.to;
              tx.moveCall({
                target: `${sdk.sdkOptions.integrate.published_at}::${ClmmIntegrateUtilsModule}::send_coin`,
                typeArguments: [basePath.fromCoin],
                arguments: [middleCoin, tx.pure(recipient)]
              });
            }
          }
        }
      }
      this.checkCoinThreshold(sdk, param.byAmountIn, tx, toCoin, amountLimit, param.toCoin);
      if (isCreateAccountCap) {
        tx = DeepbookUtils.deleteAccountCapByObject(accountCap, sdk.sdkOptions, tx);
      }
    }
    return { fromCoin, toCoin, tx };
  }
  static async buildAggregatorSwapTransaction(sdk, param, allCoinAsset, partner, priceSlippagePoint, recipient) {
    let tx = new import_transactions.TransactionBlock();
    const amountLimit = param.byAmountIn ? Math.round(param.outputAmount * (1 - priceSlippagePoint)) : Math.round(param.inputAmount * (1 + priceSlippagePoint));
    const fromCoinBuildResult = _TransactionUtil.buildCoinForAmount(
      tx,
      allCoinAsset,
      param.byAmountIn ? BigInt(param.inputAmount) : BigInt(amountLimit),
      param.fromCoin,
      false,
      true
    );
    const isSplited = fromCoinBuildResult.originalSplitedCoin != null;
    const toCoinBuildResult = _TransactionUtil.buildCoinForAmount(tx, allCoinAsset, 0n, param.toCoin, false);
    const buildAggregatorSwapReturnCoinsRes = await this.buildAggregatorSwapReturnCoins(
      sdk,
      param,
      fromCoinBuildResult,
      toCoinBuildResult,
      partner,
      priceSlippagePoint,
      tx,
      recipient
    );
    const { fromCoin, toCoin } = buildAggregatorSwapReturnCoinsRes;
    tx = buildAggregatorSwapReturnCoinsRes.tx;
    const transferedCoins = [];
    if (toCoinBuildResult.isMintZeroCoin) {
      transferedCoins.push({
        coinType: param.toCoin,
        coin: toCoin
      });
    } else if (toCoinBuildResult.originalSplitedCoin != null) {
      tx.mergeCoins(toCoinBuildResult.originalSplitedCoin, [toCoin]);
    } else {
      tx.mergeCoins(toCoinBuildResult.targetCoin, [toCoin]);
    }
    if (isSplited) {
      const originalSplitedFromCoin = fromCoinBuildResult.originalSplitedCoin;
      tx.mergeCoins(originalSplitedFromCoin, [fromCoin]);
    } else {
      transferedCoins.push({
        coinType: param.fromCoin,
        coin: fromCoin
      });
    }
    for (let i = 0; i < transferedCoins.length; i++) {
      this.buildTransferCoin(sdk, tx, transferedCoins[i].coin, transferedCoins[i].coinType, recipient);
    }
    return tx;
  }
  static checkCoinThreshold(sdk, byAmountIn, tx, coin, amountLimit, coinType) {
    if (byAmountIn) {
      tx.moveCall({
        target: `${sdk.sdkOptions.integrate.published_at}::${ClmmIntegrateRouterModule}::check_coin_threshold`,
        typeArguments: [coinType],
        arguments: [coin, tx.pure(amountLimit)]
      });
    }
  }
  static buildDeepbookBasePathTx(sdk, basePath, tx, accountCap, from, to, middleStep) {
    const base = basePath.direction ? from : to;
    const quote = basePath.direction ? to : from;
    const args = [
      tx.object(basePath.poolAddress),
      accountCap,
      tx.pure(basePath.inputAmount),
      tx.pure(0),
      tx.pure(basePath.direction),
      base,
      quote,
      tx.pure(middleStep),
      tx.object(CLOCK_ADDRESS)
    ];
    const typeArguments = basePath.direction ? [basePath.fromCoin, basePath.toCoin] : [basePath.toCoin, basePath.fromCoin];
    const coinAB = tx.moveCall({
      target: `${sdk.sdkOptions.deepbook_endpoint_v2.published_at}::endpoints_v2::swap`,
      typeArguments,
      arguments: args
    });
    from = basePath.direction ? coinAB[0] : coinAB[1];
    to = basePath.direction ? coinAB[1] : coinAB[0];
    return {
      from,
      to,
      tx
    };
  }
  static buildClmmBasePathTx(sdk, basePath, tx, byAmountIn, from, to, middleStep, partner) {
    const { clmm_pool, integrate } = sdk.sdkOptions;
    const globalConfigID = getPackagerConfigs(clmm_pool).global_config_id;
    let coinA = basePath.direction ? from : to;
    let coinB = basePath.direction ? to : from;
    const noPartner = partner === "";
    const moduleName = noPartner ? ClmmIntegrateRouterModule : ClmmIntegrateRouterWithPartnerModule;
    const functionName = noPartner ? "swap" : "swap_with_partner";
    const amount = byAmountIn ? basePath.inputAmount.toString() : basePath.outputAmount.toString();
    const sqrtPriceLimit = SwapUtils.getDefaultSqrtPriceLimit(basePath.direction);
    const args = noPartner ? [
      tx.object(globalConfigID),
      tx.object(basePath.poolAddress),
      coinA,
      coinB,
      tx.pure(basePath.direction),
      tx.pure(byAmountIn),
      tx.pure(amount),
      tx.pure(sqrtPriceLimit.toString()),
      tx.pure(middleStep),
      tx.object(CLOCK_ADDRESS)
    ] : [
      tx.object(globalConfigID),
      tx.object(basePath.poolAddress),
      tx.pure(partner),
      coinA,
      coinB,
      tx.pure(basePath.direction),
      tx.pure(byAmountIn),
      tx.pure(amount),
      tx.pure(sqrtPriceLimit.toString()),
      tx.pure(middleStep),
      tx.object(CLOCK_ADDRESS)
    ];
    const typeArguments = basePath.direction ? [basePath.fromCoin, basePath.toCoin] : [basePath.toCoin, basePath.fromCoin];
    const coinAB = tx.moveCall({
      target: `${integrate.published_at}::${moduleName}::${functionName}`,
      typeArguments,
      arguments: args
    });
    coinA = coinAB[0];
    coinB = coinAB[1];
    from = basePath.direction ? coinA : coinB;
    to = basePath.direction ? coinB : coinA;
    return {
      from,
      to,
      tx
    };
  }
  static buildCoinTypePair(coinTypes, partitionQuantities) {
    const coinTypePair = [];
    if (coinTypes.length === 2) {
      const pair = [];
      pair.push(coinTypes[0], coinTypes[1]);
      coinTypePair.push(pair);
    } else {
      const directPair = [];
      directPair.push(coinTypes[0], coinTypes[coinTypes.length - 1]);
      coinTypePair.push(directPair);
      for (let i = 1; i < coinTypes.length - 1; i += 1) {
        if (partitionQuantities[i - 1] === 0) {
          continue;
        }
        const pair = [];
        pair.push(coinTypes[0], coinTypes[i], coinTypes[coinTypes.length - 1]);
        coinTypePair.push(pair);
      }
    }
    return coinTypePair;
  }
  // ------------------------------------------utils-------------------------------------------------//
  static buildTransferCoinToSender(sdk, tx, coin, coinType) {
    tx.moveCall({
      target: `${sdk.sdkOptions.integrate.published_at}::${ClmmIntegrateUtilsModule}::transfer_coin_to_sender`,
      typeArguments: [coinType],
      arguments: [coin]
    });
  }
  // If recipient not set, transfer objects move call will use ctx sender
  static buildTransferCoin(sdk, tx, coin, coinType, recipient) {
    if (recipient != null) {
      tx.transferObjects([coin], tx.pure(recipient));
    } else {
      _TransactionUtil.buildTransferCoinToSender(sdk, tx, coin, coinType);
    }
  }
};
var TransactionUtil = _TransactionUtil;
__publicField(TransactionUtil, "callMintZeroValueCoin", (txb, coinType) => {
  return txb.moveCall({
    target: "0x2::coin::zero",
    typeArguments: [coinType]
  });
});

// src/utils/tx-block.ts
var import_utils13 = require("@mysten/sui.js/utils");
var import_transactions2 = require("@mysten/sui.js/transactions");
var TxBlock = class {
  txBlock;
  constructor() {
    this.txBlock = new import_transactions2.TransactionBlock();
  }
  /**
   * Transfer sui to many recipoents.
   * @param {string[]}recipients The recipient addresses.
   * @param {number[]}amounts The amounts of sui coins to be transferred.
   * @returns this
   */
  transferSuiToMany(recipients, amounts) {
    if (recipients.length !== amounts.length) {
      throw new ClmmpoolsError("The length of recipients and amounts must be the same", "InvalidRecipientAndAmountLength" /* InvalidRecipientAndAmountLength */);
    }
    for (const recipient of recipients) {
      if (!checkInvalidSuiAddress(recipient) === false) {
        throw new ClmmpoolsError("Invalid recipient address", "InvalidRecipientAddress" /* InvalidRecipientAddress */);
      }
    }
    const tx = this.txBlock;
    const coins = tx.splitCoins(
      tx.gas,
      amounts.map((amount) => tx.pure(amount))
    );
    recipients.forEach((recipient, index) => {
      tx.transferObjects([coins[index]], tx.pure(recipient));
    });
    return this;
  }
  /**
   * Transfer sui to one recipient.
   * @param {string}recipient recipient cannot be empty or invalid sui address.
   * @param {number}amount
   * @returns this
   */
  transferSui(recipient, amount) {
    if (!checkInvalidSuiAddress(recipient) === false) {
      throw new ClmmpoolsError("Invalid recipient address", "InvalidRecipientAddress" /* InvalidRecipientAddress */);
    }
    return this.transferSuiToMany([recipient], [amount]);
  }
  /**
   * Transfer coin to many recipients.
   * @param {string}recipient recipient cannot be empty or invalid sui address.
   * @param {number}amount amount cannot be empty or invalid sui address.
   * @param {string[]}coinObjectIds object ids of coins to be transferred.
   * @returns this
   * @deprecated use transferAndDestoryZeroCoin instead
   */
  transferCoin(recipient, amount, coinObjectIds) {
    if (!checkInvalidSuiAddress(recipient) === false) {
      throw new ClmmpoolsError("Invalid recipient address", "InvalidRecipientAddress" /* InvalidRecipientAddress */);
    }
    const tx = this.txBlock;
    const [primaryCoinA, ...mergeCoinAs] = coinObjectIds;
    const primaryCoinAInput = tx.object(primaryCoinA);
    if (mergeCoinAs.length > 0) {
      tx.mergeCoins(
        primaryCoinAInput,
        mergeCoinAs.map((coin) => tx.object(coin))
      );
    }
    const spitAmount = tx.splitCoins(primaryCoinAInput, [tx.pure(amount)]);
    tx.transferObjects([spitAmount], tx.pure(recipient));
    return this;
  }
  /**
   * Transfer objects to many recipients.
   * @param {SuiTxArg[]}objects The objects to be transferred.
   * @param {string}recipient The recipient address.
   * @returns 
   */
  transferObjects(objects, recipient) {
    if (!checkInvalidSuiAddress(recipient) === false) {
      throw new ClmmpoolsError("Invalid recipient address", "InvalidRecipientAddress" /* InvalidRecipientAddress */);
    }
    const tx = this.txBlock;
    tx.transferObjects(this.convertArgs(objects), tx.pure(recipient));
    return this;
  }
  /**
   * @description Move call
   * @param {string}target `${string}::${string}::${string}`, e.g. `0x3::sui_system::request_add_stake`
   * @param {string[]}typeArguments the type arguments of the move call, such as `['0x2::sui::SUI']`
   * @param {any[]}args the arguments of the move call, such as `['0x1', '0x2']`
   * @returns {TransactionResult}
   */
  moveCall(target, typeArguments = [], args = []) {
    const regex = /(?<package>[a-zA-Z0-9]+)::(?<module>[a-zA-Z0-9_]+)::(?<function>[a-zA-Z0-9_]+)/;
    const match = target.match(regex);
    if (match === null)
      throw new ClmmpoolsError("Invalid target format. Expected `${string}::${string}::${string}`", "InvalidTarget" /* InvalidTarget */);
    const convertedArgs = this.convertArgs(args);
    const tx = this.txBlock;
    return tx.moveCall({
      target,
      arguments: convertedArgs,
      typeArguments
    });
  }
  /**
   * Create pure address arguments
   * @param {string}value 
   * @returns 
   */
  address(value) {
    return this.txBlock.pure(value);
  }
  /**
   * Create pure arguments
   * @param {any}value 
   * @returns 
   */
  pure(value) {
    return this.txBlock.pure(value);
  }
  /**
   * Create object arguments
   * @param {string}value 
   * @returns 
   */
  object(value) {
    return this.txBlock.object(value);
  }
  /**
   * Create move vec arguments
   * @param {number}gasBudget 
   * @returns 
   */
  setGasBudget(gasBudget) {
    this.txBlock.setGasBudget(gasBudget);
  }
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
  makeMoveVec(args, type) {
    if (args.length === 0)
      throw new ClmmpoolsError("Transaction builder error: Empty array is not allowed", "InvalidTransactionBuilder" /* InvalidTransactionBuilder */);
    if (type === "object" && args.some((arg) => typeof arg !== "string")) {
      throw new ClmmpoolsError("Transaction builder error: Object id must be string", "InvalidTransactionBuilder" /* InvalidTransactionBuilder */);
    }
    const defaultSuiType = getDefaultSuiInputType(args[0]);
    if (type === "object" || defaultSuiType === "object") {
      return this.txBlock.makeMoveVec({
        objects: args.map((arg) => this.txBlock.object((0, import_utils13.normalizeSuiObjectId)(arg)))
      });
    }
    return this.txBlock.makeMoveVec({
      objects: args.map((arg) => this.txBlock.pure(arg))
    });
  }
  convertArgs(args) {
    return args.map((arg) => {
      if (typeof arg === "string" && arg.startsWith("0x")) {
        return this.txBlock.object((0, import_utils13.normalizeSuiObjectId)(arg));
      }
      if (typeof arg !== "object") {
        return this.txBlock.pure(arg);
      }
      if (Array.isArray(arg)) {
        return this.makeMoveVec(arg);
      }
      return arg;
    });
  }
};
function checkInvalidSuiAddress(address) {
  if (!address.startsWith("0x") || address.length !== 66) {
    return false;
  } else {
    return true;
  }
}

// src/utils/deepbook-utils.ts
var import_bn14 = __toESM(require("bn.js"));
var import_transactions3 = require("@mysten/sui.js/transactions");
var FLOAT_SCALING = new import_bn14.default(1e9);
var DeepbookUtils = class {
  static createAccountCap(senderAddress, sdkOptions, tx, isTransfer = false) {
    if (senderAddress.length === 0) {
      throw Error("this config sdk senderAddress is empty");
    }
    const { deepbook } = sdkOptions;
    const [cap] = tx.moveCall({
      target: `${deepbook.published_at}::${DeepbookClobV2Moudle}::create_account`,
      typeArguments: [],
      arguments: []
    });
    if (isTransfer) {
      tx.transferObjects([cap], tx.pure(senderAddress));
    }
    return [cap, tx];
  }
  static deleteAccountCap(accountCap, sdkOptions, tx) {
    const { deepbook } = sdkOptions;
    const args = [tx.pure(accountCap)];
    tx.moveCall({
      target: `${deepbook.published_at}::${DeepbookCustodianV2Moudle}::delete_account_cap`,
      typeArguments: [],
      arguments: args
    });
    return tx;
  }
  static deleteAccountCapByObject(accountCap, sdkOptions, tx) {
    const { deepbook } = sdkOptions;
    const args = [accountCap];
    tx.moveCall({
      target: `${deepbook.published_at}::${DeepbookCustodianV2Moudle}::delete_account_cap`,
      typeArguments: [],
      arguments: args
    });
    return tx;
  }
  static async getAccountCap(sdk) {
    const ownerRes = await sdk.fullClient.getOwnedObjectsByPage(sdk.senderAddress, {
      options: { showType: true, showContent: true, showDisplay: true, showOwner: true },
      filter: {
        MoveModule: {
          package: sdk.sdkOptions.deepbook.package_id,
          module: DeepbookCustodianV2Moudle
        }
      }
    });
    if (ownerRes.data.length === 0) {
      return "";
    }
    const accountCap = ownerRes.data[0].data.objectId;
    return accountCap;
  }
  static async getPools(sdk) {
    const deepbook = sdk.sdkOptions.deepbook.package_id;
    const allPools = [];
    try {
      const objects = await sdk.fullClient.queryEventsByPage({ MoveEventType: `${deepbook}::clob_v2::PoolCreated` });
      objects.data.forEach((object) => {
        const fields = object.parsedJson;
        if (fields) {
          allPools.push({
            poolID: fields.pool_id,
            tickSize: Number(fields.tick_size),
            lotSize: Number(fields.lot_size),
            takerFeeRate: Number(fields.taker_fee_rate),
            makerRebateRate: Number(fields.maker_rebate_rate),
            baseAsset: fields.base_asset.name,
            quoteAsset: fields.quote_asset.name
          });
        }
      });
    } catch (error) {
      console.log("getPoolImmutables", error);
    }
    return allPools;
  }
  static async getPoolAsks(sdk, poolAddress, baseCoin, quoteCoin) {
    const { simulationAccount } = sdk.sdkOptions;
    const { deepbook_endpoint_v2 } = sdk.sdkOptions;
    const tx = new import_transactions3.TransactionBlock();
    const asks = [];
    const typeArguments = [baseCoin, quoteCoin];
    const args = [tx.pure(poolAddress), tx.pure("0"), tx.pure("999999999999"), tx.pure(CLOCK_ADDRESS)];
    tx.moveCall({
      target: `${deepbook_endpoint_v2.published_at}::endpoints_v2::get_level2_book_status_ask_side`,
      arguments: args,
      typeArguments
    });
    const simulateRes = await sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `BookStatus`;
    });
    if (valueData.length === 0) {
      return asks;
    }
    for (let i = 0; i < valueData[0].parsedJson.depths.length; i++) {
      const price = valueData[0].parsedJson.price[i];
      const depth = valueData[0].parsedJson.depths[i];
      const ask = {
        price: parseInt(price, 10),
        quantity: parseInt(depth, 10)
      };
      asks.push(ask);
    }
    return asks;
  }
  static async getPoolBids(sdk, poolAddress, baseCoin, quoteCoin) {
    const { simulationAccount } = sdk.sdkOptions;
    const { deepbook_endpoint_v2 } = sdk.sdkOptions;
    const tx = new import_transactions3.TransactionBlock();
    const bids = [];
    const typeArguments = [baseCoin, quoteCoin];
    const args = [tx.pure(poolAddress), tx.pure("0"), tx.pure("999999999999"), tx.pure(CLOCK_ADDRESS)];
    tx.moveCall({
      target: `${deepbook_endpoint_v2.published_at}::endpoints_v2::get_level2_book_status_bid_side`,
      arguments: args,
      typeArguments
    });
    const simulateRes = await sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `BookStatus`;
    });
    if (valueData.length === 0) {
      return bids;
    }
    for (let i = 0; i < valueData[0].parsedJson.depths.length; i++) {
      const price = valueData[0].parsedJson.price[i];
      const depth = valueData[0].parsedJson.depths[i];
      const bid = {
        price: parseInt(price, 10),
        quantity: parseInt(depth, 10)
      };
      bids.push(bid);
    }
    return bids;
  }
  static async preSwap(sdk, pool, a2b, amountIn) {
    let isExceed = false;
    let amountOut = ZERO;
    let remainAmount = new import_bn14.default(amountIn);
    let feeAmount = ZERO;
    const initAmountIn = new import_bn14.default(amountIn);
    if (a2b) {
      let bids = await this.getPoolBids(sdk, pool.poolID, pool.baseAsset, pool.quoteAsset);
      if (bids === null) {
        isExceed = true;
      }
      bids = bids.sort((a, b) => {
        return b.price - a.price;
      });
      for (let i = 0; i < bids.length; i += 1) {
        const curBidAmount = new import_bn14.default(bids[i].quantity);
        const curBidPrice = new import_bn14.default(bids[i].price);
        const fee = curBidAmount.mul(new import_bn14.default(curBidPrice)).mul(new import_bn14.default(pool.takerFeeRate)).div(FLOAT_SCALING).div(FLOAT_SCALING);
        if (remainAmount.gt(curBidAmount)) {
          remainAmount = remainAmount.sub(curBidAmount);
          amountOut = amountOut.add(curBidAmount.mul(curBidPrice).div(FLOAT_SCALING).sub(fee));
          feeAmount = feeAmount.add(fee);
        } else {
          const curOut = remainAmount.mul(new import_bn14.default(bids[i].price)).div(FLOAT_SCALING);
          const curFee = curOut.mul(new import_bn14.default(pool.takerFeeRate)).div(FLOAT_SCALING);
          amountOut = amountOut.add(curOut.sub(curFee));
          remainAmount = remainAmount.sub(remainAmount);
          feeAmount = feeAmount.add(curFee);
        }
        if (remainAmount.eq(ZERO)) {
          break;
        }
      }
    } else {
      const asks = await this.getPoolAsks(sdk, pool.poolID, pool.baseAsset, pool.quoteAsset);
      if (asks === null) {
        isExceed = true;
      }
      for (let i = 0; i < asks.length; i += 1) {
        const curAskAmount = new import_bn14.default(asks[i].price).mul(new import_bn14.default(asks[i].quantity)).div(new import_bn14.default(1e9));
        const fee = curAskAmount.mul(new import_bn14.default(pool.takerFeeRate)).div(FLOAT_SCALING);
        const curAskAmountWithFee = curAskAmount.add(fee);
        if (remainAmount.gt(curAskAmount)) {
          amountOut = amountOut.add(new import_bn14.default(asks[i].quantity));
          remainAmount = remainAmount.sub(curAskAmountWithFee);
          feeAmount = feeAmount.add(fee);
        } else {
          const splitNums = new import_bn14.default(asks[i].quantity).div(new import_bn14.default(pool.lotSize));
          const splitAmount = curAskAmountWithFee.div(splitNums);
          const swapSplitNum = remainAmount.div(splitAmount);
          amountOut = amountOut.add(swapSplitNum.muln(pool.lotSize));
          remainAmount = remainAmount.sub(swapSplitNum.mul(splitAmount));
          feeAmount = feeAmount.add(swapSplitNum.div(splitNums).mul(fee));
        }
        if (remainAmount.eq(ZERO)) {
          break;
        }
      }
    }
    return {
      poolAddress: pool.poolID,
      // currentSqrtPrice: current_sqrt_price,
      estimatedAmountIn: initAmountIn.sub(remainAmount).toNumber(),
      estimatedAmountOut: amountOut.toNumber(),
      // estimatedEndSqrtPrice: target_sqrt_price,
      estimatedFeeAmount: feeAmount,
      isExceed,
      amount: Number(amountIn),
      aToB: a2b,
      byAmountIn: true
    };
  }
  static async simulateSwap(sdk, poolID, baseCoin, quoteCoin, a2b, amount) {
    const { deepbook_endpoint_v2 } = sdk.sdkOptions;
    let tx = new import_transactions3.TransactionBlock();
    const accountCapStr = await this.getAccountCap(sdk);
    let accountCap;
    if (accountCapStr === "") {
      const getAccoutCapResult = this.createAccountCap(sdk.senderAddress, sdk.sdkOptions, tx);
      const cap = getAccoutCapResult[0];
      tx = getAccoutCapResult[1];
      accountCap = cap;
    } else {
      accountCap = tx.pure(accountCapStr);
    }
    const allCoins = await sdk.getOwnerCoinAssets(sdk.senderAddress);
    const primaryBaseInput = TransactionUtil.buildCoinForAmount(tx, allCoins, BigInt(amount), baseCoin, false);
    const baseAsset = primaryBaseInput?.targetCoin;
    const primaryQuoteInput = TransactionUtil.buildCoinForAmount(tx, allCoins, BigInt(amount), quoteCoin, false);
    const quoteAsset = primaryQuoteInput?.targetCoin;
    const typeArguments = [baseCoin, quoteCoin];
    const args = [
      tx.pure(poolID),
      accountCap,
      tx.pure(amount),
      tx.pure(0),
      tx.pure(a2b),
      baseAsset,
      quoteAsset,
      tx.pure(CLOCK_ADDRESS)
    ];
    tx.moveCall({
      target: `${deepbook_endpoint_v2.published_at}::${DeepbookEndpointsV2Moudle}::swap`,
      arguments: args,
      typeArguments
    });
    const { simulationAccount } = sdk.sdkOptions;
    const simulateRes = await sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `DeepbookSwapEvent`;
    });
    if (valueData.length === 0) {
      return null;
    }
    const params = valueData[0].parsedJson;
    return {
      poolAddress: params.pool,
      estimatedAmountIn: params.amount_in,
      estimatedAmountOut: params.amount_out,
      aToB: params.atob
    };
  }
};

// src/modules/poolModule.ts
var PoolModule = class {
  _sdk;
  _cache = {};
  constructor(sdk) {
    this._sdk = sdk;
  }
  get sdk() {
    return this._sdk;
  }
  /**
   * Gets a list of positions for the given positionHandle.
   * @param {string} positionHandle The handle for the position.
   * @returns {DataPage<Position>} A promise that resolves to an array of Position objects.
   */
  async getPositionList(positionHandle, paginationArgs = "all") {
    const dataPage = {
      data: [],
      hasNextPage: true
    };
    const objects = await this._sdk.fullClient.getDynamicFieldsByPage(positionHandle, paginationArgs);
    dataPage.hasNextPage = objects.hasNextPage;
    dataPage.nextCursor = objects.nextCursor;
    const positionObjectIDs = objects.data.map((item) => {
      if (item.error != null || item.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`when getPositionList get position objects error: ${item.error}, please check the rpc, contracts address config and position id.`, "InvalidConfig" /* InvalidConfig */);
      }
      return item.name.value;
    });
    const allPosition = await this._sdk.Position.getSipmlePositionList(positionObjectIDs);
    dataPage.data = allPosition;
    return dataPage;
  }
  /**
   * Gets a list of pool immutables.
   * @param {string[]} assignPoolIDs An array of pool IDs to get.
   * @param {number} offset The offset to start at.
   * @param {number} limit The number of pools to get.
   * @param {boolean} forceRefresh Whether to force a refresh of the cache.
   * @returns {Promise<PoolImmutables[]>} array of PoolImmutable objects.
   */
  async getPoolImmutables(assignPoolIDs = [], offset = 0, limit = 100, forceRefresh = false) {
    const { package_id } = this._sdk.sdkOptions.clmm_pool;
    const cacheKey = `${package_id}_getInitPoolEvent`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    const allPools = [];
    const filterPools = [];
    if (cacheData !== void 0) {
      allPools.push(...cacheData);
    }
    if (allPools.length === 0) {
      try {
        const objects = await this._sdk.fullClient.queryEventsByPage({ MoveEventType: `${package_id}::factory::CreatePoolEvent` });
        objects.data.forEach((object) => {
          const fields = object.parsedJson;
          if (fields) {
            allPools.push({
              poolAddress: fields.pool_id,
              tickSpacing: fields.tick_spacing,
              coinTypeA: extractStructTagFromType(fields.coin_type_a).full_address,
              coinTypeB: extractStructTagFromType(fields.coin_type_b).full_address
            });
          }
        });
        this.updateCache(cacheKey, allPools, cacheTime24h);
      } catch (error) {
        console.log("getPoolImmutables", error);
      }
    }
    const hasAssignPools = assignPoolIDs.length > 0;
    for (let index = 0; index < allPools.length; index += 1) {
      const item = allPools[index];
      if (hasAssignPools && !assignPoolIDs.includes(item.poolAddress))
        continue;
      if (!hasAssignPools && (index < offset || index >= offset + limit))
        continue;
      filterPools.push(item);
    }
    return filterPools;
  }
  /**
   * Gets a list of pools.
   * @param {string[]} assignPools An array of pool IDs to get.
   * @param {number} offset The offset to start at.
   * @param {number} limit The number of pools to get.
   * @returns {Promise<Pool[]>} array of Pool objects.
   */
  async getPools(assignPools = [], offset = 0, limit = 100) {
    const allPool = [];
    let poolObjectIds = [];
    if (assignPools.length > 0) {
      poolObjectIds = [...assignPools];
    } else {
      const poolImmutables = await this.getPoolImmutables([], offset, limit, false);
      poolImmutables.forEach((item) => poolObjectIds.push(item.poolAddress));
    }
    const objectDataResponses = await this._sdk.fullClient.batchGetObjects(poolObjectIds, {
      showContent: true,
      showType: true
    });
    for (const suiObj of objectDataResponses) {
      if (suiObj.error != null || suiObj.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`getPools error code: ${suiObj.error?.code ?? "unknown error"}, please check config and object ids`, "InvalidPoolObject" /* InvalidPoolObject */);
      }
      const pool = buildPool(suiObj);
      allPool.push(pool);
      const cacheKey = `${pool.poolAddress}_getPoolObject`;
      this.updateCache(cacheKey, pool, cacheTime24h);
    }
    return allPool;
  }
  /**
   * Gets a list of pool immutables.
   * @param {PaginationArgs} paginationArgs The cursor and limit to start at.
   * @returns {Promise<DataPage<PoolImmutables>>} Array of PoolImmutable objects.
   */
  async getPoolImmutablesWithPage(paginationArgs = "all", forceRefresh = false) {
    const { package_id } = this._sdk.sdkOptions.clmm_pool;
    const allPools = [];
    const dataPage = {
      data: [],
      hasNextPage: false
    };
    const queryAll = paginationArgs === "all";
    const cacheAllKey = `${package_id}_getPoolImmutables`;
    if (queryAll) {
      const cacheDate = this.getCache(cacheAllKey, forceRefresh);
      if (cacheDate) {
        allPools.push(...cacheDate);
      }
    }
    if (allPools.length === 0) {
      try {
        const moveEventType = `${package_id}::factory::CreatePoolEvent`;
        const objects = await this._sdk.fullClient.queryEventsByPage({ MoveEventType: moveEventType }, paginationArgs);
        dataPage.hasNextPage = objects.hasNextPage;
        dataPage.nextCursor = objects.nextCursor;
        objects.data.forEach((object) => {
          const fields = object.parsedJson;
          if (fields) {
            const poolImmutables = {
              poolAddress: fields.pool_id,
              tickSpacing: fields.tick_spacing,
              coinTypeA: extractStructTagFromType(fields.coin_type_a).full_address,
              coinTypeB: extractStructTagFromType(fields.coin_type_b).full_address
            };
            allPools.push(poolImmutables);
          }
        });
      } catch (error) {
        console.log("getPoolImmutables", error);
      }
    }
    dataPage.data = allPools;
    if (queryAll) {
      this.updateCache(`${package_id}_getPoolImmutables`, allPools, cacheTime24h);
    }
    return dataPage;
  }
  /**
   * Gets a list of pools.
   * @param {string[]} assignPools An array of pool IDs to get.
   * @returns {Promise<Pool[]>} An array of Pool objects.
   */
  async getPoolsWithPage(assignPools = []) {
    const allPool = [];
    let poolObjectIds = [];
    if (assignPools.length > 0) {
      poolObjectIds = [...assignPools];
    } else {
      const poolImmutables = (await this.getPoolImmutablesWithPage()).data;
      poolImmutables.forEach((item) => poolObjectIds.push(item.poolAddress));
    }
    const objectDataResponses = await this._sdk.fullClient.batchGetObjects(poolObjectIds, {
      showContent: true,
      showType: true
    });
    for (const suiObj of objectDataResponses) {
      if (suiObj.error != null || suiObj.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`getPoolWithPages error code: ${suiObj.error?.code ?? "unknown error"}, please check config and object ids`, "InvalidPoolObject" /* InvalidPoolObject */);
      }
      const pool = buildPool(suiObj);
      allPool.push(pool);
      const cacheKey = `${pool.poolAddress}_getPoolObject`;
      this.updateCache(cacheKey, pool, cacheTime24h);
    }
    return allPool;
  }
  /**
   * Gets a pool by its object ID.
   * @param {string} poolID The object ID of the pool to get.
   * @param {true} forceRefresh Whether to force a refresh of the cache.
   * @returns {Promise<Pool>} A promise that resolves to a Pool object.
   */
  async getPool(poolID, forceRefresh = true) {
    const cacheKey = `${poolID}_getPoolObject`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData !== void 0) {
      return cacheData;
    }
    const object = await this._sdk.fullClient.getObject({
      id: poolID,
      options: {
        showType: true,
        showContent: true
      }
    });
    if (object.error != null || object.data?.content?.dataType !== "moveObject") {
      throw new ClmmpoolsError(`getPool error code: ${object.error?.code ?? "unknown error"}, please check config and object id`, "InvalidPoolObject" /* InvalidPoolObject */);
    }
    const pool = buildPool(object);
    this.updateCache(cacheKey, pool);
    return pool;
  }
  /**
   * Creates a transaction payload for creating multiple pools.
   * @param {CreatePoolParams[]} paramss The parameters for the pools.
   * @returns {Promise<TransactionBlock>} A promise that resolves to the transaction payload.
   */
  async creatPoolsTransactionPayload(paramss) {
    for (const params of paramss) {
      if (isSortedSymbols((0, import_utils14.normalizeSuiAddress)(params.coinTypeA), (0, import_utils14.normalizeSuiAddress)(params.coinTypeB))) {
        const swpaCoinTypeB = params.coinTypeB;
        params.coinTypeB = params.coinTypeA;
        params.coinTypeA = swpaCoinTypeB;
      }
    }
    const payload = await this.creatPool(paramss);
    return payload;
  }
  /**
   * Create a pool of clmmpool protocol. The pool is identified by (CoinTypeA, CoinTypeB, tick_spacing).
   * @param {CreatePoolParams | CreatePoolAddLiquidityParams} params
   * @returns {Promise<TransactionBlock>}
   */
  async creatPoolTransactionPayload(params) {
    if (isSortedSymbols((0, import_utils14.normalizeSuiAddress)(params.coinTypeA), (0, import_utils14.normalizeSuiAddress)(params.coinTypeB))) {
      const swpaCoinTypeB = params.coinTypeB;
      params.coinTypeB = params.coinTypeA;
      params.coinTypeA = swpaCoinTypeB;
    }
    if ("fix_amount_a" in params) {
      return await this.creatPoolAndAddLiquidity(params);
    }
    return await this.creatPool([params]);
  }
  /**
   * Gets the ClmmConfig object for the given package object ID.
   * @param {boolean} forceRefresh Whether to force a refresh of the cache.
   * @returns the ClmmConfig object.
   */
  async getClmmConfigs(forceRefresh = false) {
    const { package_id } = this._sdk.sdkOptions.clmm_pool;
    const cacheKey = `${package_id}_getInitEvent`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData !== void 0) {
      return cacheData;
    }
    const packageObject = await this._sdk.fullClient.getObject({
      id: package_id,
      options: { showPreviousTransaction: true }
    });
    const previousTx = getObjectPreviousTransactionDigest(packageObject);
    const objects = (await this._sdk.fullClient.queryEventsByPage({ Transaction: previousTx })).data;
    const clmmConfig = {
      pools_id: "",
      global_config_id: "",
      global_vault_id: "",
      admin_cap_id: ""
    };
    if (objects.length > 0) {
      objects.forEach((item) => {
        const fields = item.parsedJson;
        if (item.type) {
          switch (extractStructTagFromType(item.type).full_address) {
            case `${package_id}::config::InitConfigEvent`:
              clmmConfig.global_config_id = fields.global_config_id;
              clmmConfig.admin_cap_id = fields.admin_cap_id;
              break;
            case `${package_id}::factory::InitFactoryEvent`:
              clmmConfig.pools_id = fields.pools_id;
              break;
            case `${package_id}::rewarder::RewarderInitEvent`:
              clmmConfig.global_vault_id = fields.global_vault_id;
              break;
            case `${package_id}::partner::InitPartnerEvent`:
              clmmConfig.partners_id = fields.partners_id;
              break;
            default:
              break;
          }
        }
      });
      this.updateCache(cacheKey, clmmConfig, cacheTime24h);
      return clmmConfig;
    }
    return clmmConfig;
  }
  /**
   * Gets the SUI transaction response for a given transaction digest.
   * @param digest - The digest of the transaction for which the SUI transaction response is requested.
   * @param forceRefresh - A boolean flag indicating whether to force a refresh of the response.
   * @returns A Promise that resolves with the SUI transaction block response or null if the response is not available.
   */
  async getSuiTransactionResponse(digest, forceRefresh = false) {
    const cacheKey = `${digest}_getSuiTransactionResponse`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData !== void 0) {
      return cacheData;
    }
    let objects;
    try {
      objects = await this._sdk.fullClient.getTransactionBlock({
        digest,
        options: {
          showEvents: true,
          showEffects: true,
          showBalanceChanges: true,
          showInput: true,
          showObjectChanges: true
        }
      });
    } catch (error) {
      objects = await this._sdk.fullClient.getTransactionBlock({
        digest,
        options: {
          showEvents: true,
          showEffects: true
        }
      });
    }
    this.updateCache(cacheKey, objects, cacheTime24h);
    return objects;
  }
  /**
   * Create pool internal. 
   * @param {CreatePoolParams[]}params The parameters for the pools. 
   * @returns {Promise<TransactionBlock>} A promise that resolves to the transaction payload.
   */
  async creatPool(params) {
    const tx = new import_transactions4.TransactionBlock();
    const { integrate, clmm_pool } = this.sdk.sdkOptions;
    const eventConfig = getPackagerConfigs(clmm_pool);
    const globalPauseStatusObjectId = eventConfig.global_config_id;
    const poolsId = eventConfig.pools_id;
    params.forEach((params2) => {
      const args = [
        tx.object(globalPauseStatusObjectId),
        tx.object(poolsId),
        tx.pure(params2.tick_spacing.toString()),
        tx.pure(params2.initialize_sqrt_price),
        tx.pure(params2.uri),
        tx.object(CLOCK_ADDRESS)
      ];
      tx.moveCall({
        target: `${integrate.published_at}::${ClmmIntegratePoolModule}::create_pool`,
        typeArguments: [params2.coinTypeA, params2.coinTypeB],
        arguments: args
      });
    });
    return tx;
  }
  /**
   * Create pool and add liquidity internal. It will call create_pool_with_liquidity function.
   * @param {CreatePoolAddLiquidityParams}params The parameters for the create and liquidity.
   * @returns {Promise<TransactionBlock>} A promise that resolves to the transaction payload.
   */
  async creatPoolAndAddLiquidity(params) {
    if (!checkInvalidSuiAddress(this._sdk.senderAddress)) {
      throw new ClmmpoolsError("this config sdk senderAddress is not set right", "InvalidSendAddress" /* InvalidSendAddress */);
    }
    const tx = new import_transactions4.TransactionBlock();
    const { integrate, clmm_pool } = this.sdk.sdkOptions;
    const eventConfig = getPackagerConfigs(clmm_pool);
    const globalPauseStatusObjectId = eventConfig.global_config_id;
    const poolsId = eventConfig.pools_id;
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress);
    const primaryCoinAInputsR = TransactionUtil.buildAddLiquidityFixTokenCoinInput(
      tx,
      !params.fix_amount_a,
      params.amount_a,
      params.slippage,
      params.coinTypeA,
      allCoinAsset,
      false
    );
    const primaryCoinBInputsR = TransactionUtil.buildAddLiquidityFixTokenCoinInput(
      tx,
      params.fix_amount_a,
      params.amount_b,
      params.slippage,
      params.coinTypeB,
      allCoinAsset,
      false
    );
    const args = [
      tx.pure(globalPauseStatusObjectId),
      tx.pure(poolsId),
      tx.pure(params.tick_spacing.toString()),
      tx.pure(params.initialize_sqrt_price),
      tx.pure(params.uri),
      primaryCoinAInputsR.targetCoin,
      primaryCoinBInputsR.targetCoin,
      tx.pure(asUintN(BigInt(params.tick_lower)).toString()),
      tx.pure(asUintN(BigInt(params.tick_upper)).toString()),
      tx.pure(params.amount_a),
      tx.pure(params.amount_b),
      tx.pure(params.fix_amount_a),
      tx.pure(CLOCK_ADDRESS)
    ];
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmIntegratePoolV2Module}::create_pool_with_liquidity`,
      typeArguments: [params.coinTypeA, params.coinTypeB],
      arguments: args
    });
    return tx;
  }
  /**
   * Fetches ticks from the exchange.
   * @param {FetchParams} params The parameters for the fetch.
   * @returns {Promise<TickData[]>} A promise that resolves to an array of tick data.
   */
  async fetchTicks(params) {
    let ticks = [];
    let start = [];
    const limit = 512;
    while (true) {
      const data = await this.getTicks({
        pool_id: params.pool_id,
        coinTypeA: params.coinTypeA,
        coinTypeB: params.coinTypeB,
        start,
        limit
      });
      ticks = [...ticks, ...data];
      if (data.length < limit) {
        break;
      }
      start = [data[data.length - 1].index];
    }
    return ticks;
  }
  /**
   * Fetches ticks from the exchange using the simulation exec tx.
   * @param {GetTickParams} params The parameters for the fetch.
   * @returns {Promise<TickData[]>} A promise that resolves to an array of tick data.
   */
  async getTicks(params) {
    const { integrate, simulationAccount } = this.sdk.sdkOptions;
    const ticks = [];
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const tx = new import_transactions4.TransactionBlock();
    const args = [tx.pure(params.pool_id), tx.pure(params.start), tx.pure(params.limit.toString())];
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmFetcherModule}::fetch_ticks`,
      arguments: args,
      typeArguments
    });
    if (!checkInvalidSuiAddress(simulationAccount.address)) {
      throw new ClmmpoolsError("this config simulationAccount is not set right", "InvalidSimulateAccount" /* InvalidSimulateAccount */);
    }
    const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    if (simulateRes.error != null) {
      throw new ClmmpoolsError(`getTicks error code: ${simulateRes.error ?? "unknown error"}, please check config and tick object ids`, "InvalidTickObjectId" /* InvalidTickObjectId */);
    }
    simulateRes.events?.forEach((item) => {
      if (extractStructTagFromType(item.type).name === `FetchTicksResultEvent`) {
        item.parsedJson.ticks.forEach((tick) => {
          ticks.push(buildTickDataByEvent(tick));
        });
      }
    });
    return ticks;
  }
  /**
   * Fetches a list of position rewards from the exchange.
   * @param {FetchParams} params The parameters for the fetch.
   * @returns {Promise<PositionReward[]>} A promise that resolves to an array of position rewards.
   */
  async fetchPositionRewardList(params) {
    const { integrate, simulationAccount } = this.sdk.sdkOptions;
    const allPosition = [];
    let start = [];
    const limit = 512;
    while (true) {
      const typeArguments = [params.coinTypeA, params.coinTypeB];
      const tx = new import_transactions4.TransactionBlock();
      const args = [tx.object(params.pool_id), tx.pure(start, "u64"), tx.pure(limit.toString(), "u64")];
      tx.moveCall({
        target: `${integrate.published_at}::${ClmmFetcherModule}::fetch_positions`,
        arguments: args,
        typeArguments
      });
      if (!checkInvalidSuiAddress(simulationAccount.address)) {
        throw new ClmmpoolsError("this config simulationAccount is not set right", "InvalidSimulateAccount" /* InvalidSimulateAccount */);
      }
      const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: simulationAccount.address
      });
      if (simulateRes.error != null) {
        throw new ClmmpoolsError(`fetch position reward error code: ${simulateRes.error ?? "unknown error"}, please check config and tick object ids`, "InvalidPositionRewardObject" /* InvalidPositionRewardObject */);
      }
      const positionRewards = [];
      simulateRes?.events?.forEach((item) => {
        if (extractStructTagFromType(item.type).name === `FetchPositionsEvent`) {
          item.parsedJson.positions.forEach((item2) => {
            const positionReward = buildPositionReward(item2);
            positionRewards.push(positionReward);
          });
        }
      });
      allPosition.push(...positionRewards);
      if (positionRewards.length < limit) {
        break;
      } else {
        start = [positionRewards[positionRewards.length - 1].pos_object_id];
      }
    }
    return allPosition;
  }
  /**
   * Fetches ticks from the fullnode using the RPC API.
   * @param {string} tickHandle The handle for the tick.
   * @returns {Promise<TickData[]>} A promise that resolves to an array of tick data.
   */
  async fetchTicksByRpc(tickHandle) {
    let allTickData = [];
    let nextCursor = null;
    const limit = 512;
    while (true) {
      const allTickId = [];
      const idRes = await this.sdk.fullClient.getDynamicFields({
        parentId: tickHandle,
        cursor: nextCursor,
        limit
      });
      nextCursor = idRes.nextCursor;
      idRes.data.forEach((item) => {
        if (extractStructTagFromType(item.objectType).module === "skip_list") {
          allTickId.push(item.objectId);
        }
      });
      allTickData = [...allTickData, ...await this.getTicksByRpc(allTickId)];
      if (nextCursor === null || idRes.data.length < limit) {
        break;
      }
    }
    return allTickData;
  }
  /**
   * Get ticks by tick object ids.
   * @param {string} tickObjectId The object ids of the ticks. 
   * @returns {Promise<TickData[]>} A promise that resolves to an array of tick data.
   */
  async getTicksByRpc(tickObjectId) {
    const ticks = [];
    const objectDataResponses = await this.sdk.fullClient.batchGetObjects(tickObjectId, { showContent: true, showType: true });
    for (const suiObj of objectDataResponses) {
      if (suiObj.error != null || suiObj.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`getTicksByRpc error code: ${suiObj.error?.code ?? "unknown error"}, please check config and tick object ids`, "InvalidTickObjectId" /* InvalidTickObjectId */);
      }
      const tick = buildTickData(suiObj);
      if (tick != null) {
        ticks.push(tick);
      }
    }
    return ticks;
  }
  /**
   * Gets the tick data for the given tick index.
   * @param {string} tickHandle The handle for the tick.
   * @param {number} tickIndex The index of the tick.
   * @returns {Promise<TickData | null>} A promise that resolves to the tick data.
   */
  async getTickDataByIndex(tickHandle, tickIndex) {
    const name = { type: "u64", value: asUintN(BigInt(tickScore(tickIndex).toString())).toString() };
    const res = await this.sdk.fullClient.getDynamicFieldObject({
      parentId: tickHandle,
      name
    });
    if (res.error != null || res.data?.content?.dataType !== "moveObject") {
      throw new ClmmpoolsError(`get tick by index: ${tickIndex} error: ${res.error}`, "InvalidTickIndex" /* InvalidTickIndex */);
    }
    return buildTickData(res);
  }
  /**
   * Gets the tick data for the given object ID.
   * @param {string} tickId The object ID of the tick.
   * @returns {Promise<TickData | null>} A promise that resolves to the tick data.
   */
  async getTickDataByObjectId(tickId) {
    const res = await this.sdk.fullClient.getObject({
      id: tickId,
      options: { showContent: true }
    });
    if (res.error != null || res.data?.content?.dataType !== "moveObject") {
      throw new ClmmpoolsError(`getTicksByRpc error code: ${res.error?.code ?? "unknown error"}, please check config and tick object ids`, "InvalidTickObjectId" /* InvalidTickObjectId */);
    }
    return buildTickData(res);
  }
  /**
   * Get partner ref fee amount
   * @param {string}partner Partner object id 
   * @returns {Promise<CoinAsset[]>} A promise that resolves to an array of coin asset.
   */
  async getPartnerRefFeeAmount(partner) {
    const objectDataResponses = await this._sdk.fullClient.batchGetObjects([partner], {
      showOwner: true,
      showContent: true,
      showDisplay: true,
      showType: true
    });
    if (objectDataResponses[0].error != null || objectDataResponses[0].data?.content?.dataType !== "moveObject") {
      throw new ClmmpoolsError(`get partner by object id: ${partner} error: ${objectDataResponses[0].error}`, "NotFoundPartnerObject" /* NotFoundPartnerObject */);
    }
    const balance = objectDataResponses[0].data.content.fields.balances;
    const objects = await this._sdk.fullClient.getDynamicFieldsByPage(balance.fields.id.id);
    const coins = [];
    objects.data.forEach((object2) => {
      if (object2.error != null || object2.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`when getPartnerRefFeeAmount get partner object error: ${object2.error}, please check the rpc, contracts address config and position id.`, "InvalidConfig" /* InvalidConfig */);
      }
      coins.push(object2.objectId);
    });
    const refFee = [];
    const object = await this._sdk.fullClient.batchGetObjects(coins, {
      showOwner: true,
      showContent: true,
      showDisplay: true,
      showType: true
    });
    object.forEach((info) => {
      if (info.error != null || info.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`get coin by object id: ${info.data.objectId} error: ${info.error}`, "InvalidParnterRefFeeFields" /* InvalidParnterRefFeeFields */);
      }
      const coinAsset = {
        coinAddress: info.data.content.fields.name,
        coinObjectId: info.data.objectId,
        balance: BigInt(info.data.content.fields.value)
      };
      refFee.push(coinAsset);
    });
    return refFee;
  }
  /**
   * Claim partner ref fee.
   * @param {string} partnerCap partner cap id.
   * @param {string} partner partner id.
   * @returns {Promise<TransactionBlock>} A promise that resolves to the transaction payload.
   */
  async claimPartnerRefFeePayload(partnerCap, partner, coinType) {
    const tx = new import_transactions4.TransactionBlock();
    const { clmm_pool } = this.sdk.sdkOptions;
    const { global_config_id } = getPackagerConfigs(clmm_pool);
    const typeArguments = [coinType];
    const args = [
      tx.object(global_config_id),
      tx.object(partnerCap),
      tx.object(partner)
    ];
    tx.moveCall({
      target: `${clmm_pool.published_at}::${ClmmPartnerModule}::claim_ref_fee`,
      arguments: args,
      typeArguments
    });
    return tx;
  }
  /**
   * Updates the cache for the given key.
   * @param key The key of the cache entry to update.
   * @param data The data to store in the cache.
   * @param time The time in minutes after which the cache entry should expire.
   */
  updateCache(key, data, time = cacheTime5min) {
    let cacheData = this._cache[key];
    if (cacheData) {
      cacheData.overdueTime = getFutureTime(time);
      cacheData.value = data;
    } else {
      cacheData = new CachedContent(data, getFutureTime(time));
    }
    this._cache[key] = cacheData;
  }
  /**
   * Gets the cache entry for the given key.
   * @param key The key of the cache entry to get.
   * @param forceRefresh Whether to force a refresh of the cache entry.
   * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
   */
  getCache(key, forceRefresh = false) {
    const cacheData = this._cache[key];
    const isValid = cacheData?.isValid();
    if (!forceRefresh && isValid) {
      return cacheData.value;
    }
    if (!isValid) {
      delete this._cache[key];
    }
    return void 0;
  }
};

// src/modules/positionModule.ts
var import_bn15 = __toESM(require("bn.js"));
var import_transactions5 = require("@mysten/sui.js/transactions");
var import_utils16 = require("@mysten/sui.js/utils");
var PositionModule = class {
  _sdk;
  _cache = {};
  constructor(sdk) {
    this._sdk = sdk;
  }
  get sdk() {
    return this._sdk;
  }
  /**
   * Builds the full address of the Position type.
   * @returns The full address of the Position type.
   */
  buildPositionType() {
    const cetusClmm = this._sdk.sdkOptions.clmm_pool.package_id;
    return `${cetusClmm}::position::Position`;
  }
  /**
   * Gets a list of positions for the given account address.
   * @param accountAddress The account address to get positions for.
   * @param assignPoolIds An array of pool IDs to filter the positions by.
   * @returns array of Position objects.
   */
  async getPositionList(accountAddress, assignPoolIds = []) {
    const allPosition = [];
    const ownerRes = await this._sdk.fullClient.getOwnedObjectsByPage(accountAddress, {
      options: { showType: true, showContent: true, showDisplay: true, showOwner: true },
      filter: { Package: this._sdk.sdkOptions.clmm_pool.package_id }
    });
    const hasAssignPoolIds = assignPoolIds.length > 0;
    for (const item of ownerRes.data) {
      const type = extractStructTagFromType(item.data.type);
      if (type.full_address === this.buildPositionType()) {
        const position = buildPosition(item);
        const cacheKey = `${position.pos_object_id}_getPositionList`;
        this.updateCache(cacheKey, position, cacheTime24h);
        if (hasAssignPoolIds) {
          if (assignPoolIds.includes(position.pool)) {
            allPosition.push(position);
          }
        } else {
          allPosition.push(position);
        }
      }
    }
    return allPosition;
  }
  /**
   * Gets a position by its handle and ID. But it needs pool info, so it is not recommended to use this method.
   * if you want to get a position, you can use getPositionById method directly.
   * @param {string} positionHandle The handle of the position to get.
   * @param {string} positionID The ID of the position to get.
   * @param {boolean} calculateRewarder Whether to calculate the rewarder of the position.
   * @returns {Promise<Position>} Position object.
   */
  async getPosition(positionHandle, positionID, calculateRewarder = true) {
    let position = await this.getSimplePosition(positionID);
    if (calculateRewarder) {
      position = await this.updatePositionRewarders(positionHandle, position);
    }
    return position;
  }
  /**
   * Gets a position by its ID.
   * @param {string} positionID The ID of the position to get.
   * @param {boolean} calculateRewarder Whether to calculate the rewarder of the position.
   * @returns {Promise<Position>} Position object.
   */
  async getPositionById(positionID, calculateRewarder = true) {
    const position = await this.getSimplePosition(positionID);
    if (calculateRewarder) {
      const pool = await this._sdk.Pool.getPool(position.pool, false);
      const result = await this.updatePositionRewarders(pool.position_manager.positions_handle, position);
      return result;
    }
    return position;
  }
  /**
   * Gets a simple position for the given position ID.
   * @param {string} positionID The ID of the position to get.
   * @returns {Promise<Position>} Position object.
   */
  async getSimplePosition(positionID) {
    const cacheKey = `${positionID}_getPositionList`;
    let position = this.getSimplePositionByCache(positionID);
    if (position === void 0) {
      const objectDataResponses = await this.sdk.fullClient.getObject({
        id: positionID,
        options: { showContent: true, showType: true, showDisplay: true, showOwner: true }
      });
      position = buildPosition(objectDataResponses);
      this.updateCache(cacheKey, position, cacheTime24h);
    }
    return position;
  }
  /**
   * Gets a simple position for the given position ID.
   * @param {string} positionID Position object id
   * @returns {Position | undefined} Position object
   */
  getSimplePositionByCache(positionID) {
    const cacheKey = `${positionID}_getPositionList`;
    return this.getCache(cacheKey);
  }
  /**
   * Gets a list of simple positions for the given position IDs.
   * @param {SuiObjectIdType[]} positionIDs The IDs of the positions to get.
   * @returns {Promise<Position[]>} A promise that resolves to an array of Position objects.
   */
  async getSipmlePositionList(positionIDs) {
    const positionList = [];
    const notFoundIds = [];
    positionIDs.forEach((id) => {
      const position = this.getSimplePositionByCache(id);
      if (position) {
        positionList.push(position);
      } else {
        notFoundIds.push(id);
      }
    });
    if (notFoundIds.length > 0) {
      const objectDataResponses = await this._sdk.fullClient.batchGetObjects(notFoundIds, {
        showOwner: true,
        showContent: true,
        showDisplay: true,
        showType: true
      });
      objectDataResponses.forEach((info) => {
        const position = buildPosition(info);
        positionList.push(position);
        const cacheKey = `${position.pos_object_id}_getPositionList`;
        this.updateCache(cacheKey, position, cacheTime24h);
      });
    }
    return positionList;
  }
  /**
   * Updates the rewarders of position
   * @param {string} positionHandle Position handle
   * @param {Position} position Position object
   * @returns {Promise<Position>} A promise that resolves to an array of Position objects.
   */
  async updatePositionRewarders(positionHandle, position) {
    const positionReward = await this.getPositionRewarders(positionHandle, position.pos_object_id);
    return {
      ...position,
      ...positionReward
    };
  }
  /**
   * Gets the position rewarders for the given position handle and position object ID.
   * @param {string} positionHandle The handle of the position.
   * @param {string} positionID The ID of the position object.
   * @returns {Promise<PositionReward | undefined>} PositionReward object.
   */
  async getPositionRewarders(positionHandle, positionID) {
    try {
      const dynamicFieldObject = await this._sdk.fullClient.getDynamicFieldObject({
        parentId: positionHandle,
        name: {
          type: "0x2::object::ID",
          value: positionID
        }
      });
      const objectFields = getObjectFields(dynamicFieldObject.data);
      const fields = objectFields.value.fields.value;
      const positionReward = buildPositionReward(fields);
      return positionReward;
    } catch (error) {
      console.log(error);
      return void 0;
    }
  }
  /**
   * Fetches the Position fee amount for a given list of addresses.
   * @param {FetchPosFeeParams[]} params  An array of FetchPosFeeParams objects containing the target addresses and their corresponding amounts.
   * @returns {Promise<CollectFeesQuote[]>} A Promise that resolves with the fetched position fee amount for the specified addresses.
   */
  async fetchPosFeeAmount(params) {
    const { clmm_pool, integrate, simulationAccount } = this.sdk.sdkOptions;
    const tx = new import_transactions5.TransactionBlock();
    for (const paramItem of params) {
      const typeArguments = [paramItem.coinTypeA, paramItem.coinTypeB];
      const args = [
        tx.object(getPackagerConfigs(clmm_pool).global_config_id),
        tx.object(paramItem.poolAddress),
        tx.pure(paramItem.positionId)
      ];
      tx.moveCall({
        target: `${integrate.published_at}::${ClmmFetcherModule}::fetch_position_fees`,
        arguments: args,
        typeArguments
      });
    }
    if (!checkInvalidSuiAddress(simulationAccount.address)) {
      throw new ClmmpoolsError("this config simulationAccount is not set right", "InvalidSimulateAccount" /* InvalidSimulateAccount */);
    }
    const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    if (simulateRes.error != null) {
      throw new ClmmpoolsError(`fetch position fee error code: ${simulateRes.error ?? "unknown error"}, please check config and postion and pool object ids`, "InvalidPoolObject" /* InvalidPoolObject */);
    }
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `FetchPositionFeesEvent`;
    });
    if (valueData.length === 0) {
      return [];
    }
    const result = [];
    for (let i = 0; i < valueData.length; i += 1) {
      const { parsedJson } = valueData[i];
      const posRrewarderResult = {
        feeOwedA: new import_bn15.default(parsedJson.fee_owned_a),
        feeOwedB: new import_bn15.default(parsedJson.fee_owned_b),
        position_id: parsedJson.position_id
      };
      result.push(posRrewarderResult);
    }
    return result;
  }
  /**
   * Fetches the Position fee amount for a given list of addresses.
   * @param positionIDs An array of position object ids.
   * @returns {Promise<Record<string, CollectFeesQuote>>} A Promise that resolves with the fetched position fee amount for the specified position object ids.
   */
  async batchFetchPositionFees(positionIDs) {
    const posFeeParamsList = [];
    for (const id of positionIDs) {
      const position = await this._sdk.Position.getPositionById(id, false);
      const pool = await this._sdk.Pool.getPool(position.pool, false);
      posFeeParamsList.push({
        poolAddress: pool.poolAddress,
        positionId: position.pos_object_id,
        coinTypeA: pool.coinTypeA,
        coinTypeB: pool.coinTypeB
      });
    }
    const positionMap = {};
    if (posFeeParamsList.length > 0) {
      const result = await this.fetchPosFeeAmount(posFeeParamsList);
      for (const posRewarderInfo of result) {
        positionMap[posRewarderInfo.position_id] = posRewarderInfo;
      }
      return positionMap;
    }
    return positionMap;
  }
  /**
   * create add liquidity transaction payload with fix token
   * @param {AddLiquidityFixTokenParams} params
   * @param gasEstimateArg : When the fix input amount is SUI, gasEstimateArg can control whether to recalculate the number of SUI to prevent insufficient gas.
   * If this parameter is not passed, gas estimation is not performed
   * @returns {Promise<TransactionBlock>}
   */
  async createAddLiquidityFixTokenPayload(params, gasEstimateArg) {
    if (!checkInvalidSuiAddress(this._sdk.senderAddress)) {
      throw new ClmmpoolsError("this config sdk senderAddress is not set right", "InvalidSendAddress" /* InvalidSendAddress */);
    }
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress);
    if (gasEstimateArg) {
      const { isAdjustCoinA, isAdjustCoinB } = findAdjustCoin(params);
      params = params;
      if (params.fix_amount_a && isAdjustCoinA || !params.fix_amount_a && isAdjustCoinB) {
        const tx = await TransactionUtil.buildAddLiquidityFixTokenForGas(this._sdk, allCoinAsset, params, gasEstimateArg);
        return tx;
      }
    }
    return TransactionUtil.buildAddLiquidityFixToken(this._sdk, allCoinAsset, params);
  }
  /**
   * create add liquidity transaction payload
   * @param {AddLiquidityParams} params
   * @returns {Promise<TransactionBlock>}
   */
  async createAddLiquidityPayload(params) {
    const { integrate, clmm_pool } = this._sdk.sdkOptions;
    if (!checkInvalidSuiAddress(this._sdk.senderAddress)) {
      throw new ClmmpoolsError("this config sdk senderAddress is not set right", "InvalidSendAddress" /* InvalidSendAddress */);
    }
    const tick_lower = asUintN(BigInt(params.tick_lower)).toString();
    const tick_upper = asUintN(BigInt(params.tick_upper)).toString();
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    let tx = new import_transactions5.TransactionBlock();
    const needOpenPosition = !(0, import_utils16.isValidSuiObjectId)(params.pos_id);
    const max_amount_a = BigInt(params.max_amount_a);
    const max_amount_b = BigInt(params.max_amount_b);
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress);
    const primaryCoinAInputs = TransactionUtil.buildCoinForAmount(tx, allCoinAsset, max_amount_a, params.coinTypeA, false);
    const primaryCoinBInputs = TransactionUtil.buildCoinForAmount(tx, allCoinAsset, max_amount_b, params.coinTypeB, false);
    if (needOpenPosition) {
      tx.moveCall({
        target: `${integrate.published_at}::${ClmmIntegratePoolV2Module}::open_position_with_liquidity`,
        typeArguments,
        arguments: [
          tx.object(getPackagerConfigs(clmm_pool).global_config_id),
          tx.object(params.pool_id),
          tx.pure(tick_lower),
          tx.pure(tick_upper),
          primaryCoinAInputs.targetCoin,
          primaryCoinBInputs.targetCoin,
          tx.pure(params.max_amount_a),
          tx.pure(params.max_amount_b),
          tx.pure(params.delta_liquidity),
          tx.object(CLOCK_ADDRESS)
        ]
      });
    } else {
      tx = TransactionUtil.createCollectRewarderAndFeeParams(
        this._sdk,
        tx,
        params,
        allCoinAsset,
        primaryCoinAInputs.remainCoins,
        primaryCoinBInputs.remainCoins
      );
      tx.moveCall({
        target: `${integrate.published_at}::${ClmmIntegratePoolV2Module}::add_liquidity`,
        typeArguments,
        arguments: [
          tx.object(getPackagerConfigs(clmm_pool).global_config_id),
          tx.object(params.pool_id),
          tx.object(params.pos_id),
          primaryCoinAInputs.targetCoin,
          primaryCoinBInputs.targetCoin,
          tx.pure(params.max_amount_a),
          tx.pure(params.max_amount_b),
          tx.pure(params.delta_liquidity),
          tx.object(CLOCK_ADDRESS)
        ]
      });
    }
    return tx;
  }
  /**
   * Remove liquidity from a position.
   * @param {RemoveLiquidityParams} params
   * @returns {TransactionBlock}
   */
  async removeLiquidityTransactionPayload(params) {
    if (!checkInvalidSuiAddress(this._sdk.senderAddress)) {
      throw new ClmmpoolsError("this config sdk senderAddress is not set right", "InvalidSendAddress" /* InvalidSendAddress */);
    }
    const { clmm_pool, integrate } = this.sdk.sdkOptions;
    const functionName = "remove_liquidity";
    let tx = new import_transactions5.TransactionBlock();
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress);
    tx = TransactionUtil.createCollectRewarderAndFeeParams(this._sdk, tx, params, allCoinAsset);
    const args = [
      tx.object(getPackagerConfigs(clmm_pool).global_config_id),
      tx.object(params.pool_id),
      tx.object(params.pos_id),
      tx.pure(params.delta_liquidity),
      tx.pure(params.min_amount_a),
      tx.pure(params.min_amount_b),
      tx.object(CLOCK_ADDRESS)
    ];
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmIntegratePoolModule}::${functionName}`,
      typeArguments,
      arguments: args
    });
    return tx;
  }
  /**
   * Close position and remove all liquidity and collect_reward
   * @param {ClosePositionParams} params
   * @returns {TransactionBlock}
   */
  async closePositionTransactionPayload(params) {
    if (!checkInvalidSuiAddress(this._sdk.senderAddress)) {
      throw new ClmmpoolsError("this config sdk senderAddress is not set right", "InvalidSendAddress" /* InvalidSendAddress */);
    }
    const { clmm_pool, integrate } = this.sdk.sdkOptions;
    let tx = new import_transactions5.TransactionBlock();
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress);
    tx = TransactionUtil.createCollectRewarderAndFeeParams(this._sdk, tx, params, allCoinAsset);
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmIntegratePoolModule}::close_position`,
      typeArguments,
      arguments: [
        tx.object(getPackagerConfigs(clmm_pool).global_config_id),
        tx.object(params.pool_id),
        tx.object(params.pos_id),
        tx.pure(params.min_amount_a),
        tx.pure(params.min_amount_b),
        tx.object(CLOCK_ADDRESS)
      ]
    });
    return tx;
  }
  /**
   * Open position in clmmpool.
   * @param {OpenPositionParams} params
   * @returns {TransactionBlock}
   */
  openPositionTransactionPayload(params) {
    const { clmm_pool, integrate } = this.sdk.sdkOptions;
    const tx = new import_transactions5.TransactionBlock();
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const tick_lower = asUintN(BigInt(params.tick_lower)).toString();
    const tick_upper = asUintN(BigInt(params.tick_upper)).toString();
    const args = [
      tx.pure(getPackagerConfigs(clmm_pool).global_config_id),
      tx.pure(params.pool_id),
      tx.pure(tick_lower),
      tx.pure(tick_upper)
    ];
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmIntegratePoolModule}::open_position`,
      typeArguments,
      arguments: args
    });
    return tx;
  }
  /**
   * Collect LP fee from Position.
   * @param {CollectFeeParams} params
   * @param {TransactionBlock} tx
   * @returns {TransactionBlock}
   */
  async collectFeeTransactionPayload(params) {
    if (!checkInvalidSuiAddress(this._sdk.senderAddress)) {
      throw new ClmmpoolsError("this config sdk senderAddress is not set right", "InvalidSendAddress" /* InvalidSendAddress */);
    }
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress, null, true);
    const tx = new import_transactions5.TransactionBlock();
    const primaryCoinAInput = TransactionUtil.buildCoinForAmount(tx, allCoinAsset, BigInt(0), params.coinTypeA, false);
    const primaryCoinBInput = TransactionUtil.buildCoinForAmount(tx, allCoinAsset, BigInt(0), params.coinTypeB, false);
    this.createCollectFeePaylod(params, tx, primaryCoinAInput.targetCoin, primaryCoinBInput.targetCoin);
    return tx;
  }
  createCollectFeePaylod(params, tx, primaryCoinAInput, primaryCoinBInput) {
    const { clmm_pool, integrate } = this.sdk.sdkOptions;
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const args = [
      tx.object(getPackagerConfigs(clmm_pool).global_config_id),
      tx.object(params.pool_id),
      tx.object(params.pos_id),
      primaryCoinAInput,
      primaryCoinBInput
    ];
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmIntegratePoolV2Module}::collect_fee`,
      typeArguments,
      arguments: args
    });
    return tx;
  }
  /**
   * calculate fee
   * @param {CollectFeeParams} params
   * @returns
   */
  async calculateFee(params) {
    const paylod = await this.collectFeeTransactionPayload(params);
    if (!checkInvalidSuiAddress(this._sdk.senderAddress)) {
      throw new ClmmpoolsError("this config sdk senderAddress is not set right", "InvalidSendAddress" /* InvalidSendAddress */);
    }
    const res = await this._sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: paylod,
      sender: this._sdk.senderAddress
    });
    for (const event of res.events) {
      if (extractStructTagFromType(event.type).name === "CollectFeeEvent") {
        const json = event.parsedJson;
        return {
          feeOwedA: json.amount_a,
          feeOwedB: json.amount_b
        };
      }
    }
    return {
      feeOwedA: "0",
      feeOwedB: "0"
    };
  }
  /**
   * Updates the cache for the given key.
   * @param {string} key The key of the cache entry to update.
   * @param {SuiResource} data The data to store in the cache.
   * @param {cacheTime5min} time The time in minutes after which the cache entry should expire.
   */
  updateCache(key, data, time = cacheTime5min) {
    let cacheData = this._cache[key];
    if (cacheData) {
      cacheData.overdueTime = getFutureTime(time);
      cacheData.value = data;
    } else {
      cacheData = new CachedContent(data, getFutureTime(time));
    }
    this._cache[key] = cacheData;
  }
  /**
   * Gets the cache entry for the given key.
   * @param {string} key The key of the cache entry to get.
   * @param {boolean} forceRefresh Whether to force a refresh of the cache entry.
   * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
   */
  getCache(key, forceRefresh = false) {
    const cacheData = this._cache[key];
    const isValid = cacheData?.isValid();
    if (!forceRefresh && isValid) {
      return cacheData.value;
    }
    if (!isValid) {
      delete this._cache[key];
    }
    return void 0;
  }
};

// src/modules/rewarderModule.ts
var import_bn16 = __toESM(require("bn.js"));
var import_transactions6 = require("@mysten/sui.js/transactions");
var RewarderModule = class {
  _sdk;
  growthGlobal;
  constructor(sdk) {
    this._sdk = sdk;
    this.growthGlobal = [ZERO, ZERO, ZERO];
  }
  get sdk() {
    return this._sdk;
  }
  /**
   * Gets the emissions for the given pool every day.
   *
   * @param {string} poolID The object ID of the pool.
   * @returns {Promise<Array<{emissions: number, coinAddress: string}>>} A promise that resolves to an array of objects with the emissions and coin address for each rewarder.
   */
  async emissionsEveryDay(poolID) {
    const currentPool = await this.sdk.Pool.getPool(poolID);
    const rewarderInfos = currentPool.rewarder_infos;
    if (!rewarderInfos) {
      return null;
    }
    const emissionsEveryDay = [];
    for (const rewarderInfo of rewarderInfos) {
      const emissionSeconds = MathUtil.fromX64(new import_bn16.default(rewarderInfo.emissions_per_second));
      emissionsEveryDay.push({
        emissions: Math.floor(emissionSeconds.toNumber() * 60 * 60 * 24),
        coin_address: rewarderInfo.coinAddress
      });
    }
    return emissionsEveryDay;
  }
  /**
   * Updates the rewarder for the given pool.
   *
   * @param {string} poolID The object ID of the pool.
   * @param {BN} currentTime The current time in seconds since the Unix epoch.
   * @returns {Promise<Pool>} A promise that resolves to the updated pool.
   */
  async updatePoolRewarder(poolID, currentTime) {
    const currentPool = await this.sdk.Pool.getPool(poolID);
    const lastTime = currentPool.rewarder_last_updated_time;
    currentPool.rewarder_last_updated_time = currentTime.toString();
    if (Number(currentPool.liquidity) === 0 || currentTime.eq(new import_bn16.default(lastTime))) {
      return currentPool;
    }
    const timeDelta = currentTime.div(new import_bn16.default(1e3)).sub(new import_bn16.default(lastTime)).add(new import_bn16.default(15));
    const rewarderInfos = currentPool.rewarder_infos;
    for (let i = 0; i < rewarderInfos.length; i += 1) {
      const rewarderInfo = rewarderInfos[i];
      const rewarderGrowthDelta = MathUtil.checkMulDivFloor(
        timeDelta,
        new import_bn16.default(rewarderInfo.emissions_per_second),
        new import_bn16.default(currentPool.liquidity),
        128
      );
      this.growthGlobal[i] = new import_bn16.default(rewarderInfo.growth_global).add(new import_bn16.default(rewarderGrowthDelta));
    }
    return currentPool;
  }
  /**
   * Gets the amount owed to the rewarders for the given position.
   *
   * @param {string} poolID The object ID of the pool.
   * @param {string} positionHandle The handle of the position.
   * @param {string} positionID The ID of the position.
   * @returns {Promise<Array<{amountOwed: number}>>} A promise that resolves to an array of objects with the amount owed to each rewarder.
   * @deprecated This method is deprecated and may be removed in future versions. Use `sdk.Rewarder.fetchPosRewardersAmount()` instead.
   */
  async posRewardersAmount(poolID, positionHandle, positionID) {
    const currentTime = Date.parse((/* @__PURE__ */ new Date()).toString());
    const pool = await this.updatePoolRewarder(poolID, new import_bn16.default(currentTime));
    const position = await this.sdk.Position.getPositionRewarders(positionHandle, positionID);
    if (position === void 0) {
      return [];
    }
    const ticksHandle = pool.ticks_handle;
    const tickLower = await this.sdk.Pool.getTickDataByIndex(ticksHandle, position.tick_lower_index);
    const tickUpper = await this.sdk.Pool.getTickDataByIndex(ticksHandle, position.tick_upper_index);
    const amountOwed = this.posRewardersAmountInternal(pool, position, tickLower, tickUpper);
    return amountOwed;
  }
  /**
   * Gets the amount owed to the rewarders for the given account and pool.
   *
   * @param {string} accountAddress The account address.
   * @param {string} poolID The object ID of the pool.
   * @returns {Promise<Array<{amountOwed: number}>>} A promise that resolves to an array of objects with the amount owed to each rewarder.
   * @deprecated This method is deprecated and may be removed in future versions. Use `sdk.Rewarder.fetchPosRewardersAmount()` instead.
   */
  async poolRewardersAmount(accountAddress, poolID) {
    const currentTime = Date.parse((/* @__PURE__ */ new Date()).toString());
    const pool = await this.updatePoolRewarder(poolID, new import_bn16.default(currentTime));
    const positions = await this.sdk.Position.getPositionList(accountAddress, [poolID]);
    const tickDatas = await this.getPoolLowerAndUpperTicks(pool.ticks_handle, positions);
    const rewarderAmount = [ZERO, ZERO, ZERO];
    for (let i = 0; i < positions.length; i += 1) {
      const posRewarderInfo = await this.posRewardersAmountInternal(pool, positions[i], tickDatas[0][i], tickDatas[1][i]);
      for (let j = 0; j < 3; j += 1) {
        rewarderAmount[j] = rewarderAmount[j].add(posRewarderInfo[j].amount_owed);
      }
    }
    return rewarderAmount;
  }
  /**
   * Gets the amount owed to the rewarders for the given account and pool.
   * @param {Pool} pool Pool object
   * @param {PositionReward} position Position object
   * @param {TickData} tickLower Lower tick data
   * @param {TickData} tickUpper Upper tick data
   * @returns {RewarderAmountOwed[]}
   */
  posRewardersAmountInternal(pool, position, tickLower, tickUpper) {
    const tickLowerIndex = position.tick_lower_index;
    const tickUpperIndex = position.tick_upper_index;
    const rewardersInside = getRewardInTickRange(pool, tickLower, tickUpper, tickLowerIndex, tickUpperIndex, this.growthGlobal);
    const growthInside = [];
    const AmountOwed = [];
    if (rewardersInside.length > 0) {
      let growthDelta0 = MathUtil.subUnderflowU128(rewardersInside[0], new import_bn16.default(position.reward_growth_inside_0));
      if (growthDelta0.gt(new import_bn16.default("3402823669209384634633745948738404"))) {
        growthDelta0 = ONE;
      }
      const amountOwed_0 = MathUtil.checkMulShiftRight(new import_bn16.default(position.liquidity), growthDelta0, 64, 128);
      growthInside.push(rewardersInside[0]);
      AmountOwed.push({
        amount_owed: new import_bn16.default(position.reward_amount_owed_0).add(amountOwed_0),
        coin_address: pool.rewarder_infos[0].coinAddress
      });
    }
    if (rewardersInside.length > 1) {
      let growthDelta_1 = MathUtil.subUnderflowU128(rewardersInside[1], new import_bn16.default(position.reward_growth_inside_1));
      if (growthDelta_1.gt(new import_bn16.default("3402823669209384634633745948738404"))) {
        growthDelta_1 = ONE;
      }
      const amountOwed_1 = MathUtil.checkMulShiftRight(new import_bn16.default(position.liquidity), growthDelta_1, 64, 128);
      growthInside.push(rewardersInside[1]);
      AmountOwed.push({
        amount_owed: new import_bn16.default(position.reward_amount_owed_1).add(amountOwed_1),
        coin_address: pool.rewarder_infos[1].coinAddress
      });
    }
    if (rewardersInside.length > 2) {
      let growthDelta_2 = MathUtil.subUnderflowU128(rewardersInside[2], new import_bn16.default(position.reward_growth_inside_2));
      if (growthDelta_2.gt(new import_bn16.default("3402823669209384634633745948738404"))) {
        growthDelta_2 = ONE;
      }
      const amountOwed_2 = MathUtil.checkMulShiftRight(new import_bn16.default(position.liquidity), growthDelta_2, 64, 128);
      growthInside.push(rewardersInside[2]);
      AmountOwed.push({
        amount_owed: new import_bn16.default(position.reward_amount_owed_2).add(amountOwed_2),
        coin_address: pool.rewarder_infos[2].coinAddress
      });
    }
    return AmountOwed;
  }
  /**
   * Fetches the Position reward amount for a given list of addresses.
   * @param {string[]}positionIDs An array of position object ids.
   * @returns {Promise<Record<string, RewarderAmountOwed[]>>} A Promise that resolves with the fetched position reward amount for the specified position object ids.
   */
  async batchFetchPositionRewarders(positionIDs) {
    const posRewardParamsList = [];
    for (const id of positionIDs) {
      const position = await this._sdk.Position.getPositionById(id, false);
      const pool = await this._sdk.Pool.getPool(position.pool, false);
      posRewardParamsList.push({
        poolAddress: pool.poolAddress,
        positionId: position.pos_object_id,
        coinTypeA: pool.coinTypeA,
        coinTypeB: pool.coinTypeB,
        rewarderInfo: pool.rewarder_infos
      });
    }
    const positionMap = {};
    if (posRewardParamsList.length > 0) {
      const result = await this.fetchPosRewardersAmount(posRewardParamsList);
      for (const posRewarderInfo of result) {
        positionMap[posRewarderInfo.positionId] = posRewarderInfo.rewarderAmountOwed;
      }
      return positionMap;
    }
    return positionMap;
  }
  /**
   * Fetch the position rewards for a given pool.
   * @param {Pool}pool Pool object
   * @param {string}positionId Position object id
   * @returns {Promise<RewarderAmountOwed[]>} A Promise that resolves with the fetched position reward amount for the specified position object id.
   */
  async fetchPositionRewarders(pool, positionId) {
    const param = {
      poolAddress: pool.poolAddress,
      positionId,
      coinTypeA: pool.coinTypeA,
      coinTypeB: pool.coinTypeB,
      rewarderInfo: pool.rewarder_infos
    };
    const result = await this.fetchPosRewardersAmount([param]);
    return result[0].rewarderAmountOwed;
  }
  /**
   * Fetches the Position fee amount for a given list of addresses.
   * @param positionIDs An array of position object ids.
   * @returns {Promise<Record<string, CollectFeesQuote>>} A Promise that resolves with the fetched position fee amount for the specified position object ids.
   * @deprecated This method is deprecated and may be removed in future versions. Use alternative methods if available.
   */
  async batchFetchPositionFees(positionIDs) {
    const posFeeParamsList = [];
    for (const id of positionIDs) {
      const position = await this._sdk.Position.getPositionById(id, false);
      const pool = await this._sdk.Pool.getPool(position.pool, false);
      posFeeParamsList.push({
        poolAddress: pool.poolAddress,
        positionId: position.pos_object_id,
        coinTypeA: pool.coinTypeA,
        coinTypeB: pool.coinTypeB
      });
    }
    const positionMap = {};
    if (posFeeParamsList.length > 0) {
      const result = await this.fetchPosFeeAmount(posFeeParamsList);
      for (const posRewarderInfo of result) {
        positionMap[posRewarderInfo.position_id] = posRewarderInfo;
      }
      return positionMap;
    }
    return positionMap;
  }
  /**
   * Fetches the Position fee amount for a given list of addresses.
   * @param params  An array of FetchPosFeeParams objects containing the target addresses and their corresponding amounts.
   * @returns
   */
  async fetchPosFeeAmount(params) {
    const { clmm_pool, integrate, simulationAccount } = this.sdk.sdkOptions;
    const tx = new import_transactions6.TransactionBlock();
    for (const paramItem of params) {
      const typeArguments = [paramItem.coinTypeA, paramItem.coinTypeB];
      const args = [
        tx.object(getPackagerConfigs(clmm_pool).global_config_id),
        tx.object(paramItem.poolAddress),
        tx.pure(paramItem.positionId)
      ];
      tx.moveCall({
        target: `${integrate.published_at}::${ClmmFetcherModule}::fetch_position_fees`,
        arguments: args,
        typeArguments
      });
    }
    const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `FetchPositionFeesEvent`;
    });
    if (valueData.length === 0) {
      return [];
    }
    const result = [];
    for (let i = 0; i < valueData.length; i += 1) {
      const { parsedJson } = valueData[i];
      const posRrewarderResult = {
        feeOwedA: new import_bn16.default(parsedJson.fee_owned_a),
        feeOwedB: new import_bn16.default(parsedJson.fee_owned_b),
        position_id: parsedJson.position_id
      };
      result.push(posRrewarderResult);
    }
    return result;
  }
  /**
   * Fetches the Position reward amount for a given list of addresses.
   * @param params  An array of FetchPosRewardParams objects containing the target addresses and their corresponding amounts.
   * @returns
   */
  async fetchPosRewardersAmount(params) {
    const { clmm_pool, integrate, simulationAccount } = this.sdk.sdkOptions;
    const tx = new import_transactions6.TransactionBlock();
    for (const paramItem of params) {
      const typeArguments = [paramItem.coinTypeA, paramItem.coinTypeB];
      const args = [
        tx.object(getPackagerConfigs(clmm_pool).global_config_id),
        tx.object(paramItem.poolAddress),
        tx.pure(paramItem.positionId),
        tx.object(CLOCK_ADDRESS)
      ];
      tx.moveCall({
        target: `${integrate.published_at}::${ClmmFetcherModule}::fetch_position_rewards`,
        arguments: args,
        typeArguments
      });
    }
    if (!checkInvalidSuiAddress(simulationAccount.address)) {
      throw new ClmmpoolsError(`this config simulationAccount: ${simulationAccount.address} is not set right`, "InvalidSimulateAccount" /* InvalidSimulateAccount */);
    }
    const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    if (simulateRes.error != null) {
      throw new ClmmpoolsError(`fetch position rewards error code: ${simulateRes.error ?? "unknown error"}, please check config and params`, "InvalidConfig" /* InvalidConfig */);
    }
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `FetchPositionRewardsEvent`;
    });
    if (valueData.length === 0) {
      return [];
    }
    if (valueData.length !== params.length) {
      throw new ClmmpoolsError("valueData.length !== params.pools.length");
    }
    const result = [];
    for (let i = 0; i < valueData.length; i += 1) {
      const posRrewarderResult = {
        poolAddress: params[i].poolAddress,
        positionId: params[i].positionId,
        rewarderAmountOwed: []
      };
      for (let j = 0; j < params[i].rewarderInfo.length; j += 1) {
        posRrewarderResult.rewarderAmountOwed.push({
          amount_owed: new import_bn16.default(valueData[i].parsedJson.data[j]),
          coin_address: params[i].rewarderInfo[j].coinAddress
        });
      }
      result.push(posRrewarderResult);
    }
    return result;
  }
  /**
   * Fetches the pool reward amount for a given account and pool object id.
   * @param {string} account - The target account.
   * @param {string} poolObjectId - The target pool object id.
   * @returns {Promise<number|null>} - A Promise that resolves with the fetched pool reward amount for the specified account and pool, or null if the fetch is unsuccessful.
   */
  async fetchPoolRewardersAmount(account, poolObjectId) {
    const pool = await this.sdk.Pool.getPool(poolObjectId);
    const positions = await this.sdk.Position.getPositionList(account, [poolObjectId]);
    const params = [];
    for (const position of positions) {
      params.push({
        poolAddress: pool.poolAddress,
        positionId: position.pos_object_id,
        rewarderInfo: pool.rewarder_infos,
        coinTypeA: pool.coinTypeA,
        coinTypeB: pool.coinTypeB
      });
    }
    const result = await this.fetchPosRewardersAmount(params);
    const rewarderAmount = [ZERO, ZERO, ZERO];
    if (result != null) {
      for (const posRewarderInfo of result) {
        for (let j = 0; j < posRewarderInfo.rewarderAmountOwed.length; j += 1) {
          rewarderAmount[j] = rewarderAmount[j].add(posRewarderInfo.rewarderAmountOwed[j].amount_owed);
        }
      }
    }
    return rewarderAmount;
  }
  async getPoolLowerAndUpperTicks(ticksHandle, positions) {
    const lowerTicks = [];
    const upperTicks = [];
    for (const pos of positions) {
      const tickLower = await this.sdk.Pool.getTickDataByIndex(ticksHandle, pos.tick_lower_index);
      const tickUpper = await this.sdk.Pool.getTickDataByIndex(ticksHandle, pos.tick_upper_index);
      lowerTicks.push(tickLower);
      upperTicks.push(tickUpper);
    }
    return [lowerTicks, upperTicks];
  }
  /**
   * Collect rewards from Position.
   * @param params
   * @param gasBudget
   * @returns
   */
  async collectRewarderTransactionPayload(params) {
    if (!checkInvalidSuiAddress(this._sdk.senderAddress)) {
      throw new ClmmpoolsError("this config sdk senderAddress is not set right", "InvalidSendAddress" /* InvalidSendAddress */);
    }
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress, null);
    let tx = new import_transactions6.TransactionBlock();
    tx = TransactionUtil.createCollectRewarderAndFeeParams(this._sdk, tx, params, allCoinAsset);
    return tx;
  }
  createCollectRewarderPaylod(params, tx, primaryCoinInputs) {
    const { clmm_pool, integrate } = this.sdk.sdkOptions;
    const clmmConfigs = getPackagerConfigs(clmm_pool);
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    params.rewarder_coin_types.forEach((type, index) => {
      if (tx) {
        tx.moveCall({
          target: `${integrate.published_at}::${ClmmIntegratePoolV2Module}::collect_reward`,
          typeArguments: [...typeArguments, type],
          arguments: [
            tx.object(clmmConfigs.global_config_id),
            tx.object(params.pool_id),
            tx.object(params.pos_id),
            tx.object(clmmConfigs.global_vault_id),
            primaryCoinInputs[index],
            tx.object(CLOCK_ADDRESS)
          ]
        });
      }
    });
    return tx;
  }
};

// src/modules/routerModule.ts
var import_bn17 = __toESM(require("bn.js"));
var import_cc_graph = require("@syntsugar/cc-graph");
var import_transactions7 = require("@mysten/sui.js/transactions");
function _pairSymbol(base, quote) {
  return {
    pair: `${base}-${quote}`,
    reversePair: `${quote}-${base}`
  };
}
var RouterModule = class {
  graph;
  pathProviders;
  coinProviders;
  _coinAddressMap;
  poolAddressMap;
  _sdk;
  constructor(sdk) {
    this.pathProviders = [];
    this.coinProviders = {
      coins: []
    };
    this.graph = new import_cc_graph.Graph(false);
    this._coinAddressMap = /* @__PURE__ */ new Map();
    this.poolAddressMap = /* @__PURE__ */ new Map();
    this._sdk = sdk;
    this.getPoolAddressMapAndDirection = this.getPoolAddressMapAndDirection.bind(this);
    this.setCoinList = this.setCoinList.bind(this);
    this.loadGraph = this.loadGraph.bind(this);
    this.addCoinProvider = this.addCoinProvider.bind(this);
    this.addPathProvider = this.addPathProvider.bind(this);
    this.preRouterSwapA2B2C = this.preRouterSwapA2B2C.bind(this);
    this.price = this.price.bind(this);
    this.getPoolWithTVL = this.getPoolWithTVL.bind(this);
  }
  get sdk() {
    return this._sdk;
  }
  /**
   * Get pool address map with direction
   * @param {string} base base coin
   * @param {string} quote quote coin
   * @returns {AddressAndDirection} address with direction
   */
  getPoolAddressMapAndDirection(base, quote) {
    const { pair, reversePair } = _pairSymbol(base, quote);
    let addressMap = this.poolAddressMap.get(pair);
    if (addressMap != null) {
      return {
        addressMap,
        direction: true
      };
    }
    addressMap = this.poolAddressMap.get(reversePair);
    if (addressMap != null) {
      return {
        addressMap,
        direction: false
      };
    }
    return void 0;
  }
  /**
   * set coin list in coin address map
   */
  setCoinList() {
    this.coinProviders.coins.forEach((coin) => {
      this._coinAddressMap.set(coin.address, coin);
    });
  }
  /**
   * Find best router must load graph first
   * @param {CoinProvider} coins all coins
   * @param {PathProvider} paths all paths
   */
  loadGraph(coins, paths) {
    this.addCoinProvider(coins);
    this.addPathProvider(paths);
    this.setCoinList();
    this.pathProviders.forEach((provider) => {
      const { paths: paths2 } = provider;
      paths2.forEach((path) => {
        const vertexA = this.graph.getVertexByKey(path.base) ?? new import_cc_graph.GraphVertex(path.base);
        const vertexB = this.graph.getVertexByKey(path.quote) ?? new import_cc_graph.GraphVertex(path.quote);
        this.graph.addEdge(new import_cc_graph.GraphEdge(vertexA, vertexB));
        const coinA = this._coinAddressMap.get(path.base);
        const coinB = this._coinAddressMap.get(path.quote);
        if (coinA != null && coinB != null) {
          const poolSymbol = _pairSymbol(path.base, path.quote).pair;
          this.poolAddressMap.set(poolSymbol, path.addressMap);
        }
      });
    });
  }
  /**
   * Add path provider to router graph
   * @param {PathProvider} provider path provider
   * @returns {RouterModule} module of router
   */
  addPathProvider(provider) {
    for (let i = 0; i < provider.paths.length; i += 1) {
      const { base, quote } = provider.paths[i];
      const compareResult = base.localeCompare(quote);
      if (compareResult < 0) {
        provider.paths[i].base = quote;
        provider.paths[i].quote = base;
      }
      if (base === "0x2::sui::SUI") {
        provider.paths[i].base = quote;
        provider.paths[i].quote = base;
      }
      if (quote === "0x2::sui::SUI") {
        provider.paths[i].base = base;
        provider.paths[i].quote = quote;
      }
    }
    this.pathProviders.push(provider);
    return this;
  }
  /**
   * Add coin provider to router graph
   * @param {CoinProvider} provider  coin provider
   * @returns {RouterModule} module of router
   */
  addCoinProvider(provider) {
    this.coinProviders = provider;
    return this;
  }
  /**
   * Get token info from coin address map
   * @param {string} key coin type
   * @returns {CoinNode | undefined}
   */
  tokenInfo(key) {
    return this._coinAddressMap.get(key);
  }
  /**
   * Get fee rate info from pool address map
   * @param from from coin type
   * @param to to coin type
   * @param address pool address
   * @returns fee rate of pool
   */
  getFeeRate(from, to, address) {
    const poolSymbol = _pairSymbol(from, to).pair;
    const addressMap = this.poolAddressMap.get(poolSymbol);
    if (addressMap != null) {
      for (const [key, value] of addressMap.entries()) {
        if (value === address) {
          return key * 100;
        }
      }
    }
    const poolSymbolRev = _pairSymbol(from, to).reversePair;
    const addressMapRev = this.poolAddressMap.get(poolSymbolRev);
    if (addressMapRev != null) {
      for (const [key, value] of addressMapRev.entries()) {
        if (value === address) {
          return key * 100;
        }
      }
    }
    return 0;
  }
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
  async price(from, to, amount, byAmountIn, priceSlippagePoint, partner, swapWithMultiPoolParams) {
    const fromCoin = this.tokenInfo(from);
    const toCoin = this.tokenInfo(to);
    if (fromCoin === void 0 || toCoin === void 0) {
      throw new ClmmpoolsError("From/To coin is undefined", "InvalidCoin" /* InvalidCoin */);
    }
    const fromVertex = this.graph.getVertexByKey(fromCoin.address);
    const toVertex = this.graph.getVertexByKey(toCoin.address);
    const pathIters = this.graph.findAllPath(fromVertex, toVertex);
    const allPaths = Array.from(pathIters);
    if (allPaths.length === 0) {
      throw new ClmmpoolsError("No find valid path in coin graph", "NotFoundPath" /* NotFoundPath */);
    }
    let preRouterSwapParams = [];
    for (let i = 0; i < allPaths.length; i += 1) {
      const path = allPaths[i];
      if (path.length > 3) {
        continue;
      }
      const fromAndTo = [];
      const swapDirection = [];
      const poolsAB = [];
      const poolsBC = [];
      for (let j = 0; j < path.length - 1; j += 1) {
        const subFrom = path[j].value.toString();
        const subTo = path[j + 1].value.toString();
        const addressMapAndDirection = this.getPoolAddressMapAndDirection(subFrom, subTo);
        const addressMap = addressMapAndDirection?.addressMap;
        const direction = addressMapAndDirection?.direction;
        if (addressMap != null && direction != null) {
          swapDirection.push(direction);
          fromAndTo.push(subFrom);
          fromAndTo.push(subTo);
          addressMap.forEach((address) => {
            if (j === 0) {
              poolsAB.push(address);
            } else {
              poolsBC.push(address);
            }
          });
        }
      }
      for (const poolAB of poolsAB) {
        if (poolsBC.length > 0) {
          for (const poolBC of poolsBC) {
            const param = {
              stepNums: 2,
              poolAB,
              poolBC,
              a2b: swapDirection[0],
              b2c: swapDirection[1],
              amount,
              byAmountIn,
              coinTypeA: fromAndTo[0],
              coinTypeB: fromAndTo[1],
              coinTypeC: fromAndTo[3]
            };
            preRouterSwapParams.push(param);
          }
        } else {
          const param = {
            stepNums: 1,
            poolAB,
            poolBC: void 0,
            a2b: swapDirection[0],
            b2c: void 0,
            amount,
            byAmountIn,
            coinTypeA: fromAndTo[0],
            coinTypeB: fromAndTo[1],
            coinTypeC: void 0
          };
          preRouterSwapParams.push(param);
        }
      }
    }
    const stepNumsOne = preRouterSwapParams.filter((item) => item.stepNums === 1);
    let notStepNumsOne = preRouterSwapParams.filter((item) => item.stepNums !== 1);
    let poolWithTvls = [];
    try {
      poolWithTvls = await this.getPoolWithTVL();
    } catch (err) {
      poolWithTvls = [];
    }
    if (poolWithTvls.length > 0) {
      const poolWithTvlsMap = new Map(poolWithTvls.map((item) => [item.poolAddress, item]));
      notStepNumsOne.sort((a, b) => {
        let aTvlMinimum = 0;
        let bTvlMinimum = 0;
        if (poolWithTvlsMap.has(a.poolAB) && poolWithTvlsMap.has(a.poolBC)) {
          const aPoolAB = poolWithTvlsMap.get(a.poolAB);
          const aPoolBC = poolWithTvlsMap.get(a.poolBC);
          aTvlMinimum = Math.min(aPoolAB.tvl, aPoolBC.tvl);
        }
        if (poolWithTvlsMap.has(b.poolAB) && poolWithTvlsMap.has(b.poolBC)) {
          const bPoolAB = poolWithTvlsMap.get(b.poolAB);
          const bPoolBC = poolWithTvlsMap.get(b.poolBC);
          bTvlMinimum = Math.min(bPoolAB.tvl, bPoolBC.tvl);
        }
        return bTvlMinimum - aTvlMinimum;
      });
    }
    preRouterSwapParams = [...stepNumsOne, ...notStepNumsOne];
    if (preRouterSwapParams.length === 0) {
      if (swapWithMultiPoolParams != null) {
        const preSwapResult2 = await this.sdk.Swap.preSwapWithMultiPool(swapWithMultiPoolParams);
        const onePath2 = {
          amountIn: new import_bn17.default(preSwapResult2.estimatedAmountIn),
          amountOut: new import_bn17.default(preSwapResult2.estimatedAmountOut),
          poolAddress: [preSwapResult2.poolAddress],
          a2b: [preSwapResult2.aToB],
          rawAmountLimit: byAmountIn ? [preSwapResult2.estimatedAmountOut] : [preSwapResult2.estimatedAmountIn],
          isExceed: preSwapResult2.isExceed,
          coinType: [from, to]
        };
        const swapWithRouterParams2 = {
          paths: [onePath2],
          partner,
          priceSlippagePoint
        };
        const result2 = {
          amountIn: new import_bn17.default(preSwapResult2.estimatedAmountIn),
          amountOut: new import_bn17.default(preSwapResult2.estimatedAmountOut),
          paths: [onePath2],
          a2b: preSwapResult2.aToB,
          b2c: void 0,
          byAmountIn,
          isExceed: preSwapResult2.isExceed,
          targetSqrtPrice: [preSwapResult2.estimatedEndSqrtPrice],
          currentSqrtPrice: [preSwapResult2.estimatedStartSqrtPrice],
          coinTypeA: from,
          coinTypeB: to,
          coinTypeC: void 0,
          createTxParams: swapWithRouterParams2
        };
        return result2;
      }
      throw new ClmmpoolsError("No parameters available for service downgrade", "NoDowngradeNeedParams" /* NoDowngradeNeedParams */);
    }
    const preSwapResult = await this.preRouterSwapA2B2C(preRouterSwapParams.slice(0, 16));
    if (preSwapResult == null) {
      if (swapWithMultiPoolParams != null) {
        const preSwapResult2 = await this.sdk.Swap.preSwapWithMultiPool(swapWithMultiPoolParams);
        const onePath2 = {
          amountIn: new import_bn17.default(preSwapResult2.estimatedAmountIn),
          amountOut: new import_bn17.default(preSwapResult2.estimatedAmountOut),
          poolAddress: [preSwapResult2.poolAddress],
          a2b: [preSwapResult2.aToB],
          rawAmountLimit: byAmountIn ? [preSwapResult2.estimatedAmountOut] : [preSwapResult2.estimatedAmountIn],
          isExceed: preSwapResult2.isExceed,
          coinType: [from, to]
        };
        const swapWithRouterParams2 = {
          paths: [onePath2],
          partner,
          priceSlippagePoint
        };
        const result3 = {
          amountIn: new import_bn17.default(preSwapResult2.estimatedAmountIn),
          amountOut: new import_bn17.default(preSwapResult2.estimatedAmountOut),
          paths: [onePath2],
          a2b: preSwapResult2.aToB,
          b2c: void 0,
          byAmountIn,
          isExceed: preSwapResult2.isExceed,
          targetSqrtPrice: [preSwapResult2.estimatedEndSqrtPrice],
          currentSqrtPrice: [preSwapResult2.estimatedStartSqrtPrice],
          coinTypeA: from,
          coinTypeB: to,
          coinTypeC: void 0,
          createTxParams: swapWithRouterParams2
        };
        return result3;
      }
      const result2 = {
        amountIn: ZERO,
        amountOut: ZERO,
        paths: [],
        a2b: false,
        b2c: false,
        byAmountIn,
        isExceed: true,
        targetSqrtPrice: [],
        currentSqrtPrice: [],
        coinTypeA: "",
        coinTypeB: "",
        coinTypeC: void 0,
        createTxParams: void 0
      };
      return result2;
    }
    const bestIndex = preSwapResult.index;
    const poolAddress = preRouterSwapParams[bestIndex].poolBC != null ? [preRouterSwapParams[bestIndex].poolAB, preRouterSwapParams[bestIndex].poolBC] : [preRouterSwapParams[bestIndex].poolAB];
    const rawAmountLimit = byAmountIn ? [preSwapResult.amountMedium, preSwapResult.amountOut] : [preSwapResult.amountIn, preSwapResult.amountMedium];
    const a2bs = [];
    a2bs.push(preRouterSwapParams[bestIndex].a2b);
    if (preSwapResult.stepNum > 1) {
      a2bs.push(preRouterSwapParams[bestIndex].b2c);
    }
    const coinTypes = [];
    coinTypes.push(preRouterSwapParams[bestIndex].coinTypeA);
    coinTypes.push(preRouterSwapParams[bestIndex].coinTypeB);
    if (preSwapResult.stepNum > 1) {
      coinTypes.push(preRouterSwapParams[bestIndex].coinTypeC);
    }
    const onePath = {
      amountIn: preSwapResult.amountIn,
      amountOut: preSwapResult.amountOut,
      poolAddress,
      a2b: a2bs,
      rawAmountLimit,
      isExceed: preSwapResult.isExceed,
      coinType: coinTypes
    };
    const swapWithRouterParams = {
      paths: [onePath],
      partner,
      priceSlippagePoint
    };
    const result = {
      amountIn: preSwapResult.amountIn,
      amountOut: preSwapResult.amountOut,
      paths: [onePath],
      a2b: preRouterSwapParams[bestIndex].a2b,
      b2c: preSwapResult.stepNum > 1 ? preRouterSwapParams[bestIndex].b2c : void 0,
      byAmountIn,
      isExceed: preSwapResult.isExceed,
      targetSqrtPrice: preSwapResult.targetSqrtPrice,
      currentSqrtPrice: preSwapResult.currentSqrtPrice,
      coinTypeA: preRouterSwapParams[bestIndex].coinTypeA,
      coinTypeB: preRouterSwapParams[bestIndex].coinTypeB,
      coinTypeC: preSwapResult.stepNum > 1 ? preRouterSwapParams[bestIndex].coinTypeC : void 0,
      createTxParams: swapWithRouterParams
    };
    return result;
  }
  async preRouterSwapA2B2C(params) {
    if (params.length === 0) {
      return null;
    }
    const { integrate, simulationAccount } = this.sdk.sdkOptions;
    const tx = new import_transactions7.TransactionBlock();
    for (const param of params) {
      if (param.stepNums > 1) {
        const args = [
          tx.object(param.poolAB),
          tx.object(param.poolBC),
          tx.pure(param.a2b),
          tx.pure(param.b2c),
          tx.pure(param.byAmountIn),
          tx.pure(param.amount.toString())
        ];
        const typeArguments = [];
        if (param.a2b) {
          typeArguments.push(param.coinTypeA, param.coinTypeB);
        } else {
          typeArguments.push(param.coinTypeB, param.coinTypeA);
        }
        if (param.b2c) {
          typeArguments.push(param.coinTypeB, param.coinTypeC);
        } else {
          typeArguments.push(param.coinTypeC, param.coinTypeB);
        }
        tx.moveCall({
          target: `${integrate.published_at}::${ClmmIntegrateRouterModule}::calculate_router_swap_result`,
          typeArguments,
          arguments: args
        });
      } else {
        const args = [tx.pure(param.poolAB), tx.pure(param.a2b), tx.pure(param.byAmountIn), tx.pure(param.amount.toString())];
        const typeArguments = param.a2b ? [param.coinTypeA, param.coinTypeB] : [param.coinTypeB, param.coinTypeA];
        tx.moveCall({
          target: `${integrate.published_at}::${ClmmExpectSwapModule}::get_expect_swap_result`,
          arguments: args,
          typeArguments
        });
      }
    }
    if (!checkInvalidSuiAddress(simulationAccount.address)) {
      throw new ClmmpoolsError("this config simulationAccount is not set right", "InvalidSimulateAccount" /* InvalidSimulateAccount */);
    }
    const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `CalculatedRouterSwapResultEvent` || extractStructTagFromType(item.type).name === `ExpectSwapResultEvent`;
    });
    if (valueData.length === 0) {
      return null;
    }
    let tempMaxAmount = params[0].byAmountIn ? ZERO : U64_MAX;
    let tempIndex = 0;
    for (let i = 0; i < valueData.length; i += 1) {
      if (valueData[i].parsedJson.data.is_exceed) {
        continue;
      }
      if (params[0].byAmountIn) {
        const amount = new import_bn17.default(valueData[i].parsedJson.data.amount_out);
        if (amount.gt(tempMaxAmount)) {
          tempIndex = i;
          tempMaxAmount = amount;
        }
      } else {
        const amount = params[i].stepNums > 1 ? new import_bn17.default(valueData[i].parsedJson.data.amount_in) : new import_bn17.default(valueData[i].parsedJson.data.amount_in).add(new import_bn17.default(valueData[i].parsedJson.data.fee_amount));
        if (amount.lt(tempMaxAmount)) {
          tempIndex = i;
          tempMaxAmount = amount;
        }
      }
    }
    const currentSqrtPrice = [];
    const targetSqrtPrice = [];
    if (params[tempIndex].stepNums > 1) {
      targetSqrtPrice.push(
        valueData[tempIndex].parsedJson.data.target_sqrt_price_ab,
        valueData[tempIndex].parsedJson.data.target_sqrt_price_cd
      );
      currentSqrtPrice.push(
        valueData[tempIndex].parsedJson.data.current_sqrt_price_ab,
        valueData[tempIndex].parsedJson.data.current_sqrt_price_cd
      );
    } else {
      targetSqrtPrice.push(valueData[tempIndex].parsedJson.data.after_sqrt_price);
      currentSqrtPrice.push(valueData[tempIndex].parsedJson.current_sqrt_price);
    }
    const result = {
      index: tempIndex,
      amountIn: params[0].byAmountIn ? params[tempIndex].amount : tempMaxAmount,
      amountMedium: valueData[tempIndex].parsedJson.data.amount_medium,
      amountOut: params[0].byAmountIn ? tempMaxAmount : params[tempIndex].amount,
      targetSqrtPrice,
      currentSqrtPrice,
      isExceed: valueData[tempIndex].parsedJson.data.is_exceed,
      stepNum: params[tempIndex].stepNums
    };
    return result;
  }
  async getPoolWithTVL() {
    const result = [];
    const { swapCountUrl } = this._sdk.sdkOptions;
    if (!swapCountUrl) {
      return result;
    }
    let response;
    try {
      response = await fetch(swapCountUrl);
    } catch (e) {
      throw new ClmmpoolsError(`Failed to get pool list with liquidity from ${swapCountUrl}.`, "InvalidSwapCountUrl" /* InvalidSwapCountUrl */);
    }
    let json;
    try {
      json = await response.json();
    } catch (e) {
      throw new ClmmpoolsError(`Failed tp [arse response from ${swapCountUrl}].`, "InvalidSwapCountUrl" /* InvalidSwapCountUrl */);
    }
    if (json.code !== 200) {
      throw new ClmmpoolsError(
        `Failed to get pool list from ${swapCountUrl}. Statu code is ${json.code}.`,
        "InvalidSwapCountUrl" /* InvalidSwapCountUrl */
      );
    }
    const pools = json.data.pools;
    for (const pool of pools) {
      result.push({
        poolAddress: pool.swap_account,
        tvl: Number(pool.tvl_in_usd)
      });
    }
    return result;
  }
};

// src/modules/swapModule.ts
var import_bn18 = __toESM(require("bn.js"));
var import_decimal8 = __toESM(require("decimal.js"));
var import_transactions8 = require("@mysten/sui.js/transactions");
var AMM_SWAP_MODULE = "amm_swap";
var POOL_STRUCT = "Pool";
var SwapModule = class {
  _sdk;
  constructor(sdk) {
    this._sdk = sdk;
  }
  get sdk() {
    return this._sdk;
  }
  calculateSwapFee(paths) {
    let fee = d(0);
    paths.forEach((item) => {
      const pathCount = item.basePaths.length;
      if (pathCount > 0) {
        const path = item.basePaths[0];
        const feeRate = path.label === "Cetus" ? new import_decimal8.default(path.feeRate).div(10 ** 6) : new import_decimal8.default(path.feeRate).div(10 ** 9);
        const feeAmount = d(path.inputAmount).div(10 ** path.fromDecimal).mul(feeRate);
        fee = fee.add(feeAmount);
        if (pathCount > 1) {
          const path2 = item.basePaths[1];
          const price1 = path.direction ? path.currentPrice : new import_decimal8.default(1).div(path.currentPrice);
          const price2 = path2.direction ? path2.currentPrice : new import_decimal8.default(1).div(path2.currentPrice);
          const feeRate2 = path2.label === "Cetus" ? new import_decimal8.default(path2.feeRate).div(10 ** 6) : new import_decimal8.default(path2.feeRate).div(10 ** 9);
          const feeAmount2 = d(path2.outputAmount).div(10 ** path2.toDecimal).mul(feeRate2);
          const fee2 = feeAmount2.div(price1.mul(price2));
          fee = fee.add(fee2);
        }
      }
    });
    return fee.toString();
  }
  calculateSwapPriceImpact(paths) {
    let impactValue = d(0);
    paths.forEach((item) => {
      const pathCount = item.basePaths.length;
      if (pathCount === 1) {
        const path = item.basePaths[0];
        const outputAmount = d(path.outputAmount).div(10 ** path.toDecimal);
        const inputAmount = d(path.inputAmount).div(10 ** path.fromDecimal);
        const rate = outputAmount.div(inputAmount);
        const cprice = path.direction ? new import_decimal8.default(path.currentPrice) : new import_decimal8.default(1).div(path.currentPrice);
        impactValue = impactValue.add(this.calculateSingleImpact(rate, cprice));
      }
      if (pathCount === 2) {
        const path = item.basePaths[0];
        const path2 = item.basePaths[1];
        const cprice1 = path.direction ? new import_decimal8.default(path.currentPrice) : new import_decimal8.default(1).div(path.currentPrice);
        const cprice2 = path2.direction ? new import_decimal8.default(path2.currentPrice) : new import_decimal8.default(1).div(path2.currentPrice);
        const cprice = cprice1.mul(cprice2);
        const outputAmount = new import_decimal8.default(path2.outputAmount).div(10 ** path2.toDecimal);
        const inputAmount = new import_decimal8.default(path.inputAmount).div(10 ** path.fromDecimal);
        const rate = outputAmount.div(inputAmount);
        impactValue = impactValue.add(this.calculateSingleImpact(rate, cprice));
      }
    });
    return impactValue.toString();
  }
  calculateSingleImpact = (rate, cprice) => {
    return cprice.minus(rate).div(cprice).mul(100);
  };
  /**
   * Performs a pre-swap with multiple pools.
   *
   * @param {PreSwapWithMultiPoolParams} params The parameters for the pre-swap.
   * @returns {Promise<SwapWithMultiPoolData>} A promise that resolves to the swap data.
   */
  async preSwapWithMultiPool(params) {
    const { integrate, simulationAccount } = this.sdk.sdkOptions;
    const tx = new import_transactions8.TransactionBlock();
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    for (let i = 0; i < params.poolAddresses.length; i += 1) {
      const args = [tx.pure(params.poolAddresses[i]), tx.pure(params.a2b), tx.pure(params.byAmountIn), tx.pure(params.amount)];
      tx.moveCall({
        target: `${integrate.published_at}::${ClmmFetcherModule}::calculate_swap_result`,
        arguments: args,
        typeArguments
      });
    }
    if (!checkInvalidSuiAddress(simulationAccount.address)) {
      throw new ClmmpoolsError("this config simulationAccount is not set right", "InvalidSimulateAccount" /* InvalidSimulateAccount */);
    }
    const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    if (simulateRes.error != null) {
      throw new ClmmpoolsError(`pre swap with multi pools error code: ${simulateRes.error ?? "unknown error"}, please check config and params`, "InvalidConfig" /* InvalidConfig */);
    }
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `CalculatedSwapResultEvent`;
    });
    if (valueData.length === 0) {
      return null;
    }
    if (valueData.length !== params.poolAddresses.length) {
      throw new ClmmpoolsError("valueData.length !== params.pools.length", "ParamsLengthNotEqual" /* ParamsLengthNotEqual */);
    }
    let tempMaxAmount = params.byAmountIn ? ZERO : U64_MAX;
    let tempIndex = 0;
    for (let i = 0; i < valueData.length; i += 1) {
      if (valueData[i].parsedJson.data.is_exceed) {
        continue;
      }
      if (params.byAmountIn) {
        const amount = new import_bn18.default(valueData[i].parsedJson.data.amount_out);
        if (amount.gt(tempMaxAmount)) {
          tempIndex = i;
          tempMaxAmount = amount;
        }
      } else {
        const amount = new import_bn18.default(valueData[i].parsedJson.data.amount_out);
        if (amount.lt(tempMaxAmount)) {
          tempIndex = i;
          tempMaxAmount = amount;
        }
      }
    }
    return this.transformSwapWithMultiPoolData(
      {
        poolAddress: params.poolAddresses[tempIndex],
        a2b: params.a2b,
        byAmountIn: params.byAmountIn,
        amount: params.amount,
        coinTypeA: params.coinTypeA,
        coinTypeB: params.coinTypeB
      },
      valueData[tempIndex].parsedJson
    );
  }
  /**
   * Performs a pre-swap.
   *
   * @param {PreSwapParams} params The parameters for the pre-swap.
   * @returns {Promise<PreSwapParams>} A promise that resolves to the swap data.
   */
  async preswap(params) {
    const { integrate, simulationAccount } = this.sdk.sdkOptions;
    const tx = new import_transactions8.TransactionBlock();
    const typeArguments = [params.coinTypeA, params.coinTypeB];
    const args = [tx.pure(params.pool.poolAddress), tx.pure(params.a2b), tx.pure(params.byAmountIn), tx.pure(params.amount)];
    tx.moveCall({
      target: `${integrate.published_at}::${ClmmFetcherModule}::calculate_swap_result`,
      arguments: args,
      typeArguments
    });
    if (!checkInvalidSuiAddress(simulationAccount.address)) {
      throw new ClmmpoolsError("this config simulationAccount is not set right", "InvalidSimulateAccount" /* InvalidSimulateAccount */);
    }
    const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: simulationAccount.address
    });
    if (simulateRes.error != null) {
      throw new ClmmpoolsError(`preswap error code: ${simulateRes.error ?? "unknown error"}, please check config and params`, "InvalidConfig" /* InvalidConfig */);
    }
    const valueData = simulateRes.events?.filter((item) => {
      return extractStructTagFromType(item.type).name === `CalculatedSwapResultEvent`;
    });
    if (valueData.length === 0) {
      return null;
    }
    return this.transformSwapData(params, valueData[0].parsedJson.data);
  }
  transformSwapData(params, data) {
    const estimatedAmountIn = data.amount_in && data.fee_amount ? new import_bn18.default(data.amount_in).add(new import_bn18.default(data.fee_amount)).toString() : "";
    return {
      poolAddress: params.pool.poolAddress,
      currentSqrtPrice: params.currentSqrtPrice,
      estimatedAmountIn,
      estimatedAmountOut: data.amount_out,
      estimatedEndSqrtPrice: data.after_sqrt_price,
      estimatedFeeAmount: data.fee_amount,
      isExceed: data.is_exceed,
      amount: params.amount,
      aToB: params.a2b,
      byAmountIn: params.byAmountIn
    };
  }
  transformSwapWithMultiPoolData(params, jsonData) {
    const { data } = jsonData;
    const estimatedAmountIn = data.amount_in && data.fee_amount ? new import_bn18.default(data.amount_in).add(new import_bn18.default(data.fee_amount)).toString() : "";
    return {
      poolAddress: params.poolAddress,
      estimatedAmountIn,
      estimatedAmountOut: data.amount_out,
      estimatedEndSqrtPrice: data.after_sqrt_price,
      estimatedStartSqrtPrice: jsonData.current_sqrt_price,
      estimatedFeeAmount: data.fee_amount,
      isExceed: data.is_exceed,
      amount: params.amount,
      aToB: params.a2b,
      byAmountIn: params.byAmountIn
    };
  }
  /**
   * Calculates the rates for a swap.
   * @param {CalculateRatesParams} params The parameters for the calculation.
   * @returns {CalculateRatesResult} The results of the calculation.
   */
  calculateRates(params) {
    const { currentPool } = params;
    const poolData = transClmmpoolDataWithoutTicks(currentPool);
    let ticks;
    if (params.a2b) {
      ticks = params.swapTicks.sort((a, b) => {
        return b.index - a.index;
      });
    } else {
      ticks = params.swapTicks.sort((a, b) => {
        return a.index - b.index;
      });
    }
    const swapResult = computeSwap(params.a2b, params.byAmountIn, params.amount, poolData, ticks);
    let isExceed = false;
    if (params.byAmountIn) {
      isExceed = swapResult.amountIn.lt(params.amount);
    } else {
      isExceed = swapResult.amountOut.lt(params.amount);
    }
    const sqrtPriceLimit = SwapUtils.getDefaultSqrtPriceLimit(params.a2b);
    if (params.a2b && swapResult.nextSqrtPrice.lt(sqrtPriceLimit)) {
      isExceed = true;
    }
    if (!params.a2b && swapResult.nextSqrtPrice.gt(sqrtPriceLimit)) {
      isExceed = true;
    }
    let extraComputeLimit = 0;
    if (swapResult.crossTickNum > 6 && swapResult.crossTickNum < 40) {
      extraComputeLimit = 22e3 * (swapResult.crossTickNum - 6);
    }
    if (swapResult.crossTickNum > 40) {
      isExceed = true;
    }
    const prePrice = TickMath.sqrtPriceX64ToPrice(poolData.currentSqrtPrice, params.decimalsA, params.decimalsB).toNumber();
    const afterPrice = TickMath.sqrtPriceX64ToPrice(swapResult.nextSqrtPrice, params.decimalsA, params.decimalsB).toNumber();
    const priceImpactPct = Math.abs(prePrice - afterPrice) / prePrice * 100;
    return {
      estimatedAmountIn: swapResult.amountIn,
      estimatedAmountOut: swapResult.amountOut,
      estimatedEndSqrtPrice: swapResult.nextSqrtPrice,
      estimatedFeeAmount: swapResult.feeAmount,
      isExceed,
      extraComputeLimit,
      amount: params.amount,
      aToB: params.a2b,
      byAmountIn: params.byAmountIn,
      priceImpactPct
    };
  }
  /**
   * create swap transaction payload
   * @param params
   * @param gasEstimateArg When the fix input amount is SUI, gasEstimateArg can control whether to recalculate the number of SUI to prevent insufficient gas.
   * If this parameter is not passed, gas estimation is not performed
   * @returns
   */
  async createSwapTransactionPayload(params, gasEstimateArg) {
    if (this._sdk.senderAddress.length === 0) {
      throw Error("this config sdk senderAddress is empty");
    }
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress);
    if (gasEstimateArg) {
      const { isAdjustCoinA, isAdjustCoinB } = findAdjustCoin(params);
      if (params.a2b && isAdjustCoinA || !params.a2b && isAdjustCoinB) {
        const tx = await TransactionUtil.buildSwapTransactionForGas(this._sdk, params, allCoinAsset, gasEstimateArg);
        return tx;
      }
    }
    return TransactionUtil.buildSwapTransaction(this.sdk, params, allCoinAsset);
  }
  /**
  * create swap transaction without transfer coins payload
  * @param params
  * @param gasEstimateArg When the fix input amount is SUI, gasEstimateArg can control whether to recalculate the number of SUI to prevent insufficient gas.
  * If this parameter is not passed, gas estimation is not performed
  * @returns tx and coin ABs
  */
  async createSwapTransactionWithoutTransferCoinsPayload(params, gasEstimateArg) {
    if (this._sdk.senderAddress.length === 0) {
      throw Error("this config sdk senderAddress is empty");
    }
    const allCoinAsset = await this._sdk.getOwnerCoinAssets(this._sdk.senderAddress);
    if (gasEstimateArg) {
      const { isAdjustCoinA, isAdjustCoinB } = findAdjustCoin(params);
      if (params.a2b && isAdjustCoinA || !params.a2b && isAdjustCoinB) {
        const res = await TransactionUtil.buildSwapTransactionWithoutTransferCoinsForGas(this._sdk, params, allCoinAsset, gasEstimateArg);
        return res;
      }
    }
    return TransactionUtil.buildSwapTransactionWithoutTransferCoins(this.sdk, params, allCoinAsset);
  }
};

// src/modules/tokenModule.ts
var import_js_base64 = require("js-base64");
var import_transactions9 = require("@mysten/sui.js/transactions");
var import_utils22 = require("@mysten/sui.js/utils");
var TokenModule = class {
  _sdk;
  _cache = {};
  constructor(sdk) {
    this._sdk = sdk;
  }
  get sdk() {
    return this._sdk;
  }
  /**
   * Get all registered token list.
   * @param forceRefresh
   * @returns
   */
  async getAllRegisteredTokenList(forceRefresh = false) {
    const list = await this.factchTokenList("", forceRefresh);
    return list;
  }
  /**
   * Get token list by owner address.
   * @param listOwnerAddr
   * @param forceRefresh
   * @returns
   */
  async getOwnerTokenList(listOwnerAddr = "", forceRefresh = false) {
    const list = await this.factchTokenList(listOwnerAddr, forceRefresh);
    return list;
  }
  /**
   * Get all registered pool list
   * @param forceRefresh
   * @returns
   */
  async getAllRegisteredPoolList(forceRefresh = false) {
    const list = await this.factchPoolList("", forceRefresh);
    return list;
  }
  /**
   * Get pool list by owner address.
   * @param listOwnerAddr
   * @param forceRefresh
   * @returns
   */
  async getOwnerPoolList(listOwnerAddr = "", forceRefresh = false) {
    const list = await this.factchPoolList(listOwnerAddr, forceRefresh);
    return list;
  }
  /**
   * Get warp pool list.
   * @param forceRefresh
   * @returns
   */
  async getWarpPoolList(forceRefresh = false) {
    const list = await this.factchWarpPoolList("", "", forceRefresh);
    return list;
  }
  /**
   * Get warp pool list by pool owner address and coin owner address.
   * @param poolOwnerAddr
   * @param coinOwnerAddr
   * @param forceRefresh
   * @returns
   */
  async getOwnerWarpPoolList(poolOwnerAddr = "", coinOwnerAddr = "", forceRefresh = false) {
    const list = await this.factchWarpPoolList(poolOwnerAddr, coinOwnerAddr, forceRefresh);
    return list;
  }
  /**
   * Get token list by coin types.
   * @param coinTypes
   * @returns
   */
  async getTokenListByCoinTypes(coinTypes) {
    const tokenMap = {};
    const cacheKey = `getAllRegisteredTokenList`;
    const cacheData = this.getCache(cacheKey);
    if (cacheData !== void 0) {
      const tokenList = cacheData;
      for (const coinType of coinTypes) {
        for (const token of tokenList) {
          if (normalizeCoinType(coinType) === normalizeCoinType(token.address)) {
            tokenMap[coinType] = token;
            continue;
          }
        }
      }
    }
    const unFindArray = coinTypes.filter((coinType) => {
      return tokenMap[coinType] === void 0;
    });
    for (const coinType of unFindArray) {
      const metadataKey = `${coinType}_metadata`;
      const metadata = this.getCache(metadataKey);
      if (metadata !== void 0) {
        tokenMap[coinType] = metadata;
      } else {
        const data = await this._sdk.fullClient.getCoinMetadata({
          coinType
        });
        if (data) {
          const token = {
            id: data.id,
            name: data.name,
            symbol: data.symbol,
            official_symbol: data.symbol,
            coingecko_id: "",
            decimals: data.decimals,
            project_url: "",
            logo_url: data.iconUrl,
            address: coinType
          };
          tokenMap[coinType] = token;
          this.updateCache(metadataKey, token, cacheTime24h);
        }
      }
    }
    return tokenMap;
  }
  async factchTokenList(listOwnerAddr = "", forceRefresh = false) {
    const { simulationAccount, token } = this.sdk.sdkOptions;
    const cacheKey = `getAllRegisteredTokenList`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData !== void 0) {
      return cacheData;
    }
    const isOwnerRequest = listOwnerAddr.length > 0;
    const limit = 512;
    let index = 0;
    let allTokenList = [];
    if (token === void 0) {
      throw Error("please config token ofsdkOptions");
    }
    const tokenConfig = getPackagerConfigs(token);
    while (true) {
      const tx = new import_transactions9.TransactionBlock();
      tx.moveCall({
        target: `${token.published_at}::coin_list::${isOwnerRequest ? "fetch_full_list_with_limit" : "fetch_all_registered_coin_info_with_limit"}`,
        arguments: isOwnerRequest ? [tx.pure(tokenConfig.coin_registry_id), tx.pure(listOwnerAddr), tx.pure(index), tx.pure(limit)] : [tx.pure(tokenConfig.coin_registry_id), tx.pure(index), tx.pure(limit)]
      });
      const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: simulationAccount.address
      });
      const tokenList = [];
      simulateRes.events?.forEach((item) => {
        const formatType = extractStructTagFromType(item.type);
        if (formatType.full_address === `${token.published_at}::coin_list::FetchCoinListEvent`) {
          item.parsedJson.full_list.value_list.forEach((item2) => {
            tokenList.push(this.transformData(item2, false));
          });
        }
      });
      allTokenList = [...allTokenList, ...tokenList];
      if (tokenList.length < limit) {
        break;
      } else {
        index = allTokenList.length;
      }
    }
    return allTokenList;
  }
  async factchPoolList(listOwnerAddr = "", forceRefresh = false) {
    const { simulationAccount, token } = this.sdk.sdkOptions;
    const cacheKey = `getAllRegisteredPoolList`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData !== void 0) {
      return cacheData;
    }
    let allPoolList = [];
    const limit = 512;
    let index = 0;
    const isOwnerRequest = listOwnerAddr.length > 0;
    if (token === void 0) {
      throw Error("please config token ofsdkOptions");
    }
    const tokenConfig = getPackagerConfigs(token);
    while (true) {
      const tx = new import_transactions9.TransactionBlock();
      tx.moveCall({
        target: `${token.published_at}::lp_list::${isOwnerRequest ? "fetch_full_list_with_limit" : "fetch_all_registered_coin_info_with_limit"}`,
        arguments: isOwnerRequest ? [tx.pure(tokenConfig.pool_registry_id), tx.pure(listOwnerAddr), tx.pure(index), tx.pure(limit)] : [tx.pure(tokenConfig.pool_registry_id), tx.pure(index), tx.pure(limit)]
      });
      if (!checkInvalidSuiAddress(simulationAccount.address)) {
        throw new ClmmpoolsError("this config simulationAccount is not set right", "InvalidSimulateAccount" /* InvalidSimulateAccount */);
      }
      const simulateRes = await this.sdk.fullClient.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: simulationAccount.address
      });
      const poolList = [];
      simulateRes.events?.forEach((item) => {
        const formatType = extractStructTagFromType(item.type);
        if (formatType.full_address === `${token.published_at}::lp_list::FetchPoolListEvent`) {
          item.parsedJson.full_list.value_list.forEach((item2) => {
            poolList.push(this.transformData(item2, true));
          });
        }
      });
      allPoolList = [...allPoolList, ...poolList];
      if (poolList.length < limit) {
        break;
      } else {
        index = allPoolList.length;
      }
    }
    return allPoolList;
  }
  async factchWarpPoolList(poolOwnerAddr = "", coinOwnerAddr = "", forceRefresh = false) {
    const poolList = await this.factchPoolList(poolOwnerAddr, forceRefresh);
    if (poolList.length === 0) {
      return [];
    }
    const tokenList = await this.factchTokenList(coinOwnerAddr, forceRefresh);
    const lpPoolArray = [];
    for (const pool of poolList) {
      for (const token of tokenList) {
        if (token.address === pool.coin_a_address) {
          pool.coinA = token;
        }
        if (token.address === pool.coin_b_address) {
          pool.coinB = token;
        }
        continue;
      }
      lpPoolArray.push(pool);
    }
    return lpPoolArray;
  }
  /**
   * Get the token config event.
   *
   * @param forceRefresh Whether to force a refresh of the event.
   * @returns The token config event.
   */
  async getTokenConfigEvent(forceRefresh = false) {
    const packageObjectId = this._sdk.sdkOptions.token.package_id;
    const cacheKey = `${packageObjectId}_getTokenConfigEvent`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData !== void 0) {
      return cacheData;
    }
    const packageObject = await this._sdk.fullClient.getObject({
      id: packageObjectId,
      options: {
        showPreviousTransaction: true
      }
    });
    const previousTx = getObjectPreviousTransactionDigest(packageObject);
    const objects = await this._sdk.fullClient.queryEventsByPage({ Transaction: previousTx });
    const tokenConfigEvent = {
      coin_registry_id: "",
      pool_registry_id: "",
      coin_list_owner: "",
      pool_list_owner: ""
    };
    if (objects.data.length > 0) {
      objects.data.forEach((item) => {
        const formatType = extractStructTagFromType(item.type);
        if (item.transactionModule === "coin_list") {
          switch (formatType.name) {
            case `InitListEvent`:
              tokenConfigEvent.coin_list_owner = item.parsedJson.list_id;
              break;
            case `InitRegistryEvent`:
              tokenConfigEvent.coin_registry_id = item.parsedJson.registry_id;
              break;
            default:
              break;
          }
        } else if (item.transactionModule === "lp_list") {
          switch (formatType.name) {
            case `InitListEvent<address>`:
              tokenConfigEvent.pool_list_owner = item.parsedJson.list_id;
              break;
            case `InitRegistryEvent<address>`:
              tokenConfigEvent.pool_registry_id = item.parsedJson.registry_id;
              break;
            default:
              break;
          }
        }
      });
    }
    if (tokenConfigEvent.coin_registry_id.length > 0) {
      this.updateCache(cacheKey, tokenConfigEvent, cacheTime24h);
    }
    return tokenConfigEvent;
  }
  transformData(item, isPoolData) {
    const token = { ...item };
    if (isPoolData) {
      try {
        token.coin_a_address = extractStructTagFromType(token.coin_a_address).full_address;
        token.coin_b_address = extractStructTagFromType(token.coin_b_address).full_address;
      } catch (error) {
      }
    } else {
      token.address = extractStructTagFromType(token.address).full_address;
    }
    if (item.extensions) {
      const extensionsDataArray = item.extensions.contents;
      for (const item2 of extensionsDataArray) {
        const { key } = item2;
        let { value } = item2;
        if (key === "labels") {
          try {
            value = JSON.parse(decodeURIComponent(import_js_base64.Base64.decode(value)));
          } catch (error) {
          }
        }
        if (key === "pyth_id") {
          value = (0, import_utils22.normalizeSuiObjectId)(value);
        }
        token[key] = value;
      }
      delete token.extensions;
    }
    return token;
  }
  /**
   * Updates the cache for the given key.
   *
   * @param key The key of the cache entry to update.
   * @param data The data to store in the cache.
   * @param time The time in minutes after which the cache entry should expire.
   */
  updateCache(key, data, time = cacheTime5min) {
    let cacheData = this._cache[key];
    if (cacheData) {
      cacheData.overdueTime = getFutureTime(time);
      cacheData.value = data;
    } else {
      cacheData = new CachedContent(data, getFutureTime(time));
    }
    this._cache[key] = cacheData;
  }
  /**
   * Gets the cache entry for the given key.
   *
   * @param key The key of the cache entry to get.
   * @param forceRefresh Whether to force a refresh of the cache entry.
   * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
   */
  getCache(key, forceRefresh = false) {
    const cacheData = this._cache[key];
    const isValid = cacheData?.isValid();
    if (!forceRefresh && isValid) {
      return cacheData.value;
    }
    if (!isValid) {
      delete this._cache[key];
    }
    return void 0;
  }
};

// src/modules/routerModuleV2.ts
var import_bn19 = __toESM(require("bn.js"));
var import_decimal9 = __toESM(require("decimal.js"));
var import_uuid = require("uuid");
var RouterModuleV2 = class {
  _sdk;
  constructor(sdk) {
    this._sdk = sdk;
  }
  get sdk() {
    return this._sdk;
  }
  calculatePrice(currentSqrtPrice, fromDecimals, toDecimals, a2b, label) {
    const decimalA = a2b ? fromDecimals : toDecimals;
    const decimalB = a2b ? toDecimals : fromDecimals;
    if (label === "Cetus") {
      const price2 = TickMath.sqrtPriceX64ToPrice(currentSqrtPrice, decimalA, decimalB);
      return price2;
    }
    const price = new import_decimal9.default(currentSqrtPrice.toString()).div(new import_decimal9.default(10).pow(new import_decimal9.default(decimalB + 9 - decimalA)));
    return price;
  }
  parseJsonResult(data) {
    const result = {
      isExceed: data.is_exceed,
      isTimeout: data.is_timeout,
      inputAmount: data.input_amount,
      outputAmount: data.output_amount,
      fromCoin: data.from_coin,
      toCoin: data.to_coin,
      byAmountIn: data.by_amount_in,
      splitPaths: data.split_paths.map((path) => {
        const splitPath = {
          pathIndex: path.path_index,
          lastQuoteOutput: path.last_quote_output,
          percent: path.percent,
          basePaths: path.best_path.map((basePath) => {
            return {
              direction: basePath.direction,
              label: basePath.label,
              poolAddress: basePath.provider,
              fromCoin: basePath.from_coin,
              toCoin: basePath.to_coin,
              outputAmount: basePath.output_amount,
              inputAmount: basePath.input_amount,
              feeRate: basePath.fee_rate,
              currentSqrtPrice: new import_bn19.default(basePath.current_sqrt_price.toString()),
              afterSqrtPrice: basePath.label === "Cetus" ? new import_bn19.default(basePath.after_sqrt_price.toString()) : ZERO,
              fromDecimal: basePath.from_decimal,
              toDecimal: basePath.to_decimal,
              currentPrice: this.calculatePrice(
                new import_bn19.default(basePath.current_sqrt_price.toString()),
                basePath.from_decimal,
                basePath.to_decimal,
                basePath.direction,
                basePath.label
              )
            };
          }),
          inputAmount: path.input_amount,
          outputAmount: path.output_amount
        };
        return splitPath;
      })
    };
    return result;
  }
  async fetchWithTimeout(url, _options, timeout) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, {
        ..._options,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return response;
    } catch (err) {
      return null;
    }
  }
  async fetchAndParseData(apiUrl, _options) {
    try {
      const timeoutDuration = 1500;
      const response = await this.fetchWithTimeout(apiUrl, _options, timeoutDuration);
      if (response.status === 200) {
        return this.parseJsonResult(await response.json());
      }
      return null;
    } catch (error) {
      return null;
    }
  }
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
  async getBestRouter(from, to, amount, byAmountIn, priceSplitPoint, partner, _senderAddress, swapWithMultiPoolParams, orderSplit = false, externalRouter = false, lpChanges = []) {
    let result = null;
    let version = "v2";
    let options = {};
    let apiUrl = this.sdk.sdkOptions.aggregatorUrl;
    if (lpChanges.length > 0) {
      const url = new URL(apiUrl);
      apiUrl = `${url.protocol}//${url.hostname}/router_with_lp_changes`;
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from,
          to,
          amount,
          by_amount_in: byAmountIn,
          order_split: orderSplit,
          external_router: externalRouter,
          sender_address: "None",
          request_id: encodeURIComponent((0, import_uuid.v4)()),
          lp_changes: lpChanges
        })
      };
    } else {
      apiUrl = `
      ${apiUrl}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&amount=${encodeURIComponent(
        amount
      )}&by_amount_in=${encodeURIComponent(byAmountIn)}&order_split=${encodeURIComponent(orderSplit)}&external_router=${encodeURIComponent(
        externalRouter
      )}&sender_address=''&request_id=${encodeURIComponent((0, import_uuid.v4)())}
      `;
    }
    result = await this.fetchAndParseData(apiUrl, options);
    if (result?.isTimeout || result == null) {
      const priceResult = await this.sdk.Router.price(
        from,
        to,
        new import_bn19.default(amount),
        byAmountIn,
        priceSplitPoint,
        partner,
        swapWithMultiPoolParams
      );
      const splitPaths = [];
      for (const path of priceResult.paths) {
        const basePaths = [];
        if (path.poolAddress.length > 1) {
          const fromDecimal0 = this.sdk.Router.tokenInfo(path.coinType[0]).decimals;
          const toDecimal0 = this.sdk.Router.tokenInfo(path.coinType[1]).decimals;
          const currentPrice = path.a2b[0] ? TickMath.sqrtPriceX64ToPrice(new import_bn19.default(priceResult.currentSqrtPrice[0]), fromDecimal0, toDecimal0) : TickMath.sqrtPriceX64ToPrice(new import_bn19.default(priceResult.currentSqrtPrice[0]), toDecimal0, fromDecimal0);
          const path0 = {
            direction: path.a2b[0],
            label: "Cetus",
            poolAddress: path.poolAddress[0],
            fromCoin: path.coinType[0],
            toCoin: path.coinType[1],
            feeRate: this.sdk.Router.getFeeRate(path.coinType[0], path.coinType[1], path.poolAddress[0]),
            outputAmount: priceResult.byAmountIn ? path.rawAmountLimit[0].toString() : path.rawAmountLimit[1].toString(),
            inputAmount: path.amountIn.toString(),
            currentSqrtPrice: priceResult.currentSqrtPrice[0],
            currentPrice,
            fromDecimal: fromDecimal0,
            toDecimal: toDecimal0
          };
          const fromDecimal1 = this.sdk.Router.tokenInfo(path.coinType[1]).decimals;
          const toDecimal1 = this.sdk.Router.tokenInfo(path.coinType[2]).decimals;
          const currentPrice1 = path.a2b[1] ? TickMath.sqrtPriceX64ToPrice(new import_bn19.default(priceResult.currentSqrtPrice[1]), fromDecimal1, toDecimal1) : TickMath.sqrtPriceX64ToPrice(new import_bn19.default(priceResult.currentSqrtPrice[1]), toDecimal1, fromDecimal1);
          const path1 = {
            direction: path.a2b[1],
            label: "Cetus",
            poolAddress: path.poolAddress[1],
            fromCoin: path.coinType[1],
            toCoin: path.coinType[2],
            feeRate: this.sdk.Router.getFeeRate(path.coinType[1], path.coinType[2], path.poolAddress[1]),
            outputAmount: path.amountOut.toString(),
            inputAmount: priceResult.byAmountIn ? path.rawAmountLimit[0].toString() : path.rawAmountLimit[1].toString(),
            currentSqrtPrice: priceResult.currentSqrtPrice[1],
            currentPrice: currentPrice1,
            fromDecimal: fromDecimal1,
            toDecimal: toDecimal1
          };
          basePaths.push(path0, path1);
        } else {
          const fromDecimal = this.sdk.Router.tokenInfo(path.coinType[0]).decimals;
          const toDecimal = this.sdk.Router.tokenInfo(path.coinType[1]).decimals;
          const currentPrice = path.a2b[0] ? TickMath.sqrtPriceX64ToPrice(new import_bn19.default(priceResult.currentSqrtPrice[0]), fromDecimal, toDecimal) : TickMath.sqrtPriceX64ToPrice(new import_bn19.default(priceResult.currentSqrtPrice[0]), toDecimal, fromDecimal);
          const path0 = {
            direction: path.a2b[0],
            label: "Cetus",
            poolAddress: path.poolAddress[0],
            fromCoin: path.coinType[0],
            toCoin: path.coinType[1],
            feeRate: this.sdk.Router.getFeeRate(path.coinType[0], path.coinType[1], path.poolAddress[0]),
            outputAmount: path.amountOut.toString(),
            inputAmount: path.amountIn.toString(),
            currentSqrtPrice: priceResult.currentSqrtPrice[0],
            currentPrice,
            fromDecimal,
            toDecimal
          };
          basePaths.push(path0);
        }
        const splitPath = {
          percent: Number(path.amountIn) / Number(priceResult.amountIn) * 100,
          inputAmount: Number(path.amountIn.toString()),
          outputAmount: Number(path.amountOut.toString()),
          pathIndex: 0,
          lastQuoteOutput: 0,
          basePaths
        };
        splitPaths.push(splitPath);
      }
      const aggregatorResult = {
        isExceed: priceResult.isExceed,
        isTimeout: true,
        inputAmount: Number(priceResult.amountIn.toString()),
        outputAmount: Number(priceResult.amountOut.toString()),
        fromCoin: priceResult.coinTypeA,
        toCoin: priceResult.coinTypeC != null ? priceResult.coinTypeC : priceResult.coinTypeB,
        byAmountIn: priceResult.byAmountIn,
        splitPaths
      };
      version = "v1";
      result = aggregatorResult;
    }
    return { result, version };
  }
};

// src/modules/configModule.ts
var import_js_base642 = require("js-base64");
var import_utils24 = require("@mysten/sui.js/utils");
var ConfigModule = class {
  _sdk;
  _cache = {};
  constructor(sdk) {
    this._sdk = sdk;
  }
  get sdk() {
    return this._sdk;
  }
  /**
   * Set default token list cache.
   * @param {CoinConfig[]}coinList 
   */
  setTokenListCache(coinList) {
    const { coin_list_handle } = getPackagerConfigs(this.sdk.sdkOptions.cetus_config);
    const cacheKey = `${coin_list_handle}_getCoinConfigs`;
    const cacheData = this.getCache(cacheKey);
    const updatedCacheData = cacheData ? [...cacheData, ...coinList] : coinList;
    this.updateCache(cacheKey, updatedCacheData, cacheTime24h);
  }
  /**
   * Get token config list by coin type list.
   * @param {SuiAddressType[]} coinTypes Coin type list.
   * @returns {Promise<Record<string, CoinConfig>>} Token config map.
   */
  async getTokenListByCoinTypes(coinTypes) {
    const tokenMap = {};
    const { coin_list_handle } = getPackagerConfigs(this.sdk.sdkOptions.cetus_config);
    const cacheKey = `${coin_list_handle}_getCoinConfigs`;
    const cacheData = this.getCache(cacheKey);
    if (cacheData !== void 0) {
      const tokenList = cacheData;
      for (const coinType of coinTypes) {
        for (const token of tokenList) {
          if (normalizeCoinType(coinType) === normalizeCoinType(token.address)) {
            tokenMap[coinType] = token;
            continue;
          }
        }
      }
    }
    const unFoundArray = coinTypes.filter((coinType) => {
      return tokenMap[coinType] === void 0;
    });
    for (const coinType of unFoundArray) {
      const metadataKey = `${coinType}_metadata`;
      const metadata = this.getCache(metadataKey);
      if (metadata !== void 0) {
        tokenMap[coinType] = metadata;
      } else {
        const data = await this._sdk.fullClient.getCoinMetadata({
          coinType
        });
        if (data) {
          const token = {
            id: data.id,
            pyth_id: "",
            name: data.name,
            symbol: data.symbol,
            official_symbol: data.symbol,
            coingecko_id: "",
            decimals: data.decimals,
            project_url: "",
            logo_url: data.iconUrl,
            address: coinType
          };
          tokenMap[coinType] = token;
          this.updateCache(metadataKey, token, cacheTime24h);
        } else {
          console.log(`not found ${coinType}`);
        }
      }
    }
    return tokenMap;
  }
  /**
   * Get coin config list.
   * @param {boolean} forceRefresh Whether to force a refresh of the cache entry.
   * @param {boolean} transformExtensions Whether to transform extensions.
   * @returns {Promise<CoinConfig[]>} Coin config list.
   */
  async getCoinConfigs(forceRefresh = false, transformExtensions = true) {
    const { coin_list_handle } = getPackagerConfigs(this.sdk.sdkOptions.cetus_config);
    const cacheKey = `${coin_list_handle}_getCoinConfigs`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData) {
      return cacheData;
    }
    const res = await this._sdk.fullClient.getDynamicFieldsByPage(coin_list_handle);
    const warpIds = res.data.map((item) => {
      return item.objectId;
    });
    const objects = await this._sdk.fullClient.batchGetObjects(warpIds, { showContent: true });
    const coinList = [];
    objects.forEach((object) => {
      if (object.error != null || object.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`when getCoinConfigs get objects error: ${object.error}, please check the rpc and contracts address config.`, "InvalidConfig" /* InvalidConfig */);
      }
      const coin = this.buildCoinConfig(object, transformExtensions);
      this.updateCache(`${coin_list_handle}_${coin.address}_getCoinConfig`, coin, cacheTime24h);
      coinList.push({ ...coin });
    });
    this.updateCache(cacheKey, coinList, cacheTime24h);
    return coinList;
  }
  /**
   * Get coin config by coin type.
   * @param {string} coinType Coin type.
   * @param {boolean} forceRefresh Whether to force a refresh of the cache entry.
   * @param {boolean} transformExtensions Whether to transform extensions.
   * @returns {Promise<CoinConfig>} Coin config.
   */
  async getCoinConfig(coinType, forceRefresh = false, transformExtensions = true) {
    const { coin_list_handle } = getPackagerConfigs(this.sdk.sdkOptions.cetus_config);
    const cacheKey = `${coin_list_handle}_${coinType}_getCoinConfig`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData) {
      return cacheData;
    }
    const object = await this._sdk.fullClient.getDynamicFieldObject({
      parentId: coin_list_handle,
      name: {
        type: "0x1::type_name::TypeName",
        value: {
          name: fixCoinType(coinType)
        }
      }
    });
    if (object.error != null || object.data?.content?.dataType !== "moveObject") {
      throw new ClmmpoolsError(`when getCoinConfig get object error: ${object.error}, please check the rpc and contracts address config.`, "InvalidConfig" /* InvalidConfig */);
    }
    const coin = this.buildCoinConfig(object, transformExtensions);
    this.updateCache(cacheKey, coin, cacheTime24h);
    return coin;
  }
  /**
   * Build coin config.
   * @param {SuiObjectResponse} object Coin object.
   * @param {boolean} transformExtensions Whether to transform extensions.
   * @returns {CoinConfig} Coin config.
   */
  buildCoinConfig(object, transformExtensions = true) {
    let fields = getObjectFields(object);
    fields = fields.value.fields;
    const coin = { ...fields };
    coin.id = getObjectId(object);
    coin.address = extractStructTagFromType(fields.coin_type.fields.name).full_address;
    if (fields.pyth_id) {
      coin.pyth_id = (0, import_utils24.normalizeSuiObjectId)(fields.pyth_id);
    }
    this.transformExtensions(coin, fields.extension_fields.fields.contents, transformExtensions);
    delete coin.coin_type;
    return coin;
  }
  /**
   * Get clmm pool config list.
   * @param forceRefresh
   * @returns
   */
  async getClmmPoolConfigs(forceRefresh = false, transformExtensions = true) {
    const { clmm_pools_handle } = getPackagerConfigs(this.sdk.sdkOptions.cetus_config);
    const cacheKey = `${clmm_pools_handle}_getClmmPoolConfigs`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData) {
      return cacheData;
    }
    const res = await this._sdk.fullClient.getDynamicFieldsByPage(clmm_pools_handle);
    const warpIds = res.data.map((item) => {
      return item.objectId;
    });
    const objects = await this._sdk.fullClient.batchGetObjects(warpIds, { showContent: true });
    const poolList = [];
    objects.forEach((object) => {
      if (object.error != null || object.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`when getClmmPoolsConfigs get objects error: ${object.error}, please check the rpc and contracts address config.`, "InvalidConfig" /* InvalidConfig */);
      }
      const pool = this.buildClmmPoolConfig(object, transformExtensions);
      this.updateCache(`${pool.pool_address}_getClmmPoolConfig`, pool, cacheTime24h);
      poolList.push({ ...pool });
    });
    this.updateCache(cacheKey, poolList, cacheTime24h);
    return poolList;
  }
  async getClmmPoolConfig(poolAddress, forceRefresh = false, transformExtensions = true) {
    const { clmm_pools_handle } = getPackagerConfigs(this.sdk.sdkOptions.cetus_config);
    const cacheKey = `${poolAddress}_getClmmPoolConfig`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData) {
      return cacheData;
    }
    const object = await this._sdk.fullClient.getDynamicFieldObject({
      parentId: clmm_pools_handle,
      name: {
        type: "address",
        value: poolAddress
      }
    });
    const pool = this.buildClmmPoolConfig(object, transformExtensions);
    this.updateCache(cacheKey, pool, cacheTime24h);
    return pool;
  }
  buildClmmPoolConfig(object, transformExtensions = true) {
    let fields = getObjectFields(object);
    fields = fields.value.fields;
    const pool = { ...fields };
    pool.id = getObjectId(object);
    pool.pool_address = (0, import_utils24.normalizeSuiObjectId)(fields.pool_address);
    this.transformExtensions(pool, fields.extension_fields.fields.contents, transformExtensions);
    return pool;
  }
  /**
   * Get launchpad pool config list.
   * @param forceRefresh
   * @returns
   */
  async getLaunchpadPoolConfigs(forceRefresh = false, transformExtensions = true) {
    const { launchpad_pools_handle } = getPackagerConfigs(this.sdk.sdkOptions.cetus_config);
    const cacheKey = `${launchpad_pools_handle}_getLaunchpadPoolConfigs`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData) {
      return cacheData;
    }
    const res = await this._sdk.fullClient.getDynamicFieldsByPage(launchpad_pools_handle);
    const warpIds = res.data.map((item) => {
      return item.objectId;
    });
    const objects = await this._sdk.fullClient.batchGetObjects(warpIds, { showContent: true });
    const poolList = [];
    objects.forEach((object) => {
      if (object.error != null || object.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`when getCoinConfigs get objects error: ${object.error}, please check the rpc and contracts address config.`, "InvalidConfig" /* InvalidConfig */);
      }
      const pool = this.buildLaunchpadPoolConfig(object, transformExtensions);
      this.updateCache(`${pool.pool_address}_getLaunchpadPoolConfig`, pool, cacheTime24h);
      poolList.push({ ...pool });
    });
    this.updateCache(cacheKey, poolList, cacheTime24h);
    return poolList;
  }
  async getLaunchpadPoolConfig(poolAddress, forceRefresh = false, transformExtensions = true) {
    const { launchpad_pools_handle } = getPackagerConfigs(this.sdk.sdkOptions.cetus_config);
    const cacheKey = `${poolAddress}_getLaunchpadPoolConfig`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData) {
      return cacheData;
    }
    const object = await this._sdk.fullClient.getDynamicFieldObject({
      parentId: launchpad_pools_handle,
      name: {
        type: "address",
        value: poolAddress
      }
    });
    const pool = this.buildLaunchpadPoolConfig(object, transformExtensions);
    this.updateCache(cacheKey, pool, cacheTime24h);
    return pool;
  }
  buildLaunchpadPoolConfig(object, transformExtensions = true) {
    let fields = getObjectFields(object);
    fields = fields.value.fields;
    const pool = { ...fields };
    pool.id = getObjectId(object);
    pool.pool_address = (0, import_utils24.normalizeSuiObjectId)(fields.pool_address);
    this.transformExtensions(pool, fields.extension_fields.fields.contents, transformExtensions);
    const social_medias = [];
    fields.social_media.fields.contents.forEach((item) => {
      social_medias.push({
        name: item.fields.value.fields.name,
        link: item.fields.value.fields.link
      });
    });
    pool.social_media = social_medias;
    try {
      pool.regulation = decodeURIComponent(import_js_base642.Base64.decode(pool.regulation).replace(/%/g, "%25"));
    } catch (error) {
      pool.regulation = import_js_base642.Base64.decode(pool.regulation);
    }
    return pool;
  }
  transformExtensions(coin, dataArray, transformExtensions = true) {
    const extensions = [];
    for (const item of dataArray) {
      const { key } = item.fields;
      let { value } = item.fields;
      if (key === "labels") {
        try {
          value = JSON.parse(decodeURIComponent(import_js_base642.Base64.decode(value)));
        } catch (error) {
        }
      }
      if (transformExtensions) {
        coin[key] = value;
      }
      extensions.push({
        key,
        value
      });
    }
    delete coin.extension_fields;
    if (!transformExtensions) {
      coin.extensions = extensions;
    }
  }
  /**
   * Get the token config event.
   *
   * @param forceRefresh Whether to force a refresh of the event.
   * @returns The token config event.
   */
  async getCetusConfig(forceRefresh = false) {
    const packageObjectId = this._sdk.sdkOptions.cetus_config.package_id;
    const cacheKey = `${packageObjectId}_getCetusConfig`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData !== void 0) {
      return cacheData;
    }
    const packageObject = await this._sdk.fullClient.getObject({
      id: packageObjectId,
      options: {
        showPreviousTransaction: true
      }
    });
    const previousTx = getObjectPreviousTransactionDigest(packageObject);
    const objects = await this._sdk.fullClient.queryEventsByPage({ Transaction: previousTx });
    let tokenConfig = {
      coin_list_id: "",
      launchpad_pools_id: "",
      clmm_pools_id: "",
      admin_cap_id: "",
      global_config_id: "",
      coin_list_handle: "",
      launchpad_pools_handle: "",
      clmm_pools_handle: ""
    };
    if (objects.data.length > 0) {
      for (const item of objects.data) {
        const formatType = extractStructTagFromType(item.type);
        switch (formatType.name) {
          case `InitCoinListEvent`:
            tokenConfig.coin_list_id = item.parsedJson.coin_list_id;
            break;
          case `InitLaunchpadPoolsEvent`:
            tokenConfig.launchpad_pools_id = item.parsedJson.launchpad_pools_id;
            break;
          case `InitClmmPoolsEvent`:
            tokenConfig.clmm_pools_id = item.parsedJson.pools_id;
            break;
          case `InitConfigEvent`:
            tokenConfig.global_config_id = item.parsedJson.global_config_id;
            tokenConfig.admin_cap_id = item.parsedJson.admin_cap_id;
            break;
          default:
            break;
        }
      }
    }
    tokenConfig = await this.getCetusConfigHandle(tokenConfig);
    if (tokenConfig.clmm_pools_id.length > 0) {
      this.updateCache(cacheKey, tokenConfig, cacheTime24h);
    }
    return tokenConfig;
  }
  async getCetusConfigHandle(tokenConfig) {
    const warpIds = [tokenConfig.clmm_pools_id, tokenConfig.coin_list_id, tokenConfig.launchpad_pools_id];
    const res = await this._sdk.fullClient.multiGetObjects({ ids: warpIds, options: { showContent: true } });
    res.forEach((item) => {
      if (item.error != null || item.data?.content?.dataType !== "moveObject") {
        throw new ClmmpoolsError(`when getCetusConfigHandle get objects error: ${item.error}, please check the rpc and contracts address config.`, "InvalidConfigHandle" /* InvalidConfigHandle */);
      }
      const fields = getObjectFields(item);
      const type = getObjectType(item);
      switch (extractStructTagFromType(type).name) {
        case "ClmmPools":
          tokenConfig.clmm_pools_handle = fields.pools.fields.id.id;
          break;
        case "CoinList":
          tokenConfig.coin_list_handle = fields.coins.fields.id.id;
          break;
        case "LaunchpadPools":
          tokenConfig.launchpad_pools_handle = fields.pools.fields.id.id;
          break;
        default:
          break;
      }
    });
    return tokenConfig;
  }
  /**
   * Updates the cache for the given key.
   * @param key The key of the cache entry to update.
   * @param data The data to store in the cache.
   * @param time The time in minutes after which the cache entry should expire.
   */
  updateCache(key, data, time = cacheTime5min) {
    let cacheData = this._cache[key];
    if (cacheData) {
      cacheData.overdueTime = getFutureTime(time);
      cacheData.value = data;
    } else {
      cacheData = new CachedContent(data, getFutureTime(time));
    }
    this._cache[key] = cacheData;
  }
  /**
   * Gets the cache entry for the given key.
   * @param key The key of the cache entry to get.
   * @param forceRefresh Whether to force a refresh of the cache entry.
   * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
   */
  getCache(key, forceRefresh = false) {
    try {
      const cacheData = this._cache[key];
      if (!cacheData) {
        return void 0;
      }
      if (forceRefresh || !cacheData.isValid()) {
        delete this._cache[key];
        return void 0;
      }
      return cacheData.value;
    } catch (error) {
      console.error(`Error accessing cache for key ${key}:`, error);
      return void 0;
    }
  }
};

// src/modules/rpcModule.ts
var import_transactions10 = require("@mysten/sui.js/transactions");
var import_client = require("@mysten/sui.js/client");
var import_bcs2 = require("@mysten/sui.js/bcs");
var import_bcs3 = require("@mysten/bcs");
var RpcModule = class extends import_client.SuiClient {
  /**
   * Get events for a given query criteria
   * @param query
   * @param paginationArgs
   * @returns
   */
  async queryEventsByPage(query, paginationArgs = "all") {
    let result = [];
    let hasNextPage = true;
    const queryAll = paginationArgs === "all";
    let nextCursor = queryAll ? null : paginationArgs.cursor;
    do {
      const res = await this.queryEvents({
        query,
        cursor: nextCursor,
        limit: queryAll ? null : paginationArgs.limit
      });
      if (res.data) {
        result = [...result, ...res.data];
        hasNextPage = res.hasNextPage;
        nextCursor = res.nextCursor;
      } else {
        hasNextPage = false;
      }
    } while (queryAll && hasNextPage);
    return { data: result, nextCursor, hasNextPage };
  }
  /**
   * Get all objects owned by an address
   * @param owner
   * @param query
   * @param paginationArgs
   * @returns
   */
  async getOwnedObjectsByPage(owner, query, paginationArgs = "all") {
    let result = [];
    let hasNextPage = true;
    const queryAll = paginationArgs === "all";
    let nextCursor = queryAll ? null : paginationArgs.cursor;
    do {
      const res = await this.getOwnedObjects({
        owner,
        ...query,
        cursor: nextCursor,
        limit: queryAll ? null : paginationArgs.limit
      });
      if (res.data) {
        result = [...result, ...res.data];
        hasNextPage = res.hasNextPage;
        nextCursor = res.nextCursor;
      } else {
        hasNextPage = false;
      }
    } while (queryAll && hasNextPage);
    return { data: result, nextCursor, hasNextPage };
  }
  /**
   * Return the list of dynamic field objects owned by an object
   * @param parentId
   * @param paginationArgs
   * @returns
   */
  async getDynamicFieldsByPage(parentId, paginationArgs = "all") {
    let result = [];
    let hasNextPage = true;
    const queryAll = paginationArgs === "all";
    let nextCursor = queryAll ? null : paginationArgs.cursor;
    do {
      const res = await this.getDynamicFields({
        parentId,
        cursor: nextCursor,
        limit: queryAll ? null : paginationArgs.limit
      });
      if (res.data) {
        result = [...result, ...res.data];
        hasNextPage = res.hasNextPage;
        nextCursor = res.nextCursor;
      } else {
        hasNextPage = false;
      }
    } while (queryAll && hasNextPage);
    return { data: result, nextCursor, hasNextPage };
  }
  /**
   * Batch get details about a list of objects. If any of the object ids are duplicates the call will fail
   * @param ids
   * @param options
   * @param limit
   * @returns
   */
  async batchGetObjects(ids, options, limit = 50) {
    let objectDataResponses = [];
    try {
      for (let i = 0; i < Math.ceil(ids.length / limit); i++) {
        const res = await this.multiGetObjects({
          ids: ids.slice(i * limit, limit * (i + 1)),
          options
        });
        objectDataResponses = [...objectDataResponses, ...res];
      }
    } catch (error) {
      console.log(error);
    }
    return objectDataResponses;
  }
  /**
   * Calculates the gas cost of a transaction block.
   * @param {TransactionBlock} tx - The transaction block to calculate gas for.
   * @returns {Promise<number>} - The estimated gas cost of the transaction block.
   * @throws {Error} - Throws an error if the sender is empty.
   */
  async calculationTxGas(tx) {
    const { sender } = tx.blockData;
    if (sender === void 0) {
      throw Error("sdk sender is empty");
    }
    const devResult = await this.devInspectTransactionBlock({
      transactionBlock: tx,
      sender
    });
    const { gasUsed } = devResult.effects;
    const estimateGas = Number(gasUsed.computationCost) + Number(gasUsed.storageCost) - Number(gasUsed.storageRebate);
    return estimateGas;
  }
  /**
   * Sends a transaction block after signing it with the provided keypair.
   *
   * @param {Ed25519Keypair | Secp256k1Keypair} keypair - The keypair used for signing the transaction.
   * @param {TransactionBlock} tx - The transaction block to send.
   * @returns {Promise<SuiTransactionBlockResponse | undefined>} - The response of the sent transaction block.
   */
  async sendTransaction(keypair, tx) {
    try {
      const resultTxn = await this.signAndExecuteTransactionBlock({
        transactionBlock: tx,
        signer: keypair,
        options: {
          showEffects: true,
          showEvents: true
        }
      });
      return resultTxn;
    } catch (error) {
      console.log("error: ", error);
    }
    return void 0;
  }
  /**
   * Send a simulation transaction.
   * @param tx - The transaction block.
   * @param simulationAccount - The simulation account.
   * @param useDevInspect - A flag indicating whether to use DevInspect. Defaults to true.
   * @returns A promise that resolves to DevInspectResults or undefined.
   */
  async sendSimulationTransaction(tx, simulationAccount, useDevInspect = true) {
    try {
      if (useDevInspect) {
        const simulateRes = await this.devInspectTransactionBlock({
          transactionBlock: tx,
          sender: simulationAccount
        });
        return simulateRes;
      }
      const inputs = tx.blockData.inputs.map((input) => {
        const { type, value } = input;
        if (type === "object") {
          return import_transactions10.Inputs.SharedObjectRef({
            objectId: value,
            initialSharedVersion: 0,
            mutable: true
          });
        }
        return value;
      });
      const kind = {
        ProgrammableTransaction: {
          inputs,
          transactions: tx.blockData.transactions
        }
      };
      const serialize = import_bcs2.bcs.TransactionKind.serialize(kind, {
        maxSize: 131072
      }).toBytes();
      const devInspectTxBytes = (0, import_bcs3.toB64)(serialize);
      const res = await this.transport.request({
        method: "sui_devInspectTransactionBlock",
        params: [simulationAccount, devInspectTxBytes, null, null]
      });
      return res;
    } catch (error) {
      console.log("devInspectTransactionBlock error", error);
    }
    return void 0;
  }
};

// src/sdk.ts
var CetusClmmSDK = class {
  _cache = {};
  /**
   * RPC provider on the SUI chain
   */
  _rpcModule;
  /**
   * Provide interact with clmm pools with a pool router interface.
   */
  _pool;
  /**
   * Provide interact with clmm position with a position router interface.
   */
  _position;
  /**
   * Provide interact with a pool swap router interface.
   */
  _swap;
  /**
   * Provide interact  with a position rewarder interface.
   */
  _rewarder;
  /**
   * Provide interact with a pool router interface.
   */
  _router;
  /**
   * Provide interact with a pool routerV2 interface.
   */
  _router_v2;
  /**
   * Provide interact with pool and token config (contain token base info for metadat).
   * @deprecated Please use CetusConfig instead
   */
  _token;
  /**
   * Provide  interact with clmm pool and coin and launchpad pool config
   */
  _config;
  /**
   *  Provide sdk options
   */
  _sdkOptions;
  /**
   * After connecting the wallet, set the current wallet address to senderAddress.
   */
  _senderAddress = "";
  constructor(options) {
    this._sdkOptions = options;
    this._rpcModule = new RpcModule({
      url: options.fullRpcUrl
    });
    this._swap = new SwapModule(this);
    this._pool = new PoolModule(this);
    this._position = new PositionModule(this);
    this._rewarder = new RewarderModule(this);
    this._router = new RouterModule(this);
    this._router_v2 = new RouterModuleV2(this);
    this._token = new TokenModule(this);
    this._config = new ConfigModule(this);
    patchFixSuiObjectId(this._sdkOptions);
  }
  /**
   * Getter for the sender address property.
   * @returns {SuiAddressType} The sender address.
   */
  get senderAddress() {
    return this._senderAddress;
  }
  /**
   * Setter for the sender address property.
   * @param {string} value - The new sender address value.
   */
  set senderAddress(value) {
    this._senderAddress = value;
  }
  /**
   * Getter for the Swap property.
   * @returns {SwapModule} The Swap property value.
   */
  get Swap() {
    return this._swap;
  }
  /**
   * Getter for the fullClient property.
   * @returns {RpcModule} The fullClient property value.
   */
  get fullClient() {
    return this._rpcModule;
  }
  /**
   * Getter for the sdkOptions property.
   * @returns {SdkOptions} The sdkOptions property value.
   */
  get sdkOptions() {
    return this._sdkOptions;
  }
  /**
   * Getter for the Pool property.
   * @returns {PoolModule} The Pool property value.
   */
  get Pool() {
    return this._pool;
  }
  /**
   * Getter for the Position property.
   * @returns {PositionModule} The Position property value.
   */
  get Position() {
    return this._position;
  }
  /**
   * Getter for the Rewarder property.
   * @returns {RewarderModule} The Rewarder property value.
   */
  get Rewarder() {
    return this._rewarder;
  }
  /**
   * Getter for the Router property.
   * @returns {RouterModule} The Router property value.
   */
  get Router() {
    return this._router;
  }
  /**
   * Getter for the RouterV2 property.
   * @returns {RouterModuleV2} The RouterV2 property value.
   */
  get RouterV2() {
    return this._router_v2;
  }
  /**
   * Getter for the CetusConfig property.
   * @returns {ConfigModule} The CetusConfig property value.
   */
  get CetusConfig() {
    return this._config;
  }
  /**
   * @deprecated Token is no longer maintained. Please use CetusConfig instead
   */
  get Token() {
    return this._token;
  }
  /**
   * Gets all coin assets for the given owner and coin type.
   *
   * @param suiAddress The address of the owner.
   * @param coinType The type of the coin.
   * @returns an array of coin assets.
   */
  async getOwnerCoinAssets(suiAddress, coinType, forceRefresh = true) {
    const allCoinAsset = [];
    let nextCursor = null;
    const cacheKey = `${this.sdkOptions.fullRpcUrl}_${suiAddress}_${coinType}_getOwnerCoinAssets`;
    const cacheData = this.getCache(cacheKey, forceRefresh);
    if (cacheData) {
      return cacheData;
    }
    while (true) {
      const allCoinObject = await (coinType ? this.fullClient.getCoins({
        owner: suiAddress,
        coinType,
        cursor: nextCursor
      }) : this.fullClient.getAllCoins({
        owner: suiAddress,
        cursor: nextCursor
      }));
      allCoinObject.data.forEach((coin) => {
        if (BigInt(coin.balance) > 0) {
          allCoinAsset.push({
            coinAddress: extractStructTagFromType(coin.coinType).source_address,
            coinObjectId: coin.coinObjectId,
            balance: BigInt(coin.balance)
          });
        }
      });
      nextCursor = allCoinObject.nextCursor;
      if (!allCoinObject.hasNextPage) {
        break;
      }
    }
    this.updateCache(cacheKey, allCoinAsset, 30 * 1e3);
    return allCoinAsset;
  }
  /**
   * Gets all coin balances for the given owner and coin type.
   *
   * @param suiAddress The address of the owner.
   * @param coinType The type of the coin.
   * @returns an array of coin balances.
   */
  async getOwnerCoinBalances(suiAddress, coinType) {
    let allCoinBalance = [];
    if (coinType) {
      const res = await this.fullClient.getBalance({
        owner: suiAddress,
        coinType
      });
      allCoinBalance = [res];
    } else {
      const res = await this.fullClient.getAllBalances({
        owner: suiAddress
      });
      allCoinBalance = [...res];
    }
    return allCoinBalance;
  }
  /**
   * Updates the cache for the given key.
   *
   * @param key The key of the cache entry to update.
   * @param data The data to store in the cache.
   * @param time The time in minutes after which the cache entry should expire.
   */
  updateCache(key, data, time = cacheTime24h) {
    let cacheData = this._cache[key];
    if (cacheData) {
      cacheData.overdueTime = getFutureTime(time);
      cacheData.value = data;
    } else {
      cacheData = new CachedContent(data, getFutureTime(time));
    }
    this._cache[key] = cacheData;
  }
  /**
   * Gets the cache entry for the given key.
   *
   * @param key The key of the cache entry to get.
   * @param forceRefresh Whether to force a refresh of the cache entry.
   * @returns The cache entry for the given key, or undefined if the cache entry does not exist or is expired.
   */
  getCache(key, forceRefresh = false) {
    const cacheData = this._cache[key];
    const isValid = cacheData?.isValid();
    if (!forceRefresh && isValid) {
      return cacheData.value;
    }
    if (!isValid) {
      delete this._cache[key];
    }
    return void 0;
  }
};

// src/index.ts
var src_default = CetusClmmSDK;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AMM_SWAP_MODULE,
  AmountSpecified,
  CLOCK_ADDRESS,
  CachedContent,
  CetusClmmSDK,
  ClmmExpectSwapModule,
  ClmmFetcherModule,
  ClmmIntegratePoolModule,
  ClmmIntegratePoolV2Module,
  ClmmIntegrateRouterModule,
  ClmmIntegrateRouterWithPartnerModule,
  ClmmIntegrateUtilsModule,
  ClmmPartnerModule,
  ClmmPoolUtil,
  ClmmPositionStatus,
  CoinAssist,
  CoinInfoAddress,
  CoinStoreAddress,
  ConfigModule,
  DEFAULT_GAS_BUDGET_FOR_MERGE,
  DEFAULT_GAS_BUDGET_FOR_SPLIT,
  DEFAULT_GAS_BUDGET_FOR_STAKE,
  DEFAULT_GAS_BUDGET_FOR_TRANSFER,
  DEFAULT_GAS_BUDGET_FOR_TRANSFER_SUI,
  DEFAULT_NFT_TRANSFER_GAS_FEE,
  DeepbookClobV2Moudle,
  DeepbookCustodianV2Moudle,
  DeepbookEndpointsV2Moudle,
  DeepbookUtils,
  FEE_RATE_DENOMINATOR,
  GAS_SYMBOL,
  GAS_TYPE_ARG,
  GAS_TYPE_ARG_LONG,
  MAX_SQRT_PRICE,
  MAX_TICK_INDEX,
  MIN_SQRT_PRICE,
  MIN_TICK_INDEX,
  MathUtil,
  ONE,
  POOL_STRUCT,
  Percentage,
  PoolModule,
  PositionModule,
  PositionStatus,
  PositionUtil,
  RouterModule,
  RouterModuleV2,
  RpcModule,
  SUI_SYSTEM_STATE_OBJECT_ID,
  SplitSwap,
  SplitUnit,
  SwapDirection,
  SwapModule,
  SwapUtils,
  TICK_ARRAY_SIZE,
  TWO,
  TickMath,
  TickUtil,
  TokenModule,
  TransactionUtil,
  TxBlock,
  U128,
  U128_MAX,
  U64_MAX,
  ZERO,
  addHexPrefix,
  adjustForCoinSlippage,
  adjustForSlippage,
  asIntN,
  asUintN,
  bufferToHex,
  buildNFT,
  buildPool,
  buildPosition,
  buildPositionReward,
  buildTickData,
  buildTickDataByEvent,
  cacheTime24h,
  cacheTime5min,
  checkAddress,
  checkInvalidSuiAddress,
  collectFeesQuote,
  composeType,
  computeSwap,
  computeSwapStep,
  createSplitAmountArray,
  createSplitArray,
  d,
  decimalsMultiplier,
  estPoolAPR,
  estPositionAPRWithDeltaMethod,
  estPositionAPRWithMultiMethod,
  estimateLiquidityForCoinA,
  estimateLiquidityForCoinB,
  extractAddressFromType,
  extractStructTagFromType,
  findAdjustCoin,
  fixCoinType,
  fixSuiObjectId,
  fromDecimalsAmount,
  getAmountFixedDelta,
  getAmountUnfixedDelta,
  getCoinAFromLiquidity,
  getCoinBFromLiquidity,
  getDefaultSuiInputType,
  getDeltaA,
  getDeltaB,
  getDeltaDownFromOutput,
  getDeltaUpFromInput,
  getFutureTime,
  getLiquidityFromCoinA,
  getLiquidityFromCoinB,
  getLowerSqrtPriceFromCoinA,
  getLowerSqrtPriceFromCoinB,
  getMoveObject,
  getMoveObjectType,
  getMovePackageContent,
  getNearestTickByTick,
  getNextSqrtPriceAUp,
  getNextSqrtPriceBDown,
  getNextSqrtPriceFromInput,
  getNextSqrtPriceFromOutput,
  getObjectDeletedResponse,
  getObjectDisplay,
  getObjectFields,
  getObjectId,
  getObjectNotExistsResponse,
  getObjectOwner,
  getObjectPreviousTransactionDigest,
  getObjectReference,
  getObjectType,
  getObjectVersion,
  getPackagerConfigs,
  getRewardInTickRange,
  getSuiObjectData,
  getTickDataFromUrlData,
  getUpperSqrtPriceFromCoinA,
  getUpperSqrtPriceFromCoinB,
  hasPublicTransfer,
  hexToNumber,
  hexToString,
  isSortedSymbols,
  isSuiObjectResponse,
  newBits,
  normalizeCoinType,
  patchFixSuiObjectId,
  printTransaction,
  removeHexPrefix,
  secretKeyToEd25519Keypair,
  secretKeyToSecp256k1Keypair,
  shortAddress,
  shortString,
  tickScore,
  toBuffer,
  toCoinAmount,
  toDecimalsAmount,
  transClmmpoolDataWithoutTicks,
  utf8to16
});
//# sourceMappingURL=index.js.map