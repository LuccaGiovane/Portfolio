<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#languages', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <a href="#" class="logo" aria-label="Início">
      <svg width="36" height="36" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="40,2 72.91,21 72.91,59 40,78 7.09,59 7.09,21"
          stroke="var(--accent)"
          stroke-width="2"
          fill="none"
        />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="logo-text">LG</text>
      </svg>
    </a>

    <nav class="nav" :class="{ open: isMenuOpen }">
      <ul>
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
        </li>
        <li>
          <a href="/assets/CV-LuccaGomes.pdf" class="btn-resume" download="LuccaGomes_Resume.pdf" target="_blank" rel="noopener">Resume</a>
        </li>
      </ul>
    </nav>

    <button
      class="menu-toggle"
      :aria-expanded="isMenuOpen"
      aria-label="Abrir menu"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 100;
  background: transparent;
  transition: background 0.2s ease;
}

.header.scrolled {
  background: rgba(13, 13, 15, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.logo {
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
}

.logo:hover {
  opacity: 0.85;
}

.logo-text {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  fill: var(--accent);
}

.nav ul {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s;
}

.nav a:hover {
  color: var(--accent);
}

.btn-resume {
  padding: 0.5rem 1rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  border-radius: var(--radius);
  font-size: 0.875rem;
}

.btn-resume:hover {
  background: var(--accent-dim);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.menu-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 1px;
  transition: transform 0.3s;
}

.menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    padding: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav ul {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .menu-toggle {
    display: flex;
  }
}

@media (min-width: 769px) {
  .nav {
    display: block !important;
  }
}
</style>
