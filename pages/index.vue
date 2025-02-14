<script lang="ts" setup>
import type { StrapiHomePage } from '~/types/home'

const { $strapi } = useNuxtApp()
const { locale } = useI18n()
const { data } = await useAsyncData('', () => {
  return $strapi.findOne<StrapiHomePage>('home-page', {
    populate: ['intro', 'heroHighlight', 'heroHighlight.thumbnail', 'highlightSections'],
    locale: locale.value,
  }).then(res => res.data)
})
useHead({
  title: data.value?.siteTitle,
})
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <HomeHero :source="data?.intro" />
    <HomeHeroHighlight :source="data?.heroHighlight" />
    <HomeHeroSection :source="data?.highlightSections ?? []" />
    <HomeHighlightProjects />
  </main>
</template>
