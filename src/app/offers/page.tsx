import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { offers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "Holiday packages from CEO Travels — Singapore, Ladakh, Bhutan, Malaysia, Vietnam and more at special prices.",
};

export default function OffersPage() {
  return (
    <>
      <section className="bg-[#f7f8fa] pt-28 pb-20 text-center border-b border-border-default">
        <p className="text-accent tracking-[0.3em] uppercase text-xs font-semibold">Holiday packages</p>
        <h1 className="font-serif text-4xl sm:text-6xl text-primary mt-3">Special Offers</h1>
      </section>
      <section className="mx-auto max-w-6xl px-4 sm:px-8 py-16 space-y-10">
        {offers.map((o) => (
          <Reveal key={o.title}>
            <article className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] bg-white border border-black/5">
              <div className="relative min-h-[280px] sm:min-h-[320px]">
                <Image
                  src={o.image}
                  alt={o.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: o.imagePosition ?? "center" }}
                />
              </div>
              <div className="p-7 sm:p-10">
                <p className="text-gold font-semibold">{o.price}</p>
                <h2 className="font-serif text-3xl text-navy mt-2">{o.title}</h2>
                <p className="mt-4 text-ink/70 leading-7">{o.text}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm text-inverse font-semibold hover:brightness-95 transition"
                >
                  Book this offer
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
