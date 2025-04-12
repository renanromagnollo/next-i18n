import 'server-only'
import { Dictionary, Locale, SupportedLocale } from '@/types'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  [SupportedLocale.EN_US]: () =>
    import('@/dictionary/lang/en-us.json').then((m) => m.default),
  [SupportedLocale.PT_BR]: () =>
    import('@/dictionary/lang/pt-br.json').then((m) => m.default),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale]
  if (!loader) throw new Error(`No dictionary for locale: ${locale}`)
  return loader()
}
