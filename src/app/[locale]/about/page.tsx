// src/app/[locale]/about/page.tsx
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('home.description')}</p>
    </div>
  );
}
