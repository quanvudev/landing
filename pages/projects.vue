<script lang="ts" setup>
import type { Project } from '~/types/project'
import type { ProjectCategory, ProjectPage } from '~/types/projects'

const { $strapi } = useNuxtApp()

const { locale } = useNavigation()

const listCategorySelected = ref<ProjectCategory[]>([])

const { data: page } = await useAsyncData('project-page', async () => {
  return await $strapi.findOne<ProjectPage>('project-page', {
    locale: locale.value,
    populate: '*',
  }).then(res => res.data)
}, {
  watch: [locale],
})
const { data: categories } = await useAsyncData('categories', async () => {
  return await $strapi.find<ProjectCategory>('project-categories', {
    locale: locale.value,
    populate: ['icon'],
  }).then(res => res.data)
}, {
  watch: [locale],
})

const { data: projects, refresh, status } = await useAsyncData('projects', async () => {
  return await $strapi.find<Project>('projects', {
    locale: locale.value,
    populate: '*',
    pagination: {
      page: 1,
      pageSize: 200,
    },
    filters: {
      projectCategories: {
        $in: listCategorySelected.value.map(item => item.id),
      },
    },
  }).then(res => res.data)
}, {
  watch: [locale, listCategorySelected],
})

function toggleCategory(category: ProjectCategory) {
  if (listCategorySelected.value.includes(category)) {
    listCategorySelected.value = listCategorySelected.value.filter(item => item.id !== category.id)
  }
  else {
    listCategorySelected.value.push(category)
  }
  refresh()
}

const isLoading = computed(() => status.value === 'pending')
</script>

<template>
  <div class="container mx-auto px-4 flex flex-col py-8 md:py-16 gap-8 md:gap-16">
    <h1 class="text-3xl font-bold mb-4">
      {{ page?.title }}
    </h1>
    <p class="text-lg text-gray-600 mb-8">
      {{ page?.subTitle }}
    </p>
    <div class="flex overflow-x-auto gap-4">
      <UButton :loading="isLoading" variant="ghost" />
      <UButton :variant="listCategorySelected.length > 0 ? 'ghost' : 'outline'" @click.stop="listCategorySelected = []">
        All
      </UButton>
      <UButton
        v-for="category of categories" :key="category.id"
        :variant="listCategorySelected.length <= 0 || listCategorySelected.find(x => x.id === category.id) ? 'outline' : 'ghost'"
        :ui="{
          rounded: 'rounded-full',
        }" @click="toggleCategory(category)"
      >
        <UAvatar :src="category.icon?.url" :alt="category.icon?.alternativeText" size="xs" />
        <span>
          {{ category.name }}
        </span>
      </UButton>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <ProjectItem v-for="project of projects" :key="project.id" :source="project" />
    </div>
  </div>
</template>
