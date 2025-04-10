import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import LanguageSwitcher from "../_components/LanguageSwitcher";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}

export default async function LocaleLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) {
  let messages

  try {
    messages = (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    console.error("Erro ao carregar tradução.", error)
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LanguageSwitcher />
      {children}
    </NextIntlClientProvider>
  )
}