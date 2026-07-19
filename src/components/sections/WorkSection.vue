<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <section id="work" class="section-shell" aria-labelledby="work-heading">
    <div class="reveal max-w-2xl" data-reveal>
      <p class="section-label">Selected work</p>
      <h2 id="work-heading" class="section-title">Open source & personal projects</h2>
      <p class="section-lead">
        A sample of products and tools I’ve built outside client delivery, full-stack apps,
        extensions, and libraries.
      </p>
    </div>

    <ul class="mt-14 divide-y divide-ink/10 border-y border-ink/10">
      <li
        v-for="project in profile.projects"
        :key="project.name"
        class="reveal group py-8 transition first:pt-8 last:pb-8"
        data-reveal
      >
        <div class="grid gap-4 md:grid-cols-12 md:items-start md:gap-8">
          <div class="md:col-span-4">
            <h3 class="font-display text-xl font-bold text-ink transition group-hover:text-sky sm:text-2xl">
              <a
                v-if="project.href"
                :href="project.href"
                target="_blank"
                rel="noopener noreferrer"
                class="no-underline"
              >
                {{ project.name }}
                <span class="ml-1 inline-block text-sky" aria-hidden="true">↗</span>
                <span class="sr-only">(opens in new tab)</span>
              </a>
              <span v-else>{{ project.name }}</span>
            </h3>
          </div>

          <div class="md:col-span-5">
            <p class="text-ink/75">{{ project.summary }}</p>
          </div>

          <div class="md:col-span-3 md:text-right">
            <ul class="flex flex-wrap gap-2 md:justify-end" aria-label="Tech stack">
              <li
                v-for="tag in project.stack"
                :key="tag"
                class="font-mono text-[11px] uppercase tracking-wide text-ink/55"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
