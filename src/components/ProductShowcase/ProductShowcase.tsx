import { useEffect, useRef, useState } from 'react'
import { PRODUCT_TABS } from '../../data/catalog'
import type { Product } from '../../types/product'
import { ChevronIcon } from '../Icons'
import { ProductCard } from '../ProductCard/ProductCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import styles from './ProductShowcase.module.scss'

interface ProductShowcaseProps {
  id: string
  titleId: string
  products: Product[]
  showTabs?: boolean
  status: 'loading' | 'success' | 'error'
  error: string | null
  onRetry: () => void
  onSelect: (product: Product) => void
  emptyMessage?: string
}

export function ProductShowcase({
  id,
  titleId,
  products,
  showTabs = false,
  status,
  error,
  onRetry,
  onSelect,
  emptyMessage = 'Nenhum produto encontrado para essa busca.',
}: ProductShowcaseProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<(typeof PRODUCT_TABS)[number]>('Celular')
  const [expanded, setExpanded] = useState(false)
  const [edges, setEdges] = useState({ start: true, end: true })

  const updateEdges = () => {
    const element = scrollerRef.current
    if (!element) return
    setEdges({
      start: element.scrollLeft <= 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    })
  }

  useEffect(() => {
    updateEdges()
  }, [products, expanded, status])

  const scrollByCard = (direction: 1 | -1) => {
    const element = scrollerRef.current
    const card = element?.querySelector('article')
    if (!element || !card) return
    const gap = 24
    element.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' })
  }

  const panelId = `${id}-lista`

  return (
    <section className={styles.section} id={id} aria-labelledby={titleId}>
      <div className={styles.inner}>
        <SectionTitle
          id={titleId}
          title="Produtos relacionados"
          controlsId={panelId}
          actionLabel="Ver todos"
          actionExpanded={expanded}
          onAction={() => setExpanded((current) => !current)}
        />

        {showTabs ? (
          <div className={styles.tabs}>
            {PRODUCT_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={tab === activeTab ? styles.tabActive : styles.tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        ) : null}

        {status === 'loading' ? (
          <p className={styles.feedback} role="status">
            Carregando produtos...
          </p>
        ) : null}

        {status === 'error' ? (
          <div className={styles.feedback} role="alert">
            <p>{error}</p>
            <button type="button" onClick={onRetry}>
              Tentar novamente
            </button>
          </div>
        ) : null}

        {status === 'success' && products.length === 0 ? (
          <p className={styles.feedback}>{emptyMessage}</p>
        ) : null}

        {status === 'success' && products.length > 0 ? (
          <div className={styles.carousel}>
            {!expanded ? (
              <button
                type="button"
                className={`${styles.arrow} ${styles.prev}`}
                aria-label="Produtos anteriores"
                disabled={edges.start}
                onClick={() => scrollByCard(-1)}
              >
                <ChevronIcon />
              </button>
            ) : null}

            <div
              id={panelId}
              ref={scrollerRef}
              className={expanded ? `${styles.track} ${styles.expanded}` : styles.track}
              onScroll={updateEdges}
            >
              {products.map((product) => (
                <ProductCard key={product.productName} product={product} onSelect={onSelect} />
              ))}
            </div>

            {!expanded ? (
              <button
                type="button"
                className={`${styles.arrow} ${styles.next}`}
                aria-label="Próximos produtos"
                disabled={edges.end}
                onClick={() => scrollByCard(1)}
              >
                <ChevronIcon />
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
