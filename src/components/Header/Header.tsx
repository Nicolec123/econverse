import { NAV_LINKS } from '../../data/catalog'
import {
  CardIcon,
  CartIcon,
  CrownIcon,
  HeartIcon,
  PackageIcon,
  SearchIcon,
  ShieldIcon,
  TruckIcon,
  UserIcon,
} from '../Icons'
import styles from './Header.module.scss'

interface HeaderProps {
  query: string
  onQueryChange: (value: string) => void
  onSearch: () => void
}

const BENEFITS = [
  { icon: ShieldIcon, label: 'Compra 100% segura' },
  { icon: TruckIcon, label: 'Frete grátis acima de R$ 200' },
  { icon: CardIcon, label: 'Parcele suas compras' },
]

export function Header({ query, onQueryChange, onSearch }: HeaderProps) {
  return (
    <header className={styles.header} id="topo">
      <div className={styles.benefits}>
        <ul>
          {BENEFITS.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon className={styles.benefitIcon} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.main}>
        <a className={styles.logo} href="#topo" aria-label="Econverse, página inicial">
          <span className={styles.mark} aria-hidden="true">
            e
          </span>
          <span className={styles.word}>econverse</span>
        </a>

        <form
          className={styles.search}
          role="search"
          onSubmit={(event) => {
            event.preventDefault()
            onSearch()
          }}
        >
          <label className="srOnly" htmlFor="busca">
            O que você está buscando?
          </label>
          <input
            id="busca"
            type="search"
            placeholder="O que você está buscando?"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <button type="submit" aria-label="Buscar">
            <SearchIcon className={styles.searchIcon} />
          </button>
        </form>

        <div className={styles.actions}>
          <button type="button" aria-label="Pedidos">
            <PackageIcon />
          </button>
          <button type="button" aria-label="Favoritos">
            <HeartIcon />
          </button>
          <button type="button" aria-label="Minha conta">
            <UserIcon />
          </button>
          <button type="button" aria-label="Carrinho">
            <CartIcon />
          </button>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Categorias da loja">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <CrownIcon className={styles.crown} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
