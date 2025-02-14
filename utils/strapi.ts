export function getStrapiURL(path = '') {
  const rc = useRuntimeConfig()

  return `${rc.public.strapi.url}${path}`
}
