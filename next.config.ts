/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    turbotrace: {
      ignore: ["@prisma/client"],
    },
  },
  images: {
    domains: ["raw.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/nesatkroper/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
