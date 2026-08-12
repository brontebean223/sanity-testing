import {SITE_SLUG} from '../lib/site'
import {harborTheme} from './harbor'
import {lightTheme} from './light'
import type {SiteTheme} from './types'

const themesBySlug: Record<string, SiteTheme> = {
  'grand-harbor-hotel': harborTheme,
  'harbor-light-inn': lightTheme,
}

export function getTheme(): SiteTheme {
  return themesBySlug[SITE_SLUG] ?? harborTheme
}

export {harborTheme, lightTheme}
export type {SiteTheme} from './types'
