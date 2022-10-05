/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => [
    {
      source: "/api/:path",
      destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path`,
    },
  ],
};

module.exports = nextConfig;
