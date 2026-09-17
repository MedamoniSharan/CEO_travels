import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CEO Travels in West Godavari — call, WhatsApp, or email for tickets, car rental, PAN card, bills, and holiday packages. Open 24/7.",
};

const contacts = [
  {
    label: site.phoneLabel,
    value: site.phone,
    href: site.phoneHref,
    hint: "Call for urgent bookings",
  },
  {
    label: site.whatsappLabel,
    value: site.whatsapp,
    href: site.whatsappHref,
    hint: "Fastest for quotes & documents",
  },
  {
    label: "Email",
    value: site.email,
    href: site.emailHref,
    hint: "Detailed itineraries & attachments",
  },
  {
    label: "Address",
    value: site.address,
    href: site.mapsUrl,
    hint: "West Godavari, Andhra Pradesh",
  },
  {
    label: "Hours",
    value: site.hours,
    href: "",
    hint: "",
  },
  {
    label: "Instagram",
    value: "@ceo__travels",
    href: site.instagram,
    hint: "Latest offers & travel tips",
  },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

  return (
    <>
      <section className="relative h-[36vh] min-h-[240px] overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=80"
          alt="Contact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/55" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="font-serif text-4xl sm:text-6xl text-primary">Contact Us</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-8 py-16 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="space-y-4">
            {contacts.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white border border-black/5 p-5"
              >
                <p className="text-xs uppercase tracking-widest text-gold">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-1 block text-lg text-navy hover:text-accent transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg text-navy">{item.value}</p>
                )}
                {item.hint && (
                  <p className="mt-1 text-sm text-secondary">{item.hint}</p>
                )}
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-black/5">
              <iframe
                title="CEO Travels location on Google Maps"
                src={mapSrc}
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="block bg-white px-5 py-3 text-sm font-medium text-accent hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </Reveal>
        <EnquiryForm compact />
      </section>
    </>
  );
}
