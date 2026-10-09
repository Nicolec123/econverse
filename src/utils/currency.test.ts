import { describe, expect, it } from 'vitest'
import { formatCurrency, installmentValue, referencePrice } from './currency'

describe('moeda', () => {
  it('formata valores em real', () => {
    expect(formatCurrency(15000).replace(/\s/g, ' ')).toBe('R$ 15.000,00')
    expect(formatCurrency(520).replace(/\s/g, ' ')).toBe('R$ 520,00')
  })

  it('calcula a parcela em 2x', () => {
    expect(installmentValue(9000)).toBe(4500)
  })

  it('calcula o preço de referência 10% acima', () => {
    expect(referencePrice(1000)).toBe(1100)
  })
})
