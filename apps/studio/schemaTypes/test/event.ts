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
    },
    prepare({title, startDate, location}) {
      const date = startDate ? new Date(startDate).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: [date, location].filter(Boolean).join(' · '),
      }
    },
  },
})
