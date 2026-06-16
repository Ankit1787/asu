// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-16",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  build: {
    transpile: [
      "@rds-vue-ui/header-standard",
      "@rds-vue-ui/hero-standard-apollo",
      "@rds-vue-ui/footer-standard",
      "@rds-vue-ui/card-degree-search",
      "@rds-vue-ui/card-image-article",
      "@rds-vue-ui/card-info-vertical",
      "@rds-vue-ui/rds-dropdown",
      "@rds-vue-ui/rds-accordion",
      "@rds-vue-ui/collapse-item",
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
});
