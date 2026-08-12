import type {SiteTheme} from './types'

/** Grand Harbor — warm, light, luxury waterfront (WCAG AA contrast) */
export const harborTheme: SiteTheme = {
  id: 'harbor',
  heroEyebrow: 'Waterfront retreat',
  layout: {
    body: 'min-h-screen bg-stone-50 text-stone-900 antialiased',
    header: 'border-b border-stone-200 bg-white/90 backdrop-blur',
    headerLink: 'text-sm font-semibold tracking-wide text-stone-900',
    footer: 'border-t border-stone-200 bg-white py-8 text-center text-sm text-stone-600',
  },
  hero: {
    section: 'relative overflow-hidden bg-stone-900 text-white',
    gradient: 'absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950',
    imageOverlay: 'absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-900/70 to-stone-900/30',
    eyebrow: 'mb-3 text-sm font-medium uppercase tracking-[0.25em] text-amber-100',
    headline: 'max-w-3xl text-4xl font-light tracking-tight text-white sm:text-6xl',
    subheadline: 'mt-6 max-w-2xl text-lg text-stone-100 sm:text-xl',
  },
  textSection: {
    heading: 'mb-4 text-3xl font-light text-stone-900',
    body: 'max-w-3xl space-y-4 text-lg leading-relaxed text-stone-700',
    h3: 'text-xl font-medium text-stone-900',
    h4: 'text-lg font-medium text-stone-900',
    blockquote: 'border-l-4 border-amber-600 pl-4 italic text-stone-800',
    link: 'text-amber-900 underline decoration-amber-600 underline-offset-2 hover:text-amber-950',
  },
  features: {
    section: 'bg-amber-50 py-16',
    heading: 'mb-10 text-3xl font-light text-stone-900',
    card: 'rounded-2xl border border-stone-200 bg-white p-6 shadow-sm',
    cardTitle: 'text-lg font-medium text-stone-900',
    cardBody: 'mt-2 text-stone-700',
  },
  cta: {
    panel: 'rounded-3xl bg-stone-900 px-8 py-14 text-white',
    text: 'mb-6 text-stone-100',
    button:
      'inline-block rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-stone-950 transition hover:bg-amber-300',
  },
  shared: {
    section: 'border-t border-stone-200 bg-stone-100 px-6 py-16',
    label: 'mb-8 text-sm font-medium uppercase tracking-[0.2em] text-stone-700',
    heading: 'mb-6 text-2xl font-light text-stone-900',
    card: 'rounded-xl border border-stone-200 bg-white p-5 shadow-sm',
    cardTitle: 'font-medium text-stone-900',
    cardMeta: 'mt-1 text-sm text-stone-700',
    cardBody: 'mt-3 text-sm leading-relaxed text-stone-700',
  },
}
