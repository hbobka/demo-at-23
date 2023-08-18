<script setup lang="ts">
import { ref } from 'vue';
import VideoComponent from '@/components/ui/VideoComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

const isVideo1Visible = ref(false);
const isCamButton1Visible = ref(true);
const onIs1Active = (state: boolean) => {
  isVideo1Visible.value = state;
  isCamButton1Visible.value = !state;
};
const onIsVideo1Shown = (state: boolean) => {
  isVideo1Visible.value = state;
  isCamButton1Visible.value = !state;
};

const isVideo2Visible = ref(false);
const isCamButton2Visible = ref(true);
const onIs2Active = (state: boolean) => {
  isVideo2Visible.value = state;
  isCamButton2Visible.value = !state;
};
const onIsVideo2Shown = (state: boolean) => {
  isVideo2Visible.value = state;
  isCamButton2Visible.value = !state;
};
</script>

<template>
  <div class="video-player-1">
    <ButtonComponent
      v-if="isCamButton1Visible"
      icon="cam1_64x64"
      @is-active="onIs1Active"
    />
    <VideoComponent v-if="isVideo1Visible" class="video" @is-video-shown="onIsVideo1Shown" />
  </div>
  <div class="video-player-2">
    <ButtonComponent
      v-if="isCamButton2Visible"
      icon="cam2_64x64"
      @is-active="onIs2Active"
    />
    <VideoComponent v-if="isVideo2Visible" class="video" @is-video-shown="onIsVideo2Shown" />
  </div>
</template>

<style scoped>
.video-player-1 {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
}
.video-player-2 {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
}
</style>
