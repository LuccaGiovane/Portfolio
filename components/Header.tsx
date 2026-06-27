"use client";

import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { site, nav } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Destaca o link da seção visível durante o scroll.
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
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">
            {site.initials}
          </span>
          <span className="ml-2 text-lg font-semibold">{site.shortName}</span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center space-x-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active && `#${active}` === item.href ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={asset(site.resumeFile)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-brand px-4 py-2 text-white transition duration-300 hover:bg-brand-dark"
          >
            Resume
          </a>
        </nav>

        {/* Botão menu mobile */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="text-2xl text-gray-600 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="bg-white px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={asset(site.resumeFile)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brand px-4 py-2 text-center text-white transition duration-300 hover:bg-brand-dark"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
