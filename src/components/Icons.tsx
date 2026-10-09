interface IconProps {
  className?: string
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 5 6v6c0 4.2 2.8 7.4 7 8.5 4.2-1.1 7-4.3 7-8.5V6l-7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="m8.5 12 2.2 2.2 4.8-4.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 7h11v8H3V7Zm11 2h4l3 3v3h-7V9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="17.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function CardIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function PackageIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 12 4.5 7.8M12 12l7.5-4.2M12 12v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 19.2c1.2-2.8 3.5-4.2 6.5-4.2s5.3 1.4 6.5 4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h2l1.6 9.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.3" fill="currentColor" />
      <circle cx="17" cy="19" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function CrownIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 16 2.2-8 4.3 4.2L12 5l2.5 7.2L18.8 8 21 16H3Z" fill="currentColor" />
      <path d="M4 18.5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function DevicesIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="8" width="28" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="26" y="16" width="12" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="34" y="22" width="8" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function MarketIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 18h32l-2 18H10L8 18Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 18V14a8 8 0 0 1 16 0v4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function BottleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M20 6h8v6l4 4v22a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V16l4-4V6Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M18 24h12" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function ToolsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M30 8a8 8 0 0 0-6 12L10 34l4 4 14-14a8 8 0 0 0 12-6l-6 2-4-4 4-6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HealthIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function FitnessIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="16" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="m14 18 6 4 4 10M20 22l8-2 6 6M18 32h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FashionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M18 8 14 14 8 16l6 6-2 16h24l-2-16 6-6-6-2-4-6-4 6h-4l-4-6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.5 9.5H9V19H6.5V9.5ZM7.7 5A1.6 1.6 0 1 1 7.7 8.2 1.6 1.6 0 0 1 7.7 5ZM11 9.5h2.4v1.3h.1c.3-.6 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1V19H16.8v-4.3c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19H11V9.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
