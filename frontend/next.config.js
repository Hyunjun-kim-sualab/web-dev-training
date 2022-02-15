/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        urlImports: [
            "https://framer.com/m/",
            "https://framerusercontent.com/",
            "https://ga.jspm.io/",
            "https://jspm.dev/",
        ],
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://10.99.5.156:8888/:path*'
            }
        ]
    }
}

module.exports = nextConfig
