<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  link: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: null
  }
})

const hasIcon = computed(() => !!props.icon)
const hasLink = computed(() => !!props.link)
</script>

<template>
  <div class="card">
    <div v-if="tag" class="card__tag">{{ tag }}</div>

    <div v-if="hasIcon" class="card__icon">
      {{ icon }}
    </div>

    <h3 v-if="title" class="card__title">{{ title }}</h3>

    <p v-if="description" class="card__description">{{ description }}</p>

    <slot />

    <router-link v-if="hasLink" :to="link" class="card__link">
      了解更多 →
    </router-link>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  background-color: #ffffff;
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--shadow-sm, 0 1px 3px rgba(0, 0, 0, 0.08));
  padding: 32px;
  transition: all var(--duration-normal, 0.2s) var(--ease-out, ease-out);
}

.card:hover {
  box-shadow: var(--shadow-md, 0 4px 12px rgba(0, 0, 0, 0.12));
  transform: translateY(-4px);
}

.card__tag {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: var(--text-xs, 0.75rem);
  background-color: var(--color-primary, #0071e3);
  color: #ffffff;
  padding: 4px 12px;
  border-radius: var(--radius-full, 9999px);
  font-weight: 500;
}

.card__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-primary, #0071e3);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: var(--space-4, 16px);
}

.card__title {
  font-size: var(--text-xl, 1.25rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-text-primary, #1d1d1f);
  margin: 0 0 var(--space-2, 8px) 0;
}

.card__description {
  font-size: var(--text-base, 1rem);
  color: var(--color-text-secondary, #6e6e73);
  line-height: 1.6;
  margin: 0 0 var(--space-4, 16px) 0;
}

.card__link {
  display: inline-block;
  color: var(--color-primary, #0071e3);
  font-weight: 500;
  text-decoration: none;
  margin-top: var(--space-2, 8px);
  transition: opacity var(--duration-normal, 0.2s) var(--ease-out, ease-out);
}

.card__link:hover {
  opacity: 0.7;
  text-decoration: underline;
}
</style>
