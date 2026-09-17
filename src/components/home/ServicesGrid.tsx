"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services, site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-heading",
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
    <section
      id="services"
      ref={ref}
      className="bg-[#f7f8fa] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="services-heading mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-accent-strong">
            Our Services
          </h2>
          <p className="mt-5 text-sm sm:text-base text-secondary leading-7">
            As a trusted travel partner from {site.address.split(",")[0]}, CEO
            Travels offers passport, visa, tickets, car rental, PAN card,
            electricity bills, and mobile recharges with reliable support —{" "}
            {site.hours.toLowerCase()}.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-scroll-stagger>
          {services.map((s) => (
            <Link
              key={s.slug}
              id={s.slug}
              href={`/services#${s.slug}`}
              className="group block h-full rounded-2xl border border-border-default bg-white p-6 sm:p-7 shadow-sm transition hover:border-accent-strong/25 hover:shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold leading-snug text-accent-strong transition group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-secondary leading-6">
                {s.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="services-heading mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-pill border border-accent-strong/30 bg-white px-8 py-3 text-sm font-semibold text-accent-strong transition hover:border-accent-strong hover:bg-accent-strong hover:text-inverse"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
