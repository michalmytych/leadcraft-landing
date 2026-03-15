"use client";

import {useState} from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import CTAButton from "@/components/CTAButton";
import LocaleDropdown from "@/components/LocaleDropdown";

type NavbarProps = {
  locale: string;
};

const NAV_ITEMS = [
  {href: "#about", label: "O nas"},
  {href: "#offer", label: "Oferta"},
  {href: "#clients", label: "Klienci"},
  {href: "#blog", label: "Blog"},
];

export default function Navbar({locale}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="border-b border-white/30 bg-black text-white z-100 top-0 sticky">
        <div className="mx-auto flex h-18 max-w-7xl items-center px-4 md:mx-0 justify-between md:px-12">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <span
                className={[
                  "block h-[1.5px] w-6 bg-white transition-all duration-300",
                  mobileOpen ? "translate-y-1.75 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-[1.5px] w-6 bg-white transition-all duration-300",
                  mobileOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-[1.5px] w-6 bg-white transition-all duration-300",
                  mobileOpen ? "-translate-y-1.75 -rotate-45" : "",
                ].join(" ")}
              />
            </button>

            <Link href={`/${locale}`} className="block">
              <Logo variant="white" className="block h-4 w-auto" />
            </Link>
          </div>

          <nav className="hidden items-center gap-16 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-content text-[22px] text-white transition hover:opacity-75"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden sm:block">
              <CTAButton href="#contact">Bezpłatna wycena</CTAButton>
            </div>

            <LocaleDropdown currentLocale={locale} />
          </div>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={[
          "fixed left-0 right-0 top-18 z-50 border-b border-white/20 bg-black lg:hidden",
          "transition-all duration-300 ease-out z-10",
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <nav className="flex flex-col px-8 py-8">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={[
                "font-heading text-[50px] font-extralight leading-none text-white/80",
                "transition-all duration-300 hover:text-white",
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0",
              ].join(" ")}
              style={{
                transitionDelay: mobileOpen ? `${index * 60}ms` : "0ms",
                paddingTop: "14px",
                paddingBottom: "14px",
              }}
            >
              {item.label}
            </Link>
          ))}

          <div
            className={[
              "mt-8 sm:hidden transition-all duration-300",
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0",
            ].join(" ")}
            style={{transitionDelay: mobileOpen ? "240ms" : "0ms"}}
          >
            <CTAButton href="#contact" className="w-full justify-between">
              Bezpłatna wycena
            </CTAButton>
          </div>
        </nav>
      </div>
    </>
  );
}