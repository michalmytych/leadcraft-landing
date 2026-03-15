import OfferCard from "@/components/OfferCard";

const offers = [
  {
    title: "Lead Generation",
    subtitle:
      "Pozyskuj wartościowe leady i przekładaj je na realne szanse sprzedażowe.",
    description:
      "Projektujemy kampanie B2B nastawione na efekt: od strategii i komunikacji, przez landing pages i formularze, po kwalifikację kontaktów.",
    imageSrc: "/images/offer/lead-generation.webp",
    imageAlt: "Lead generation illustration",
    consultationHref: "#contact",
    detailsHref: "#lead-generation",
  },
  {
    title: "Eventy",
    subtitle:
      "Organizujemy wydarzenia i targi, które budują relacje i wspierają sprzedaż.",
    description:
      "Pomagamy w przygotowaniu obecności marki na targach, konferencjach i wydarzeniach branżowych.",
    imageSrc: "/images/offer/events.webp",
    imageAlt: "Events illustration",
    consultationHref: "#contact",
    detailsHref: "#events",
  },
  {
    title: "Strony internetowe",
    subtitle:
      "Tworzymy strony firmowe, które zwiększają konwersję i porządkują ofertę.",
    description:
      "Budujemy strony B2B i landing pages zoptymalizowane pod marketing i sprzedaż.",
    imageSrc: "/images/offer/webpages.webp",
    imageAlt: "Websites illustration",
    consultationHref: "#contact",
    detailsHref: "#websites",
  },
  {
    title: "SEO",
    subtitle:
      "Zwiększamy widoczność w wyszukiwarkach i pomagamy docierać do klientów.",
    description:
      "Pracujemy nad technicznym SEO, treściami i strukturą strony, aby zwiększyć ruch i liczbę zapytań.",
    imageSrc: "/images/offer/seo.webp",
    imageAlt: "SEO illustration",
    consultationHref: "#contact",
    detailsHref: "#seo",
  },
];

export default function OfferSection() {
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
            Oferta
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-heading text-white">
            Jak możemy pomóc Twojej firmie
          </h2>

          <div className="mt-4 h-px w-64 bg-white/20" />

          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Wspieramy firmy usługowe i technologiczne w pozyskiwaniu klientów
            dzięki skutecznym kampaniom marketingowym oraz przemyślanemu procesowi sprzedaży.
          </p>
        </div>

        {/* grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offers.map((offer) => (
            <OfferCard
              key={offer.title}
              title={offer.title}
              subtitle={offer.subtitle}
              description={offer.description}
              imageSrc={offer.imageSrc}
              imageAlt={offer.imageAlt}
              consultationHref={offer.consultationHref}
              detailsHref={offer.detailsHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
