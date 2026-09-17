import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollMotion from "@/components/ScrollMotion";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Flights, Visa, Passport & Tickets`,
    template: `%s | ${site.name}`,
  },
  description:
    "CEO Travels — passport slots, PCC, GCC medical, visa stamping, immigration, flight, bus and train tickets. 24/7 service in West Godavari.",
  keywords: [
    "CEO Travels",
    "West Godavari travel agency",
    "passport slots",
    "visa stamping",
    "GCC medical",
    "holiday packages",
    "flight tickets",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Flights, Visa, Passport & Tickets`,
    description:
      "Passport slots, PCC, GCC medical, visa stamping, immigration, and tickets — 24/7 from West Godavari.",
    images: [{ url: "/logo.png", width: 512, height: 280, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description:
      "Your journey, our responsibility — travel services from West Godavari, 24/7.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface-card text-primary">
        <Header />
        <ScrollMotion />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
