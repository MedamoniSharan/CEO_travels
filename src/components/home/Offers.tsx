"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { offers } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function Offers() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".offers-heading",
        { y: 30, autoAlpha: 0, immediateRender: false },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-8 py-16">
      <div className="offers-heading flex items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-gold tracking-[0.3em] uppercase text-xs">Special offers</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-navy mt-2">
            Enjoy with curated holidays
          </h2>
        </div>
        <Link href="/offers" className="text-sm text-navy border-b border-gold pb-0.5">
          View all offers
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6" data-scroll-stagger>
        {offers.map((o, index) => (
          <article
            key={o.title}
            className={`offer-card group overflow-hidden rounded-[1.75rem] bg-white shadow-sm border border-black/5 ${
              index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "lg:col-span-2 lg:col-start-4"
            }`}
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={o.image}
                alt={o.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                style={{ objectPosition: o.imagePosition ?? "center" }}
              />
              <span className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-inverse backdrop-blur-sm">
                {o.price}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-2xl text-navy">{o.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-6 line-clamp-3">{o.text}</p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-semibold text-gold"
              >
                Enquire now →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
