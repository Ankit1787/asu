<template>
  <article class="relative group cursor-pointer flex flex-col">
    <!-- Header: Image or Quote Box -->
    <div v-if="img" class="overflow-hidden shadow-sm">
      <img
        :alt="title"
        class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
        :src="img"
      />
    </div>
    <div
      v-else-if="quote"
      class="bg-asu-gold aspect-video flex flex-col justify-center p-6 md:p-8 relative overflow-hidden text-asu-maroon shadow-sm"
    >
      <p class="font-headline-sm text-base md:text-lg lg:text-xl font-black leading-snug">
        {{ quote }}
      </p>
      <span
        v-if="quoteSource"
        class="inline-block bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mt-2 self-start"
      >
        {{ quoteSource }}
      </span>
    </div>

    <!-- Body -->
    <div
      class="bg-white p-6 mx-4 -mt-10 relative z-10 shadow-sm flex-1 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-lg"
    >
      <div>
        <h3
          class="font-headline-sm text-base md:text-headline-sm mb-2 group-hover:text-asu-maroon text-neutral-800 font-bold transition-colors"
        >
          {{ title }}
        </h3>
        <p class="text-on-surface-variant line-clamp-3 text-sm md:text-base">
          {{ description }}
        </p>
      </div>
      <button
        class="md:hidden mt-4 bg-asu-gold text-asu-maroon px-6 py-2 font-bold text-xs uppercase self-start"
      >
        Read more
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  img?: string;
  quote?: string;
  quoteSource?: string;
}>();
</script>
