<script setup lang="ts">
const emit = defineEmits<{
  (event: 'isVideoShown', state: boolean): void;
}>();

const onCloseButtonClick = () => {
  emit('isVideoShown', false);
};
</script>

<template>
  <div class="video-window">
    <div class="close-button" @click="onCloseButtonClick">
      <button>x</button>
    </div>
    <video width="480" height="270" autoplay loop muted>
      <source src="videos/sample.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.video-window {
  position: relative;
  
}
.close-button {
  position: absolute;
  top: 0;
  right: 1rem;
}

.close-button button {
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
}

.close-button button:hover {
  cursor: pointer;
}

video {
  margin: 0.5rem;
}
</style>
