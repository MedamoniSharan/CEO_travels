"use client";

import Hero from "@/components/home/Hero";
import PopularFlights from "@/components/home/PopularFlights";
import Offers from "@/components/home/Offers";
import TravelExperience from "@/components/home/TravelExperience";
import TouristStream from "@/components/home/TouristStream";
import Destinations from "@/components/home/Destinations";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularFlights />
      <ServicesGrid />
      <TravelExperience />
      <TouristStream />
      <Destinations />
      <Testimonials />
      <Offers />
      <EnquiryForm />
    </>
  );
}
