import {CalendarIcon} from '@sanity/icons/Calendar'
import {CaseIcon} from '@sanity/icons/Case'
import {DocumentIcon} from '@sanity/icons/Document'
import type {StructureResolver} from 'sanity/structure'

type SiteListItem = {
  _id: string
  title: string
}

export const structure: StructureResolver = async (S, context) => {
  const client = context.getClient({apiVersion: '2024-01-01'})
  const sites = await client.fetch<SiteListItem[]>(
    `*[_type == "site"] | order(title asc) {_id, title}`,
  )

  const hotelItems = sites.map((site) =>
    S.listItem()
      .id(`site-${site._id}`)
      .title(site.title)
      .icon(DocumentIcon)
      .child(
        S.list()
          .title(site.title)
          .items([
            S.listItem()
              .title('Pages')
              .icon(DocumentIcon)
              .child(
                S.documentList()
                  .title(`${site.title} — Pages`)
                  .schemaType('page')
                  .filter('_type == "page" && site._ref == $siteId')
                  .params({siteId: site._id})
                  .initialValueTemplates([
                    S.initialValueTemplateItem('page-by-site', {
                      siteId: site._id,
                      siteTitle: site.title,
                    }),
                  ]),
              ),
          ]),
      ),
  )

  return S.list()
    .title('Hotels')
    .items([
      ...hotelItems,
      S.divider(),
      S.listItem()
        .id('shared-content')
        .title('Shared content')
        .child(
          S.list()
            .title('Shared content')
            .items([
              S.listItem()
                .title('Events')
                .icon(CalendarIcon)
                .child(
                  S.documentList()
                    .title('Events')
                    .schemaType('event')
                    .filter('_type == "event"'),
                ),
              S.listItem()
                .title('Business listings')
                .icon(CaseIcon)
                .child(
                  S.documentList()
                    .title('Business listings')
                    .schemaType('businessListing')
                    .filter('_type == "businessListing"'),
                ),
            ]),
        ),
      S.divider(),
    ])
}
