import { FaMoon, FaSun } from "react-icons/fa6";

// O clique é tratado por event delegation no script de tema (layout.tsx),
// então este botão funciona mesmo sem hidratação. O ícone é escolhido por CSS
// conforme a classe .dark no <html>, aparecendo correto já na primeira pintura
// e animando (rotação) a cada troca de tema.
export default function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      aria-label="Toggle light/dark theme"
      title="Toggle theme"
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border text-subtext transition-all duration-300 hover:border-accent hover:text-accent active:scale-90"
    >
      <FaSun className="theme-icon hidden h-4 w-4 dark:block" />
      <FaMoon className="theme-icon block h-4 w-4 dark:hidden" />
    </button>
  );
}
