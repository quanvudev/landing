export function useNavigation() {
  const switchLocalePath = useSwitchLocalePath()
  const localePath = useLocalePath()
  const { t, locale, locales } = useI18n()

  const availableLocales = computed(() =>
    locales.value.map(x => ({
      label: x.name ?? x.code,
      code: x.code,
      class: x.code === locale.value ? 'font-semibold text-primary' : '',
      click: () => {
        navigateTo(switchLocalePath(x.code))
      },
    })),
  )

  const links = computed(() => [
    { label: t('common.nav.home'), to: localePath('/') },
    { label: t('common.nav.about_us'), to: localePath('/about-us') },
    { label: t('common.nav.project'), to: localePath('/project') },
    { label: t('common.nav.contact'), to: localePath('/contact') },
  ])

  return { links, availableLocales, locale, locales }
}
