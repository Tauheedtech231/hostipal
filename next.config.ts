import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ STATIC EXPORT ENABLE

  images: {
    unoptimized: true, // ✅ REQUIRED for static hosting
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
