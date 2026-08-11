import {defineArrayMember, defineField, defineType} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons/EarthGlobe'

export default defineType({
  name: 'solarSystem',
  title: 'Solar System',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bodies',
      title: 'Celestial Bodies',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'celestialBody'}]})],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      bodyCount: 'bodies.length',
    },
    prepare({title, bodyCount}) {
      return {
        title,
        subtitle: bodyCount ? `${bodyCount} celestial ${bodyCount === 1 ? 'body' : 'bodies'}` : 'No bodies',
      }
    },
  },
})
