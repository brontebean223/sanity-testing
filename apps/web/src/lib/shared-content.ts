import {defineQuery} from 'groq'
import {sanityClient} from 'sanity:client'
import {SITE_SLUG} from './site'

export type SharedEvent = {
  _id: string
  title: string
  slug: {current: string}
  startDate: string
  endDate?: string
  location?: string
  description?: string
}

export type SharedListing = {
  _id: string
  name: string
  slug: {current: string}
  description?: string
  address?: {street?: string; city?: string}
  phone?: string
  website?: string
}

/** Events visible on this site: empty sites[] means all sites, otherwise must include this site. */
const EVENTS_FOR_SITE_QUERY = defineQuery(`
  *[_type == "event" && (
    count(sites) == 0 ||
    $siteSlug in sites[]->slug.current
  )] | order(startDate asc) {
    _id,
    title,
    slug,
    startDate,
    endDate,
    location,
    description
  }
`)

const LISTINGS_FOR_SITE_QUERY = defineQuery(`
  *[_type == "businessListing" && (
    count(sites) == 0 ||
    $siteSlug in sites[]->slug.current
  )] | order(name asc) {
    _id,
    name,
    slug,
    description,
    address,
    phone,
    website
  }
`)

export async function getEventsForSite(siteSlug = SITE_SLUG): Promise<SharedEvent[]> {
  return sanityClient.fetch(EVENTS_FOR_SITE_QUERY, {siteSlug})
}

export async function getListingsForSite(siteSlug = SITE_SLUG): Promise<SharedListing[]> {
  return sanityClient.fetch(LISTINGS_FOR_SITE_QUERY, {siteSlug})
}
