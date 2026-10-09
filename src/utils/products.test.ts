import { describe, expect, it } from 'vitest'
import type { Product } from '../types/product'
import { filterProducts } from './products'

const products: Product[] = [
  {
    productName: 'Iphone 11 PRO MAX BRANCO 1',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
    photo: 'https://exemplo.com/iphone.png',
    price: 15000,
  },
  {
    productName: 'IPHONE 13 MINI 1',
    descriptionShort: 'IPHONE 13 MINI 1',
    photo: 'https://exemplo.com/iphone.png',
    price: 9000,
  },
]

describe('filterProducts', () => {
  it('retorna a lista inteira quando a busca está vazia', () => {
    expect(filterProducts(products, '   ')).toHaveLength(2)
  })

  it('filtra pelo nome sem diferenciar maiúsculas', () => {
    expect(filterProducts(products, 'mini')).toEqual([products[1]])
  })
})
