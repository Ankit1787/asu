<template>
  <div class="d-flex flex-column min-vh-100">
    <AppHeader />
    <main id="main-content" class="flex-grow-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}
.flex-grow-1 {
  flex-grow: 1;
}
</style>
