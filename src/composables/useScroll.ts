import { nextTick, onMounted, onUnmounted, ref } from 'vue'

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const activeId = ref(sectionIds[0] ?? '')

  const update = () => {
    const scrollY = window.scrollY + offset
    let current = sectionIds[0] ?? ''

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      if (el.offsetTop <= scrollY) {
        current = id
      }
    }

    activeId.value = current
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { activeId }
}

export function useScrollProgress() {
  const progress = ref(0)

  const update = () => {
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, window.scrollY / max) : 0
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { progress }
}

export function useRevealOnScroll() {
  let observer: IntersectionObserver | null = null

  onMounted(async () => {
    await nextTick()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (reduce) {
      nodes.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    nodes.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
