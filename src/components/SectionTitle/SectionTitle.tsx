import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  id: string
  title: string
  controlsId?: string
  actionLabel?: string
  actionExpanded?: boolean
  onAction?: () => void
}

export function SectionTitle({
  id,
  title,
  controlsId,
  actionLabel,
  actionExpanded = false,
  onAction,
}: SectionTitleProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.titleRow}>
        <h2 id={id}>{title}</h2>
        <span className={styles.line} />
      </div>
      {actionLabel && onAction ? (
        <button
          type="button"
          className={styles.action}
          aria-expanded={actionExpanded}
          aria-controls={controlsId}
          onClick={onAction}
        >
          {actionExpanded ? 'Ver menos' : actionLabel}
        </button>
      ) : null}
    </div>
  )
}
