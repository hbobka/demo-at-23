<script setup lang="ts">
const emit = defineEmits<{
  (event: 'isVideoShown', state: boolean): void;
}>();

const onCloseButtonClick = () => {
  emit('isVideoShown', false);
};
</script>

<template>
  <div @click="onCloseButtonClick">
    <button>x</button>
  </div>
  <video width="480" height="270" autoplay loop muted>
    <source src="videos/sample.mp4" type="video/mp4" />
  </video>
</template>

<style scoped>
div {
  position: absolute;
  top: 0;
  right: 1rem;
}

button {
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
}

button:hover {
  cursor: pointer;
}

video {
  margin: 0.5rem;
}
</style>
