import {createImageUrlBuilder} from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url'
import {defineQuery} from 'groq'
import {sanityClient} from 'sanity:client'

export type BodyType = 'star' | 'planet' | 'dwarfPlanet' | 'moon' | 'other'

export type Mass = {
  value: number
  unit: 'solarMass' | 'earthMass'
}

export type Fact = {
  _key: string
  label: string
  value: string
}

export type CelestialBodyImage = SanityImageSource & {
  alt?: string
}

export type CelestialBody = {
  _id: string
  name: string
  bodyType: BodyType
  mass?: Mass
  facts?: Fact[]
  images?: CelestialBodyImage[]
}

const CELESTIAL_BODIES_QUERY = defineQuery(`
  *[_type == "celestialBody"] | order(
    select(
      bodyType == "star" => 0,
      bodyType == "planet" => 1,
      bodyType == "moon" => 2,
      3
    ) asc,
    name asc
  ) {
    _id,
    name,
    bodyType,
    mass,
    facts[]{
      _key,
      label,
      value
    },
    images[]{
      ...,
      asset->
    }
  }
`)

const imageBuilder = createImageUrlBuilder(sanityClient)

export async function getCelestialBodies(): Promise<CelestialBody[]> {
  return sanityClient.fetch(CELESTIAL_BODIES_QUERY)
}

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source)
}

export function formatMass(mass?: Mass): string | undefined {
  if (!mass) return undefined

  const unitLabel = mass.unit === 'earthMass' ? 'M⊕' : 'M☉'
  const formattedValue =
    mass.value >= 1 || mass.value === 0
      ? mass.value.toLocaleString(undefined, {maximumFractionDigits: 2})
      : mass.value.toExponential(2)

  return `${formattedValue} ${unitLabel}`
}

export function formatBodyType(bodyType: BodyType): string {
  const labels: Record<BodyType, string> = {
    star: 'Star',
    planet: 'Planet',
    dwarfPlanet: 'Dwarf planet',
    moon: 'Moon',
    other: 'Other',
  }

  return labels[bodyType] ?? bodyType
}
