import { testimonials } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 py-16 bg-white">
      <Reveal>
        <p className="text-accent tracking-[0.3em] uppercase text-xs font-semibold">What people say</p>
        <h2 className="font-serif text-3xl sm:text-5xl text-primary mt-2">
          Trusted journeys, calm paperwork
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3" data-scroll-stagger>
        {testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="h-full rounded-3xl border border-border-default bg-[#f7f8fa] p-7 shadow-sm"
          >
            <p className="text-secondary leading-7">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-6 text-accent-strong font-serif text-xl">{t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
