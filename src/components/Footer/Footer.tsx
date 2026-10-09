import { FOOTER_COLUMNS, PAYMENT_METHODS } from '../../data/catalog'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../Icons'
import styles from './Footer.module.scss'

const SOCIAL = [
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'LinkedIn', icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div id="sobre">
          <a className={styles.logo} href="#topo">
            <span aria-hidden="true">e</span>
            econverse
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className={styles.social} id="redes-sociais">
            {SOCIAL.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a href="#redes-sociais" aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2>Formas de pagamento</h2>
          <ul className={styles.payments}>
            {PAYMENT_METHODS.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.copy}>
        <p>Econverse © {new Date().getFullYear()}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
