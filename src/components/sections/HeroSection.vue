<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { profile } from '@/data/profile'

const ready = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    ready.value = true
  })
})
</script>

<template>
  <section
    id="top"
    class="section-shell min-h-[calc(100vh-var(--header-height))] !pb-16 !pt-16 lg:!pt-24"
  >
    <div class="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-10">
        <p
          class="section-label transition duration-700"
          :class="ready ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'"
        >
          {{ profile.location }} · {{ profile.title }}
        </p>

        <h1
          class="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink transition duration-700 delay-100 sm:text-6xl md:text-7xl lg:text-8xl"
          :class="ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
        >
          {{ profile.name }}
        </h1>

        <p
          class="mt-6 max-w-2xl font-display text-xl font-semibold text-ink transition duration-700 delay-200 sm:text-2xl"
          :class="ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
        >
          {{ profile.headline }}
        </p>

        <p
          class="mt-4 max-w-2xl text-lg leading-relaxed text-ink/90 transition duration-700 delay-300 sm:text-xl"
          :class="ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
        >
          {{ profile.tagline }}
        </p>

        <div
          class="mt-10 flex flex-wrap gap-3 transition duration-700 delay-[400ms]"
          :class="ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
        >
          <a href="#work" class="btn-primary">See my work</a>
          <a href="#contact" class="btn-secondary">Get in touch</a>
          <a :href="profile.resumeHref" class="btn-secondary" download>Download resume</a>
        </div>
      </div>

      <div class="hidden lg:col-span-2 lg:flex lg:justify-end" aria-hidden="true">
        <div
          class="font-mono text-[10px] font-medium uppercase leading-5 tracking-[0.2em] text-ink/55 transition duration-1000 delay-500"
          :class="ready ? 'opacity-100' : 'opacity-0'"
        >
          <p>pipeline</p>
          <p>→ edi</p>
          <p>→ llm</p>
          <p>→ saas</p>
          <p>→ aws</p>
        </div>
      </div>
    </div>
  </section>
</template>
