"use client";

import { FormEvent } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

const serviceOptions = [
  "Holiday Packages",
  "Passport Slots",
  "PCC Slots",
  "GCC Medical",
  "Visa Stamping",
  "Immigration",
  "Flight Tickets",
  "Bus Tickets",
  "Train Tickets",
];

export default function Enquiry({ compact = false }: { compact?: boolean }) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [...data.entries()]
      .map(([k, v]) => `${k}: ${String(v)}`)
      .join("\n");
    window.open(
      `${site.whatsappHref}?text=${encodeURIComponent(`CEO Travels enquiry\n${text}`)}`,
      "_blank",
    );
  };

  const fieldClass =
    "rounded-xl border border-border-default bg-white px-4 py-3 text-primary outline-none placeholder:text-secondary/60 focus:border-primary";

  return (
    <section className={compact ? "" : "mx-auto max-w-4xl px-4 sm:px-8 py-16"}>
      <Reveal>
        <div className="rounded-[2rem] border border-border-default bg-white p-6 sm:p-10 shadow-sm">
          <h2 className="font-serif text-3xl sm:text-4xl text-primary">
            Share details for a custom quote
          </h2>
          <p className="mt-2 text-secondary text-sm">
            We reply on WhatsApp ({site.whatsappLabel}), call ({site.phoneLabel}), or email — {site.hours.toLowerCase()}.
          </p>
          <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium text-primary">
              Your name
              <input name="name" required className={fieldClass} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-primary">
              Phone number
              <input name="phone" required type="tel" className={fieldClass} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-primary">
              Email
              <input name="email" type="email" className={fieldClass} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-primary">
              Departure city
              <input name="from" className={fieldClass} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-primary">
              Destination city
              <input name="to" className={fieldClass} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-primary">
              No. of people
              <input name="people" className={fieldClass} />
            </label>
            <label className="sm:col-span-2 grid gap-1.5 text-sm font-medium text-primary">
              Service needed
              <select name="service" className={fieldClass} defaultValue="Holiday Packages">
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="sm:col-span-2 rounded-full bg-accent py-3 font-semibold text-inverse hover:brightness-95 transition"
            >
              Submit enquiry via WhatsApp
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
