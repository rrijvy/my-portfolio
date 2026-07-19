<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <section id="experience" class="section-shell" aria-labelledby="experience-heading">
    <div class="reveal max-w-2xl" data-reveal>
      <p class="section-label">Experience</p>
      <h2 id="experience-heading" class="section-title">Where the work happened</h2>
      <p class="section-lead">
        From hospital systems and payroll to multi-tenant SaaS, document intelligence, and
        regulatory AI on AWS.
      </p>
    </div>

    <ol class="mt-14 space-y-0">
      <li
        v-for="(job, index) in profile.experience"
        :key="job.company"
        class="reveal relative border-l border-mist pl-8 pb-14 last:pb-0"
        data-reveal
      >
        <span
          class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky ring-4 ring-paper"
          aria-hidden="true"
        />

        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 class="font-display text-2xl font-bold text-ink">{{ job.company }}</h3>
          <p class="font-mono text-sm text-ink/55">{{ job.period }}</p>
        </div>
        <p class="mt-1 font-semibold text-moss">{{ job.title }}</p>

        <ul class="mt-5 space-y-3">
          <li
            v-for="(bullet, bi) in job.highlights"
            :key="bi"
            class="relative pl-4 text-ink/75 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-ink/30 before:content-['']"
          >
            {{ bullet }}
          </li>
        </ul>

        <span v-if="index < profile.experience.length - 1" class="sr-only">Next role</span>
      </li>
    </ol>
  </section>
</template>
