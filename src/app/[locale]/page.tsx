'use client'

import { useTranslation } from '@/context/translation-context'

export default function HomePage() {
  const t = useTranslation()

  return (
    <main>
      <h1>{t.home.title}</h1>
      <p>{t.home.description}</p>
    </main>
  )
}
