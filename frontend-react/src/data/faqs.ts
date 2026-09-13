import type { Faq } from "@/types/faq";

export const faqs: Faq[] = [
  {
    id: "f1",
    category: "Booking",
    question: "How far in advance should I book my transport?",
    answer:
      "We recommend booking at least 48 hours in advance, especially during Ramadan and Hajj season. That said, we do accept same-day bookings depending on vehicle availability — contact us on WhatsApp for the fastest response.",
  },
  {
    id: "f2",
    category: "Booking",
    question: "Can I book transport for multiple days or a full itinerary?",
    answer:
      "Yes. Our Umrah and Hajj Transport packages cover airport pickup, city transfers, and Ziyarah tours as a single booking with one dedicated driver for your trip.",
  },
  {
    id: "f3",
    category: "Cancellation",
    question: "What is your cancellation policy?",
    answer:
      "Bookings can be cancelled free of charge up to 12 hours before pickup. Cancellations within 12 hours may be subject to a small fee to cover driver allocation.",
  },
  {
    id: "f4",
    category: "Cancellation",
    question: "Can I reschedule my booking instead of cancelling?",
    answer:
      "Absolutely. Message us on WhatsApp with your booking reference and new date/time and we'll rearrange it at no extra cost, subject to availability.",
  },
  {
    id: "f5",
    category: "Payment",
    question: "How do I pay for my booking?",
    answer:
      "Currently we operate on a pay-on-arrival basis — cash or card payment directly to the driver, or bank transfer for corporate accounts. Online payment is coming soon.",
  },
  {
    id: "f6",
    category: "Payment",
    question: "Are your prices fixed or metered?",
    answer:
      "All our prices are fixed and agreed before your trip starts — no surprise meter charges. The price you're quoted is the price you pay.",
  },
  {
    id: "f7",
    category: "Driver",
    question: "Are your drivers licensed and vetted?",
    answer:
      "Yes, every RoadRide driver holds a valid commercial license, undergoes a background check, and is trained specifically on routes and etiquette for Umrah and Hajj pilgrims.",
  },
  {
    id: "f8",
    category: "Driver",
    question: "Do drivers speak English or other languages?",
    answer:
      "Most of our drivers speak Arabic and basic English. For specific language needs, let us know when booking and we'll do our best to match you with a suitable driver.",
  },
  {
    id: "f9",
    category: "Airport Pickup",
    question: "What happens if my flight is delayed?",
    answer:
      "We track your flight number automatically, so your driver will adjust pickup time and still be waiting for you at arrivals — no extra charge for reasonable delays.",
  },
  {
    id: "f10",
    category: "Airport Pickup",
    question: "Where exactly will the driver meet me?",
    answer:
      "Your driver will be at the arrivals hall holding a name board with your name on it. Exact meeting point details are sent to your WhatsApp after booking confirmation.",
  },
  {
    id: "f11",
    category: "Safety",
    question: "Are your vehicles insured and regularly inspected?",
    answer:
      "Yes, all vehicles are fully insured, regularly serviced, and inspected for roadworthiness before every Hajj and Umrah season.",
  },
  {
    id: "f12",
    category: "Safety",
    question: "Is it safe for solo women travellers?",
    answer:
      "Yes. We take extra care with solo travellers — all drivers are vetted, trips are tracked, and you can share your live trip status with family back home on request.",
  },
];

export const faqCategories = [
  "Booking",
  "Cancellation",
  "Payment",
  "Driver",
  "Airport Pickup",
  "Safety",
] as const;
