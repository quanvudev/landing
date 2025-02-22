<script lang="ts" setup>
import type { Thumbnail } from '~/types/contact-us'

const props = withDefaults(defineProps<{
  items: Thumbnail[]
  autoPlay?: boolean
  interval?: number
}>(), {
  autoPlay: false,
  interval: 3000,
})

const carouselRef = ref()

onMounted(() => {
  if (props.autoPlay) {
    setInterval(() => {
      if (!carouselRef.value)
        return

      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0)
      }

      carouselRef.value.next()
    }, 3000)
  }
})
</script>

<template>
  <UCarousel v-slot="{ item }" ref="carouselRef" :items="items" :ui="{ item: 'snap-start' }">
    <slot name="item" :item="item" />
  </UCarousel>
</template>
