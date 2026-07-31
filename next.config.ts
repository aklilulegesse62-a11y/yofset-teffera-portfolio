import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const githubPagesBasePath = "/yofset-teffera-portfolio";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? githubPagesBasePath : undefined,
  assetPrefix: isGitHubPages ? githubPagesBasePath : undefined,
  trailingSlash: true,
  // Serve supplied artwork files directly. The hosting image binding is not
  // available in local previews, and the originals remain untouched.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
