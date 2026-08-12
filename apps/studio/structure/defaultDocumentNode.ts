import type {DefaultDocumentNodeResolver} from 'sanity/structure'
import {EventPreview} from '../components/EventPreview'
import {ListingPreview} from '../components/ListingPreview'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'event') {
    return S.document().views([
      S.view.form().title('Editor'),
      S.view.component(EventPreview).title('Preview'),
    ])
  }

  if (schemaType === 'businessListing') {
    return S.document().views([
      S.view.form().title('Editor'),
      S.view.component(ListingPreview).title('Preview'),
    ])
  }

  return S.document().views([S.view.form()])
}
