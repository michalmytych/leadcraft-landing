import OfferCard from "@/components/OfferCard";
import {useTranslations} from "next-intl";

const OFFER_META = [
  {
    id: "leadGeneration",
    imageSrc: "/images/offer/lead-generation.webp",
    consultationHref: "#contact",
    detailsHref: "#lead-generation",
  },
  {
    id: "events",
    imageSrc: "/images/offer/events.webp",
    consultationHref: "#contact",
    detailsHref: "#events",
  },
  {
    id: "websites",
    imageSrc: "/images/offer/webpages.webp",
    consultationHref: "#contact",
    detailsHref: "#websites",
  },
  {
    id: "seo",
    imageSrc: "/images/offer/seo.webp",
    consultationHref: "#contact",
    detailsHref: "#seo",
  },
];

export default function OfferSection() {
  const t = useTranslations("Home.offer");

  return (
    <section id="offer" className="relative bg-black text-white overflow-hidden">
      
      {/* tło */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(79,92,249,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(79,92,249,0.12),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* header */}
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-white/60">
            {t("eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-heading text-white">
            {t("heading")}
          </h2>

          <div className="mt-4 h-px w-64 bg-white/20" />

          <p className="mt-4 text-base text-white/70 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {OFFER_META.map((offer) => (
            <OfferCard
              key={offer.id}
              title={t(`items.${offer.id}.title`)}
              subtitle={t(`items.${offer.id}.subtitle`)}
              description={t(`items.${offer.id}.description`)}
              imageSrc={offer.imageSrc}
              imageAlt={t(`items.${offer.id}.imageAlt`)}
              consultationHref={offer.consultationHref}
              detailsHref={offer.detailsHref}
              consultationLabel={t("consultationCta")}
              detailsLabel={t("detailsCta")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
