<template>
  <div

    class="flex justify-between max-[920px]:flex-col max-[920px]:items-center"
  >
    <div
      v-for="(item, index) in cards"
      :key="index"
      class="s-card border-[#384D70] mr-5 rounded-[1.5rem] text-2xl text-white px-10 max-[450px]:px-5 pt-7 pb-8 w-[31rem] h-full max-[920px]:mb-12 max-[920px]:w-full max-[580px]:"
      :class="bgColor"
    >
      <img
        :src="item.url"
        alt="icons"
        class="pb-8"
      >
      <h2 class="text-white text-4xl pb-3 max-[1050px]:text-3xl">
        {{ item.title }}
      </h2>
      <h3 class="text-[#ffffff4d] text-xl pb-7 max-[1050px]:text-base">
        {{ item.subtitle }}
      </h3>
      <div class="text-[#ffffffb3] text-2xl max-[1050px]:text-xl">
        <p style="white-space: pre-wrap;">
          {{ item.textFirst }}
        </p>
        <br>
        <p style="white-space: pre-wrap;">
          {{ item.textSecond }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Figure from '~/assets/img/howItWorks/Figure.svg'
import Option from '~/assets/img/howItWorks/Option.svg'
import Return from '~/assets/img/howItWorks/Return.svg'
import {ref} from '#imports'

const cards = ref([
  {
    url: Figure,
    title: 'SpiderShib Inu Ecosystem',
    subtitle: 'Large variety of options to use SpiderShib Inu tokens and NFTs',
    textFirst: 'Our ecosystem is different from all the others, we have created the first REAL nft game with SpiderShib Inu.',
    textSecond: 'So the tokens will have real usefulness and to ensure constant growth for all holders.'

  },
  {
    url: Option,
    title: 'Many options to earn',
    subtitle: 'Thanks to our ecosystem you will be able to earn passively and actively',
    textFirst: `The passive income:
    \n- staking
    \n-the appreciation of the staked currency`,
    textSecond: `The active income:\n
  - Gaming process (you will earn money that you can turn into tokens)\n`,
  },
  {
    url: Return,
    title: 'Reshaping DeFi',
    subtitle: 'We are evolving DeFi concepts such as participation rewards, NFTs and tokenomics to maximise profit for every investor',
    textFirst: 'We offer huge tools for people around the world to take control of their financial future.'
  }
])
defineProps({
  bgColor: {
    type: String,
    default: 'bg-[#384D70]'
  },
  textColor: {
    type: String,
    default: 'text-[#ffffff]'
  }
})
</script>

<style lang="scss" scoped>
.s-card {
  color: v-bind('textColor');
}
</style>
