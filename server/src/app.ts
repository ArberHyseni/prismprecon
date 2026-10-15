import fs from "node:fs";
import path from "node:path";
import express from "express";
import helmet from "helmet";
import { contactRouter } from "./routes/contact";

// In production the built client sits next to app.js in ./public (see scripts/assemble-release.mjs).
const STATIC_DIR = process.env.STATIC_DIR ?? path.join(__dirname, "public");

export function createApp() {
  const app = express();
  app.set("trust proxy", true); // behind Apache/Passenger on cPanel
  app.disable("x-powered-by");
  app.use(helmet());
  app.use(express.json({ limit: "20kb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });
  app.use("/api/contact", contactRouter);
  app.use("/api", (_req, res) => {
    res.status(404).json({ ok: false, error: "Not found" });
  });

  if (fs.existsSync(STATIC_DIR)) {
    // Hashed build assets can be cached forever; index.html must always revalidate.
    app.use("/assets", express.static(path.join(STATIC_DIR, "assets"), { immutable: true, maxAge: "1y" }));
    app.use(express.static(STATIC_DIR, { maxAge: "1h", index: false }));
    app.get("/{*path}", (_req, res) => {
      res.setHeader("Cache-Control", "no-cache");
      res.sendFile(path.join(STATIC_DIR, "index.html"));
    });
  }

  return app;
}
