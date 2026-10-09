import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { Product } from '../../types/product'
import { ProductModal } from './ProductModal'

const product: Product = {
  productName: 'Iphone 11 PRO MAX BRANCO 1',
  descriptionShort: 'Aparelho com tela grande e câmera tripla.',
  photo: 'https://exemplo.com/iphone.png',
  price: 15000,
}

describe('ProductModal', () => {
  it('exibe os dados do produto e confirma a compra com a quantidade', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const onBuy = vi.fn()

    render(<ProductModal product={product} onClose={onClose} onBuy={onBuy} />)

    expect(screen.getByRole('dialog', { name: product.productName })).toBeInTheDocument()
    expect(screen.getByText(product.descriptionShort)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Aumentar quantidade' }))
    await user.click(screen.getByRole('button', { name: 'Comprar' }))

    expect(onBuy).toHaveBeenCalledWith(product, 2)
  })

  it('fecha ao pressionar Escape', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(<ProductModal product={product} onClose={onClose} onBuy={vi.fn()} />)
    await user.keyboard('{Escape}')

    expect(onClose).toHaveBeenCalledOnce()
  })
})
