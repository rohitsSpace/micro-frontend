/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'blu',
        remotes: {
          marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
