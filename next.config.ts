// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n aqui é ignorado no App Router
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
