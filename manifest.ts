import { VitePWAOptions } from "vite-plugin-pwa";
export const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  manifest: {
    name: "Demo",
    short_name: "Demo",
    description: "Demo",
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};
