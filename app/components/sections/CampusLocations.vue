<template>
  <section class="py-space-lg bg-white">
    <div class="container">
      <div class="text-center mb-space-md">
        <h2 class="h1-medium text-dark-3 mb-space-xxs">Campuses & Locations</h2>
        <p class="text-dark-1 max-w-2xl mx-auto fs-medium">
          ASU spans across metropolitan Phoenix, offering unique learning environments tailored to
          different academic interests.
        </p>
      </div>

      <div class="row g-4">
        <div v-for="(camp, idx) in campuses" :key="idx" class="col-12 col-md-6 col-lg-3">
          <div class="premium-card h-100 bg-white d-flex flex-column justify-content-between">
            <div>
              <div class="img-wrapper overflow-hidden relative">
                <img :src="camp.image" :alt="camp.name" class="img-fluid campus-img w-100" />
                <div class="location-badge bg-primary text-white fs-xxs py-1 px-2 font-weight-bold">
                  {{ camp.city }}
                </div>
              </div>
              <div class="p-space-xs">
                <h3 class="h3-large font-weight-bold text-dark-3 mb-space-xxs">{{ camp.name }}</h3>
                <p class="fs-xs text-dark-1 mb-0">{{ camp.description }}</p>
              </div>
            </div>

            <div class="p-space-xs pt-0 d-flex gap-2">
              <a
                :href="camp.tourLink"
                target="_blank"
                class="btn btn-asu-gold btn-sm flex-fill fs-xxs font-weight-bold text-uppercase py-2"
              >
                <font-awesome-icon icon="vr-cardboard" class="mr-1" /> Virtual Tour
              </a>
              <a
                :href="camp.learnLink"
                target="_blank"
                class="btn btn-outline-dark btn-sm flex-fill fs-xxs font-weight-bold text-uppercase py-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const campuses = [
  {
    name: "Tempe Campus",
    city: "Tempe, AZ",
    description:
      "ASU's historic and largest campus, featuring active research, creative arts facilities, and vibrant student life.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop&q=60",
    tourLink: "https://visit.asu.edu/tempe",
    learnLink: "https://www.asu.edu/campuses/tempe",
  },
  {
    name: "Downtown Phoenix",
    city: "Phoenix, AZ",
    description:
      "An urban learning center housing professional programs in journalism, law, nursing, and public service.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60",
    tourLink: "https://visit.asu.edu/downtown-phoenix",
    learnLink: "https://www.asu.edu/campuses/downtown",
  },
  {
    name: "Polytechnic Campus",
    city: "Mesa, AZ",
    description:
      "A hub for hands-on, project-based learning in engineering, aviation, technology, and management.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=500&auto=format&fit=crop&q=60",
    tourLink: "https://visit.asu.edu/polytechnic",
    learnLink: "https://www.asu.edu/campuses/polytechnic",
  },
  {
    name: "West Valley Campus",
    city: "Phoenix, AZ",
    description:
      "A close-knit, liberal arts-focused campus emphasizing interdisciplinary degrees and community impact.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a91?w=500&auto=format&fit=crop&q=60",
    tourLink: "https://visit.asu.edu/west",
    learnLink: "https://www.asu.edu/campuses/west",
  },
];
</script>

<style scoped>
.img-wrapper {
  position: relative;
  height: 160px;
}
.campus-img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.premium-card:hover .campus-img {
  transform: scale(1.08);
}
.location-badge {
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-radius: 4px;
}
.gap-2 {
  gap: 0.5rem;
}
.mr-1 {
  margin-right: 0.25rem;
}
.max-w-2xl {
  max-w: 42rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.btn-outline-dark {
  border: 1px solid var(--asu-dark-1);
  color: var(--asu-dark-2);
  background: white;
  transition: all 0.2s ease;
}
.btn-outline-dark:hover {
  background-color: var(--asu-dark-3);
  color: white !important;
}
</style>
