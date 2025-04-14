'use-client'

import { useTranslation } from '@/context/translation-context'

export default function AboutPage() {
  const t = useTranslation();

  return (
    <div>
      <h1>{t.about.title}</h1>
      <p>{t.about.description}</p>
    </div>
  );
}
