<script lang="ts" setup>
import type { Block } from '~/types/about-us'

defineProps<{
  source: Pick<Block, 'title' | 'body'>
}>()
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4" v-html="source.title" />
    <p class="text-lg" v-html="source.body" />
  </div>
</template>
