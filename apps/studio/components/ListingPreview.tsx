import {Box, Card, Stack, Text} from '@sanity/ui'
import {useFormValue} from 'sanity'

export function ListingPreview() {
  const name = useFormValue(['name']) as string | undefined
  const description = useFormValue(['description']) as string | undefined
  const street = useFormValue(['address', 'street']) as string | undefined
  const city = useFormValue(['address', 'city']) as string | undefined
  const phone = useFormValue(['phone']) as string | undefined
  const sites = useFormValue(['sites']) as unknown[] | undefined

  const hotelLabel =
    sites && sites.length > 0 ? `Visible on ${sites.length} hotel(s)` : 'Visible on all hotels'

  return (
    <Box padding={4}>
      <Card padding={4} radius={3} shadow={1}>
        <Stack space={4}>
          <Text size={1} muted>
            {hotelLabel} · Local listings section on homepage
          </Text>
          <Stack space={3}>
            <Text size={4} weight="semibold">
              {name || 'Untitled listing'}
            </Text>
            {city && (
              <Text size={2} muted>
                {[street, city].filter(Boolean).join(', ')}
              </Text>
            )}
            {description && <Text size={2}>{description}</Text>}
            {phone && <Text size={2} muted>{phone}</Text>}
          </Stack>
        </Stack>
      </Card>
    </Box>
  )
}
