import { useState } from 'react'
import type { CategoryId } from '../../data/catalog'
import { CATEGORIES } from '../../data/catalog'
import {
  BottleIcon,
  DevicesIcon,
  FashionIcon,
  FitnessIcon,
  HealthIcon,
  MarketIcon,
  ToolsIcon,
} from '../Icons'
import styles from './Categories.module.scss'

const ICONS = {
  tecnologia: DevicesIcon,
  supermercado: MarketIcon,
  bebidas: BottleIcon,
  ferramentas: ToolsIcon,
  saude: HealthIcon,
  esportes: FitnessIcon,
  moda: FashionIcon,
}

export function Categories() {
  const [selected, setSelected] = useState<CategoryId>('tecnologia')

  return (
    <section className={styles.section} id="categorias" aria-labelledby="titulo-categorias">
      <h2 id="titulo-categorias" className="srOnly">
        Navegue por categorias
      </h2>
      <ul>
        {CATEGORIES.map((category) => {
          const Icon = ICONS[category.id]
          const active = category.id === selected

          return (
            <li key={category.id}>
              <button
                type="button"
                className={active ? styles.active : undefined}
                onClick={() => {
                  setSelected(category.id)
                  document.getElementById('vitrine')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className={styles.iconWrap}>
                  <Icon />
                </span>
                <span>{category.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
