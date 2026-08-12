import type {SiteTheme} from './types'

/** Harbor Light Inn — dark, boutique, teal accents (WCAG AA contrast) */
export const lightTheme: SiteTheme = {
  id: 'light',
  heroEyebrow: 'Boutique harbor stay',
  layout: {
    body: 'min-h-screen bg-slate-950 text-slate-100 antialiased',
    header: 'border-b border-slate-800 bg-slate-900 backdrop-blur',
    headerLink: 'text-sm font-semibold tracking-wide text-teal-200',
    footer: 'border-t border-slate-800 bg-slate-900 py-8 text-center text-sm text-slate-300',
  },
  hero: {
    section: 'relative overflow-hidden bg-slate-950 text-white',
    gradient: 'absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-950 to-slate-950',
    imageOverlay: 'absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-900/40',
    eyebrow: 'mb-3 text-sm font-medium uppercase tracking-[0.25em] text-teal-100',
    headline: 'max-w-3xl text-4xl font-light tracking-tight text-white sm:text-6xl',
    subheadline: 'mt-6 max-w-2xl text-lg text-slate-100 sm:text-xl',
  },
  textSection: {
    heading: 'mb-4 text-3xl font-light text-white',
    body: 'max-w-3xl space-y-4 text-lg leading-relaxed text-slate-200',
    h3: 'text-xl font-medium text-white',
    h4: 'text-lg font-medium text-white',
    blockquote: 'border-l-4 border-teal-300 pl-4 italic text-slate-100',
    link: 'text-teal-200 underline decoration-teal-400 underline-offset-2 hover:text-white',
  },
  features: {
    section: 'bg-slate-900 py-16',
    heading: 'mb-10 text-3xl font-light text-white',
    card: 'rounded-2xl border border-slate-600 bg-slate-800 p-6',
    cardTitle: 'text-lg font-medium text-white',
    cardBody: 'mt-2 text-slate-200',
  },
  cta: {
    panel: 'rounded-3xl bg-teal-950 px-8 py-14 text-white ring-1 ring-teal-700',
    text: 'mb-6 text-teal-50',
    button:
      'inline-block rounded-full bg-teal-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-slate-950 transition hover:bg-teal-200',
  },
  shared: {
    section: 'border-t border-slate-800 bg-slate-900 px-6 py-16',
    label: 'mb-8 text-sm font-medium uppercase tracking-[0.2em] text-teal-200',
    heading: 'mb-6 text-2xl font-light text-white',
    card: 'rounded-xl border border-slate-600 bg-slate-800 p-5',
    cardTitle: 'font-medium text-white',
    cardMeta: 'mt-1 text-sm text-slate-200',
    cardBody: 'mt-3 text-sm leading-relaxed text-slate-200',
  },
}
