<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(i => 'value' in i && 'label' in i)
  }
})
</script>

<template>
  <section class="stats-bar">
    <div class="stats-bar__container">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="stats-bar__item"
      >
        <div class="stats-bar__value">{{ item.value }}</div>
        <div class="stats-bar__label">{{ item.label }}</div>
        <div v-if="index < items.length - 1" class="stats-bar__divider"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-bar {
  padding: var(--space-16) 0;
}

.stats-bar__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--space-8);
  flex-wrap: wrap;
}

.stats-bar__item {
  position: relative;
  text-align: center;
  padding: 0 var(--space-8);
  flex: 1;
  min-width: 140px;
}

.stats-bar__value {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: var(--leading-tight);
}

.stats-bar__label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
}

.stats-bar__divider {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 48px;
  background: var(--color-border-light);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .stats-bar__container {
    gap: var(--space-6);
  }

  .stats-bar__item {
    padding: 0 var(--space-4);
    min-width: 120px;
  }

  .stats-bar__value {
    font-size: var(--text-3xl);
  }

  .stats-bar__divider {
    display: none;
  }
}
</style>
