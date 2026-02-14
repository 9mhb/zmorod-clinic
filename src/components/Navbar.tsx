"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, CLINIC_NAME } from "@/lib/constants";
import { t } from "@/lib/i18n";

const navLinks = [
  { key: "nav.home", href: "" },
  { key: "nav.services", href: "/services" },
  { key: "nav.offers", href: "/offers" },
  { key: "nav.location", href: "/location" },
  { key: "nav.contact", href: "/contact" },
];

export function Navbar({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const otherLocale = locale === "ar" ? "en" : "ar";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt={CLINIC_NAME[locale]}
              width={44}
              height={44}
              className="rounded-lg"
            />
            <span className="text-brand-700 font-bold text-sm sm:text-base leading-tight hidden sm:block">
              {CLINIC_NAME[locale]}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
              >
                {t(locale, link.key)}
              </Link>
            ))}

            {/* Language Switcher */}
            <Link
              href={`/${otherLocale}`}
              className="ms-2 px-3 py-1.5 text-sm font-medium border border-brand-200 text-brand-700 rounded-lg hover:bg-brand-50 transition-colors"
            >
              {t(locale, "label.switchLang")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-brand-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-brand-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
              >
                {t(locale, link.key)}
              </Link>
            ))}
            <Link
              href={`/${otherLocale}`}
              className="block px-3 py-2.5 text-base font-medium text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
            >
              {t(locale, "label.switchLang")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
