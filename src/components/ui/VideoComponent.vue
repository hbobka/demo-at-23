<script setup lang="ts">
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

defineProps({
  video: {
    type: String,
    required: true
  }
});

const emit = defineEmits<{
  (event: 'isVideoShown', state: boolean): void;
  (event: 'drag', e: Event): void;
}>();

const onCloseButtonClick = () => {
  emit('isVideoShown', false);
};
</script>

<template>
  <div class="video-window" @mousedown.prevent="(e) => emit('drag', e)">
    <div class="video-window__content">
      <div class="close-button" @click="onCloseButtonClick">
        <button><i class="fa-xmark"></i></button>
      </div>
      <video width="480" height="270" autoplay loop muted preload="none">
        <source :src="`videos/${video}.mp4`" type="video/mp4" />
      </video>
    </div>
    <div class="video-window__action-buttons">
      <ButtonComponent icon="fa-pause" />
      <ButtonComponent icon="fa-camera" />
      <ButtonComponent icon="fa-compare" />
    </div>
  </div>
</template>

<style scoped>
.video-window {
  display: flex;
  background-color: rgb(61 65 75 / 0.3);
  backdrop-filter: blur(10px);
  padding: 1rem;
  width: fit-content;
  height: fit-content;
}

.video-window__content {
  position: relative;
  background: var(--cci-black);
}
.close-button {
  position: absolute;
  top: 0.25rem;
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

.video-window__action-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.5rem;
}
</style>
