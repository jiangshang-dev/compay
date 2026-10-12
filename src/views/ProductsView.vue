<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/sections/PageHero.vue'
import CTASection from '../components/sections/CTASection.vue'
import Card from '../components/ui/Card.vue'
import Tag from '../components/ui/Tag.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'
import TheContainer from '../components/layout/TheContainer.vue'
import { products, categories } from '../data/products.js'

const activeCategory = ref('全部')

const allCategories = computed(() => ['全部', ...categories])

const filteredProducts = computed(() => {
  if (activeCategory.value === '全部') return products
  return products.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <div class="products-view">
    <PageHero title="产品与服务" subtitle="全方位的企业数字化解决方案" />

    <section class="section section--filters">
      <TheContainer>
        <ScrollReveal direction="up">
          <div class="category-tabs">
            <Tag
              v-for="cat in allCategories"
              :key="cat"
              :label="cat"
              :variant="activeCategory === cat ? 'primary' : 'default'"
              :active="activeCategory === cat"
              @click="activeCategory = cat"
            />
          </div>
        </ScrollReveal>

        <div class="product-grid">
          <ScrollReveal
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            direction="up"
            :delay="index * 80"
          >
            <Card
              :title="product.title"
              :description="product.description"
              :icon="product.icon"
              :tag="product.category"
              :link="`/products#${product.id}`"
            />
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--cta">
      <TheContainer>
        <CTASection
          title="需要定制方案？"
          buttonText="联系我们"
          to="/contact"
        />
      </TheContainer>
    </section>
  </div>
</template>

<style scoped>
.products-view {
  background-color: var(--color-bg);
}

.section {
  padding: var(--space-20) 0;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: center;
  margin-bottom: var(--space-12);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.section--cta {
  padding: var(--space-24) 0;
  background-color: var(--color-bg-soft);
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }

  .product-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .category-tabs {
    gap: var(--space-2);
  }
}
</style>
