<script setup lang="ts">
defineProps({
  percentage: Number
});
</script>

<template>
  <div class="box fixed">
    <div class="fill" :style="`width: ${percentage}%`"></div>
  </div>
  <div class="numbers">
    <span>50</span>
    <span>&nbsp; 100</span>
    <span>&nbsp; 150</span>
    <span>200</span>
  </div>
</template>

<style scoped>
.numbers {
  display: flex;
  justify-content: space-between;
  height: 1rem;
  padding-left: 2.75rem ;
  width: 100%;
}

.box {
  background: rgba(0,0,0, 0.5);
  height: 2rem;
  position: relative;
  width: 100%;
  border: 1px solid var(--cci-black);
  border-radius: 5px;
  border-top: 0.75rem solid transparent;
  border-bottom: 0.75rem solid transparent;
}
.box:before {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 0.5%,
    rgba(255, 255, 255, 0) 0.5%,
    rgba(255, 255, 255, 0) 25.5%,
    rgba(255, 255, 255, 0.75) 25.5%,
    rgba(255, 255, 255, 0.75) 26%,
    rgba(255, 255, 255, 0) 26%,
    rgba(255, 255, 255, 0) 50.5%,
    rgba(255, 255, 255, 0.75) 50.5%,
    rgba(255, 255, 255, 0.75) 51%,
    rgba(255, 255, 255, 0) 51%,
    rgba(255, 255, 255, 0) 75.5%,
    rgba(255, 255, 255, 0.75) 75.5%,
    rgba(255, 255, 255, 0.75) 76%,
    rgba(255, 255, 255, 0) 76%
  );
  content: '';
  height: 90%;
  left: 0;
  position: absolute;
  top: 10%;
  width: 100%;
  z-index: 10;
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
}
</style>
