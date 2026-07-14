import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide Next.js DevTools portal/indicator in local development
  devIndicators: false,
  experimental: {
    // Avoid corrupt/stale HMR chunks on slower drives (fixes ChunkLoadError)
    turbopackFileSystemCacheForDev: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lloydsbuilding.com.au",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
