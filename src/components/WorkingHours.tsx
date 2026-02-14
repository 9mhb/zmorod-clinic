import { WORKING_HOURS, GOOGLE_MAPS_LINK, type Locale } from "@/lib/constants";
import { t } from "@/lib/i18n";
import { CTAButton } from "./CTAButton";

export function WorkingHours({ locale }: { locale: Locale }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-brand-100">
      <div className="flex items-start gap-4">
        {/* Clock Icon */}
        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
          <svg
            className="w-6 h-6"
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
        <div>
          <h3 className="text-lg font-bold text-brand-800 mb-1">
            {t(locale, "label.workingHours")}
          </h3>
          <p className="text-gray-700 font-medium">
            {WORKING_HOURS.days[locale]}
          </p>
          <p className="text-gray-600">{WORKING_HOURS.time[locale]}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 mt-6">
        {/* Location Icon */}
        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
          <svg
            className="w-6 h-6"
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
        <div>
          <h3 className="text-lg font-bold text-brand-800 mb-1">
            {t(locale, "label.location")}
          </h3>
          <CTAButton
            label={t(locale, "cta.directions")}
            href={GOOGLE_MAPS_LINK}
            variant="secondary"
            external
          />
        </div>
      </div>
    </div>
  );
}
