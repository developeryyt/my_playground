import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        localPatterns: [
            {
                pathname: '/image/**',
                search: '',
            }
        ]
    }
};

export default nextConfig;
