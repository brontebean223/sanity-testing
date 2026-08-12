import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons/Image'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'image',
      title: 'Hero image',
      type: 'cloudinary.asset',
      description: 'Pick from Cloudinary. Add alt text in the Cloudinary media library.',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      imageUrl: 'image.secure_url',
    },
    prepare({title, imageUrl}) {
      return {
        title: title || 'Hero',
        subtitle: 'Hero',
        media: imageUrl ? {url: imageUrl} : undefined,
      }
    },
  },
})
