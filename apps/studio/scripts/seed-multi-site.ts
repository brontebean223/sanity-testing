import {getCliClient} from 'sanity/cli'
import {toPortableText} from './portable-text'

const SITE_GRAND_HARBOR = 'site-grand-harbor'
const SITE_HARBOR_LIGHT = 'site-harbor-light-inn'

const ref = (id: string, key: string) => ({_type: 'reference' as const, _ref: id, _key: key})

/** Shared across both hotel frontends — one document, two sites. */
const BOTH_HOTELS = [ref(SITE_GRAND_HARBOR, 'gh'), ref(SITE_HARBOR_LIGHT, 'hl')]

const sites = [
  {
    _id: SITE_GRAND_HARBOR,
    _type: 'site',
    title: 'Grand Harbor Hotel',
    slug: {_type: 'slug', current: 'grand-harbor-hotel'},
    domain: 'https://grand-harbor.example.com',
  },
  {
    _id: SITE_HARBOR_LIGHT,
    _type: 'site',
    title: 'Harbor Light Inn',
    slug: {_type: 'slug', current: 'harbor-light-inn'},
    domain: 'https://harbor-light.example.com',
  },
]

const pages = [
  {
    _id: 'page-grand-harbor-home',
    _type: 'page',
    title: 'Home',
    site: ref(SITE_GRAND_HARBOR, 'site'),
    slug: {_type: 'slug', current: 'home'},
    hero: {
      _type: 'hero',
      headline: 'Grand Harbor Hotel',
      subheadline:
        'Waterfront luxury in the heart of the city. Unwind with harbor views, curated dining, and rooms designed for rest.',
    },
    sections: [
      {
        _type: 'textSection',
        _key: 'welcome',
        heading: 'Welcome to the harbor',
        body: toPortableText(
          'Grand Harbor Hotel sits where the city meets the water — steps from the ferry, surrounded by cafés, galleries, and the evening glow of the marina.',
        ),
      },
      {
        _type: 'featuresSection',
        _key: 'amenities',
        heading: 'Amenities',
        items: [
          {
            _key: 'spa',
            title: 'Harbor Spa',
            description: 'Sauna, treatment rooms, and a heated pool overlooking the water.',
          },
          {
            _key: 'dining',
            title: 'The Anchor Room',
            description: 'Seasonal coastal cuisine and a raw bar open daily.',
          },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'book',
        label: 'Book your stay',
        url: 'https://example.com/book/grand-harbor',
        text: 'Best rate guaranteed when you reserve directly.',
      },
    ],
  },
  {
    _id: 'page-grand-harbor-dining',
    _type: 'page',
    title: 'Dining',
    site: ref(SITE_GRAND_HARBOR, 'site'),
    slug: {_type: 'slug', current: 'dining'},
    hero: {
      _type: 'hero',
      headline: 'Dining at Grand Harbor',
      subheadline: 'Coastal cuisine, harbor views, and the Anchor Room.',
    },
    sections: [
      {
        _type: 'textSection',
        _key: 'intro',
        heading: 'The Anchor Room',
        body: toPortableText(
          'Our signature restaurant serves seasonal menus inspired by the harbor — only at Grand Harbor Hotel.',
        ),
      },
    ],
  },
  {
    _id: 'page-harbor-light-home',
    _type: 'page',
    title: 'Home',
    site: ref(SITE_HARBOR_LIGHT, 'site'),
    slug: {_type: 'slug', current: 'home'},
    hero: {
      _type: 'hero',
      headline: 'Harbor Light Inn',
      subheadline:
        'A boutique sister property on the quieter north wharf. Coastal calm, local character, and harbor walks at your doorstep.',
    },
    sections: [
      {
        _type: 'textSection',
        _key: 'welcome',
        heading: 'Quiet harbor mornings',
        body: toPortableText(
          'Harbor Light Inn is our intimate sister hotel — same harbor, softer pace. Think linen robes, pour-over coffee in the lobby, and rooms that face the lighthouse district.',
        ),
      },
      {
        _type: 'featuresSection',
        _key: 'amenities',
        heading: 'What to expect',
        items: [
          {
            _key: 'breakfast',
            title: 'Morning pantry',
            description: 'Local pastries, fruit, and single-origin coffee served from 7am.',
          },
          {
            _key: 'walks',
            title: 'Wharf walks',
            description: 'Private access to the north pier trail and kayak launch.',
          },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'book',
        label: 'Reserve a room',
        url: 'https://example.com/book/harbor-light',
        text: 'Sister property rates available for Grand Harbor guests.',
      },
    ],
  },
  {
    _id: 'page-harbor-light-stay',
    _type: 'page',
    title: 'Your stay',
    site: ref(SITE_HARBOR_LIGHT, 'site'),
    slug: {_type: 'slug', current: 'your-stay'},
    hero: {
      _type: 'hero',
      headline: 'Your stay',
      subheadline: 'Boutique rooms, harbor light, and a slower pace.',
    },
    sections: [
      {
        _type: 'textSection',
        _key: 'intro',
        heading: 'Room details',
        body: toPortableText(
          'Each room faces the lighthouse district with custom linens and a morning pantry downstairs.',
        ),
      },
    ],
  },
]

const events = [
  {
    _id: 'event-harbor-festival',
    _type: 'event',
    title: 'Harbor Arts Festival',
    slug: {_type: 'slug', current: 'harbor-arts-festival'},
    startDate: '2026-09-12T18:00:00.000Z',
    endDate: '2026-09-14T22:00:00.000Z',
    location: 'Waterfront promenade',
    description:
      'One event document, both hotel websites — live music, local makers, and food stalls along the harbor.',
    sites: BOTH_HOTELS,
  },
  {
    _id: 'event-sunset-cruise',
    _type: 'event',
    title: 'Harbor Sunset Cruise',
    slug: {_type: 'slug', current: 'harbor-sunset-cruise'},
    startDate: '2026-08-30T19:30:00.000Z',
    location: 'Shared pier departure',
    description:
      'Guests from Grand Harbor and Harbor Light Inn board the same evening cruise — shared content, two brands.',
    sites: BOTH_HOTELS,
  },
  {
    _id: 'event-wine-tasting',
    _type: 'event',
    title: 'Grand Harbor Wine Tasting',
    slug: {_type: 'slug', current: 'grand-harbor-wine-tasting'},
    startDate: '2026-08-22T19:00:00.000Z',
    location: 'Grand Harbor rooftop lounge',
    description: 'Grand Harbor only — not shared with the sister property.',
    sites: [ref(SITE_GRAND_HARBOR, 'gh')],
  },
  {
    _id: 'event-inn-acoustic',
    _type: 'event',
    title: 'Inn Acoustic Sessions',
    slug: {_type: 'slug', current: 'inn-acoustic-sessions'},
    startDate: '2026-08-15T20:00:00.000Z',
    location: 'Harbor Light lobby lounge',
    description: 'Harbor Light Inn only — intimate acoustic sets.',
    sites: [ref(SITE_HARBOR_LIGHT, 'hl')],
  },
]

const listings = [
  {
    _id: 'listing-seaside-bakery',
    _type: 'businessListing',
    name: 'Seaside Bakery',
    slug: {_type: 'slug', current: 'seaside-bakery'},
    description: 'Artisan bread and morning pastries — recommended on both hotel sites.',
    address: {street: '12 Wharf Lane', city: 'Harbor District'},
    phone: '(555) 010-2200',
    sites: BOTH_HOTELS,
  },
  {
    _id: 'listing-harbor-kayaks',
    _type: 'businessListing',
    name: 'Harbor Kayaks',
    slug: {_type: 'slug', current: 'harbor-kayaks'},
    description: 'Rentals and guided paddles — shared listing for both properties.',
    address: {street: '4 Pier Road', city: 'Harbor District'},
    phone: '(555) 010-4400',
    sites: BOTH_HOTELS,
  },
  {
    _id: 'listing-anchor-room',
    _type: 'businessListing',
    name: 'The Anchor Room',
    slug: {_type: 'slug', current: 'the-anchor-room'},
    description: 'Fine dining at Grand Harbor Hotel only.',
    address: {street: '1 Grand Harbor Pier', city: 'Harbor District'},
    phone: '(555) 010-1000',
    sites: [ref(SITE_GRAND_HARBOR, 'gh')],
  },
  {
    _id: 'listing-lighthouse-cafe',
    _type: 'businessListing',
    name: 'Lighthouse Café',
    slug: {_type: 'slug', current: 'lighthouse-cafe'},
    description: 'Casual brunch steps from Harbor Light Inn only.',
    address: {street: '8 North Wharf', city: 'Lighthouse District'},
    phone: '(555) 010-3300',
    sites: [ref(SITE_HARBOR_LIGHT, 'hl')],
  },
]

async function seedMultiSite() {
  const client = getCliClient()

  for (const doc of sites) {
    await client.createOrReplace(doc)
  }
  for (const doc of pages) {
    await client.createOrReplace(doc)
  }
  for (const doc of events) {
    await client.createOrReplace(doc)
  }
  for (const doc of listings) {
    await client.createOrReplace(doc)
  }

  // Remove legacy page ids from earlier seeds
  await client.delete('page-grand-harbor-hotel').catch(() => undefined)
  await client.delete('page-harbor-light-inn').catch(() => undefined)

  console.log('Seeded multi-site demo:')
  console.log(`  Hotels: ${sites.map((s) => s.title).join(', ')}`)
  console.log(`  Pages: ${pages.length} (scoped per hotel in Studio)`)
  console.log(`  Shared events: 2 (both hotels)`)
  console.log(`  Shared listings: 2 (both hotels)`)
}

seedMultiSite().catch((error) => {
  console.error(error)
  process.exit(1)
})
