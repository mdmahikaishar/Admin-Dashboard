const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "./src/app"),
      path.join(__dirname, "./src/components"),
      path.join(__dirname, "./src/styles"),
    ],
  },
}

module.exports = nextConfig
