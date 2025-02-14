<script lang="ts" setup>
defineProps<{
  logo: {
    light?: string
    dark?: string
  }
}>()
const {
  links,
  availableLocales,
  locale,
} = useNavigation()
const currentLocale = computed(() => {
  return availableLocales.value.find(x => x.code === locale.value)
})
</script>

<template>
  <header
    class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200/75 dark:border-gray-900/50 shadow-lg bg-white/70 dark:bg-gray-900/70"
  >
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
      <NuxtLinkLocale to="/" class="flex items-center">
        <NuxtImg :src="logo.light" alt="Logo" class="dark:hidden h-5" />
        <NuxtImg :src="logo.dark" alt="Logo" class="hidden dark:block h-5" />
      </NuxtLinkLocale>

      <LayoutDrawer />
      <div class="ml-auto hidden md:flex">
        <UHorizontalNavigation :links="links" />
        <div class="flex h-fit my-auto min-w-fit">
          <ClientOnly>
            <LayoutColorMode />
          </ClientOnly>
          <UDropdown :items="[availableLocales]" :popper="{ arrow: true }">
            <UButton variant="ghost" size="sm">
              {{ currentLocale?.label }}
            </UButton>
          </UDropdown>
        </div>
      </div>
    </nav>
  </header>
</template>
