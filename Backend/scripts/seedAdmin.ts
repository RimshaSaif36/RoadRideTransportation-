import bcrypt from "bcryptjs";
import { env } from "../config/env";
import { connectDb } from "../config/db";
import { Admin } from "../models/Admin";
import mongoose from "mongoose";

async function main() {
  if (!env.adminEmail || !env.adminPassword) {
    throw new Error(
      "Set ADMIN_EMAIL and ADMIN_PASSWORD in Backend/.env before running the seed script.",
    );
  }

  await connectDb();

  const email = env.adminEmail.toLowerCase().trim();
  const passwordHash = await bcrypt.hash(env.adminPassword, 10);

  const admin = await Admin.findOneAndUpdate(
    { email },
    { email, passwordHash },
    { upsert: true, new: true },
  );

  console.log(`Admin ready: ${admin.email}`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
