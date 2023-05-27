<template>
  <header
    class="z-50 flex items-center justify-between bg pt-5 pr-[2rem] pl-[5.6rem]  max-[1530px]:pl-[3.2rem] max-[1530px]:pr-[1.5rem] "
  >
    <div>
      <img
        :src="Logo"
        alt="Logo"
        class="mr-40 max-[1660px]:mr-20 max-[1480px]:pr-9 max-[1390px]:ml-3"
      >
    </div>
    <div class="flex justify-between items-center max-[1480px]:pr-1 max-[1280px]:hidden ">
      <nuxt-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="`#${item.link}`"
        class="text-white  mr-6 text-[18px] max-[1660px]:mr-5 max-[1660px]:text-base max-[1425px]:text-[15px] whitespace-nowrap hover:text-red-800 ease-in duration-300 "
      >
        {{ item.title }}
      </nuxt-link>
    </div>
    <div class="pl-2">
      <SButton
        bg-color="bg-red-800"
        height="40px"
        class="hover:bg-red-900 ease-in duration-300 px-8 text-base max-[1280px]:hidden "
      >
        Join Community
      </SButton>
    </div>
    <SMobileNavbar />
  </header>
</template>

<script setup>
import Logo from '~/assets/img/logo.png'
import SMobileNavbar from "~/components/global/navbar/SMobileNavbar.vue";
import {ref} from 'vue';


const menuItems = ref([
  {
    title: 'How it works',
    link: 'how-it-works'
  },
  {
    title: 'Play and earn',
    link: 'play-and-earn'
  },
  {
    title: 'Roadmap',
    link: 'Roadmap'
  },
  {
    title: 'Team',
    link: 'Team'
  },
  {
    title: 'Partners&Investors',
    link: 'Partners&Investors'
  },
  {
    title: 'Why invest in SpiderShiba',
    link: 'Why invest in SpiderShiba'
  },
  {
    title: 'Tokenomics',
    link: 'Tokenomics'
  },
  {
    title: 'FAQ',
    link: 'FAQ'
  },
  {
    title: 'Community',
    link: 'Community'
  },
])
</script>

