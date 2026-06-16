<template>
  <div class="animate-fade-in">
    <!-- Hero Section -->
    <HeroStandardApollo
      title="Innovation lives here."
      text="For 10 consecutive years, ASU has been named the nation's most innovative university, ahead of MIT and Stanford. Learn from world-class faculty and join a community dedicated to your success."
      bg-image-source="/images/asu-campus-hero.png"
      bg-image-alt="ASU campus landscape under a sunny sky"
      :full-width="true"
      :display-gradient="true"
      :gradient-opacity="0.6"
      min-height="550px"
      min-height-md="600px"
      min-height-lg="650px"
      title-level="h1"
      title-size="xl"
      title-variant="secondary"
      :show-title-highlight="true"
      title-highlight-variant="white"
      :show-text="true"
      :show-text-on-mobile="true"
      text-size="medium"
      text-variant="white"
    >
      <template #below-text>
        <div class="mt-space-md d-flex flex-wrap gap-3">
          <a
            href="#rfi-section"
            class="btn btn-asu-gold rounded-pill px-5 py-3 fs-xs font-weight-bold text-uppercase"
          >
            Explore programs
          </a>
          <a
            href="https://admission.asu.edu/apply"
            target="_blank"
            class="btn btn-outline-light rounded-pill px-5 py-3 fs-xs font-weight-bold text-uppercase"
          >
            Apply today
          </a>
        </div>
      </template>
    </HeroStandardApollo>

    <!-- Degree Search Section -->
    <DegreeSearch />

    <!-- Rankings / Highlights Section -->
    <Rankings />

    <!-- Future Student Section -->
    <FutureStudents />

    <!-- Stories / News Section -->
    <Stories />

    <!-- ASU Difference / Value Section -->
    <ValueSection />

    <!-- Campus / Locations Section -->
    <CampusLocations />

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { HeroStandardApollo } from "@rds-vue-ui/hero-standard-apollo";
import DegreeSearch from "~/components/sections/DegreeSearch.vue";
import Rankings from "~/components/sections/Rankings.vue";
import FutureStudents from "~/components/sections/FutureStudents.vue";
import Stories from "~/components/sections/Stories.vue";
import ValueSection from "~/components/sections/ValueSection.vue";
import CampusLocations from "~/components/sections/CampusLocations.vue";
import CtaSection from "~/components/sections/CtaSection.vue";

useHead({
  title: "Arizona State University | University of Innovation",
  meta: [
    {
      name: "description",
      content:
        "Explore Arizona State University (ASU). Replicating the ASU homepage with modern Vue 3 components, featuring in-person and online degree search, rankings, stories, values, and campus locations.",
    },
  ],
});
</script>

<style scoped>
.gap-3 {
  gap: 1rem;
}
.btn-outline-light {
  border: 2px solid white;
  color: white;
  transition: all 0.2s ease-in-out;
}
.btn-outline-light:hover {
  background-color: white;
  color: var(--asu-maroon) !important;
}
</style>
