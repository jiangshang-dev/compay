import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation(el, options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options

  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    const target = el.value || el
    if (!target) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            isVisible.value = false
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(target)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { isVisible }
}
