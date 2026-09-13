export interface BookingPayload {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  vehicleType: string;
  specialRequest?: string;
}

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export interface AdminBooking extends BookingPayload {
  _id: string;
  status: BookingStatus;
  createdAt: string;
}

export interface AdminContactMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface PricingPackage {
  slug: string;
  name: string;
  tagline: string;
  priceFrom: number;
  currency: "SAR";
  features: string[];
  highlighted?: boolean;
}
