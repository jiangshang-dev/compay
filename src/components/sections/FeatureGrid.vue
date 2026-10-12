<script setup>
import IconSvg from '../ui/IconSvg.vue'

defineProps({
  items: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(i => 'title' in i && 'description' in i)
  }
})
</script>

<template>
  <section class="feature-grid">
    <div class="feature-grid__container">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="feature-grid__item"
      >
        <div class="feature-grid__icon">
          <IconSvg :name="item.icon || 'star'" :size="24" color="#fff" />
        </div>
        <h3 class="feature-grid__title">{{ item.title }}</h3>
        <p class="feature-grid__description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-grid {
  padding: var(--space-16) 0;
}

.feature-grid__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.feature-grid__item {
  padding: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg);
  transition: box-shadow var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

.feature-grid__item:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.feature-grid__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-5);
}

.feature-grid__title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 0 0 var(--space-3);
}

.feature-grid__description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .feature-grid__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .feature-grid__container {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}
</style>
