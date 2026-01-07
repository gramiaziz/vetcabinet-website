import type { NextConfig } from "next";

const repo = "vetcabinet-website";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  images: { unoptimized: true },
};

export default nextConfig;
