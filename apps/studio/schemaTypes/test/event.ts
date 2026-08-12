import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons/Calendar'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
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
      name: 'sites',
      title: 'Show on hotels',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'site'}]}],
      description:
        'Pick one or both hotels. The same event appears on each selected hotel site without duplicating content.',
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      startDate: 'startDate',
      location: 'location',
      sites: 'sites',
    },
    prepare({title, startDate, location, sites}) {
      const date = startDate ? new Date(startDate).toLocaleDateString() : 'No date'
      const hotels =
        Array.isArray(sites) && sites.length > 0 ? `${sites.length} hotel(s)` : 'All hotels'
      return {
        title,
        subtitle: [date, hotels, location].filter(Boolean).join(' · '),
      }
    },
  },
})
