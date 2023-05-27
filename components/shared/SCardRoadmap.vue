<template>
  <div class="main">
    <h1 class="text-center text-5xl font-bold pt-[4.4rem] mb-12">
      Roadmap
    </h1>
    <div
      class="timeline mx-[9.25rem] pb-[8.1rem] max-[1560px]:mx-[4rem] max-[660px]:mx-7"
    >
      <div class="right_content flex max-[585px]:flex-col ">
        <img
          class="h-full max-[585px]:w-[100px] max-[585px]:mb-7 max-[585px]:ml-7"
          :src="First"
          alt=""
        >
        <div class="text-left ml-8">
          <h2 class="text-3xl font-bold">
            August 2021
          </h2>
          <ul class="text-2xl">
            <li>Started project ☑️</li>
            <li>Budget accumulation ☑️</li>
            <li>Winning team search ☑️</li>
          </ul>
        </div>
      </div>

      <div class="right_content flex max-[585px]:flex-col">
        <img
          class="h-full max-[585px]:w-[100px] max-[585px]:mb-7 max-[585px]:ml-7"
          :src="Second"
          alt=""
        >
        <div class="text-left ml-8">
          <h2 class="text-3xl font-bold">
            Sept - Nov 2021
          </h2>
          <ul class="text-2xl">
            <li>Whitepaper creation ☑️</li>
            <li>Smartcontract testing ☑️</li>
            <li>Building ideas for nft game ☑️</li>
            <li>start developing website and game ☑️</li>
            <li>start creating NFT ☑️</li>
            <li>start creating tokenomics ☑️</li>
          </ul>
        </div>
      </div>

      <div class="right_content flex max-[585px]:flex-col">
        <img
          class="h-full max-[585px]:w-[100px] max-[585px]:mb-7 max-[585px]:ml-7"
          :src="Third"
          alt=""
        >
        <div class="text-left ml-8">
          <h2 class="text-3xl font-bold">
            Dec - Jan 2022
          </h2>
          <ul class="text-2xl">
            <li>Official launch on pinksale ☑️</li>
            <li>Start marketing campaign ☑️</li>
            <li>Airdrop ☑️</li>
            <li>Panckacke swap launch ☑️</li>
            <li>Start of collaborations with decentraland and the sandbox ☑️</li>
          </ul>
        </div>
      </div>

      <div class="right_content flex max-[585px]:flex-col">
        <img
          class="h-full max-[585px]:w-[100px] max-[585px]:mb-7 max-[585px]:ml-7"
          :src="Forth"
          alt=""
        >
        <div class="text-left ml-8">
          <h2 class="text-3xl font-bold">
            Q1 2022
          </h2>
          <ul class="text-2xl">
            <li>Listing on coinmarketcap and coingecko</li>
            <li>Early beta game</li>
            <li>Promotion cooperation with big celebrities</li>
            <li>NFT & Game community build-up</li>
            <li>NFT collaborations and launch</li>
          </ul>
        </div>
      </div>


      <div class="right_content flex max-[585px]:flex-col">
        <img
          class="h-full max-[585px]:w-[100px] max-[585px]:mb-7 max-[585px]:ml-7"
          :src="Fifth"
          alt="fifth"
        >
        <div class="text-left ml-8">
          <h2 class="text-3xl font-bold">
            Q2 2022
          </h2>
          <ul class="text-2xl">
            <li>Launch of new website</li>
            <li>Centralized exchange listening</li>
            <li>Launch of Spidershiba inu single player</li>
            <li>Creation of NFT marketplace</li>
            <li>First teaser of Spidershiba inu World Metaverse multiplayer</li>
            <li>Android & iOS App release</li>
          </ul>
        </div>
      </div>

      <div style="clear:both;" />
    </div>
  </div>
</template>

<script setup>
import First from '/assets/img/roadmap/1.png'
import Second from '/assets/img/roadmap/2.png'
import Third from '/assets/img/roadmap/3.png'
import Forth from '/assets/img/roadmap/4.png'
import Fifth from '/assets/img/roadmap/5.png'

</script>

<style scoped>
.main {
  margin: 0;
  padding: 0;
  background: #101932;
  color: #fff;
  z-index: 0;
}

.timeline:before {
  content: '';
  position: absolute;
  height: 74%;
  width: 2px;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #384D70;
  z-index: 1;
}

ol, ul, menu {
  list-style: unset;
}

.timeline {
  position: relative;
}

.timeline .right_content {
  box-sizing: border-box;
  line-height: normal;
  position: relative;
  width: 50%;
  padding-left: 30px;
  padding-top: 35px;
  padding-bottom: 35px;
  background: rgba(56, 77, 112, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
}

.timeline .right_content:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}

.timeline .right_content:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}

.timeline .right_content:nth-child(odd):before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #FF0000;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(58, 112, 239, 0.2);
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  z-index: 1;
}


.timeline .right_content:nth-child(even):before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #FF0000;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(58, 112, 239, 0.2);
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 1;


}

.timeline .right_content:nth-child(odd) .left_content {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;

  color: #fff;
  box-shadow: 0 0 0 3px rgba(59, 112, 239, 0.3);
  border-radius: 18px;

}

.timeline .right_content:nth-child(even) .left_content {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  color: #fff;
  box-shadow: 0 0 0 3px rgba(59, 112, 239, 0.3);
  border-radius: 18px;
}


@media (max-width: 1150px) {

  .timeline:before {
    height: 77%;
  }
}

@media (max-width: 1030px) {


  .timeline:before {
    height: 75%;
    top: 44%;
    left: 0;
    transform: translate(-50%, -50%);
  }

  .timeline .right_content:nth-child(odd),
  .timeline .right_content:nth-child(even) {
    width: 100%;
    text-align: left;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 3rem;
  }

  .timeline .right_content:nth-child(odd):before {
    left: 0;

  }

  .timeline .right_content:nth-child(odd) .left_content,
  .timeline .right_content:nth-child(even) .left_content {
    top: -30px;
    left: 50px;
    right: inherit;

  }
}

@media (max-width: 580px) {


  .timeline:before {
    height: 76%;
    top: 45%;

  }

  .timeline .right_content {
    padding-left: 1rem;
  }
}

@media (max-width: 440px) {


  .timeline:before {
    height: 77.5%;
    top: 45%;

  }
}

@media (max-width: 400px) {


  .timeline:before {
    height: 77.5%;
    top: 45%;

  }
}
</style>
