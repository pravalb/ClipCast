import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "praval-clipcast.b-cdn.net", 
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
