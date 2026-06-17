<template>
  <div
    class="responsive-view bg-surface font-body-md text-on-surface antialiased overflow-x-hidden min-h-screen"
  >
    <!-- Utility Top Bar (Desktop Only) -->
    <nav class="bg-surface-container-low hidden lg:block border-b border-outline-variant">
      <div
        class="max-w-container-max mx-auto px-gutter h-10 flex justify-end items-center gap-6 font-label-lg text-label-lg text-on-surface-variant"
      >
        <a class="hover:text-asu-maroon transition-colors" href="https://www.asu.edu/">ASU Home</a>
        <a class="hover:text-asu-maroon transition-colors" href="https://my.asu.edu/">My ASU</a>
        <a class="hover:text-asu-maroon transition-colors" href="https://www.asu.edu/colleges"
          >Colleges &amp; Schools</a
        >
        <a class="hover:text-asu-maroon transition-colors" href="https://my.asu.edu/">Sign In</a>
        <div class="flex items-center gap-1 cursor-pointer hover:text-asu-maroon">
          <span>Search</span>
          <font-awesome-icon icon="search" class="text-[14px]" />
        </div>
      </div>
    </nav>

    <!-- Main Header -->
    <header class="bg-white sticky top-0 z-50 shadow-sm">
      <div class="max-w-container-max mx-auto px-gutter h-20 flex justify-between items-center">
        <!-- Logo and Desktop Navigation Links -->
        <div class="flex items-center gap-8">
          <NuxtLink to="/" class="flex-shrink-0">
            <img
              alt="ASU Logo"
              class="h-10 md:h-12 w-auto"
              src="https://lh3.googleusercontent.com/aida/AP1WRLswrq0Ei9lbvgnk41CY5LYYHqCdG8g4-GE2Q-QD0wJc9XYevqyxUoErqAYTHYrxypPIfMu9DYlh59NxesA_wxDCyF4VzI7bFhodVUJPVUyS1VhAlDS83hqIBgftrsUWlokZ13Hq4igbBKYucisvZxvA0IIcbA8etMfQuii9tcNbmJxUHhz1MxEl1ad-duT36Aqh4R1eKiT4bq8FlYUxcYr6hagViwaJoAbWzeq-idygi5DVKBqCaJB4v1B3"
            />
          </NuxtLink>
          <nav
            class="hidden xl:flex items-center gap-6 font-headline-sm text-[16px] text-asu-maroon font-bold"
          >
            <a class="hover:border-b-2 border-asu-maroon pb-1" href="https://news.asu.edu/"
              >News and Events</a
            >
            <a class="hover:border-b-2 border-asu-maroon pb-1" href="https://www.asu.edu/academics"
              >Academics</a
            >
            <a class="hover:border-b-2 border-asu-maroon pb-1" href="https://research.asu.edu/"
              >Research</a
            >
            <a class="hover:border-b-2 border-asu-maroon pb-1" href="https://admission.asu.edu/"
              >Admission</a
            >
            <a class="hover:border-b-2 border-asu-maroon pb-1" href="https://thesundevils.com/"
              >Athletics</a
            >
            <a class="hover:border-b-2 border-asu-maroon pb-1" href="https://alumni.asu.edu/"
              >Alumni</a
            >
            <a class="hover:border-b-2 border-asu-maroon pb-1" href="https://giving.asu.edu/"
              >Giving</a
            >
          </nav>
        </div>

        <!-- CTA Buttons / Mobile Hamburger Trigger -->
        <div class="flex items-center gap-4">
          <a
            href="https://admission.asu.edu/apply"
            target="_blank"
            class="bg-asu-maroon text-white font-label-lg px-5 md:px-6 py-2 transition-transform active:scale-95 hover:bg-opacity-90 text-sm md:text-base"
            >Apply</a
          >
          <a
            href="https://visit.asu.edu/"
            target="_blank"
            class="hidden sm:inline-block border-2 border-asu-maroon text-asu-maroon font-label-lg px-6 py-2 transition-transform active:scale-95 hover:bg-asu-maroon hover:text-white"
            >Visit</a
          >

          <button
            class="xl:hidden text-asu-maroon text-2xl p-1"
            aria-label="Open Mobile Menu"
            @click="mobileMenuOpen = true"
          >
            <font-awesome-icon icon="bars" />
          </button>
        </div>
      </div>
    </header>

    <!-- Unified Hero Section (Responsive Video/Image Hero) -->
    <section
      class="relative h-[480px] md:h-[80vh] md:min-h-[600px] w-full flex items-end md:items-center overflow-hidden pb-12 md:pb-0"
    >
      <!-- Media Background -->
      <div class="absolute inset-0 z-0">
        <div class="relative w-full h-full">
          <div class="absolute inset-0 bg-black/45 z-10"></div>
          <!-- Desktop Video Background -->
          <video
            ref="heroVideo"
            autoplay
            loop
            muted
            playsinline
            class="hidden md:block w-full h-full object-cover"
          >
            <source src="/images/prestigious_research_540p.mp4" type="video/mp4" />
          </video>
          <!-- Mobile Static Image Background -->
          <div
            class="md:hidden w-full h-full bg-cover bg-center"
            style="
              background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuB82LsbuNr1c8pA0lmvUHfMgECsHYEMYkz4MSIi9G3FCjtbzot30hmbeE7eAvvk-GYVOG-YEEFchkH4w3yJAGKvvCzDLP49kU3RbiVJ47yjcrS7GiHjLIRLSIcS-TmxI97xbpw_RzU3O73NnbShnYx_K48CRyNyrlW3LO9pQcAJt7NALftP0Ibvj3jnG6dYyG-9fuEz-kr7KZKCCd84Jop-2UHPirk20dbqjkNnJAl4vLpCqwJQHMVDVFGD0SS_ZguzNKIcJL0-ep6A&quot;);
            "
          ></div>
        </div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-20 max-w-container-max mx-auto px-gutter w-full">
        <div class="max-w-2xl">
          <h1
            class="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-stack-md leading-tight drop-shadow-lg font-black"
          >
            Study at one of the most prestigious research institutions in the nation
          </h1>
          <p
            class="hidden md:block font-headline-sm text-white mb-stack-lg leading-relaxed drop-shadow-md"
          >
            ASU is part of the Association of American Universities, a highly selective group of top
            research institutions that advocates for innovation, education and academic excellence.
          </p>
          <a
            href="https://research.asu.edu/"
            target="_blank"
            class="inline-block bg-asu-gold text-asu-maroon font-headline-sm font-bold px-8 md:px-10 py-3 md:py-4 hover:bg-white transition-colors text-sm md:text-base"
          >
            Find out more
          </a>
        </div>
      </div>

      <!-- Video Control Button (Desktop Only) -->
      <div class="hidden md:flex absolute bottom-8 right-gutter z-20 gap-4">
        <button
          class="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          :aria-label="isVideoPlaying ? 'Pause Video' : 'Play Video'"
          @click="togglePlay"
        >
          <font-awesome-icon :icon="isVideoPlaying ? 'pause' : 'play'" />
        </button>
      </div>
    </section>

    <!-- Find My Degree / Rankings / I am a Future Section (Responsive Grid) -->
    <section class="topographic-bg py-10 md:py-section-padding">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="bg-white grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-md">
          <!-- Column 1: Search Form -->
          <div
            class="md:col-span-4 p-6 md:p-10 border-b md:border-b-0 md:border-r border-outline-variant"
          >
            <h2
              class="font-headline-md text-headline-sm md:text-headline-md mb-stack-lg text-neutral-900 font-bold"
            >
              Find my degree program
            </h2>
            <form class="space-y-6" @submit.prevent="handleSearch">
              <div>
                <p class="font-label-lg mb-2 text-on-surface-variant text-sm md:text-base">
                  I would like to take most or all classes
                </p>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      v-model="searchLocation"
                      value="in-person"
                      class="text-asu-maroon focus:ring-asu-maroon"
                      name="location"
                      type="radio"
                    />
                    In person
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      v-model="searchLocation"
                      value="online"
                      class="text-asu-maroon focus:ring-asu-maroon"
                      name="location"
                      type="radio"
                    />
                    Online
                  </label>
                </div>
              </div>
              <div>
                <label
                  class="block font-label-lg mb-2 text-on-surface-variant text-sm md:text-base"
                  for="keywords-input"
                  >Search by keyword</label
                >
                <input
                  id="keywords-input"
                  v-model="searchKeyword"
                  class="w-full border border-outline-variant focus:border-asu-maroon focus:ring-asu-maroon p-2 rounded-sm"
                  placeholder="Enter keywords"
                  type="text"
                />
              </div>
              <div class="relative">
                <span
                  class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                  >OR</span
                >
                <hr class="border-outline-variant" />
              </div>
              <div>
                <label
                  class="block font-label-lg mb-2 text-on-surface-variant text-sm md:text-base"
                  for="interest-select"
                  >Search by interest area</label
                >
                <select
                  id="interest-select"
                  v-model="searchInterest"
                  class="w-full border border-outline-variant focus:border-asu-maroon focus:ring-asu-maroon p-2 border bg-white rounded-sm"
                >
                  <option value="">Select one...</option>
                  <option value="business">Business</option>
                  <option value="engineering">Engineering</option>
                  <option value="arts">Arts & Design</option>
                  <option value="science">Sciences</option>
                  <option value="sustainability">Sustainability</option>
                </select>
              </div>
              <div>
                <p class="font-label-lg mb-2 text-on-surface-variant text-sm md:text-base">
                  Degree type
                </p>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      v-model="searchDegreeType"
                      value="undergraduate"
                      class="text-asu-maroon focus:ring-asu-maroon"
                      name="type"
                      type="radio"
                    />
                    Undergraduate
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      v-model="searchDegreeType"
                      value="graduate"
                      class="text-asu-maroon focus:ring-asu-maroon"
                      name="type"
                      type="radio"
                    />
                    Graduate
                  </label>
                </div>
              </div>
              <div class="flex items-center gap-4 pt-4">
                <button
                  class="bg-asu-maroon text-white font-label-lg px-8 py-3 hover:bg-opacity-95 transition-colors text-sm md:text-base font-bold rounded-sm"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  class="text-asu-maroon font-label-lg hover:underline text-sm md:text-base"
                  type="button"
                  @click="resetForm"
                >
                  Reset
                </button>
              </div>
              <a
                class="block text-asu-maroon font-label-lg underline pt-2 hover:text-opacity-80 text-sm md:text-base"
                href="https://www.asu.edu/degrees"
                >Discover what's right for me</a
              >
            </form>
          </div>

          <!-- Column 2: Rankings Carousel -->
          <div
            class="md:col-span-4 bg-asu-gold p-6 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden border-b md:border-b-0 border-outline-variant"
          >
            <div class="relative z-10 w-full flex flex-col items-center">
              <transition name="fade" mode="out-in">
                <div
                  :key="currentRankIndex"
                  class="min-h-[260px] md:min-h-[280px] flex flex-col justify-center items-center"
                >
                  <span
                    class="font-black text-7xl md:text-8xl block leading-none text-asu-maroon"
                    >{{ currentRanking.stat }}</span
                  >
                  <span
                    class="font-headline-sm block mb-2 md:mb-4 uppercase tracking-tighter text-asu-maroon font-bold text-sm md:text-base"
                    >{{ currentRanking.subtitle }}</span
                  >
                  <span
                    class="font-headline-lg text-headline-sm md:text-headline-lg block leading-tight mb-2 text-asu-maroon font-black uppercase md:normal-case"
                    >{{ currentRanking.title }}</span
                  >
                  <p
                    class="font-label-lg text-asu-maroon/80 mb-4 md:mb-6 uppercase tracking-wider text-xs md:text-sm"
                  >
                    {{ currentRanking.scope }}
                  </p>
                  <p
                    class="font-label-lg italic text-[11px] text-asu-maroon/70 mb-4 h-12"
                    v-html="currentRanking.source"
                  ></p>
                </div>
              </transition>
              <div class="flex justify-center gap-4 mb-6">
                <button
                  class="w-10 h-10 rounded-full border border-asu-maroon flex items-center justify-center hover:bg-asu-maroon/10 text-asu-maroon transition-colors"
                  aria-label="Previous Rank"
                  @click="prevRank"
                >
                  <font-awesome-icon icon="chevron-left" />
                </button>
                <button
                  class="w-10 h-10 rounded-full border border-asu-maroon flex items-center justify-center hover:bg-asu-maroon/10 text-asu-maroon transition-colors"
                  :aria-label="isRankPlaying ? 'Pause Slideshow' : 'Play Slideshow'"
                  @click="toggleRankAutoPlay"
                >
                  <font-awesome-icon :icon="isRankPlaying ? 'pause' : 'play'" />
                </button>
                <button
                  class="w-10 h-10 rounded-full border border-asu-maroon flex items-center justify-center hover:bg-asu-maroon/10 text-asu-maroon transition-colors"
                  aria-label="Next Rank"
                  @click="nextRank"
                >
                  <font-awesome-icon icon="chevron-right" />
                </button>
              </div>
              <a
                class="text-asu-maroon font-bold underline hover:text-opacity-80"
                href="https://www.asu.edu/rankings"
                >View all rankings</a
              >
            </div>
          </div>

          <!-- Column 3: Future Student Portal -->
          <div class="md:col-span-4 p-6 md:p-10 flex flex-col">
            <h2
              class="font-headline-md text-headline-sm md:text-headline-md mb-6 md:mb-8 text-neutral-900 font-bold"
            >
              I am a future
            </h2>
            <div class="flex border-b border-outline-variant mb-6">
              <button
                :class="
                  futureStudentTab === 'in-person'
                    ? 'border-asu-maroon text-asu-maroon border-b-4 font-bold'
                    : 'text-on-surface-variant'
                "
                class="flex-1 pb-2 font-headline-sm transition-all text-sm md:text-base"
                @click="futureStudentTab = 'in-person'"
              >
                In Person
              </button>
              <button
                :class="
                  futureStudentTab === 'online'
                    ? 'border-asu-maroon text-asu-maroon border-b-4 font-bold'
                    : 'text-on-surface-variant'
                "
                class="flex-1 pb-2 font-headline-sm transition-all text-sm md:text-base"
                @click="futureStudentTab = 'online'"
              >
                Online
              </button>
            </div>

            <ul v-if="futureStudentTab === 'in-person'" class="space-y-4 mb-auto">
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://admission.asu.edu/undergrad"
                  >First-year student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://admission.asu.edu/transfer"
                  >Transfer student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://barretthonors.asu.edu/"
                  >Honors student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://admission.asu.edu/graduate"
                  >Graduate student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://admission.asu.edu/international"
                  >International student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://veterans.asu.edu/"
                  >Veteran student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://admission.asu.edu/nondegree"
                  >Non-degree student</a
                >
              </li>
            </ul>
            <ul v-else class="space-y-4 mb-auto">
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://asuonline.asu.edu/admission/first-year/"
                  >Online First-year student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://asuonline.asu.edu/admission/transfer/"
                  >Online Transfer student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://asuonline.asu.edu/admission/graduate/"
                  >Online Graduate student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://asuonline.asu.edu/admission/international/"
                  >Online International student</a
                >
              </li>
              <li>
                <a
                  class="text-asu-maroon underline hover:text-opacity-80 font-body-lg text-sm md:text-base"
                  href="https://asuonline.asu.edu/military-veterans/"
                  >Online Military & Veteran</a
                >
              </li>
            </ul>

            <div class="pt-8">
              <a
                href="https://admission.asu.edu/espanol"
                target="_blank"
                class="inline-block bg-black text-white font-label-lg px-6 py-3 hover:bg-neutral-800 transition-colors text-xs md:text-sm text-center w-full md:w-auto"
                >Aprender más en Español</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stories of Excellence Section -->
    <section class="py-10 md:py-section-padding">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2
          class="font-headline-md text-headline-sm md:text-headline-md mb-stack-lg text-neutral-900 font-bold"
        >
          <span class="boxed-highlight">Stories of excellence</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 md:gap-y-16">
          <!-- Story 1 -->
          <article class="relative group cursor-pointer flex flex-col">
            <div class="overflow-hidden shadow-sm">
              <img
                alt="ASU Graduate Wins Competition"
                class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsbsBbFUdjE1HA97j6iPqn3wZ4DzZ6Cubr-OjoZM4DNmWEPShiFtLHcPrJ2a71Dx_WYFI7bXijS3U7wHkkgQWcNXBu2N1-LpqfVAoniofYRTvJraJYE5qOF4HtJklFSUh5acajuIcLYR-EsCk96oww1OIHUYSR5WLHT8AdHTzyjSTuT-1d9qIasNs99INgKy1Y7nUOZakNqrd6Sdqy0RMyhJLsv0YHmgSew3SWzp-QsSsKXNzbAXowJ-Z-V"
              />
            </div>
            <div
              class="bg-white p-6 mx-4 -mt-10 relative z-10 shadow-sm flex-1 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-lg"
            >
              <div>
                <h3
                  class="font-headline-sm text-base md:text-headline-sm mb-2 group-hover:text-asu-maroon text-neutral-900 font-bold transition-colors"
                >
                  ASU graduate wins $100K in pitch competition
                </h3>
                <p class="text-on-surface-variant line-clamp-3 text-sm md:text-base">
                  Days after graduating from ASU, finance alum Logan Milano won $100,000 for his
                  startup, Amryth, at Arizona's premier collegiate entrepreneurship competition.
                </p>
              </div>
              <button
                class="md:hidden mt-4 bg-asu-gold text-asu-maroon px-6 py-2 font-bold text-xs uppercase self-start"
              >
                Read more
              </button>
            </div>
          </article>

          <!-- Story 2 -->
          <article class="relative group cursor-pointer flex flex-col">
            <div class="overflow-hidden shadow-sm">
              <img
                alt="Flinn Scholarship Winners"
                class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AP1WRLstnfkIds6e-ewNlgleecfxASzrc9QwsDk6lRn2FeiSYosJnBbuZAHjCa7mMWhLrZGywjCs3L-T8ZLA7uH6X7v7kFoLCFd5OnPeOUace19V03tNBfxMwnKBnCRkae13-02OV-RNxC1qOvGW1Yk5yeatuVFsiIDUyRB7NFR5Kgth1SAECLOmg5k8-1tf46X8Y-TAkWyKUmtKtsFe8zGUYK0FYj-JZ76yCz82eCswEDLMQQGeQkDenyN688cg"
              />
            </div>
            <div
              class="bg-white p-6 mx-4 -mt-10 relative z-10 shadow-sm flex-1 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-lg"
            >
              <div>
                <h3
                  class="font-headline-sm text-base md:text-headline-sm mb-2 group-hover:text-asu-maroon text-neutral-800 font-bold transition-colors"
                >
                  Winners of prestigious Flinn Scholarship to join ASU
                </h3>
                <p class="text-on-surface-variant line-clamp-3 text-sm md:text-base">
                  Top Arizona high school grads and winners of the Flinn Scholarship have chosen ASU
                  for its academic excellence, research opportunities and outstanding honors
                  education.
                </p>
              </div>
              <button
                class="md:hidden mt-4 bg-asu-gold text-asu-maroon px-6 py-2 font-bold text-xs uppercase self-start"
              >
                Read more
              </button>
            </div>
          </article>

          <!-- Story 3 -->
          <article class="relative group cursor-pointer flex flex-col">
            <div class="overflow-hidden shadow-sm">
              <img
                alt="National Academy of Sciences"
                class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsuUYOxl1kqUiQ6a358Wv2l8fYVDVzfT0fLjvl_YXvwkUak5M63dsIIbZZ9IMuaXoXSgq_T5mdbTDrf8vOixWYUV8GRTMtHcaJYMitY6kajC8ud5lOrcnXg5YUlalXYRh4ZwMjynYXaC2UOHiE3rNb6mMj4YOQRMkpevJiREpU7JPLSmOUyph8V_Dum1pTbb01tPQEBTfmz05ooiDSG8UkZ1_3Eb0RpQxHo_R9HTLTg6vmkUDUWYWuzb46E"
              />
            </div>
            <div
              class="bg-white p-6 mx-4 -mt-10 relative z-10 shadow-sm flex-1 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-lg"
            >
              <div>
                <h3
                  class="font-headline-sm text-base md:text-headline-sm mb-2 group-hover:text-asu-maroon text-neutral-800 font-bold transition-colors"
                >
                  Two ASU professors elected to National Academy of Sciences
                </h3>
                <p class="text-on-surface-variant line-clamp-3 text-sm md:text-base">
                  Amber Wutich and Robert Page were recognized by the renowned institution for their
                  research in water insecurity and behavior of social insects.
                </p>
              </div>
              <button
                class="md:hidden mt-4 bg-asu-gold text-asu-maroon px-6 py-2 font-bold text-xs uppercase self-start"
              >
                Read more
              </button>
            </div>
          </article>

          <!-- Story 4 -->
          <article class="relative group cursor-pointer flex flex-col">
            <div class="overflow-hidden shadow-sm">
              <img
                alt="Chip Research"
                class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuivnCDB5JuCjYp-Vz_CZYMavu-6E4LnLmWQSW_jWwSTiOlF0ZGPIO3TlwW8R0cLAK0nzZbMo9WQFbh9CBKrZqDuxSyGUXLN-oE6viyYbSjlL0B6S7D7QpzKYaP5zBlhGq_2RFxRDhfdWX7dgruBdPDTaac5olQeIToA9qa34Iuek2d05y5xOuuxMxozfevddiAmscV6M80wNrnAie8AlVMeoFfRBgTYZnHEA5nVAMWEMyhaJaXRdPx1A4"
              />
            </div>
            <div
              class="bg-white p-6 mx-4 -mt-10 relative z-10 shadow-sm flex-1 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-lg"
            >
              <div>
                <h3
                  class="font-headline-sm text-base md:text-headline-sm mb-2 group-hover:text-asu-maroon text-neutral-800 font-bold transition-colors"
                >
                  University expands its role in chip research
                </h3>
                <p class="text-on-surface-variant line-clamp-3 text-sm md:text-base">
                  ASU is joining Applied Materials' new EPIC Center, which connects top universities
                  and tech companies to speed up research and strengthen semiconductor
                  manufacturing.
                </p>
              </div>
              <button
                class="md:hidden mt-4 bg-asu-gold text-asu-maroon px-6 py-2 font-bold text-xs uppercase self-start"
              >
                Read more
              </button>
            </div>
          </article>

          <!-- Story 5 (Responsive Barrett Highlight) -->
          <article class="relative group cursor-pointer flex flex-col">
            <!-- Gold Quote Box Header -->
            <div
              class="bg-asu-gold aspect-video flex flex-col justify-center p-6 md:p-8 relative overflow-hidden text-asu-maroon shadow-sm"
            >
              <p class="font-headline-sm text-base md:text-lg lg:text-xl font-black leading-snug">
                Barrett is the "gold standard" among the nation's honors colleges.
              </p>
              <span
                class="inline-block bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mt-2 self-start"
                >- The New York Times</span
              >
            </div>
            <!-- Card Body -->
            <div
              class="bg-white p-6 mx-4 -mt-10 relative z-10 shadow-sm flex-1 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-lg"
            >
              <div>
                <h3
                  class="font-headline-sm text-base md:text-headline-sm mb-2 group-hover:text-asu-maroon text-neutral-800 font-bold transition-colors"
                >
                  Barrett, The Honors College is creating bright futures
                </h3>
                <p class="text-on-surface-variant line-clamp-3 text-sm md:text-base">
                  Barrett students go on to attend the best graduate schools, win prestigious
                  international fellowships and accept positions with some of the world's top
                  companies.
                </p>
              </div>
              <button
                class="md:hidden mt-4 bg-asu-gold text-asu-maroon px-6 py-2 font-bold text-xs uppercase self-start"
              >
                Read more
              </button>
            </div>
          </article>

          <!-- Story 6 -->
          <article class="relative group cursor-pointer flex flex-col">
            <div class="overflow-hidden shadow-sm">
              <img
                alt="HonorHealth Alliance"
                class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuh0P_kRcfIGPOSANUi4XsLpB_c8y8lyGgkyKSbECLBthjszGLfLZc1Agz-8obpRYb0iYoiK3wqpdohy0sOJe_WNleEZahFYBJQbFVMwqk42wqrFZEWCy_U_zyGRcQ03L3Dbi473Pd_IXiceXKSbnXOZOAJduDsHzZUOO_fNqYI6Vdl8PKOgiUYhNSC04JbhDdpJA6zWp3Fp0znVDrLEPUB95eyOculd50wqKpDoTCTfWHERyneqb0LzTvR"
              />
            </div>
            <div
              class="bg-white p-6 mx-4 -mt-10 relative z-10 shadow-sm flex-1 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-lg"
            >
              <div>
                <h3
                  class="font-headline-sm text-base md:text-headline-sm mb-2 group-hover:text-asu-maroon text-neutral-800 font-bold transition-colors"
                >
                  Alliance set to improve health outcomes in Arizona
                </h3>
                <p class="text-on-surface-variant line-clamp-3 text-sm md:text-base">
                  ASU Health's partnership with HonorHealth will provide clinical training and
                  research collaboration for students in the new School of Medicine and Medical
                  Engineering.
                </p>
              </div>
              <button
                class="md:hidden mt-4 bg-asu-gold text-asu-maroon px-6 py-2 font-bold text-xs uppercase self-start"
              >
                Read more
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Charter Quote Section -->
    <section class="py-10 md:py-section-padding topographic-bg">
      <div class="max-w-container-max mx-auto px-gutter text-start">
        <p
          class="font-label-lg uppercase tracking-widest text-on-surface-variant mb-4 text-xs md:text-sm"
        >
          The ASU difference:
        </p>
        <h2
          class="font-display-lg text-2xl md:text-headline-lg lg:text-[56px] leading-tight md:leading-[1.1] max-w-5xl text-neutral-850 font-black"
        >
          We are measured not by whom we exclude, but by
          <span class="boxed-highlight">whom we include</span> and
          <span class="boxed-highlight">how they succeed</span>
        </h2>
        <p class="mt-6 md:mt-8 font-label-lg text-sm md:text-base">
          — Excerpt from
          <a class="text-asu-maroon underline font-bold" href="https://www.asu.edu/charter"
            >ASU charter</a
          >
        </p>
      </div>
    </section>

    <!-- Visual Blocks Row (Academics / Innovation / Serving Learners) -->
    <section class="py-10 md:py-section-padding">
      <div
        class="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter"
      >
        <!-- Card 1: Academics -->
        <div
          class="relative aspect-[16/25] hover:scale-105 transition-transform duration-300 md:aspect-[16/25] h-[600px] md:h-auto overflow-hidden group cursor-pointer shadow-lg"
        >
          <img
            alt="Experience world-class academics"
            class="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtIuTjZaVqBh_oZtZ3YfhB44y5gchqazSHP5aBIG6vT9YKJiGI3xUrMvea7kL8kMIXFonikbIbKYv7TJWrR30e1C2z5QeW_teh9l-VnlES2G6JP3DfOgGakkBt_X2iUbphbEsXD9lMKYd3gk6HRkNOTx6vdGjB_HtFKG985PIA6sI4QYXSFvMn0tgsidnp-zdfZ6M2z3LZPG_L6OBFUTDmKGlopefIH4HU4nnFSYQ7vXV-rAqszMA6bhj1f"
          />
          <!-- Default Gradient Overlay (fades out on hover on desktop) -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 transition-opacity duration-300 md:group-hover:opacity-0"
          ></div>

          <!-- Default text (slides down/fades out on hover on desktop) -->
          <div
            class="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 z-20 flex flex-col gap-4 transition-all duration-300 md:group-hover:opacity-0 md:group-hover:translate-y-4"
          >
            <h3
              class="font-headline-lg text-white text-xl md:text-headline-md leading-tight font-black"
            >
              Experience world-class academics
            </h3>
            <!-- Mobile-only button -->
            <a
              href="https://www.asu.edu/academics"
              class="md:hidden bg-asu-gold text-asu-maroon px-6 py-2.5 font-bold text-xs uppercase self-start rounded-full text-center"
              >Learn more</a
            >
          </div>

          <!-- Desktop Hover White Overlay Box -->
          <div
            class="hidden md:flex absolute -bottom-10 left-0 right-0 bg-white p-8 m-6 z-30 flex-col gap-4 transform translate-y-[101%] group-hover:-translate-y-12 transition-transform duration-300 shadow-xl border border-neutral-100 rounded-sm"
          >
            <h3 class="font-headline-md text-neutral-900 text-[20px] font-bold leading-tight">
              Experience world-class academics
            </h3>
            <p class="text-neutral-600 text-sm leading-relaxed">
              As a comprehensive public research university, ASU is committed to providing
              excellence in education through the Academic Enterprise, empowering every student and
              expanding access to higher education for all.
            </p>
            <a
              href="https://www.asu.edu/academics"
              target="_blank"
              class="bg-asu-gold text-asu-maroon text-center font-bold px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-colors text-sm self-start"
            >
              Learn more
            </a>
          </div>
        </div>

        <!-- Card 2: Innovation -->
        <div
          class="relative aspect-[16/25] hover:scale-105 transition-transform duration-300 md:aspect-[16/25] h-[600px] md:h-auto overflow-hidden group cursor-pointer shadow-lg"
        >
          <img
            alt="Innovation that serves the public"
            class="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtA-UfqGT2RiZ4lM-VVK0tGzXWEeJeTfJWM7RO53S4YHS5W9A0M38eJHB59WsMYi9Ef9qpTZWbfvVKSWA4tVU7ZkA1_me7GEA8wQrVqRwP181Rx_T5O0C54lUl2KJRzeXjnX_PfihpMaC39wr9H-4l_cd2Kgo6Exg3YgoOBb4n3TEAvLW-GWZOn13yxkstjDMIpVP6fB7VXLf9wB1LXWpOw_SQQGie2g3OzEQSYm0oNfz6GkkTXg3n4OXMA"
          />
          <!-- Default Gradient Overlay (fades out on hover on desktop) -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 transition-opacity duration-300 md:group-hover:opacity-0"
          ></div>

          <!-- Default text (slides down/fades out on hover on desktop) -->
          <div
            class="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 z-20 flex flex-col gap-4 transition-all duration-300 md:group-hover:opacity-0 md:group-hover:translate-y-4"
          >
            <h3
              class="font-headline-lg text-white text-xl md:text-headline-md leading-tight font-black"
            >
              Discovery and innovation that serves the public
            </h3>
            <!-- Mobile-only button -->
            <a
              href="https://research.asu.edu/"
              class="md:hidden bg-asu-gold text-asu-maroon px-6 py-2.5 font-bold text-xs uppercase self-start rounded-full text-center"
              >Learn more</a
            >
          </div>

          <!-- Desktop Hover White Overlay Box -->
          <div
            class="hidden md:flex absolute -bottom-10 left-0 right-0 bg-white p-8 m-6 z-30 flex-col gap-4 transform translate-y-[101%] group-hover:-translate-y-12 transition-transform duration-300 shadow-xl border border-neutral-100 rounded-sm"
          >
            <h3 class="font-headline-md text-neutral-900 text-[20px] font-bold leading-tight">
              Discovery and innovation that serves the public
            </h3>
            <p class="text-neutral-600 text-sm leading-relaxed">
              ASU is a leading research university, focused on finding solutions to society's
              greatest challenges. Our researchers work across disciplines to translate discovery
              into public value and real-world impact.
            </p>
            <a
              href="https://research.asu.edu/"
              target="_blank"
              class="bg-asu-gold text-asu-maroon text-center font-bold px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-colors text-sm self-start"
            >
              Learn more
            </a>
          </div>
        </div>

        <!-- Card 3: Serving Learners -->
        <div
          class="relative aspect-[16/25] hover:scale-105 transition-transform duration-300 md:aspect-[16/25] h-[600px] md:h-auto overflow-hidden group cursor-pointer shadow-lg"
        >
          <img
            alt="Serving all learners"
            class="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLuqxpYUPHskiCqiSSkj5su8dKfjkghenC0UtTku8DVQeGajv86_VeTIbnLxZKCWs73qtaHKkjvCtjLuKNMS6Ic2EO1IkCou5BTftoaMjVL1qGrRlp7RRLlEwTrP_T035WDC3GhG1QHIbZL3gFDb_GUsG-ZmgnrjL5AHDipPRImH33dnyxcrHS0f2KOqDtfyIisCl4_I-wdkgBk8b_VSfVxhhM1JuZGkfcPR6XZvR1p9aCRq9Uz44Xpwp6TK"
          />
          <!-- Default Gradient Overlay (fades out on hover on desktop) -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 transition-opacity duration-300 md:group-hover:opacity-0"
          ></div>

          <!-- Default text (slides down/fades out on hover on desktop) -->
          <div
            class="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 z-20 flex flex-col gap-4 transition-all duration-300 md:group-hover:opacity-0 md:group-hover:translate-y-4"
          >
            <h3
              class="font-headline-lg text-white text-xl md:text-headline-md leading-tight font-black"
            >
              Serving all learners at every stage of life
            </h3>
            <!-- Mobile-only button -->
            <a
              href="https://asuforyou.asu.edu/"
              class="md:hidden bg-asu-gold text-asu-maroon px-6 py-2.5 font-bold text-xs uppercase self-start rounded-full text-center"
              >Learn more</a
            >
          </div>

          <!-- Desktop Hover White Overlay Box -->
          <div
            class="hidden md:flex absolute -bottom-10 left-0 right-0 bg-white p-8 m-6 z-30 flex-col gap-4 transform translate-y-[101%] group-hover:-translate-y-12 transition-transform duration-300 shadow-xl border border-neutral-100 rounded-sm"
          >
            <h3 class="font-headline-md text-neutral-900 text-[20px] font-bold leading-tight">
              Serving all learners at every stage of life
            </h3>
            <p class="text-neutral-600 text-sm leading-relaxed">
              ASU is committed to providing lifelong education. From K-12 programs to professional
              development and retirement courses, we ensure high-quality learning is accessible to
              everyone.
            </p>
            <a
              href="https://asuforyou.asu.edu/"
              target="_blank"
              class="bg-asu-gold text-asu-maroon text-center font-bold px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-colors text-sm self-start"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Carve Your Path -->
    <section class="relative py-20 md:py-[160px] flex items-center justify-start overflow-hidden">
      <!-- Parallax Background Image -->
      <div
        class="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style="
          background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDgR2APIzBSHU1VZd89jJ3ynazRAIriJB8Ufi3n1T_IT77gR3u3CqQvPDCfU9wLeyrv6TP1bgsEPn9SdpGTUvIw9M7xIJz2Ttgn6rc5C3_BnFuItPJBELpmcXB_aA9sXVvyyFdT1c9NfYAM3D-rl6Az9Skg8i7DHR1SVrWzcgETh9i1xfcOz3RvsRgXMckGdQsGTuwfl83Irfdjx-bQBWue_lrG-J56B2n0wIdYAEngjOCnG-mt1VqpOOm7dzOrDE0fCVyHR95joUFa&quot;);
        "
      ></div>
      <div class="absolute inset-0 bg-asu-maroon/20 z-10"></div>

      <div class="relative z-20 max-w-container-max mx-auto px-gutter w-full flex justify-start">
        <div class="bg-white p-8 md:p-12 text-start shadow-2xl max-w-[400px] md:max-w-2xl">
          <h2
            class="font-display-lg text-headline-sm md:text-headline-lg mb-stack-md text-neutral-900 font-bold"
          >
            Carve your path
          </h2>
          <p
            class="font-body-lg text-on-surface-variant mb-stack-lg leading-relaxed text-sm md:text-lg"
          >
            At Arizona State University, you'll join a community that will help you explore your
            interests and learn new skills. Through quality academics, enrichment opportunities and
            support from friends and faculty, you'll graduate prepared to accomplish your goals
            throughout your life.
            <a class="text-asu-maroon underline font-bold" href="https://admission.asu.edu/"
              >Find the experience</a
            >
            that fits you.
          </p>
          <div class="flex flex-col md:flex-row justify-start gap-4">
            <a
              href="https://visit.asu.edu/"
              target="_blank"
              class="bg-asu-maroon text-white font-label-lg px-8 py-3 hover:bg-opacity-95 transition-colors rounded-[400rem] font-bold text-sm md:text-base"
              >Visit ASU</a
            >
            <a
              href="https://admission.asu.edu/requestinfo"
              target="_blank"
              class="bg-asu-maroon text-white font-label-lg px-8 py-3 hover:bg-opacity-95 transition-colors rounded-[400rem] font-bold text-sm md:text-base"
              >Request information</a
            >
            <a
              href="https://admission.asu.edu/apply"
              target="_blank"
              class="bg-asu-gold text-asu-maroon font-label-lg px-8 py-3 hover:bg-opacity-95 transition-colors rounded-[400rem] font-bold text-sm md:text-base animate-pulse-custom"
              >Apply now</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- One University, Many Places (Responsive Carousel) -->
    <section class="py-10 relative topographic-bg md:py-section-padding overflow-hidden bg-white">
      <div
        class="max-w-container-max mx-auto px-gutter mb-stack-lg flex justify-between items-center"
      >
        <h2
          class="font-headline-md text-headline-sm text-start md:text-headline-md font-bold text-neutral-900"
        >
          <span class="boxed-highlight">One university, many places</span>
        </h2>
        <!-- Scroll navigation -->
        <!-- <div class=" flex gap-2"> -->

        <!-- </div> -->
      </div>
      <!-- Carousel Slider container -->
      <div class="w-full relative">
        <div
          ref="campusCarousel"
          class="flex relative gap-gutter px-gutter transform-slider-desktop overflow-x-auto no-scrollbar scroll-smooth pb-10"
        >
          <div
            v-for="(campus, idx) in campuses"
            :key="idx"
            class="min-w-[85%] sm:min-w-[75%] md:min-w-[700px] 2xl:min-w-[1120px] relative group overflow-hidden flex-shrink-0 shadow-md"
          >
            <img :alt="campus.name" class="w-full aspect-[16/9] object-cover" :src="campus.img" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10"
            >
              <h3
                class="font-headline-lg text-lg md:text-headline-md mb-2 md:mb-4 font-bold font-image-display"
              >
                {{ campus.name }}
              </h3>
              <a
                :href="campus.link"
                target="_blank"
                class="bg-asu-gold rounded-[400rem] text-black font-label-lg font-bold px-6 py-2 self-start hover:bg-white transition-colors text-xs md:text-sm"
                >Virtual tour</a
              >
            </div>
          </div>
        </div>
        <button
          class="w-10 h-10 absolute left-[10%] top-1/2 -translate-y-1/2 rounded-full border border-asu-maroon flex items-center justify-center hover:bg-asu-maroon/10 text-asu-maroon transition-colors"
          aria-label="Scroll left"
          @click="scrollCampus('left')"
        >
          <font-awesome-icon icon="chevron-left" />
        </button>
        <button
          class="w-10 h-10 absolute right-[10%] top-1/2 -translate-y-1/2 rounded-full border border-asu-maroon flex items-center justify-center hover:bg-asu-maroon/10 text-asu-maroon transition-colors"
          aria-label="Scroll right"
          @click="scrollCampus('right')"
        >
          <font-awesome-icon icon="chevron-right" />
        </button>
      </div>
    </section>

    <!-- Bottom Promo Banner (Reimagining Education) -->
    <section
      class="relative bg-black h-[auto] md:h-[600px] flex flex-col md:flex-row items-center reveal overflow-hidden"
    >
      <!-- Student Background Image (Desktop Only) -->
      <div
        class="absolute inset-0 z-0 bg-cover bg-left hidden md:block"
        style="
          background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuC_yf7LpXD2RzNC7KO7SjCbIPpxx8NsYThu430HQx_9dpvUHVdJ5A2ACKSOn8QK6Yt-2Fw7drdE0-UAh5qYl8wQnXyImkz1dP9nK4sv_IRjxka0BXqUf90Q_9ZEK33TVKHQXLavd7I0q1F7S7flkfSLTxwzShDvc5iUDi1UvrQD4Yb50RRXXSeFRrbJGh8K0Gz6rpEnvJ5XkiIWSzi3tqZpKTh9w0T7M8WpIgMLFMGayrcWjAa6iMIa4Kl0GT5xRilCkpDycYrh_gPb&quot;);
        "
      ></div>
      <!-- Background Texture overlay with Parallax -->
      <div class="absolute inset-0 z-10 opacity-30">
        <div
          class="w-full h-full bg-fixed bg-center bg-cover"
          style="background-image: url(&quot;/images/ASUforYouTexture.webp&quot;)"
        ></div>
      </div>

      <!-- Content Container -->
      <div
        class="relative z-30 max-w-container-max mx-auto px-gutter w-full flex flex-col md:flex-row justify-end py-10 md:py-0"
      >
        <div class="bg-white p-6 md:p-12 max-w-full md:max-w-lg shadow-xl">
          <h2
            class="font-headline-lg text-headline-sm md:text-headline-md mb-2 text-neutral-900 font-bold"
          >
            Reimagining education for everyone
          </h2>
          <div class="mb-4 md:mb-6">
            <p
              class="inline-block bg-asu-gold px-4 py-1 font-bold text-xs md:text-sm text-asu-maroon uppercase tracking-wide"
            >
              New programs for all ages
            </p>
          </div>
          <p
            class="font-body-md text-on-surface-variant mb-stack-lg leading-relaxed text-sm md:text-base"
          >
            Ambition, curiosity, creativity and passion don't fit in any one box. No matter who you
            are or where you learn, ASU is ready to serve learners at every stage of life. ASU for
            You is the first step in a larger movement — a movement that's breaking down education
            barriers and building up high quality, affordable and accessible learning opportunities
            for everyone, from K-12 to midcareer to postretirement and every individual in between.
          </p>
          <a
            href="https://asuforyou.asu.edu/"
            target="_blank"
            class="inline-block bg-asu-maroon text-white font-label-lg px-8 py-3 hover:bg-opacity-95 transition-colors text-sm font-bold"
            >Learn more</a
          >
        </div>
      </div>
      <!-- Mobile Image display at bottom -->
      <div class="w-full h-[500px] md:hidden relative">
        <img
          alt="Smiling Student"
          class="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_yf7LpXD2RzNC7KO7SjCbIPpxx8NsYThu430HQx_9dpvUHVdJ5A2ACKSOn8QK6Yt-2Fw7drdE0-UAh5qYl8wQnXyImkz1dP9nK4sv_IRjxka0BXqUf90Q_9ZEK33TVKHQXLavd7I0q1F7S7flkfSLTxwzShDvc5iUDi1UvrQD4Yb50RRXXSeFRrbJGh8K0Gz6rpEnvJ5XkiIWSzi3tqZpKTh9w0T7M8WpIgMLFMGayrcWjAa6iMIa4Kl0GT5xRilCkpDycYrh_gPb"
        />
      </div>
    </section>

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
          <div
            class="flex flex-wrap justify-center lg:justify-start gap-8 font-semibold text-black"
          >
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
            <a href="#" class="text-asu-black cursor-pointer hover:underline-black"
              >Accessibility</a
            >
            <a href="#" class="text-asu-black cursor-pointer hover:underline-black">Privacy</a>
            <a href="#" class="text-asu-black cursor-pointer hover:underline-black">Terms of Use</a>
            <a href="#" class="text-asu-black cursor-pointer hover:underline-black">Emergency</a>
          </div>
        </div>
      </div>
    </footer>

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
import { ref, computed, onMounted, onUnmounted } from "vue";

