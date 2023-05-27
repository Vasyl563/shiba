<template>
  <div
    id="Why invest in SpiderShiba"
    class="flex justify-between items-center relative z-30 bg-[#30298C] text-white py-[9.3rem] px-[5.7rem] max-[1720px]:px-[2rem] max-[1100px]:hidden"
  >
    <div class="mr-5 w-[34rem] max-[1720px]:w-full">
      <img
        :src="Web"
        alt="Web"
        class="z-10 absolute left-0 top-0"
      >
      <div>
        <h2 class="text-5xl w-[30rem] font-bold pb-5">
          Why invest in SpiderShiba Inu?
        </h2>
        <p class="opacity-60 text-xl">
          in case you have lived in a cave in the last few months we will give you a brief summary of what happened in
          crypto industry
        </p>
        <SButton class="text-2xl mt-10 mr-24 flex items-center justify-center">
          Learn more about SpiderShiba
        </SButton>
      </div>
    </div>
    <div class="flex flex-col ml-[11rem] max-[1720px]:ml-[6rem]">
      <div class="flex mb-12 ">
        <div class="">
          <img
            :src="Arrow"
            alt="Arrow"
            class="rounded-2xl w-60 h-40"
          >
        </div>
        <div class=" text-3xl max-[1620px]:text-2xl">
          <h4 class="pb-3 ">
            Massive trend
          </h4>
          <p class="opacity-80 ">
            Shiba inu has invaded the market with an infinity of other meme coins that collect thousands of BNB and
            after the launch they make mind-boggling numbers!
          </p>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <img
            :src="Star"
            alt="Star"
            class="rounded-2xl w-60"
          >
        </div>

        <div class="text-3xl max-[1620px]:text-2xl">
          <h4 class="pb-3 ">
            100% of value, 0% of memecoin!
          </h4>
          <p class="opacity-80 ">
            We took the best from this trend and have decided to ride this tremendous wave success in Shiba Inu tokens,
            not only by launching a coin, but by creating a real NFT game p2e
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from '~/assets/img/invest/icons8-star-filled-48.png'
import Arrow from '~/assets/img/invest/Arrow.svg'
import Web from '~/assets/img/invest/Web.png'
</script>

<style scoped>
.rt {
  background: #FFFFFF;
  opacity: 0.1;
  border-radius: 20px;
}
</style>
