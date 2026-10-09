import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { Product } from '../../types/product'
import { ProductCard } from './ProductCard'

const product: Product = {
  productName: 'IPHONE 13 MINI 1',
  descriptionShort: 'IPHONE 13 MINI 1',
  photo: 'https://exemplo.com/iphone.png',
  price: 9000,
}

describe('ProductCard', () => {
  it('mostra o preço e abre o produto ao comprar', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()

    render(<ProductCard product={product} onSelect={onSelect} />)

    expect(screen.getByText(/9\.000,00/)).toBeInTheDocument()
    expect(screen.getByText(/frete grátis/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Comprar' }))
    expect(onSelect).toHaveBeenCalledWith(product)
  })
})
