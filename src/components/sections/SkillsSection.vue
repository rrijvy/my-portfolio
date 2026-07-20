<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <section id="skills" class="section-shell" aria-labelledby="skills-heading">
    <div class="reveal max-w-2xl" data-reveal>
      <p class="section-label">Skills</p>
      <h2 id="skills-heading" class="section-title">Tools I reach for</h2>
      <p class="section-lead">
        Languages and platforms I use across product engineering, cloud delivery, and applied AI.
      </p>
    </div>

    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="group in profile.skills"
        :key="group.label"
        class="reveal border-t-2 border-sky pt-5"
        data-reveal
      >
        <h3 class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-moss">
          {{ group.label }}
        </h3>
        <ul class="mt-4 flex flex-wrap gap-2" :aria-label="group.label">
          <li
            v-for="item in group.items"
            :key="item"
            class="rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-ink ring-1 ring-ink/15"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
