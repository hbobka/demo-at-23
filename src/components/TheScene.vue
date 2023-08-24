<script setup lang="ts">
import { computed, ref } from 'vue';
import { vue3dLoader } from 'vue-3d-loader';

const windowHeight = computed(() => {
  return window.innerHeight;
});

const kroneInitialPosition = ref({ x: 0, y: 1, z: 0 });
const kroneInitialRotation = ref({ x: 0, y: 4.6, z: 0 });
const tractorInitialPosition = ref({ x: -6, y: 1, z: -0.7 });
const tractorInitialRotation = ref({ x: -1.6, y: 0, z: 14 });
const cameraInitialPosition = ref({ x: 5, y: 5, z: 10 });

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
</script>

<template>
  <vue3dLoader
    :height="windowHeight"
    :filePath="['models/krone/bigPack1290HDPVC-CCI_tris.fbx', 'models/tractor/tractor.obj']"
    :mtlPath="[null, 'models/tractor/tractor.mtl']"
    :position="[kroneInitialPosition, tractorInitialPosition]"
    :rotation="[kroneInitialRotation, tractorInitialRotation]"
    :cameraPosition="cameraInitialPosition"
    :backgroundColor="0x222222"
    :lights="lights"
  ></vue3dLoader>
</template>
