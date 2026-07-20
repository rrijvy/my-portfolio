<script setup lang="ts">
import { profile, type SocialLink } from '@/data/profile'

function iconPath(icon: SocialLink['icon']) {
  switch (icon) {
    case 'email':
      return 'M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.75-.25a.25.25 0 0 0-.25.25v.32l7.02 4.39a.75.75 0 0 0 .78 0l7.02-4.39v-.32a.25.25 0 0 0-.25-.25H4.75Zm14.75 2.48-6.36 3.97a2.25 2.25 0 0 1-2.28 0L4.5 8.98v8.27c0 .138.112.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.98Z'
    case 'linkedin':
      return 'M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM4.25 9h2.38v10.75H4.25V9Zm4.8 0h2.28v1.47h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.68v4.83h-2.38v-4.28c0-1.02-.02-2.33-1.42-2.33-1.42 0-1.64 1.11-1.64 2.26v4.35H9.05V9Z'
    case 'github':
      return 'M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z'
    case 'npm':
      return 'M4 4h16v16H4V4Zm3.2 3.2v9.6h4.8V9.6h2.4v7.2h2.4V7.2H7.2Z'
    case 'upwork':
      return 'M18.56 10.8c-1.15 0-2.1.7-2.7 1.77l-.38-.85-.01.01c-.1-.23-.43-1.07-.75-1.86.94-.46.67-2.03.29-2.57-.42-.6-1.62-.86-2.72-.13-.95.62-.9 1.8-.72 2.3l-.96 2.95c-.6-1.33-1.52-3.45-2.04-4.66H6.2l3.07 7.03c-.68 1.07-1.45 2.05-2.62 2.05-1.18 0-1.84-.96-1.84-2.11 0-.2.03-.4.06-.58H3c-.07.3-.1.58-.1.88C2.9 18.1 4.4 20 6.65 20c1.74 0 3-1.09 4.02-2.87l.72 1.65h2.47l-1.38-3.16.05-.12c.45-.97 1.3-2.78 1.82-2.78.4 0 .55.38.55.8 0 .56-.11 1.22-.11 1.22h2.37s.14-.82.14-1.43c0-1.23-.6-2.5-2.14-2.5Z'
    default:
      return ''
  }
}
</script>

<template>
  <section id="contact" class="section-shell !pb-28" aria-labelledby="contact-heading">
    <div class="reveal max-w-2xl" data-reveal>
      <p class="section-label">Contact</p>
      <h2 id="contact-heading" class="section-title">Let’s build something durable</h2>
      <p class="section-lead !text-ink">
        Open to thoughtful collaborations, product engineering roles, and interesting systems
        problems. Prefer email or LinkedIn.
      </p>
    </div>

    <div class="reveal mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center" data-reveal>
      <a :href="`mailto:${profile.email}`" class="btn-primary">
        {{ profile.email }}
      </a>
      <a :href="`tel:${profile.phone.replace(/\s/g, '')}`" class="btn-secondary">
        {{ profile.phone }}
      </a>
      <a :href="profile.resumeHref" class="btn-secondary" download>Download resume (PDF)</a>
    </div>

    <ul class="reveal mt-12 flex flex-wrap gap-4" data-reveal aria-label="Social links">
      <li v-for="link in profile.socials" :key="link.label">
        <a
          :href="link.href"
          class="inline-flex min-h-11 min-w-11 items-center gap-2 rounded-md border border-ink/15 bg-white px-3 py-2 text-sm font-medium text-ink no-underline transition hover:border-sky hover:text-sky"
          :target="link.icon === 'email' ? undefined : '_blank'"
          :rel="link.icon === 'email' ? undefined : 'noopener noreferrer'"
        >
          <svg
            class="h-5 w-5 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path :d="iconPath(link.icon)" />
          </svg>
          {{ link.label }}
        </a>
      </li>
    </ul>
  </section>
</template>
