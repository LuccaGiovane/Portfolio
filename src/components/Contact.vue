<script setup lang="ts">
const links = [
  {
    href: 'https://www.linkedin.com/in/luccagiovane/',
    label: 'LinkedIn',
    icon: '/icons/Linkedin-logo.svg',
    external: true,
  },
  {
    href: 'https://www.instagram.com/_luuuucca/',
    label: 'Instagram',
    icon: '/icons/Instagram-logo.svg',
    external: true,
  },
  {
    href: 'mailto:lucca.giovane.gomes@uel.br',
    label: 'Email',
    icon: '/icons/Email-icon.svg',
    external: false,
  },
]
</script>

<template>
  <section id="contact" class="contact section">
    <span class="section-title">Contact</span>
    <h2 class="section-heading">Get in touch</h2>
    <p class="contact-text">
      Feel free to reach out to me via LinkedIn or Instagram. I'm always open to
      connecting with new people and discussing exciting projects!
    </p>
    <div class="social-links">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
        class="social-link"
        :aria-label="link.label"
      >
        <img :src="link.icon" :alt="link.label" class="social-icon" />
        <span>{{ link.label }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-text {
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 50ch;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text);
  transition: border-color 0.2s, color 0.2s;
}

.social-link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.social-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style>
