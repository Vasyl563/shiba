<template>
  <footer
    id="Community"
    class=" footer bg-blue-600 pb-[6.5rem] pt-[3.75rem] z-30 relative max-[800px]:pl-10"
  >
    <div class="flex flex-col items-center max-[360px]:w-full">
      <img
        :src="Layer"
        alt="fon"
        class="z-10 absolute opacity-20"
      >
      <h1 class="font-bold text-5xl text-center text-white mb-[6.7rem] w-[43rem] max-[570px]:w-full max-[560px]:text-4xl max-[400px]:w-[19rem] max-[360px]:mb-7">
        Join our SpiderShib Inu Community
      </h1>
      <div
        class="flex justify-around items-center z-30 max-[360px]:px-5 max-[800px]:flex-wrap max-[800px]:justify-center"
      >
        <nuxt-link
          v-for="(item, index) in networks"
          :key="index"
          :to="item.link"
          class="flex max-[360px]:pr-5 max-[800px]:pb-8 max-[672px]:pr-10 max-[672px]:w-[7.370rem] max-[513px]:w-[6rem] max-[424px]:w-[5rem]"
          target="_blank"
        >
          <img
            class="mr-10"
            :src="item.title"
            alt=""
          >
        </nuxt-link>
      </div>
      <img
        :src="SmallShiba"
        alt="Shiba"
        class="mt-[5rem] z-30"
      >
      <SContractAddress
        class="z-50 bg-[#0000004d] mt-[3.2rem] rounded-[3.2rem] max-[500px]:mr-4 max-[700px]:pr-4 "
      >
        <p class="max-[400px]:text-xs">
          SpiderShiba Inu’s Contract address:
        </p>
      </SContractAddress>
    </div>
  </footer>
</template>

<script setup>
import Telegram from '~/assets/img/networks/tegram.svg'
import Twiter from '~/assets/img/networks/twiter.svg'
import Baby from '~/assets/img/networks/baby.svg'
import Facebook from '~/assets/img/networks/facebook.svg'
import M from 'assets/img/networks/M.svg'
import Instagram from '~/assets/img/networks/instagram.svg'
import SmallShiba from '~/assets/img/networks/SmallSiba.png'
import Layer from '~/assets/img/networks/layer.png'

const networks = [
  {
    title: Telegram,
    link: 'https://web.telegram.org/z/'
  }, {
    title: Twiter,
    link: 'https://twitter.com/'
  }, {
    title: Baby,
    link: 'how-it-works'
  }, {
    title: Facebook,
    link: 'https://uk-ua.facebook.com/'
  }, {
    title: M,
    link: 'how-it-works'
  }, {
    title: Instagram,
    link: 'https://instagram.com/'
  },
]
</script>

<style>

</style>
