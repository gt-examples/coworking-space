import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import { getGT } from "gt-next/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();
  const title = gt("CoWork Hub | General Translation");
  const description = gt("A multilingual coworking space booking platform demonstrating internationalization with General Translation. Browse spaces, compare memberships, and discover events.");
  return {
    title,
    description,
    openGraph: { title, description, locale, type: "website", siteName: "General Translation" },
    twitter: { card: "summary", title, description },
    alternates: {
      canonical: "https://coworking-space.generaltranslation.dev",
      languages: { en: "/en", es: "/es", fr: "/fr", ja: "/ja", zh: "/zh" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased bg-[#18181B] text-zinc-100`}>
        <GTProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </GTProvider>
      </body>
    </html>
  );
}
