/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // REQUIRED for Netlify static hosting
  output: "export",

  // REQUIRED if you use next/image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
