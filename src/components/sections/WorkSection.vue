<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <section id="work" class="section-shell" aria-labelledby="work-heading">
    <div class="reveal max-w-2xl" data-reveal>
      <p class="section-label">Selected work</p>
      <h2 id="work-heading" class="section-title">Outcomes that shipped</h2>
      <p class="section-lead">
        Client systems with measurable impact — document automation, compliance SaaS, regulatory
        AI, and generative tooling.
      </p>
    </div>

    <ul class="mt-14 space-y-12">
      <li
        v-for="item in profile.achievements"
        :key="item.name"
        class="reveal border-l-2 border-sky pl-6 sm:pl-8"
        data-reveal
      >
        <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 class="font-display text-xl font-bold text-ink sm:text-2xl">{{ item.name }}</h3>
          <span class="font-mono text-xs uppercase tracking-wide text-sky">{{ item.role }}</span>
        </div>
        <p class="mt-1 text-sm font-medium text-moss">{{ item.company }}</p>

        <dl class="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink">
          <div>
            <dt class="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70">
              Challenge
            </dt>
            <dd class="mt-1">{{ item.challenge }}</dd>
          </div>
          <div>
            <dt class="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70">
              Solution
            </dt>
            <dd class="mt-1">{{ item.solution }}</dd>
          </div>
          <div>
            <dt class="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ember">
              Outcome
            </dt>
            <dd class="mt-1 font-medium text-ink">{{ item.outcome }}</dd>
          </div>
        </dl>

        <ul class="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          <li
            v-for="tag in item.stack"
            :key="tag"
            class="rounded-md bg-white px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-ink ring-1 ring-ink/15"
          >
            {{ tag }}
          </li>
        </ul>
      </li>
    </ul>

    <div class="reveal mt-20 max-w-2xl" data-reveal>
      <p class="section-label">Open source & personal</p>
      <h3 class="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        Projects I ship on the side
      </h3>
      <p class="section-lead">
        Full-stack apps, extensions, and libraries built outside client delivery.
      </p>
    </div>

    <ul class="mt-10 divide-y divide-ink/15 border-y border-ink/15">
      <li
        v-for="project in profile.projects"
        :key="project.name"
        class="reveal group py-7 transition first:pt-7 last:pb-7"
        data-reveal
      >
        <div class="grid gap-3 md:grid-cols-12 md:items-start md:gap-8">
          <div class="md:col-span-4">
            <h4
              class="font-display text-lg font-bold text-ink transition group-hover:text-sky sm:text-xl"
            >
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
            </h4>
          </div>

          <div class="md:col-span-5">
            <p class="text-ink">{{ project.summary }}</p>
          </div>

          <div class="md:col-span-3 md:text-right">
            <ul class="flex flex-wrap gap-2 md:justify-end" aria-label="Tech stack">
              <li
                v-for="tag in project.stack"
                :key="tag"
                class="font-mono text-[11px] font-medium uppercase tracking-wide text-ink/70"
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
