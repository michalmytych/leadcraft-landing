import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {nohemi, switzer} from '@/assets/fonts/fonts';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${nohemi.variable} ${switzer.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}