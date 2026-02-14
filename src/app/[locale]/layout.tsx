import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, CLINIC_NAME, type Locale } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const name = CLINIC_NAME[loc] || CLINIC_NAME.ar;

  return {
    title: {
      template: `%s | ${name}`,
      default: name,
    },
    description:
      loc === "ar"
        ? "مجمع الزمرد العالي الطبي - خدمات طب الأسنان والجلدية والليزر"
        : "Al-Zmorod Medical Complex - Dental, Dermatology & Laser Services",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const loc = locale as Locale;
  const dir = loc === "ar" ? "rtl" : "ltr";

  return (
    <html lang={loc} dir={dir}>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar locale={loc} />
        <main className="flex-1">{children}</main>
        <Footer locale={loc} />
        <WhatsAppFloat locale={loc} />
      </body>
    </html>
  );
}
