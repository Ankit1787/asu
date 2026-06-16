<template>
  <section class="py-space-lg bg-light-2">
    <div class="container">
      <div class="mb-space-md text-center">
        <h2 class="h1-medium text-dark-3 mb-space-xxs">I am a future...</h2>
        <p class="text-dark-1 max-w-2xl mx-auto fs-medium">
          Select the path that matches your background to learn about requirements, deadlines, and
          how to apply.
        </p>
      </div>

      <div class="row g-4">
        <div v-for="(path, idx) in studentPaths" :key="idx" class="col-12 col-md-6 col-lg-4">
          <a :href="path.link" class="text-decoration-none text-dark-3 d-block h-100">
            <div
              class="premium-card p-space-sm bg-white h-100 d-flex flex-column justify-content-between relative"
            >
              <div class="card-highlight" :style="{ backgroundColor: path.color }"></div>
              <div class="pt-space-xxs">
                <h3 class="h3-large font-weight-bold mb-space-xxs">{{ path.title }}</h3>
                <p class="fs-xs text-dark-1 mb-0">{{ path.description }}</p>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-space-md">
                <span class="fs-xs font-weight-bold text-uppercase text-primary"
                  >Explore details</span
                >
                <font-awesome-icon icon="chevron-right" class="fs-xs text-primary" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const studentPaths = [
  {
    title: "First-Year Student",
    description:
      "You are a high school student or high school graduate who has not yet attended college.",
    link: "https://admission.asu.edu/freshman",
    color: "#8c1d40", // Maroon
  },
  {
    title: "Transfer Student",
    description:
      "You have graduated from high school and completed coursework at another college or university.",
    link: "https://admission.asu.edu/transfer",
    color: "#ffc627", // Gold
  },
  {
    title: "Graduate Student",
    description:
      "You hold a bachelor's degree and want to pursue a master's, doctoral, or graduate certificate program.",
    link: "https://admission.asu.edu/graduate",
    color: "#78be20", // Green
  },
  {
    title: "International Student",
    description:
      "You are a citizen of another country seeking to study at ASU on an F-1 or J-1 student visa.",
    link: "https://admission.asu.edu/international",
    color: "#00a3e0", // Blue
  },
  {
    title: "Veteran Student",
    description:
      "You are an active-duty service member, veteran, or military dependent ready to start or continue your degree.",
    link: "https://admission.asu.edu/military",
    color: "#ff7f32", // Orange
  },
  {
    title: "Non-Degree Student",
    description:
      "You want to take individual courses for professional development or personal enrichment without earning a degree.",
    link: "https://admission.asu.edu/nondegree",
    color: "#747474", // Gray
  },
];
</script>

<style scoped>
.relative {
  position: relative;
}
.card-highlight {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.text-decoration-none {
  text-decoration: none !important;
}
.text-primary {
  color: var(--asu-maroon) !important;
}
.max-w-2xl {
  max-w: 42rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
