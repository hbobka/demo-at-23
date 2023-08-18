<script setup lang="ts">
import { computed, ref } from 'vue';
import ToolbarComponent from '@/components/ui/ToolbarComponent.vue';

const icons = computed(() => {
  const number = ref(Math.round(window.innerWidth / 2 / 75) - 1);
  return Array(number.value).fill('rectangle_24x32');
});
</script>

<template>
  <div class="toolbar-wrapper1">
    <ToolbarComponent :icons="icons" />
  </div>
  <div class="toolbar-wrapper2">
    <ToolbarComponent :icons="icons" />
  </div>
</template>

<style scoped>
.toolbar-wrapper1 {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
.toolbar-wrapper2 {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
