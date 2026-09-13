import { Router } from "express";
import { ContactMessage } from "../models/ContactMessage";
import { contactSchema } from "../validations/contact";
import { requireAdmin } from "../middleware/requireAdmin";
import { asyncHandler } from "../middleware/asyncHandler";

export const contactRouter = Router();

// Public — submitted from the site's contact form.
contactRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid contact data", issues: parsed.error.flatten() });
      return;
    }

    const message = await ContactMessage.create(parsed.data);
    res.status(201).json({ success: true, message });
  }),
);

// Admin — list every message, newest first.
contactRouter.get(
  "/",
  requireAdmin,
  asyncHandler(async (_req, res) => {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ messages });
  }),
);
