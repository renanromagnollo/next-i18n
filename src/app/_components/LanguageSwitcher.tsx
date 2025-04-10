import { usePathname } from "next/navigation"
import { useRouter } from "next/router"


export default function LanguageSwitcher() {

  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}${pathname.substring(3)}`)
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
    </div>
  )
}