"use client";

import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { site, nav } from "@/lib/data";
import { asset } from "@/lib/asset";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // Destaca o link da seção visível durante o scroll + sombra ao rolar.
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 300) {
          current = section.id;
        }
      });
      setActive(current);
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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

        {/* Ações mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center text-2xl text-subtext"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <div className="flex flex-col space-y-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-subtext hover:text-text"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={asset(site.resumeFile)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-4 py-2 text-center text-on-accent transition duration-300 hover:bg-accent-hover"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
