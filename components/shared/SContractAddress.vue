<template>
  <div
    class="w-[40.6rem] text-[#ffffff66]  border-[#ffffff17] border-2 py-5 text-center max-[400px]:w-[21rem] max-[500px]:w-full  max-[500px]:text-left max-[400px]:pl-1 "
    @click="copyToClipboard"
  >
    <div class="text-base text-left pl-[4.3rem] max-[500px]:pl-4 ">
      <slot />
    </div>
    <div class="text-2xl max-[400px]:text-sm max-[500px]:text-lg max-[500px]:pl-4 ">
      {{ token }}
    </div>
  </div>
</template>
<script setup>
import {ref} from '#imports'

const token = ref('0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc')

const copyToClipboard = () => {
  navigator.clipboard.writeText(token.value);
}

</script>

