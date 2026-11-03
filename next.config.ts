import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export, served by GitHub Pages.
  output: "export",
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimization server.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
