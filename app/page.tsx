import HeroSection from '@/sections/HeroSection';
import OfferSection from '@/sections/OfferSection';
import pl from '@/messages/pl.json';
import LocaleShell from '@/components/LocaleShell';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <LocaleShell locale="pl" messages={pl}>      
      <Navbar locale={"pl"} />
      <main>
        <HeroSection />
        <OfferSection />
      </main>
    </LocaleShell>
  );
}
