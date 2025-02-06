import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  basePath: process.env.NODE_ENV === "production" ? "/atros-doc" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/atros-doc" : "",
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
