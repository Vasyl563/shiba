<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :loop="true"
    :autoplay="{
      delay: 1,
      disableOnInteraction: false,
    }"
    :slides-per-view="swiperOptions.slidesPerView"
    :space-between="swiperOptions.spaceBetween"
    :speed="3000"
    :breakpoints="swiperOptions.breakpoints"
    class="s-running-line"
    @breakpoint="handleBreakpoint"
  >
    <SwiperSlide
      v-for="(slide, idx) in slides"
      :key="idx"
      class="flex items-center justify-between"
    >
      {{ slide.text }}
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import {ref} from '#imports'

// eslint-disable-next-line no-unused-vars
const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1800: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
    1210: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
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
      spaceBetween: 200,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};
// eslint-disable-next-line no-undef
const slides = ref(
  Array.from({length: 10}, () => {
    return {text: "WARNING: this is not a meme coin"};
  })
)

</script>

<style lang="scss">
.s-running-line {
  @apply bg-yellow-800;
  .swiper {
    &-wrapper {
      transition-timing-function: linear;
      @apply min-w-full w-full h-10;
    }

    &-slide {
      @apply text-yellow-900 whitespace-nowrap font-semibold;
    }
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }
}
</style>
