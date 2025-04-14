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
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  // Esperando o dicionário carregar de acordo com a localidade
  const dictionary = await getDictionary(params.locale)

  // Caso a localidade não seja suportada, mostra erro 404
  if (!i18n.locales.includes(params.locale)) {
    notFound()
  }

  return (
    <TranslationProvider dictionary={dictionary}>
      {children}
    </TranslationProvider>
  )
}
