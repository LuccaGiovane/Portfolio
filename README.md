# Portfolio — Lucca Gomes

Portfolio minimalista desenvolvido com **Vue 3**, **TypeScript** e **Vite**.

## Tecnologias

- Vue 3 (Composition API)
- TypeScript
- Vite 6

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Build para produção

```bash
npm run build
```

Os arquivos serão gerados em `dist/`.

## Deploy (GitHub Pages)

1. Configure o `base` em `vite.config.ts` conforme seu repositório:
   - Site de projeto: `base: '/Portfolio/'`
   - Site de usuário: `base: './'`

2. Faça o build e publique a pasta `dist/`.

## Assets

Coloque os arquivos estáticos nas pastas corretas:

- **Ícones de tecnologias**: `public/icons/` (ex: `Csharp-icon.svg`, `Python-icon.svg`, etc.)
- **Imagens dos projetos**: `public/images/` (ex: `driveOn.png`, `diarioOnline.png`, `screenMatch.png`)
- **Currículo PDF**: `public/assets/CV-LuccaGomes.pdf`

Os ícones existentes em `icons/` já foram copiados para `public/icons/`. Adicione os que faltam manualmente.
