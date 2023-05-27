<template>
  <div
    v-if="isLoading"
    class="preloader relative"
  >
    <div class="spinner absolute" />
    <div class="spiner-2 absolute" />
    <div
      class="spiner-3 absolute"
    />
    <img
      class=" absolute"
      :src="SmallShiba"
      alt="shiba"
    >
    <div class="mt-72">
      <img
        class=""
        :src="SpiderShibaInu"
        alt="SpiderShibaInu"
      >
    </div>
  </div>
</template>

<script setup>
import SmallShiba from '~/assets/img/preloader/SmallShiba.png'
import SpiderShibaInu from 'assets/img/preloader/SpiderShibaInu.svg'
import {ref, onMounted} from 'vue';

const isLoading = ref(true);

onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>

<style scoped>

.preloader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(260.81deg, #162758 2.47%, #0A142A 97.49%);
}

.spinner {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #E11D2E;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: spin 5s infinite linear;

}

.spiner-2 {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #E11D2E;
  border-bottom-color: #E11D2E;
  animation: spin 4s infinite linear;

}

.spiner-3 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #E11D2E;
  border-bottom-color: #E11D2E;
  animation: spin 3s infinite linear;

}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

