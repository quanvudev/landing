<script lang="ts" setup>
import type { Counter } from '~/types/home'
import type { Project } from '~/types/project'

defineProps<{
  label?: string
  counter?: Counter[]
  projects?: Project[]
}>()
const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 lg:gap-8 md:gap-6 my-8 px-4 container mx-auto">
    <div class="flex flex-1 flex-col gap-8 lg:gap-12">
      <div class="text-2xl font-bold">
        {{ label }}
      </div>
      <div v-for="c of (counter ?? [])" :key="c.id" class="flex gap-8 items-center">
        <span class="text-8xl">
          <AnimationNumber :max="c.value" />
        </span>
        <div class="flex flex-col text-5xl">
          <span>
            {{ c.symbol }}
          </span>
          <span>
            {{ c.label }}
          </span>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-4 md:gap-8 flex-wrap">
        <UButton v-for="c of (counter ?? [])" :key="c.id" variant="soft" size="xl" class="flex items-center justify-center" trailing-icon="i-material-symbols:arrow-right-alt-rounded" :to="c.url">
          {{ c.labelUrl }}
        </UButton>
      </div>
    </div>
    <div class="flex flex-1 overflow-hidden">
      <UCarousel
        ref="carouselRef" v-slot="{ item }" class="w-full" :items="projects" :ui="{
          item: 'basis-full',
        }" indicators
      >
        <div class="flex flex-col gap-4 transition-all">
          <NuxtImg :src="item.preview[0].url" alt="Project 1" class="w-full object-cover max-h-80" />
          <div class="text-xl font-bold px-4">
            {{ item.title }}
          </div>
          <div class="px-4">
            <div class="all-initial prose" v-html="item.shortDesc" />
          </div>
          <UButton class="mt-auto" :to="$localePath(`/project/${item.slug}`)" variant="ghost" size="xl" trailing-icon="i-material-symbols:arrow-right-alt-rounded">
            {{ $t("index.section.detail_project") }}
          </UButton>
          <div class="h-4" />
        </div>
      </UCarousel>
    </div>
  </div>
</template>
