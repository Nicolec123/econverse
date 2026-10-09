import { describe, expect, it, vi } from 'vitest'
import { fetchProducts, parseProducts, PRODUCTS_URL } from './productsApi'

const product = {
  productName: 'IPHONE 13 MINI 1',
  descriptionShort: 'IPHONE 13 MINI 1',
  photo: 'https://exemplo.com/iphone.png',
  price: 9000,
}

describe('parseProducts', () => {
  it('extrai os produtos válidos', () => {
    expect(parseProducts({ success: true, products: [product, { price: 'x' }] })).toEqual([product])
  })

  it('rejeita uma resposta sem lista', () => {
    expect(() => parseProducts({ success: true })).toThrow(/lista de produtos/i)
  })
})

describe('fetchProducts', () => {
  it('busca o JSON no caminho do proxy', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, products: [product] }),
    })
    vi.stubGlobal('fetch', fetchMock)

    await expect(fetchProducts()).resolves.toEqual([product])
    expect(fetchMock).toHaveBeenCalledWith(PRODUCTS_URL, { signal: undefined })

    vi.unstubAllGlobals()
  })
})
