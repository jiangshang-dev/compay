<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: null
  },
  large: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section :class="['hero', { 'hero--large': large }]">
    <div class="hero__bg-shapes">
      <svg class="hero__shape hero__shape--1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1"/>
      </svg>
      <svg class="hero__shape hero__shape--2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="1"/>
      </svg>
      <svg class="hero__shape hero__shape--3" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="50" x2="300" y2="50" stroke="currentColor" stroke-width="1"/>
        <line x1="150" y1="0" x2="150" y2="100" stroke="currentColor" stroke-width="1"/>
      </svg>
    </div>

    <div class="hero__content">
      <h1 class="hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
      <div v-if="$slots.default" class="hero__actions">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  overflow: hidden;
  padding: var(--space-16) var(--container-padding);
}

.hero--large {
  min-height: 100vh;
  background: linear-gradient(180deg, #E8F2FE 0%, #FFFFFF 100%);
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: var(--container-narrow);
  margin: 0 auto;
}

.hero__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin: 0;
}

.hero--large .hero__title {
  font-size: var(--text-5xl);
}

.hero__subtitle {
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: var(--space-6) auto 0;
  line-height: var(--leading-normal);
}

.hero__actions {
  margin-top: var(--space-8);
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

/* ── Animated background shapes ── */
.hero__bg-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  color: var(--color-primary);
  opacity: 0.08;
}

.hero__shape {
  position: absolute;
}

.hero__shape--1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: -5%;
  animation: float1 20s ease-in-out infinite;
}

.hero__shape--2 {
  width: 200px;
  height: 200px;
  bottom: 15%;
  right: -3%;
  animation: float2 15s ease-in-out infinite;
}

.hero__shape--3 {
  width: 400px;
  height: 120px;
  top: 40%;
  right: 10%;
  animation: float3 25s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(20px, -30px) rotate(5deg); }
  66% { transform: translate(-10px, 15px) rotate(-3deg); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-25px, -20px) rotate(-8deg); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(15px, 10px); }
  75% { transform: translate(-15px, -10px); }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .hero__title {
    font-size: var(--text-3xl);
  }

  .hero--large .hero__title {
    font-size: var(--text-4xl);
  }

  .hero__subtitle {
    font-size: var(--text-lg);
  }

  .hero {
    padding: var(--space-12) var(--container-padding);
  }
}
</style>
