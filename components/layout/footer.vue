<template>
  <footer>
    <div class="container mx-auto py-8 px-4">
      <div class="flex gap-4 md:gap-6 lg:gap-8 flex-col">
        <div class="flex flex-1 gap-4 justify-center items-center flex-col p-8">
          <NuxtLinkLocale to="/" class="min-w-10 min-h-10">
            <NuxtImg src="/logo/square-dark.svg" class="hidden dark:block w-10 h-10" />
            <NuxtImg src="/logo/square-light.svg" class="dark:hidden w-10 h-10" />
          </NuxtLinkLocale>
          <span class="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </span>
        </div>
        <div class="flex flex-1 gap-4 justify-around flex-wrap">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold">
              {{ $t('common.footer.who_we_are') }}
            </h4>
            <NuxtLinkLocale to="/about">
              About
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/contact">
              Contact
            </NuxtLinkLocale>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold">
              {{ $t('common.footer.what_we_do') }}
            </h4>
            <NuxtLinkLocale to="/services">
              Services
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/products">
              Products
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/clients">
              Clients
            </NuxtLinkLocale>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold">
              {{ $t('common.footer.contact_us') }}
            </h4>
            <NuxtLinkLocale to="/contact">
              Contact
            </NuxtLinkLocale>

            <NuxtLinkLocale to="/careers">
              Careers
            </NuxtLinkLocale>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold">
              {{ $t('common.footer.follow_us') }}
            </h4>
            <div class="flex gap-2 justify-center items-center">
              <NuxtLinkLocale to="/facebook">
                <UButton variant="ghost" icon="i-logos:facebook" />
              </NuxtLinkLocale>
              <NuxtLinkLocale to="/twitter">
                <UButton variant="ghost" icon="i-devicon:twitter" />
              </NuxtLinkLocale>
              <NuxtLinkLocale to="/instagram">
                <UButton variant="ghost" icon="i-skill-icons:instagram" />
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UDivider />
    <p class="italic mx-auto text-center py-4 text-gray-500 dark:text-gray-400 text-xs">
      @2025 Smartnote Tech. All rights reserved.
    </p>
  </footer>
</template>
