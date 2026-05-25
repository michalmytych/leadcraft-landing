import { setRequestLocale } from 'next-intl/server';
import LeadGenerationPage from '@/src/features/lead/LeadGenerationPage';

export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <LeadGenerationPage />;
}
