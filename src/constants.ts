import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  GOERLI = 5,
  ARBITRUM = 42161,
  AVALANCHE = 43114
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

/**
 * DEX SDK
 */
export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x8a61F769a5c1538e6121A264BeA7078ab38cff47',
  [ChainId.ARBITRUM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.AVALANCHE]: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10'
}

export const JOE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xce347E069B68C53A9ED5e7DA5952529cAF8ACCd4',
  [ChainId.ARBITRUM]: '0xcee9d937E3627E55F08240072D63f32c3a60fF2D',
  [ChainId.AVALANCHE]: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd'
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x1F51b7697A1919cF301845c93D4843FD620ad7Cc',
  [ChainId.ARBITRUM]: '0x2d388F47c3Ae5CC0C7F8ad73296B208cfaCd35ae',
  [ChainId.AVALANCHE]: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
}

export const MASTERCHEF_V3_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xEedf119022F1Bb5F63676BbE855c82151B7198AF',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x188bED1968b795d5c9022F6a0bb5931Ac4c18F00'
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x33A86aFC0f728882F48E5105bc98758b3eAe2081',
  [ChainId.ARBITRUM]: '0x171B28d39De22EF001029117F3d241fF78c7DC5C',
  [ChainId.AVALANCHE]: '0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33'
}

export const ZAP_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x70c949152D2AC84FbB809228606db4654773D994',
  [ChainId.ARBITRUM]: '0x5BBFA5f49EC557eABA9427Ac434F21b69113Fe20',
  [ChainId.AVALANCHE]: '0x2C7B8e971c704371772eDaf16e0dB381A8D02027'
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x2154D5532E78b28d486d2D0A4140291bCDC5AB60',
  [ChainId.ARBITRUM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.AVALANCHE]: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4'
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xbEFE1d0756Da706B3F0EbaEa7b4ae10D0AdF2f3F',
  [ChainId.ARBITRUM]: '0x0529719e33AA2f15c13b12be01D7E876454Caf02',
  [ChainId.AVALANCHE]: '0x861726BFE27931A4E22a7277bDe6cb8432b65856'
}

export const ROLL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xD6344FF98d12adD998cBcfaC16A215396e9bCb8c',
  [ChainId.ARBITRUM]: '0x41d5f5F66e4cEd197Ff273308A1c194E9E249f4F',
  [ChainId.AVALANCHE]: '0xacFF0fBf56bAeb9Ef677DE19ADED8F7A950BCb58'
}

export const BORINGHELPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x73B35Bab1aFD869E3738464b3bE97999e80E8458',
  [ChainId.ARBITRUM]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x1dd4D86180EEe39ac4fB35ECa67CACF608Ab5741'
}

export const BORINGHELPER_MCV3_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x11f89aE6DA4aB5D0C518A41F9424c5241A3D57A3',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xce63ECA0C8A2084C1BaEcE7737dB88f10c412c5E'
}

export const BORINGTOKENSCANNER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xdd5C40b5f0f5Df9c8BF0aA4703d73867ea7f022D',
  [ChainId.ARBITRUM]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c'
}

export const BORINGDASHBOARD_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xeC208ef9F8aEDbbF28722286E334a3939acEA646',
  [ChainId.ARBITRUM]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x1Af353148F2316487b5311Fcd522c037842D232c'
}

export const LOCKING_WRAPPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x60CB8E40B815fa7FF24Ab8a0603BF0afAcb49Cc0',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xDc3B37B5F0Fe5d3f8b8701a3F8d81A02EE8A1E1a'
}

export const ROCKET_JOE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x3Be901d05584dc7900461a1b538ce24F7989cD65',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x5483ce08659fABF0277f9314868Cc4f78687BD08'
}

export const LAUNCH_EVENT_LENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xfa31cDA014bA4e1A2CfF02EA94a7B9E6DB6BcbC5',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x039AA5d3FC07f6f265656793A8c437055b653d68'
}

export const ROCKET_JOE_STAKING_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xc1108bda59F2A66843833d5B801bF40C966d34ca',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x102D195C3eE8BF8A9A89d63FB3659432d3174d81'
}

export const INIT_CODE_HASH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

/**
 * Lending SDK
 */

export const UNITROLLER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x5b0a2Fa14808E34C5518E19f0DBc39F61d080B11',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xdc13687554205E5b89Ac783db14bb5bba4A1eDaC'
}

export const JOELENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x4F101798dd4AF8A2A8325F4C54C195a61C59Dc62',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xFDF50FEa3527FaD31Fa840B748FD3694aE8a47cc'
}

export const JOELENSVIEW_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x51fBdc8FCa72CeF1E1b558DB0c502e874DB5602A',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x0000000000000000000000000000000000000000'
}

export const FARMLENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x926E833c27284f7f633E461FcE6Dd17ccb2030e1',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xc1b83cE1573984Dcf4115e983F9c28748a0F350E'
}

export const JAVAX_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0x0444dcF838055493519F26021dE63Afa72EEe0D2',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xC22F01ddc8010Ee05574028528614634684EC29e'
}

export const MAXIMILLION_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.GOERLI]: '0xC48B0159d3e7F240ac76cc3Ce39dF62fCd4656b0',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xe5cDdAFd0f7Af3DEAf4bd213bBaee7A5927AB7E7'
}