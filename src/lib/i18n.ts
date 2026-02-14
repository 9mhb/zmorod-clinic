import type { Locale } from "./constants";

// UI translations for navigation, buttons, and labels
export const translations: Record<Locale, Record<string, string>> = {
  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.offers": "العروض",
    "nav.location": "الموقع والمواعيد",
    "nav.contact": "تواصل معنا",

    // CTAs
    "cta.whatsapp": "تواصل واتساب",
    "cta.book": "احجز عبر واتساب",
    "cta.inquire": "استفسر عبر واتساب",
    "cta.directions": "احصل على الاتجاهات",
    "cta.viewServices": "تعرّف على خدماتنا",
    "cta.learnMore": "المزيد",

    // Labels
    "label.workingHours": "ساعات العمل",
    "label.location": "الموقع",
    "label.followUs": "تابعنا",
    "label.rights": "جميع الحقوق محفوظة",
    "label.switchLang": "English",

    // Services
    "services.dentistry": "الأسنان",
    "services.dermatology": "الجلدية والبشرة",
    "services.laser": "الليزر",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.offers": "Offers",
    "nav.location": "Location & Hours",
    "nav.contact": "Contact",

    // CTAs
    "cta.whatsapp": "WhatsApp Us",
    "cta.book": "Book via WhatsApp",
    "cta.inquire": "Inquire via WhatsApp",
    "cta.directions": "Get Directions",
    "cta.viewServices": "View Our Services",
    "cta.learnMore": "Learn More",

    // Labels
    "label.workingHours": "Working Hours",
    "label.location": "Location",
    "label.followUs": "Follow Us",
    "label.rights": "All rights reserved",
    "label.switchLang": "العربية",

    // Services
    "services.dentistry": "Dentistry",
    "services.dermatology": "Dermatology & Skin",
    "services.laser": "Laser",
  },
};

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? key;
}
