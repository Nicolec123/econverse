import { useMemo, useState } from 'react'
import { Brands } from './components/Brands/Brands'
import { Categories } from './components/Categories/Categories'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Partners } from './components/Partners/Partners'
import { ProductModal } from './components/ProductModal/ProductModal'
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'
import { filterProducts } from './utils/products'

export function App() {
  const { products, status, error, retry } = useProducts()
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Product | null>(null)

  const visibleProducts = useMemo(() => filterProducts(products, query), [products, query])

  const openProduct = (product: Product) => {
    setSelected(product)
  }

  return (
    <>
      <a className="skipLink" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header
        query={query}
        onQueryChange={setQuery}
        onSearch={() => document.getElementById('vitrine')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <main id="conteudo">
        <Hero />
        <Categories />
        <ProductShowcase
          id="vitrine"
          titleId="titulo-vitrine"
          products={visibleProducts}
          showTabs
          status={status}
          error={error}
          onRetry={retry}
          onSelect={openProduct}
        />
        <Partners titleId="titulo-parceiros" />
        <ProductShowcase
          id="vitrine-completa"
          titleId="titulo-vitrine-completa"
          products={visibleProducts}
          status={status}
          error={error}
          onRetry={retry}
          onSelect={openProduct}
        />
        <Partners titleId="titulo-parceiros-2" />
        <Brands />
        <ProductShowcase
          id="vitrine-marcas"
          titleId="titulo-vitrine-marcas"
          products={visibleProducts}
          status={status}
          error={error}
          onRetry={retry}
          onSelect={openProduct}
        />
      </main>
      <Newsletter />
      <Footer />
      {selected ? (
        <ProductModal product={selected} onClose={() => setSelected(null)} onBuy={() => setSelected(null)} />
      ) : null}
    </>
  )
}
