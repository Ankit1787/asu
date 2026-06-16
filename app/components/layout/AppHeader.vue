<template>
  <HeaderStandard
    :is-sticky="true"
    logo-link-url="https://www.asu.edu/"
    home-title="Arizona State University"
    :nav-items="navItems"
    apply-now-redirect-url="https://admission.asu.edu/apply"
    :display-apply-now="true"
    apply-now-text="Apply"
    :display-rfi-cta="true"
    rfi-cta-text="Request info"
    rfi-anchor-id="rfi-section"
    sign-in-redirect-url="https://my.asu.edu/"
  />
</template>

<script setup lang="ts">
import { HeaderStandard, type NavItem } from "@rds-vue-ui/header-standard";

const navItems: NavItem[] = [
  {
    isActive: false,
    htmlLink: { text: "Admission", uri: "https://admission.asu.edu/", target: "_self" },
    children: [
      {
        hasBorderTop: false,
        htmlLink: {
          text: "Undergraduate Admission",
          uri: "https://admission.asu.edu/undergrad",
          target: "_self",
        },
      },
      {
        hasBorderTop: false,
        htmlLink: {
          text: "Graduate Admission",
          uri: "https://admission.asu.edu/graduate",
          target: "_self",
        },
      },
      {
        hasBorderTop: false,
        htmlLink: {
          text: "Transfer Student Info",
          uri: "https://admission.asu.edu/transfer",
          target: "_self",
        },
      },
      {
        hasBorderTop: true,
        htmlLink: {
          text: "International Students",
          uri: "https://admission.asu.edu/international",
          target: "_self",
        },
      },
    ],
  },
  {
    isActive: false,
    htmlLink: { text: "Academics", uri: "https://www.asu.edu/academics", target: "_self" },
    children: [
      {
        hasBorderTop: false,
        htmlLink: {
          text: "Colleges & Schools",
          uri: "https://www.asu.edu/colleges",
          target: "_self",
        },
      },
      {
        hasBorderTop: false,
        htmlLink: { text: "Majors & Degrees", uri: "https://www.asu.edu/degrees", target: "_self" },
      },
      {
        hasBorderTop: true,
        htmlLink: {
          text: "ASU Online Programs",
          uri: "https://asuonline.asu.edu/",
          target: "_self",
        },
      },
    ],
  },
  {
    isActive: false,
    htmlLink: { text: "Research", uri: "https://research.asu.edu/", target: "_self" },
    children: [
      {
        hasBorderTop: false,
        htmlLink: {
          text: "Research at ASU",
          uri: "https://research.asu.edu/about",
          target: "_self",
        },
      },
      {
        hasBorderTop: false,
        htmlLink: {
          text: "Institutes & Centers",
          uri: "https://research.asu.edu/centers",
          target: "_self",
        },
      },
    ],
  },
  {
    isActive: false,
    htmlLink: { text: "Campus Life", uri: "https://eoss.asu.edu/", target: "_self" },
    children: [
      {
        hasBorderTop: false,
        htmlLink: {
          text: "Student Life",
          uri: "https://eoss.asu.edu/student-life",
          target: "_self",
        },
      },
      {
        hasBorderTop: false,
        htmlLink: {
          text: "Sun Devil Athletics",
          uri: "https://thesundevils.com/",
          target: "_self",
        },
      },
      {
        hasBorderTop: true,
        htmlLink: {
          text: "Campuses & Locations",
          uri: "https://www.asu.edu/campuses",
          target: "_self",
        },
      },
    ],
  },
  {
    isActive: false,
    htmlLink: { text: "About ASU", uri: "https://www.asu.edu/about", target: "_self" },
    children: [
      {
        hasBorderTop: false,
        htmlLink: {
          text: "ASU Charter & Mission",
          uri: "https://www.asu.edu/charter",
          target: "_self",
        },
      },
      {
        hasBorderTop: false,
        htmlLink: {
          text: "University Leadership",
          uri: "https://president.asu.edu/",
          target: "_self",
        },
      },
      {
        hasBorderTop: true,
        htmlLink: {
          text: "Rankings & Facts",
          uri: "https://www.asu.edu/rankings",
          target: "_self",
        },
      },
    ],
  },
];
</script>
