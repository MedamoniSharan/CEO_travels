"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { popularFlights, site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const GAP = 24;
const AUTO_MS = 3500;

function getPerPage(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function PopularFlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [perPage, setPerPage] = useState(3);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, popularFlights.length - perPage);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const pages = getPerPage(viewport.clientWidth);
    setPerPage(pages);
    const width = (viewport.clientWidth - GAP * (pages - 1)) / pages;
    setCardWidth(width);
  }, []);

  useEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport) return;
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".flight-heading",
        { y: -28, autoAlpha: 0, immediateRender: false },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        },
      );
      gsap.fromTo(
        ".flight-carousel-wrap",
        { y: 40, autoAlpha: 0, immediateRender: false },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        },
      );

      gsap.to(".flight-bg-one", {
        x: 28,
        y: 18,
        rotation: 2,
        duration: 9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".flight-bg-two", {
        x: -22,
        y: -16,
        rotation: -3,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_MS);
    return () => clearInterval(timer);
  }, [paused, maxIndex]);

  const go = (direction: "prev" | "next") => {
    setIndex((i) => {
      if (direction === "next") return i >= maxIndex ? 0 : i + 1;
      return i <= 0 ? maxIndex : i - 1;
    });
  };

  const step = cardWidth + GAP;

  return (
    <section
      ref={sectionRef}
      className="flight_bg relative overflow-hidden py-16 sm:py-20"
    >
      <div
        className="flight-bg-one absolute -left-8 top-6 w-[min(92vw,720px)] opacity-90 sm:left-0 sm:top-4"
        data-parallax="0.18"
      >
        <Image
          src="/planes-bg.png"
          alt=""
          width={1600}
          height={379}
          className="h-auto w-full"
          aria-hidden
        />
      </div>
      <div
        className="flight-bg-two absolute -right-4 bottom-8 w-[min(55vw,320px)] opacity-85 sm:right-6 sm:bottom-10"
        data-parallax="0.24"
      >
        <Image
          src="/plane-trail.png"
          alt=""
          width={281}
          height={148}
          className="h-auto w-full"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flight-heading mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#12324d]">
            Find Your <span className="text-[#1a6bb5]">Perfect Flight</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink/65 leading-7">
            Easily find and book your perfect flight with the best deals and
            flexible options. Compare airlines, choose your preferred schedule,
            and enjoy a seamless travel experience from start to finish.
          </p>
        </div>

        <div
          className="flight-carousel-wrap relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div ref={viewportRef} className="flight-viewport px-1">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out will-change-transform"
              style={{
                transform: `translateX(-${index * step}px)`,
              }}
            >
              {popularFlights.map((flight) => (
                <article
                  key={`${flight.from}-${flight.to}`}
                  className="flight-card shrink-0 text-center"
                  style={{ width: cardWidth > 0 ? cardWidth : undefined }}
                >
                  <a
                    href={whatsappFor(flight.from, flight.to, flight.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="aeroplane-window-group block"
                  >
                    <div className="aeroplane-window-wrap">
                      <div className="aeroplane-window">
                        <div className="aeroplane-window__photo">
                          <Image
                            src={flight.image}
                            alt={`${flight.from} to ${flight.to}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 290px"
                            draggable={false}
                          />
                        </div>
                        <Image
                          src="/plane-window-frame.png"
                          alt=""
                          width={570}
                          height={736}
                          className="aeroplane-window__frame"
                          aria-hidden
                          draggable={false}
                        />
                      </div>
                    </div>
                  </a>
                  <h3 className="mt-6 text-xl sm:text-[22px] font-semibold text-[#12324d]">
                    {flight.from} to {flight.to}
                  </h3>
                  <p className="mt-1 text-ink/50">{flight.price}</p>
                  <a
                    href={whatsappFor(flight.from, flight.to, flight.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-pill bg-accent px-8 py-2.5 text-sm font-semibold text-inverse shadow-md shadow-accent/25 hover:brightness-95 transition focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent-strong"
                  >
                    Book Flight
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2 pr-1">
            <button
              type="button"
              onClick={() => go("prev")}
              aria-label="Previous flights"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-200 bg-white text-[#2f7de1] shadow-sm transition hover:bg-sky-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go("next")}
              aria-label="Next flights"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-200 bg-white text-[#2f7de1] shadow-sm transition hover:bg-sky-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function whatsappFor(from: string, to: string, price: string) {
  const text = `CEO Travels flight enquiry: ${from} to ${to} (${price}). Please share availability.`;
  return `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
}
