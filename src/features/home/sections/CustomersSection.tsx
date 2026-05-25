import ImagePillCard, { ImagePillCardProps } from "@/components/ImagePillCard";
import {useTranslations} from "next-intl";

const CUSTOMERS: Array<Omit<ImagePillCardProps, "title" | "imageAlt"> & {id: string}> = [
    {
        id: "b2bServices",
        imageSrc: "/images/customers/b2b.png",
        className: "md:col-span-1"
    },
    {
        id: "technical",
        imageSrc: "/images/customers/construction.png",
        className: "md:col-span-2"
    },
    {
        id: "industrial",
        imageSrc: "/images/customers/production.png",
        className: "md:col-span-2"
    },
    {
        id: "consulting",
        imageSrc: "/images/customers/experts.png",
        className: "md:col-span-1"
    },
    {
        id: "it",
        imageSrc: "/images/customers/it.png",
        className: "md:col-span-1"
    },
    {
        id: "logistics",
        imageSrc: "/images/customers/industry.png",
        className: "md:col-span-2"
    },
    {
        id: "trade",
        imageSrc: "/images/customers/import.png",
        className: "md:col-span-2"
    },
    {
        id: "salesTeams",
        imageSrc: "/images/customers/sales.png",
        className: "md:col-span-1"
    }
];

export default function CustomersSection() {
    const t = useTranslations("Home.customers");

    return (
        <section id="clients" className="overflow-hidden bg-white text-black">
            <div className="relative mx-auto max-w-7xl px-6 py-20">

                {/* header */}
                <div>
                    <p className="text-xs tracking-widest uppercase text-black/60">
                        {t("eyebrow")}
                    </p>

                    <h2 className="mt-3 text-3xl md:text-4xl font-heading text-black">
                        {t("heading")}
                    </h2>

                    <div className="mt-4 h-px mb-6 w-64 bg-black/20" />

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            CUSTOMERS.map((customer, ix: number) => (
                                <ImagePillCard
                                    key={`customers_pill_${ix}`}
                                    title={t(`items.${customer.id}.title`)}
                                    imageSrc={customer.imageSrc}
                                    imageAlt={t(`items.${customer.id}.imageAlt`)}
                                    heightClassName="h-[90px] md:h-[100px]"
                                    className={customer.className}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
