import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { env } from "./config/env";
import { connectDb } from "./config/db";
import { authRouter } from "./routes/auth";
import { bookingsRouter } from "./routes/bookings";
import { contactRouter } from "./routes/contact";

async function main() {
  await connectDb();

  const app = express();

  app.use(
    cors({
      origin: env.frontendOrigins,
    }),
  );
  app.use(express.json());

  const dbStates: Record<number, string> = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
    99: "uninitialized",
  };

  app.get("/", (_req, res) => {
    res.json({ name: "RoadRide Transportation API", status: "running" });
  });

  app.get("/health", (_req, res) => {
    const dbState = dbStates[mongoose.connection.readyState] ?? "unknown";
    const healthy = dbState === "connected";

    res.status(healthy ? 200 : 503).json({
      ok: healthy,
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      db: dbState,
    });
  });

  app.use("/api/auth", authRouter);
  app.use("/api/bookings", bookingsRouter);
  app.use("/api/contact", contactRouter);

  app.use((req, res) => {
    res.status(404).json({ error: `Not found: ${req.method} ${req.path}` });
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  });

  app.listen(env.port, () => {
    console.log(`RoadRide backend listening on http://localhost:${env.port}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
