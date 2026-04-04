import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Break the redirect loop at the application level
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.samkiel.tech',
          },
        ],
        destination: 'https://samkiel.tech/:path*',
        permanent: true,
      },
    ];
  },
  // Ensure we don't have trailing slash conflicts
  trailingSlash: false,
};

export default nextConfig;

