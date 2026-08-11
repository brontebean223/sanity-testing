import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fact',
  title: 'Fact',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The name of the fact (e.g. Diameter, Orbital period)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'The factual value (e.g. 12,742 km, 365.25 days)',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
      value: 'value',
    },
    prepare({label, value}) {
      return {
        title: label,
        subtitle: value,
      }
    },
  },
})
