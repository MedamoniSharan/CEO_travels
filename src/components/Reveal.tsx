"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({
  children,
  className = "",
  y = 48,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, autoAlpha: 0, immediateRender: false },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
