<script lang="ts" setup>
import type { StrapiGlobal } from '~/types/global'

const { $strapi } = useNuxtApp()

const { data } = await useAsyncData('Global', () => $strapi.findOne<StrapiGlobal>('global', {
  populate: '*',
}).then(r => r.data))

useHead({
  meta: [
    {
      hid: 'title',
      name: 'title',
      content: data.value?.siteTitle,
    },
    {
      hid: 'description',
      name: 'description',
      content: data.value?.siteDescription,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: data.value?.keywords,
    },
  ],
  titleTemplate: `%s | ${data.value?.siteTitle}`,
})
</script>

<template>
  <div class="dark:bg-gray-900/90">
    <LayoutHeader
      :logo="{
        light: getStrapiURL(data?.logoLight.url),
        dark: getStrapiURL(data?.logoDark.url),
      }"
    />
    <slot />
    <UDivider />
    <LayoutFooter />
  </div>
</template>
