"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { BadgeCheck, Heart, Headset, Search } from "lucide-react";
import SplitText from "@/components/SplitText";
import { site } from "@/lib/site";

export default function Hero() {
  const wrap = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-search",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.35, ease: "power3.out" },
      );
      gsap.fromTo(
        ".hero-trust",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.55, ease: "power3.out" },
      );
      gsap.fromTo(
        ".hero-bg-img",
        { scale: 1.18 },
        {
          scale: 1.42,
          duration: 18,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    }, wrap);
    return () => ctx.revert();
  }, []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = query.trim()
      ? `CEO Travels enquiry: I want to plan a trip to ${query}`
      : "Hello CEO Travels, I would like to plan my next holiday.";
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      ref={wrap}
      data-no-scroll
      className="relative isolate min-h-[75svh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden" data-parallax="0.08">
        <Image
          src="/hero.jpg"
          alt="Tropical islands at sunrise"
          fill
          priority
          className="hero-bg-img object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />

      <div className="relative z-10 w-full px-4 pt-24 pb-16 text-center">
        <SplitText
          text="Plan And Book Your Next Holiday"
          tag="h1"
          splitType="words"
          delay={40}
          duration={0.7}
          rootMargin="0px"
          threshold={0.2}
          className="hero-title !overflow-visible mx-auto block w-full max-w-4xl font-sans text-[2.1rem] leading-[1.15] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
          textAlign="center"
        />

        <form
          onSubmit={submit}
          className="hero-search mx-auto mt-8 sm:mt-10 flex w-full max-w-[560px] items-center gap-3 rounded-full bg-white px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
        >
          <Search className="h-5 w-5 shrink-0 text-ink/45" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try "Switzerland"'
            className="min-w-0 flex-1 bg-transparent text-[15px] sm:text-base text-ink outline-none placeholder:text-ink/40"
            aria-label="Search destination"
          />
          <button
            type="submit"
            className="hidden sm:inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-inverse"
          >
            Search
          </button>
        </form>

        <ul className="hero-trust mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] sm:text-sm text-white/95 drop-shadow">
          <li className="inline-flex items-center gap-1.5">
            <Headset className="h-4 w-4" />
            24*7 Support
          </li>
          <li className="hidden sm:inline text-white/50">|</li>
          <li className="inline-flex items-center gap-1.5">
            <Heart className="h-4 w-4" />
            100% personalised trips
          </li>
          <li className="hidden sm:inline text-white/50">|</li>
          <li className="inline-flex items-center gap-1.5">
            <BadgeCheck className="h-4 w-4" />
            Best prices guaranteed
          </li>
        </ul>
      </div>
    </section>
  );
}
