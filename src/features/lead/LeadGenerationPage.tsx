import ListHeader from "@/components/ListHeader";
import {useTranslations} from "next-intl";

export default function LeadGenerationPage() {
  const t = useTranslations("LeadGeneration");

  return (
    <main>
      <section className="overflow-hidden bg-white text-black">
        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <div>
            <p className="text-xs tracking-widest uppercase text-black/60">
              {t("eyebrow")}
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-heading text-black">
              {t("heading")}
            </h2>

            <h3 className="mt-3 font-content text-2xl text-black/60">{t("introHeading")}</h3>

            <div className="mt-4 h-px mb-6 w-64 bg-black/20" />
          </div>

          <ul>
            <li key={'prospecting'}>
              <ListHeader elementNumber={1} title={t("steps.prospecting")} />

            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
