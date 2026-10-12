<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import FeatureGrid from '../components/sections/FeatureGrid.vue'
import StatsBar from '../components/sections/StatsBar.vue'
import PartnerLogos from '../components/sections/PartnerLogos.vue'
import CTASection from '../components/sections/CTASection.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Card from '../components/ui/Card.vue'
import AppButton from '../components/ui/AppButton.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'
import TheContainer from '../components/layout/TheContainer.vue'
import { products } from '../data/products.js'

const features = [
  {
    icon: '💡',
    title: '技术创新',
    description: '持续投入前沿技术研发，以人工智能、大数据、云计算等核心技术驱动业务创新'
  },
  {
    icon: '🔒',
    title: '安全可靠',
    description: '企业级安全架构，多层次数据保护体系，确保业务数据万无一失'
  },
  {
    icon: '🌍',
    title: '全球部署',
    description: '覆盖全球主要区域的数据中心网络，支持多地域部署与低延迟访问'
  },
  {
    icon: '🤝',
    title: '专业服务',
    description: '资深技术团队提供 7×24 小时全天候技术支持与定制化咨询服务'
  }
]

const stats = [
  { value: '10+', label: '年行业经验' },
  { value: '500+', label: '企业客户' },
  { value: '99.9%', label: '服务可用性' },
  { value: '50+', label: '城市覆盖' }
]

const partners = ['华为', '阿里巴巴', '腾讯', '字节跳动', '京东', '百度']

const featuredProducts = products.slice(0, 3)
</script>

<template>
  <main class="home">
    <!-- Hero Section -->
    <section class="home__hero">
      <HeroSection
        large
        title="用科技赋能未来"
        subtitle="我们为全球企业提供领先的数字化解决方案，助力企业实现智能化转型升级"
      >
        <div class="home__hero-actions">
          <AppButton variant="primary" to="/contact">立即咨询</AppButton>
          <AppButton variant="secondary" to="/products">了解更多</AppButton>
        </div>
      </HeroSection>
    </section>

    <!-- Feature Grid -->
    <section class="home__section">
      <TheContainer>
        <ScrollReveal>
          <FeatureGrid :items="features" />
        </ScrollReveal>
      </TheContainer>
    </section>

    <!-- Stats Bar -->
    <section class="home__section home__section--stats">
      <TheContainer>
        <ScrollReveal>
          <StatsBar :stats="stats" />
        </ScrollReveal>
      </TheContainer>
    </section>

    <!-- Product Preview -->
    <section class="home__section">
      <TheContainer>
        <ScrollReveal>
          <SectionTitle title="核心产品" />

          <div class="home__product-grid">
            <Card
              v-for="product in featuredProducts"
              :key="product.id"
              :title="product.name"
              :description="product.description"
            />
          </div>

          <div class="home__product-cta">
            <AppButton to="/products">查看全部产品</AppButton>
          </div>
        </ScrollReveal>
      </TheContainer>
    </section>

    <!-- Partner Logos -->
    <section class="home__section">
      <TheContainer>
        <ScrollReveal>
          <PartnerLogos :partners="partners" />
        </ScrollReveal>
      </TheContainer>
    </section>

    <!-- Call to Action -->
    <section class="home__section home__section--cta">
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </section>
  </main>
</template>

<style scoped>
/* ───────────────────────────────────────────
   Layout
   ─────────────────────────────────────────── */
.home {
  width: 100%;
  overflow: hidden;
  background-color: var(--color-bg);
}

/* ───────────────────────────────────────────
   Hero
   ─────────────────────────────────────────── */
.home__hero {
  padding-block: var(--space-24) var(--space-20);
}

.home__hero-actions {
  display: flex;
  gap: var(--space-4);
  align-items: center;
  justify-content: center;
  margin-top: var(--space-10);
}

/* ───────────────────────────────────────────
   Sections
   ─────────────────────────────────────────── */
.home__section {
  padding-block: var(--space-24);
}

.home__section--stats {
  padding-block: var(--space-20);
  background-color: var(--color-surface);
}

.home__section--cta {
  padding-block: var(--space-24);
}

/* ───────────────────────────────────────────
   Product Grid
   ─────────────────────────────────────────── */
.home__product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  margin-top: var(--space-12);
}

.home__product-cta {
  display: flex;
  justify-content: center;
  margin-top: var(--space-12);
}

/* ───────────────────────────────────────────
   Responsive
   ─────────────────────────────────────────── */
@media (max-width: 768px) {
  .home__hero {
    padding-block: var(--space-16) var(--space-12);
  }

  .home__section {
    padding-block: var(--space-16);
  }

  .home__section--stats {
    padding-block: var(--space-12);
  }

  .home__product-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .home__hero-actions {
    flex-direction: column;
    gap: var(--space-3);
  }
}
</style>
