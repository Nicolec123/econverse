import { formatCurrency, installmentValue, referencePrice } from '../../utils/currency'
import type { Product } from '../../types/product'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const price = formatCurrency(product.price)
  const previous = formatCurrency(referencePrice(product.price))
  const installment = formatCurrency(installmentValue(product.price))

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.photoButton}
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img src={product.photo} alt="" />
      </button>

      <h3>
        <button type="button" className={styles.name} onClick={() => onSelect(product)}>
          {product.productName}
        </button>
      </h3>

      <p className={styles.previous}>
        <span className="srOnly">Preço anterior </span>
        {previous}
      </p>
      <p className={styles.price}>
        <span className="srOnly">Preço atual </span>
        {price}
      </p>
      <p className={styles.installment}>ou 2x de {installment} sem juros</p>
      <p className={styles.shipping}>Frete grátis</p>

      <button type="button" className={styles.buy} onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  )
}
