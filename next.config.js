/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  },
  };
  
  module.exports = nextConfig;