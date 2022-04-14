const { parsed: envFileVars } = require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ... envFileVars
  }
}

module.exports = nextConfig
