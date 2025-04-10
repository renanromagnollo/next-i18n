import { useTranslations } from "next-intl"
import Link from "next/link"

export default function HomePage() {

  const translate = useTranslations()

  return (
    <div>
      <h1>{translate('home.title')}</h1>
      <p>{translate('home.description')}</p>
      <Link href='/about'>About</Link>
    </div>
  )
}