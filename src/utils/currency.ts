const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatCurrency(value: number): string {
  return currencyFormatter.format(value)
}

export function installmentValue(price: number, times = 2): number {
  return price / times
}

export function referencePrice(price: number): number {
  return Math.round(price * 1.1)
}
