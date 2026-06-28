"use client";

import { useEffect, useRef, useState } from "react";

type State = "" | "hidden" | "visible";

/**
 * Revela o conteúdo com fade/slide quando entra na viewport.
 * Seguro: por padrão (SSR / sem JS) o conteúdo já fica visível. Só "arma" a
 * animação se o elemento estiver abaixo da dobra no mount, evitando flashes
 * e nunca deixando conteúdo preso invisível.
 */
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (el.getBoundingClientRect().top < window.innerHeight) {
      setState("visible");
      return;
    }

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stateClass =
    state === "hidden"
      ? "reveal-hidden"
      : state === "visible"
        ? "reveal-visible"
        : "";

  return (
    <div ref={ref} className={`reveal ${stateClass} ${className ?? ""}`}>
      {children}
    </div>
  );
}
