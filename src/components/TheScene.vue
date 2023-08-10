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
    :filePath="['models/harvester.obj']"
    :backgroundColor="0x222222"
    :rotation="{ x: -1, y: 0, z: 0.2 }"
    :position="{ x: 0, y: -200, z: -500 }"
  ></vue3dLoader>
</template>
