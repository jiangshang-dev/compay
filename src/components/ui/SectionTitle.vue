<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: null
  },
  align: {
    type: String,
    default: 'center',
    validator: (v) => ['left', 'center'].includes(v)
  }
})

const wrapperClasses = computed(() => [
  'section-title',
  `section-title--${props.align}`
])

const showDecorativeLine = computed(() => !props.subtitle)
</script>

<template>
  <div :class="wrapperClasses">
    <h2 class="section-title__title">{{ title }}</h2>
    <div v-if="showDecorativeLine" class="section-title__line"></div>
    <p v-if="subtitle" class="section-title__subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: var(--space-12, 48px);
}

.section-title--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-title--left {
  text-align: left;
}

.section-title__title {
  font-size: var(--text-4xl, 2.25rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-text-primary, #1d1d1f);
  margin: 0;
  line-height: 1.2;
}

.section-title__line {
  width: 40px;
  height: 3px;
  background-color: var(--color-primary, #0071e3);
  border-radius: 2px;
  margin-top: var(--space-4, 16px);
  margin-bottom: var(--space-4, 16px);
}

.section-title__subtitle {
  font-size: var(--text-lg, 1.125rem);
  color: var(--color-text-secondary, #6e6e73);
  max-width: 600px;
  margin: var(--space-4, 16px) 0 0 0;
  line-height: 1.6;
}
</style>
