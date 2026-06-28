"use client";

import { useEffect, useState } from "react";
import { site, nav } from "@/lib/data";
import { asset } from "@/lib/asset";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // Sombra/contraste do header ao rolar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca o link da seção visível usando IntersectionObserver.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Ativa quando a seção cruza a faixa logo abaixo do header.
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed z-50 w-full border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "border-border bg-bg/80 shadow-sm"
          : "border-transparent bg-bg/60"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-semibold text-text transition-colors hover:text-accent"
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center space-x-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link text-subtext transition-colors hover:text-text ${
                active && `#${active}` === item.href ? "active text-text" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={asset(site.resumeFile)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2 text-on-accent transition duration-300 hover:bg-accent-hover"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>

        {/* Ações mobile: Resume + tema (sem menu hambúrguer) */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={asset(site.resumeFile)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-3 py-1.5 text-sm text-on-accent transition duration-300 hover:bg-accent-hover"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
