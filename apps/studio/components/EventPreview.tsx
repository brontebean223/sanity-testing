import {Box, Card, Stack, Text} from '@sanity/ui'
import {useFormValue} from 'sanity'

export function EventPreview() {
  const title = useFormValue(['title']) as string | undefined
  const startDate = useFormValue(['startDate']) as string | undefined
  const location = useFormValue(['location']) as string | undefined
  const description = useFormValue(['description']) as string | undefined
  const sites = useFormValue(['sites']) as unknown[] | undefined

  const formattedDate = startDate
    ? new Date(startDate).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null

  const hotelLabel =
    sites && sites.length > 0 ? `Visible on ${sites.length} hotel(s)` : 'Visible on all hotels'

  return (
    <Box padding={4}>
      <Card padding={4} radius={3} shadow={1}>
        <Stack space={4}>
          <Text size={1} muted>
            {hotelLabel} · Shared content section on homepage
          </Text>
          <Stack space={3}>
            <Text size={4} weight="semibold">
              {title || 'Untitled event'}
            </Text>
            {(formattedDate || location) && (
              <Text size={2} muted>
                {[formattedDate, location].filter(Boolean).join(' · ')}
              </Text>
            )}
            {description && <Text size={2}>{description}</Text>}
          </Stack>
        </Stack>
      </Card>
    </Box>
  )
}
