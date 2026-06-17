<template>
  <div
    class="relative aspect-[16/25] hover:scale-105 transition-transform duration-300 h-[447px] md:h-[600px] md:h-auto overflow-hidden group cursor-pointer shadow-lg"
  >
    <img
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      :src="img"
    />
    <!-- Default Gradient Overlay (fades out on hover on desktop) -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 transition-opacity duration-300 md:group-hover:opacity-0"
    ></div>

    <!-- Default text (slides down/fades out on hover on desktop) -->
    <div
      class="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 z-20 flex flex-col gap-4 transition-all duration-300 md:group-hover:opacity-0 md:group-hover:translate-y-4"
    >
      <h3 class="font-headline-lg text-white text-xl md:text-headline-md leading-tight font-black">
        {{ title }}
      </h3>
      <!-- Mobile-only button -->
      <a
        :href="link"
        class="md:hidden bg-asu-gold text-asu-maroon px-6 py-2.5 font-bold text-xs uppercase self-start rounded-full text-center"
        >Learn more</a
      >
    </div>

    <!-- Desktop Hover White Overlay Box -->
    <div
      class="hidden md:flex absolute -bottom-10 left-0 right-0 bg-white p-8 m-6 z-30 flex-col gap-4 transform translate-y-[101%] group-hover:-translate-y-12 transition-transform duration-300 shadow-xl border border-neutral-100 rounded-sm"
    >
      <h3 class="font-headline-md text-neutral-900 text-[20px] font-bold leading-tight">
        {{ title }}
      </h3>
      <p class="text-neutral-600 text-sm leading-relaxed">
        {{ description }}
      </p>
      <a
        :href="link"
        target="_blank"
        class="bg-asu-gold text-asu-maroon text-center font-bold px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-colors text-sm self-start"
      >
        Learn more
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  img: string;
  link: string;
  description: string;
}>();
</script>
