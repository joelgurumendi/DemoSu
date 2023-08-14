import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import { manifestForPlugin } from "./manifest";

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
