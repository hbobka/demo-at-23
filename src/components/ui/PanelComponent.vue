<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  heading: {
    type: String,
    default: 'Panel'
  }
});

const isPanelConentVisible = ref(false);
const isActive = ref(false);
const onPanelHeaderClick = () => {
  isPanelConentVisible.value = !isPanelConentVisible.value;
  isActive.value = !isActive.value;
};
</script>

<template>
  <div class="panel">
    <div class="panel-header" :class="{ active: isActive }" @click="onPanelHeaderClick">
      {{ heading }}
    </div>
    <div v-if="isPanelConentVisible" class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.panel {
  margin: 0.5rem;
  width: fit-content;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.panel-header {
  border-radius: 5px;
  padding: 1rem;
  background: var(--cci-black);
  color: var(--cci-white);
  width: 100%;
}

.panel-header:hover {
  cursor: pointer;
}

.panel-content {
  display: flex;
  border-radius: 5px;
  background-color: rgb(61 65 75 / 0.3);
  backdrop-filter: blur(10px);
  flex-direction: column;
  align-items: center;
  color: var(--cci-white);
  padding: 1rem;
  width: 100%;
}

.active {
  background: var(--cci-light-gray);
  color: var(--cci-black);
}
</style>
