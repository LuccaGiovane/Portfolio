<script setup lang="ts">
import { ref } from 'vue'

const base = import.meta.env.BASE_URL
const projects = [
  {
    name: 'DriveOn',
    image: `${base}images/driveOn.png`,
    description: 'A sleek front-end project crafted primarily with HTML and CSS for a ride-hailing app website inspired by Uber.',
    link: 'https://luccagiovane.github.io/Front-DriveOn/',
  },
  {
    name: 'Online Diary',
    image: `${base}images/diarioOnline.png`,
    description: 'An online platform that allows users to create, view, and manage personal diaries. Built using Python, Django, SQLite, and Tailwind CSS.',
    link: 'https://github.com/LuccaGiovane/PSW-DiarioOnline',
  },
  {
    name: 'ScreenMatch',
    image: `${base}images/screenMatch.png`,
    description: 'A marketplace for buying and renting media such as movies and series. Developed using Java, Spring Boot, PostgreSQL, and JPA.',
    link: 'https://github.com/LuccaGiovane/ALURA-ScreenMatch',
  },
]

const carouselRef = ref<HTMLElement | null>(null)

function scrollCarousel(direction: number) {
  if (!carouselRef.value) return
  const cardWidth = 320
  const gap = 24
  const scrollAmount = (cardWidth + gap) * direction
  carouselRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
}
</script>

<template>
  <section id="work" class="work section">
    <span class="section-title">Work</span>
    <h2 class="section-heading">Featured projects</h2>
    <div class="carousel-wrap">
      <button class="carousel-btn prev" aria-label="Anterior" @click="scrollCarousel(-1)">←</button>
      <div ref="carouselRef" class="carousel">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
        >
          <div class="card-image">
            <img :src="project.image" :alt="project.name" />
          </div>
          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-desc">{{ project.description }}</p>
          <span class="card-link">View project →</span>
        </a>
      </div>
      <button class="carousel-btn next" aria-label="Próximo" @click="scrollCarousel(1)">→</button>
    </div>
  </section>
</template>

<style scoped>
.carousel-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.carousel-btn {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1.25rem;
  transition: border-color 0.2s, color 0.2s;
}

.carousel-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.carousel {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 0.5rem 0;
  -ms-overflow-style: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.project-card {
  flex: 0 0 300px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
  text-align: left;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.card-image {
  aspect-ratio: 16/10;
  background: var(--bg);
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--accent);
  padding: 1rem 1.25rem 0.25rem;
}

.card-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
  padding: 0 1.25rem;
  flex: 1;
}

.card-link {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
  padding: 1rem 1.25rem;
}

@media (max-width: 640px) {
  .carousel-btn {
    display: none;
  }

  .carousel {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .project-card {
    flex: 0 0 280px;
  }
}
</style>