// Disable default RDS Layout to keep pixel-perfect custom styling from Stitch
definePageMeta({
  layout: false,
});

useHead({
  title: "Arizona State University | #1 in the U.S. for Innovation",
  meta: [
    {
      name: "description",
      content:
        "Explore Arizona State University (ASU). Replicating the ASU homepage with modern Vue 3 components, featuring in-person and online degree search, rankings, stories, values, and campus locations.",
    },
  ],
  script: [
    { src: "https://cdn.tailwindcss.com?plugins=forms,container-queries", id: "tailwind-cdn" },
    {
      innerHTML: `
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                "primary-fixed": "#ffd9de",
                "secondary-container": "#fdc424",
                "asu-gold": "#FFC627",
                "outline": "#897174",
                "outline-variant": "#ddbfc3",
                "error": "#ba1a1a",
                "surface": "#f9f9f9",
                "inverse-primary": "#ffb2bf",
                "primary": "#6c002a",
                "surface-container-lowest": "#ffffff",
                "on-surface-variant": "#564145",
                "on-background": "#1b1b1b",
                "bg-light": "#F8F8F8",
                "on-tertiary": "#ffffff",
                "inverse-surface": "#303030",
                "primary-container": "#8c1d40",
                "surface-tint": "#a73354",
                "surface-variant": "#e2e2e2",
                "secondary": "#775a00",
                "asu-black": "#181818",
                "on-primary-fixed-variant": "#88193d",
                "on-tertiary-fixed-variant": "#005229",
                "secondary-fixed-dim": "#f6be1d",
                "tertiary-fixed": "#a8f4ba",
                "surface-container-low": "#f3f3f3",
                "on-tertiary-container": "#80ca93",
                "on-error-container": "#93000a",
                "on-primary-fixed": "#3f0016",
                "on-secondary-fixed-variant": "#5a4300",
                "primary-fixed-dim": "#ffb2bf",
                "inverse-on-surface": "#f1f1f1",
                "on-primary-container": "#ff9eb1",
                "tertiary-container": "#00562b",
                "surface-container-high": "#e8e8e8",
                "surface-bright": "#f9f9f9",
                "on-secondary-fixed": "#251a00",
                "asu-maroon": "#8C1D40",
                "background": "#f9f9f9",
                "error-container": "#ffdad6",
                "white": "#FFFFFF",
                "on-primary": "#ffffff",
                "on-secondary-container": "#6d5200",
                "surface-dim": "#dadada",
                "on-error": "#ffffff",
                "tertiary": "#003c1c",
                "on-secondary": "#ffffff",
                "surface-container": "#eeeeee",
                "on-surface": "#1b1b1b",
                "tertiary-fixed-dim": "#8dd79f",
                "secondary-fixed": "#ffdf9a",
                "surface-container-highest": "#e2e2e2",
                "on-tertiary-fixed": "#00210d"
              },
              "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
              },
              "spacing": {
                "stack-lg": "32px",
                "stack-sm": "8px",
                "stack-md": "16px",
                "gutter": "24px",
                "container-max": "1200px",
                "section-padding": "80px"
              },
              "fontFamily": {
                "headline-lg-mobile": ["Hanken Grotesk"],
                "display-lg": ["Hanken Grotesk"],
                "headline-sm": ["Hanken Grotesk"],
                "label-lg": ["Hanken Grotesk"],
                "headline-lg": ["Hanken Grotesk"],
                "body-md": ["Hanken Grotesk"],
                "body-lg": ["Hanken Grotesk"],
                "headline-md": ["Hanken Grotesk"]
              },
              "fontSize": {
                "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                "headline-sm": ["24px", {"lineHeight": "1.3", "fontWeight": "700"}],
                "label-lg": ["14px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "headline-lg": ["48px", {"lineHeight": "1.2", "fontWeight": "800"}],
                "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "headline-md": ["32px", {"lineHeight": "1.25", "fontWeight": "700"}]
              }
            }
          }
        };
      `,
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;700;800;900&display=swap",
    },
  ],
});

