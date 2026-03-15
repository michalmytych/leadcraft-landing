import CTAButton from "@/components/CTAButton";
import Tag from "@/components/Tag";
import Image from "next/image";

const TAGS = [
  "Lead Generation",
  "Eventy",
  "Strony internetowe",
  "SEO",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#000_0.8px,transparent_0.8px)] [background-size:14px_14px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl items-center gap-14 px-6 py-8 lg:py-0 md:px-10 lg:grid-cols-[minmax(0,720px)_1fr]">
        <div className="max-w-[760px] z-30">
          <p className="font-content text-sm uppercase tracking-[0.08em] text-black/50 md:text-base">
            MARKETING B2B
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {TAGS.map((tag) => (
              <Tag content={tag} key={tag} />
            ))}
          </div>

          <h1 className="mt-8 max-w-[920px] font-heading text-[48px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[62px] md:text-[61px] lg:text-[70px]">
            Tworzymy marketing,
            <br />
            który{" "}
            <span className="text-[#4F5CF9]">
              sprzedaje
            </span>
          </h1>

          <div className="mt-8 h-px w-full max-w-[520px] bg-black/20" />

          <p className="mt-8 max-w-[640px] font-content text-lg leading-[1.28] text-black/70 md:text-[18px]">
            Wspieramy firmy usługowe, techniczne i produkcyjne w pozyskiwaniu
            klientów dzięki skutecznym kampaniom i przemyślanym procesom.
            Działamy elastycznie – każda strategia jest skrojona pod Twój
            biznes.
          </p>

          <div className="mt-10">
            <CTAButton href="#contact" variant="primary">
              Umów konsultację
            </CTAButton>
          </div>
        </div>
        <div>
          <Image
            className="lg:absolute z-20 sm:relative transform scale-x-[-1] -right-32 bottom-24 lg:right-32 lg:bottom-14 xl:right-32 xl:bottom-14"
            src={'/images/hero/businessman.png'}
            alt="Businessman" width={420} height={615}
          />
        </div>
      </div>
    </section>
  );
}