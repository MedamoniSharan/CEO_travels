"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

const mega = [
  {
    label: "Holiday Packages",
    href: "/offers",
    items: [
      { href: "/offers", label: "Singapore & Malaysia" },
      { href: "/offers", label: "Amazing Bhutan" },
      { href: "/offers", label: "Vietnam Grand Tour" },
    ],
  },
  {
    label: "Visa Services",
    href: "/services",
    items: [
      { href: "/services#passport-slots", label: "Passport Slots" },
      { href: "/services#pcc-slots", label: "PCC Slots" },
      { href: "/services#visa-stamping", label: "Visa Stamping" },
      { href: "/services#immigration", label: "Immigration" },
    ],
  },
  {
    label: "Book Tickets",
    href: "/services",
    items: [
      { href: "/services#flight-tickets", label: "Flight Tickets" },
      { href: "/services#bus-tickets", label: "Bus Tickets" },
      { href: "/services#train-tickets", label: "Train Tickets" },
      { href: "/services#gcc-medical", label: "GCC Medical" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border-default bg-white/98 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/95 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-8 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="CEO Travels"
            width={280}
            height={153}
            className="h-[4.5rem] sm:h-20 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-primary">
          {mega.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-primary hover:text-accent transition"
              >
                {item.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="min-w-52 rounded-2xl border border-border-default bg-white text-primary shadow-xl p-2">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block rounded-xl px-3 py-2 text-sm hover:bg-[#f7f8fa]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link href="/about" className="text-primary hover:text-accent transition">
            About Us
          </Link>
          <Link href="/contact" className="text-primary hover:text-accent transition">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-inverse hover:brightness-95 transition"
          >
            WhatsApp Us
          </a>
          <button
            type="button"
            className="lg:hidden h-11 w-11 rounded-full border border-border-default text-primary hover:bg-[#f7f8fa] transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="mx-auto h-5 w-5" /> : <Menu className="mx-auto h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border-default bg-white px-6 py-5 space-y-3 text-primary">
          {mega.map((item) => (
            <Link key={item.label} href={item.href} className="block py-2 text-lg">
              {item.label}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-lg border-t border-border-default"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.whatsappHref}
            className="block rounded-full bg-accent text-center py-3 font-semibold text-inverse"
          >
            WhatsApp {site.whatsapp}
          </a>
        </div>
      )}
    </header>
  );
}
