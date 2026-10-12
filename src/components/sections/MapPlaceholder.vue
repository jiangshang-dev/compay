<script setup>
import IconSvg from '../ui/IconSvg.vue'

defineProps({
  address: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="map-placeholder">
    <div class="map-placeholder__grid"></div>
    <div class="map-placeholder__content">
      <IconSvg name="location" :size="32" color="var(--color-primary)" />
      <p v-if="address" class="map-placeholder__address">{{ address }}</p>
    </div>
  </div>
</template>

<style scoped>
.map-placeholder {
  position: relative;
  aspect-ratio: 16 / 7;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.map-placeholder__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  text-align: center;
  padding: var(--space-4);
}

.map-placeholder__address {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  margin: 0;
  max-width: 300px;
}
</style>
