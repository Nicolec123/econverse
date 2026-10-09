import { PARTNERS } from '../../data/catalog'
import styles from './Partners.module.scss'

interface PartnersProps {
  titleId: string
}

export function Partners({ titleId }: PartnersProps) {
  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <h2 id={titleId} className="srOnly">
        Parceiros
      </h2>
      <ul>
        {PARTNERS.map((partner, index) => (
          <li key={`${titleId}-${index}`}>
            <article style={{ backgroundImage: `url(${partner.image})` }}>
              <h3>{partner.title}</h3>
              <p>{partner.text}</p>
              <a href={partner.href}>Confira</a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
