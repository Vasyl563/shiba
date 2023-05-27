<template>
  <section class=" bg-blue-800 flex flex-col items-center justify-center">
    <SPartner class="bg-inherit px-[25.3rem]" />
    <div class="relative">
      <h4 class="text-4xl text-white w-[34rem] text-center absolute child-text">
        Yes you read that right, SpiderShib Inu officially enters the game to conquer the world 🌎
      </h4>
      <img
        class="z-20 w-full"
        :src="Earth"
        alt="Earth"
      >
      <img
        class="absolute z-50 child"
        :src="Shiba"
        alt="Shiba"
      >
      <SButton class="text-center absolute z-50 child-btn px-12 hover:bg-red-900">
        Let’s find out <br> more
      </SButton>
    </div>
  </section>
</template>

<script setup>
import Shiba from '~/assets/img/web/Shiba.png';
import SPartner from "~/components/home/SPartner.vue";
</script>

<style scoped>
.child {
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.child-btn {
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.child-text {
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
