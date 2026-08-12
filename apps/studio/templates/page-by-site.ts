import type {Template} from 'sanity'

export const pageBySite: Template = {
  id: 'page-by-site',
  title: 'Page',
  schemaType: 'page',
  parameters: [
    {name: 'siteId', type: 'string'},
    {name: 'siteTitle', type: 'string'},
  ],
  value: ({siteId}: {siteId: string}) => ({
    site: {_type: 'reference', _ref: siteId},
  }),
}
