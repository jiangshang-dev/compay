<script setup>
defineProps({
  logos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="partner-logos">
    <div class="partner-logos__container">
      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="partner-logos__item"
      >
        <span class="partner-logos__text">{{ logo }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partner-logos {
  padding: var(--space-12) 0;
}

.partner-logos__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-8);
}

.partner-logos__item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 72px;
  padding: var(--space-4) var(--space-6);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  background: var(--color-bg);
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all var(--duration-normal) var(--ease-out);
}

.partner-logos__item:hover {
  filter: grayscale(0%);
  opacity: 1;
  border-color: var(--color-primary);
  box-shadow: var(--shadow-sm);
}

.partner-logos__text {
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  white-space: nowrap;
  transition: color var(--duration-normal) var(--ease-out);
}

.partner-logos__item:hover .partner-logos__text {
  color: var(--color-primary);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .partner-logos__container {
    gap: var(--space-4);
  }

  .partner-logos__item {
    min-width: 130px;
    height: 60px;
    padding: var(--space-3) var(--space-4);
  }

  .partner-logos__text {
    font-size: var(--text-sm);
  }
}
</style>
