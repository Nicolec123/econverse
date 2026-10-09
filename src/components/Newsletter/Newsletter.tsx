import { useState, type FormEvent } from 'react'
import styles from './Newsletter.module.scss'

interface FormState {
  name: string
  email: string
  accepted: boolean
}

const INITIAL: FormState = { name: '', email: '', accepted: false }

export function Newsletter() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSuccess('')

    if (form.name.trim().length < 2) {
      setError('Informe seu nome.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Informe um e-mail válido.')
      return
    }

    if (!form.accepted) {
      setError('Aceite os termos e condições para continuar.')
      return
    }

    setError('')
    setSuccess('Cadastro realizado. Em breve você recebe nossas novidades.')
    setForm(INITIAL)
  }

  return (
    <section className={styles.section} id="newsletter" aria-labelledby="titulo-newsletter">
      <div className={styles.inner}>
        <h2 id="titulo-newsletter">Inscreva-se na nossa newsletter</h2>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>

        <form onSubmit={onSubmit} noValidate>
          <div className={styles.fields}>
            <label>
              <span className="srOnly">Nome</span>
              <input
                name="nome"
                placeholder="Nome"
                autoComplete="name"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              />
            </label>
            <label>
              <span className="srOnly">E-mail</span>
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                autoComplete="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              />
            </label>
            <button type="submit">Cadastrar</button>
          </div>

          <label className={styles.terms}>
            <input
              type="checkbox"
              checked={form.accepted}
              onChange={(event) => setForm((current) => ({ ...current, accepted: event.target.checked }))}
            />
            Aceito os termos e condições
          </label>
        </form>

        {error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : null}
        {success ? (
          <p className={styles.success} role="status">
            {success}
          </p>
        ) : null}
      </div>
    </section>
  )
}
