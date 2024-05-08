/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipgeolocation.io',
      },
    ],
  },
}

export default nextConfig
