import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
  },
  reactStrictMode: true
};

export default nextConfig;
