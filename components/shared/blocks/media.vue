<script lang="ts" setup>
import type { Block } from '~/types/about-us'

defineProps<{
  source: Block
}>()
</script>

<template>
  <div class="h-80 overflow-hidden object-contain rounded-xl shadow-md">
    <NuxtImg :src="source.file?.url" :alt="source.file?.alternativeText" />
  </div>
</template>
