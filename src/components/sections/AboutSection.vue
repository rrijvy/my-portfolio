<script setup lang="ts">
import { profile } from '@/data/profile'
import photo from '@/assets/images/myself.webp'
</script>

<template>
  <section id="about" class="section-shell" aria-labelledby="about-heading">
    <div class="reveal" data-reveal>
      <p class="section-label">About</p>
      <h2 id="about-heading" class="section-title">Engineer of reliable systems</h2>
    </div>

    <div class="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
      <figure class="reveal lg:col-span-4" data-reveal>
        <img
          :src="photo"
          :alt="`Portrait of ${profile.name}`"
          width="480"
          height="600"
          class="aspect-[4/5] w-full max-w-md object-cover object-top grayscale-[15%] contrast-[1.05]"
          loading="lazy"
        />
      </figure>

      <div class="reveal space-y-5 lg:col-span-8" data-reveal>
        <p
          v-for="(paragraph, index) in profile.about"
          :key="index"
          class="text-lg leading-relaxed text-ink/80"
        >
          {{ paragraph }}
        </p>

        <div class="border-t border-ink/10 pt-8">
          <p class="section-label !mb-4">Education</p>
          <ul class="space-y-4">
            <li
              v-for="item in profile.education"
              :key="item.school"
              class="grid gap-1 sm:grid-cols-[5rem_1fr]"
            >
              <span class="font-mono text-sm text-sky">{{ item.year }}</span>
              <div>
                <p class="font-semibold text-ink">{{ item.credential }}</p>
                <p class="text-sm text-ink/65">
                  {{ item.school }}
                  <span v-if="item.detail"> · {{ item.detail }}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
