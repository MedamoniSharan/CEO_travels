import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.shylajatours.com",
      },
      {
        protocol: "https",
        hostname: "shylajatours.com",
      },
    ],
  },
};

export default nextConfig;
