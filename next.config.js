/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: { emotion: true, removeConsole: process.env.NODE_ENV === 'production' },
    optimizeFonts: true,
    compress: true,
    trailingSlash: false,
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

module.exports = nextConfig;
