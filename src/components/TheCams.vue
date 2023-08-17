<script setup lang="ts">
import { ref } from 'vue';
import VideoComponent from '@/components/ui/VideoComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

const isVideoVisible = ref(false);
const isButtonVisible = ref(true);

const onIsActive = (state: boolean) => {
  isVideoVisible.value = state;
  isButtonVisible.value = !state;
};

const onIsVideoShown = (state: boolean) => {
  isVideoVisible.value = state;
  isButtonVisible.value = !state;
};
</script>

<template>
  <div class="video-player">
    <ButtonComponent
      v-if="isButtonVisible"
      icon="cam1_64x64"
      class="cam-button"
      @is-active="onIsActive"
    />
    <VideoComponent v-if="isVideoVisible" class="video" @is-video-shown="onIsVideoShown" />
  </div>
</template>

<style scoped>
.video-player {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
}
</style>
