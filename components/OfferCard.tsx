import Image from "next/image";
import CTAButton from "@/components/CTAButton";

type OfferCardProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  consultationHref: string;
  detailsHref: string;
};

export default function OfferCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  consultationHref,
  detailsHref,
}: OfferCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/10 via-[#4F5CF9]/10 to-black/80 p-6 shadow-xl">
      
      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#4F5CF9]/20 blur-3xl group-hover:bg-[#4F5CF9]/30 transition" />
      </div>

      <div className="relative flex flex-col gap-6 sm:flex-col md:flex-col lg:flex-row xl:flex-row md:justify-between">

        {/* tekst */}
        <div className="max-w-lg z-40 flex flex-col justify-between h-full">
          <h3 className="font-heading text-xl md:text-2xl text-white">
            {title}
          </h3>

          <div className="mt-3 h-px w-40 bg-white/20" />

          <p className="mt-3 text-base text-white/90 font-content max-w-[62%]">
            {subtitle}
          </p>

          <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-[60%]">
            {description}
          </p>

          <div className="mt-5 flex flex-nowrap gap-3">
            <CTAButton href={consultationHref} variant="primary">
              Umów konsultację
            </CTAButton>

            <CTAButton href={detailsHref}>
              Dowiedz się więcej
            </CTAButton>
          </div>
        </div>

        {/* obrazek */}        
        <div 
              className={[
        "absolute w-[300px] h-[300px] -right-32 -top-20 shrink-0",
        "xl:w-[350px] xl:h-[350px] xl:-right-20 xl:-top-18",
        "lg:w-[280px] lg:h-[280px] lg:-right-18 lg:-top-12",
        "md:w-[400px] md:h-[400px] md:-right-20 md:-top-26",
        "sm:w-[250px] sm:h-[250px] sm:-right-18 sm:-top-20",      
      ].join(" ")}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </article>
  );
}
