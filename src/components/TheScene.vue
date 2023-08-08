<script setup lang="ts">
import { computed } from 'vue';
import { vue3dLoader } from 'vue-3d-loader';

const windowHeight = computed(() => {
  return window.innerHeight;
});
</script>

<template>
  <vue3dLoader
    :height="windowHeight"
    :filePath="['models/car.glb']"
    :backgroundColor="0x000000"
  ></vue3dLoader>
</template>
