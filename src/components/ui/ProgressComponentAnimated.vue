<script setup lang="ts">
import { ref, onMounted } from 'vue';

onMounted(() => {
  generateRandomWidth();
});

const randomWidth = ref('');

const generateRandomWidth = () => {
  const width = Math.floor(Math.random() * 100) + '%';
  randomWidth.value = width;
  console.log(width);
  
};
defineProps({
  text: String
});
</script>

<template>
  <div class="box fixed">
    <div class="fill" :style="`width: ${randomWidth}`"></div>
  </div>
  <div class="numbers">
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.numbers {
  width: 100%;
  margin-bottom: 1rem;
}

.box {
  background: rgba(0, 0, 0, 0.5);
  height: 2rem;
  position: relative;
  width: 100%;
  border: 1px solid var(--cci-black);
  border-radius: 5px;
  border-top: 0.75rem solid transparent;
  border-bottom: 0.75rem solid transparent;
}

.box.fixed {
  width: 200px;
  height: 3;
}
.box .fill {
  background: rgba(28, 142, 255, 1);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  animation: animateWidth 2s infinite;
}

@keyframes animateWidth {
  0% {
    width: 0;
  }
  100% {
    width: var(100);
  }
}
</style>
