<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: null
  }
})
</script>

<template>
  <section class="page-hero">
    <div class="page-hero__content">
      <h1 class="page-hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="page-hero__subtitle">{{ subtitle }}</p>
      <nav class="page-hero__breadcrumb">
        <router-link to="/" class="page-hero__breadcrumb-link">首页</router-link>
        <span class="page-hero__breadcrumb-sep">&gt;</span>
        <span class="page-hero__breadcrumb-current">{{ title }}</span>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  padding: 0 var(--container-padding);
}

.page-hero__content {
  text-align: center;
  max-width: var(--container-narrow);
}

.page-hero__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin: 0;
}

.page-hero__subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-top: var(--space-4);
  line-height: var(--leading-normal);
}

.page-hero__breadcrumb {
  margin-top: var(--space-6);
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

.page-hero__breadcrumb-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.page-hero__breadcrumb-link:hover {
  color: var(--color-primary);
}

.page-hero__breadcrumb-sep {
  color: var(--color-border);
}

.page-hero__breadcrumb-current {
  color: var(--color-text-secondary);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .page-hero {
    height: auto;
    min-height: 240px;
    padding: var(--space-12) var(--container-padding);
  }

  .page-hero__title {
    font-size: var(--text-3xl);
  }
}
</style>
