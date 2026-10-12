<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'primary', 'outline'].includes(v)
  },
  active: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => [
  'tag',
  `tag--${props.variant}`,
  { 'tag--active': props.active }
])
</script>

<template>
  <span :class="classes">{{ label }}</span>
</template>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  font-size: var(--text-sm, 0.875rem);
  font-weight: 500;
  border-radius: var(--radius-full, 9999px);
  white-space: nowrap;
  line-height: 1.4;
  transition: all var(--duration-normal, 0.2s) var(--ease-out, ease-out);
  cursor: default;
}

/* Default variant */
.tag--default {
  background-color: #f2f2f7;
  color: #1d1d1f;
  border: 1px solid transparent;
}

.tag--default.tag--active {
  background-color: var(--color-primary, #0071e3);
  color: #ffffff;
}

/* Primary variant */
.tag--primary {
  background-color: var(--color-primary, #0071e3);
  color: #ffffff;
  border: 1px solid transparent;
}

.tag--primary.tag--active {
  background-color: var(--color-primary, #0071e3);
  color: #ffffff;
}

/* Outline variant */
.tag--outline {
  background-color: transparent;
  color: #1d1d1f;
  border: 1px solid #d2d2d7;
}

.tag--outline.tag--active {
  background-color: var(--color-primary, #0071e3);
  color: #ffffff;
  border-color: var(--color-primary, #0071e3);
}
</style>
