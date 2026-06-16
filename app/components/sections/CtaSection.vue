<template>
  <section class="py-space-xl bg-primary text-white text-center relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="bg-decoration-gold"></div>

    <div class="container relative z-10 animate-fade-in-up">
      <h2 class="h1-large text-white mb-space-xs font-weight-bold">Take the next step</h2>
      <p class="text-light-3 max-w-2xl mx-auto fs-medium mb-space-md">
        Whether you are ready to apply or just exploring options, we are here to support you at
        every stage of your educational journey.
      </p>

      <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
        <a
          href="https://visit.asu.edu/"
          target="_blank"
          class="btn btn-outline-light rounded-pill px-5 py-3 fs-xs font-weight-bold text-uppercase min-w-btn"
        >
          Visit ASU
        </a>
        <a
          href="#rfi-section"
          class="btn btn-asu-gold rounded-pill px-5 py-3 fs-xs font-weight-bold text-uppercase min-w-btn"
        >
          Request Information
        </a>
        <a
          href="https://admission.asu.edu/apply"
          target="_blank"
          class="btn btn-outline-light rounded-pill px-5 py-3 fs-xs font-weight-bold text-uppercase min-w-btn"
        >
          Apply Now
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static component
</script>

<style scoped>
.relative {
  position: relative;
}
.z-10 {
  z-index: 10;
}
.max-w-2xl {
  max-w: 42rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.min-w-btn {
  min-width: 200px;
}
.gap-3 {
  gap: 1rem;
}
.bg-primary {
  background-color: var(--asu-maroon) !important;
}

.bg-decoration-gold {
  position: absolute;
  top: -150px;
  right: -150px;
  width: 300px;
  height: 300px;
  background-color: var(--asu-gold);
  opacity: 0.1;
  border-radius: 50%;
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
