import { z } from "zod";

// Mirrors frontend-react/src/lib/validations/booking.ts — keep both in sync by hand.
export const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  whatsapp: z.string().min(8, "Please enter a valid WhatsApp number"),
  email: z.string().email("Please enter a valid email address"),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  dropLocation: z.string().min(2, "Drop location is required"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  passengers: z.number().int().min(1, "At least 1 passenger").max(60),
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  specialRequest: z.string().max(500).optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;
