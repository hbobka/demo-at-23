<script setup lang="ts">
import { computed, ref, watch } from 'vue';
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
const cameraInitialPosition = ref({ x: -500, y: 2000, z: 1000 });
const initialPosition = ref({ x: 10, y: 500, z: -500 });

const { setSceneLoaded } = useUI();
const process = ref(0);
const shouldPlay = ref(false);
const onProcess = (event: any) => {
  process.value = Math.floor((event.loaded / event.total) * 100);

  if (process.value === 100) {
    shouldPlay.value = true;
    setSceneLoaded(true);
  }
};
</script>

<template>
  <vue3dLoader
    :height="windowHeight"
    :filePath="['models/krone/NextGen_Animation_06_dunkel.fbx']"
    :cameraPosition="cameraInitialPosition"
    :position="initialPosition"
    :backgroundColor="0x222222"
    :autoPlay="shouldPlay"
    :horizontalCtrl="true"
    :verticalCtrl="false"
    :lights="lights"
    @process="onProcess"
  ></vue3dLoader>
</template>
