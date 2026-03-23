import HeroSection from '@/src/features/home/sections/HeroSection';
import OfferSection from '@/src/features/home/sections/OfferSection';
import CustomersSection from '@/src/features/home/sections/CustomersSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <OfferSection />
      <CustomersSection />
    </main>
  );
}