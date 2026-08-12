/** Cloudinary asset stored by sanity-plugin-cloudinary */
export type CloudinaryAsset = {
  _type: 'cloudinary.asset'
  public_id?: string
  secure_url?: string
  resource_type?: string
  format?: string
  width?: number
  height?: number
  context?: {
    custom?: {
      alt?: string
    }
  }
  derived?: Array<{
    secure_url?: string
    raw_transformation?: string
  }>
}

/** Build a transformed Cloudinary delivery URL from a stored asset. */
export function cloudinaryImageUrl(
  asset: CloudinaryAsset | undefined | null,
  transforms = 'w_1600,h_900,c_fill,f_auto,q_auto',
): string | undefined {
  if (!asset) return undefined

  const derived = asset.derived?.[0]?.secure_url
  if (derived) return derived

  const secureUrl = asset.secure_url
  if (!secureUrl) return undefined

  const uploadMarker = '/upload/'
  const markerIndex = secureUrl.indexOf(uploadMarker)
  if (markerIndex === -1) return secureUrl

  const prefix = secureUrl.slice(0, markerIndex + uploadMarker.length)
  const suffix = secureUrl.slice(markerIndex + uploadMarker.length)
  return `${prefix}${transforms}/${suffix}`
}

export function cloudinaryAlt(
  asset: CloudinaryAsset | undefined | null,
  fallback: string,
): string {
  return asset?.context?.custom?.alt?.trim() || fallback
}
