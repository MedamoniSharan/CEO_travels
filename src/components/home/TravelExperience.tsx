"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TravelIllustration from "./TravelIllustration";
import TravelAbout from "./TravelAbout";

gsap.registerPlugin(ScrollTrigger);

export default function TravelExperience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".travel-experience__art",
        { x: -40, autoAlpha: 0, immediateRender: false },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
        },
      );
      gsap.fromTo(
        ".travel-experience__copy",
        { x: 40, autoAlpha: 0, immediateRender: false },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="travel-experience bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-14">
        <div
          className="travel-experience__art flex justify-center lg:justify-start"
          data-parallax="0.14"
        >
          <TravelIllustration />
        </div>
        <div className="travel-experience__copy">
          <TravelAbout />
        </div>
      </div>
    </section>
  );
}
