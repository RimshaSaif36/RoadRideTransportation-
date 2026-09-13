import type { PricingPackage } from "@/types/booking";

export const pricingPackages: PricingPackage[] = [
  {
    slug: "economy",
    name: "Economy",
    tagline: "Simple, reliable transfers for solo pilgrims",
    priceFrom: 250,
    currency: "SAR",
    features: [
      "Economy sedan (up to 3 passengers)",
      "Airport or city transfers",
      "Fixed pricing, no meter",
      "Standard support hours",
    ],
  },
  {
    slug: "business",
    name: "Business",
    tagline: "Extra comfort and space for families",
    priceFrom: 450,
    currency: "SAR",
    features: [
      "SUV or Hiace (up to 10 passengers)",
      "Airport meet & greet",
      "Priority driver matching",
      "24/7 WhatsApp support",
    ],
    highlighted: true,
  },
  {
    slug: "vip",
    name: "VIP",
    tagline: "A private, first-class travel experience",
    priceFrom: 650,
    currency: "SAR",
    features: [
      "Luxury sedan or GMC",
      "Complimentary refreshments",
      "Dedicated account contact",
      "Flexible scheduling",
    ],
  },
  {
    slug: "luxury",
    name: "Luxury",
    tagline: "For groups and agencies who need it all",
    priceFrom: 1200,
    currency: "SAR",
    features: [
      "Coaster or full-size bus",
      "Dedicated trip coordinator",
      "Custom multi-day itineraries",
      "Consolidated invoicing available",
    ],
  },
];
