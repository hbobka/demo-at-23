<script setup lang="ts">
import { ref } from 'vue';
import VideoComponent from '@/components/ui/VideoComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

const videoPlayer1 = ref();
const videoPlayer2 = ref();
const isVideo1Visible = ref(false);
const isCamButton1Visible = ref(true);
const onIs1Active = (state: boolean) => {
  isVideo1Visible.value = state;
  isCamButton1Visible.value = !state;
};
const onIsVideo1Shown = (state: boolean) => {
  isVideo1Visible.value = state;
  isCamButton1Visible.value = !state;

  if (!state) {
    videoPlayer1.value.style.top = 'initial';
    videoPlayer1.value.style.left = '1rem';
  }
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

  if (!state) {
    videoPlayer2.value.style.top = 'initial';
    videoPlayer2.value.style.left = 'initial';
    videoPlayer2.value.style.right = '1rem';
  }
};

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;
let pos4 = 0;
const startDrag = (e: any) => {
  if (!e) return;

  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
};

const elementDrag = (e: any) => {
  if (!e) return;

  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  const target = e.target.closest('.video-player');
  target.style.top = target.offsetTop - pos2 + 'px';
  target.style.left = target.offsetLeft - pos1 + 'px';
};

const closeDragElement = () => {
  document.onmouseup = null;
  document.onmousemove = null;
};
</script>

<template>
  <div class="video-player video-player-1" ref="videoPlayer1">
    <ButtonComponent v-if="isCamButton1Visible" icon="cam1_64x64" @is-active="onIs1Active" />
    <VideoComponent
      v-if="isVideo1Visible"
      class="video"
      video="rear_cam"
      @is-video-shown="onIsVideo1Shown"
      @drag="startDrag"
    />
  </div>
  <div class="video-player video-player-2" ref="videoPlayer2">
    <ButtonComponent v-if="isCamButton2Visible" icon="cam2_64x64" @is-active="onIs2Active" />
    <VideoComponent
      v-if="isVideo2Visible"
      class="video"
      video="front_cam"
      @is-video-shown="onIsVideo2Shown"
      @drag="startDrag"
    />
  </div>
</template>

<style scoped>
.video-player-1 {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 9999;
  height: fit-content;
}

.video-player-2 {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
  height: fit-content;
}
</style>
