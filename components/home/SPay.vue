<template>
  <div
    id="play-and-earn"
    class="bg-blue-800 px-[5.7rem] pb-[11rem] pt-[13rem] flex flex-col items-center  max-[1300px]:px-[4rem] max-[760px]:px-8 max-[920px]:pt-[6rem]"
  >
    <h2 class=" text-white text-5xl font-bold mb-2.5">
      Play to earn
    </h2>
    <h3 class="text-2xl text-white opacity-50 mb-12">
      Many ways to earn tokens and NFTs
    </h3>
    <div
      class="bg-blue-900 rounded-3xl flex items-center pb-[3.7rem] pt-9 mb-12 px-[3rem] max-[1340px]:px-8 max-[1100px]:flex-col max-[1100px]:px-16  max-[580px]:px-6 "
    >
      <img
        :src="Spay"
        alt=""
        class="rounded-[3rem] mr-10 w-[700px] max-[1510px]:w-[600px] max-[1340px]:w-[550px] max-[1100px]:w-full max-[1100px]:mr-0 max-[1100px]:mb-4"
      >

      <div class="">
        <h3 class="text-3xl text-white font-bold pb-5 max-[1100px]:pl-2 max-[900px]:pt-8 max-[580px]:pt-5">
          Game plot and goal
        </h3>
        <div class="text-2xl text-[#ffffff99] opacity-60 max-[1510px]:text-xl">
          <p class="pb-5">
            Mary Jane has been kidnapped by Green Goblin, who has no intention of letting her escape, so she flees to
            New York City, going through different scenarios that will be part of the game!
          </p>

          <p class="pb-5">
            The goal is to accumulate as many game coins and points as possible, which will then be transformed into the
            game token based also on the attempts used to complete the level.
          </p>

          <p>
            Once the Green Goblin is defeated and Mary Jane is safed, the game is over, but we don't stop there!
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-between max-[1150px]:flex max-[1150px]:flex-col">
      <SCard
        class="flex items-center justify-between  bg-[#FF9429] py-9 px-8 mr-10 max-[1150px]:mb-8 max-[1150px]:mr-0 max-[760px]:px-2 max-[530px]:flex-col"
      >
        <img
          :src="Coin"
          alt="coin"
        >
        <div class="text-white ml-6">
          <h3 class=" max-[530px]:text-center text-3xl font-bold">
            Earn that cash!
          </h3>
          <p class="mt-5 text-xl">
            In the various levels there will also be special coins, more difficult to take, which will provide you with
            bonuses in tokens or game NFTs!
          </p>
        </div>
      </SCard>
      <SCard class="flex items-center justify-between bg-[#067CCB] py-9 px-8 max-[760px]:px-2 max-[530px]:flex-col">
        <img
          :src="Megaphone"
          alt=""
        >
        <div class="text-white ml-6">
          <h3 class=" max-[530px]:text-center text-3xl font-bold">
            Game events and challenges
          </h3>
          <p class="mt-5 text-xl">
            There will be lots of events after end of the game, that will bring together whole community and you can
            participate in challanges with the NFTs!
          </p>
        </div>
      </SCard>
    </div>
  </div>
</template>

<script setup>
import Coin from '~/assets/img/pay/Coin.png'
import Megaphone from '~/assets/img/pay/Megaphone.png'
import Spay from '~/assets/img/pay/pay.jpg'

</script>
