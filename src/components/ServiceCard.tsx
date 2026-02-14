import Link from "next/link";
import { type Locale } from "@/lib/constants";
import { t } from "@/lib/i18n";

// SVG icons for each service category
const icons: Record<string, React.ReactNode> = {
  dentistry: (
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
        d="M12 2C9.5 2 7 4 7 7c0 2 .5 3.5 1 5 .5 1.5 1 3.5 1 5.5C9 19.5 10 22 12 22s3-2.5 3-4.5c0-2 .5-4 1-5.5s1-3 1-5c0-3-2.5-5-5-5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2c-1 0-2 .5-2.5 1.5"
      />
    </svg>
  ),
  dermatology: (
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
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  ),
  laser: (
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
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  ),
};

interface ServiceCardProps {
  locale: Locale;
  serviceKey: "dentistry" | "dermatology" | "laser";
  description: string;
}

export function ServiceCard({
  locale,
  serviceKey,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-200 transition-all duration-300 group">
      <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors">
        {icons[serviceKey]}
      </div>
      <h3 className="text-xl font-bold text-brand-800 mb-2">
        {t(locale, `services.${serviceKey}`)}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <Link
        href={`/${locale}/services`}
        className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 text-sm font-semibold transition-colors"
      >
        {t(locale, "cta.learnMore")}
        <svg
          className="w-4 h-4 rtl:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
