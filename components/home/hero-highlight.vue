<script lang="ts" setup>
import type { HeroHighlight } from '~/types/home'

defineProps<{
  source?: HeroHighlight
}>()

function convertToHtml(content: any): string {
  if (!Array.isArray(content))
    return ''

  return content.map((block: any) => {
    if (block.type === 'paragraph') {
      const childrenHtml = block.children.map((child: any) => {
        if (child.type === 'text') {
          let text = child.text
          if (child.bold) {
            text = `<strong>${text}</strong>`
          }
          return text
        }
        return ''
      }).join('')
      return `<p>${childrenHtml}</p>`
    }
    return ''
  }).join('')
}
</script>

<template>
  <div class="container mx-auto p-4 md:p-6 lg:p-10">
    <div class="flex flex-col flex-1 gap-4">
      <h2 class="text-2xl font-bold">
        {{ source?.title }}
      </h2>
      <div class="flex flex-1 flex-col sm:flex-row gap-4">
        <div class="flex flex-1 z-10 p-4">
          <div v-html="convertToHtml(source?.description)" />
        </div>
        <div class="flex flex-1 z-10">
          <NuxtImg :src="getStrapiURL(source?.thumbnail.url)" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
