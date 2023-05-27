<template>
  <div class="relative px-[8.5rem] max-[1780px]:px-[5rem] max-[1650px]:px-[3rem]">
    <canvas
      ref="chartRef"
      class="relative w-[500px] max-[1380px]:w-[400px] max-[432px]:w-[345px]"
    />
    <img
      class="absolute left-0 right-0 top-0 bottom-0 m-auto "
      :src="shiba"
      alt="shiba"
    >
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import Chart from 'chart.js/auto'
import shiba from '/assets/img/roadmap/shiba.png'

const chartData = ref({
  datasets: [
    {
      borderColor: '#101D3F',
      borderWidth: 1,
      data: [6, 15, 19, 5, 30, 10, 15],
      backgroundColor: ['#663090', '#0096F2', '#4E00FF', '#FF850B', '#1DBEE1', '#133D81', '#FF0000'],
    },
  ],
})

const chartRef = ref(null)

const createPieChart = (canvas, data) => {
  new Chart(canvas, {
    type: 'doughnut',
    data: {
      ...data,
    },
    options: {
      cutout: '80%',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        labels: [
          {
            render: 'data',
            fontColor: '#000',
            position: 'outside'
          },
          {
            render: 'percentage',
            fontColor: '#ffffff',
          }
        ],
      },

      legend: {
        display: false
      }
    }
  })
}

onMounted(() => {
  if (chartRef.value) {
    createPieChart(chartRef.value, chartData.value)
  }
})
</script>
