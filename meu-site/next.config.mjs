/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Desabilita otimização para compatibilidade com output: "export"
    domains: ['www.cotidente.com.br', 'cotidente.com.br', 'nepoodonto.com.br'], // Domínios permitidos
  },
  reactStrictMode: true,
  output: "export", // Permite gerar HTML estático
};

export default nextConfig;
