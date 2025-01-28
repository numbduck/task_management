/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: '/',
                destination: '/tasks',
                permanent: true,
            },
            {
                source: '/auth',
                destination: '/auth/login',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
