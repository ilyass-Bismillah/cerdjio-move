import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'novatvhub.com',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: 'https://novatvhub.com/admin/:path*',
      },
      {
        source: '/wp-admin/:path*',
        destination: 'https://novatvhub.com/admin/wp-admin/:path*',
      },
    ];
  },
};

export default nextConfig;