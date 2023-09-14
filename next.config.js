/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'franke-lux.com.ua',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
