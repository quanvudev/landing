export interface StrapiHomePage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  siteTitle: string
  intro: Intro
  heroHighlight: HeroHighlight
  localizations: Localization[]
  highlightSections: Section[]
}

export interface Localization {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  siteTitle: string
}

export interface HeroHighlight {
  id: number
  title: string
  description: Description[]
  thumbnail: Media
}

export interface Description {
  type: string
  children: Child[]
}

export interface Child {
  text: string
  type: string
  bold?: boolean
}

export interface Intro {
  id: number
  documentId: string
  name: string
  alternativeText?: any
  caption?: any
  width?: any
  height?: any
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

export interface Media {
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
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
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
}

export interface Section {
  id: number
  title: string
  description: string
  caption: string
  path: string
  pathLabel: string
}
