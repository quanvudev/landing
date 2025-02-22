/* eslint-disable node/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/seo', '@nuxt/content', '@nuxtjs/strapi'],
  app: {
    head: {
      meta: [{ charset: 'utf-8' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap', rel: 'stylesheet' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  i18n: {
    defaultLocale: 'vi',
    locales: [
      { code: 'vi', name: '🇻🇳 Tiếng Việt', iso: 'vi-VN', file: 'vi-VN.json' },
      { code: 'en', name: '🇺🇸 English', iso: 'en-US', file: 'en-US.json' },
    ],
    lazy: true,
    experimental: {
      localeDetector: 'localeDetector.ts',
    },
  },
  colorMode: {
    preference: 'light',
  },
  appConfig: {
    ui: {
      primary: 'brand',
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#F0F4FF',
              100: '#D7E3FF',
              200: '#AEC6FE',
              300: '#5D8DFD',
              400: '#0D55FD',
              500: '#012169',
              600: '#011A56',
              700: '#01133D',
              800: '#000C28',
              900: '#000614',
              950: '#00030A',
            },
          },
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL,
        apiToken: process.env.STRAPI_API_KEY,
      },
    },
  },
  strapi: {
  },
  nitro: {
    preset: 'bun',
  },
})
