import { Schema, model } from "mongoose";

export const BOOKING_STATUSES = ["pending", "confirmed", "completed", "cancelled"] as const;
export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export interface BookingDocument {
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
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<BookingDocument>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    whatsapp: { type: String, required: true },
    email: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    dropLocation: { type: String, required: true },
    pickupDate: { type: String, required: true },
    pickupTime: { type: String, required: true },
    passengers: { type: Number, required: true },
    vehicleType: { type: String, required: true },
    specialRequest: { type: String },
    status: { type: String, enum: BOOKING_STATUSES, default: "pending" },
  },
  { timestamps: true },
);

export const Booking = model<BookingDocument>("Booking", bookingSchema);
