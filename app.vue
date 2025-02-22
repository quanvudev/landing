<script setup lang="ts">
const config = useAppConfig()
config.ui.primary = 'brand'
</script>

<template>
  <NuxtLoadingIndicator />

  <NuxtLayout name="default">
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <p>An error occurred: {{ error }}</p>
      </template>
    </NuxtErrorBoundary>
  </NuxtLayout>
  <UNotifications
    :ui="{
      position: 'top-0 right-0 bottom-[unset]',
    }"
  />
</template>

<style>
body,
body * {
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-family: "Open Sans", serif;
  font-optical-sizing: auto;
  --header-height: 4rem;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
