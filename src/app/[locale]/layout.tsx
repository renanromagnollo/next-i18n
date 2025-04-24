// src/app/[locale]/layout.tsx

import { TranslationProvider } from '@/context/translation-context'
import { getDictionary } from '@/dictionary/get-dictionary'
import { i18n, Locale } from '@/types'
import { notFound } from 'next/navigation'

// Método para gerar os parâmetros de idiomas
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

// Layout principal para cada localidade
export default async function LocaleLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {

  const { children, params } = props
  const { locale } = await params

  // Caso a localidade não seja suportada, mostra erro 404
  if (!i18n.locales.includes(locale)) {
    notFound()
  }
  // Esperando o dicionário carregar de acordo com a localidade
  const dictionary = await getDictionary(locale)

  return (
    <TranslationProvider dictionary={dictionary}>
      {children}
    </TranslationProvider>
  )
}
