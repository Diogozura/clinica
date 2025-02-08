/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['https://cotidente.com.br/'], // Coloque o domínio do seu servidor ou CDN
  },
  reactStrictMode: true,
  output: "export", // Permite gerar HTML estático
};

export default nextConfig;
