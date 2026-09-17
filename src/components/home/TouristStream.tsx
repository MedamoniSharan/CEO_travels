"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { site } from "@/lib/site";

const touristImages = [
  {
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    alt: "Paris, France",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    alt: "Dubai, UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    alt: "Singapore",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    alt: "Switzerland Alps",
  },
  {
    src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1400&q=80",
    alt: "Thailand",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    alt: "Maldives beach",
  },
  {
    src: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80",
    alt: "Santorini, Greece",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1400&h=1000&q=90",
    alt: "Tokyo, Japan",
  },
  {
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=80",
    alt: "New York City",
  },
  {
    src: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=80",
    alt: "Ladakh, India",
  },
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&h=1000&q=90",
    alt: "Goa, India",
  },
  {
    src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1400&q=80",
    alt: "Bhutan",
  },
];

export default function TouristStream() {
  return (
    <section id="top-destinations" data-no-scroll className="w-full bg-[#f7f8fa]">
      <ImageStreamHero
        images={touristImages}
        cards={12}
        speed={22}
        axis={52}
        path={{
          cardRadius: 1.8,
          cardWidth: 20,
          cardHeight: 27,
          railBirth: -16,
          railExit: 50,
          exitHeight: 50,
        }}
        className="h-[min(80vh,760px)] w-full"
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 sm:py-16 text-center">
          <div className="px-6">
            <p className="mb-3 inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-[0.3em] uppercase">
              <MapPin className="h-4 w-4" />
              Top Tourist Destinations
            </p>
            <h2 className="text-balance text-3xl sm:text-5xl font-semibold tracking-tight text-primary">
              Explore the most
              <br />
              beautiful places on earth
            </h2>
          </div>
          <div className="max-w-lg px-6">
            <p className="text-balance text-sm sm:text-base text-secondary leading-7">
              Paris, Dubai, Singapore, Switzerland, Thailand, Maldives, Tokyo,
              and more — curated by {site.name} from West Godavari.
            </p>
            <Link
              href="/offers"
              className="mt-6 inline-flex rounded-pill bg-accent px-8 py-3 text-sm font-semibold text-inverse hover:brightness-95 transition focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent-strong"
            >
              View Holiday Packages
            </Link>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
}
