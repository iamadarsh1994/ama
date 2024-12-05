import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com', "images.unsplash.com"], // Add your image domain here
  },
};

export default nextConfig;

// the images.domains configuration has been deprecated in favor of a more flexible images.remotePatterns configuration.
//The remotePatterns option provides more granular control over external image sources, such as specifying the protocol, hostname, port, and pathname. It enhances security and functionality by ensuring that only specific patterns are allowed.
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         port: '', // Optional: specify port if required
//         pathname: '/**', // Optional: specify path patterns if needed
//       },
//     ],
//   },
// };
