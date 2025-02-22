export interface ProjectAsList {
  data: Project[]
  meta: Meta
}

export interface Project {
  id: number
  documentId: string
  slug: string
  title: string
  desc: string
  shortDesc: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  preview: Preview[]
  localizations: Localization[]
}

export interface Preview {
  id: number
  documentId: string
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: ProviderMetadata5
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Formats {
  large: Large
  small: Small
  medium: Medium
  thumbnail: Thumbnail
}

export interface Large {
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

export interface Small {
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
  provider_metadata: ProviderMetadata2
}

export interface ProviderMetadata2 {
  public_id: string
  resource_type: string
}

export interface Medium {
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
  provider_metadata: ProviderMetadata3
}

export interface ProviderMetadata3 {
  public_id: string
  resource_type: string
}

export interface Thumbnail {
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
  provider_metadata: ProviderMetadata4
}

export interface ProviderMetadata4 {
  public_id: string
  resource_type: string
}

export interface ProviderMetadata5 {
  public_id: string
  resource_type: string
}

export interface Localization {
  id: number
  documentId: string
  slug: string
  title: string
  desc: string
  shortDesc: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
