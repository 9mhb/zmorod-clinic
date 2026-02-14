import type { Metadata } from "next";
import {
  type Locale,
  CLINIC_NAME,
  WORKING_HOURS,
  GOOGLE_MAPS_LINK,
} from "@/lib/constants";
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
    title: t(loc, "nav.location"),
    description:
      loc === "ar"
        ? `موقع وساعات عمل ${CLINIC_NAME.ar}`
        : `Location and working hours of ${CLINIC_NAME.en}`,
  };
}

export default async function LocationPage({
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
            {t(loc, "nav.location")}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Working Hours Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-brand-100">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-5">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-brand-800 mb-4">
                {t(loc, "label.workingHours")}
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    {WORKING_HOURS.days[loc]}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    {WORKING_HOURS.time[loc]}
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-brand-50 rounded-xl text-sm text-brand-700">
                {loc === "ar"
                  ? "الجمعة: مغلق"
                  : "Friday: Closed"}
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-brand-100">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-5">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-brand-800 mb-4">
                {t(loc, "label.location")}
              </h2>

              <p className="text-gray-600 mb-6">
                {loc === "ar"
                  ? "يمكنكم الوصول إلينا بسهولة عبر خرائط جوجل."
                  : "You can easily find us using Google Maps."}
              </p>

              <CTAButton
                label={t(loc, "cta.directions")}
                href={GOOGLE_MAPS_LINK}
                variant="primary"
                external
              />
            </div>
          </div>

          {/* Need Help */}
          <div className="mt-12 bg-brand-50 rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl font-bold text-brand-800 mb-3">
              {loc === "ar" ? "تحتاجون مساعدة؟" : "Need Help?"}
            </h3>
            <p className="text-gray-600 mb-6">
              {loc === "ar"
                ? "إذا احتجتم مساعدة في الوصول إلى المجمع أو أي استفسار آخر، تواصلوا معنا مباشرة عبر واتساب."
                : "If you need assistance with directions or have any questions, contact us directly via WhatsApp."}
            </p>
            <CTAButton
              label={t(loc, "cta.whatsapp")}
              variant="whatsapp"
            />
          </div>
        </div>
      </section>
    </>
  );
}
