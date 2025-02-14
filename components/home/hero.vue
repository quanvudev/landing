<script lang="ts" setup>
import type { Intro } from '~/types/home'

defineProps<{
  source?: Intro
}>()
</script>

<template>
  <div class="w-screen" data-allow-mismatch="true">
    <video :src="getStrapiURL(source?.url)" autoplay muted playsinline webkit-playsinline loop class="h-full" />
  </div>
</template>
