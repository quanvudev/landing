<script lang="ts" setup>
import type { StrapiHomePage } from '~/types/home'
import type { Project } from '~/types/project'

const { $strapi } = useNuxtApp()
const { locale } = useI18n()
const { data } = await useAsyncData('home-page', () => {
  return $strapi.findOne<StrapiHomePage>('home-page', {
    populate: ['intro', 'heroHighlight', 'heroHighlight.thumbnail', 'highlightSections', 'counter'],
    locale: locale.value,
  }).then(res => res.data)
})
const { data: projects } = useAsyncData('projects', () => {
  return $strapi.find<Project>('projects', {
    locale: locale.value,
    populate: '*',
  }).then(res => res.data)
})
useHead({
  title: data.value?.siteTitle,
})
</script>

<template>
  <main class="w-full h-full flex flex-col overflow-hidden">
    <HomeHero :source="data?.intro" />
    <HomeHeroHighlight :source="data?.heroHighlight" />
    <HomeHeroSection :source="data?.highlightSections ?? []" />
    <HomeHighlightProjects :projects="projects ?? []" :label="data?.achievement" :counter="data?.counter" />
  </main>
</template>
