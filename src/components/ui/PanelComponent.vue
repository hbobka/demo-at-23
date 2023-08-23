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
  background: var(--cci-black);
  border-radius: 5px;
  margin: 0.5rem;
  width: fit-content;
}

.panel-header {
  padding: 1rem;
  color: var(--cci-white);
  width: 100%;
}

.panel-header:hover {
  cursor: pointer;
}

.panel-content {
  display: flex;
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
