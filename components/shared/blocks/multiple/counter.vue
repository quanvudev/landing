<script lang="ts" setup>
import type { Block } from '~/types/about-us'

defineProps<{
  source: Block
}>()
</script>

<template>
  <div class="flex flex-col">
    <h2 v-if="source.title" class="text-2xl font-bold mb-4" v-html="source.title" />
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div
        v-for="child in source.children" :key="child.id"
        class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div class="flex items-center space-x-2">
          <span class="text-4xl font-bold text-primary">
            <AnimationNumber :max="child.value ?? 0" :duration="5" />
          </span>
          <span class="text-4xl text-primary font-semibold">{{ child.symbol }}</span>
        </div>
        <p class="text-md font-semibold">
          {{ child.label }}
        </p>
      </div>
    </div>
  </div>
</template>
