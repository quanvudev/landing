import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
    },
  }
})
