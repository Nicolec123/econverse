import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { formatCurrency, installmentValue, referencePrice } from '../../utils/currency'
import type { Product } from '../../types/product'
import { CloseIcon } from '../Icons'
import styles from './ProductModal.module.scss'

interface ProductModalProps {
  product: Product
  onClose: () => void
  onBuy: (product: Product, quantity: number) => void
}

export function ProductModal({ product, onClose, onBuy }: ProductModalProps) {
  const titleId = useId()
  const [quantity, setQuantity] = useState(1)
  const total = product.price * quantity

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
          <CloseIcon />
        </button>

        <div className={styles.photo}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.info}>
          <h2 id={titleId}>{product.productName}</h2>
          <p className={styles.previous}>{formatCurrency(referencePrice(product.price))}</p>
          <p className={styles.price}>{formatCurrency(product.price)}</p>
          <p className={styles.installment}>
            ou 2x de {formatCurrency(installmentValue(product.price))} sem juros
          </p>
          <p className={styles.description}>{product.descriptionShort}</p>
          <p className={styles.shipping}>Frete grátis</p>

          <div className={styles.quantity} aria-label="Quantidade">
            <button
              type="button"
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              aria-label="Diminuir quantidade"
            >
              −
            </button>
            <span aria-live="polite">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((current) => current + 1)}
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>

          <p className={styles.total}>
            Total: <strong>{formatCurrency(total)}</strong>
          </p>

          <button type="button" className={styles.buy} onClick={() => onBuy(product, quantity)}>
            Comprar
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
