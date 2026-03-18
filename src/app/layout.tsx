import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sheetal Mukhida — Luxury Makeup & Hair Artist | Dubai",
  description:
    "Dubai's premier luxury makeup and hair artist. Specialising in bridal, editorial, and high-fashion looks. Available for weddings, fashion shoots, events, and on-location services across the UAE.",
  keywords: [
    "makeup artist Dubai",
    "hair artist Dubai",
    "bridal makeup Dubai",
    "luxury MUA Dubai",
    "editorial makeup UAE",
    "wedding makeup Dubai",
  ],
  openGraph: {
    title: "Sheetal Mukhida — Luxury Makeup & Hair Artist | Dubai",
    description:
      "Dubai's premier luxury makeup and hair artist. Bridal, editorial, and glam looks crafted with precision.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
