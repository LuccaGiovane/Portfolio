<script setup lang="ts">
import { ref, computed } from 'vue'

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

const currentIndex = ref(0)

const currentProject = computed(() => projects[currentIndex.value])

function goTo(index: number) {
  if (index < 0) {
    currentIndex.value = projects.length - 1
  } else if (index >= projects.length) {
    currentIndex.value = 0
  } else {
    currentIndex.value = index
  }
}

function prev() {
  goTo(currentIndex.value - 1)
}

function next() {
  goTo(currentIndex.value + 1)
}
</script>

<template>
  <section id="work" class="work section">
    <span class="section-title">Work</span>
    <h2 class="section-heading">Featured projects</h2>
    <div class="carousel">
      <div class="carousel-stage">
        <button class="carousel-btn prev" aria-label="Anterior" @click="prev">←</button>
        <div class="card-container">
          <Transition name="slide" mode="out-in">
            <a
              :key="currentProject.name"
              :href="currentProject.link"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card"
            >
              <div class="card-image">
                <img :src="currentProject.image" :alt="currentProject.name" />
              </div>
              <h3 class="card-title">{{ currentProject.name }}</h3>
              <p class="card-desc">{{ currentProject.description }}</p>
              <span class="card-link">View project →</span>
            </a>
          </Transition>
        </div>
        <button class="carousel-btn next" aria-label="Próximo" @click="next">→</button>
      </div>
      <div class="carousel-dots">
        <button
          v-for="(p, i) in projects"
          :key="p.name"
          :aria-label="`Ver projeto ${p.name}`"
          :class="['dot', { active: i === currentIndex }]"
          @click="goTo(i)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.carousel-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
}

.carousel-btn {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1.25rem;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.carousel-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: scale(1.05);
}

.card-container {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  padding: 6px 0;
}

.project-card {
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

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-24px);
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

.carousel-dots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, border-color 0.2s;
}

.dot:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
}

.dot.active {
  background: var(--accent);
  border-color: var(--accent);
}

@media (max-width: 640px) {
  .carousel-stage {
    gap: 0.5rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style>
