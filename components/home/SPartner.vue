<template>
  <div
    id="Partners&Investors"
    class="bg-blue-700 pb-[8.7rem] px-[11.1rem] max-[1500px]:px-[8rem] max-[1200px]:px-[4rem] max-[930px]:px-[2rem] max-[650px]:px-4 "
  >
    <h1
      v-if="useTitle"
      class="text-center text-5xl text-white font-bold pt-20 max-[930px]:text-4xl max-[650px]:pb-7"
    >
      Partners & Investors
    </h1>
    <div
      class="flex items-center justify-between mt-10 wrapper max-[650px]:flex-wrap"
    >
      <nuxt-link
        v-for="(item, index) in partners"
        :key="index"
        :to="item.link"
        target="_blank"
        class="mr-5 max-[650px]:mr-2 max-[650px]:pb-20"
      >
        <img
          class=" rounded-[50px] opacity-40 "
          :src="item.img"
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import CoinGecko from 'assets/img/partners/CoinGecko.jpg'
import CoinMarketCap from 'assets/img/partners/CoinMarketCap.jpg'
import Decentraland from 'assets/img/partners/Decentraland.jpg'
import InterFi from 'assets/img/partners/InterFi.jpg'
import Sanobox from 'assets/img/partners/Sanobox.jpg'
import PinkSale from 'assets/img/partners/pinkSale.jpg'

defineProps({
  useTitle: {
    type: Boolean,
    default: false
  },
})

const partners = [
  {
    img: PinkSale,
    link: 'https://www.pinksale.finance/'

  },
  {
    img: InterFi,
    link: 'https://www.interfi.network/'

  },
  {
    img: Sanobox,
    link: 'https://www.sandbox.game/en/'

  },
  {
    img: Decentraland,
    link: 'https://decentraland.org/'

  },
  {
    img: CoinGecko,
    link: 'https://www.coingecko.com/uk/all-cryptocurrencies'
  },
  {
    img: CoinMarketCap,
    link: 'https://coinmarketcap.com/'
  },
]
</script>
<style>
.wrapper {
  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 70px);
  }
}
</style>