// Navigation drawer state
const mobileMenuOpen = ref(false);

// Hero video state
const isVideoPlaying = ref(true);
const heroVideo = ref<HTMLVideoElement | null>(null);

const togglePlay = () => {
  if (heroVideo.value) {
    if (heroVideo.value.paused) {
      heroVideo.value.play();
      isVideoPlaying.value = true;
    } else {
      heroVideo.value.pause();
      isVideoPlaying.value = false;
    }
  }
};

// Search Form State
const searchLocation = ref("in-person");
const searchKeyword = ref("");
const searchInterest = ref("");
const searchDegreeType = ref("undergraduate");

const handleSearch = () => {
  alert(
    `Searching programs:\nLocation: ${searchLocation.value}\nKeywords: ${searchKeyword.value}\nInterest Area: ${searchInterest.value}\nDegree Type: ${searchDegreeType.value}`
  );
};

const resetForm = () => {
  searchLocation.value = "in-person";
  searchKeyword.value = "";
  searchInterest.value = "";
  searchDegreeType.value = "undergraduate";
};

// Future Student Tab Filter
const futureStudentTab = ref("in-person");

// Rankings Carousel State
const currentRankIndex = ref(0);
const isRankPlaying = ref(true);
let rankInterval: any = null;

const rankings = [
  {
    stat: "#1",
    subtitle: "in the U.S. for",
    title: "most innovative school",
    scope: "10 consecutive years",
    source: "ASU ahead of MIT and Stanford<br>— U.S. News & World Report, 2016-2025",
  },
  {
    stat: "#5",
    subtitle: "in the U.S. for",
    title: "undergraduate teaching",
    scope: "among public universities",
    source: "ASU ahead of UCLA, Purdue and Wisconsin<br>— U.S. News & World Report, 2024",
  },
  {
    stat: "#1",
    subtitle: "in the U.S. for",
    title: "global impact",
    scope: "among universities",
    source: "Ranked #1 in the U.S. for addressing UN SDGs<br>— Times Higher Education, 2020-2024",
  },
];

