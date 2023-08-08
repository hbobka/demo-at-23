<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

const sceneWrapper = ref(null);
onMounted(() => {
  if (sceneWrapper.value) {
    (sceneWrapper.value as HTMLElement).appendChild(renderer.domElement);
    animate();
  }
});

// create scene + camera + renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);

// create geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// add geometry to scene
scene.add(cube);

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
</script>

<template>
  <div ref="sceneWrapper"></div>
</template>
