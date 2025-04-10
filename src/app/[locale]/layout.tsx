import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

export default function LocaleLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) {
  let messages

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    messages = require(`../../locales/${locale}.json`)
  } catch (error) {
    console.error("Erro ao carregar tradução.", error)
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}