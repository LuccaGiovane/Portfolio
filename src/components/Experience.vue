<script setup lang="ts">
const jobs = [
  {
    title: 'Freelancer Backend Developer',
    period: 'August 2023 – Present',
    location: 'Londrina, Brazil',
    description: 'Developed and maintained robust backend solutions. Projects included online platforms with user-friendly interfaces and real-time data visualization. Specialized in web development using Python, Django, Java and Spring Boot.',
  },
  {
    title: 'Intern Backend Developer',
    period: 'February 2022 – August 2023',
    location: 'CSG International, Londrina, Brazil',
    description: 'Assisted in backend development and implementation, with a strong focus on automated testing. Collaborated with the development team to troubleshoot technical issues and enhance project usability.',
  },
]
</script>

<template>
  <section id="experience" class="experience section">
    <span class="section-title">Experience</span>
    <h2 class="section-heading">Where I've worked</h2>
    <div class="timeline">
      <article v-for="(job, i) in jobs" :key="i" class="job">
        <div class="job-header">
          <h3 class="job-title">{{ job.title }}</h3>
          <span class="job-meta">{{ job.period }} · {{ job.location }}</span>
        </div>
        <p class="job-desc">{{ job.description }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.job {
  padding: 1.5rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.2s;
}

.job:hover {
  border-color: rgba(34, 211, 238, 0.3);
}

.job-header {
  margin-bottom: 0.75rem;
}

.job-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.job-meta {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.job-desc {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.65;
}
</style>
