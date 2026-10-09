import type { Product, ProductsResponse } from '../types/product'

export const PRODUCTS_URL =
  '/econverse-api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

function isProduct(value: unknown): value is Product {
  if (!value || typeof value !== 'object') return false
  const product = value as Partial<Product>
  return (
    typeof product.productName === 'string' &&
    typeof product.descriptionShort === 'string' &&
    typeof product.photo === 'string' &&
    typeof product.price === 'number'
  )
}

export function parseProducts(data: unknown): Product[] {
  if (!data || typeof data !== 'object') {
    throw new Error('Resposta de produtos inválida.')
  }

  const response = data as Partial<ProductsResponse>
  if (!Array.isArray(response.products)) {
    throw new Error('A lista de produtos não foi encontrada.')
  }

  const products = response.products.filter(isProduct)
  if (products.length === 0) {
    throw new Error('Nenhum produto válido foi retornado.')
  }

  return products
}

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal })

  if (!response.ok) {
    throw new Error(`Não foi possível carregar os produtos (${response.status}).`)
  }

  return parseProducts(await response.json())
}
