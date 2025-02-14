export function useLocale() {
  const { locale } = useI18n()

  return {
    locale: computed(() => locale.value),
  }
}
