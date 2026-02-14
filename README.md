# مجمع الزمرد العالي الطبي | Al-Zmorod Medical Complex

A bilingual (Arabic + English) website for Al-Zmorod Medical Complex, built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- **Bilingual**: Full Arabic (RTL) and English (LTR) support
- **5 Pages**: Home, Services, Offers, Location & Hours, Contact
- **WhatsApp Integration**: Floating WhatsApp button + CTAs throughout
- **Responsive**: Mobile-first design, works on all devices
- **SEO Ready**: Meta titles, descriptions, and hreflang tags per locale
- **Static Generation**: All pages are statically generated for fast loading

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: IBM Plex Sans Arabic + Inter (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── content/          # Markdown content files (AR + EN)
│   ├── ar/           # Arabic content
│   └── en/           # English content
├── src/
│   ├── app/
│   │   ├── [locale]/ # Locale-aware pages
│   │   ├── layout.tsx
│   │   └── page.tsx  # Root redirect to /ar
│   ├── components/   # Reusable UI components
│   ├── lib/          # Utilities, constants, i18n
│   └── middleware.ts  # Locale routing middleware
└── public/
    └── logo.jpg      # Clinic logo
```

## Routing

- `/` → redirects to `/ar`
- `/ar` → Arabic home page (RTL)
- `/en` → English home page (LTR)
- `/ar/services`, `/en/services` → Services
- `/ar/offers`, `/en/offers` → Offers
- `/ar/location`, `/en/location` → Location & Hours
- `/ar/contact`, `/en/contact` → Contact

## Color Palette

Derived from the official clinic logo (deep teal-emerald):

| Token       | Hex       | Usage                    |
|-------------|-----------|--------------------------|
| brand-600   | `#0A6B5C` | Primary brand color      |
| brand-700   | `#085A4D` | Hover states             |
| brand-50    | `#E6F5F1` | Light backgrounds        |
| brand-900   | `#043B33` | Footer, dark sections    |
| whatsapp    | `#25D366` | WhatsApp CTAs            |

## External Data (Not in Site Content)

The following data requires client confirmation before being added:

- Laser / Dentistry pricing
- Phone numbers
- Textual address
- Additional social media links beyond Instagram
