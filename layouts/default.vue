<script lang="ts" setup>
import type { StrapiGlobal } from '~/types/global'
import type { Navbar } from '~/types/navbar'

const { $strapi } = useNuxtApp()

const {
  locale,
  localePath,
} = useNavigation()
const { data } = await useAsyncData('Global', () => $strapi.findOne<StrapiGlobal>('global', {
  populate: ['logoLight', 'logoDark', 'favicon', 'columns.children.icon', 'defaultSeo'],
  locale: locale.value,
}).then(r => r.data), {
  watch: [locale],
})
const { data: dataLinks } = await useAsyncData('Navbars', () => $strapi.find<Navbar>('navbars', {
  locale: locale.value,
}).then(r => r.data), {
  watch: [locale],
})

const links = computed(() => {
  return (dataLinks.value ?? []).map(x => ({
    label: x.title,
    to: localePath(x.url),
  }))
})

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
        light: getStrapiURL(data?.logoLight?.url),
        dark: getStrapiURL(data?.logoDark?.url),
      }" :links="links"
    />
    <slot />
    <UDivider />
    <LayoutFooter :content="data?.footer" :cols="data?.columns" :all-rights-reserved="data?.allRightsReserved" />
  </div>
</template>
