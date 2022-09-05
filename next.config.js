/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gravatar.com']
  },
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
