<template>
  <div
    id="sidemenu"
    class="sidemenu responsive-block hamburger-menu min-[1280px]:hidden bg-[#384D70] rounded-md p-1.5 "
    :class="{ 'is-active': isActive }"
    @click="toggleMenu"
  >
    <button
      class="sidemenu__btn"
      :class="{active:navOpen}"
      @click="navOpen = !navOpen"
    >
      <span class="top" />
      <span class="mid" />
      <span class="bottom" />
    </button>
    <transition
      name="translateX"
    >
      <div
        v-show="navOpen"
        class="psf flex flex-col justify-center items-center w-screen px-[5.7rem] max-[600px]:px-[2rem] bg-[#384D70] "
      >
        <img
          :src="Logo"
          alt="Logo"
          class="mb-5"
        >
        <nuxt-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="`#${item.link}`"
          class="text-left text-white text-xl pb-4 rounded-3xl whitespace-nowrap hover:text-red-800 ease-in duration-300"
        >
          {{ item.title }}
        </nuxt-link>
        <SButton
          bg-color="bg-red-800"
          height="45px"
          class="hover:bg-red-900 ease-in duration-300 text-xl mt-5 mb-10 w-full flex justify-center rounded-md "
        >
          Join Community
        </SButton>
      </div>
    </transition>
  </div>
</template>

<script setup>
import Logo from '~/assets/img/logo.png'
import {ref} from '#imports'

const navOpen = ref(false);


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
  }
])


</script>

<style lang="scss">
#sidemenu {
  .psf {
    overflow-y: hidden;
    // height: calc(100% - #{$headerHeight} - #{$footerHeight});
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    // box-shadow: 2px 0 3px$grey-6;
    //overflow-y: scroll;
  }

  .sidemenu {
    &__btn {
      display: block;
      width: 50px;
      height: 50px;

      border: none;
      position: relative;
      z-index: 100;
      appearance: none;
      cursor: pointer;
      outline: none;

      span {
        display: block;
        width: 20px;
        height: 2px;
        margin: auto;
        background: white;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all .4s ease;

        &.top {
          transform: translateY(-8px);
        }

        &.bottom {
          transform: translateY(8px);
        }
      }

      &.active {
        .top {
          transform: rotate(-45deg);
        }

        .mid {
          transform: translateX(-20px) rotate(360deg);
          opacity: 0;
        }

        .bottom {
          transform: rotate(45deg);
        }
      }

    }

    &__wrapper {
      padding-top: 50px;
    }

    &__list {
      padding-top: 50px;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__item {
      a {
        text-decoration: none;
        line-height: 1.6em;
        font-size: 1.6em;
        padding: .5em;
        display: block;
        color: white;
        transition: .4s ease;

        &:hover {
          background: lightgrey;
          color: dimgrey;
        }
      }
    }
  }
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active, .translateX-leave-active {
  transform-origin: top left 0;
  transition: .2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

</style>
