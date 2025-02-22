<script lang="ts" setup>
import type { AboutUs } from '~/types/about-us'
import { SharedBlocksMedia, SharedBlocksMultipleBlocks, SharedBlocksMultipleCounter, SharedBlocksQuote, SharedGrid, SharedSlider } from '#components'

const { $strapi } = useNuxtApp()

// Fetch the about us page
const {
  locale,
} = useNavigation()
const { data } = await useAsyncData('About US', () => $strapi.findOne<AboutUs>('about', {
  populate:
  {
    blocks: {
      on: {
        'shared.media': {
          populate: '*',
        },
        'shared.quote': {
          populate: '*',
        },
        'shared.multiple-blocks': {
          populate: '*',
        },
        'shared.multiple-counter': {
          populate: '*',
        },
        'shared.slider': {
          populate: '*',
        },
        'shared.grid': {
          populate: '*',
        },
      },
    },
  },
  locale: locale.value,
}).then(res => res.data), {
  watch: [locale],
})
const componentMap = {
  'shared.media': SharedBlocksMedia,
  'shared.quote': SharedBlocksQuote,
  'shared.multiple-blocks': SharedBlocksMultipleBlocks,
  'shared.multiple-counter': SharedBlocksMultipleCounter,
  'shared.slider': SharedSlider,
  'shared.grid': SharedGrid,
}
</script>

<template>
  <div class="container mx-auto px-4 flex flex-col py-8 md:py-16 gap-8 md:gap-16">
    <h1 class="text-4xl font-bold">
      {{ data?.title }}
    </h1>
    <component :is="componentMap[block.__component]" v-for="block of data?.blocks ?? []" :key="block.id"
      :source="block" />
  </div>
</template>
