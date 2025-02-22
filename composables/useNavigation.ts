export function useNavigation() {
  const switchLocalePath = useSwitchLocalePath()
  const localePath = useLocalePath()
  const { locale, locales } = useI18n()

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

  return { availableLocales, locale, locales, localePath }
}
