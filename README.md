# Coworking Space

A multilingual coworking space booking platform demonstrating internationalization with General Translation and Next.js. Browse flexible workspaces, compare membership plans, RSVP to community events, and explore availability calendars — all fully translated.

**[Live Demo](https://coworking-space.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app showcases a realistic coworking space website with space browsing, membership comparison, event listings, and a booking calendar. Every piece of user-facing content is internationalized using General Translation's `gt-next` library, demonstrating how to handle complex real-world i18n scenarios including pluralization, currency formatting, date/time display, and conditional content by locale.

## GT Features Used

- `<T>` — JSX translation (wide wrapping pattern)
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<DateTime>` — Date/time formatting
- `<Plural>` — Pluralization (spot counts, result counts)
- `<Branch>` — Conditional rendering by space type
- `<LocaleSelector>` — Language picker
- `getGT` / `useGT` — String translations for dynamic data
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/coworking-space.git
cd coworking-space
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
