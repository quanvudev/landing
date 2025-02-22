<script lang="ts" setup>
import type { Block } from '~/types/about-us'

defineProps<{
  source: Block
}>()
</script>

<template>
  <Carousel :items="source.files ?? []" auto-play :ui="{ item: 'basis-full' }">
    <template #item="{ item }">
      <div class="h-80 flex items-center justify-center w-full">
        <NuxtImg :src="item.url" :alt="item.alternativeText" class="w-full h-full object-contain" />
      </div>
    </template>
  </Carousel>
</template>
