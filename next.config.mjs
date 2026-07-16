const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/nujiang-yihui-website";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  distDir: "dist-static",
  basePath: isGitHubPages ? githubPagesBasePath : "",
  assetPrefix: isGitHubPages ? githubPagesBasePath : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
