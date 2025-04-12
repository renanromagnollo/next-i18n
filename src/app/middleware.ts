import { i18n } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Se já está com idioma na URL, deixa passar
  if (i18n.locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next()
  }

  // Redireciona para o idioma padrão
  return NextResponse.redirect(new URL(`/${i18n.defaultLocale}${pathname}`, request.url))
}
