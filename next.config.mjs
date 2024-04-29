/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    config, options
  ) => {
      // Important: return the modified config
      config.module.rules.push({
          test: /\.node/,
          use: 'raw-loader',
      });
      return config;
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/portfolio",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
