<script lang="ts" setup>
const items = Array.from({ length: 10 }, (_, i) => i + 1)
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
        {{ $t("index.section.our_projects") }}
      </div>
      <div class="flex gap-8 items-center">
        <span class="text-8xl">
          <AnimationNumber :max="100" />
        </span>
        <div class="flex flex-col text-5xl">
          <span>
            ++
          </span>
          <span>
            {{ $t("index.section.client") }}
          </span>
        </div>
      </div>
      <div class="flex gap-8 items-center">
        <span class="text-8xl">
          <AnimationNumber :max="100" />
        </span>
        <div class="flex flex-col text-5xl">
          <span>
            ++
          </span>
          <span>
            {{ $t("index.section.project") }}
          </span>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-4 md:gap-8 flex-wrap">
        <UButton variant="soft" size="xl" class="flex items-center justify-center" trailing-icon="i-material-symbols:arrow-right-alt-rounded">
          {{ $t("index.section.view_our_project") }}
        </UButton>
        <UButton variant="soft" size="xl" class="flex items-center justify-center" trailing-icon="i-material-symbols:arrow-right-alt-rounded">
          {{ $t("index.section.view_our_client") }}
        </UButton>
      </div>
    </div>
    <div class="flex flex-1 overflow-hidden">
      <UCarousel
        ref="carouselRef" v-slot="{ item }" class="w-full" :items="items" :ui="{
          item: 'basis-full',
        }" indicators
      >
        <div class="flex flex-col gap-4 transition-all">
          <NuxtImg src="https://placehold.co/300x200.png" alt="Project 1" class="w-full object-cover" />
          <div class="text-xl font-bold px-4">
            Project {{ item }}
          </div>
          <div class="px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat itaque aspernatur quis
            modi
            quod, excepturi
            nostrum dolorum non ab repudiandae dolores voluptatum vero mollitia incidunt culpa odit natus
            rem?
          </div>
          <UButton variant="ghost" size="xl" trailing-icon="i-material-symbols:arrow-right-alt-rounded">
            {{ $t("index.section.detail_project") }}
          </UButton>
          <div class="h-4" />
        </div>
      </UCarousel>
    </div>
  </div>
</template>
