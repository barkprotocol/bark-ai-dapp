/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allows images from all domains (use with caution)
      },
    ],
  },
  env: {
    NEXT_PUBLIC_PRIVY_APP_ID: process.env.NEXT_PUBLIC_PRIVY_APP_ID, // Securely access your environment variable
  },
  eslint: {
    ignoreDuringBuilds: true, // Allows the build to complete even with ESLint errors
  },
  experimental: {
    appDir: true, // Enable if you're using the new App Router
    serverActions: true, // Enable if you're using Server Actions
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add your custom webpack config here if needed
    return config
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]
  },
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
}

module.exports = nextConfig

