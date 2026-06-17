<script setup lang="ts">
import { FooterStandard } from "@rds-vue-ui/footer-standard";

const tertiaryItems = [
  {
    text: "Copyright and Trademark",
    uri: "https://www.asu.edu/about/copyright-trademark",
    target: "BLNK",
  },
  {
    text: "Accessibility",
    uri: "https://www.asu.edu/accessibility/",
    target: "BLNK",
  },
  {
    text: "Privacy",
    uri: "https://www.asu.edu/privacy/",
    target: "BLNK",
  },
  {
    text: "Terms of Use",
    uri: "https://www.asu.edu/tou/",
    target: "BLNK",
  },
  {
    text: "Emergency",
    uri: "https://www.asu.edu/emergency/",
    target: "BLNK",
  },
];

const secondaryItems = [
  {
    text: "Maps and Locations",
    uri: "https://www.asu.edu/about/locations-maps",
  },
  {
    text: "Jobs",
    uri: "https://www.asu.edu/asujobs",
  },
  {
    text: "Directory",
    uri: "https://isearch.asu.edu/",
  },
  {
    text: "Contact ASU",
    uri: "https://www.asu.edu/about/contact",
  },
  {
    text: "My ASU",
    uri: "https://my.asu.edu/",
  },
];
</script>

<template>
  <FooterStandard
    :tertiary-items="tertiaryItems"
    innovation-image-src="/images/footer-rank.webp"
    innovation-image-alt="Repeatedly ranked #1 on 30+ lists in the last 3 years"
  >
    <!-- BLACK SECTION -->
    <template #primary-section>
      <div
        class="bg-[#181818] text-white max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center"
      >
        <img src="/images/ASU-EndorsedLogo.png" alt="ASU Logo" class="h-20" />

        <div class="flex gap-8 text-2xl mt-6 md:mt-0">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
          <font-awesome-icon :icon="['fab', 'instagram']" />
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </div>
      </div>
    </template>

    <!-- GOLD SECTION -->
    <template #secondary-menu>
      <div class="bg-[#FFC627] flex flex-wrap items-center justify-between px-8 py-6">
        <nav class="flex flex-wrap gap-8 font-bold">
          <a
            v-for="item in secondaryItems"
            :key="item.text"
            :href="item.uri"
            target="_blank"
            class="text-black hover:underline"
          >
            {{ item.text }}
          </a>
        </nav>
      </div>
    </template>
  </FooterStandard>
</template>
