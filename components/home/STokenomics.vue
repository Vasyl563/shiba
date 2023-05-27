<template>
  <div
    id="Tokenomics"
    class="text-white bg-[#101D3F]  px-[5.75rem] pt-[4.3rem] pb-[8.1rem] overflow-hidden max-[1780px]:px-[4.5rem] max-[1650px]:px-[3rem] max-[1100px]:flex max-[1100px]:flex-col max-[450px]:px-5"
  >
    <h2 class="text-center text-5xl font-bold mb-[4.1rem] md:text-4xl">
      Tokenomics
    </h2>
    <div class="flex justify-between items-center max-[1032px]:flex-col">
      <div class="flex flex-col">
        <div
          v-for="(card, index) in cardsFirst"
          :key="index"
          class=" bg-[#0000004d] mb-9 rounded-xl mb-6 pl-8 pr-[3.25rem] pt-6 pb-5 max-[1650px]:pr-1 max-[1032px]:pr-4"
        >
          <div />
          <h3 class="text-2xl">
            {{ card.title }}
          </h3>
          <p class="text-[#ffffff4d] w-[22.6rem] max-[1450px]:w-full max-[1032px]:text-center">
            {{ card.text }}
          </p>
        </div>
      </div>

      <SPie class="block2 max-[1032px]:mb-16" />
      <div class="flex flex-col">
        <div
          v-for="(item, index) in cardsSecond"
          :key="index"
          class=" bg-[#0000004d] mb-6 pl-8 pr-[3.25rem] pt-6 pb-5 rounded-xl max-[1650px]:pr-1"
        >
          <h3>{{ item.title }}</h3>
          <p class="text-[#ffffff4d] w-[22.6rem] max-[1450px]:w-full">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from '#imports'
import SPie from "~/components/home/SPie.vue";

const cardsFirst = ref([
  {
    bgLine: '#4E00FF',
    title: '19% on marketing',
    text: 'Thanks to our ecosystem you will be able to earn passively and actively'
  }, {
    bgLine: '#4E00FF',
    title: '5% for founders, 6% stacked',
    text: 'Thanks to our ecosystem you will be able to earn passively and actively'
  }, {
    bgLine: '#4E00FF',
    title: '30% for liquidity',
    text: 'Thanks to our ecosystem you will be able to earn passively and actively'
  }
])

// eslint-disable-next-line no-unused-vars
const cardsSecond = ref([
  {
    bgLine: '#4E00FF',
    title: '10% for advisors',
    text: 'Thanks to our ecosystem you will be able to earn passively and actively'
  }, {
    bgLine: '#4E00FF',
    title: 'P2e 15%',
    text: 'Thanks to our ecosystem you will be able to earn passively and actively'
  }, {
    bgLine: '#4E00FF',
    title: 'NFT 15%',
    text: 'Thanks to our ecosystem you will be able to earn passively and actively'
  },
]
);


</script>
<style>
@media (max-width: 1032px) {
  .block2 {
    order: -1;
  }
}

</style>
