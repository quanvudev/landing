<script setup lang="ts">
const props = defineProps<{
  links: {
    label: string
    to: string
  }[]
}>()
const open = ref(false)
function toggle() {
  open.value = !open.value
}

const withClickLinks = computed(() => {
  return props.links.map((link) => {
    return {
      ...link,
      click: () => {
        open.value = false
      },
    }
  })
})

const {
  availableLocales,
  locale,
} = useNavigation()

const currentLocale = computed(() => {
  return availableLocales.value.find(x => x.code === locale.value)
})
</script>

<template>
  <div class="md:hidden">
    <UButton variant="soft" icon="i-iconoir:filter-list" size="lg" color="black" @click.stop="toggle" />
    <USlideover v-model="open" side="left">
      <UCard
        class="flex flex-col flex-1"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
      >
        <template #header>
          <div class="h-8">
            <UButton
              color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
              class="flex md:hidden absolute end-5 top-5 z-10" square padded @click="open = false"
            />
          </div>
        </template>
        <UVerticalNavigation :links="withClickLinks" />
        <div class="flex flex-col">
          <UDropdown
            :items="[availableLocales]" :ui="{
              width: 'w-full max-w-sm',
            }"
          >
            <UButton variant="ghost" size="sm" class="w-full">
              {{ currentLocale?.label }}
            </UButton>
          </UDropdown>
          <ClientOnly>
            <LayoutColorMode />
          </ClientOnly>
        </div>
      </UCard>
    </USlideover>
  </div>
</template>
