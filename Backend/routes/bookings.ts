import { Router } from "express";
import { z } from "zod";
import { Booking, BOOKING_STATUSES } from "../models/Booking";
import { bookingSchema } from "../validations/booking";
import { requireAdmin } from "../middleware/requireAdmin";
import { asyncHandler } from "../middleware/asyncHandler";

export const bookingsRouter = Router();

// Public — submitted from the site's booking form.
bookingsRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const parsed = bookingSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid booking data", issues: parsed.error.flatten() });
      return;
    }

    const booking = await Booking.create(parsed.data);
    res.status(201).json({ success: true, booking });
  }),
);

// Admin — list every booking, newest first.
bookingsRouter.get(
  "/",
  requireAdmin,
  asyncHandler(async (_req, res) => {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ bookings });
  }),
);

const statusUpdateSchema = z.object({
  status: z.enum(BOOKING_STATUSES),
});

// Admin — update a booking's status.
bookingsRouter.patch(
  "/:id",
  requireAdmin,
  asyncHandler(async (req, res) => {
    const parsed = statusUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid status", issues: parsed.error.flatten() });
      return;
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: parsed.data.status },
      { new: true },
    );

    if (!booking) {
      res.status(404).json({ error: "Booking not found" });
      return;
    }

    res.json({ booking });
  }),
);

// Admin — permanently delete a booking.
bookingsRouter.delete(
  "/:id",
  requireAdmin,
  asyncHandler(async (req, res) => {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      res.status(404).json({ error: "Booking not found" });
      return;
    }

    res.json({ success: true });
  }),
);
