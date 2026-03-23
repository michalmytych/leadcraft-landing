import ImagePillCard, { ImagePillCardProps } from "@/components/ImagePillCard";

const CUSTOMERS: ImagePillCardProps[] = [
    {
        title: "Firmy usługowe B2B",
        imageSrc: "/images/customers/b2b.png",
        imageAlt: "",
        className: "md:col-span-1"
    },
    {
        title: "Firmy techniczne i inżynieryjne",
        imageSrc: "/images/customers/construction.png",
        imageAlt: "",
        className: "md:col-span-2"
    },
    {
        title: "Sektor przemysłowy i produkcyjny",
        imageSrc: "/images/customers/production.png",
        imageAlt: "",
        className: "md:col-span-2"
    },
    {
        title: "Firmy doradcze i eksperckie",
        imageSrc: "/images/customers/experts.png",
        imageAlt: "",
        className: "md:col-span-1"
    },
    {
        title: "Branżę IT",
        imageSrc: "/images/customers/it.png",
        imageAlt: "",
        className: "md:col-span-1"
    },
    {
        title: "Firmy logistyczne i instalacyjne",
        imageSrc: "/images/customers/industry.png",
        imageAlt: "",
        className: "md:col-span-2"
    },
    {
        title: "Importerów i eksporterów",
        imageSrc: "/images/customers/import.png",
        imageAlt: "",
        className: "md:col-span-2"
    },
    {
        title: "Zespoły handlowe",
        imageSrc: "/images/customers/sales.png",
        imageAlt: "",
        className: "md:col-span-1"
    }
];

export default function CustomersSection() {
    return (
        <section className="overflow-hidden bg-white text-black">
            <div className="relative mx-auto max-w-7xl px-6 py-20">

                {/* header */}
                <div>
                    <p className="text-xs tracking-widest uppercase text-black/60">
                        Klienci
                    </p>

                    <h2 className="mt-3 text-3xl md:text-4xl font-heading text-black">
                        Kogo wspieramy?
                    </h2>

                    <div className="mt-4 h-px mb-6 w-64 bg-black/20" />

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            CUSTOMERS.map((customer: ImagePillCardProps, ix: number) => (
                                <ImagePillCard
                                    key={`customers_pill_${ix}`}
                                    title={customer.title}
                                    imageSrc={customer.imageSrc}
                                    imageAlt={customer.imageAlt}
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