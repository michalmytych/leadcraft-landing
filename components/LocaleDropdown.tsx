"use client";

import {useState, useRef, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type LocaleDropdownProps = {
  currentLocale: string;
};

const LOCALES = [
  {code: "pl", label: "PL"},
  {code: "en", label: "EN"},
];

export default function LocaleDropdown({
  currentLocale,
}: LocaleDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const pathnameWithoutLocale = pathname.replace(/^\/(pl|en)(?=\/|$)/, "") || "/";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 text-white transition hover:opacity-80 cursor-pointer"
      >
        <span className="font-content text-lg">{currentLocale.toUpperCase()}</span>
        <span
          className={[
            "transition-transform duration-200 text-white",
            open ? "rotate-180" : "",
          ].join(" ")}
        >
          <ChevronDownIcon className="w-5 h-5"/>
        </span>
      </button>

      <div
        className={[
          "absolute right-0 top-full mt-3 min-w-22.5 rounded-2xl border border-white/15 bg-black/95 backdrop-blur-lg p-2 space-y-2",
          "transition-all duration-200 z-20",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        {LOCALES.map((locale) => (
          <Link
            key={locale.code}
            href={`/${locale.code}${pathnameWithoutLocale === "/" ? "" : pathnameWithoutLocale}`}
            className={[
              "block rounded-xl px-3 py-2 text-sm text-white transition hover:bg-white/10",
              currentLocale === locale.code ? "bg-white/10" : "",
            ].join(" ")}
            onClick={() => setOpen(false)}
          >
            {locale.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
