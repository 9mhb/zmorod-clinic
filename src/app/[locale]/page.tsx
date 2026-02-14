import { type Locale } from "@/lib/constants";
import { t } from "@/lib/i18n";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { WorkingHours } from "@/components/WorkingHours";
import { CTAButton } from "@/components/CTAButton";

const serviceDescriptions: Record<string, Record<Locale, string>> = {
  dentistry: {
    ar: "حلول شاملة للعناية بأسنانكم، من الزراعة والتقويم إلى ابتسامة هوليوود والتبييض.",
    en: "Comprehensive dental solutions, from implants and orthodontics to Hollywood Smile and whitening.",
  },
  dermatology: {
    ar: "أحدث تقنيات العناية بالبشرة والعلاجات التجميلية المتقدمة.",
    en: "Advanced skin care treatments and cosmetic procedures using the latest techniques.",
  },
  laser: {
    ar: "خدمات ليزر متقدمة للنساء والرجال بأحدث الأجهزة.",
    en: "Advanced laser services for women and men with state-of-the-art equipment.",
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      {/* Hero Section */}
      <HeroSection locale={loc} />

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-800 mb-3">
              {t(loc, "nav.services")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {loc === "ar"
                ? "نقدم خدمات متكاملة في ثلاثة أقسام متخصصة"
                : "Comprehensive services across three specialized departments"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["dentistry", "dermatology", "laser"] as const).map((key) => (
              <ServiceCard
                key={key}
                locale={loc}
                serviceKey={key}
                description={serviceDescriptions[key][loc]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours & Location */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-800 mb-3">
              {t(loc, "nav.location")}
            </h2>
          </div>
          <WorkingHours locale={loc} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {loc === "ar"
              ? "جاهزون لخدمتكم"
              : "Ready to Serve You"}
          </h2>
          <p className="text-brand-100 mb-8 text-lg">
            {loc === "ar"
              ? "احجزوا موعدكم الآن أو تواصلوا معنا لأي استفسار"
              : "Book your appointment now or contact us for any inquiry"}
          </p>
          <CTAButton
            label={t(loc, "cta.book")}
            variant="whatsapp"
            className="text-base px-8 py-4"
          />
        </div>
      </section>
    </>
  );
}
