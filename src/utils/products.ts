import type { Product } from '../types/product'

export function filterProducts(products: Product[], query: string): Product[] {
  const term = query.trim().toLowerCase()
  if (!term) return products

  return products.filter((product) => {
    const name = product.productName.toLowerCase()
    const description = product.descriptionShort.toLowerCase()
    return name.includes(term) || description.includes(term)
  })
}
