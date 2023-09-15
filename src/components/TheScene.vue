<script setup lang="ts">
import { computed, ref } from 'vue';
import { vue3dLoader } from 'vue-3d-loader';

const windowHeight = computed(() => {
  return window.innerHeight;
});

const lights = [
  {
    type: 'AmbientLight',
    color: '#f2f2f2',
    intensity: 0.4
  },
  {
    type: 'DirectionalLight',
    position: { x: 100, y: 10, z: 100 },
    color: '#f2f2f2',
    intensity: 0.8
  },
  {
    type: 'PointLight',
    color: '#f2f2f2',
    position: { x: 200, y: -200, z: 100 },
    intensity: 0.8
  },
  {
    type: 'HemisphereLight',
    skyColor: '#000',
    groundColor: '#f2f2f2',
    position: { x: 200, y: -200, z: 100 },
    intensity: 0.8
  }
];
const cameraInitialPosition = ref({ x: -1000, y: 1000, z: 2000 });
const initialPosition = ref({ x: 500, y: 0, z: -1000 });
</script>

<template>
  <vue3dLoader
    :height="windowHeight"
    :filePath="['models/krone/NextGen_Animation_05.fbx']"
    :cameraPosition="cameraInitialPosition"
    :position="initialPosition"
    :backgroundColor="0x222222"
    :autoPlay="true"
    :horizontalCtrl="true"
    :verticalCtrl="false"
  ></vue3dLoader>
</template>
