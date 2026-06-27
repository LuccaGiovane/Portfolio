/**
 * Prefixa um caminho de /public com o basePath de produção (/Portfolio no
 * GitHub Pages). Use em qualquer asset estático — next/image e <a> não aplicam
 * o basePath automaticamente no export estático.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (/^https?:\/\/|^mailto:|^#/.test(path)) return path;
  return `${basePath}${path}`;
}
