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
    },
    prepare({title, city}) {
      return {
        title,
        subtitle: city ? `Business · ${city}` : 'Business listing',
      }
    },
  },
})
