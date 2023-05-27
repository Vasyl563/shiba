<template>
  <div class="default-layout ">
    <SPreloader />
    <SNavbar />

    <nuxt-page />

    <SFooter />
  </div>
</template>

<script setup>
import SNavbar from "~/components/global/navbar/SNavbar.vue";
import SFooter from "~/components/global/footer/SFooter.vue";
import SPreloader from "~/components/home/SPreloader.vue";

</script>
