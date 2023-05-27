<template>
  <div
    class="s-card rounded-[30px] text-white text-2xl"
    :class="textColor"
  >
    <slot />
  </div>
</template>

<script setup>

defineProps({
  bgColor: {
    type: String,
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
