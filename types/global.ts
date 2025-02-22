export interface StrapiGlobal {
  id: number
  documentId: string
  siteName: string
  siteTitle: string
  keywords: string
  siteDescription: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  favicon: Favicon
  defaultSeo: DefaultSeo
  logoLight: Favicon
  logoDark: Favicon
  footer: string
  columns: Column[]
  allRightsReserved: string
}

export interface DefaultSeo {
  id: number
  metaTitle: string
  metaDescription: string
}

export interface Favicon {
  id: number
  documentId: string
  name: string
  alternativeText?: any
  caption?: any
  width: number
  height: number
  formats?: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Column {
  id: number
  title: string
  children: Children[]
}

export interface Children {
  id: number
  title: string
  url: string
  icon?: Icon
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
