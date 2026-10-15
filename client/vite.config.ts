import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // In dev, API calls go to the Express server (npm run dev at the repo root starts both).
    proxy: { "/api": "http://localhost:3001" },
  },
});
