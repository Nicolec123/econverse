import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <h1 id="hero-title">
          <span>Venha conhecer nossas promoções</span>
          <strong>50% Off nos produtos</strong>
        </h1>
        <a className={styles.cta} href="#vitrine">
          Ver produto
        </a>
      </div>
    </section>
  )
}
