import type { NextConfig } from "next";

const repoName = "vetcabinet-website";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repoName}`,
  images: { unoptimized: true },
};

export default nextConfig;
