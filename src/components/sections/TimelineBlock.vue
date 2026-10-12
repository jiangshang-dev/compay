<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(i => 'year' in i && 'title' in i)
  }
})
</script>

<template>
  <section class="timeline">
    <div class="timeline__container">
      <div class="timeline__line"></div>

      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['timeline__item', { 'timeline__item--right': index % 2 === 1 }]"
      >
        <div class="timeline__dot"></div>

        <div class="timeline__content">
          <span class="timeline__year">{{ item.year }}</span>
          <h3 class="timeline__title">{{ item.title }}</h3>
          <p v-if="item.description" class="timeline__description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  padding: var(--space-16) 0;
}

.timeline__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
}

.timeline__line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-primary);
  transform: translateX(-50%);
  opacity: 0.3;
}

.timeline__item {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + var(--space-8));
  padding-bottom: var(--space-12);
}

.timeline__item--right {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + var(--space-8));
}

.timeline__dot {
  position: absolute;
  left: 50%;
  top: var(--space-2);
  width: 14px;
  height: 14px;
  background: var(--color-primary);
  border: 3px solid var(--color-bg);
  border-radius: var(--radius-full);
  transform: translateX(-50%);
  box-shadow: 0 0 0 2px var(--color-primary);
  z-index: 1;
}

.timeline__content {
  max-width: 400px;
}

.timeline__year {
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: #fff;
  background: var(--color-primary);
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-3);
}

.timeline__title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 0 0 var(--space-2);
}

.timeline__description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  margin: 0;
}

/* ── Responsive: all items on the right ── */
@media (max-width: 768px) {
  .timeline__line {
    left: 16px;
  }

  .timeline__item {
    padding-right: 0;
    padding-left: calc(32px + var(--space-8));
    justify-content: flex-start;
  }

  .timeline__item--right {
    padding-left: calc(32px + var(--space-8));
  }

  .timeline__dot {
    left: 16px;
  }

  .timeline__content {
    max-width: 100%;
  }
}
</style>
