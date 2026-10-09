import { useCallback, useEffect, useState } from 'react'
import { fetchProducts } from '../services/productsApi'
import type { Product } from '../types/product'

type Status = 'loading' | 'success' | 'error'

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError'
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<Status>('loading')
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (signal?: AbortSignal) => {
    setStatus('loading')
    setError(null)

    try {
      const next = await fetchProducts(signal)
      if (signal?.aborted) return
      setProducts(next)
      setStatus('success')
    } catch (caught) {
      if (signal?.aborted || isAbortError(caught)) return
      const message =
        caught instanceof Error ? caught.message : 'Não foi possível carregar os produtos.'
      setError(message)
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    void load(controller.signal)
    return () => controller.abort()
  }, [load])

  const retry = useCallback(() => {
    void load()
  }, [load])

  return { products, status, error, retry }
}
