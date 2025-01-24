/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Allows images from all domains (use with caution)
      },
    ],
  },
  env: {
    NEXT_PUBLIC_PRIVY_APP_ID: process.env.NEXT_PUBLIC_PRIVY_APP_ID, // Securely access your environment variable
  },
  typescript: {
    ignoreBuildErrors: true, // Allows the build to complete even with TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Allows the build to complete even with ESLint errors
  },
};

module.exports = nextConfig;
