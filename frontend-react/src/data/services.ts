import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "jeddah-airport-transfer",
    title: "Jeddah Airport Transfer",
    shortDescription: "Meet & greet arrivals and departures at King Abdulaziz Airport.",
    description:
      "Our driver tracks your flight and waits at arrivals with a name board, assisting with luggage and taking you straight to Makkah or Madinah — no queuing for shared transport.",
    image: "/jaddah.jpg",
    features: ["Flight tracking", "Meet & greet", "Free waiting time", "24/7 availability"],
    priceFrom: 250,
    currency: "SAR",
  },
  {
    slug: "makkah-hotel-transfer",
    title: "Makkah Hotel Transfer",
    shortDescription: "Point-to-point transfers between Makkah hotels and the Haram.",
    description:
      "Short-distance transfers within Makkah for hotel changes, Ziyarah trips, or moving your group between properties near the Haram.",
    image: "/makkah.jpg",
    features: ["Near-Haram pickup", "Group friendly", "On-demand booking", "Fixed price"],
    priceFrom: 80,
    currency: "SAR",
  },
  {
    slug: "makkah-to-madinah",
    title: "Makkah to Madinah",
    shortDescription: "Comfortable one-way transfer between the two holy cities.",
    description:
      "Direct, non-stop transfer from Makkah to Madinah in a clean, air-conditioned vehicle with an experienced driver who knows the route and rest-stop timing around prayer times.",
    image: "/maktomad.jpg",
    features: ["Direct route", "Prayer-time friendly stops", "Meet & greet", "Fixed price"],
    priceFrom: 450,
    currency: "SAR",
  },
  {
    slug: "madinah-hotel-transfer",
    title: "Madinah Hotel Transfer",
    shortDescription: "Point-to-point transfers between Madinah hotels and the Masjid.",
    description:
      "Short transfers within Madinah between your hotel and Masjid an-Nabawi, or between hotels for group re-arrangements.",
    image: "/madina.jpg",
    features: ["Near-Masjid pickup", "Group friendly", "On-demand booking", "Fixed price"],
    priceFrom: 80,
    currency: "SAR",
  },
  {
    slug: "madinah-to-makkah",
    title: "Madinah to Makkah",
    shortDescription: "Comfortable one-way transfer back to Makkah.",
    description:
      "Reliable return transfer from Madinah to Makkah, timed around your Ziyarah schedule, with door-to-door pickup from your hotel.",
    image: "/madtomak.jpg",
    features: ["Door-to-door pickup", "Flexible timing", "Luggage assistance", "Fixed price"],
    priceFrom: 450,
    currency: "SAR",
  },
  {
    slug: "haram-transport",
    title: "Haram Transport",
    shortDescription: "Scheduled trips to and from the Haram for prayer times.",
    description:
      "Regular transport to the Haram timed around the five daily prayers, ideal for pilgrims staying slightly further out who don't want to walk long distances in the heat.",
    image: "/haram.jpg",
    features: ["Prayer-time schedule", "Short wait times", "Elderly friendly", "Fixed price"],
    priceFrom: 60,
    currency: "SAR",
  },
  {
    slug: "umrah-transport",
    title: "Umrah Transport",
    shortDescription: "Complete transport package for your Umrah journey.",
    description:
      "End-to-end transport covering airport pickup, Makkah and Madinah transfers, and Ziyarah tours — a single reliable driver for your whole Umrah trip.",
    image: "/service3.jpg",
    features: ["Full itinerary support", "Single point of contact", "Ziyarah tours included", "Custom packages"],
    priceFrom: 900,
    currency: "SAR",
  },
  {
    slug: "hajj-transport",
    title: "Hajj Transport",
    shortDescription: "Dedicated transport for the Hajj season and the holy sites.",
    description:
      "Coordinated transport for Hajj including Mina, Arafat, and Muzdalifah movements, planned around official routing and permits during the busiest season of the year.",
    image: "/hajj.jpg",
    features: ["Mina / Arafat / Muzdalifah", "Group coordination", "Licensed for Hajj routes", "Priority support"],
    priceFrom: 1800,
    currency: "SAR",
  },
  {
    slug: "vip-transport",
    title: "VIP Transport",
    shortDescription: "Luxury sedans and SUVs for a first-class journey.",
    description:
      "Premium vehicles, presentable drivers, bottled water, and priority scheduling for guests who want an elevated, private travel experience.",
    image: "/service5.jpg",
    features: ["Luxury fleet", "Private & discreet", "Priority scheduling", "Complimentary refreshments"],
    priceFrom: 650,
    currency: "SAR",
  },
  {
    slug: "family-transport",
    title: "Family Transport",
    shortDescription: "Spacious vehicles suited for families travelling together.",
    description:
      "Roomy vans and SUVs with extra luggage space, child-friendly drivers, and flexible stops — built around how families actually travel.",
    image: "/service3.jpg",
    features: ["Extra luggage space", "Child-friendly", "Flexible stops", "Single fixed fare"],
    priceFrom: 500,
    currency: "SAR",
  },
  {
    slug: "group-transport",
    title: "Group Transport",
    shortDescription: "Coasters and buses for larger travel groups.",
    description:
      "For tour operators and larger families, we provide coasters and buses with a dedicated coordinator to keep your group moving on schedule.",
    image: "/service4.jpg",
    features: ["Coaster & bus options", "Dedicated coordinator", "Group discounts", "Custom scheduling"],
    priceFrom: 1200,
    currency: "SAR",
  },
  {
    slug: "corporate-transport",
    title: "Corporate Transport",
    shortDescription: "Reliable transport accounts for agencies and companies.",
    description:
      "Umrah agencies and companies can set up recurring transport accounts with consolidated invoicing, priority booking, and account management.",
    image: "/service6.jpg",
    features: ["Monthly invoicing", "Account manager", "Priority booking", "SLA-backed reliability"],
  },
];
