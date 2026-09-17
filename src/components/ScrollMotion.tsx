"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax ?? "0.12");
        gsap.fromTo(
          el,
          { y: -40 * amount },
          {
            y: 40 * amount,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.85,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-stagger]").forEach((container) => {
        const items = Array.from(container.children) as HTMLElement[];
        if (!items.length) return;

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 32, immediateRender: false },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-fade]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40, immediateRender: false },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          },
        );
      });

      const heroBg = document.querySelector<HTMLElement>(".hero-bg-img");
      if (heroBg) {
        gsap.to(heroBg, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: heroBg.closest("section") ?? heroBg,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
