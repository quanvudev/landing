export interface ProjectPage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  title: string
  subTitle: any
  localizations: Localization[]
}

export interface Localization {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  title: string
  subTitle: any
}

export interface ProjectCategory {
  id: number
  documentId: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  icon: Icon
}

export interface Icon {
  id: number
  documentId: string
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: any
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

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}
