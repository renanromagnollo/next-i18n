import 'server-only'

import { Locale, SupportedLocale } from '@/types'
import { Dictionary } from './dictionary'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  [SupportedLocale.EN_US]: () =>
    import('@/dictionary/lang/en-us.json').then((module) => module.default),
  [SupportedLocale.PT_BR]: () =>
    import('@/dictionary/lang/pt-br.json').then((module) => module.default),
}

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}