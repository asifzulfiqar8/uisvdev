import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.asifzulfiqar.pro", "asifzulfiqar.pro"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
