/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["images.dog.ceo"],
  },
  env: {
    username: "Hien Pham",
  },
  // basePath: "/home",
  // For example, if you reconfigure .ts page extensions to .page.ts, you would need to rename pages like _app.page.ts.
  // pageExtensions: [".page.ts"],
  // compress: false,
  devIndicators: {
    buildActivityPosition: "top-right",
  },
};

module.exports = nextConfig;
