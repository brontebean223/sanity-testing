import {defineArrayMember, defineField, defineType} from 'sanity'
import {StackIcon} from '@sanity/icons/Stack'

export default defineType({
  name: 'featuresSection',
  title: 'Features section',
  type: 'object',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      count: 'items.length',
    },
    prepare({title, count}) {
      return {
        title: title || 'Features section',
        subtitle: count ? `Features · ${count} items` : 'Features section',
      }
    },
  },
})
