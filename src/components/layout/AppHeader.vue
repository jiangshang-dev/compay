<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { navItems } from '../../data/navigation.js'
import IconSvg from '../ui/IconSvg.vue'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const isActive = (to) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['app-header', { 'app-header--scrolled': isScrolled }]">
    <div class="app-header__container">
      <router-link to="/" class="app-header__logo">星辰科技</router-link>

      <nav class="app-header__nav">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="['app-header__nav-link', { 'app-header__nav-link--active': isActive(item.to) }]"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <router-link to="/contact" class="app-header__cta">立即咨询</router-link>

      <button
        class="app-header__menu-btn"
        :aria-label="isMobileMenuOpen ? '关闭菜单' : '打开菜单'"
        @click="toggleMobileMenu"
      >
        <IconSvg :name="isMobileMenuOpen ? 'close' : 'menu'" :size="24" />
      </button>
    </div>

    <Transition name="drawer">
      <div v-if="isMobileMenuOpen" class="app-header__drawer">
        <nav class="app-header__drawer-nav">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="['app-header__drawer-link', { 'app-header__drawer-link--active': isActive(item.to) }]"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>
        <router-link to="/contact" class="app-header__drawer-cta" @click="closeMobileMenu">
          立即咨询
        </router-link>
      </div>
    </Transition>
  </header>

  <Transition name="overlay">
    <div v-if="isMobileMenuOpen" class="app-header__overlay" @click="closeMobileMenu"></div>
  </Transition>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  background: rgba(255, 255, 255, 0);
  transition: background var(--duration-normal) var(--ease-out),
    backdrop-filter var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.app-header--scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow-sm);
}

.app-header__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.app-header__logo {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.app-header__logo:hover {
  color: var(--color-primary);
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.app-header__nav-link {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-2) 0;
  border-bottom: 2px solid transparent;
  transition: color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out);
}

.app-header__nav-link:hover {
  color: var(--color-text);
}

.app-header__nav-link--active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.app-header__cta {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: #fff;
  background: var(--color-primary);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-full);
  text-decoration: none;
  white-space: nowrap;
  transition: background var(--duration-fast) var(--ease-out);
}

.app-header__cta:hover {
  background: var(--color-primary-hover);
  color: #fff;
}

.app-header__menu-btn {
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  color: var(--color-text);
  transition: background var(--duration-fast) var(--ease-out);
}

.app-header__menu-btn:hover {
  background: var(--color-bg-secondary);
}

/* ── Mobile Drawer ── */
.app-header__drawer {
  display: none;
  position: fixed;
  top: 64px;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 320px;
  background: var(--color-bg);
  box-shadow: var(--shadow-xl);
  padding: var(--space-6);
  overflow-y: auto;
  z-index: var(--z-overlay);
}

.app-header__drawer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.app-header__drawer-link {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-4) var(--space-4);
  border-radius: var(--radius-md);
  border-left: 3px solid transparent;
  transition: all var(--duration-fast) var(--ease-out);
}

.app-header__drawer-link:hover {
  color: var(--color-text);
  background: var(--color-bg-secondary);
}

.app-header__drawer-link--active {
  color: var(--color-primary);
  border-left-color: var(--color-primary);
  background: var(--color-primary-light);
}

.app-header__drawer-cta {
  display: block;
  margin-top: var(--space-6);
  padding: var(--space-4);
  text-align: center;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: #fff;
  background: var(--color-primary);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background var(--duration-fast) var(--ease-out);
}

.app-header__drawer-cta:hover {
  background: var(--color-primary-hover);
  color: #fff;
}

.app-header__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: calc(var(--z-overlay) - 1);
}

/* ── Drawer transitions ── */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform var(--duration-normal) var(--ease-out),
    opacity var(--duration-normal) var(--ease-out);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity var(--duration-normal) var(--ease-out);
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .app-header__nav,
  .app-header__cta {
    display: none;
  }

  .app-header__menu-btn {
    display: inline-flex;
  }

  .app-header__drawer {
    display: block;
  }
}

@media (max-width: 768px) {
  .app-header__drawer {
    max-width: 100%;
  }
}
</style>
