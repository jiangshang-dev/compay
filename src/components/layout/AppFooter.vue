<script setup>
import { footerColumns, companyInfo } from '../../data/navigation.js'
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <div class="app-footer__columns">
        <div
          v-for="column in footerColumns"
          :key="column.title"
          class="app-footer__column"
        >
          <h4 class="app-footer__column-title">{{ column.title }}</h4>
          <ul class="app-footer__link-list">
            <li v-for="link in column.links" :key="link.label">
              <router-link :to="link.to" class="app-footer__link">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="app-footer__social">
        <a href="#" class="app-footer__social-link" aria-label="微信">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.5C7.47 15.83 8.47 16 9.5 16c.87 0 1.7-.1 2.47-.3C11.36 14.56 11 13.33 11 12c0-3.87 3.13-7 7-7 .34 0 .68.03 1 .08C17.87 3.24 14 2 9.5 4zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7-1c-3.31 0-6 2.24-6 5s2.69 5 6 5c.83 0 1.62-.13 2.35-.37L22 19l-.6-1.82C22.4 16.18 23 14.67 23 13c0-2.76-2.69-5-6-5zm-1.5 4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
          </svg>
        </a>
        <a href="#" class="app-footer__social-link" aria-label="微博">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.09 18.71c-3.54.4-6.6-1.26-6.84-3.71-.24-2.45 2.44-4.74 5.98-5.14 3.54-.4 6.6 1.26 6.84 3.71.24 2.45-2.44 4.74-5.98 5.14zM20 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-2-4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-6.84 9.14c-2.48.28-4.36 1.83-4.2 3.46.16 1.63 2.3 2.73 4.78 2.45 2.48-.28 4.36-1.83 4.2-3.46-.16-1.63-2.3-2.73-4.78-2.45z"/>
          </svg>
        </a>
        <a href="#" class="app-footer__social-link" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </div>

      <div class="app-footer__bottom">
        <p class="app-footer__company">{{ companyInfo.name }}</p>
        <p class="app-footer__copyright">{{ companyInfo.copyright }}</p>
        <p class="app-footer__icp">{{ companyInfo.icp }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #1D1D1F;
  color: var(--color-text-inverse);
  padding: var(--space-16) 0 var(--space-8);
}

.app-footer__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.app-footer__columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.app-footer__column-title {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: var(--space-4);
}

.app-footer__link-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.app-footer__link {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.app-footer__link:hover {
  color: #fff;
}

.app-footer__social {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) 0;
}

.app-footer__social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  transition: all var(--duration-fast) var(--ease-out);
}

.app-footer__social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.app-footer__bottom {
  text-align: center;
  padding-top: var(--space-6);
}

.app-footer__company {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.app-footer__copyright {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: var(--space-1);
}

.app-footer__icp {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.35);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .app-footer__columns {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .app-footer__columns {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}
</style>
