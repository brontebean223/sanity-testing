export type SiteTheme = {
  id: 'harbor' | 'light'
  heroEyebrow: string
  layout: {
    body: string
    header: string
    headerLink: string
    footer: string
  }
  hero: {
    section: string
    gradient: string
    imageOverlay: string
    eyebrow: string
    headline: string
    subheadline: string
  }
  textSection: {
    heading: string
    body: string
    h3: string
    h4: string
    blockquote: string
    link: string
  }
  features: {
    section: string
    heading: string
    card: string
    cardTitle: string
    cardBody: string
  }
  cta: {
    panel: string
    text: string
    button: string
  }
  shared: {
    section: string
    label: string
    heading: string
    card: string
    cardTitle: string
    cardMeta: string
    cardBody: string
  }
}
