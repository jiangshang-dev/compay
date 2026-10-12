<script setup>
defineProps({
  wide: {
    type: Boolean,
    default: false
  },
  narrow: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="container" :class="{ wide, narrow }">
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: var(--container-max, 1200px);
  margin: 0 auto;
  padding: 0 var(--container-padding, 24px);
  width: 100%;
  box-sizing: border-box;
}

.container.wide {
  max-width: 1400px;
}

.container.narrow {
  max-width: var(--container-narrow, 800px);
}
</style>
