/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/videoPlayer/:videoId',
          destination: '/videoPlayer',
        },
      ];
    },
  };
  
  export default nextConfig;
  