import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/**
 * O site é publicado no GitHub Pages em https://<user>.github.io/Portfolio,
 * então em produção precisamos do basePath/assetPrefix "/Portfolio".
 * `output: "export"` gera HTML estático em ./out (compatível com GitHub Pages).
 */
const basePath = isProd ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Exposto ao client para prefixar assets de /public (next/image e <a> não
  // aplicam basePath sozinhos no export estático).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Fixa a raiz do workspace (existe outro lockfile fora do projeto).
  turbopack: {
    root: __dirname,
  },
  images: {
    // necessário para o export estático (sem o servidor de otimização do Next)
    unoptimized: true,
  },
};

export default nextConfig;
