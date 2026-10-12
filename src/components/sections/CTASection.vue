<script setup>
defineProps({
  title: {
    type: String,
    default: '准备好开始了吗？'
  },
  buttonText: {
    type: String,
    default: '立即咨询'
  },
  to: {
    type: String,
    default: '/contact'
  }
})
</script>

<template>
  <section class="cta-section">
    <div class="cta-section__container">
      <h2 class="cta-section__title">{{ title }}</h2>
      <router-link :to="to" class="cta-section__button">
        {{ buttonText }}
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: var(--color-primary);
  padding: var(--space-20) 0;
}

.cta-section__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  text-align: center;
}

.cta-section__title {
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  color: #fff;
  margin: 0 0 var(--space-8);
  line-height: var(--leading-tight);
}

.cta-section__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-10);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  background: #fff;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out);
  box-shadow: var(--shadow-md);
}

.cta-section__button:hover {
  background: var(--color-bg-secondary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  color: var(--color-primary);
}
</style>
