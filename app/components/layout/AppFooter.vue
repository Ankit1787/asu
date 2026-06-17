<template>
  <footer>
    <!-- Top Black Section -->
    <div class="bg-[#181818]">
      <div
        class="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between"
      >
        <!-- Logo -->
        <img src="/images/ASU-EndorsedLogo.png" alt="ASU Logo" class="h-20 object-contain" />

        <!-- Social -->
        <div class="flex items-center gap-8 text-white text-2xl mt-6 md:mt-0">
          <font-awesome-icon class="cursor-pointer" :icon="['fab', 'facebook-f']" />
          <font-awesome-icon class="cursor-pointer" :icon="['fab', 'instagram']" />
          <font-awesome-icon class="cursor-pointer" :icon="['fab', 'youtube']" />
          <font-awesome-icon class="cursor-pointer" :icon="['fab', 'linkedin-in']" />
        </div>
      </div>
    </div>

    <!-- Gold Section -->
    <div class="bg-[#FFC627]">
      <div
        class="max-w-[1200px] mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        <!-- Links -->
        <div class="flex flex-wrap justify-center lg:justify-start gap-8 font-semibold text-black">
          <a class="text-asu-black hover:underline" href="#">Maps and Locations</a>
          <a class="text-asu-black hover:underline" href="#">Jobs</a>
          <a class="text-asu-black hover:underline" href="#">Directory</a>
          <a class="text-asu-black hover:underline" href="#">Contact ASU</a>
          <a class="text-asu-black hover:underline" href="#">My ASU</a>
        </div>

        <!-- Ranking -->
        <div class="flex items-center gap-4">
          <img class="md:max-w-[320px]" src="/images/footer-rank.webp" />
        </div>
      </div>
    </div>

    <!-- Gray Bottom -->
    <div class="bg-[#E5E5E5]">
      <div
        class="max-w-[1200px] mx-auto px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-4"
      >
        <div class="flex flex-wrap gap-8 text-[15px] text-black">
          <a href="#" class="text-asu-black cursor-pointer hover:underline-black"
            >Copyright and Trademark</a
          >
          <a href="#" class="text-asu-black cursor-pointer hover:underline-black">Accessibility</a>
          <a href="#" class="text-asu-black cursor-pointer hover:underline-black">Privacy</a>
          <a href="#" class="text-asu-black cursor-pointer hover:underline-black">Terms of Use</a>
          <a href="#" class="text-asu-black cursor-pointer hover:underline-black">Emergency</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Custom footer component preserving layout and styling
</script>
