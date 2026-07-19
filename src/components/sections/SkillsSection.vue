<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <section id="skills" class="section-shell" aria-labelledby="skills-heading">
    <div class="reveal max-w-2xl" data-reveal>
      <p class="section-label">Skills</p>
      <h2 id="skills-heading" class="section-title">Tools I reach for</h2>
      <p class="section-lead">
        Languages and platforms I use daily across product engineering, cloud delivery, and applied
        AI.
      </p>
    </div>

    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="group in profile.skills"
        :key="group.label"
        class="reveal border-t-2 border-sky/40 pt-5"
        data-reveal
      >
        <h3 class="font-mono text-xs font-medium uppercase tracking-[0.16em] text-moss">
          {{ group.label }}
        </h3>
        <ul class="mt-4 flex flex-wrap gap-2" :aria-label="group.label">
          <li
            v-for="item in group.items"
            :key="item"
            class="rounded-md bg-white/70 px-2.5 py-1.5 text-sm text-ink/80 ring-1 ring-ink/8"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
