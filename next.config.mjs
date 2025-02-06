import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  assetPrefix: "./",
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
