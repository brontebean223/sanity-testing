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
      name: 'site',
      title: 'Site',
      type: 'reference',
      to: [{type: 'site'}],
      // Set automatically when creating a page from a hotel's Pages list — hidden from editors.
      hidden: () => true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        // Slugs only need to be unique per hotel — both sites can have a "home" page.
        isUnique: async (slug, context) => {
          if (!slug) return true

          const {document, getClient} = context
          const siteRef = document?.site?._ref
          if (!siteRef) return true

          const client = getClient({apiVersion: '2024-01-01'})
          const id = document?._id?.replace(/^drafts\./, '')
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
            siteId: siteRef,
          }

          const query = `!defined(*[
            _type == "page" &&
            site._ref == $siteId &&
            slug.current == $slug &&
            !(_id in [$draft, $published])
          ][0]._id)`

          return client.fetch<boolean>(query, params)
        },
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
        defineArrayMember({type: 'featuresSection'}),
        defineArrayMember({type: 'ctaSection'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      media: 'hero.image',
    },
    prepare({title, slug}) {
      const path = slug === 'home' ? 'Homepage' : slug ? `/${slug}` : 'Page'
      return {
        title,
        subtitle: path,
      }
    },
  },
})
