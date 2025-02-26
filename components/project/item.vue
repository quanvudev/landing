<script lang="ts" setup>
import type { Modal } from '#components'
import type { Project } from '~/types/project'

const props = defineProps<{
  source: Project
}>()
const modalRef = ref<InstanceType<typeof Modal> | null>()
const route = useRoute()

onMounted(() => {
  if (route.query.slug === props.source.slug) {
    modalRef.value?.toggle()
  }
})
</script>

<template>
  <Modal
    ref="modalRef"
    overlay transition :ui="{
      width: 'sm:max-w-screen-xl',
    }"
  >
    <template #trigger="{ toggle }">
      <UCard
        :ui="{
          header: {
            padding: '!p-0',
          },
          body: {
            base: 'flex mt-auto max-h-96',
          },
          base: 'flex flex-col overflow-hidden hover:shadow-lg cursor-pointer',
        }" @click="toggle"
      >
        <template #header>
          <Carousel
            :items="source.preview" :ui="{
              item: 'basis-full',
            }" indicator
          >
            <template #item="{ item }">
              <NuxtImg :src="item.url" :alt="item.alternativeText" class="object-contain w-full max-h-60" />
            </template>
          </Carousel>
        </template>
        <div class="prose dark:text-white h-40 text-ellipsis overflow-hidden" v-html="source.shortDesc" />
      </UCard>
    </template>
    <template #default="{ toggle: closeModal }">
      <div class="flex flex-col">
        <div class="flex justify-between">
          <h2 class="text-2xl font-bold">
            {{ source.title }}
          </h2>
          <UButton variant="ghost" icon="i-fa6-solid:xmark" @click.stop="closeModal" />
        </div>
        <UDivider class="my-8" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="item of source.preview" :key="item.id">
            <Modal>
              <template #trigger="{ toggle }">
                <NuxtImg
                  :src="item.url" :alt="item.alternativeText" class="object-cover w-full h-80"
                  @click.stop="toggle"
                />
              </template>
              <NuxtImg :src="item.url" :alt="item.alternativeText" class="object-cover w-full h-full" />
            </Modal>
          </div>
        </div>
        <UDivider class="my-8" />
        <div class="w-full">
          <div class="prose dark:text-white" v-html="source.desc" />
        </div>
      </div>
    </template>
  </Modal>
</template>
