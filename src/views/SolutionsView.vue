<script setup>
import PageHero from '../components/sections/PageHero.vue'
import FeatureGrid from '../components/sections/FeatureGrid.vue'
import CTASection from '../components/sections/CTASection.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'
import TheContainer from '../components/layout/TheContainer.vue'
import { solutions } from '../data/solutions.js'

const capabilities = [
  { icon: '⚡', title: '快速部署', description: '标准化交付流程，最快 2 周完成系统上线' },
  { icon: '🔧', title: '灵活定制', description: '模块化架构设计，支持按需定制功能模块' },
  { icon: '📊', title: '数据驱动', description: '内置强大的数据分析与可视化能力' },
  { icon: '🛡️', title: '安全保障', description: '企业级安全防护，满足行业合规要求' }
]
</script>

<template>
  <div class="solutions-view">
    <PageHero title="解决方案" subtitle="针对不同行业的定制化解决方案" />

    <section class="section section--solutions">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="行业解决方案" subtitle="深入了解各行业痛点，提供精准解决方案" align="center" />
        </ScrollReveal>

        <div
          v-for="(solution, index) in solutions"
          :key="solution.id"
          class="solution-row"
          :class="{ 'solution-row--reverse': index % 2 !== 0 }"
        >
          <ScrollReveal :direction="index % 2 === 0 ? 'left' : 'right'">
            <div class="solution-image">
              <div class="solution-image-inner">
                <span class="solution-icon">{{ solution.icon }}</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal :direction="index % 2 === 0 ? 'right' : 'left'" :delay="100">
            <div class="solution-content">
              <h3 class="solution-title">{{ solution.title }}</h3>
              <p class="solution-desc">{{ solution.description }}</p>
              <div class="solution-usecases">
                <h4 class="usecases-heading">应用场景</h4>
                <ul class="usecases-list">
                  <li v-for="useCase in solution.useCases" :key="useCase" class="usecases-item">
                    {{ useCase }}
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--capabilities">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="核心能力" subtitle="所有解决方案共享的技术优势" align="center" />
        </ScrollReveal>
        <ScrollReveal direction="up" :delay="100">
          <FeatureGrid :items="capabilities" />
        </ScrollReveal>
      </TheContainer>
    </section>

    <section class="section section--cta">
      <TheContainer>
        <CTASection
          title="寻找适合您的解决方案？"
          buttonText="立即咨询"
          to="/contact"
        />
      </TheContainer>
    </section>
  </div>
</template>

<style scoped>
.solutions-view {
  background-color: var(--color-bg);
}

.section {
  padding: var(--space-20) 0;
}

.solution-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  margin-top: var(--space-16);
}

.solution-row:first-of-type {
  margin-top: var(--space-10);
}

.solution-row--reverse {
  direction: rtl;
}

.solution-row--reverse > * {
  direction: ltr;
}

.solution-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.solution-image-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--color-primary-soft, #e8f0fe),
    var(--color-accent-soft, #fce8e6)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.solution-icon {
  font-size: 4rem;
}

.solution-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.solution-title {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-text);
}

.solution-desc {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.usecases-heading {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
}

.usecases-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.usecases-item {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding-left: var(--space-5);
  position: relative;
}

.usecases-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
}

.section--capabilities {
  background-color: var(--color-bg-soft);
}

.section--cta {
  padding: var(--space-24) 0;
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }

  .solution-row,
  .solution-row--reverse {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    direction: ltr;
  }
}
</style>
