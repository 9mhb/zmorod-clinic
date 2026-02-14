import { type Locale, CLINIC_NAME } from "@/lib/constants";
import { t } from "@/lib/i18n";

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600" />

      {/* Radial glow accent */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(15,138,115,0.5) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(10,107,92,0.3) 0%, transparent 60%)",
        }}
      />

      {/* Soft grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute top-0 ltr:right-0 rtl:left-0 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl -translate-y-1/2 ltr:translate-x-1/3 rtl:-translate-x-1/3" />
      <div className="absolute bottom-0 ltr:left-0 rtl:right-0 w-72 h-72 bg-brand-300/10 rounded-full blur-3xl translate-y-1/2 ltr:-translate-x-1/4 rtl:translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Hours badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-brand-100 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-white/10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {locale === "ar"
              ? "السبت - الخميس | ١ ظهراً - ١٠ مساءً"
              : "Sat - Thu | 1 PM - 10 PM"}
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            {CLINIC_NAME[locale]}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-brand-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            {locale === "ar"
              ? "بيئة طبية متكاملة تجمع بين طب الأسنان والجلدية والليزر في مكان واحد"
              : "A complete medical environment combining dental, dermatology, and laser services under one roof"}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/services`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-[1.02] bg-white text-brand-800 hover:bg-brand-50 shadow-lg hover:shadow-xl"
            >
              {t(locale, "cta.viewServices")}
            </a>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-[1.02] border-2 border-white/25 text-white hover:bg-white/10"
            >
              {t(locale, "cta.book")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
