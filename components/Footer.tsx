import Link from "next/link";
import Logo from "@/components/Logo";
import {
  LinkedinIcon,
  InstagramIcon,
  XIcon,
  GithubIcon,
} from "@/components/icons/SocialIcons";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const mainLinks = [
  { label: "O nas", href: "#about" },
  { label: "Oferta", href: "#offer" },
  { label: "Klienci", href: "#clients" },
  { label: "Blog", href: "#blog" },
];

const serviceLinks = [
  { label: "Eventy", href: "#events" },
  { label: "Lead generation", href: "#lead-generation" },
  { label: "Strony internetowe", href: "#websites" },
  { label: "SEO", href: "#seo" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[-10%] bottom-[-15%] h-105 w-105 rounded-full bg-[#5d62ff]/25 blur-[140px]" />
        <div className="absolute left-1/2 top-[-18%] h-90 w-90 -translate-x-1/2 rounded-full bg-[#8A8FFF]/30 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-432 px-6 py-16 md:px-10 md:py-20 xl:px-20">
        <div className="grid gap-16 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-14 lg:grid-cols-[minmax(280px,420px)_1fr]">
            <div className="flex flex-col justify-between">
              <div className="mb-12">
                <Link href="/" className="inline-block">
                  <Logo variant="white" className="block h-10 w-auto md:h-12" />
                </Link>

                <p className="mt-7 font-content text-sm font-light text-white/92">
                  Copyright © 2025 All Rights Reserved
                </p>

                <p className="mt-7 max-w-[560px] font-content text-sm leading-[1.35] text-white/78">
                  Wszelkie prawa do treści strony są zastrzeżone, jakiekolwiek
                  wykorzystanie treści w całości lub części jest zabronione.
                </p>
              </div>

              <div className="grid gap-12 grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:mt-12 sm:mt-12 md:mt-12 lg:mt-8 lg:bg-transparent">
                <nav className="flex flex-col gap-7">
                  {mainLinks.map((item, index) => (
                    <div className="flex items-center gap-2" key={`${item.label}-${index}`}>
                      <div className="w-2 h-2 rounded-full mb-0.5 bg-[#4F5CF9]"></div>
                      <Link
                        href={item.href}
                        className="font-heading text-lg leading-none text-white/80 transition hover:text-white hover:underline"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </nav>

                <nav className="flex flex-col gap-7">
                  {serviceLinks.map((item, index) => (
                    <div className="flex items-center gap-2" key={`${item.label}-${index}`}>
                      <div className="w-2 h-2 rounded-full mb-0.5 bg-[#4F5CF9]"></div>
                      <Link
                        href={item.href}
                        className="font-heading text-lg leading-none text-white/80 transition hover:text-white hover:underline"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>


          </div>

          <div className="flex flex-col justify-between gap-8 xl:items-end xl:text-right">
            <div>
              <h2 className="font-heading leading-none text-white/95 text-3xl">
                Nawiążmy kontakt
              </h2>
              <div className="h-0.5 w-full bg-linear-to-r from-white/0 to-white/70 mt-3"></div>
              <div className="mt-10 flex flex-col gap-2">
                <a
                  href="mailto:ignacy.gawron@leadcraft-agency.com"
                  className="font-heading text-[18px] text-white/80 transition hover:text-white hover:underline flex items-center gap-5"
                >
                  <EnvelopeIcon className="w-8 h-8" />
                  <span>
                    ignacy.gawron@leadcraft-agency.com
                  </span>
                </a>
                <a
                  href="tel:+48660127049"
                  className="font-heading text-[32px] transition hover:text-white/80 hover:underline flex items-center gap-4"
                >
                  <PhoneIcon className="w-8 h-8" />
                  <span>
                    +48 660 127 049
                  </span>
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 xl:justify-end">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white transition hover:opacity-75"
                >
                  <LinkedinIcon className="h-10 w-10" />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white transition hover:opacity-75"
                >
                  <InstagramIcon className="h-8 w-8" />
                </a>

                <a
                  href="#"
                  aria-label="X"
                  className="text-white transition hover:opacity-75"
                >
                  <XIcon className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div className="text-right">
              <div className="mt-32 flex items-center gap-6 justify-end">
                <p className="font-content text-sm text-white/78">
                  Created by Michał Mytych
                </p>

                <a
                  href="https://www.linkedin.com/in/michalmytych/"
                  aria-label="LinkedIn Michała"
                  className="text-white transition hover:opacity-75"
                >
                  <LinkedinIcon className="h-10 w-10" />
                </a>

                <a
                  href="https://github.com/michalmytych"
                  aria-label="GitHub Michała"
                  className="text-white transition hover:opacity-75"
                >
                  <GithubIcon className="h-8 w-8 pb-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}