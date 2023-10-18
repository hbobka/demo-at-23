<script setup lang="ts">
import { computed, ref } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';
import ProgressComponentAnimated from '@/components/ui/ProgressComponentAnimated.vue';

const startValUtilization1 = ref(50);
const headingUtilization1 = computed(() => {
  return `${startValUtilization1.value} %`;
});
</script>

<template>
  <div class="panel-wrapper">
    <!-- pressure -->
    <PanelComponent :heading="headingUtilization1" icon="field_64x64">
      <ProgressComponentAnimated :percentage="40" text="Schwellwert" />
      <ProgressComponentAnimated :percentage="60" text="Auslastung Raffer" />
      <ProgressComponentAnimated :percentage="20" text="Tatsächliche Auslastung" />
    </PanelComponent>
  </div>
</template>

<style scoped>
.panel-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.panel-wrapper-buttons {
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
}

.panel-wrapper-buttons button:first-child {
  margin-right: 0.5rem;
}

.panel-wrapper-buttons button:last-child {
  margin-left: 0.5rem;
}

button {
  color: var(--cci-white);
  border: none;
  background: var(--cci-black);
  padding: 1rem;
  width: 100%;
  white-space: nowrap;
  border-radius: 5px;
}

button:hover {
  color: var(--cci-black);
  background: var(--cci-white);
  cursor: pointer;
}
</style>
