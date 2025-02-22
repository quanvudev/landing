export interface ContactUs {
  id: number
  documentId: string
  limitPerDay: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  title: string
  subTitle: string
  thumbnail: Thumbnail[]
  localizations: ContactUs[]
}

export interface Thumbnail {
  id: number
  documentId: string
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats?: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Formats {
  thumbnail: Thumbnail2
}

export interface Thumbnail2 {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}
