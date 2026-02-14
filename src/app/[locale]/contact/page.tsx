import type { Metadata } from "next";
import { type Locale, CLINIC_NAME, WORKING_HOURS } from "@/lib/constants";
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
    title: t(loc, "nav.contact"),
    description:
      loc === "ar"
        ? `تواصل مع ${CLINIC_NAME.ar} عبر واتساب`
        : `Contact ${CLINIC_NAME.en} via WhatsApp`,
  };
}

const contactOptions = {
  ar: [
    {
      icon: "calendar",
      title: "حجز موعد",
      description: "احجزوا موعدكم القادم بسهولة",
    },
    {
      icon: "info",
      title: "استفسار عن الخدمات",
      description: "تعرّفوا على خدماتنا وأقسامنا",
    },
    {
      icon: "tag",
      title: "استفسار عن العروض",
      description: "اطّلعوا على أحدث العروض والأسعار",
    },
    {
      icon: "chat",
      title: "استفسارات عامة",
      description: "نحن هنا للإجابة على جميع أسئلتكم",
    },
  ],
  en: [
    {
      icon: "calendar",
      title: "Book an Appointment",
      description: "Schedule your next visit with ease",
    },
    {
      icon: "info",
      title: "Service Inquiries",
      description: "Learn about our services and departments",
    },
    {
      icon: "tag",
      title: "Offers & Pricing",
      description: "Get details on our latest offers",
    },
    {
      icon: "chat",
      title: "General Questions",
      description: "We're here to answer all your questions",
    },
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  info: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  ),
  tag: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  ),
  chat: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const options = contactOptions[loc];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(loc, "nav.contact")}
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto">
            {loc === "ar"
              ? "نسعد بتواصلكم ونحرص على خدمتكم"
              : "We'd love to hear from you and are committed to serving you"}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WhatsApp Primary */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-brand-100 text-center mb-12">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-whatsapp mx-auto mb-5">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-brand-800 mb-2">
              {loc === "ar"
                ? "أسهل وأسرع طريقة للتواصل"
                : "The Easiest & Fastest Way to Reach Us"}
            </h2>
            <p className="text-gray-600 mb-6">
              {loc === "ar"
                ? "تواصلوا معنا مباشرة عبر واتساب لأي استفسار أو حجز."
                : "Contact us directly via WhatsApp for any inquiry or booking."}
            </p>
            <CTAButton
              label={t(loc, "cta.whatsapp")}
              variant="whatsapp"
              className="text-base px-8 py-4"
            />
          </div>

          {/* How we can help */}
          <h2 className="text-2xl font-bold text-brand-800 mb-6 text-center">
            {loc === "ar"
              ? "كيف يمكننا مساعدتكم؟"
              : "How Can We Help?"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((option) => (
              <div
                key={option.title}
                className="bg-gray-50 rounded-xl p-5 hover:bg-brand-50 transition-colors"
              >
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-3">
                  {iconMap[option.icon]}
                </div>
                <h3 className="font-semibold text-brand-800 mb-1">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>

          {/* Working Hours Reminder */}
          <div className="mt-12 bg-brand-50 rounded-2xl p-6 text-center">
            <p className="text-brand-700 font-medium">
              {t(loc, "label.workingHours")}: {WORKING_HOURS.days[loc]} | {WORKING_HOURS.time[loc]}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
