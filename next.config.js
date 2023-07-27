/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'res.cloudinary.com']
    },
    experimental: {
        serverComponentsExternalPackages: ['cloudinary', 'graphql-request'],
        swcPlugins: [['next-superjson-plugin', {}]]
    }
}

module.exports = nextConfig
