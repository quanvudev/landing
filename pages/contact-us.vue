<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'
import type { ContactUs } from '~/types/contact-us'
import { z } from 'zod'

const { $strapi } = useNuxtApp()

const { locale } = useNavigation()

const { data } = await useAsyncData('contact-us', async () => {
  return await $strapi.findOne<ContactUs>('contact-us', {
    locale: locale.value,
    populate: '*',
  }).then(res => res.data)
}, {
  watch: [locale],
})
const toast = useToast()

const leaveMessageCount = useCookie<number>('leaveMessageCount')

const schema = z.object({
  name: z.string().nonempty('Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().nonempty('Please enter your message.'),
})

type SchemaForm = z.infer<typeof schema>

const form = reactive<SchemaForm>({
  name: '',
  email: '',
  message: '',
})

async function onSubmit(event: FormSubmitEvent<SchemaForm>) {
  await $strapi.create('contact-messages', event.data)
  leaveMessageCount.value = (leaveMessageCount.value || 0) + 1
  Object.assign(form, {
    name: '',
    email: '',
    message: '',
  })

  toast.add({
    title: 'Message Sent',
    description: 'Thank you for your message. We will get back to you soon.',
    color: 'green',
  })
}

const shouldDisable = computed(() => !!leaveMessageCount.value && leaveMessageCount.value >= (data.value?.limitPerDay ?? 0))
</script>

<template>
  <div class="container mx-auto p-4 py-8 md:py-16">
    <h1 class="text-3xl font-bold mb-4">
      {{ data?.title }}
    </h1>
    <p class="text-lg text-gray-600 mb-8">
      {{ data?.subTitle }}
    </p>
    <UForm
      :schema="schema" :state="form" class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
      @submit="onSubmit"
    >
      <div class="md:w-1/2 flex items-stretch w-full">
        <Carousel auto-play :items="data?.thumbnail ?? []" :ui="{ item: 'basis-full' }" class="w-full">
          <template #item="{ item }">
            <NuxtImg draggable="false" :src="item.url" :alt="item.alternativeText" class="w-full object-contain max-h-60" />
          </template>
        </Carousel>
      </div>
      <div class="md:w-1/2">
        <div class="space-y-4">
          <UFormGroup required label="Name" name="name">
            <UInput v-model="form.name" />
          </UFormGroup>
          <UFormGroup required label="Email" name="email">
            <UInput v-model="form.email" type="email" />
          </UFormGroup>
          <UFormGroup required label="Message" name="message">
            <UTextarea v-model="form.message" />
          </UFormGroup>
          <UButton
            size="lg" class="w-full flex justify-center items-center" type="submit"
            trailing-icon="i-iconamoon:send-light"
            :disabled="shouldDisable"
          >
            Send
          </UButton>
        </div>
      </div>
    </UForm>
  </div>
</template>
