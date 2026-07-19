<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView } from 'vue-router'
import { profile } from '@/data/profile'
import { useScrollProgress, useScrollSpy } from '@/composables/useScroll'

const sectionIds = profile.nav.map((item) => item.id)
const { activeId } = useScrollSpy(['top', ...sectionIds])
const { progress } = useScrollProgress()
const menuOpen = ref(false)

const resumeUrl = computed(() => profile.resumeHref)

function scrollTo(id: string) {
  menuOpen.value = false
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

function isActive(id: string) {
  return activeId.value === id
}
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>

  <div
    class="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-mist"
    role="progressbar"
    :aria-valuenow="Math.round(progress * 100)"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Page scroll progress"
  >
    <div
      class="h-full origin-left bg-sky transition-transform duration-150 ease-out"
      :style="{ transform: `scaleX(${progress})` }"
    />
  </div>

  <header
    class="sticky top-0 z-40 border-b border-ink/8 bg-paper/85 backdrop-blur-md"
    style="height: var(--header-height)"
  >
    <div class="mx-auto flex h-full max-w-content items-center justify-between px-5 sm:px-6 md:px-8">
      <a
        href="#top"
        class="font-display text-lg font-bold tracking-tight text-ink no-underline transition hover:text-sky"
        @click.prevent="scrollTo('top')"
      >
        {{ profile.shortName }}
      </a>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <a
          v-for="item in profile.nav"
          :key="item.id"
          :href="`#${item.id}`"
          class="rounded-md px-3 py-2 text-sm font-medium no-underline transition"
          :class="
            isActive(item.id)
              ? 'bg-sky-soft text-sky'
              : 'text-ink/70 hover:bg-white/70 hover:text-ink'
          "
          @click.prevent="scrollTo(item.id)"
        >
          {{ item.label }}
        </a>
        <a :href="resumeUrl" class="btn-primary ml-2 !min-h-10 !px-4 !py-2 text-sm" download>
          Resume
        </a>
      </nav>

      <button
        type="button"
        class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-ink/15 bg-white/70 text-ink md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Menu</span>
        <svg
          v-if="!menuOpen"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
        </svg>
        <svg
          v-else
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div
      v-if="menuOpen"
      id="mobile-nav"
      class="border-t border-ink/8 bg-paper px-5 pb-4 pt-2 md:hidden"
    >
      <nav class="flex flex-col gap-1" aria-label="Mobile">
        <a
          v-for="item in profile.nav"
          :key="item.id"
          :href="`#${item.id}`"
          class="rounded-md px-3 py-3 text-base font-medium no-underline"
          :class="isActive(item.id) ? 'bg-sky-soft text-sky' : 'text-ink/80'"
          @click.prevent="scrollTo(item.id)"
        >
          {{ item.label }}
        </a>
        <a :href="resumeUrl" class="btn-primary mt-2 text-center" download>Resume</a>
      </nav>
    </div>
  </header>

  <div class="relative">
    <div
      class="pointer-events-none absolute bottom-0 left-0 top-0 z-10 hidden w-12 lg:block"
      aria-hidden="true"
    >
      <div class="sticky top-28 ml-4 flex h-[60vh] w-px flex-col bg-mist">
        <div
          class="w-px origin-top bg-gradient-to-b from-sky to-moss transition-transform duration-200"
          :style="{ transform: `scaleY(${Math.max(0.04, progress)})`, height: '100%' }"
        />
      </div>
    </div>

    <main id="main">
      <RouterView />
    </main>
  </div>

  <footer class="border-t border-ink/10 bg-white/40">
    <div
      class="mx-auto flex max-w-content flex-col gap-3 px-5 py-10 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8"
    >
      <p>
        © {{ new Date().getFullYear() }} {{ profile.name }}. Built as a static site for GitHub
        Pages.
      </p>
      <p class="font-mono text-xs uppercase tracking-wider text-ink/45">Signal Atlas</p>
    </div>
  </footer>
</template>
