"use client";

import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";

type Props = {
  email: string;
  password: string;
};

export default function DemoCredentials({ email, password }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard indisponível (contexto não seguro) — ignora
    }
  };

  const chip =
    "cursor-pointer rounded border border-border bg-bg-alt px-1.5 py-0.5 font-mono text-xs text-text transition-colors hover:border-accent hover:text-accent";

  return (
    <>
      <p className="mt-6 text-sm text-subtext">
        Use these demo credentials (click to copy):{" "}
        <button
          type="button"
          onClick={() => copy(email)}
          className={chip}
          title="Click to copy"
        >
          {email}
        </button>
        <span className="mx-1 text-muted">/</span>
        <button
          type="button"
          onClick={() => copy(password)}
          className={chip}
          title="Click to copy"
        >
          {password}
        </button>
      </p>

      {copied && (
        <div
          role="status"
          className="toast-pop fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm text-text shadow-lg"
        >
          <FaCheck className="h-3.5 w-3.5 text-accent" />
          Copied to clipboard
        </div>
      )}
    </>
  );
}