const currentRanking = computed(() => rankings[currentRankIndex.value] || rankings[0]!);

const nextRank = () => {
  currentRankIndex.value = (currentRankIndex.value + 1) % rankings.length;
};

const prevRank = () => {
  currentRankIndex.value = (currentRankIndex.value - 1 + rankings.length) % rankings.length;
};

const toggleRankAutoPlay = () => {
  isRankPlaying.value = !isRankPlaying.value;
  if (isRankPlaying.value) {
    startRankAutoPlay();
  } else {
    stopRankAutoPlay();
  }
};

const startRankAutoPlay = () => {
  stopRankAutoPlay();
  rankInterval = setInterval(nextRank, 5000);
};

const stopRankAutoPlay = () => {
  if (rankInterval) {
    clearInterval(rankInterval);
    rankInterval = null;
  }
};

// Campus Locations Carousel
const campusCarousel = ref<HTMLElement | null>(null);
const campuses = [
  {
    name: "Polytechnic campus",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLtwreSOh4CZl3r8ImnauZurX7-JwZROw1VzyqBJZDTzbI1xO3gmGZnC5UJpbE644kGn1JQddTSRf_ZcA7IGsKbUypfU9MFpRfR6xy8bzFrI7tbEqowY0p-RFdc-yGNhJoUWrQE2La9kuC13lpvFEas4NKAqECnaJuuVGyamXvy8OTt2LmEJBpIlHS5Dk9ZBwY1MoKwYoCBqLNcmG4DbHKynoZXia7a2u8VbHrSQTEH_Y_12STqkzUsvj3-_",
    link: "https://tours.asu.edu/polytechnic",
  },
  {
    name: "Tempe campus",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLu7EO9ZD_ww7MOXyUdQ9bUuCssN4x9mfQxtC66hhXCW954RHTdpn3tzrN9USBhzfxo6UvSuASZmPxS9zI8PRMwiEhcVuol-xPOV-Kfk9NPFvpNMGTq23JGAjOI3ltNNpBbqBu2Next-g2L-Y0x90435fS9c7y8D9m0-U91C2z5QeW_teh9l-VnlES2G6JP3DfOgGakkBt_X2iUbphbEsXD9lMKYd3gk6HRkNOTx6vdGjB_HtFKG985PIA6sI4QYXSFvMn0tgsidnp-zdfZ6M2z3LZPG_L6OBFUTDmKGlopefIH4HU4nnFSYQ7vXV-rAqszMA6bhj1f",
    link: "https://tours.asu.edu/tempe",
  },
  {
    name: "Downtown Phoenix campus",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLvC_JlU4n9To3YsAxZZhAdCJffzUZJYccql59zsryHZIxsEYRVbk5ndcVmMQVPZ4fyLfGMeZKuuWDxsqei_ryjX3-XgxsiQ8l54IxSr3lIo125ZM_B0EYI79wrQlutcoIyyJL1KckxZBYOz6gzJOkYcLiL_Aaw05s-BH4M4Ci1whFNStHMcH29Di0PwnktGwrD-5vumKnHTYw0333ox-801wtHL6-7EG36eADQwWVkB94d4cilkjP4BUBiO",
    link: "https://tours.asu.edu/downtown",
  },
  {
    name: "West campus",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLtAY_kOx0PZtq-NmRW2gNJA2g74YzAU9ba17FJD-radNooLKFXOrEplMYKa2a56KLsa-m5HyHOmxf196sshLWwWwmWfwdTSlje9QYilo9dTwgrS1W37X_Z8lqxeKogTjp5QMgbewPmpw3t7aSeK9swOAyNH8AF6zxm85cSwXpQTSTBUDzx6MrJbC7EX_O5BNl0WtKo6fEWaDcNyh0XPtE5aVglT_5S4EMHnK8RcfMclGmPaWim-8_AReMx1",
    link: "https://tours.asu.edu/west",
  },
];

