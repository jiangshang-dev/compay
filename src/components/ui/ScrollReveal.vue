<script setup>
import { computed, ref } from 'vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation.js'

const props = defineProps({
  direction: {
    type: String,
    default: 'up',
    validator: (v) => ['up', 'left', 'right'].includes(v)
  },
  delay: {
    type: Number,
    default: 0
  },
  threshold: {
    type: Number,
    default: 0.15
  }
})

const el = ref(null)
const { isVisible } = useScrollAnimation(el, { threshold: props.threshold })

const classes = computed(() => [
  'reveal',
  {
    'reveal-left': props.direction === 'left',
    'reveal-right': props.direction === 'right',
    visible: isVisible.value
  }
])
</script>

<template>
  <div
    ref="el"
    :class="classes"
    :style="{ transitionDelay: delay + 'ms' }"
  >
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity var(--duration-slow, 0.6s) var(--ease-out, ease-out),
    transform var(--duration-slow, 0.6s) var(--ease-out, ease-out);
}

.reveal-left {
  transform: translateX(-40px);
}

.reveal-right {
  transform: translateX(40px);
}

.reveal.visible {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
