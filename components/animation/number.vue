<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, reactive, ref } from 'vue'

const props = defineProps<{
  max: number
  start?: number
}>()

const state = reactive({
  num: props.start,
})

const elementRef = ref<HTMLElement | null>(null)

function startAnimation() {
  gsap.to(state, {
    num: props.max,
    duration: 3,
    ease: 'power4.out',
    stagger: 1,
    onUpdate: () => {
      state.num = Math.round(state.num ?? 0)
    },
  })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startAnimation()
      observer.disconnect()
    }
  })

  if (elementRef.value) {
    observer.observe(elementRef.value)
  }
})
</script>

<template>
  <span ref="elementRef">{{ state.num }}</span>
</template>
