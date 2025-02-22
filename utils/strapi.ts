export function getStrapiURL(path = '') {
  if (path.includes('http')) {
    return path
  }
  const rc = useRuntimeConfig()
  return `${rc.public.strapi.url}${path}`
}
