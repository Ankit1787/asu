<template>
  <div>
    <!-- Utility Top Bar (Desktop Only) -->
    <nav class="bg-surface-container-low hidden lg:block border-b border-outline-variant">
      <div
        class="max-w-container-max mx-auto px-gutter h-10 flex justify-end items-center gap-6 font-label-lg text-label-lg text-on-surface-variant"
      >
        <a
          class="hover:text-asu-maroon transition-colors text-gray-600 text-sm"
          href="https://www.asu.edu/"
          >ASU Home</a
        >
        <a
          class="hover:text-asu-maroon transition-colors text-gray-600 text-sm"
          href="https://my.asu.edu/"
          >My ASU</a
        >
        <a
          class="hover:text-asu-maroon transition-colors text-gray-600 text-sm"
          href="https://www.asu.edu/colleges"
          >Colleges and Schools</a
        >
        <a
          class="hover:text-asu-maroon transition-colors text-gray-600 text-sm"
          href="https://my.asu.edu/"
          >Sign In</a
        >
        <div
          class="flex items-center gap-1 cursor-pointer hover:text-asu-maroon text-gray-600 text-sm"
        >
          <span>Search</span>
          <font-awesome-icon icon="search" class="text-[13px]" />
        </div>
      </div>
    </nav>

    <!-- Main Header -->
    <header
      :class="isScrolled ? 'fixed top-0 ' : 'sticky top-0'"
      class="bg-white shadow-sm w-full z-50"
    >
      <div
        :class="isScrolled ? 'h-[93px]' : 'h-[113px]'"
        class="max-w-container-max mx-auto px-gutter flex justify-between items-center"
      >
        <!-- Logo and Desktop Navigation Links -->
        <div class="flex h-full gap-6">
          <!-- ASU Logo: fork icon + wordmark text -->
          <NuxtLink to="/" class="flex-shrink-0 flex items-center gap-3">
            <img
              alt="ASU Logo"
              class="transition-scrolled"
              :class="!isScrolled ? 'h-[72px] w-[93px]' : 'h-[60px] w-[83px]'"
              src="/images/arizona-state-university-logo-vertical.webp"
            />
          </NuxtLink>
          <div class="flex flex-col justify-between pt-3">
            <span
              :class="isScrolled ? 'text-[2rem]' : 'text-[2.5rem]'"
              class="transition-scrolled hidden sm:block text-[2.5rem] font-bold text-gray-900 leading-tight"
              >Arizona State University</span
            >
            <!-- Desktop Navigation -->
            <nav class="hidden xl:flex items-center font-medium text-[15px] text-gray-900 h-12">
              <!-- Home Icon with gold underline -->
              <NuxtLink
                to="/"
                class="flex items-center justify-center h-full px-3 border-b-8 border-yellow-400 text-gray-900 transition-colors"
                aria-label="Home"
              >
                <font-awesome-icon icon="home" class="text-[18px]" />
              </NuxtLink>

              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://news.asu.edu/"
                >News and Events</a
              >
              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://www.asu.edu/academics"
                >Academics</a
              >
              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://admission.asu.edu/"
                >Admission</a
              >
              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://research.asu.edu/"
                >Research</a
              >
              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://thesundevils.com/"
                >Athletics</a
              >
              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://alumni.asu.edu/"
                >Alumni</a
              >
              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://giving.asu.edu/"
                >Giving</a
              >
              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://www.asu.edu/president"
                >President</a
              >
              <a
                class="flex items-center h-full px-3 text-gray-900 decoration-none border-b-8 hover:border-yellow-400 border-transparent hover:border-asu-maroon transition-colors"
                href="https://www.asu.edu/about"
                >About ASU</a
              >
            </nav>
          </div>
        </div>

        <!-- Mobile Hamburger Trigger -->
        <div class="flex xl:hidden items-center gap-4">
          <button
            class="text-asu-maroon text-2xl p-1"
            aria-label="Open Mobile Menu"
            @click="mobileMenuOpen = true"
          >
            <font-awesome-icon icon="bars" />
          </button>
        </div>
      </div>
    </header>

    <div v-if="isScrolled" class="h-[93px]" />

    <!-- Mobile SideNav (Dynamic Open/Close Menu) -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-[100] bg-black/60 transition-opacity duration-300"
      @click.self="mobileMenuOpen = false"
    >
      <div
        class="absolute right-0 top-0 h-full bg-white flex flex-col shadow-xl w-full sm:w-[400px] animate-slide-in"
      >
        <div class="p-6 flex flex-col h-full overflow-y-auto">
          <!-- Logo & Close Panel Button -->
          <div class="flex justify-between items-start mb-6">
            <div class="flex flex-col gap-2">
              <img
                alt="ASU Logo"
                class="h-8 w-fit"
                src="https://lh3.googleusercontent.com/aida/AP1WRLswrq0Ei9lbvgnk41CY5LYYHqCdG8g4-GE2Q-QD0wJc9XYevqyxUoErqAYTHYrxypPIfMu9DYlh59NxesA_wxDCyF4VzI7bFhodVUJPVUyS1VhAlDS83hqIBgftrsUWlokZ13Hq4igbBKYucisvZxvA0IIcbA8etMfQuii9tcNbmJxUHhz1MxEl1ad-duT36Aqh4R1eKiT4bq8FlYUxcYr6hagViwaJoAbWzeq-idygi5DVKBqCaJB4v1B3"
              />
              <span class="font-bold text-on-surface">Arizona State University</span>
            </div>
            <button
              id="close-menu"
              class="border border-on-surface p-2 flex items-center justify-center hover:bg-neutral-100"
              aria-label="Close menu"
              @click="mobileMenuOpen = false"
            >
              <font-awesome-icon icon="xmark" class="text-on-surface text-xl" />
            </button>
          </div>
          <!-- Menu Search -->
          <div class="relative mb-6">
            <font-awesome-icon
              icon="search"
              class="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
            />
            <input
              class="w-full pl-10 pr-4 py-2 border border-outline-variant focus:ring-asu-maroon focus:border-asu-maroon text-body-md"
              placeholder="Search asu.edu"
              type="text"
            />
          </div>
          <!-- Navigation list -->
          <nav class="flex-1 flex flex-col border-t border-outline-variant">
            <a
              class="py-4 border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="#"
              >Home</a
            >
            <a
              class="py-4 border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="https://news.asu.edu/"
              >News and Events</a
            >
            <a
              class="py-4 border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="https://www.asu.edu/academics"
              >Academics</a
            >
            <a
              class="py-4 border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="https://admission.asu.edu/"
              >Admission</a
            >
            <a
              class="py-4 border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="https://research.asu.edu/"
              >Research</a
            >
            <div class="relative">
              <a
                class="py-4 block text-on-surface font-body-md hover:text-asu-maroon"
                href="https://thesundevils.com/"
                >Athletics</a
              >
              <div class="absolute bottom-0 left-0 w-full h-1 bg-asu-gold"></div>
            </div>
            <a
              class="py-4 border-t border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="https://alumni.asu.edu/"
              >Alumni</a
            >
            <a
              class="py-4 border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="https://giving.asu.edu/"
              >Giving</a
            >
            <a
              class="py-4 border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="https://president.asu.edu/"
              >President</a
            >
            <a
              class="py-4 border-b border-outline-variant text-on-surface font-body-md hover:text-asu-maroon"
              href="https://www.asu.edu/about"
              >About ASU</a
            >
          </nav>
          <!-- Footer Shortcuts inside Drawer -->
          <div class="grid grid-cols-2 border-t border-outline-variant mt-auto pt-4">
            <a
              class="p-3 border-r border-b border-outline-variant bg-surface-container-low text-center text-xs font-bold hover:text-asu-maroon"
              href="https://www.asu.edu/"
              >ASU Home</a
            >
            <a
              class="p-3 border-b border-outline-variant bg-surface-container-low text-center text-xs font-bold hover:text-asu-maroon"
              href="https://my.asu.edu/"
              >My ASU</a
            >
            <a
              class="p-3 border-r border-outline-variant bg-surface-container-low text-center text-xs font-bold hover:text-asu-maroon"
              href="https://www.asu.edu/colleges"
              >Colleges &amp; Schools</a
            >
            <a
              class="p-3 bg-surface-container-low text-center text-xs font-bold hover:text-asu-maroon"
              href="https://my.asu.edu/"
              >Sign In</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("menu") === "open") {
    mobileMenuOpen.value = true;
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
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
