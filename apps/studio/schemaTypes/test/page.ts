import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons/Document'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({type: 'textSection'}),
        defineArrayMember({type: 'ctaSection'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'hero.image',
    },
  },
})
