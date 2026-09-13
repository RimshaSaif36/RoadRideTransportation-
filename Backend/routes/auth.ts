import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin";
import { loginSchema } from "../validations/auth";
import { requireAdmin } from "../middleware/requireAdmin";
import { asyncHandler } from "../middleware/asyncHandler";
import { env } from "../config/env";

export const authRouter = Router();

authRouter.post("/login", asyncHandler(async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid login data", issues: parsed.error.flatten() });
    return;
  }

  const { email, password } = parsed.data;
  const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
  if (!admin) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }

  const passwordMatches = await bcrypt.compare(password, admin.passwordHash);
  if (!passwordMatches) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }

  const token = jwt.sign({ adminId: admin.id, email: admin.email }, env.jwtSecret, {
    expiresIn: "7d",
  });

  res.json({ token, email: admin.email });
}));

authRouter.get("/me", requireAdmin, (req, res) => {
  res.json({ admin: req.admin });
});