const scrollCampus = (direction: "left" | "right") => {
  if (campusCarousel.value) {
    const scrollAmount = 400;
    if (direction === "left") {
      campusCarousel.value.scrollLeft -= scrollAmount;
    } else {
      campusCarousel.value.scrollLeft += scrollAmount;
    }
  }
};

onMounted(() => {
  startRankAutoPlay();

  // Retrieve query parameters to support ?menu=open on load
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("menu") === "open") {
    mobileMenuOpen.value = true;
  }
});

onUnmounted(() => {
  stopRankAutoPlay();
});
</script>

<style scoped>
.topographic-bg {
  background-image: url("/images/TopoPatternWhite.webp");
}

.shimmer {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  background-size: 200% 100%;
  animation: shimmer 2.5s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

.boxed-highlight {
  background-color: #ffc627;
  padding: 0 4px;
  display: inline;
}

.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 48;
}

/* Hide scrollbars */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

.transform-slider-desktop {
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translate3d(360px, 0px, 0px);
}

.animate-slide-in {
  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes pulse-maroon {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.03);
  }

  100% {
    transform: scale(1);
  }
}

.animate-pulse-custom {
  animation: pulse-maroon 2.5s infinite ease-in-out;
}
.font-image-display {
  background: #f9f9f9;
  box-shadow:
    -0.15em 0 0 #f9f9f9,
    0.15em 0 0 #f9f9f9;
  width: fit-content !important;
}
</style>
