<script setup lang="ts">
import type { Block } from '~/types/about-us'

defineProps<{
  source: Block
}>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
    <Modal v-for="f of source.files" :key="f.id">
      <template #trigger="{ toggle }">
        <NuxtImg :src="f.url" :alt="f.alternativeText" class="h-full w-full object-cover cursor-pointer hover:shadow" @click.stop="toggle" />
      </template>
      <NuxtImg :src="f.url" :alt="f.alternativeText" class="w-full h-full object-contain" />
    </Modal>
  </div>
</template>
