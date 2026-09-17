export const site = {
  name: "CEO Travels",
  tagline: "Your Journey Our Responsibility",
  phone: "7671825259",
  phoneLabel: "Office line",
  phoneHref: "tel:+917671825259",
  whatsapp: "9392742327",
  whatsappLabel: "WhatsApp enquiries",
  whatsappHref: "https://wa.me/919392742327",
  email: "ceotravels7747@gmail.com",
  emailHref: "mailto:ceotravels7747@gmail.com",
  address: "West Godavari District, Andhra Pradesh, India",
  mapsQuery: "West Godavari, Andhra Pradesh, India",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=West+Godavari+Andhra+Pradesh+India",
  hours: "24/7 — Open all days",
  instagram: "https://www.instagram.com/ceo__travels",
  url: "https://ceotravels.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact" },
];

export function serviceWhatsapp(title: string) {
  return `${site.whatsappHref}?text=${encodeURIComponent(
    `Hello CEO Travels, I need help with ${title}.`,
  )}`;
}

export const services = [
  {
    slug: "passport-slots",
    title: "Passport Slots",
    short: "Priority passport appointment booking",
    description:
      "We help you secure passport appointment slots quickly, with end-to-end guidance on documents, photos, and application status.",
  },
  {
    slug: "pcc-slots",
    title: "PCC Slots",
    short: "Police Clearance Certificate appointments",
    description:
      "Book PCC slots without the usual hassle. Ideal for visa, immigration, and overseas employment paperwork.",
  },
  {
    slug: "gcc-medical",
    title: "GCC Medical",
    short: "Medicals for Gulf employment",
    description:
      "Assistance for GCC medical appointments and coordination so your Gulf employment process stays on schedule.",
  },
  {
    slug: "visa-stamping",
    title: "Visa Stamping",
    short: "Stamping support for travel & work",
    description:
      "Complete visa stamping support with document checks, timelines, and follow-up until your passport is ready.",
  },
  {
    slug: "immigration",
    title: "Immigration",
    short: "Guidance for overseas processing",
    description:
      "Practical immigration assistance — from paperwork to appointments — so you can move abroad with confidence.",
  },
  {
    slug: "flight-tickets",
    title: "Flight Tickets",
    short: "Domestic & international fares",
    description:
      "Compare and book flights with flexible dates, student/senior options, and 24/7 support for changes.",
  },
  {
    slug: "bus-tickets",
    title: "Bus Tickets",
    short: "Intercity bus reservations",
    description:
      "Reserve comfortable bus seats across popular routes with instant confirmation and easy rescheduling help.",
  },
  {
    slug: "train-tickets",
    title: "Train Tickets",
    short: "IRCTC-style train booking help",
    description:
      "We help you find trains, berths, and confirming tickets for family and group travel across India.",
  },
  {
    slug: "car-rental",
    title: "Car Rental",
    short: "Self-drive and chauffeur cars",
    description:
      "Book a car for airport drops, outstation trips, or local travel — with flexible duration and 24/7 support from West Godavari.",
  },
  {
    slug: "pan-card",
    title: "PAN Card",
    short: "New PAN and updates online",
    description:
      "Apply for a new PAN card or update name, address, and other details without standing in queues.",
  },
  {
    slug: "electricity-bill",
    title: "Electricity Bill",
    short: "Pay power bills instantly",
    description:
      "Pay electricity bills quickly and get confirmation on WhatsApp — handy for home, shop, and family accounts.",
  },
  {
    slug: "mobile-recharges",
    title: "Mobile Recharges",
    short: "Prepaid recharges for all networks",
    description:
      "Recharge any prepaid mobile number on the spot. Tell us the number and plan — we handle the rest.",
  },
];

export const offers = [
  {
    title: "Unbelievable Singapore",
    price: "INR 1,53,999/-",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&h=1000&q=85",
    imagePosition: "center 35%",
    text: "A captivating 6-night journey through Singapore and Malaysia — Gardens by the Bay, Universal Studios, Kuala Lumpur, and Genting Highlands with Indian meals and seamless transfers.",
  },
  {
    title: "Experience Ladakh",
    price: "INR 34,999/-",
    image:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1600&h=1000&q=85",
    imagePosition: "center center",
    text: "Leh, Sham Valley, Khardung-La, Nubra, and Pangong Lake. High-altitude magic with monasteries, desert dunes, and Himalayan landscapes.",
  },
  {
    title: "Amazing Bhutan",
    price: "INR 49,999/-",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1600&h=1000&q=85",
    imagePosition: "center 40%",
    text: "Thimphu, Punakha, and Paro including the iconic Taktshang Monastery. Culture, dzongs, and mountain serenity in one complete tour.",
  },
  {
    title: "Malaysian Extra Vaganza",
    price: "INR 59,999/-",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&h=1000&q=85",
    imagePosition: "center 30%",
    text: "Seven days across Kuala Lumpur, Genting Highlands, and Langkawi — skyline views, theme parks, and a sunset cruise on the Andaman Sea.",
  },
  {
    title: "Vietnam Grand Tour",
    price: "INR 1,22,999/-",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&h=1000&q=85",
    imagePosition: "center center",
    text: "Hanoi, Halong Bay, Da Nang, Hoi An, Ho Chi Minh City, and Phu Quoc. A north-to-south Vietnam experience with comfort and culture.",
  },
];

export const destinations = [
  {
    name: "Goa",
    tag: "Domestic",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=800&q=90",
  },
  {
    name: "Kerala",
    tag: "Domestic",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&h=800&q=90",
  },
  {
    name: "Ladakh",
    tag: "Domestic",
    image:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&h=800&q=90",
  },
  {
    name: "Paris",
    tag: "International",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&h=800&q=90",
  },
  {
    name: "Thailand",
    tag: "International",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&h=800&q=90",
  },
  {
    name: "Dubai",
    tag: "International",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&h=800&q=90",
  },
];

export const popularFlights = [
  {
    from: "Hyderabad",
    to: "Dubai",
    price: "₹ 8,500",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80",
  },
  {
    from: "Rajahmundry",
    to: "Hyderabad",
    price: "₹ 3,500",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",
  },
  {
    from: "Vijayawada",
    to: "Singapore",
    price: "₹ 14,000",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
  },
  {
    from: "Hyderabad",
    to: "Bangkok",
    price: "₹ 11,000",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80",
  },
  {
    from: "Delhi",
    to: "Dubai",
    price: "₹ 12,000",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    name: "Ajay Kumar",
    quote:
      "Passport slot booking was handled quickly and professionally. CEO Travels kept us updated at every step.",
  },
  {
    name: "Arti",
    quote:
      "We booked flights and GCC medical together. The process was smooth, transparent, and stress-free.",
  },
  {
    name: "Hema Pandey",
    quote:
      "Visa stamping and immigration guidance were excellent. Highly recommended for family travel from West Godavari.",
  },
];
