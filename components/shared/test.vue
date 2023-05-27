<template>
  <div
    ref="roadmapRef"
    class="roadmap"
  >
    <div class="cards-left">
      <!-- Left-side cards -->
      <div class="card">
        Card 1
      </div>
      <div class="card">
        Card 2
      </div>
      <div class="card">
        Card 3
      </div>
    </div>

    <div class="road">
      <!-- Colored line -->
      <div
        class="fill-line"
        :style="{ height: fillHeight + '%' }"
      />
    </div>

    <div class="cards-right">
      <!-- Right-side cards -->
      <div class="card">
        Card 4
      </div>
      <div class="card">
        Card 5
      </div>
      <div class="card">
        Card 6
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const fillHeight = ref(0);
const roadmapRef = ref(null);

// Update fillHeight based on scroll position
function updateFillHeight() {
  const viewportHeight = window.innerHeight;
  const contentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  fillHeight.value = (scrollPosition / (contentHeight - viewportHeight)) * 100;
}

// Attach scroll event listener when component is mounted
onMounted(() => {
  roadmapRef.value.addEventListener('scroll', updateFillHeight);
});

// Remove scroll event listener when component is unmounted
onUnmounted(() => {
  roadmapRef.value.removeEventListener('scroll', updateFillHeight);
});
</script>

<style scoped>
.roadmap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
}

.cards-left,
.cards-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background-color: #f1f1f1;
  padding: 100px;
}

.road {
  height: 100%;
  position: relative;
  width: 2px;
  background-color: #ddd;
  margin: 0 20px;
}

.fill-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #ff9800;
  transition: height 0.2s ease;
}

.cards-left, .cards-right {
  width: 200px;
}

.cards-left {
  align-items: flex-end;
}

.cards-right {
  align-items: flex-start;
}

</style>
