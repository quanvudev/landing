<script setup lang="ts">
import type { Block } from '~/types/about-us'

defineProps<{
  source: Block
}>()
</script>

<template>
  <!-- {
  "__component": "shared.multiple-blocks",
  "id": 1,
  "title": null,
  "children": [
    {
      "id": 1,
      "tag": "Our Mission",
      "title": "Transform your dream product into reality",
      "desc": "Our woodland, backed by talented and ambitious workforce with years of experience, is the top-of-mind place for founders looking to scale up their engineering capabilities."
    },
    {
      "id": 2,
      "tag": "Our vision",
      "title": "Build a trustworthy network between talents and founders",
      "desc": "Over the years, we have worked tirelessly to build a broad network of trust between talented people and founders, with trust at the heart of our values. We connect founders with skilled developers around the world."
    }
  ]
} -->
  <div class="flex flex-col">
    <h2 v-if="source.title" class="text-2xl font-bold mb-4" v-html="source.title" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="child in source.children" :key="child.id" class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 class="text-md text-primary mb-2 font-semibold">
          {{ child.tag }}
        </h2>
        <h3 class="text-xl font-bold mb-2">
          {{ child.title }}
        </h3>
        <p class="text-md text-gray-700">
          {{ child.desc }}
        </p>
      </div>
    </div>
  </div>
</template>
