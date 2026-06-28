# Portfolio — Lucca Giovane Gomes

Portfólio pessoal construído com **Next.js (App Router) + TypeScript + Tailwind CSS v4**,
publicado como site estático no **GitHub Pages**.

## Stack

- [Next.js 16](https://nextjs.org) — App Router, export estático (`output: "export"`)
- TypeScript
- Tailwind CSS v4
- [react-icons](https://react-icons.github.io/react-icons/) (ícones de UI/social)

## Estrutura

```
.
├── app/
│   ├── layout.tsx        # layout raiz, fonte (Inter) e metadata
│   ├── page.tsx          # composição da página (monta as seções)
│   └── globals.css       # Tailwind + estilos/animações globais
├── components/           # uma seção por componente
│   ├── Header.tsx        # navbar + menu mobile (client component)
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Work.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionHeading.tsx
├── lib/
│   ├── data.ts           # CONTEÚDO: textos, skills, experiências, projetos, links
│   └── asset.ts          # helper de basePath para assets de /public
├── public/               # imagens, ícones SVG e CV
└── next.config.ts        # export estático + basePath /Portfolio em produção
```