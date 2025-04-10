export enum SupportedLocale {
  PT_BR = 'pt-br',
  EN_US = 'en-us'
}

export const locales = [SupportedLocale.PT_BR, SupportedLocale.EN_US]

export const i18n = {
  defaultLocale: SupportedLocale.PT_BR,
  locales
} as const

export type Locale = (typeof i18n.locales)[number]