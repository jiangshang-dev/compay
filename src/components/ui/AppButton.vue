<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  to: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const tag = computed(() => (props.to ? 'router-link' : 'button'))

const componentProps = computed(() => {
  if (props.to) {
    return { to: props.to }
  }
  return { disabled: props.disabled, type: 'button' }
})

const classes = computed(() => [
  'app-button',
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
  { 'app-button--disabled': props.disabled }
])
</script>

<template>
  <component :is="tag" v-bind="componentProps" :class="classes">
    <slot />
  </component>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 500;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--radius-full, 9999px);
  transition: all var(--duration-normal, 0.2s) var(--ease-out, ease-out);
  white-space: nowrap;
  line-height: 1.2;
}

.app-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Variants */
.app-button--primary {
  background-color: var(--color-primary, #0071e3);
  color: #ffffff;
}

.app-button--primary:hover {
  background-color: #005bb5;
}

.app-button--primary:active {
  background-color: #004a94;
}

.app-button--secondary {
  background-color: transparent;
  color: var(--color-primary, #0071e3);
  border: 2px solid var(--color-primary, #0071e3);
}

.app-button--secondary:hover {
  background-color: var(--color-primary, #0071e3);
  color: #ffffff;
}

.app-button--ghost {
  background-color: transparent;
  color: var(--color-primary, #0071e3);
  border: none;
}

.app-button--ghost:hover {
  background-color: rgba(0, 113, 227, 0.08);
}

/* Sizes */
.app-button--sm {
  padding: 8px 16px;
  font-size: 14px;
}

.app-button--md {
  padding: 12px 24px;
  font-size: 16px;
}

.app-button--lg {
  padding: 16px 32px;
  font-size: 18px;
}
</style>
