<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/sections/PageHero.vue'
import TestimonialCard from '../components/sections/TestimonialCard.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Tag from '../components/ui/Tag.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'
import TheContainer from '../components/layout/TheContainer.vue'
import { cases } from '../data/cases.js'

const activeIndustry = ref('全部')

const industries = computed(() => {
  const unique = [...new Set(cases.map(c => c.industry))]
  return ['全部', ...unique]
})

const filteredCases = computed(() => {
  if (activeIndustry.value === '全部') return cases
  return cases.filter(c => c.industry === activeIndustry.value)
})

const featuredTestimonials = cases.slice(0, 3)
</script>

<template>
  <div class="cases-view">
    <PageHero title="客户案例" subtitle="看看我们的客户如何取得成功" />

    <section class="section section--cases">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="成功案例" subtitle="来自各行业的客户故事" align="center" />
        </ScrollReveal>

        <ScrollReveal direction="up" :delay="80">
          <div class="filter-tabs">
            <Tag
              v-for="industry in industries"
              :key="industry"
              :label="industry"
              :variant="activeIndustry === industry ? 'primary' : 'default'"
              :active="activeIndustry === industry"
              @click="activeIndustry = industry"
            />
          </div>
        </ScrollReveal>

        <div class="cases-grid">
          <ScrollReveal
            v-for="(caseItem, index) in filteredCases"
            :key="caseItem.id"
            direction="up"
            :delay="index * 80"
          >
            <div class="case-card">
              <div class="case-card-header">
                <h3 class="case-company">{{ caseItem.company }}</h3>
                <Tag :label="caseItem.industry" variant="outline" />
              </div>
              <div class="case-metric">
                <span class="case-metric-value">{{ caseItem.metric }}</span>
              </div>
              <p class="case-quote">{{ caseItem.quote }}</p>
              <div class="case-author">
                <span class="case-author-name">{{ caseItem.author }}</span>
                <span class="case-author-role">{{ caseItem.role }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--testimonials">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="客户评价" subtitle="听听客户怎么说" align="center" />
        </ScrollReveal>
        <div class="testimonials-grid">
          <ScrollReveal
            v-for="(item, index) in featuredTestimonials"
            :key="item.id"
            direction="up"
            :delay="index * 120"
          >
            <TestimonialCard
              :quote="item.quote"
              :author="item.author"
              :role="item.role"
              :company="item.company"
            />
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>
  </div>
</template>

<style scoped>
.cases-view {
  background-color: var(--color-bg);
}

.section {
  padding: var(--space-20) 0;
}

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: center;
  margin-bottom: var(--space-12);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.case-card {
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.case-card:hover {
  box-shadow: var(--shadow-md);
}

.case-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.case-company {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-text);
}

.case-metric {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background-color: var(--color-primary-soft, rgba(59, 130, 246, 0.08));
}

.case-metric-value {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-primary);
}

.case-quote {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  flex-grow: 1;
}

.case-author {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.case-author-name {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

.case-author-role {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
}

.section--testimonials {
  background-color: var(--color-bg-soft);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-10);
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
