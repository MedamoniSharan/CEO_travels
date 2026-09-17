import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CEO Travels — a 24-hour travel desk in West Godavari for passport slots, visas, GCC medical, and holiday packages.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[42vh] min-h-[280px] overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=80"
          alt="Travel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-accent tracking-[0.35em] uppercase text-xs font-semibold">CEO Travels</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-primary mt-2">About Us</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Image
            src="/logo.png"
            alt="CEO Travels logo"
            width={854}
            height={489}
            className="w-full object-contain"
          />
        </Reveal>
        <Reveal>
          <p className="text-gold tracking-[0.3em] uppercase text-xs">{site.tagline}</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-navy mt-3">
            A 24-hour travel desk for West Godavari
          </h2>
          <p className="mt-5 text-ink/75 leading-8">
            CEO Travels helps families, students, and working professionals
            move with confidence. We specialise in passport slots, PCC slots,
            GCC medicals, visa stamping, immigration support, everyday tickets,
            car rental, and online services such as PAN card, electricity bills,
            and mobile recharges.
          </p>
          <p className="mt-4 text-ink/75 leading-8">
            From first enquiry to final boarding pass, our team stays with you.
            Talk to us any hour — Monday to Sunday, including weekends — and we
            take responsibility for the next step of your journey.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink/80">
            <li>📍 {site.address}</li>
            <li>🕒 {site.hours}</li>
            <li>
              📱 {site.phoneLabel}:{" "}
              <a href={site.phoneHref} className="text-accent hover:underline">
                {site.phone}
              </a>
            </li>
            <li>
              💬 {site.whatsappLabel}:{" "}
              <a href={site.whatsappHref} className="text-accent hover:underline">
                {site.whatsapp}
              </a>
            </li>
            <li>
              ✉️{" "}
              <a href={site.emailHref} className="text-accent hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </Reveal>
      </section>
    </>
  );
}
