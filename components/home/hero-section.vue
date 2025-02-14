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
      <NuxtLinkLocale :to="item.path">
        <UButton class="mt-auto" variant="ghost" size="xl" trailing-icon="i-material-symbols:arrow-right-alt-rounded">
          {{ item.pathLabel }}
        </UButton>
      </NuxtLinkLocale>
    </div>
    <!-- <div class="flex flex-1 flex-col gap-4 md:gap-6 lg:gap-8 rounded-xl shadow-md hover:shadow-2xl p-8 border transition-all">
      <h3>Digital Creative Studio</h3>
      <h2 class="text-2xl font-bold">
        Talent
        <br>
        Platform
      </h2>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat itaque aspernatur quis modi quod, excepturi nostrum dolorum non ab repudiandae dolores voluptatum vero mollitia incidunt culpa odit natus rem?</h4>
      <UButton variant="ghost" size="xl" trailing-icon="i-material-symbols:arrow-right-alt-rounded">
        Learn More
      </UButton>
    </div> -->
  </div>
</template>
