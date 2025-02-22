<script setup lang="ts">
import type { Modal } from '#ui/types/modal'

const props = withDefaults(defineProps<Modal>(), {
  overlay: true,
  transition: true,
})
const isOpen = ref(false)
function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <slot name="trigger" :toggle="toggle" :is-open="isOpen" />
    <UModal v-bind="props" v-model="isOpen">
      <UCard>
        <slot :toggle="toggle" :is-open="isOpen" />
      </UCard>
    </UModal>
  </div>
</template>
