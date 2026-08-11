import {defineArrayMember, defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons/Component'

export default defineType({
  name: 'celestialBody',
  title: 'Celestial Body',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bodyType',
      title: 'Body type',
      type: 'string',
      options: {
        list: [
          {title: 'Star', value: 'star'},
          {title: 'Planet', value: 'planet'},
          {title: 'Dwarf planet', value: 'dwarfPlanet'},
          {title: 'Moon', value: 'moon'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mass',
      title: 'Mass',
      type: 'mass',
      description: 'Mass in solar or Earth masses — suitable for celestial scale, not kilograms',
    }),
    defineField({
      name: 'facts',
      title: 'Facts',
      type: 'array',
      of: [defineArrayMember({type: 'fact'})],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Describe the image for accessibility',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      bodyType: 'bodyType',
      media: 'images.0',
    },
    prepare({title, bodyType, media}) {
      const bodyTypeLabels: Record<string, string> = {
        star: 'Star',
        planet: 'Planet',
        dwarfPlanet: 'Dwarf planet',
        moon: 'Moon',
        other: 'Other',
      }

      return {
        title,
        subtitle: bodyType ? bodyTypeLabels[bodyType] : undefined,
        media,
      }
    },
  },
})
