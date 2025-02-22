<script setup lang="ts">
import type { Column } from '~/types/global'

defineProps<{
  content?: string
  cols?: Column[]
  allRightsReserved?: string
}>()
</script>

<template>
  <footer>
    <div class="container mx-auto py-8 px-4">
      <div class="flex gap-4 md:gap-6 lg:gap-8 flex-col">
        <div class="flex flex-1 gap-4 justify-center items-center flex-col p-8">
          <div>
            <div class="prose" v-html="content" />
          </div>
        </div>
        <div class="flex flex-1 gap-4 justify-around flex-wrap">
          <div v-for="col in cols" :key="col.id" class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold">
              {{ col.title }}
            </h4>
            <NuxtLinkLocale v-for="c of col.children" :key="c.id" :to="`/${c.url}`.replaceAll('//', '/')">
              <template v-if="c.icon">
                <UButton variant="ghost">
                  <UAvatar size="sm" :src="c.icon.url" /> <span>{{ c.title }}</span>
                </UButton>
              </template>
              <template v-else>
                {{ c.title }}
              </template>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
    <UDivider />
    <p class="italic mx-auto text-center py-4 text-gray-500 dark:text-gray-400 text-xs">
      {{ allRightsReserved }}
    </p>
  </footer>
</template>

<style lang="css" scoped>
:deep(.prose figure>img) {
  margin: auto;
}
</style>
