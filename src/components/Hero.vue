<script setup lang="ts">
</script>

<template>
  <section class="hero section">
    <p class="intro">Hi, my name is</p>
    <h1 class="name">Lucca Giovane Gomes.</h1>
    <h2 class="tagline">I build things for the web.</h2>
    <p class="desc">
      I'm a computer scientist specializing in building (and occasionally designing)
      exceptional digital experiences.
    </p>
    <a
      href="https://github.com/LuccaGiovane"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-primary"
    >
      Check out my Github →
    </a>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: calc(var(--header-height) + 2rem);
}

.intro {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 0.5rem;
  animation: fadeUp 0.5s ease-out;
}

.name {
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.25rem;
  animation: fadeUp 0.5s 0.05s ease-out backwards;
}

.tagline {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  animation: fadeUp 0.5s 0.1s ease-out backwards;
}

.desc {
  max-width: 540px;
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.7;
  animation: fadeUp 0.5s 0.15s ease-out backwards;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  border-radius: var(--radius);
  font-size: 0.9375rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
  animation: fadeUp 0.5s 0.2s ease-out backwards;
  width: fit-content;
}

.btn-primary:hover {
  background: var(--accent-dim);
  color: var(--text);
}
</style>
