<template>
  <section class="py-space-lg bg-white">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-space-md"
      >
        <div>
          <h2 class="h1-medium text-dark-3 mb-space-xxs">ASU Stories & News</h2>
          <p class="text-dark-1 mb-0 fs-medium">
            Discover the latest achievements, research breakthrough events, and student highlights
            at ASU.
          </p>
        </div>
        <a
          href="https://news.asu.edu/"
          class="btn btn-outline-primary rounded-pill px-4 py-2 mt-space-sm mt-md-0 fs-xs font-weight-bold"
        >
          View all stories <font-awesome-icon icon="arrow-right" class="ml-2" />
        </a>
      </div>

      <div class="row g-4">
        <div v-for="(story, idx) in stories" :key="idx" class="col-12 col-md-6 col-lg-4">
          <CardImageArticle
            :image-source="story.image"
            :image-alt="story.title"
            :title="story.title"
            title-level="h3"
            title-size="medium"
            :display-border="true"
            :clickable-card="true"
            :display-label-text="true"
            :date="story.date"
            :minutes="story.minutes"
            :display-cta="true"
            cta-text="Read more"
            :cta-link="story.link"
            cta-link-target="_blank"
            class="premium-card h-100"
          >
            <p class="fs-xs text-dark-1 mt-space-xxs px-space-xs mb-space-xs">
              {{ story.description }}
            </p>
          </CardImageArticle>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CardImageArticle } from "@rds-vue-ui/card-image-article";

const stories = [
  {
    title: "ASU space research team prepares for asteroid mission launch",
    description:
      "NASA's Psyche mission, led by ASU scientific principal investigator Lindy Elkins-Tanton, enters its final testing phase ahead of its space journey.",
    date: "Jun 15, 2026",
    minutes: "4 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60",
    link: "https://news.asu.edu/space",
  },
  {
    title: "New artificial intelligence hub opens at Tempe campus to accelerate innovation",
    description:
      "The AI Innovation Lab will provide faculty, researchers, and students with state-of-the-art resources to solve real-world problems using machine learning.",
    date: "Jun 12, 2026",
    minutes: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=60",
    link: "https://news.asu.edu/ai",
  },
  {
    title: "ASU Online introduces new flexible engineering degree options for veterans",
    description:
      "New accredited programs offer veteran students credit for their military technical training, shortening the path to an engineering degree.",
    date: "Jun 10, 2026",
    minutes: "3 min read",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=60",
    link: "https://news.asu.edu/engineering",
  },
];
</script>

<style scoped>
.ml-2 {
  margin-left: 0.5rem;
}
.btn-outline-primary {
  border: 2px solid var(--asu-maroon);
  color: var(--asu-maroon);
  transition: all 0.2s ease-in-out;
}
.btn-outline-primary:hover {
  background-color: var(--asu-maroon);
  color: white !important;
}
</style>
