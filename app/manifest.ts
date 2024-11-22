import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Itoll E-commerce ",
    short_name: "E-toll ",
    description: "E-commerce Product Listing",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "any",
    scope: "/",
    display_override: ["standalone", "fullscreen"],
    categories: ["shopping", "e-commerce"],
    lang: "en",
    prefer_related_applications: false,
    icons: [
      {
        src: "maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
