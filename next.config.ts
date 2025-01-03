import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.parx.online",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
