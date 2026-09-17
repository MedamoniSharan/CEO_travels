import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-navy text-white py-20">
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <p className="text-gold tracking-[0.3em] uppercase text-xs">
            Experience the world with our company
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl mt-3 leading-tight">
            CEO Travels is a trusted booking desk for journeys that matter.
          </h2>
          <p className="mt-5 text-white/75 leading-7">
            From West Godavari we handle passport slots, PCC, GCC medical, visa
            stamping, immigration, and tickets around the clock. Fast
            coordination, honest fares, and people who pick up the phone.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-gold/30 px-5 py-4">
              <p className="text-gold font-serif text-3xl">24/7</p>
              <p className="text-sm text-white/70">Always available</p>
            </div>
            <div className="rounded-2xl border border-gold/30 px-5 py-4">
              <p className="text-gold font-serif text-3xl">8+</p>
              <p className="text-sm text-white/70">Core travel services</p>
            </div>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy"
          >
            About us
          </Link>
        </Reveal>
        <Reveal>
          <div className="grid gap-4">
            {[
              ["Visa Get In 2 Days", "Fast, easy paperwork support"],
              ["Best Travel Agents", "Hassle-free bookings, unforgettable journeys"],
              ["Explore More", "Domestic & international holiday packages"],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="text-gold font-serif text-xl">{title}</h3>
                <p className="text-sm text-white/70 mt-1">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
