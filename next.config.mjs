/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  
  // For a user/organization site (username.github.io):
  // No basePath or assetPrefix needed
  
  // For a project site (username.github.io/repo-name):
  // basePath: "/repo-name",
  // assetPrefix: "/repo-name/",
};

export default nextConfig;