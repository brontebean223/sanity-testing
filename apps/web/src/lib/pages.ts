import {defineQuery} from 'groq'
import {sanityClient} from 'sanity:client'
import type {CloudinaryAsset} from './cloudinary'
import {SITE_SLUG} from './site'

export type Hero = {
  headline: string
  subheadline?: string
  image?: CloudinaryAsset
}

export type PortableTextBlock = {
  _type: 'block'
  _key: string
  style?: string
  markDefs?: Array<{_key: string; _type: string; href?: string}>
  children?: Array<{_type: 'span'; _key: string; text: string; marks?: string[]}>
}

export type TextSection = {
  _type: 'textSection'
  _key: string
  heading?: string
  body?: PortableTextBlock[]
}

export type FeaturesSection = {
  _type: 'featuresSection'
  _key: string
  heading?: string
  items?: Array<{
    _key: string
    title?: string
    description?: string
  }>
}

export type CtaSection = {
  _type: 'ctaSection'
  _key: string
  label: string
  url: string
  text?: string
}

export type PageSection = TextSection | FeaturesSection | CtaSection

export type CmsPage = {
  _id: string
  title: string
  slug: {current: string}
  hero: Hero
  sections?: PageSection[]
  site?: {title?: string; slug?: {current: string}}
}

const pageProjection = `{
  _id,
  title,
  slug,
  site->{title, slug},
    hero {
      headline,
      subheadline,
      image {
        _type,
        public_id,
        secure_url,
        resource_type,
        context,
        derived[]{
          secure_url,
          raw_transformation
        }
      }
    },
  sections[]{
    _key,
    _type,
    heading,
    body[]{
      ...,
      markDefs[]{
        ...,
      }
    },
    label,
    url,
    text,
    items[]{
      _key,
      title,
      description
    }
  }
}`

const PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "page" && site->slug.current == $siteSlug && defined(slug.current)]{
    "params": {"slug": slug.current}
  }
`)

const PAGE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "page" && site->slug.current == $siteSlug && slug.current == $slug][0]${pageProjection}
`)

const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "page" && site->slug.current == $siteSlug && slug.current == "home"][0]${pageProjection}
`)

export async function getPageSlugs(siteSlug = SITE_SLUG) {
  return sanityClient.fetch(PAGE_SLUGS_QUERY, {siteSlug})
}

export async function getPageBySlug(slug: string, siteSlug = SITE_SLUG): Promise<CmsPage | null> {
  return sanityClient.fetch(PAGE_BY_SLUG_QUERY, {slug, siteSlug})
}

export async function getHomePage(siteSlug = SITE_SLUG): Promise<CmsPage | null> {
  return sanityClient.fetch(HOME_PAGE_QUERY, {siteSlug})
}
