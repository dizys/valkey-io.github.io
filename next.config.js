const path = require('node:path')

const SRC_DIR = path.join(__dirname, 'src')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(SRC_DIR, 'styles')],
  },
  output: 'export',
}

module.exports = nextConfig
