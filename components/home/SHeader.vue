<template>
  <section
    class="bg flex justify-between items-center max-[770px]:text-left px-[5.6rem] pt-[4rem] h-full  max-[770px]:h-full max-[770px]:px-[3rem] max-[500px]:px-4 max-[500px]:pt-8"
  >
    <div class="w-[46rem]">
      <h1 class="text-8xl text-white mb-2 max-[970px]:text-7xl max-[770px]:text-5xl max-[770px]:w-[25rem]">
        <span class="text-red-800">
          Who is
        </span> mr. Spidershiba Inu?
      </h1>
      <p class="text-2xl text-grey-700 max-[770px]:text-base">
        it’s a hybrid of Shiba and Spiderman.... but
      </p>
      <h2 class="text-grey-800 text-3xl mt-14 max-[770px]:mt-10 mb-16 max-[770px]:text-xl max-[500px]:max-w-[25rem] max-[400px]:w-[20.5rem]">
        It’s not only for pump and dump by Elon tweets.
        This is real NFT game with Achiements, Goals and nice gameplay with tokenization
      </h2>
      <div
        class="flex justify-between max-[770px]:flex-col max-[500px]:mx-2 "
      >
        <SButton
          bg-color="bg-red-900"
          class="hover:bg-red-800 ease-in duration-300 px-16 max-[770px]:mb-5 max-[770px]:mx-5 max-[400px]:w-[17rem] max-[400px]:text-lg"
        >
          Join Community
        </SButton>
        <SButton
          bg-color="bg-grey-100"
          class="hover:text-red-800 ease-in duration-300 px-16 max-[770px]:w-full max-[400px]:w-[20rem] max-[400px]:text-lg"
        >
          More about SpiderShiba Inu
        </SButton>
      </div>
      <SContractAddress class="w-full rounded-xl my-10 max-[770px]:w-full ">
        <div>Contract address:</div>
      </SContractAddress>
      <div />
    </div>
    <div>
      <img
        class="max-[770px]:hidden"
        :src="Shiba"
        alt="Shiba"
      >
    </div>
  </section>
</template>

<script setup>
import Shiba from '/assets/img/shiba.png'
</script>

<style lang="scss">
.bg {
  background-image: url("/assets/img/bg.jpg");
}

</style>
