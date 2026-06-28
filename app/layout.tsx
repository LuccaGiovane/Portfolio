import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const title = `${site.name} | ${site.role}`;
const description = `${site.role} based in ${site.location}. Building full-stack web applications with the Node ecosystem (Next.js, NestJS, Prisma) and exploring infrastructure with Docker and Cloudflare.`;

export const metadata: Metadata = {
  // Inclui o basePath com barra final para que as URLs absolutas (OG/Twitter)
  // resolvam para .../Portfolio/opengraph-image no GitHub Pages.
  metadataBase: new URL(`https://luccagiovane.github.io${basePath}/`),
  title,
  description,
  keywords: [
    "Lucca Gomes",
    "Full-Stack Developer",
    "Next.js",
    "NestJS",
    "Prisma",
    "TypeScript",
    "Londrina",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.githubUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Define o tema antes da primeira pintura (dark-first; respeita escolha salva
// e o prefers-color-scheme do sistema) para evitar flash. Também registra o
// clique do toggle via event delegation, então ele funciona sem depender da
// hidratação do React (qualquer elemento com [data-theme-toggle]).
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':!window.matchMedia('(prefers-color-scheme: light)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-theme-toggle]');if(!b)return;var dark=document.documentElement.classList.toggle('dark');try{localStorage.setItem('theme',dark?'dark':'light');}catch(_){}});})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
