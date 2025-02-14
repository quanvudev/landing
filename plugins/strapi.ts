export default defineNuxtPlugin(() => {
  const strapi = useStrapi()

  return {
    provide: {
      strapi,
    },
  }
})
