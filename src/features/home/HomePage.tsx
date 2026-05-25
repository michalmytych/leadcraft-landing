import HeroSection from '@/src/features/home/sections/HeroSection';
import OfferSection from '@/src/features/home/sections/OfferSection';
import CustomersSection from '@/src/features/home/sections/CustomersSection';
import VideoProcessSection from '@/src/features/home/sections/VideoProcessSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <OfferSection />
      <CustomersSection />
      <VideoProcessSection />
    </main>
  );
}
