import { z } from "zod";

// Mirrors frontend-react/src/lib/validations/contact.ts — keep both in sync by hand.
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;
