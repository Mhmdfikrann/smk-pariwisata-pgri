import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { FloatingWhatsapp } from "@/components/site/floating-whatsapp";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { school, siteUrl } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "SMK Terbaik di Majalengka | SMK Pariwisata PGRI Majalengka",
    template: "%s | SMK Pariwisata PGRI Majalengka",
  },
  description:
    "SMK Pariwisata PGRI Majalengka adalah pilihan SMK terbaik di Majalengka untuk jurusan pariwisata, perhotelan, hospitality, dan PPDB siswa baru.",
  keywords: [
    "SMK terbaik di Majalengka",
    "SMK terbaik Majalengka",
    "SMK Pariwisata Majalengka",
    "SMK Pariwisata PGRI Majalengka",
    "SMK PGRI Majalengka",
    "SMK Perhotelan Majalengka",
    "PPDB SMK Majalengka",
  ],
  openGraph: {
    title: "SMK Terbaik di Majalengka - SMK Pariwisata PGRI Majalengka",
    description:
      "Profil sekolah, jurusan perhotelan dan pariwisata, fasilitas, kegiatan, prestasi, dan PPDB untuk calon siswa Majalengka.",
    url: siteUrl,
    siteName: school.publicName,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <TooltipProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingWhatsapp />
        </TooltipProvider>
      </body>
    </html>
  );
}
