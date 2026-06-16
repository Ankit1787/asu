<template>
  <section class="py-space-lg bg-white">
    <div class="container">
      <div class="text-center mb-space-md">
        <h2 class="h1-medium text-dark-3 mb-space-xxs">A university of firsts</h2>
        <p class="text-dark-1 max-w-2xl mx-auto fs-medium">
          Arizona State University has been recognized globally for its pioneering academic model,
          world-class research, and high student employability.
        </p>
      </div>

      <div class="row g-4 justify-content-center">
        <!-- Card 1 -->
        <div class="col-12 col-md-6 col-lg-3">
          <div class="premium-card p-space-sm h-100 d-flex flex-column justify-content-between">
            <div>
              <div
                class="badge-icon bg-light-2 text-primary mb-space-xs d-flex align-items-center justify-content-center"
              >
                <font-awesome-icon icon="rocket" size="2x" />
              </div>
              <h3 class="h3-large text-dark-3 mb-space-xxs font-weight-bold">#1 in the U.S.</h3>
              <p class="fs-xs text-dark-1 mb-0">
                Named the nation's most innovative university by U.S. News & World Report, ahead of
                MIT and Stanford.
              </p>
            </div>
            <hr class="border-secondary border-2 w-25 mt-space-sm mb-0 align-self-start" />
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-12 col-md-6 col-lg-3">
          <div class="premium-card p-space-sm h-100 d-flex flex-column justify-content-between">
            <div>
              <div
                class="badge-icon bg-light-2 text-primary mb-space-xs d-flex align-items-center justify-content-center"
              >
                <font-awesome-icon icon="flask" size="2x" />
              </div>
              <h3 class="h3-large text-dark-3 mb-space-xxs font-weight-bold">Top Research</h3>
              <p class="fs-xs text-dark-1 mb-0">
                A leading global research institution, ranked in the top 10 for research
                expenditures among universities without a medical school.
              </p>
            </div>
            <hr class="border-secondary border-2 w-25 mt-space-sm mb-0 align-self-start" />
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col-12 col-md-6 col-lg-3">
          <div class="premium-card p-space-sm h-100 d-flex flex-column justify-content-between">
            <div>
              <div
                class="badge-icon bg-light-2 text-primary mb-space-xs d-flex align-items-center justify-content-center"
              >
                <font-awesome-icon icon="graduation-cap" size="2x" />
              </div>
              <h3 class="h3-large text-dark-3 mb-space-xxs font-weight-bold">Top 10 Online</h3>
              <p class="fs-xs text-dark-1 mb-0">
                ASU Online bachelor's degree programs are ranked among the best in the nation,
                providing flexible learning options.
              </p>
            </div>
            <hr class="border-secondary border-2 w-25 mt-space-sm mb-0 align-self-start" />
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col-12 col-md-6 col-lg-3">
          <div class="premium-card p-space-sm h-100 d-flex flex-column justify-content-between">
            <div>
              <div
                class="badge-icon bg-light-2 text-primary mb-space-xs d-flex align-items-center justify-content-center"
              >
                <font-awesome-icon icon="briefcase" size="2x" />
              </div>
              <h3 class="h3-large text-dark-3 mb-space-xxs font-weight-bold">Top Employability</h3>
              <p class="fs-xs text-dark-1 mb-0">
                Ranked in the top 10 in the U.S. for producing the most employable graduates,
                preparing students for immediate career success.
              </p>
            </div>
            <hr class="border-secondary border-2 w-25 mt-space-sm mb-0 align-self-start" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static content
</script>

<style scoped>
.badge-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: var(--asu-maroon);
}
.max-w-2xl {
  max-w: 42rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.border-2 {
  border-width: 3px !important;
}
</style>
