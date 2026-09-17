import Image from "next/image";
import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border-default bg-[#f7f8fa] text-primary">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt="CEO Travels"
            width={340}
            height={186}
            className="h-32 sm:h-36 w-auto object-contain mb-4"
          />
          <p className="text-accent text-sm tracking-[0.28em] uppercase font-semibold">
            {site.tagline}
          </p>
          <p className="mt-4 text-secondary text-sm leading-7">
            Passport slots, PCC, GCC medical, visa stamping, immigration, and
            tickets — available 24 hours a day from West Godavari.
          </p>
        </div>

        <div>
          <h3 className="text-accent-strong font-semibold text-xl mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-secondary">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-accent transition">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-accent-strong font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-secondary">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent transition">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.whatsappHref} className="hover:text-accent transition">
                WhatsApp enquiries
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-accent-strong font-semibold text-xl mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-secondary">
            <li>📍 {site.address}</li>
            <li>
              📱 {site.phoneLabel}:{" "}
              <a href={site.phoneHref} className="hover:text-accent transition">
                {site.phone}
              </a>
            </li>
            <li>
              💬 {site.whatsappLabel}:{" "}
              <a href={site.whatsappHref} className="hover:text-accent transition">
                {site.whatsapp}
              </a>
            </li>
            <li>
              ✉️{" "}
              <a href={site.emailHref} className="hover:text-accent transition">
                {site.email}
              </a>
            </li>
            <li>🕒 {site.hours}</li>
            <li>
              📸{" "}
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition"
              >
                @ceo__travels
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border-default py-5 text-center text-xs text-secondary">
        © {new Date().getFullYear()} CEO Travels. All Rights Reserved.
      </div>
    </footer>
  );
}
