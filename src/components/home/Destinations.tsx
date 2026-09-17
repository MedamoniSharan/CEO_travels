"use client";

import Image from "next/image";
import { useState } from "react";
import { destinations } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Destinations() {
  const [filter, setFilter] = useState("All");
  const list =
    filter === "All"
      ? destinations
      : destinations.filter((d) => d.tag === filter);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 py-16">
      <Reveal>
        <p className="text-gold tracking-[0.3em] uppercase text-xs">Destinations</p>
        <h2 className="font-serif text-3xl sm:text-5xl text-navy mt-2 max-w-2xl">
          Let&apos;s explore the most beautiful places in the world
        </h2>
      </Reveal>
      <div className="mt-6 flex gap-2">
        {["All", "Domestic", "International"].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm ${
              filter === f ? "bg-primary text-inverse" : "bg-white border border-black/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-scroll-stagger>
        {list.map((d) => (
            <article key={d.name} className="group relative h-72 overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover brightness-[1.08] saturate-[1.15] contrast-[1.04] transition duration-700 group-hover:scale-105 group-hover:brightness-[1.12] group-hover:saturate-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest">
                  {d.tag}
                </p>
                <h3 className="font-serif text-3xl text-white drop-shadow-sm">
                  {d.name}
                </h3>
              </div>
            </article>
        ))}
      </div>
    </section>
  );
}
