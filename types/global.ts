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
