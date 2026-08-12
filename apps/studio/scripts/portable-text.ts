type PortableTextBlock = {
  _type: 'block'
  _key: string
  style: string
  markDefs: []
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks: []
  }>
}

/** Convert plain text (paragraphs separated by blank lines) to Portable Text blocks. */
export function toPortableText(text: string): PortableTextBlock[] {
  const paragraphs = text.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean)

  return paragraphs.map((paragraph, index) => ({
    _type: 'block',
    _key: `block-${index}`,
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: `span-${index}`,
        text: paragraph,
        marks: [],
      },
    ],
  }))
}
