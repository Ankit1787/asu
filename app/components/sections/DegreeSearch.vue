<template>
  <section id="rfi-section" class="container px-0">
    <div class="degree-search-container animate-fade-in-up">
      <div class="row align-items-center mb-space-sm">
        <div class="col-12 col-lg-7">
          <h2 class="text-white h2-large mb-space-xxs">Find your program of study</h2>
          <p class="text-light-3 fs-small mb-0">
            ASU offers over 800 high-quality degree programs in-person and online. Find the right
            path for you.
          </p>
        </div>
        <div class="col-12 col-lg-5 d-flex justify-content-lg-end mt-space-sm mt-lg-0">
          <!-- learning mode toggle -->
          <div class="learning-mode-toggle d-flex bg-dark-3 p-1 rounded-pill">
            <button
              type="button"
              class="btn rounded-pill px-4 py-2 fs-xs"
              :class="learningMode === 'in-person' ? 'btn-asu-gold' : 'text-light-4'"
              @click="learningMode = 'in-person'"
            >
              <font-awesome-icon icon="school" class="mr-1" /> In Person
            </button>
            <button
              type="button"
              class="btn rounded-pill px-4 py-2 fs-xs"
              :class="learningMode === 'online' ? 'btn-asu-gold' : 'text-light-4'"
              @click="learningMode = 'online'"
            >
              <font-awesome-icon icon="laptop" class="mr-1" /> Online
            </button>
          </div>
        </div>
      </div>

      <!-- Search form -->
      <form class="search-form-row" @submit.prevent="handleSearch">
        <div class="row g-3">
          <!-- Keyword Search -->
          <div class="col-12 col-md-4">
            <label for="keyword" class="form-label fs-xs text-light-3 font-weight-bold"
              >Keyword search</label
            >
            <div class="input-group">
              <span class="input-group-text bg-white border-0 text-dark-3">
                <font-awesome-icon icon="search" />
              </span>
              <input
                id="keyword"
                v-model="keyword"
                type="text"
                placeholder="e.g. Nursing, Business..."
                class="form-control border-0 py-2 text-dark-3"
              />
            </div>
          </div>

          <!-- Interest area -->
          <div class="col-12 col-md-4">
            <label for="interest" class="form-label fs-xs text-light-3 font-weight-bold"
              >Interest Area</label
            >
            <select id="interest" v-model="interest" class="form-select border-0 py-2 text-dark-3">
              <option value="">Select an interest area...</option>
              <option v-for="opt in interestOptions" :key="opt.value" :value="opt.value">
                {{ opt.text }}
              </option>
            </select>
          </div>

          <!-- Degree Type -->
          <div class="col-12 col-md-4 d-flex flex-column justify-content-between">
            <label class="form-label fs-xs text-light-3 font-weight-bold mb-2">Degree Type</label>
            <div class="d-flex align-items-center gap-4 py-1">
              <div class="form-check mr-4">
                <input
                  id="undergrad"
                  v-model="degreeType"
                  class="form-check-input"
                  type="radio"
                  name="degreeType"
                  value="undergrad"
                />
                <label class="form-check-label text-white fs-xs" for="undergrad">
                  Undergraduate
                </label>
              </div>
              <div class="form-check">
                <input
                  id="grad"
                  v-model="degreeType"
                  class="form-check-input"
                  type="radio"
                  name="degreeType"
                  value="grad"
                />
                <label class="form-check-label text-white fs-xs" for="grad"> Graduate </label>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end mt-space-sm">
          <button
            type="submit"
            class="btn btn-asu-gold px-5 py-3 rounded-pill fs-xs text-uppercase font-weight-bold"
          >
            Search degrees <font-awesome-icon icon="arrow-right" class="ml-2" />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const learningMode = ref("in-person");
const keyword = ref("");
const interest = ref("");
const degreeType = ref("undergrad");

const interestOptions = [
  { value: "business", text: "Business & Management" },
  { value: "engineering", text: "Engineering & Technology" },
  { value: "nursing", text: "Nursing & Health" },
  { value: "art", text: "Art & Design" },
  { value: "science", text: "Science & Mathematics" },
  { value: "education", text: "Education & Teaching" },
];

const handleSearch = () => {
  alert(
    `Searching for programs:\n- Mode: ${learningMode.value}\n- Keyword: ${keyword.value}\n- Interest: ${interest.value}\n- Type: ${degreeType.value}`
  );
};
</script>

<style scoped>
.learning-mode-toggle {
  border: 1px solid var(--asu-dark-1);
}
.learning-mode-toggle .btn {
  border: none;
  font-weight: 600;
  transition: all 0.2s ease;
}
.learning-mode-toggle .btn:hover {
  color: white;
}
.input-group-text {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.form-control {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.form-select {
  border-radius: 0.5rem;
}
.form-check-input:checked {
  background-color: var(--asu-gold);
  border-color: var(--asu-gold);
}
.gap-4 {
  gap: 1.5rem;
}
.mr-1 {
  margin-right: 0.25rem;
}
.mr-4 {
  margin-right: 1.5rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
</style>
