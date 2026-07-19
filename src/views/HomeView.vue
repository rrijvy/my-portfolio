<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import WorkSection from '@/components/sections/WorkSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useRevealOnScroll } from '@/composables/useScroll'

useRevealOnScroll()
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <WorkSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>
