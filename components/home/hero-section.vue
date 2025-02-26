<script lang="ts" setup>
import type { Section } from '~/types/home'

const props = defineProps<{
  source: Section[]
}>()
const items = computed(() => props.source.map(x => ({
  ...x,
  title: x.title.replaceAll('\\n', '<br>'),
})))
</script>

<template>
  <div class="flex container mx-auto flex-col md:flex-row gap-4 lg:gap-8 md:gap-6 my-8 px-4">
    <div
      v-for="item of items" :key="item.id"
      class="flex flex-1 flex-col gap-4 md:gap-6 lg:gap-8 rounded-xl shadow-md hover:shadow-2xl p-8 border transition-all"
    >
      <h3>{{ item.caption }}</h3>
      <h2 class="text-2xl font-bold whitespace-pre-line" v-html="item.title" />
      <h4 v-html="item.description" />
      <NuxtLinkLocale :to="item.path" class="mt-auto">
        <UButton class="mt-auto" variant="ghost" size="xl" trailing-icon="i-material-symbols:arrow-right-alt-rounded">
          {{ item.pathLabel }}
        </UButton>
      </NuxtLinkLocale>
    </div>
  </div>
</template>
