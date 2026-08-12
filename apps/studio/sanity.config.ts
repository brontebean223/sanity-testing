import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'
import {pageBySite} from './templates/page-by-site'

export default defineConfig({
  name: 'default',
  title: 'Harbor Hotels',

  projectId: 'rhhpqw8l',
  dataset: 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    cloudinarySchemaPlugin(),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => [...prev, pageBySite],
  },

  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      // Pages must be created from a hotel's Pages list (site is set via template).
      if (creationContext.type === 'global') {
        return prev.filter((option) => option.templateId !== 'page')
      }
      return prev
    },
  },
})
