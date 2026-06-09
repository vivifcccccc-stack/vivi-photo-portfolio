/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/vivi-photo-portfolio" : undefined,
  assetPrefix: isGitHubPages ? "/vivi-photo-portfolio/" : undefined,
  images: {
    unoptimized: isGitHubPages
  },
  trailingSlash: isGitHubPages
};

export default nextConfig;
