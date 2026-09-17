import Link from "next/link";
import { ArrowRight, FileCheck, Users } from "lucide-react";

export default function TravelAbout() {
  return (
    <div className="travel-about w-full">
      <section className="travel-about__content" aria-labelledby="travel-about-title">
        <h1 id="travel-about-title">
          Experience the World with <strong>Our Company</strong>
        </h1>
        <div className="travel-about__details">
          <p>
            CEO Travels offers budget-friendly vacation packages across India and
            abroad — from Himalayan trails to spiritual retreats in northern
            monasteries. We also handle passport slots, PCC, GCC medical, visa
            stamping, and tickets from West Godavari, 24 hours a day.
          </p>
          <div className="travel-about__features">
            <article className="travel-about__feature">
              <div className="travel-about__icon-title">
                <div className="travel-about__icon flex h-[65px] w-[65px] items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <FileCheck className="h-8 w-8" aria-hidden />
                </div>
                <h2>Visa Get In 2 Days</h2>
              </div>
              <p>
                Fast visa assistance for eligible destinations — subject to
                embassy processing times and complete documentation.
              </p>
            </article>
            <article className="travel-about__feature">
              <div className="travel-about__icon-title">
                <div className="travel-about__icon flex h-[65px] w-[65px] items-center justify-center rounded-2xl bg-accent-strong/10 text-accent-strong">
                  <Users className="h-8 w-8" aria-hidden />
                </div>
                <h2>Best Travel Agents</h2>
              </div>
              <p>
                Best agents for hassle-free bookings and unforgettable journeys.
              </p>
            </article>
          </div>
          <Link
            className="travel-about__link"
            href="/about"
            aria-label="Explore more about CEO Travels"
          >
            <span>Explore More</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
