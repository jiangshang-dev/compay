<script setup>
import { ref } from 'vue'
import PageHero from '../components/sections/PageHero.vue'
import FeatureGrid from '../components/sections/FeatureGrid.vue'
import CTASection from '../components/sections/CTASection.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Tag from '../components/ui/Tag.vue'
import AppButton from '../components/ui/AppButton.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'
import TheContainer from '../components/layout/TheContainer.vue'
import { jobs } from '../data/jobs.js'

const expandedJobId = ref(null)

const culture = [
  {
    icon: '💡',
    title: '创新文化',
    description: '鼓励每一位团队成员大胆创新，我们提供开放的技术环境与充足的探索空间，让好想法落地生根。'
  },
  {
    icon: '🤝',
    title: '团队协作',
    description: '我们相信最好的产品来自紧密协作。跨部门合作、知识共享、扁平化管理是我们的工作方式。'
  },
  {
    icon: '⚖️',
    title: '工作生活平衡',
    description: '尊重每个人的个人时间，弹性工作制度、丰富的团建活动，让工作与生活和谐共存。'
  }
]

const benefits = [
  { icon: '🏥', title: '健康保障', description: '全面医疗保险、年度体检、健身房补贴' },
  { icon: '🏠', title: '远程办公', description: '灵活的远程工作政策，每周可在家办公' },
  { icon: '📚', title: '学习发展', description: '年度学习基金、技术大会、内部培训' },
  { icon: '🎉', title: '团队活动', description: '季度团建、年度旅游、节日派对' },
  { icon: '📈', title: '股权激励', description: '核心员工股权计划，共享公司发展成果' },
  { icon: '⏰', title: '弹性工作', description: '弹性上下班时间，尊重个人节奏' }
]

function toggleJob(id) {
  expandedJobId.value = expandedJobId.value === id ? null : id
}
</script>

<template>
  <div class="careers-view">
    <PageHero title="加入我们" subtitle="与优秀的人一起，做有意义的事" />

    <section class="section section--culture">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="我们的文化" subtitle="在这里，每个人都很重要" align="center" />
        </ScrollReveal>
        <ScrollReveal direction="up" :delay="100">
          <FeatureGrid :items="culture" />
        </ScrollReveal>
      </TheContainer>
    </section>

    <section class="section section--benefits">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="福利待遇" subtitle="我们用心照顾每一位伙伴" align="center" />
        </ScrollReveal>
        <div class="benefits-grid">
          <ScrollReveal
            v-for="(benefit, index) in benefits"
            :key="index"
            direction="up"
            :delay="index * 80"
          >
            <div class="benefit-card">
              <span class="benefit-icon">{{ benefit.icon }}</span>
              <h3 class="benefit-title">{{ benefit.title }}</h3>
              <p class="benefit-desc">{{ benefit.description }}</p>
            </div>
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--jobs">
      <TheContainer narrow>
        <ScrollReveal direction="up">
          <SectionTitle title="开放职位" subtitle="期待你的加入" align="center" />
        </ScrollReveal>

        <div class="job-list">
          <ScrollReveal
            v-for="(job, index) in jobs"
            :key="job.id"
            direction="up"
            :delay="index * 60"
          >
            <div
              class="job-item"
              :class="{ 'job-item--expanded': expandedJobId === job.id }"
            >
              <button
                class="job-header"
                @click="toggleJob(job.id)"
              >
                <div class="job-header-main">
                  <h3 class="job-title">{{ job.title }}</h3>
                  <div class="job-tags">
                    <Tag :label="job.department" variant="outline" />
                    <span class="job-meta">{{ job.location }}</span>
                    <span class="job-meta">{{ job.type }}</span>
                  </div>
                </div>
                <span
                  class="job-chevron"
                  :class="{ 'job-chevron--open': expandedJobId === job.id }"
                >›</span>
              </button>

              <div v-if="expandedJobId === job.id" class="job-body">
                <p class="job-description">{{ job.description }}</p>
                <div class="job-requirements">
                  <h4 class="requirements-heading">任职要求</h4>
                  <ul class="requirements-list">
                    <li v-for="req in job.requirements" :key="req">{{ req }}</li>
                  </ul>
                </div>
                <div class="job-apply">
                  <AppButton variant="primary" size="md">申请职位</AppButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--cta">
      <TheContainer>
        <CTASection
          title="没找到合适的职位？"
          buttonText="发送简历"
          to="/contact"
        />
      </TheContainer>
    </section>
  </div>
</template>

<style scoped>
.careers-view {
  background-color: var(--color-bg);
}

.section {
  padding: var(--space-20) 0;
}

.section--culture {
  background-color: var(--color-bg);
}

.section--benefits {
  background-color: var(--color-bg-soft);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-10);
}

.benefit-card {
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  text-align: center;
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.benefit-card:hover {
  box-shadow: var(--shadow-md);
}

.benefit-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: var(--space-4);
}

.benefit-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.benefit-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.section--jobs {
  background-color: var(--color-bg);
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-10);
}

.job-item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--color-bg);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.job-item:hover {
  box-shadow: var(--shadow-sm);
}

.job-item--expanded {
  box-shadow: var(--shadow-md);
}

.job-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) var(--space-8);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.job-header-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.job-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
}

.job-tags {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.job-meta {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.job-chevron {
  font-size: var(--text-2xl);
  color: var(--color-text-secondary);
  transition: transform var(--duration-fast) var(--ease-out);
  line-height: 1;
}

.job-chevron--open {
  transform: rotate(90deg);
}

.job-body {
  padding: 0 var(--space-8) var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-6);
  margin-top: 0;
}

.job-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.requirements-heading {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.requirements-list li {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding-left: var(--space-5);
  position: relative;
  line-height: var(--leading-relaxed);
}

.requirements-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
}

.job-apply {
  padding-top: var(--space-4);
}

.section--cta {
  padding: var(--space-24) 0;
  background-color: var(--color-bg-soft);
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  .job-header {
    padding: var(--space-4) var(--space-5);
  }

  .job-body {
    padding: 0 var(--space-5) var(--space-5);
    padding-top: var(--space-4);
  }
}
</style>
