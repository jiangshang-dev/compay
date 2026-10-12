<script setup>
import AppButton from '../components/ui/AppButton.vue'
</script>

<template>
  <div class="not-found">
    <div class="not-found-content">
      <p class="not-found-code">404</p>
      <h1 class="not-found-title">页面未找到</h1>
      <p class="not-found-subtitle">抱歉，您访问的页面不存在或已被移动</p>
      <div class="not-found-action">
        <AppButton variant="primary" size="lg" to="/">返回首页</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-20);
  background-color: var(--color-bg);
}

.not-found-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.not-found-code {
  font-size: var(--text-9xl);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  letter-spacing: -0.02em;
}

.not-found-title {
  font-size: var(--text-3xl);
  font-weight: 600;
  color: var(--color-text);
  margin-top: var(--space-2);
}

.not-found-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 24rem;
}

.not-found-action {
  margin-top: var(--space-8);
}
</style>
