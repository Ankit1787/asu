<template>
  <div>
    <HeaderStandard
      :nav-items="navItems"
      :is-sticky="true"
      :display-rfi-cta="false"
      :display-apply-now="false"
      home-title="Arizona State University"
      logo-link-url="/"
      logo-link-target="_self"
      main-content-id="content"
    />
  </div>
</template>

<script setup lang="ts">
import { HeaderStandard } from "@rds-vue-ui/header-standard";

const navItems = [
  {
    isActive: true,
    htmlLink: {
      text: "News and Events",
      uri: "https://news.asu.edu/",
      target: "SELF",
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: "Academics",
      uri: "https://www.asu.edu/academics",
      target: "SELF",
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: "Admission",
      uri: "https://admission.asu.edu/",
      target: "SELF",
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: "Research",
      uri: "https://research.asu.edu/",
      target: "SELF",
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: "Athletics",
      uri: "https://thesundevils.com/",
      target: "SELF",
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: "Alumni",
      uri: "https://alumni.asu.edu/",
      target: "SELF",
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: "Giving",
      uri: "https://giving.asu.edu/",
      target: "SELF",
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: "President",
      uri: "https://president.asu.edu/",
      target: "SELF",
    },
    children: [],
  },
  {
    isActive: false,
    htmlLink: {
      text: "About ASU",
      uri: "https://www.asu.edu/about",
      target: "SELF",
    },
    children: [],
  },
];
</script>

<style scoped>
.transition-scrolled {
  transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
