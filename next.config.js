/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //   remotePatterns: [
    //     {
    //     hostname: "1h3.googleusercontent.com", "avatars.githubusercontent.com"
    // },
    // ],
    domains: ["1h3.googleusercontent.com", "avatars.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
