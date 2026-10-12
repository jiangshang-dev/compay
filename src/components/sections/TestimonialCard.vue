<script setup>
defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: null
  },
  company: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="testimonial-card">
    <div class="testimonial-card__quote-mark">"</div>
    <blockquote class="testimonial-card__quote">{{ quote }}</blockquote>
    <div class="testimonial-card__author">
      <span class="testimonial-card__name">{{ author }}</span>
      <span v-if="role || company" class="testimonial-card__info">
        {{ [role, company].filter(Boolean).join('，') }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  background: var(--color-bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: 32px;
  position: relative;
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.testimonial-card:hover {
  box-shadow: var(--shadow-md);
}

.testimonial-card__quote-mark {
  font-size: 4rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  opacity: 0.15;
  line-height: 1;
  position: absolute;
  top: 16px;
  left: 24px;
  pointer-events: none;
  user-select: none;
}

.testimonial-card__quote {
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--color-text);
  line-height: var(--leading-loose);
  margin: 0 0 var(--space-6);
  position: relative;
  z-index: 1;
}

.testimonial-card__author {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.testimonial-card__name {
  font-size: var(--text-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.testimonial-card__info {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}
</style>
