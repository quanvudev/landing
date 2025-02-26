/* eslint-disable node/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/seo', '@nuxt/content', '@nuxtjs/strapi'],
  app: {
    head: {
      meta: [{ charset: 'utf-8' }, { name: 'msapplication-TileColor', content: '#ffffff' }, { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }, { name: 'theme-color', content: '#ffffff' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap', rel: 'stylesheet' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.json' },
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
