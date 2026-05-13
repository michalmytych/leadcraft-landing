import {NextIntlClientProvider} from 'next-intl';
import type {AbstractIntlMessages} from 'next-intl';
import Footer from '@/components/Footer';

type Props = {
  locale: string;
  messages: AbstractIntlMessages;
  children: React.ReactNode;
};

export default function LocaleShell({locale, messages, children}: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>     
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
