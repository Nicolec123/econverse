import { useEffect, useRef, useState } from 'react'
import { BRANDS } from '../../data/catalog'
import { ChevronIcon } from '../Icons'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import styles from './Brands.module.scss'

export function Brands() {
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [edges, setEdges] = useState({ start: true, end: true })

  const updateEdges = () => {
    const element = scrollerRef.current
    if (!element) return
    const canScroll = element.scrollWidth > element.clientWidth + 2
    setEdges({
      start: !canScroll || element.scrollLeft <= 2,
      end: !canScroll || element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    })
  }

  useEffect(() => {
    updateEdges()
  }, [])

  const scroll = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 220, behavior: 'smooth' })
  }

  const showArrows = !(edges.start && edges.end)

  return (
    <section className={styles.section} aria-labelledby="titulo-marcas">
      <div className={styles.inner}>
        <SectionTitle id="titulo-marcas" title="Navegue por marcas" />
        <div className={styles.carousel}>
          {showArrows ? (
            <button
              type="button"
              className={styles.prev}
              aria-label="Marcas anteriores"
              disabled={edges.start}
              onClick={() => scroll(-1)}
            >
              <ChevronIcon />
            </button>
          ) : null}
          <ul ref={scrollerRef} onScroll={updateEdges}>
            {BRANDS.map((brand) => (
              <li key={brand.name}>
                <img src={brand.src} alt={brand.name} width={160} height={160} />
              </li>
            ))}
          </ul>
          {showArrows ? (
            <button
              type="button"
              className={styles.next}
              aria-label="Próximas marcas"
              disabled={edges.end}
              onClick={() => scroll(1)}
            >
              <ChevronIcon />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
