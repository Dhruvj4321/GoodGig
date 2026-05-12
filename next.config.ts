import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "decisive-darling-c5d8865f8f.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "decisive-darling-c5d8865f8f.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;