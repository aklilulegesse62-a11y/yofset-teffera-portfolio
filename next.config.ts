import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve supplied artwork files directly. The hosting image binding is not
  // available in local previews, and the originals remain untouched.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
