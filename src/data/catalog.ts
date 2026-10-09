export const NAV_LINKS = [
  { href: '#categorias', label: 'Todas categorias' },
  { href: '#categorias', label: 'Supermercado' },
  { href: '#categorias', label: 'Livros' },
  { href: '#categorias', label: 'Moda' },
  { href: '#vitrine', label: 'Lançamentos' },
  { href: '#vitrine', label: 'Ofertas do dia' },
] as const

export const CATEGORIES = [
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'supermercado', label: 'Supermercado' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'ferramentas', label: 'Ferramentas' },
  { id: 'saude', label: 'Saúde' },
  { id: 'esportes', label: 'Esportes e Fitness' },
  { id: 'moda', label: 'Moda' },
] as const

export type CategoryId = (typeof CATEGORIES)[number]['id']

export const PRODUCT_TABS = [
  'Celular',
  'Acessórios',
  'Tablets',
  'Notebooks',
  'TVs',
  'Ver todos',
] as const

export const BRANDS = [
  { name: "A D'ORO", src: '/images/brands/adoro.png' },
  { name: 'Camil', src: '/images/brands/camil.png' },
  { name: 'Grano', src: '/images/brands/grano.png' },
] as const

export const PARTNERS = [
  {
    title: 'Parceiros',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    image: '/images/partner.jpg',
    href: '#vitrine',
  },
  {
    title: 'Parceiros',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    image: '/images/partner.jpg',
    href: '#vitrine',
  },
] as const

export const FOOTER_COLUMNS = [
  {
    title: 'Institucional',
    links: [
      { href: '#sobre', label: 'Quem somos' },
      { href: '#sobre', label: 'Política de privacidade' },
      { href: '#sobre', label: 'Termos de uso' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { href: '#vitrine', label: 'Como comprar' },
      { href: '#vitrine', label: 'Prazos de entrega' },
      { href: '#vitrine', label: 'Trocas e devoluções' },
    ],
  },
] as const

export const PAYMENT_METHODS = ['Visa', 'Mastercard', 'Elo', 'Pix', 'Boleto'] as const
