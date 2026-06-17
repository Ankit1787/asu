<template>
  <div class="grid md:grid-cols-3 gap-8">
    <CardImageTile
      v-for="card in cards"
      :key="card.title"
      :bg-image-src="card.img"
      :title="card.title"
      :text="card.description"
      :cta-link="card.link"
      cta-text="Learn more"
      display-cta-button
      clickable-card
    />
  </div>
</template>

<script setup lang="ts">
import { CardImageTile } from "@rds-vue-ui/card-image-tile";
const cards = [
  {
    title: "Experience world-class academics",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLtIuTjZaVqBh_oZtZ3YfhB44y5gchqazSHP5aBIG6vT9YKJiGI3xUrMvea7kL8kMIXFonikbIbKYv7TJWrR30e1C2z5QeW_teh9l-VnlES2G6JP3DfOgGakkBt_X2iUbphbEsXD9lMKYd3gk6HRkNOTx6vdGjB_HtFKG985PIA6sI4QYXSFvMn0tgsidnp-zdfZ6M2z3LZPG_L6OBFUTDmKGlopefIH4HU4nnFSYQ7vXV-rAqszMA6bhj1f",
    link: "https://www.asu.edu/academics",
    description:
      "As a comprehensive public research university, ASU is committed to providing excellence in education through the Academic Enterprise, empowering every student and expanding access to higher education for all.",
  },
  {
    title: "Discovery and innovation that serves the public",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLtA-UfqGT2RiZ4lM-VVK0tGzXWEeJeTfJWM7RO53S4YHS5W9A0M38eJHB59WsMYi9Ef9qpTZWbfvVKSWA4tVU7ZkA1_me7GEA8wQrVqRwP181Rx_T5O0C54lUl2KJRzeXjnX_PfihpMaC39wr9H-4l_cd2Kgo6Exg3YgoOBb4n3TEAvLW-GWZOn13yxkstjDMIpVP6fB7VXLf9wB1LXWpOw_SQQGie2g3OzEQSYm0oNfz6GkkTXg3n4OXMA",
    link: "https://research.asu.edu/",
    description:
      "ASU is a major public research university focused on solving the world's most pressing challenges. Through the Knowledge Enterprise, ASU researchers seek to create new knowledge, foster innovation and drive economic development.",
  },
  {
    title: "Serving learners at every stage of life",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLtAY_kOx0PZtq-NmRW2gNJA2g74YzAU9ba17FJD-radNooLKFXOrEplMYKa2a56KLsa-m5HyHOmxf196sshLWwWwmWfwdTSlje9QYilo9dTwgrS1W37X_Z8lqxeKogTjp5QMgbewPmpw3t7aSeK9swOAyNH8AF6zxm85cSwXpQTSTBUDzx6MrJbC7EX_O5BNl0WtKo6fEWaDcNyh0XPtE5aVglT_5S4EMHnK8RcfMclGmPaWim-8_AReMx1",
    link: "https://asuforyou.asu.edu/",
    description:
      "ASU is committed to serving all students and communities. Through the Learning Enterprise, ASU is breaking down barriers to education, providing high-quality learning opportunities for students from K-12 to career development.",
  },
];
</script>
