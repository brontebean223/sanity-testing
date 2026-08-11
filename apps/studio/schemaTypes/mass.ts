import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mass',
  title: 'Mass',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: [
          {title: 'Solar masses (M☉)', value: 'solarMass'},
          {title: 'Earth masses (M⊕)', value: 'earthMass'},
        ],
        layout: 'radio',
      },
      initialValue: 'solarMass',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      value: 'value',
      unit: 'unit',
    },
    prepare({value, unit}) {
      const unitLabel = unit === 'earthMass' ? 'M⊕' : 'M☉'
      return {
        title: `${value} ${unitLabel}`,
      }
    },
  },
})
