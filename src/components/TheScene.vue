<script setup lang="ts">
import { computed, ref } from 'vue';
import { vue3dLoader } from 'vue-3d-loader';
import { useUI } from '@/composables/ui';

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
const cameraInitialPosition = ref({ x: -500, y: 1000, z: 1000 });
const initialPosition = ref({ x: 0, y: -100, z: 100 });

const isLoaded = ref(false);
const { setSceneAssetsLoaded } = useUI();

const onLoad = () => {
  if (!isLoaded.value) {
    isLoaded.value = true;
    setSceneAssetsLoaded(true);
  }
};
</script>

<template>
  <vue3dLoader
    :height="windowHeight"
    :filePath="['models/krone/NextGen_Animation_05.fbx']"
    :cameraPosition="cameraInitialPosition"
    :position="initialPosition"
    :backgroundColor="0x222222"
    :autoPlay="isLoaded"
    :horizontalCtrl="true"
    :verticalCtrl="false"
    @load="onLoad"
  ></vue3dLoader>
</template>
