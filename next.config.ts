import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.aceternity.com"],
  },
};
export default nextConfig;
