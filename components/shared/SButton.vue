<template>
  <a
    class="s-button text-white text-2xl rounded-2xl whitespace-nowrap flex items-center"
    :class="bgColor"
    href="https://www.shibatoken.com/"
    target="_blank"
  >
    <slot />
  </a>
</template>
<script setup>


defineProps({
  bgColor: {
    type: String,
    default: 'bg-red-800'
  },
  height: {
    type: String,
    default: '80px'
  }
})
</script>

<style lang="scss">
.s-button {
  height: v-bind('height');
}
</style>
