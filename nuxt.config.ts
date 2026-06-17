// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-16",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@rds-vue-ui/card-image-article",
      "@rds-vue-ui/card-image-tile",
      "@rds-vue-ui/footer-partner",
      "@rds-vue-ui/footer-standard",
      "@rds-vue-ui/header-standard",
      "@rds-vue-ui/rds-theme-base",
    ],
  },
  nitro: {
    externals: {
      inline: [
        "@rds-vue-ui/card-image-article",
        "@rds-vue-ui/card-image-tile",
        "@rds-vue-ui/footer-partner",
        "@rds-vue-ui/footer-standard",
        "@rds-vue-ui/header-standard",
        "@rds-vue-ui/rds-theme-base",
      ],
    },
  },
});
