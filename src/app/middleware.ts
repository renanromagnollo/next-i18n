import { NextRequest, NextResponse } from 'next/server'
import { i18n } from '@/types'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isLanguageInUrl = i18n.locales.some((locale) => pathname.startsWith(`/${locale}`))
  if (isLanguageInUrl) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL(`/${i18n.defaultLocale}${pathname}`, request.url))
}
