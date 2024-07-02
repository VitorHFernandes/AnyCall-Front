/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    urlAuth: 'http://144.91.80.153:8007/api/auth/login-auth',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
