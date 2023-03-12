import { ChainId, Token, Pair, TokenAmount, WAVAX, Price } from '../src'

describe('Pair', () => {
  const FISH = new Token(ChainId.ARBITRUM, '0xAd1c1a22A0eC39b81034b6c4dC01D5AeC406A4Ad', 18, 'FISH', 'FishToken')
  const MURLOC = new Token(ChainId.ARBITRUM, '0xD6e29Beeb3C37542dCC5C115e44b232ACF487073', 18, 'MURLOC', 'MurlocToken')

  describe('constructor', () => {
    it('cannot be used for tokens on different chains', () => {
      expect(
        () => new Pair(new TokenAmount(FISH, '100'), new TokenAmount(WAVAX[ChainId.AVALANCHE], '100'), ChainId.ARBITRUM)
      ).toThrow('CHAIN_IDS')
    })
  })

  describe('#getAddress', () => {
    it('returns the correct address', () => {
      expect(Pair.getAddress(FISH, MURLOC, ChainId.ARBITRUM)).toEqual('0xb875CeCB08CeDAD83fB8738211bc087D0Ee325C2')
    })
  })

  describe('#token0', () => {
    it('always is the token that sorts before', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM).token0).toEqual(FISH)
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '100'), ChainId.ARBITRUM).token0).toEqual(FISH)
    })
  })
  describe('#token1', () => {
    it('always is the token that sorts after', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM).token1).toEqual(
        MURLOC
      )
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '100'), ChainId.ARBITRUM).token1).toEqual(
        MURLOC
      )
    })
  })
  describe('#reserve0', () => {
    it('always comes from the token that sorts before', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '101'), ChainId.ARBITRUM).reserve0).toEqual(
        new TokenAmount(FISH, '101')
      )
      expect(new Pair(new TokenAmount(FISH, '101'), new TokenAmount(MURLOC, '100'), ChainId.ARBITRUM).reserve0).toEqual(
        new TokenAmount(FISH, '101')
      )
    })
  })
  describe('#reserve1', () => {
    it('always comes from the token that sorts after', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '101'), ChainId.ARBITRUM).reserve1).toEqual(
        new TokenAmount(MURLOC, '100')
      )
      expect(new Pair(new TokenAmount(FISH, '101'), new TokenAmount(MURLOC, '100'), ChainId.ARBITRUM).reserve1).toEqual(
        new TokenAmount(MURLOC, '100')
      )
    })
  })

  describe('#token0Price', () => {
    it('returns price of token0 in terms of token1', () => {
      expect(new Pair(new TokenAmount(MURLOC, '101'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM).token0Price).toEqual(
        new Price(FISH, MURLOC, '100', '101')
      )
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '101'), ChainId.ARBITRUM).token0Price).toEqual(
        new Price(FISH, MURLOC, '100', '101')
      )
    })
  })

  describe('#token1Price', () => {
    it('returns price of token1 in terms of token0', () => {
      expect(new Pair(new TokenAmount(MURLOC, '101'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM).token1Price).toEqual(
        new Price(MURLOC, FISH, '101', '100')
      )
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '101'), ChainId.ARBITRUM).token1Price).toEqual(
        new Price(MURLOC, FISH, '101', '100')
      )
    })
  })

  describe('#priceOf', () => {
    const pair = new Pair(new TokenAmount(MURLOC, '101'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM)
    it('returns price of token in terms of other token', () => {
      expect(pair.priceOf(FISH)).toEqual(pair.token0Price)
      expect(pair.priceOf(MURLOC)).toEqual(pair.token1Price)
    })

    it('throws if invalid token', () => {
      expect(() => pair.priceOf(WAVAX[ChainId.ARBITRUM])).toThrow('TOKEN')
    })
  })

  describe('#reserveOf', () => {
    it('returns reserves of the given token', () => {
      expect(
        new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '101'), ChainId.ARBITRUM).reserveOf(MURLOC)
      ).toEqual(new TokenAmount(MURLOC, '100'))
      expect(
        new Pair(new TokenAmount(FISH, '101'), new TokenAmount(MURLOC, '100'), ChainId.ARBITRUM).reserveOf(MURLOC)
      ).toEqual(new TokenAmount(MURLOC, '100'))
    })

    it('throws if not in the pair', () => {
      expect(() =>
        new Pair(new TokenAmount(FISH, '101'), new TokenAmount(MURLOC, '100'), ChainId.ARBITRUM).reserveOf(
          WAVAX[ChainId.ARBITRUM]
        )
      ).toThrow('TOKEN')
    })
  })

  describe('#chainId', () => {
    it('returns the token0 chainId', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM).chainId).toEqual(
        ChainId.ARBITRUM
      )
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '100'), ChainId.ARBITRUM).chainId).toEqual(
        ChainId.ARBITRUM
      )
    })
  })
  describe('#involvesToken', () => {
    expect(
      new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM).involvesToken(MURLOC)
    ).toEqual(true)
    expect(
      new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM).involvesToken(FISH)
    ).toEqual(true)
    expect(
      new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.ARBITRUM).involvesToken(
        WAVAX[ChainId.ARBITRUM]
      )
    ).toEqual(false)
  })
})
