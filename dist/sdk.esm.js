import JSBI from 'jsbi';
export { default as JSBI } from 'jsbi';
import invariant from 'tiny-invariant';
import warning from 'tiny-warning';
import { getAddress, getCreate2Address } from '@ethersproject/address';
import _Big from 'big.js';
import toFormat from 'toformat';
import _Decimal from 'decimal.js-light';
import { keccak256, pack } from '@ethersproject/solidity';
import { Contract } from '@ethersproject/contracts';
import { getNetwork } from '@ethersproject/networks';
import { getDefaultProvider } from '@ethersproject/providers';

var _FACTORY_ADDRESS, _JOE_ADDRESS, _MASTERCHEF_ADDRESS, _MASTERCHEF_V3_ADDRES, _BAR_ADDRESS, _ZAP_ADDRESS, _ROUTER_ADDRESS, _MAKER_ADDRESS, _ROLL_ADDRESS, _BORINGHELPER_ADDRESS, _BORINGHELPER_MCV3_AD, _BORINGTOKENSCANNER_A, _BORINGDASHBOARD_ADDR, _LOCKING_WRAPPER_ADDR, _ROCKET_JOE_TOKEN_ADD, _LAUNCH_EVENT_LENS_AD, _ROCKET_JOE_STAKING_A, _SOLIDITY_TYPE_MAXIMA, _UNITROLLER_ADDRESS, _JOELENS_ADDRESS, _JOELENSVIEW_ADDRESS, _FARMLENS_ADDRESS, _JAVAX_ADDRESS, _MAXIMILLION_ADDRESS;
var ChainId;

(function (ChainId) {
  ChainId[ChainId["GOERLI"] = 5] = "GOERLI";
  ChainId[ChainId["ARBITRUM"] = 42161] = "ARBITRUM";
  ChainId[ChainId["AVALANCHE"] = 43114] = "AVALANCHE";
})(ChainId || (ChainId = {}));

var TradeType;

(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));

var Rounding;

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));
/**
 * DEX SDK
 */


