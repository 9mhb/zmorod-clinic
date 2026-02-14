import type { Metadata } from "next";
import { type Locale, CLINIC_NAME } from "@/lib/constants";
import { t } from "@/lib/i18n";
import { CTAButton } from "@/components/CTAButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return {
    title: t(loc, "nav.offers"),
    description:
      loc === "ar"
        ? `أحدث عروض ${CLINIC_NAME.ar}`
        : `Latest offers at ${CLINIC_NAME.en}`,
  };
}

export default async function OffersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(loc, "nav.offers")}
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto">
            {loc === "ar"
              ? "عروض مميزة ومتجددة على خدماتنا"
              : "Special and regularly updated offers on our services"}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Offers Icon */}
          <div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mx-auto mb-8">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-brand-800 mb-4">
            {loc === "ar"
              ? "عروض تُحدّث باستمرار"
              : "Frequently Updated Offers"}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            {loc === "ar"
              ? "نحرص في مجمع الزمرد العالي الطبي على تقديم عروض مميزة ومتجددة على خدماتنا في طب الأسنان والجلدية والليزر."
              : "At Al-Zmorod Medical Complex, we regularly provide special offers across our dental, dermatology, and laser services."}
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {loc === "ar"
              ? "تتغيّر عروضنا بشكل دوري لنقدم لكم أفضل القيمة. تواصلوا معنا مباشرة عبر واتساب للحصول على تفاصيل العروض الحالية والأسعار."
              : "Our offers are updated periodically to bring you the best value. Contact us directly via WhatsApp to learn about our current offers and pricing."}
          </p>

          <CTAButton
            label={t(loc, "cta.inquire")}
            variant="whatsapp"
            className="text-base px-8 py-4"
          />
        </div>
      </section>
    </>
  );
}
