import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { serviceWhatsapp, services, site } from "@/lib/site";
import {
  Bus,
  FileText,
  Globe,
  IdCard,
  Plane,
  Stethoscope,
  Stamp,
  Train,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Passport slots, PCC, GCC medical, visa stamping, immigration, and flight, bus, and train tickets — all from CEO Travels, West Godavari.",
};

const serviceIcons: Record<string, LucideIcon> = {
  "passport-slots": IdCard,
  "pcc-slots": FileText,
  "gcc-medical": Stethoscope,
  "visa-stamping": Stamp,
  immigration: Globe,
  "flight-tickets": Plane,
  "bus-tickets": Bus,
  "train-tickets": Train,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[42vh] min-h-[280px] overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=80"
          alt="Flights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/55" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-serif text-4xl sm:text-6xl text-primary">
            Our Services
          </h1>
          <p className="mt-3 text-secondary">
            Documentation, medicals, and tickets under one roof — {site.hours}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-16">
        <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-2xl border border-black/8 bg-cream px-4 py-3 text-sm font-medium text-navy hover:border-gold hover:bg-white transition"
            >
              {s.title}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug] ?? Plane;
            return (
              <Reveal key={s.slug}>
                <article
                  id={s.slug}
                  className="scroll-mt-28 rounded-3xl border border-black/5 bg-white p-7 h-full shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl text-navy">
                        {s.title}
                      </h2>
                      <p className="mt-1 text-sm text-gold font-medium">
                        {s.short}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-ink/70 leading-7">{s.description}</p>
                  <a
                    href={serviceWhatsapp(s.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-pill bg-accent px-6 py-2.5 text-sm font-semibold text-inverse hover:brightness-95 transition focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent-strong"
                  >
                    Book / Enquire on WhatsApp
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <EnquiryForm />
    </>
  );
}