var FACTORY_ADDRESS = (_FACTORY_ADDRESS = {}, _FACTORY_ADDRESS[ChainId.GOERLI] = '0x8a61F769a5c1538e6121A264BeA7078ab38cff47', _FACTORY_ADDRESS[ChainId.ARBITRUM] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.AVALANCHE] = '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10', _FACTORY_ADDRESS);
var JOE_ADDRESS = (_JOE_ADDRESS = {}, _JOE_ADDRESS[ChainId.GOERLI] = '0xce347E069B68C53A9ED5e7DA5952529cAF8ACCd4', _JOE_ADDRESS[ChainId.ARBITRUM] = '0xcee9d937E3627E55F08240072D63f32c3a60fF2D', _JOE_ADDRESS[ChainId.AVALANCHE] = '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', _JOE_ADDRESS);
var MASTERCHEF_ADDRESS = (_MASTERCHEF_ADDRESS = {}, _MASTERCHEF_ADDRESS[ChainId.GOERLI] = '0x1F51b7697A1919cF301845c93D4843FD620ad7Cc', _MASTERCHEF_ADDRESS[ChainId.ARBITRUM] = '0x2d388F47c3Ae5CC0C7F8ad73296B208cfaCd35ae', _MASTERCHEF_ADDRESS[ChainId.AVALANCHE] = '0xd6a4F121CA35509aF06A0Be99093d08462f53052', _MASTERCHEF_ADDRESS);
var MASTERCHEF_V3_ADDRESS = (_MASTERCHEF_V3_ADDRES = {}, _MASTERCHEF_V3_ADDRES[ChainId.GOERLI] = '0xEedf119022F1Bb5F63676BbE855c82151B7198AF', _MASTERCHEF_V3_ADDRES[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_V3_ADDRES[ChainId.AVALANCHE] = '0x188bED1968b795d5c9022F6a0bb5931Ac4c18F00', _MASTERCHEF_V3_ADDRES);
var BAR_ADDRESS = (_BAR_ADDRESS = {}, _BAR_ADDRESS[ChainId.GOERLI] = '0x33A86aFC0f728882F48E5105bc98758b3eAe2081', _BAR_ADDRESS[ChainId.ARBITRUM] = '0x171B28d39De22EF001029117F3d241fF78c7DC5C', _BAR_ADDRESS[ChainId.AVALANCHE] = '0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33', _BAR_ADDRESS);
var ZAP_ADDRESS = (_ZAP_ADDRESS = {}, _ZAP_ADDRESS[ChainId.GOERLI] = '0x70c949152D2AC84FbB809228606db4654773D994', _ZAP_ADDRESS[ChainId.ARBITRUM] = '0x5BBFA5f49EC557eABA9427Ac434F21b69113Fe20', _ZAP_ADDRESS[ChainId.AVALANCHE] = '0x2C7B8e971c704371772eDaf16e0dB381A8D02027', _ZAP_ADDRESS);
var ROUTER_ADDRESS = (_ROUTER_ADDRESS = {}, _ROUTER_ADDRESS[ChainId.GOERLI] = '0x2154D5532E78b28d486d2D0A4140291bCDC5AB60', _ROUTER_ADDRESS[ChainId.ARBITRUM] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.AVALANCHE] = '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', _ROUTER_ADDRESS);
var MAKER_ADDRESS = (_MAKER_ADDRESS = {}, _MAKER_ADDRESS[ChainId.GOERLI] = '0xbEFE1d0756Da706B3F0EbaEa7b4ae10D0AdF2f3F', _MAKER_ADDRESS[ChainId.ARBITRUM] = '0x0529719e33AA2f15c13b12be01D7E876454Caf02', _MAKER_ADDRESS[ChainId.AVALANCHE] = '0x861726BFE27931A4E22a7277bDe6cb8432b65856', _MAKER_ADDRESS);
var ROLL_ADDRESS = (_ROLL_ADDRESS = {}, _ROLL_ADDRESS[ChainId.GOERLI] = '0xD6344FF98d12adD998cBcfaC16A215396e9bCb8c', _ROLL_ADDRESS[ChainId.ARBITRUM] = '0x41d5f5F66e4cEd197Ff273308A1c194E9E249f4F', _ROLL_ADDRESS[ChainId.AVALANCHE] = '0xacFF0fBf56bAeb9Ef677DE19ADED8F7A950BCb58', _ROLL_ADDRESS);
var BORINGHELPER_ADDRESS = (_BORINGHELPER_ADDRESS = {}, _BORINGHELPER_ADDRESS[ChainId.GOERLI] = '0x73B35Bab1aFD869E3738464b3bE97999e80E8458', _BORINGHELPER_ADDRESS[ChainId.ARBITRUM] = '0xD28be693a573a26f50195213613EC893Ad5c4460', _BORINGHELPER_ADDRESS[ChainId.AVALANCHE] = '0x1dd4D86180EEe39ac4fB35ECa67CACF608Ab5741', _BORINGHELPER_ADDRESS);
var BORINGHELPER_MCV3_ADDRESS = (_BORINGHELPER_MCV3_AD = {}, _BORINGHELPER_MCV3_AD[ChainId.GOERLI] = '0x11f89aE6DA4aB5D0C518A41F9424c5241A3D57A3', _BORINGHELPER_MCV3_AD[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_MCV3_AD[ChainId.AVALANCHE] = '0xce63ECA0C8A2084C1BaEcE7737dB88f10c412c5E', _BORINGHELPER_MCV3_AD);
var BORINGTOKENSCANNER_ADDRESS = (_BORINGTOKENSCANNER_A = {}, _BORINGTOKENSCANNER_A[ChainId.GOERLI] = '0xdd5C40b5f0f5Df9c8BF0aA4703d73867ea7f022D', _BORINGTOKENSCANNER_A[ChainId.ARBITRUM] = '0xD28be693a573a26f50195213613EC893Ad5c4460', _BORINGTOKENSCANNER_A[ChainId.AVALANCHE] = '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c', _BORINGTOKENSCANNER_A);
var BORINGDASHBOARD_ADDRESS = (_BORINGDASHBOARD_ADDR = {}, _BORINGDASHBOARD_ADDR[ChainId.GOERLI] = '0xeC208ef9F8aEDbbF28722286E334a3939acEA646', _BORINGDASHBOARD_ADDR[ChainId.ARBITRUM] = '0xD28be693a573a26f50195213613EC893Ad5c4460', _BORINGDASHBOARD_ADDR[ChainId.AVALANCHE] = '0x1Af353148F2316487b5311Fcd522c037842D232c', _BORINGDASHBOARD_ADDR);
var LOCKING_WRAPPER_ADDRESS = (_LOCKING_WRAPPER_ADDR = {}, _LOCKING_WRAPPER_ADDR[ChainId.GOERLI] = '0x60CB8E40B815fa7FF24Ab8a0603BF0afAcb49Cc0', _LOCKING_WRAPPER_ADDR[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _LOCKING_WRAPPER_ADDR[ChainId.AVALANCHE] = '0xDc3B37B5F0Fe5d3f8b8701a3F8d81A02EE8A1E1a', _LOCKING_WRAPPER_ADDR);
var ROCKET_JOE_TOKEN_ADDRESS = (_ROCKET_JOE_TOKEN_ADD = {}, _ROCKET_JOE_TOKEN_ADD[ChainId.GOERLI] = '0x3Be901d05584dc7900461a1b538ce24F7989cD65', _ROCKET_JOE_TOKEN_ADD[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_TOKEN_ADD[ChainId.AVALANCHE] = '0x5483ce08659fABF0277f9314868Cc4f78687BD08', _ROCKET_JOE_TOKEN_ADD);
var LAUNCH_EVENT_LENS_ADDRESS = (_LAUNCH_EVENT_LENS_AD = {}, _LAUNCH_EVENT_LENS_AD[ChainId.GOERLI] = '0xfa31cDA014bA4e1A2CfF02EA94a7B9E6DB6BcbC5', _LAUNCH_EVENT_LENS_AD[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _LAUNCH_EVENT_LENS_AD[ChainId.AVALANCHE] = '0x039AA5d3FC07f6f265656793A8c437055b653d68', _LAUNCH_EVENT_LENS_AD);
var ROCKET_JOE_STAKING_ADDRESS = (_ROCKET_JOE_STAKING_A = {}, _ROCKET_JOE_STAKING_A[ChainId.GOERLI] = '0xc1108bda59F2A66843833d5B801bF40C966d34ca', _ROCKET_JOE_STAKING_A[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_STAKING_A[ChainId.AVALANCHE] = '0x102D195C3eE8BF8A9A89d63FB3659432d3174d81', _ROCKET_JOE_STAKING_A);
var INIT_CODE_HASH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303';
var MINIMUM_LIQUIDITY = /*#__PURE__*/JSBI.BigInt(1000); // exports for internal consumption

var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
var THREE = /*#__PURE__*/JSBI.BigInt(3);
var FIVE = /*#__PURE__*/JSBI.BigInt(5);
var TEN = /*#__PURE__*/JSBI.BigInt(10);
var _100 = /*#__PURE__*/JSBI.BigInt(100);
var _997 = /*#__PURE__*/JSBI.BigInt(997);
var _1000 = /*#__PURE__*/JSBI.BigInt(1000);
var SolidityType;

(function (SolidityType) {
  SolidityType["uint8"] = "uint8";
  SolidityType["uint256"] = "uint256";
})(SolidityType || (SolidityType = {}));

var SOLIDITY_TYPE_MAXIMA = (_SOLIDITY_TYPE_MAXIMA = {}, _SOLIDITY_TYPE_MAXIMA[SolidityType.uint8] = /*#__PURE__*/JSBI.BigInt('0xff'), _SOLIDITY_TYPE_MAXIMA[SolidityType.uint256] = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'), _SOLIDITY_TYPE_MAXIMA);
/**
 * Lending SDK
 */

var UNITROLLER_ADDRESS = (_UNITROLLER_ADDRESS = {}, _UNITROLLER_ADDRESS[ChainId.GOERLI] = '0x5b0a2Fa14808E34C5518E19f0DBc39F61d080B11', _UNITROLLER_ADDRESS[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _UNITROLLER_ADDRESS[ChainId.AVALANCHE] = '0xdc13687554205E5b89Ac783db14bb5bba4A1eDaC', _UNITROLLER_ADDRESS);
var JOELENS_ADDRESS = (_JOELENS_ADDRESS = {}, _JOELENS_ADDRESS[ChainId.GOERLI] = '0x4F101798dd4AF8A2A8325F4C54C195a61C59Dc62', _JOELENS_ADDRESS[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _JOELENS_ADDRESS[ChainId.AVALANCHE] = '0xFDF50FEa3527FaD31Fa840B748FD3694aE8a47cc', _JOELENS_ADDRESS);
var JOELENSVIEW_ADDRESS = (_JOELENSVIEW_ADDRESS = {}, _JOELENSVIEW_ADDRESS[ChainId.GOERLI] = '0x51fBdc8FCa72CeF1E1b558DB0c502e874DB5602A', _JOELENSVIEW_ADDRESS[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _JOELENSVIEW_ADDRESS[ChainId.AVALANCHE] = '0x0000000000000000000000000000000000000000', _JOELENSVIEW_ADDRESS);
var FARMLENS_ADDRESS = (_FARMLENS_ADDRESS = {}, _FARMLENS_ADDRESS[ChainId.GOERLI] = '0x926E833c27284f7f633E461FcE6Dd17ccb2030e1', _FARMLENS_ADDRESS[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _FARMLENS_ADDRESS[ChainId.AVALANCHE] = '0xc1b83cE1573984Dcf4115e983F9c28748a0F350E', _FARMLENS_ADDRESS);
var JAVAX_ADDRESS = (_JAVAX_ADDRESS = {}, _JAVAX_ADDRESS[ChainId.GOERLI] = '0x0444dcF838055493519F26021dE63Afa72EEe0D2', _JAVAX_ADDRESS[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _JAVAX_ADDRESS[ChainId.AVALANCHE] = '0xC22F01ddc8010Ee05574028528614634684EC29e', _JAVAX_ADDRESS);
var MAXIMILLION_ADDRESS = (_MAXIMILLION_ADDRESS = {}, _MAXIMILLION_ADDRESS[ChainId.GOERLI] = '0xC48B0159d3e7F240ac76cc3Ce39dF62fCd4656b0', _MAXIMILLION_ADDRESS[ChainId.ARBITRUM] = '0x0000000000000000000000000000000000000000', _MAXIMILLION_ADDRESS[ChainId.AVALANCHE] = '0xe5cDdAFd0f7Af3DEAf4bd213bBaee7A5927AB7E7', _MAXIMILLION_ADDRESS);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

// see https://stackoverflow.com/a/41102306
var CAN_SET_PROTOTYPE = ('setPrototypeOf' in Object);
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */

var InsufficientReservesError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InsufficientReservesError, _Error);

  function InsufficientReservesError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.isInsufficientReservesError = true;
    _this.name = _this.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this), (this instanceof InsufficientReservesError ? this.constructor : void 0).prototype);
    return _this;
  }

  return InsufficientReservesError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */

var InsufficientInputAmountError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(InsufficientInputAmountError, _Error2);

  function InsufficientInputAmountError() {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.isInsufficientInputAmountError = true;
    _this2.name = _this2.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this2), (this instanceof InsufficientInputAmountError ? this.constructor : void 0).prototype);
    return _this2;
  }

  return InsufficientInputAmountError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function validateSolidityTypeInstance(value, solidityType) {
  !JSBI.greaterThanOrEqual(value, ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
  !JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
} // warns if addresses are not checksummed

function validateAndParseAddress(address) {
  try {
    var checksummedAddress = getAddress(address);
    process.env.NODE_ENV !== "production" ? warning(address === checksummedAddress, address + " is not checksummed.") : void 0;
    return checksummedAddress;
  } catch (error) {
     process.env.NODE_ENV !== "production" ? invariant(false, address + " is not a valid address.") : invariant(false) ;
  }
}
function parseBigintIsh(bigintIsh) {
  return bigintIsh instanceof JSBI ? bigintIsh : typeof bigintIsh === 'bigint' ? JSBI.BigInt(bigintIsh.toString()) : JSBI.BigInt(bigintIsh);
} // mock the on-chain sqrt function

function sqrt(y) {
  validateSolidityTypeInstance(y, SolidityType.uint256);
  var z = ZERO;
  var x;

  if (JSBI.greaterThan(y, THREE)) {
    z = y;
    x = JSBI.add(JSBI.divide(y, TWO), ONE);

    while (JSBI.lessThan(x, z)) {
      z = x;
      x = JSBI.divide(JSBI.add(JSBI.divide(y, x), x), TWO);
    }
  } else if (JSBI.notEqual(y, ZERO)) {
    z = ONE;
  }

  return z;
} // given an array of items sorted by `comparator`, insert an item into its sort index and constrain the size to
// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_SIZE_ZERO') : invariant(false) : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ITEMS_SIZE') : invariant(false) : void 0; // short circuit first item add

  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */

var Currency =
/**
 * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
 */
function Currency(decimals, symbol, name) {
  validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8);
  this.decimals = decimals;
  this.symbol = symbol;
  this.name = name;
};
/**
 * The only instance of the base class `Currency`.
 */

Currency.CAVAX = /*#__PURE__*/new Currency(18, 'AVAX', 'Avalanche');
var CAVAX = Currency.CAVAX;

var _WAVAX;
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_Currency) {
  _inheritsLoose(Token, _Currency);

  function Token(chainId, address, decimals, symbol, name) {
    var _this;

    _this = _Currency.call(this, decimals, symbol, name) || this;
    _this.chainId = chainId;
    _this.address = validateAndParseAddress(address);
    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  var _proto = Token.prototype;

  _proto.equals = function equals(other) {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }

    return this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(this.address !== other.address) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ADDRESSES') : invariant(false) : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  };

  return Token;
}(Currency);
/**
 * Compares two currencies for equality
 */

function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}
var WAVAX = (_WAVAX = {}, _WAVAX[ChainId.GOERLI] = /*#__PURE__*/new Token(ChainId.GOERLI, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WAVAX', 'Wrapped AVAX'), _WAVAX[ChainId.ARBITRUM] = /*#__PURE__*/new Token(ChainId.ARBITRUM, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'), _WAVAX[ChainId.AVALANCHE] = /*#__PURE__*/new Token(ChainId.AVALANCHE, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX'), _WAVAX);

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[Rounding.ROUND_DOWN] = 0, _toFixedRounding[Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = ONE;
    }

    this.numerator = parseBigintIsh(numerator);
    this.denominator = parseBigintIsh(denominator);
  } // performs floor division


  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.lessThan = function lessThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.equalTo = function equalTo(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.multiply = function multiply(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.divide = function divide(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(significantDigits) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not an integer.") : invariant(false) : void 0;
    !(significantDigits > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not positive.") : invariant(false) : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(decimalPlaces) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is not an integer.") : invariant(false) : void 0;
    !(decimalPlaces >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is negative.") : invariant(false) : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  };

  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
    } // remainder after floor division

  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }]);

  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);

  // amount _must_ be raw, i.e. in the native representation
  function CurrencyAmount(currency, amount) {
    var _this;

    var parsedAmount = parseBigintIsh(amount);
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256);
    _this = _Fraction.call(this, parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals))) || this;
    _this.currency = currency;
    return _this;
  }
  /**
   * Helper that calls the constructor with the ETHER currency
   * @param amount ether amount in wei
   */


  CurrencyAmount.ether = function ether(amount) {
    return new CurrencyAmount(CAVAX, amount);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !currencyEquals(this.currency, other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new CurrencyAmount(this.currency, JSBI.add(this.raw, other.raw));
  };

  _proto.subtract = function subtract(other) {
    !currencyEquals(this.currency, other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new CurrencyAmount(this.currency, JSBI.subtract(this.raw, other.raw));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.toSignificant.call(this, significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
    return _Fraction.prototype.toFixed.call(this, decimalPlaces, format, rounding);
  };

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.numerator.toString()).div(this.denominator.toString()).toFormat(format);
  };

  _createClass(CurrencyAmount, [{
    key: "raw",
    get: function get() {
      return this.numerator;
    }
  }]);

  return CurrencyAmount;
}(Fraction);

var TokenAmount = /*#__PURE__*/function (_CurrencyAmount) {
  _inheritsLoose(TokenAmount, _CurrencyAmount);

  // amount _must_ be raw, i.e. in the native representation
  function TokenAmount(token, amount) {
    var _this;

    _this = _CurrencyAmount.call(this, token, amount) || this;
    _this.token = token;
    return _this;
  }

  var _proto = TokenAmount.prototype;

  _proto.add = function add(other) {
    !this.token.equals(other.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new TokenAmount(this.token, JSBI.add(this.raw, other.raw));
  };

  _proto.subtract = function subtract(other) {
    !this.token.equals(other.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new TokenAmount(this.token, JSBI.subtract(this.raw, other.raw));
  };

  return TokenAmount;
}(CurrencyAmount);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);

  // denominator and numerator _must_ be raw, i.e. in the native representation
  function Price(baseCurrency, quoteCurrency, denominator, numerator) {
    var _this;

    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(TEN, JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(TEN, JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }

  Price.fromRoute = function fromRoute(route) {
    var prices = [];

    for (var _iterator = _createForOfIteratorHelperLoose(route.pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      prices.push(route.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.raw, pair.reserve1.raw) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.raw, pair.reserve0.raw));
    }

    return prices.slice(1).reduce(function (accumulator, currentValue) {
      return accumulator.multiply(currentValue);
    }, prices[0]);
  };

  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  };

  _proto.multiply = function multiply(other) {
    !currencyEquals(this.quoteCurrency, other.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  } // performs floor division on overflow
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyEquals(currencyAmount.currency, this.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (this.quoteCurrency instanceof Token) {
      return new TokenAmount(this.quoteCurrency, _Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
    }

    return CurrencyAmount.ether(_Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    return this.adjusted.toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }

    return this.adjusted.toFixed(decimalPlaces, format, rounding);
  };

  _createClass(Price, [{
    key: "raw",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }, {
    key: "adjusted",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);

  return Price;
}(Fraction);

var PAIR_ADDRESS_CACHE = {};
var Pair = /*#__PURE__*/function () {
  function Pair(tokenAmountA, tokenAmountB, chainId) {
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    this.liquidityToken = new Token(tokenAmounts[0].token.chainId, Pair.getAddress(tokenAmounts[0].token, tokenAmounts[1].token, chainId), 18, 'JLP', 'Joe Liquidity');
    this.tokenAmounts = tokenAmounts;
  }

  Pair.getAddress = function getAddress(tokenA, tokenB, chainId) {
    var _PAIR_ADDRESS_CACHE, _PAIR_ADDRESS_CACHE$t;

    var tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]; // does safety checks

    if (((_PAIR_ADDRESS_CACHE = PAIR_ADDRESS_CACHE) === null || _PAIR_ADDRESS_CACHE === void 0 ? void 0 : (_PAIR_ADDRESS_CACHE$t = _PAIR_ADDRESS_CACHE[tokens[0].address]) === null || _PAIR_ADDRESS_CACHE$t === void 0 ? void 0 : _PAIR_ADDRESS_CACHE$t[tokens[1].address]) === undefined) {
      var _PAIR_ADDRESS_CACHE2, _extends2, _extends3;

      PAIR_ADDRESS_CACHE = _extends({}, PAIR_ADDRESS_CACHE, (_extends3 = {}, _extends3[tokens[0].address] = _extends({}, (_PAIR_ADDRESS_CACHE2 = PAIR_ADDRESS_CACHE) === null || _PAIR_ADDRESS_CACHE2 === void 0 ? void 0 : _PAIR_ADDRESS_CACHE2[tokens[0].address], (_extends2 = {}, _extends2[tokens[1].address] = getCreate2Address(FACTORY_ADDRESS[chainId], keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]), INIT_CODE_HASH), _extends2)), _extends3));
    }

    return PAIR_ADDRESS_CACHE[tokens[0].address][tokens[1].address];
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  ;

  var _proto = Pair.prototype;

  _proto.involvesToken = function involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  ;

  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  _proto.priceOf = function priceOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */
  ;

  _proto.reserveOf = function reserveOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  };

  _proto.getOutputAmount = function getOutputAmount(inputAmount, chainId) {
    !this.involvesToken(inputAmount.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO)) {
      throw new InsufficientReservesError();
    }

    var inputReserve = this.reserveOf(inputAmount.token);
    var outputReserve = this.reserveOf(inputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    var inputAmountWithFee = JSBI.multiply(inputAmount.raw, _997);
    var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.raw);
    var denominator = JSBI.add(JSBI.multiply(inputReserve.raw, _1000), inputAmountWithFee);
    var outputAmount = new TokenAmount(inputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.divide(numerator, denominator));

    if (JSBI.equal(outputAmount.raw, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount), chainId)];
  };

  _proto.getInputAmount = function getInputAmount(outputAmount, chainId) {
    !this.involvesToken(outputAmount.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO) || JSBI.greaterThanOrEqual(outputAmount.raw, this.reserveOf(outputAmount.token).raw)) {
      throw new InsufficientReservesError();
    }

    var outputReserve = this.reserveOf(outputAmount.token);
    var inputReserve = this.reserveOf(outputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    var numerator = JSBI.multiply(JSBI.multiply(inputReserve.raw, outputAmount.raw), _1000);
    var denominator = JSBI.multiply(JSBI.subtract(outputReserve.raw, outputAmount.raw), _997);
    var inputAmount = new TokenAmount(outputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.add(JSBI.divide(numerator, denominator), ONE));
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount), chainId)];
  };

  _proto.getLiquidityMinted = function getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    !totalSupply.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    !(tokenAmounts[0].token.equals(this.token0) && tokenAmounts[1].token.equals(this.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    var liquidity;

    if (JSBI.equal(totalSupply.raw, ZERO)) {
      liquidity = JSBI.subtract(sqrt(JSBI.multiply(tokenAmounts[0].raw, tokenAmounts[1].raw)), MINIMUM_LIQUIDITY);
    } else {
      var amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].raw, totalSupply.raw), this.reserve0.raw);
      var amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].raw, totalSupply.raw), this.reserve1.raw);
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
    }

    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return new TokenAmount(this.liquidityToken, liquidity);
  };

  _proto.getLiquidityValue = function getLiquidityValue(token, totalSupply, liquidity, feeOn, kLast) {
    if (feeOn === void 0) {
      feeOn = false;
    }

    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    !totalSupply.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOTAL_SUPPLY') : invariant(false) : void 0;
    !liquidity.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    !JSBI.lessThanOrEqual(liquidity.raw, totalSupply.raw) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var totalSupplyAdjusted;

    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      !!!kLast ? process.env.NODE_ENV !== "production" ? invariant(false, 'K_LAST') : invariant(false) : void 0;
      var kLastParsed = parseBigintIsh(kLast);

      if (!JSBI.equal(kLastParsed, ZERO)) {
        var rootK = sqrt(JSBI.multiply(this.reserve0.raw, this.reserve1.raw));
        var rootKLast = sqrt(kLastParsed);

        if (JSBI.greaterThan(rootK, rootKLast)) {
          var numerator = JSBI.multiply(totalSupply.raw, JSBI.subtract(rootK, rootKLast));
          var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
          var feeLiquidity = JSBI.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(new TokenAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }

    return new TokenAmount(token, JSBI.divide(JSBI.multiply(liquidity.raw, this.reserveOf(token).raw), totalSupplyAdjusted.raw));
  };

  _createClass(Pair, [{
    key: "token0Price",
    get: function get() {
      return new Price(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */

  }, {
    key: "token1Price",
    get: function get() {
      return new Price(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.token0.chainId;
    }
  }, {
    key: "token0",
    get: function get() {
      return this.tokenAmounts[0].token;
    }
  }, {
    key: "token1",
    get: function get() {
      return this.tokenAmounts[1].token;
    }
  }, {
    key: "reserve0",
    get: function get() {
      return this.tokenAmounts[0];
    }
  }, {
    key: "reserve1",
    get: function get() {
      return this.tokenAmounts[1];
    }
  }]);

  return Pair;
}();

var Route = /*#__PURE__*/function () {
  function Route(pairs, input, output) {
    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !pairs.every(function (pair) {
      return pair.chainId === pairs[0].chainId;
    }) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(input instanceof Token && pairs[0].involvesToken(input) || input === CAVAX && pairs[0].involvesToken(WAVAX[pairs[0].chainId])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
    !(typeof output === 'undefined' || output instanceof Token && pairs[pairs.length - 1].involvesToken(output) || output === CAVAX && pairs[pairs.length - 1].involvesToken(WAVAX[pairs[0].chainId])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
    var path = [input instanceof Token ? input : WAVAX[pairs[0].chainId]];

    for (var _iterator = _createForOfIteratorHelperLoose(pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      var currentInput = path[i];
      !(currentInput.equals(pair.token0) || currentInput.equals(pair.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PATH') : invariant(false) : void 0;

      var _output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;

      path.push(_output);
    }

    this.pairs = pairs;
    this.path = path;
    this.midPrice = Price.fromRoute(this);
    this.input = input;
    this.output = output !== null && output !== void 0 ? output : path[path.length - 1];
  }

  _createClass(Route, [{
    key: "chainId",
    get: function get() {
      return this.pairs[0].chainId;
    }
  }]);

  return Route;
}();

var _100_PERCENT = /*#__PURE__*/new Fraction(_100);

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    return _Fraction.apply(this, arguments) || this;
  }

  var _proto = Percent.prototype;

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }

    return this.multiply(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }

    return this.multiply(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  };

  return Percent;
}(Fraction);

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var exactQuote = midPrice.raw.multiply(inputAmount.raw); // calculate slippage := (exactQuote - outputAmount) / exactQuote

  var slippage = exactQuote.subtract(outputAmount.raw).divide(exactQuote);
  return new Percent(slippage.numerator, slippage.denominator);
} // comparator function that allows sorting trades by their output amounts, in decreasing order, and then input amounts
// in increasing order. i.e. the best trades have the most outputs for the least inputs and are sorted first


function inputOutputComparator(a, b) {
  // must have same input and output token for comparison
  !currencyEquals(a.inputAmount.currency, b.inputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT_CURRENCY') : invariant(false) : void 0;
  !currencyEquals(a.outputAmount.currency, b.outputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT_CURRENCY') : invariant(false) : void 0;

  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    } // trade A requires less input than trade B, so A should come first


    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
} // extension of the input output comparator that also considers other dimensions of the trade in ranking them

function tradeComparator(a, b) {
  var ioComp = inputOutputComparator(a, b);

  if (ioComp !== 0) {
    return ioComp;
  } // consider lowest slippage next, since these are less likely to fail


  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  } // finally consider the number of hops since each hop costs gas


  return a.route.path.length - b.route.path.length;
}
/**
 * Given a currency amount and a chain ID, returns the equivalent representation as the token amount.
 * In other words, if the currency is ETHER, returns the WETH token amount for the given chain. Otherwise, returns
 * the input currency amount.
 */

function wrappedAmount(currencyAmount, chainId) {
  if (currencyAmount instanceof TokenAmount) return currencyAmount;
  if (currencyAmount.currency === CAVAX) return new TokenAmount(WAVAX[chainId], currencyAmount.raw);
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}

function wrappedCurrency(currency, chainId) {
  if (currency instanceof Token) return currency;
  if (currency === CAVAX) return WAVAX[chainId];
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}
/**
 * Represents a trade executed against a list of pairs.
 * Does not account for slippage, i.e. trades that front run this trade and move the price.
 */


var Trade = /*#__PURE__*/function () {
  function Trade(route, amount, tradeType, chainId) {
    var amounts = new Array(route.path.length);
    var nextPairs = new Array(route.pairs.length);

    if (tradeType === TradeType.EXACT_INPUT) {
      !currencyEquals(amount.currency, route.input) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
      amounts[0] = wrappedAmount(amount, route.chainId);

      for (var i = 0; i < route.path.length - 1; i++) {
        var pair = route.pairs[i];

        var _pair$getOutputAmount = pair.getOutputAmount(amounts[i], chainId),
            outputAmount = _pair$getOutputAmount[0],
            nextPair = _pair$getOutputAmount[1];

        amounts[i + 1] = outputAmount;
        nextPairs[i] = nextPair;
      }
    } else {
      !currencyEquals(amount.currency, route.output) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
      amounts[amounts.length - 1] = wrappedAmount(amount, route.chainId);

      for (var _i = route.path.length - 1; _i > 0; _i--) {
        var _pair = route.pairs[_i - 1];

        var _pair$getInputAmount = _pair.getInputAmount(amounts[_i], chainId),
            inputAmount = _pair$getInputAmount[0],
            _nextPair = _pair$getInputAmount[1];

        amounts[_i - 1] = inputAmount;
        nextPairs[_i - 1] = _nextPair;
      }
    }

    this.route = route;
    this.tradeType = tradeType;
    this.inputAmount = tradeType === TradeType.EXACT_INPUT ? amount : route.input === CAVAX ? CurrencyAmount.ether(amounts[0].raw) : amounts[0];
    this.outputAmount = tradeType === TradeType.EXACT_OUTPUT ? amount : route.output === CAVAX ? CurrencyAmount.ether(amounts[amounts.length - 1].raw) : amounts[amounts.length - 1];
    this.executionPrice = new Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.raw, this.outputAmount.raw);
    this.nextMidPrice = Price.fromRoute(new Route(nextPairs, route.input));
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
    this.chainId = chainId;
  }
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */


  Trade.exactIn = function exactIn(route, amountIn, chainId) {
    return new Trade(route, amountIn, TradeType.EXACT_INPUT, chainId);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */
  ;

  Trade.exactOut = function exactOut(route, amountOut, chainId) {
    return new Trade(route, amountOut, TradeType.EXACT_OUTPUT, chainId);
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  var _proto = Trade.prototype;

  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    } else {
      var slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.raw).quotient;
      return this.outputAmount instanceof TokenAmount ? new TokenAmount(this.outputAmount.token, slippageAdjustedAmountOut) : CurrencyAmount.ether(slippageAdjustedAmountOut);
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  _proto.maximumAmountIn = function maximumAmountIn(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_INPUT) {
      return this.inputAmount;
    } else {
      var slippageAdjustedAmountIn = new Fraction(ONE).add(slippageTolerance).multiply(this.inputAmount.raw).quotient;
      return this.inputAmount instanceof TokenAmount ? new TokenAmount(this.inputAmount.token, slippageAdjustedAmountIn) : CurrencyAmount.ether(slippageAdjustedAmountIn);
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactIn = function bestTradeExactIn(pairs, currencyAmountIn, currencyOut, _temp, // used in recursion.
  currentPairs, originalAmountIn, bestTrades) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$maxNumResults = _ref.maxNumResults,
        maxNumResults = _ref$maxNumResults === void 0 ? 3 : _ref$maxNumResults,
        _ref$maxHops = _ref.maxHops,
        maxHops = _ref$maxHops === void 0 ? 3 : _ref$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (originalAmountIn === void 0) {
      originalAmountIn = currencyAmountIn;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(originalAmountIn === currencyAmountIn || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var chainId = currencyAmountIn instanceof TokenAmount ? currencyAmountIn.token.chainId : currencyOut instanceof Token ? currencyOut.chainId : undefined;
    !(chainId !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
    var amountIn = wrappedAmount(currencyAmountIn, chainId);
    var tokenOut = wrappedCurrency(currencyOut, chainId);

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountIn.token) && !pair.token1.equals(amountIn.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountOut = void 0;

      try {
        ;

        var _pair$getOutputAmount2 = pair.getOutputAmount(amountIn, chainId);

        amountOut = _pair$getOutputAmount2[0];
      } catch (error) {
        // input too low
        if (error.isInsufficientInputAmountError) {
          continue;
        }

        throw error;
      } // we have arrived at the output token, so this is the final trade of one of the paths


      if (amountOut.token.equals(tokenOut)) {
        sortedInsert(bestTrades, new Trade(new Route([].concat(currentPairs, [pair]), originalAmountIn.currency, currencyOut), originalAmountIn, TradeType.EXACT_INPUT, chainId), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops

        Trade.bestTradeExactIn(pairsExcludingThisPair, amountOut, currencyOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [].concat(currentPairs, [pair]), originalAmountIn, bestTrades);
      }
    }

    return bestTrades;
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param currencyAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactOut = function bestTradeExactOut(pairs, currencyIn, currencyAmountOut, _temp2, // used in recursion.
  currentPairs, originalAmountOut, bestTrades) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$maxNumResults = _ref2.maxNumResults,
        maxNumResults = _ref2$maxNumResults === void 0 ? 3 : _ref2$maxNumResults,
        _ref2$maxHops = _ref2.maxHops,
        maxHops = _ref2$maxHops === void 0 ? 3 : _ref2$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (originalAmountOut === void 0) {
      originalAmountOut = currencyAmountOut;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(originalAmountOut === currencyAmountOut || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var chainId = currencyAmountOut instanceof TokenAmount ? currencyAmountOut.token.chainId : currencyIn instanceof Token ? currencyIn.chainId : undefined;
    !(chainId !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
    var amountOut = wrappedAmount(currencyAmountOut, chainId);
    var tokenIn = wrappedCurrency(currencyIn, chainId);

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountOut.token) && !pair.token1.equals(amountOut.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountIn = void 0;

      try {
        ;

        var _pair$getInputAmount2 = pair.getInputAmount(amountOut, chainId);

        amountIn = _pair$getInputAmount2[0];
      } catch (error) {
        // not enough liquidity in this pair
        if (error.isInsufficientReservesError) {
          continue;
        }

        throw error;
      } // we have arrived at the input token, so this is the first trade of one of the paths


      if (amountIn.token.equals(tokenIn)) {
        sortedInsert(bestTrades, new Trade(new Route([pair].concat(currentPairs), currencyIn, originalAmountOut.currency), originalAmountOut, TradeType.EXACT_OUTPUT, chainId), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops

        Trade.bestTradeExactOut(pairsExcludingThisPair, currencyIn, amountIn, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [pair].concat(currentPairs), originalAmountOut, bestTrades);
      }
    }

    return bestTrades;
  };

  return Trade;
}();

function toHex(currencyAmount) {
  return "0x" + currencyAmount.raw.toString(16);
}

var ZERO_HEX = '0x0';
/**
 * Represents the Uniswap V2 Router, and has static methods for helping execute trades.
 */

var Router = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Router() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */


  Router.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = trade.inputAmount.currency === CAVAX;
    var etherOut = trade.outputAmount.currency === CAVAX; // the router does not support both ether in and out

    !!(etherIn && etherOut) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ETHER_IN_OUT') : invariant(false) : void 0;
    !(!('ttl' in options) || options.ttl > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TTL') : invariant(false) : void 0;
    var to = validateAndParseAddress(options.recipient);
    var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    var path = trade.route.path.map(function (token) {
      return token.address;
    });
    var deadline = 'ttl' in options ? "0x" + (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16) : "0x" + options.deadline.toString(16);
    var useFeeOnTransfer = Boolean(options.feeOnTransfer);
    var methodName;
    var args;
    var value;

    switch (trade.tradeType) {
      case TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? 'swapExactAVAXForTokensSupportingFeeOnTransferTokens' : 'swapExactAVAXForTokens'; // (uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? 'swapExactTokensForAVAXSupportingFeeOnTransferTokens' : 'swapExactTokensForAVAX'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens' : 'swapExactTokensForTokens'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }

        break;

      case TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ? process.env.NODE_ENV !== "production" ? invariant(false, 'EXACT_OUT_FOT') : invariant(false) : void 0;

        if (etherIn) {
          methodName = 'swapAVAXForExactTokens'; // (uint amountOut, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = 'swapTokensForExactAVAX'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = 'swapTokensForExactTokens'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }

        break;
    }

    return {
      methodName: methodName,
      args: args,
      value: value
    };
  };

  return Router;
}();

var ERC20 = [
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var _format = "hh-sol-artifact-1";
var contractName = "JoePair";
var sourceName = "contracts/traderjoe/JoePair.sol";
var abi = [
	{
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Burn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		name: "Mint",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			}
		],
		name: "Sync",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "MINIMUM_LIQUIDITY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "PERMIT_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint112",
				name: "_reserve0",
				type: "uint112"
			},
			{
				internalType: "uint112",
				name: "_reserve1",
				type: "uint112"
			},
			{
				internalType: "uint32",
				name: "_blockTimestampLast",
				type: "uint32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token0",
				type: "address"
			},
			{
				internalType: "address",
				name: "_token1",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "kLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "price0CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "price1CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "skim",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "swap",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "sync",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "token0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "token1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var bytecode = "0x60806040526001600c5534801561001557600080fd5b50604080518082018252600c81526b2537b2902628102a37b5b2b760a11b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fd4eb8415c62493390808cc42ba6f3ba97fa30eb773771605674d83c7162115e7818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b031916331790556122f18061010a6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610afb565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b23565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b4d565b604080519115158252519081900360200190f35b610339610b64565b604080516001600160a01b039092168252519081900360200190f35b61035d610b73565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b79565b61035d610c0d565b6103b5610c31565b6040805160ff9092168252519081900360200190f35b61035d610c36565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c3c565b61035d610cba565b61035d610cc0565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610cc6565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b031661113c565b61035d61114e565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316611154565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316611166565b6040805192835260208301919091528051918290030190f35b6102446114f4565b61031d600480360360408110156104e857600080fd5b506001600160a01b038135169060200135611513565b61035d611520565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b0316611526565b610339611692565b6103396116a1565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356116b0565b61035d600480360360408110156105a357600080fd5b506001600160a01b03813581169160200135166118a5565b61023a6118c2565b600c54600114610608576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c558415158061061b5750600084115b61066c576040805162461bcd60e51b815260206004820152601f60248201527f4a6f653a20494e53554646494349454e545f4f55545055545f414d4f554e5400604482015290519081900360640190fd5b600080610677610b23565b5091509150816001600160701b03168710801561069c5750806001600160701b031686105b6106ed576040805162461bcd60e51b815260206004820152601b60248201527f4a6f653a20494e53554646494349454e545f4c49515549444954590000000000604482015290519081900360640190fd5b60065460075460009182916001600160a01b0391821691908116908916821480159061072b5750806001600160a01b0316896001600160a01b031614155b61076e576040805162461bcd60e51b815260206004820152600f60248201526e4a6f653a20494e56414c49445f544f60881b604482015290519081900360640190fd5b8a1561077f5761077f828a8d611a1e565b891561079057610790818a8c611a1e565b861561084257886001600160a01b031663ee22dd87338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561082957600080fd5b505af115801561083d573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561088857600080fd5b505afa15801561089c573d6000803e3d6000fd5b505050506040513d60208110156108b257600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108fe57600080fd5b505afa158015610912573d6000803e3d6000fd5b505050506040513d602081101561092857600080fd5b5051925060009150506001600160701b0385168a9003831161094b57600061095a565b89856001600160701b03160383035b9050600089856001600160701b0316038311610977576000610986565b89856001600160701b03160383035b905060008211806109975750600081115b6109e8576040805162461bcd60e51b815260206004820152601e60248201527f4a6f653a20494e53554646494349454e545f494e5055545f414d4f554e540000604482015290519081900360640190fd5b6000610a0a6109f8846003611baf565b610a04876103e8611baf565b90611c12565b90506000610a1c6109f8846003611baf565b9050610a41620f4240610a3b6001600160701b038b8116908b16611baf565b90611baf565b610a4b8383611baf565b1015610a87576040805162461bcd60e51b81526020600482015260066024820152654a6f653a204b60d01b604482015290519081900360640190fd5b5050610a9584848888611c62565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600c81526020016b2537b2902628102a37b5b2b760a11b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b5a338484611e1b565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bf8576001600160a01b0384166000908152600260209081526040808320338452909152902054610bd39083611c12565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610c03848484611e7d565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c8c576040805162461bcd60e51b815260206004820152600e60248201526d2537b29d102327a92124a22222a760911b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d0d576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c81905580610d1d610b23565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d7157600080fd5b505afa158015610d85573d6000803e3d6000fd5b505050506040513d6020811015610d9b57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610dee57600080fd5b505afa158015610e02573d6000803e3d6000fd5b505050506040513d6020811015610e1857600080fd5b505190506000610e31836001600160701b038716611c12565b90506000610e48836001600160701b038716611c12565b90506000610e568787611f2b565b6000549091508061102d5760055460408051637cd07e4760e01b815290516000926001600160a01b031691637cd07e47916004808301926020929190829003018186803b158015610ea657600080fd5b505afa158015610eba573d6000803e3d6000fd5b505050506040513d6020811015610ed057600080fd5b50519050336001600160a01b0382161415610fab57806001600160a01b03166340dc0e376040518163ffffffff1660e01b815260040160206040518083038186803b158015610f1e57600080fd5b505afa158015610f32573d6000803e3d6000fd5b505050506040513d6020811015610f4857600080fd5b505199508915801590610f5d57506000198a14155b610fa6576040805162461bcd60e51b81526020600482015260156024820152744261642064657369726564206c697175696469747960581b604482015290519081900360640190fd5b611027565b6001600160a01b03811615611000576040805162461bcd60e51b815260206004820152601660248201527526bab9ba103737ba103430bb329036b4b3b930ba37b960511b604482015290519081900360640190fd5b6110186103e8610a046110138888611baf565b61206b565b995061102760006103e86120bd565b50611070565b61106d6001600160701b0389166110448684611baf565b8161104b57fe5b046001600160701b0389166110608685611baf565b8161106757fe5b04612147565b98505b600089116110af5760405162461bcd60e51b815260040180806020018281038252602281526020018061229a6022913960400191505060405180910390fd5b6110b98a8a6120bd565b6110c586868a8a611c62565b81156110ef576008546110eb906001600160701b0380821691600160701b900416611baf565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c546001146111ae576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c819055806111be610b23565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561121a57600080fd5b505afa15801561122e573d6000803e3d6000fd5b505050506040513d602081101561124457600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561129257600080fd5b505afa1580156112a6573d6000803e3d6000fd5b505050506040513d60208110156112bc57600080fd5b5051306000908152600160205260408120549192506112db8888611f2b565b600054909150806112ec8487611baf565b816112f357fe5b049a50806113018486611baf565b8161130857fe5b04995060008b11801561131b575060008a115b6113565760405162461bcd60e51b81526004018080602001828103825260228152602001806122786022913960400191505060405180910390fd5b611360308461215f565b61136b878d8d611a1e565b611376868d8c611a1e565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b1580156113bc57600080fd5b505afa1580156113d0573d6000803e3d6000fd5b505050506040513d60208110156113e657600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561143257600080fd5b505afa158015611446573d6000803e3d6000fd5b505050506040513d602081101561145c57600080fd5b5051935061146c85858b8b611c62565b811561149657600854611492906001600160701b0380821691600160701b900416611baf565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600381526020016204a4c560ec1b81525081565b6000610b5a338484611e7d565b6103e881565b600c5460011461156b576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b039485169490931692611614928592879261160f926001600160701b03169185916370a0823191602480820192602092909190829003018186803b1580156115dd57600080fd5b505afa1580156115f1573d6000803e3d6000fd5b505050506040513d602081101561160757600080fd5b505190611c12565b611a1e565b611688818461160f6008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156115dd57600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156116f4576040805162461bcd60e51b815260206004820152600c60248201526b129bd94e881156141254915160a21b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa15801561180f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906118455750886001600160a01b0316816001600160a01b0316145b61188f576040805162461bcd60e51b81526020600482015260166024820152754a6f653a20494e56414c49445f5349474e415455524560501b604482015290519081900360640190fd5b61189a898989611e1b565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611907576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611a17926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561195857600080fd5b505afa15801561196c573d6000803e3d6000fd5b505050506040513d602081101561198257600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156119cf57600080fd5b505afa1580156119e3573d6000803e3d6000fd5b505050506040513d60208110156119f957600080fd5b50516008546001600160701b0380821691600160701b900416611c62565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b60208310611acb5780518252601f199092019160209182019101611aac565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611b2d576040519150601f19603f3d011682016040523d82523d6000602084013e611b32565b606091505b5091509150818015611b60575080511580611b605750808060200190516020811015611b5d57600080fd5b50515b611ba8576040805162461bcd60e51b8152602060048201526014602482015273129bd94e881514905394d1915497d1905253115160621b604482015290519081900360640190fd5b5050505050565b6000811580611bca57505080820282828281611bc757fe5b04145b610b5e576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b5e576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611c8057506001600160701b038311155b611cc1576040805162461bcd60e51b815260206004820152600d60248201526c4a6f653a204f564552464c4f5760981b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611cf157506001600160701b03841615155b8015611d0557506001600160701b03831615155b15611d70578063ffffffff16611d2d85611d1e866121f1565b6001600160e01b031690612203565b600980546001600160e01b03929092169290920201905563ffffffff8116611d5884611d1e876121f1565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611ea09082611c12565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611ecf9082612228565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611f7c57600080fd5b505afa158015611f90573d6000803e3d6000fd5b505050506040513d6020811015611fa657600080fd5b5051600b546001600160a01b038216158015945091925090612057578015612052576000611fe36110136001600160701b03888116908816611baf565b90506000611ff08361206b565b90508082111561204f5760006120126120098484611c12565b60005490611baf565b9050600061202b83612025866005611baf565b90612228565b9050600081838161203857fe5b049050801561204b5761204b87826120bd565b5050505b50505b612063565b8015612063576000600b555b505092915050565b600060038211156120ae575080600160028204015b818110156120a85780915060028182858161209757fe5b0401816120a057fe5b049050612080565b506120b8565b81156120b8575060015b919050565b6000546120ca9082612228565b60009081556001600160a01b0383168152600160205260409020546120ef9082612228565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106121565781612158565b825b9392505050565b6001600160a01b0382166000908152600160205260409020546121829082611c12565b6001600160a01b038316600090815260016020526040812091909155546121a99082611c12565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161222057fe5b049392505050565b80820182811015610b5e576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe4a6f653a20494e53554646494349454e545f4c49515549444954595f4255524e45444a6f653a20494e53554646494349454e545f4c49515549444954595f4d494e544544a26469706673582212205c0530d8975d81c05a44dc2110dd0e9eedcced0f1710956008eb001c428ccb0d64736f6c634300060c0033";
var deployedBytecode = "0x608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610afb565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b23565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b4d565b604080519115158252519081900360200190f35b610339610b64565b604080516001600160a01b039092168252519081900360200190f35b61035d610b73565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b79565b61035d610c0d565b6103b5610c31565b6040805160ff9092168252519081900360200190f35b61035d610c36565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c3c565b61035d610cba565b61035d610cc0565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610cc6565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b031661113c565b61035d61114e565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316611154565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316611166565b6040805192835260208301919091528051918290030190f35b6102446114f4565b61031d600480360360408110156104e857600080fd5b506001600160a01b038135169060200135611513565b61035d611520565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b0316611526565b610339611692565b6103396116a1565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356116b0565b61035d600480360360408110156105a357600080fd5b506001600160a01b03813581169160200135166118a5565b61023a6118c2565b600c54600114610608576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c558415158061061b5750600084115b61066c576040805162461bcd60e51b815260206004820152601f60248201527f4a6f653a20494e53554646494349454e545f4f55545055545f414d4f554e5400604482015290519081900360640190fd5b600080610677610b23565b5091509150816001600160701b03168710801561069c5750806001600160701b031686105b6106ed576040805162461bcd60e51b815260206004820152601b60248201527f4a6f653a20494e53554646494349454e545f4c49515549444954590000000000604482015290519081900360640190fd5b60065460075460009182916001600160a01b0391821691908116908916821480159061072b5750806001600160a01b0316896001600160a01b031614155b61076e576040805162461bcd60e51b815260206004820152600f60248201526e4a6f653a20494e56414c49445f544f60881b604482015290519081900360640190fd5b8a1561077f5761077f828a8d611a1e565b891561079057610790818a8c611a1e565b861561084257886001600160a01b031663ee22dd87338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561082957600080fd5b505af115801561083d573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561088857600080fd5b505afa15801561089c573d6000803e3d6000fd5b505050506040513d60208110156108b257600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108fe57600080fd5b505afa158015610912573d6000803e3d6000fd5b505050506040513d602081101561092857600080fd5b5051925060009150506001600160701b0385168a9003831161094b57600061095a565b89856001600160701b03160383035b9050600089856001600160701b0316038311610977576000610986565b89856001600160701b03160383035b905060008211806109975750600081115b6109e8576040805162461bcd60e51b815260206004820152601e60248201527f4a6f653a20494e53554646494349454e545f494e5055545f414d4f554e540000604482015290519081900360640190fd5b6000610a0a6109f8846003611baf565b610a04876103e8611baf565b90611c12565b90506000610a1c6109f8846003611baf565b9050610a41620f4240610a3b6001600160701b038b8116908b16611baf565b90611baf565b610a4b8383611baf565b1015610a87576040805162461bcd60e51b81526020600482015260066024820152654a6f653a204b60d01b604482015290519081900360640190fd5b5050610a9584848888611c62565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600c81526020016b2537b2902628102a37b5b2b760a11b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b5a338484611e1b565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bf8576001600160a01b0384166000908152600260209081526040808320338452909152902054610bd39083611c12565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610c03848484611e7d565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c8c576040805162461bcd60e51b815260206004820152600e60248201526d2537b29d102327a92124a22222a760911b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d0d576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c81905580610d1d610b23565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d7157600080fd5b505afa158015610d85573d6000803e3d6000fd5b505050506040513d6020811015610d9b57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610dee57600080fd5b505afa158015610e02573d6000803e3d6000fd5b505050506040513d6020811015610e1857600080fd5b505190506000610e31836001600160701b038716611c12565b90506000610e48836001600160701b038716611c12565b90506000610e568787611f2b565b6000549091508061102d5760055460408051637cd07e4760e01b815290516000926001600160a01b031691637cd07e47916004808301926020929190829003018186803b158015610ea657600080fd5b505afa158015610eba573d6000803e3d6000fd5b505050506040513d6020811015610ed057600080fd5b50519050336001600160a01b0382161415610fab57806001600160a01b03166340dc0e376040518163ffffffff1660e01b815260040160206040518083038186803b158015610f1e57600080fd5b505afa158015610f32573d6000803e3d6000fd5b505050506040513d6020811015610f4857600080fd5b505199508915801590610f5d57506000198a14155b610fa6576040805162461bcd60e51b81526020600482015260156024820152744261642064657369726564206c697175696469747960581b604482015290519081900360640190fd5b611027565b6001600160a01b03811615611000576040805162461bcd60e51b815260206004820152601660248201527526bab9ba103737ba103430bb329036b4b3b930ba37b960511b604482015290519081900360640190fd5b6110186103e8610a046110138888611baf565b61206b565b995061102760006103e86120bd565b50611070565b61106d6001600160701b0389166110448684611baf565b8161104b57fe5b046001600160701b0389166110608685611baf565b8161106757fe5b04612147565b98505b600089116110af5760405162461bcd60e51b815260040180806020018281038252602281526020018061229a6022913960400191505060405180910390fd5b6110b98a8a6120bd565b6110c586868a8a611c62565b81156110ef576008546110eb906001600160701b0380821691600160701b900416611baf565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c546001146111ae576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c819055806111be610b23565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561121a57600080fd5b505afa15801561122e573d6000803e3d6000fd5b505050506040513d602081101561124457600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561129257600080fd5b505afa1580156112a6573d6000803e3d6000fd5b505050506040513d60208110156112bc57600080fd5b5051306000908152600160205260408120549192506112db8888611f2b565b600054909150806112ec8487611baf565b816112f357fe5b049a50806113018486611baf565b8161130857fe5b04995060008b11801561131b575060008a115b6113565760405162461bcd60e51b81526004018080602001828103825260228152602001806122786022913960400191505060405180910390fd5b611360308461215f565b61136b878d8d611a1e565b611376868d8c611a1e565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b1580156113bc57600080fd5b505afa1580156113d0573d6000803e3d6000fd5b505050506040513d60208110156113e657600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561143257600080fd5b505afa158015611446573d6000803e3d6000fd5b505050506040513d602081101561145c57600080fd5b5051935061146c85858b8b611c62565b811561149657600854611492906001600160701b0380821691600160701b900416611baf565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600381526020016204a4c560ec1b81525081565b6000610b5a338484611e7d565b6103e881565b600c5460011461156b576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b039485169490931692611614928592879261160f926001600160701b03169185916370a0823191602480820192602092909190829003018186803b1580156115dd57600080fd5b505afa1580156115f1573d6000803e3d6000fd5b505050506040513d602081101561160757600080fd5b505190611c12565b611a1e565b611688818461160f6008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156115dd57600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156116f4576040805162461bcd60e51b815260206004820152600c60248201526b129bd94e881156141254915160a21b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa15801561180f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906118455750886001600160a01b0316816001600160a01b0316145b61188f576040805162461bcd60e51b81526020600482015260166024820152754a6f653a20494e56414c49445f5349474e415455524560501b604482015290519081900360640190fd5b61189a898989611e1b565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611907576040805162461bcd60e51b815260206004820152600b60248201526a129bd94e881313d0d2d15160aa1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611a17926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561195857600080fd5b505afa15801561196c573d6000803e3d6000fd5b505050506040513d602081101561198257600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156119cf57600080fd5b505afa1580156119e3573d6000803e3d6000fd5b505050506040513d60208110156119f957600080fd5b50516008546001600160701b0380821691600160701b900416611c62565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b60208310611acb5780518252601f199092019160209182019101611aac565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611b2d576040519150601f19603f3d011682016040523d82523d6000602084013e611b32565b606091505b5091509150818015611b60575080511580611b605750808060200190516020811015611b5d57600080fd5b50515b611ba8576040805162461bcd60e51b8152602060048201526014602482015273129bd94e881514905394d1915497d1905253115160621b604482015290519081900360640190fd5b5050505050565b6000811580611bca57505080820282828281611bc757fe5b04145b610b5e576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b5e576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611c8057506001600160701b038311155b611cc1576040805162461bcd60e51b815260206004820152600d60248201526c4a6f653a204f564552464c4f5760981b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611cf157506001600160701b03841615155b8015611d0557506001600160701b03831615155b15611d70578063ffffffff16611d2d85611d1e866121f1565b6001600160e01b031690612203565b600980546001600160e01b03929092169290920201905563ffffffff8116611d5884611d1e876121f1565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611ea09082611c12565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611ecf9082612228565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611f7c57600080fd5b505afa158015611f90573d6000803e3d6000fd5b505050506040513d6020811015611fa657600080fd5b5051600b546001600160a01b038216158015945091925090612057578015612052576000611fe36110136001600160701b03888116908816611baf565b90506000611ff08361206b565b90508082111561204f5760006120126120098484611c12565b60005490611baf565b9050600061202b83612025866005611baf565b90612228565b9050600081838161203857fe5b049050801561204b5761204b87826120bd565b5050505b50505b612063565b8015612063576000600b555b505092915050565b600060038211156120ae575080600160028204015b818110156120a85780915060028182858161209757fe5b0401816120a057fe5b049050612080565b506120b8565b81156120b8575060015b919050565b6000546120ca9082612228565b60009081556001600160a01b0383168152600160205260409020546120ef9082612228565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106121565781612158565b825b9392505050565b6001600160a01b0382166000908152600160205260409020546121829082611c12565b6001600160a01b038316600090815260016020526040812091909155546121a99082611c12565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161222057fe5b049392505050565b80820182811015610b5e576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe4a6f653a20494e53554646494349454e545f4c49515549444954595f4255524e45444a6f653a20494e53554646494349454e545f4c49515549444954595f4d494e544544a26469706673582212205c0530d8975d81c05a44dc2110dd0e9eedcced0f1710956008eb001c428ccb0d64736f6c634300060c0033";
var linkReferences = {
};
var deployedLinkReferences = {
};
var IJoePair = {
	_format: _format,
	contractName: contractName,
	sourceName: sourceName,
	abi: abi,
	bytecode: bytecode,
	deployedBytecode: deployedBytecode,
	linkReferences: linkReferences,
	deployedLinkReferences: deployedLinkReferences
};

var TOKEN_DECIMALS_CACHE = {};
/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */

var Fetcher = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Fetcher() {}
  /**
   * Fetch information for a given token on the given chain, using the given ethers provider.
   * @param chainId chain of the token
   * @param address address of the token on the chain
   * @param provider provider used to fetch the token
   * @param symbol optional symbol of the token
   * @param name optional name of the token
   */


  Fetcher.fetchTokenData = function fetchTokenData(chainId, address, provider, symbol, name) {
    try {
      var _TOKEN_DECIMALS_CACHE, _TOKEN_DECIMALS_CACHE2;

      var _temp3 = function _temp3(parsedDecimals) {
        return new Token(chainId, address, parsedDecimals, symbol, name);
      };

      if (provider === undefined) provider = getDefaultProvider(getNetwork(chainId));

      var _temp4 = typeof ((_TOKEN_DECIMALS_CACHE = TOKEN_DECIMALS_CACHE) === null || _TOKEN_DECIMALS_CACHE === void 0 ? void 0 : (_TOKEN_DECIMALS_CACHE2 = _TOKEN_DECIMALS_CACHE[chainId]) === null || _TOKEN_DECIMALS_CACHE2 === void 0 ? void 0 : _TOKEN_DECIMALS_CACHE2[address]) === 'number';

      return Promise.resolve(_temp4 ? _temp3(TOKEN_DECIMALS_CACHE[chainId][address]) : Promise.resolve(new Contract(address, ERC20, provider).decimals().then(function (decimals) {
        var _TOKEN_DECIMALS_CACHE3, _extends2, _extends3;

        TOKEN_DECIMALS_CACHE = _extends({}, TOKEN_DECIMALS_CACHE, (_extends3 = {}, _extends3[chainId] = _extends({}, (_TOKEN_DECIMALS_CACHE3 = TOKEN_DECIMALS_CACHE) === null || _TOKEN_DECIMALS_CACHE3 === void 0 ? void 0 : _TOKEN_DECIMALS_CACHE3[chainId], (_extends2 = {}, _extends2[address] = decimals, _extends2)), _extends3));
        return decimals;
      })).then(_temp3));
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Fetches information about a pair and constructs a pair from the given two tokens.
   * @param tokenA first token
   * @param tokenB second token
   * @param provider the provider to use to fetch the data
   */
  ;

  Fetcher.fetchPairData = function fetchPairData(tokenA, tokenB, provider) {
    try {
      if (provider === undefined) provider = getDefaultProvider(getNetwork(tokenA.chainId));
      !(tokenA.chainId === tokenB.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
      var address = Pair.getAddress(tokenA, tokenB, tokenA.chainId);
      return Promise.resolve(new Contract(address, IJoePair.abi, provider).getReserves()).then(function (_ref) {
        var reserves0 = _ref[0],
            reserves1 = _ref[1];
        var balances = tokenA.sortsBefore(tokenB) ? [reserves0, reserves1] : [reserves1, reserves0];
        return new Pair(new TokenAmount(tokenA, balances[0]), new TokenAmount(tokenB, balances[1]), tokenA.chainId);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return Fetcher;
}();

var _BLOCKS_SUBGRAPH, _EXCHANGE_SUBGRAPH, _MASTERCHEF_SUBGRAPH, _DEXCANDLES_SUBGRAPH, _BAR_SUBGRAPH, _LENDING_SUBGRAPH, _ROCKET_SUBGRAPH;
var ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
var BLOCKS_SUBGRAPH = (_BLOCKS_SUBGRAPH = {}, _BLOCKS_SUBGRAPH[ChainId.GOERLI] = 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks', _BLOCKS_SUBGRAPH[ChainId.ARBITRUM] = ZERO_ADDRESS, _BLOCKS_SUBGRAPH[ChainId.AVALANCHE] = 'https://thegraph.com/explorer/subgraph/dasconnor/avalanche-blocks', _BLOCKS_SUBGRAPH);
var EXCHANGE_SUBGRAPH = (_EXCHANGE_SUBGRAPH = {}, _EXCHANGE_SUBGRAPH[ChainId.GOERLI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange-GOERLI-ii', _EXCHANGE_SUBGRAPH[ChainId.ARBITRUM] = ZERO_ADDRESS, _EXCHANGE_SUBGRAPH[ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange', _EXCHANGE_SUBGRAPH);
var MASTERCHEF_SUBGRAPH = (_MASTERCHEF_SUBGRAPH = {}, _MASTERCHEF_SUBGRAPH[ChainId.GOERLI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2-GOERLI', _MASTERCHEF_SUBGRAPH[ChainId.ARBITRUM] = ZERO_ADDRESS, _MASTERCHEF_SUBGRAPH[ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2', _MASTERCHEF_SUBGRAPH);
var DEXCANDLES_SUBGRAPH = (_DEXCANDLES_SUBGRAPH = {}, _DEXCANDLES_SUBGRAPH[ChainId.GOERLI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-GOERLI-ii', _DEXCANDLES_SUBGRAPH[ChainId.ARBITRUM] = ZERO_ADDRESS, _DEXCANDLES_SUBGRAPH[ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles', _DEXCANDLES_SUBGRAPH);
var BAR_SUBGRAPH = (_BAR_SUBGRAPH = {}, _BAR_SUBGRAPH[ChainId.GOERLI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar-GOERLI-ii', _BAR_SUBGRAPH[ChainId.ARBITRUM] = ZERO_ADDRESS, _BAR_SUBGRAPH[ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar', _BAR_SUBGRAPH);
var LENDING_SUBGRAPH = (_LENDING_SUBGRAPH = {}, _LENDING_SUBGRAPH[ChainId.GOERLI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending-GOERLI', _LENDING_SUBGRAPH[ChainId.ARBITRUM] = ZERO_ADDRESS, _LENDING_SUBGRAPH[ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending', _LENDING_SUBGRAPH);
var ROCKET_SUBGRAPH = (_ROCKET_SUBGRAPH = {}, _ROCKET_SUBGRAPH[ChainId.GOERLI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket-GOERLI', _ROCKET_SUBGRAPH[ChainId.ARBITRUM] = ZERO_ADDRESS, _ROCKET_SUBGRAPH[ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket', _ROCKET_SUBGRAPH);

export { BAR_ADDRESS, BAR_SUBGRAPH, BLOCKS_SUBGRAPH, BORINGDASHBOARD_ADDRESS, BORINGHELPER_ADDRESS, BORINGHELPER_MCV3_ADDRESS, BORINGTOKENSCANNER_ADDRESS, CAVAX, ChainId, Currency, CurrencyAmount, DEXCANDLES_SUBGRAPH, EXCHANGE_SUBGRAPH, FACTORY_ADDRESS, FARMLENS_ADDRESS, Fetcher, Fraction, INIT_CODE_HASH, InsufficientInputAmountError, InsufficientReservesError, JAVAX_ADDRESS, JOELENSVIEW_ADDRESS, JOELENS_ADDRESS, JOE_ADDRESS, LAUNCH_EVENT_LENS_ADDRESS, LENDING_SUBGRAPH, LOCKING_WRAPPER_ADDRESS, MAKER_ADDRESS, MASTERCHEF_ADDRESS, MASTERCHEF_SUBGRAPH, MASTERCHEF_V3_ADDRESS, MAXIMILLION_ADDRESS, MINIMUM_LIQUIDITY, Pair, Percent, Price, ROCKET_JOE_STAKING_ADDRESS, ROCKET_JOE_TOKEN_ADDRESS, ROCKET_SUBGRAPH, ROLL_ADDRESS, ROUTER_ADDRESS, Rounding, Route, Router, Token, TokenAmount, Trade, TradeType, UNITROLLER_ADDRESS, WAVAX, ZAP_ADDRESS, currencyEquals, inputOutputComparator, tradeComparator };
//# sourceMappingURL=sdk.esm.js.map
