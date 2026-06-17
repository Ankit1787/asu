<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
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
</script>

<template>
  <section class="campus-section">
    <div class="container mx-auto px-6 mb-8">
      <h2 class="font-bold text-5xl inline-block bg-[#FFC627] px-3">One university, many places</h2>
    </div>

    <Swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="'auto'"
      :centered-slides="true"
      :loop="true"
      :space-between="24"
      :navigation="true"
      :speed="800"
      :autoplay="{
        delay: 5000,
      }"
      class="asu-campus-swiper"
    >
      <SwiperSlide v-for="campus in campuses" :key="campus.name" class="campus-slide">
        <div class="campus-card">
          <img :src="campus.img" :alt="campus.name" />

          <div class="overlay">
            <h3>{{ campus.name }}</h3>

            <button>Virtual tour</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<style scoped>
.asu-campus-swiper {
  overflow: visible;
}

.campus-slide {
  width: 70%;
  transition: all 0.8s ease;
  opacity: 0.4;
  transform: scale(0.85);
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
}

.swiper-slide-prev,
.swiper-slide-next {
  opacity: 0.8;
  transform: scale(0.9);
}

.campus-card {
  position: relative;
  overflow: hidden;
}

.campus-card img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 60%);
}

.overlay h3 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
}

.overlay button {
  width: fit-content;
  background: #ffc627;
  color: black;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 9999px;
}
</style>
