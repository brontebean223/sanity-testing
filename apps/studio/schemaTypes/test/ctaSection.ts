import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons/Link'

export default defineType({
  name: 'ctaSection',
  title: 'Call to action',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Button label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Supporting text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'text',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Call to action',
        subtitle: subtitle ? `CTA · ${subtitle}` : 'Call to action',
      }
    },
  },
})
