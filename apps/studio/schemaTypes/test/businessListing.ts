import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export default defineType({
  name: 'businessListing',
  title: 'Business listing',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Business name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sites',
      title: 'Show on hotels',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'site'}]}],
      description:
        'Pick one or both hotels. The same listing appears on each selected hotel site without duplicating content.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({name: 'street', title: 'Street', type: 'string'}),
        defineField({name: 'city', title: 'City', type: 'string'}),
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      city: 'address.city',
      description: 'description',
      sites: 'sites',
    },
    prepare({title, city, description, sites}) {
      const hotels =
        Array.isArray(sites) && sites.length > 0 ? `${sites.length} hotel(s)` : 'All hotels'
      const excerpt = description ? description.slice(0, 50) + (description.length > 50 ? '…' : '') : ''
      return {
        title,
        subtitle: [hotels, city, excerpt].filter(Boolean).join(' · '),
      }
    },
  },
})
