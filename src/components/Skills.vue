<script setup lang="ts">
const base = import.meta.env.BASE_URL
const skills = [
  { name: 'C#', icon: `${base}icons/Csharp-icon.svg` },
  { name: '.NET', icon: `${base}icons/DotNet-icon.svg` },
  { name: 'Vue.js', icon: `${base}icons/Vue-icon.svg` },
  { name: 'Knockout.js', icon: `${base}icons/knockout-icon.svg` },
  { name: 'HTML', icon: `${base}icons/Html-icon.svg` },
  { name: 'CSS', icon: `${base}icons/Css-icon.svg` },
  { name: 'JavaScript', icon: `${base}icons/Javascript-icon.svg` },
  { name: 'Git', icon: `${base}icons/Git-icon.svg` },
  { name: 'GitHub', icon: `${base}icons/Github-icon.svg` },
  { name: 'PostgreSQL', icon: `${base}icons/Postgres-icon.svg` },
  { name: 'Dbeaver', icon: `${base}icons/Dbeaver-icon.svg` },
  { name: 'Docker', icon: `${base}icons/Docker-icon.svg` },
  { name: 'Termius', icon: `${base}icons/Termius-icon.svg` },
  { name: 'RabbitMQ', icon: `${base}icons/RabbitMQ-icon.svg` },
]
</script>

<template>
  <section id="languages" class="skills section">
    <span class="section-title">Skills</span>
    <h2 class="section-heading">Languages & tools</h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <div class="skill-icon-wrap">
          <img :src="skill.icon" :alt="skill.name" class="skill-icon" @error="($event.target as HTMLImageElement).style.display='none'; ($event.target as HTMLImageElement).nextElementSibling?.classList.add('show')" />
          <span class="skill-fallback">{{ skill.name.charAt(0) }}</span>
        </div>
        <span class="skill-name">{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s, transform 0.2s;
}

.skill-item:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.skill-icon-wrap {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.skill-icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.skill-fallback {
  display: none;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
}

.skill-fallback.show {
  display: block;
}

.skill-name {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--text-muted);
  text-align: center;
}

@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }

  .skill-icon {
    width: 44px;
    height: 44px;
  }

  .skill-name {
    font-size: 0.75rem;
  }
}
</style>
