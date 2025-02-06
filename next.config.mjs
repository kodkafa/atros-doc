import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/atros-doc" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/atros-doc" : "",

  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
