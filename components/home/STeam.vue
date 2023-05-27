<template>
  <div
    id="Team"
    class="block text-center text-white !bg-blue-700 pt-[4.3rem] pb-[5rem] px-[11.1rem] max-[1250px]:px-[5rem] max-[950px]:px-[2rem]"
  >
    <h2 class="demonstration font-bold text-5xl mb-[3.7rem]">
      Teams
    </h2>
    <Swiper
      :modules="[Pagination]"
      :loop="true"
      :autoplay="{
        delay: 1,
        disableOnInteraction: false,
      }"
      :slides-per-view="swiperOptions.slidesPerView"
      :space-between="swiperOptions.spaceBetween"
      :breakpoints="swiperOptions.breakpoints"
      pagination=""
      @breakpoint="handleBreakpoint"
    >
      <SwiperSlide
        v-for="(person, idx) in team"
        :key="idx"
        class="flex items-center h-full"
      >
        <div class="flex flex-col">
          <img
            :src="person.img"
            alt="men"
            class="rounded-[30px]"
          >
          <h3
            class="small justify-center font-bold text-3xl mt-4"
          >
            {{ person.name }}
          </h3>
          <p class="text-xl font-semibold opacity-60 mt-3.5">
            {{ person.position }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>

import Harry from '~/assets/img/team/Harry.jpg'
import Bui from '~/assets/img/team/Bui.jpg'
import Binh from '~/assets/img/team/Binh.jpg'
import Lisa from '~/assets/img/team/Lisa.jpg'
import {ref} from '#imports'
import {Pagination} from 'swiper';

const team = ref([
  {
    img: Harry,
    name: "Harry Pham",
    position: "Founder and CEO"
  },
  {
    img: Bui,
    name: "Bui Cai",
    position: "Co-founder and CTO"
  },
  {
    img: Binh,
    name: "Binh Mai",
    position: "Blockchain expert"
  },
  {
    img: Lisa,
    name: "Lisa Dowen",
    position: "Marketing and funnels"
  },
  {
    img: Harry,
    name: "Harry Pham",
    position: "Founder and CEO"
  },
  {
    img: Bui,
    name: "Bui Cai",
    position: "Co-founder and CTO"
  },
  {
    img: Binh,
    name: "Binh Mai",
    position: "Blockchain expert"
  },
  {
    img: Lisa,
    name: "Lisa Dowen",
    position: "Marketing and funnels"
  },
])
const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    920: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    670: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};
</script>
<style scoped lang="scss">
.demonstration {
  color: var(--el-text-color-secondary);
}

.swiper {
  background-color: #162344;

}

.swiper-wrapper {
  padding-top: 5rem;
}

:global(.swiper-pagination-bullet) {
  border-radius: 0;
}

:global(.swiper-pagination-bullet-active) {
  background: red !important;
  border-radius: 0;
}

:global(.swiper-pagination) {
  position: static;
  margin-top: 3rem;
}
</style>
