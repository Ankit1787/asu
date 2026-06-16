<template>
  <section class="py-space-lg bg-light-2">
    <div class="container">
      <!-- Charter Quote -->
      <div class="charter-quote-box p-space-md mb-space-lg text-center animate-fade-in-up">
        <font-awesome-icon icon="quote-left" size="3x" class="text-secondary mb-space-xs" />
        <blockquote class="blockquote fs-large font-weight-bold text-dark-3 max-w-3xl mx-auto">
          "ASU is a comprehensive public research university, measured not by whom it excludes, but
          by whom it includes and how they succeed."
        </blockquote>
        <cite class="d-block text-primary font-weight-bold fs-xs mt-space-xxs"
          >— The ASU Charter</cite
        >
      </div>

      <!-- Value Cards -->
      <div class="row g-4">
        <div v-for="(val, idx) in values" :key="idx" class="col-12 col-md-4">
          <CardInfoVertical
            :title="val.title"
            title-size="medium"
            :display-image="true"
            :image-source="val.image"
            :image-alt="val.title"
            :display-border-top="true"
            :display-cta="true"
            :cta-as-button="true"
            cta-button-variant="outline-primary"
            cta-text="Learn more"
            :cta-link="val.link"
            class="premium-card h-100 bg-white"
          >
            <p class="fs-xs text-dark-1 mt-space-xxs px-space-xs mb-space-sm">
              {{ val.description }}
            </p>
          </CardInfoVertical>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CardInfoVertical } from "@rds-vue-ui/card-info-vertical";

const values = [
  {
    title: "Academic Excellence",
    description:
      "ASU's world-class faculty and top-ranked programs empower students to discover, innovate, and lead in their chosen fields.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60",
    link: "https://www.asu.edu/about/excellence",
  },
  {
    title: "Inclusive Access",
    description:
      "We are committed to providing quality education to qualified students of all backgrounds, fostering a diverse community of learning.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60",
    link: "https://www.asu.edu/about/inclusion",
  },
  {
    title: "Societal Impact",
    description:
      "ASU takes fundamental responsibility for the economic, social, and cultural health of the local and global communities we serve.",
    image:
      "https://images.unsplash.com/photo-1469571486040-7a3081c73ad9?w=500&auto=format&fit=crop&q=60",
    link: "https://www.asu.edu/about/impact",
  },
];
</script>

<style scoped>
.charter-quote-box {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border-left: 6px solid var(--asu-maroon);
}
.blockquote {
  font-family: var(--font-family-headings);
  line-height: 1.4;
  border: none;
  padding: 0;
  margin: 0;
}
.max-w-3xl {
  max-w: 48rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.text-primary {
  color: var(--asu-maroon) !important;
}
.text-secondary {
  color: var(--asu-gold) !important;
}
</style>
