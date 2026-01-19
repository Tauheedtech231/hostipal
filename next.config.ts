import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // ✅ REQUIRED for static hosting
  trailingSlash: true,           // ✅ Fixes /about, /contact on refresh

  images: {
    unoptimized: true,            // ✅ Required for static export
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "cdn-icons-png.flaticon.com",
      "siddiqhospital.com",
      "plus.unsplash.com",
      "media.istockphoto.com",
    ],
  },
};

export default nextConfig;
