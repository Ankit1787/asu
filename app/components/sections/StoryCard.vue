<script setup lang="ts">
import { CardImageArticle } from "@rds-vue-ui/card-image-article";

const stories = [
  {
    title: "ASU graduate wins $100K in pitch competition",
    description:
      "Days after graduating from ASU, finance alum Logan Milano won $100,000 for his startup, Amryth, at Arizona’s premier collegiate entrepreneurship competition.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsbsBbFUdjE1HA97j6iPqn3wZ4DzZ6Cubr-OjoZM4DNmWEPShiFtLHcPrJ2a71Dx_WYFI7bXijS3U7wHkkgQWcNXBu2N1-LpqfVAoniofYRTvJraJYE5qOF4HtJklFSUh5acajuIcLYR-EsCk96oww1OIHUYSR5WLHT8AdHTzyjSTuT-1d9qIasNs99INgKy1Y7nUOZakNqrd6Sdqy0RMyhJLsv0YHmgSew3SWzp-QsSsKXNzbAXowJ-Z-V",
    link: "#",
  },
  {
    title: "Winners of prestigious Flinn Scholarship to join ASU",
    description:
      "Top Arizona high school grads and winners of the Flinn Scholarship have chosen ASU for its academic excellence, research opportunities and outstanding honors education.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLstnfkIds6e-ewNlgleecfxASzrc9QwsDk6lRn2FeiSYosJnBbuZAHjCa7mMWhLrZGywjCs3L-T8ZLA7uH6X7v7kFoLCFd5OnPeOUace19V03tNBfxMwnKBnCRkae13-02OV-RNxC1qOvGW1Yk5yeatuVFsiIDUyRB7NFR5Kgth1SAECLOmg5k8-1tf46X8Y-TAkWyKUmtKtsFe8zGUYK0FYj-JZ76yCz82eCswEDLMQQGeQkDenyN688cg",
    link: "#",
  },
  {
    title: "Two ASU professors elected to National Academy of Sciences",
    description:
      "Amber Wutich and Robert Page were recognized by the renowned institution for their research in water insecurity and behavior of social insects.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsuUYOxl1kqUiQ6a358Wv2l8fYVDVzfT0fLjvl_YXvwkUak5M63dsIIbZZ9IMuaXoXSgq_T5mdbTDrf8vOixWYUV8GRTMtHcaJYMitY6kajC8ud5lOrcnXg5YUlalXYRh4ZwMjynYXaC2UOHiE3rNb6mMj4YOQRMkpevJiREpU7JPLSmOUyph8V_Dum1pTbb01tPQEBTfmz05ooiDSG8UkZ1_3Eb0RpQxHo_R9HTLTg6vmkUDUWYWuzb46E",
    link: "#",
  },
  {
    title: "University expands its role in chip research",
    description:
      "ASU is joining Applied Materials' new EPIC Center, which connects top universities and tech companies to speed up research and strengthen semiconductor manufacturing.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLuivnCDB5JuCjYp-Vz_CZYMavu-6E4LnLmWQSW_jWwSTiOlF0ZGPIO3TlwW8R0cLAK0nzZbMo9WQFbh9CBKrZqDuxSyGUXLN-oE6viyYbSjlL0B6S7D7QpzKYaP5zBlhGq_2RFxRDhfdWX7dgruBdPDTaac5olQeIToA9qa34Iuek2d05y5xOuuxMxozfevddiAmscV6M80wNrnAie8AlVMeoFfRBgTYZnHEA5nVAMWEMyhaJaXRdPx1A4",
    link: "#",
  },
  {
    title: "Barrett, The Honors College is creating bright futures",
    description:
      "Barrett students go on to attend the best graduate schools, win prestigious international fellowships and accept positions with some of the world’s top companies.",
    image: "/images/barrett.webp",
    link: "#",
  },
  {
    title: "Alliance set to improve health outcomes in Arizona",
    description:
      "ASU Health's partnership with HonorHealth will provide clinical training and research collaboration for students in the new School of Medicine and Medical Engineering.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLuh0P_kRcfIGPOSANUi4XsLpB_c8y8lyGgkyKSbECLBthjszGLfLZc1Agz-8obpRYb0iYoiK3wqpdohy0sOJe_WNleEZahFYBJQbFVMwqk42wqrFZEWCy_U_zyGRcQ03L3Dbi473Pd_IXiceXKSbnXOZOAJduDsHzZUOO_fNqYI6Vdl8PKOgiUYhNSC04JbhDdpJA6zWp3Fp0znVDrLEPUB95eyOculd50wqKpDoTCTfWHERyneqb0LzTvR",
    link: "#",
  },
];
</script>

<template>
  <section class="">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8">
        <CardImageArticle
          v-for="story in stories"
          :key="story.title"
          :image-source="story.image"
          :image-alt="story.title"
          :title="story.title"
          :description="story.description"
          :link-url="story.link"
          link-text="Read more"
          :display-border="false"
          bg-variant="null"
        />
      </div>
    </div>
  </section>
</template>
