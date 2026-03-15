import {NextIntlClientProvider} from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Props = {
  locale: string;
  messages: any;
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