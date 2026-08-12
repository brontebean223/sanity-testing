/** Which site this deployment represents. Set per Vercel project or in .env.local */
export const SITE_SLUG =
  import.meta.env.PUBLIC_SITE_SLUG ?? 'grand-harbor-hotel'

export type SiteBrand = {
  slug: string
  name: string
  themeId: 'harbor' | 'light'
}

const SITE_BRANDS: Record<string, SiteBrand> = {
  'grand-harbor-hotel': {
    slug: 'grand-harbor-hotel',
    name: 'Grand Harbor Hotel',
    themeId: 'harbor',
  },
  'harbor-light-inn': {
    slug: 'harbor-light-inn',
    name: 'Harbor Light Inn',
    themeId: 'light',
  },
}

export function getSiteBrand(): SiteBrand {
  return SITE_BRANDS[SITE_SLUG] ?? SITE_BRANDS['grand-harbor-hotel']
}
