import {getCliClient} from 'sanity/cli'

type BodySeed = {
  name: string
  bodyType: 'planet' | 'moon'
  mass: {value: number; unit: 'earthMass' | 'solarMass'}
  facts: Array<{key: string; label: string; value: string}>
}

const bodies: BodySeed[] = [
  // Planets
  {
    name: 'Mercury',
    bodyType: 'planet',
    mass: {value: 0.055, unit: 'earthMass'},
    facts: [
      {key: 'diameter', label: 'Diameter', value: '4,879 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '88 Earth days'},
      {key: 'distance-from-sun', label: 'Distance from Sun', value: '57.9 million km'},
      {key: 'moons', label: 'Moons', value: '0'},
    ],
  },
  {
    name: 'Venus',
    bodyType: 'planet',
    mass: {value: 0.815, unit: 'earthMass'},
    facts: [
      {key: 'diameter', label: 'Diameter', value: '12,104 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '225 Earth days'},
      {key: 'distance-from-sun', label: 'Distance from Sun', value: '108.2 million km'},
      {key: 'moons', label: 'Moons', value: '0'},
    ],
  },
  {
    name: 'Earth',
    bodyType: 'planet',
    mass: {value: 1, unit: 'earthMass'},
    facts: [
      {key: 'diameter', label: 'Diameter', value: '12,742 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '365.25 days'},
      {key: 'distance-from-sun', label: 'Distance from Sun', value: '149.6 million km'},
      {key: 'moons', label: 'Moons', value: '1'},
    ],
  },
  {
    name: 'Mars',
    bodyType: 'planet',
    mass: {value: 0.107, unit: 'earthMass'},
    facts: [
      {key: 'diameter', label: 'Diameter', value: '6,779 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '687 Earth days'},
      {key: 'distance-from-sun', label: 'Distance from Sun', value: '227.9 million km'},
      {key: 'moons', label: 'Moons', value: '2'},
    ],
  },
  {
    name: 'Jupiter',
    bodyType: 'planet',
    mass: {value: 317.8, unit: 'earthMass'},
    facts: [
      {key: 'diameter', label: 'Diameter', value: '139,820 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '11.9 Earth years'},
      {key: 'distance-from-sun', label: 'Distance from Sun', value: '778.5 million km'},
      {key: 'moons', label: 'Known moons', value: '95+'},
    ],
  },
  {
    name: 'Saturn',
    bodyType: 'planet',
    mass: {value: 95.2, unit: 'earthMass'},
    facts: [
      {key: 'diameter', label: 'Diameter', value: '116,460 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '29.5 Earth years'},
      {key: 'distance-from-sun', label: 'Distance from Sun', value: '1.43 billion km'},
      {key: 'moons', label: 'Known moons', value: '146+'},
    ],
  },
  {
    name: 'Uranus',
    bodyType: 'planet',
    mass: {value: 14.5, unit: 'earthMass'},
    facts: [
      {key: 'diameter', label: 'Diameter', value: '50,724 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '84 Earth years'},
      {key: 'distance-from-sun', label: 'Distance from Sun', value: '2.87 billion km'},
      {key: 'moons', label: 'Known moons', value: '28'},
    ],
  },
  {
    name: 'Neptune',
    bodyType: 'planet',
    mass: {value: 17.1, unit: 'earthMass'},
    facts: [
      {key: 'diameter', label: 'Diameter', value: '49,244 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '165 Earth years'},
      {key: 'distance-from-sun', label: 'Distance from Sun', value: '4.5 billion km'},
      {key: 'moons', label: 'Known moons', value: '16'},
    ],
  },

  // Earth's moon
  {
    name: 'Moon',
    bodyType: 'moon',
    mass: {value: 0.0123, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Earth'},
      {key: 'diameter', label: 'Diameter', value: '3,474 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '27.3 Earth days'},
    ],
  },

  // Mars moons
  {
    name: 'Phobos',
    bodyType: 'moon',
    mass: {value: 1.8e-8, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Mars'},
      {key: 'diameter', label: 'Diameter', value: '22.4 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '7.65 hours'},
    ],
  },
  {
    name: 'Deimos',
    bodyType: 'moon',
    mass: {value: 2.4e-9, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Mars'},
      {key: 'diameter', label: 'Diameter', value: '12.4 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '30.3 hours'},
    ],
  },

  // Jupiter moons (Galilean)
  {
    name: 'Io',
    bodyType: 'moon',
    mass: {value: 0.015, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Jupiter'},
      {key: 'diameter', label: 'Diameter', value: '3,643 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '1.77 Earth days'},
    ],
  },
  {
    name: 'Europa',
    bodyType: 'moon',
    mass: {value: 0.008, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Jupiter'},
      {key: 'diameter', label: 'Diameter', value: '3,122 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '3.55 Earth days'},
    ],
  },
  {
    name: 'Ganymede',
    bodyType: 'moon',
    mass: {value: 0.025, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Jupiter'},
      {key: 'diameter', label: 'Diameter', value: '5,262 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '7.15 Earth days'},
    ],
  },
  {
    name: 'Callisto',
    bodyType: 'moon',
    mass: {value: 0.018, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Jupiter'},
      {key: 'diameter', label: 'Diameter', value: '4,821 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '16.7 Earth days'},
    ],
  },

  // Saturn moons (major)
  {
    name: 'Titan',
    bodyType: 'moon',
    mass: {value: 0.0225, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Saturn'},
      {key: 'diameter', label: 'Diameter', value: '5,150 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '15.9 Earth days'},
    ],
  },
  {
    name: 'Enceladus',
    bodyType: 'moon',
    mass: {value: 0.000018, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Saturn'},
      {key: 'diameter', label: 'Diameter', value: '504 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '1.37 Earth days'},
    ],
  },
  {
    name: 'Mimas',
    bodyType: 'moon',
    mass: {value: 0.0000063, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Saturn'},
      {key: 'diameter', label: 'Diameter', value: '396 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '0.94 Earth days'},
    ],
  },
  {
    name: 'Rhea',
    bodyType: 'moon',
    mass: {value: 0.00039, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Saturn'},
      {key: 'diameter', label: 'Diameter', value: '1,528 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '4.52 Earth days'},
    ],
  },
  {
    name: 'Dione',
    bodyType: 'moon',
    mass: {value: 0.000018, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Saturn'},
      {key: 'diameter', label: 'Diameter', value: '1,123 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '2.74 Earth days'},
    ],
  },
  {
    name: 'Tethys',
    bodyType: 'moon',
    mass: {value: 0.000012, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Saturn'},
      {key: 'diameter', label: 'Diameter', value: '1,066 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '1.89 Earth days'},
    ],
  },
  {
    name: 'Iapetus',
    bodyType: 'moon',
    mass: {value: 0.000032, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Saturn'},
      {key: 'diameter', label: 'Diameter', value: '1,469 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '79.3 Earth days'},
    ],
  },

  // Uranus moons (major)
  {
    name: 'Miranda',
    bodyType: 'moon',
    mass: {value: 0.0000012, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Uranus'},
      {key: 'diameter', label: 'Diameter', value: '471 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '1.41 Earth days'},
    ],
  },
  {
    name: 'Ariel',
    bodyType: 'moon',
    mass: {value: 0.0000023, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Uranus'},
      {key: 'diameter', label: 'Diameter', value: '1,158 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '2.52 Earth days'},
    ],
  },
  {
    name: 'Umbriel',
    bodyType: 'moon',
    mass: {value: 0.0000023, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Uranus'},
      {key: 'diameter', label: 'Diameter', value: '1,169 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '4.14 Earth days'},
    ],
  },
  {
    name: 'Titania',
    bodyType: 'moon',
    mass: {value: 0.0000069, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Uranus'},
      {key: 'diameter', label: 'Diameter', value: '1,578 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '8.71 Earth days'},
    ],
  },
  {
    name: 'Oberon',
    bodyType: 'moon',
    mass: {value: 0.0000069, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Uranus'},
      {key: 'diameter', label: 'Diameter', value: '1,523 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '13.5 Earth days'},
    ],
  },

  // Neptune moons (major)
  {
    name: 'Triton',
    bodyType: 'moon',
    mass: {value: 0.00359, unit: 'earthMass'},
    facts: [
      {key: 'parent', label: 'Orbits', value: 'Neptune'},
      {key: 'diameter', label: 'Diameter', value: '2,706 km'},
      {key: 'orbital-period', label: 'Orbital period', value: '5.88 Earth days (retrograde)'},
    ],
  },
]

function toDocument(body: BodySeed) {
  return {
    _type: 'celestialBody',
    name: body.name,
    bodyType: body.bodyType,
    mass: {
      _type: 'mass',
      value: body.mass.value,
      unit: body.mass.unit,
    },
    facts: body.facts.map((fact) => ({
      _type: 'fact',
      _key: fact.key,
      label: fact.label,
      value: fact.value,
    })),
    images: [],
  }
}

async function seedCelestialBodies() {
  const client = getCliClient()

  const transaction = client.transaction()

  for (const body of bodies) {
    transaction.create(toDocument(body))
  }

  const result = await transaction.commit()
  console.log(`Created ${result.documentIds.length} celestial body documents`)
}

seedCelestialBodies().catch((error) => {
  console.error(error)
  process.exit(1)
})
