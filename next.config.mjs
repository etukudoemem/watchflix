/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {hostname: "www.w3.org"},
    ]
  }
};

export default nextConfig;
