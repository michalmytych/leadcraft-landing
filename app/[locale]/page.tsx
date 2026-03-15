import HeroSection from '@/sections/HeroSection';
import OfferSection from '@/sections/OfferSection';
// import {useTranslations} from 'next-intl';

export default function HomePage() {
  // const t = useTranslations('Home');

  return (
    <main>
      <HeroSection />
      <OfferSection />
    </main>
  );
}
