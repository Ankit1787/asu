<template>
  <FooterStandard
    :tertiary-items="tertiaryItems"
    :display-privacy-settings="true"
    footer-label="ASU Footer"
    innovation-image-src="https://cms.asuonline.asu.edu/sites/default/files/1-innovation-rankings-2024.png"
    innovation-image-alt="ASU ranked #1 in the U.S. for innovation"
  >
    <template #primary-section>
      <div class="bg-dark-3 text-light-1 py-space-lg border-bottom border-secondary">
        <div class="container">
          <div class="row">
            <!-- ASU Brand column -->
            <div class="col-12 col-lg-3 mb-space-md mb-lg-0">
              <img
                src="https://cms.asuonline.asu.edu/sites/default/files/asu-horizontal-logo.png"
                alt="Arizona State University logo"
                style="max-width: 200px; filter: brightness(0) invert(1)"
                class="mb-space-xs"
              />
              <p class="fs-xs text-light-4 mb-space-xxs">
                Arizona State University is a new model for American higher education, an
                institution committed to excellence, access, and impact.
              </p>
              <div class="d-flex gap-3 fs-large mt-space-sm">
                <a
                  href="https://www.facebook.com/arizonastateuniversity/"
                  target="_blank"
                  class="text-light-1 mr-3"
                  aria-label="Facebook"
                  ><font-awesome-icon :icon="['fab', 'facebook']"
                /></a>
                <a
                  href="https://twitter.com/asu"
                  target="_blank"
                  class="text-light-1 mr-3"
                  aria-label="Twitter"
                  ><font-awesome-icon :icon="['fab', 'twitter']"
                /></a>
                <a
                  href="https://www.instagram.com/arizonastateuniversity/"
                  target="_blank"
                  class="text-light-1 mr-3"
                  aria-label="Instagram"
                  ><font-awesome-icon :icon="['fab', 'instagram']"
                /></a>
                <a
                  href="https://www.youtube.com/user/ASU"
                  target="_blank"
                  class="text-light-1"
                  aria-label="YouTube"
                  ><font-awesome-icon :icon="['fab', 'youtube']"
                /></a>
              </div>
            </div>

            <!-- Link list 1 -->
            <div class="col-6 col-md-4 col-lg-3 mb-space-sm mb-lg-0">
              <h5 class="text-secondary fs-small font-weight-bold mb-space-xs">Academics</h5>
              <ul class="list-unstyled fs-xs">
                <li class="mb-space-xxs">
                  <a href="https://www.asu.edu/degrees" class="text-light-4">Majors & Degrees</a>
                </li>
                <li class="mb-space-xxs">
                  <a href="https://asuonline.asu.edu/" class="text-light-4">ASU Online</a>
                </li>
                <li class="mb-space-xxs">
                  <a href="https://catalog.asu.edu/" class="text-light-4">Course Catalog</a>
                </li>
                <li class="mb-space-xxs">
                  <a href="https://graduate.asu.edu/" class="text-light-4">Graduate College</a>
                </li>
              </ul>
            </div>

            <!-- Link list 2 -->
            <div class="col-6 col-md-4 col-lg-3 mb-space-sm mb-lg-0">
              <h5 class="text-secondary fs-small font-weight-bold mb-space-xs">Student Services</h5>
              <ul class="list-unstyled fs-xs">
                <li class="mb-space-xxs">
                  <a href="https://my.asu.edu" class="text-light-4">My ASU Portal</a>
                </li>
                <li class="mb-space-xxs">
                  <a href="https://lib.asu.edu/" class="text-light-4">University Libraries</a>
                </li>
                <li class="mb-space-xxs">
                  <a href="https://tutoring.asu.edu/" class="text-light-4">Academic Tutoring</a>
                </li>
                <li class="mb-space-xxs">
                  <a href="https://students.asu.edu/financialaid" class="text-light-4"
                    >Financial Aid & Scholarship</a
                  >
                </li>
              </ul>
            </div>

            <!-- Link list 3 -->
            <div class="col-12 col-md-4 col-lg-3">
              <h5 class="text-secondary fs-small font-weight-bold mb-space-xs">Contact & Info</h5>
              <ul class="list-unstyled fs-xs">
                <li class="mb-space-xxs text-light-4">
                  <font-awesome-icon icon="phone" class="mr-2 text-secondary" /> 480-965-2100
                </li>
                <li class="mb-space-xxs text-light-4">
                  <font-awesome-icon icon="map-marker-alt" class="mr-2 text-secondary" /> Tempe, AZ
                  85287
                </li>
                <li class="mb-space-xxs">
                  <a href="https://www.asu.edu/contactasu" class="text-light-4"
                    ><font-awesome-icon icon="envelope" class="mr-2 text-secondary" /> Contact ASU
                    Online</a
                  >
                </li>
                <li class="mb-space-xxs">
                  <a href="https://www.asu.edu/map" class="text-light-4"
                    ><font-awesome-icon icon="map" class="mr-2 text-secondary" /> Campus Maps &
                    Directions</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #secondary-menu>
      <div
        class="py-space-sm d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 fs-xs text-light-4"
      >
        <a href="https://www.asu.edu/about" class="text-light-4 mr-3">About ASU</a>
        <a href="https://www.asu.edu/news" class="text-light-4 mr-3">ASU News</a>
        <a href="https://thesundevils.com/" class="text-light-4 mr-3">Athletics</a>
        <a href="https://www.asu.edu/giving" class="text-light-4">Giving to ASU</a>
      </div>
    </template>
  </FooterStandard>
</template>

<script setup lang="ts">
import { FooterStandard, type TertiaryItem } from "@rds-vue-ui/footer-standard";

const tertiaryItems: TertiaryItem[] = [
  { text: "Copyright and Trademark", uri: "https://www.asu.edu/copyright", target: "_self" },
  { text: "Accessibility", uri: "https://www.asu.edu/accessibility", target: "_self" },
  { text: "Privacy", uri: "https://www.asu.edu/privacy", target: "_self" },
  { text: "Terms of Use", uri: "https://www.asu.edu/termsofuse", target: "_self" },
  { text: "Jobs", uri: "https://cfo.asu.edu/applicant", target: "_self" },
  { text: "Emergency", uri: "https://www.asu.edu/emergency", target: "_self" },
];
</script>

<style scoped>
.mr-3 {
  margin-right: 1rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
</style>
