<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  heading: {
    type: String,
    default: 'Panel'
  }
});

const isPanelConentVisible = ref(false);
const onPanelHeaderClick = () => {
  isPanelConentVisible.value = !isPanelConentVisible.value;
};
</script>

<template>
  <div class="panel">
    <div class="panel-header" @click="onPanelHeaderClick">
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
}

.panel-header {
  padding: 0.5rem 1rem;
  color: var(--cci-white);
}

.panel-header:hover {
  cursor: pointer;
}

.panel-content {
  background: green;
  width: 100%;
}
</style>
