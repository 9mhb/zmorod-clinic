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
    title: t(loc, "nav.services"),
    description:
      loc === "ar"
        ? `خدمات طب الأسنان والجلدية والليزر في ${CLINIC_NAME.ar}`
        : `Dental, dermatology, and laser services at ${CLINIC_NAME.en}`,
  };
}

// Service data — confirmed facts only
const services = {
  dentistry: {
    ar: {
      title: "الأسنان",
      items: [
        "زراعة الأسنان",
        "ابتسامة هوليوود",
        "تبييض الأسنان",
        "تقويم الأسنان",
        "تركيبات الأسنان",
        "تنظيف الأسنان",
        "معالجات الأسنان",
      ],
    },
    en: {
      title: "Dentistry",
      items: [
        "Dental Implants",
        "Hollywood Smile",
        "Teeth Whitening",
        "Orthodontics",
        "Dental Crowns & Bridges",
        "Dental Cleaning",
        "Dental Treatments",
      ],
    },
  },
  dermatology: {
    ar: {
      title: "الجلدية والبشرة",
      items: [
        "بوتكس",
        "فيلر",
        "إبر النضارة",
        "إذابة دهون الجسم",
        "إزالة الحبوب والندبات",
        "هيدرافيشل",
        "ديرمابن",
        "تنظيف البشرة",
      ],
    },
    en: {
      title: "Dermatology & Skin",
      items: [
        "Botox",
        "Fillers",
        "Skin Rejuvenation Injections",
        "Body Fat Dissolving",
        "Acne & Scar Removal",
        "HydraFacial",
        "Dermapen",
        "Skin Cleansing",
      ],
    },
  },
  laser: {
    ar: {
      title: "الليزر",
      items: ["ليزر النساء", "ليزر الرجال"],
    },
    en: {
      title: "Laser",
      items: ["Women's Laser", "Men's Laser"],
    },
  },
};

// Icons for each department
const departmentIcons: Record<string, React.ReactNode> = {
  dentistry: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9.5 2 7 4 7 7c0 2 .5 3.5 1 5 .5 1.5 1 3.5 1 5.5C9 19.5 10 22 12 22s3-2.5 3-4.5c0-2 .5-4 1-5.5s1-3 1-5c0-3-2.5-5-5-5z" />
    </svg>
  ),
  dermatology: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  laser: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

export default async function ServicesPage({
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
            {t(loc, "nav.services")}
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto">
            {loc === "ar"
              ? "نقدم مجموعة متكاملة من الخدمات الطبية والتجميلية ضمن ثلاثة أقسام متخصصة"
              : "A comprehensive range of medical and cosmetic services across three specialized departments"}
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {(["dentistry", "dermatology", "laser"] as const).map(
            (key, index) => (
              <div
                key={key}
                className={`${index > 0 ? "border-t border-gray-200 pt-16" : ""}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                    {departmentIcons[key]}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-800">
                    {services[key][loc].title}
                  </h2>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {services[key][loc].items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3"
                    >
                      <svg
                        className="w-5 h-5 text-brand-500 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  label={t(loc, "cta.inquire")}
                  variant="whatsapp"
                />
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
