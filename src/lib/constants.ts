// ============================================
// CONFIRMED FACTS — safe to use in all pages
// ============================================

export const WHATSAPP_LINK = "https://wa.me/+966548082176";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/ys7CWRFQPxZfxadu7";
export const INSTAGRAM_LINK = "https://www.instagram.com/zmorod_clinic/";

export const WORKING_HOURS = {
  days: {
    ar: "السبت إلى الخميس",
    en: "Saturday to Thursday",
  },
  time: {
    ar: "من 1:00 ظهراً حتى 10:00 مساءً",
    en: "1:00 PM to 10:00 PM",
  },
};

export const CLINIC_NAME = {
  ar: "مجمع الزمرد العالي الطبي",
  en: "Al-Zmorod Medical Complex",
};

export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ar";
