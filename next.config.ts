import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.parx.online",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.qa.hoh-cloud.apptoku.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
