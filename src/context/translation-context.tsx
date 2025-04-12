'use client'

import { createContext, useContext } from 'react'
import { Dictionary } from '@/types'

const TranslationContext = createContext<Dictionary | null>(null)

export const TranslationProvider = ({
  children,
  dictionary,
}: {
  children: React.ReactNode
  dictionary: Dictionary
}) => {
  return (
    <TranslationContext.Provider value={dictionary}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) throw new Error('useTranslation must be used within TranslationProvider')
  return context
}
