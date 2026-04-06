<script setup lang="ts">
import { ref } from 'vue'
import { cvData } from './data/cvData'
import type { CVData } from './types/cv'

const data = ref<CVData>(cvData)
</script>

<template>
  <div class="cv-container">
    <!-- Header / Información Personal -->
    <header class="cv-header">
      <div class="header-content">
        <img :src="data.personal.avatar" :alt="data.personal.name" class="avatar" />
        <div class="personal-info">
          <h1>{{ data.personal.name }}</h1>
          <h2>{{ data.personal.title }}</h2>
          <p class="summary">{{ data.personal.summary }}</p>
          
          <div class="contact-info">
            <span class="contact-item">📧 {{ data.personal.email }}</span>
            <span class="contact-item">📱 {{ data.personal.phone }}</span>
            <span class="contact-item">📍 {{ data.personal.location }}</span>
            <a v-if="data.personal.linkedin" :href="'https://' + data.personal.linkedin" target="_blank" class="contact-item link">🔗 LinkedIn</a>
            <a v-if="data.personal.github" :href="'https://' + data.personal.github" target="_blank" class="contact-item link">💻 GitHub</a>
          </div>
        </div>
      </div>
    </header>

    <main class="cv-main">
      <!-- Experiencia Laboral -->
      <section class="section">
        <h3 class="section-title">💼 Experiencia Laboral</h3>
        <div class="experience-list">
          <div v-for="exp in data.experience" :key="exp.id" class="experience-card">
            <div class="experience-header">
              <div>
                <h4>{{ exp.position }}</h4>
                <h5>{{ exp.company }}</h5>
              </div>
              <span class="experience-date">{{ exp.startDate }} - {{ exp.endDate }}</span>
            </div>
            <ul class="experience-description">
              <li v-for="(item, idx) in exp.description" :key="idx">{{ item }}</li>
            </ul>
            <div class="technologies">
              <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </section>

      <div class="two-columns">
        <!-- Educación -->
        <section class="section">
          <h3 class="section-title">🎓 Educación</h3>
          <div class="education-list">
            <div v-for="edu in data.education" :key="edu.id" class="education-item">
              <h4>{{ edu.degree }}</h4>
              <h5>{{ edu.institution }}</h5>
              <span class="education-date">{{ edu.startDate }} - {{ edu.endDate }}</span>
              <p v-if="edu.description" class="education-description">{{ edu.description }}</p>
            </div>
          </div>
        </section>

        <!-- Habilidades -->
        <section class="section">
          <h3 class="section-title">🛠️ Habilidades</h3>
          <div class="skills-container">
            <div v-for="skillGroup in data.skills" :key="skillGroup.category" class="skill-group">
              <h4>{{ skillGroup.category }}</h4>
              <div class="skill-tags">
                <span v-for="skill in skillGroup.items" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="cv-footer">
      <p>Última actualización: {{ new Date().toLocaleDateString('es-ES') }}</p>
    </footer>
  </div>
</template>

<style scoped>
.cv-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  color: #1f2937;
}

.cv-header {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  padding: 3rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.personal-info h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
}

.personal-info h2 {
  font-size: 1.25rem;
  font-weight: 500;
  opacity: 0.9;
  margin: 0 0 1rem 0;
}

.summary {
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.contact-item.link {
  color: white;
  text-decoration: none;
}

.contact-item.link:hover {
  text-decoration: underline;
}

.section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.5rem;
  color: #1f2937;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.75rem;
  margin-bottom: 1.5rem;
}

.experience-card {
  background: #f9fafb;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3b82f6;
  transition: transform 0.2s;
}

.experience-card:hover {
  transform: translateX(5px);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.experience-header h4 {
  font-size: 1.2rem;
  margin: 0 0 0.25rem 0;
  color: #111827;
}

.experience-header h5 {
  font-size: 1rem;
  color: #4b5563;
  font-weight: 500;
  margin: 0;
}

.experience-date {
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
}

.experience-description {
  margin: 0 0 1rem 0;
  padding-left: 1.5rem;
  line-height: 1.7;
  color: #4b5563;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.education-item {
  margin-bottom: 1.5rem;
}

.education-item h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.education-item h5 {
  margin: 0 0 0.25rem 0;
  color: #4b5563;
  font-weight: 500;
}

.education-date {
  color: #6b7280;
  font-size: 0.9rem;
}

.skill-group {
  margin-bottom: 1.5rem;
}

.skill-group h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: #374151;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #f3f4f6;
  color: #1f2937;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
}

.cv-footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .cv-container {
    padding: 1rem;
  }
  
  .cv-header {
    padding: 2rem 1.5rem;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .contact-info {
    justify-content: center;
  }
  
  .two-columns {
    grid-template-columns: 1fr;
  }
  
  .experience-header {
    flex-direction: column;
  }
}
</style>
