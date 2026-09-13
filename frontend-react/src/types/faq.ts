export type FaqCategory =
  | "Booking"
  | "Cancellation"
  | "Payment"
  | "Driver"
  | "Airport Pickup"
  | "Safety";

export interface Faq {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}
