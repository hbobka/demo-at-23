<script setup lang="ts">
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import { useUI } from '@/composables/ui';

const {
  uiState,
  setShowPanelPressure,
  setShowPanelLength,
  setShowPanelUtilization,
  setShowPanelHumidity
} = useUI();

type panelType = 'length' | 'pressure' | 'utilization' | 'humidity';

const onClick = (panel: panelType) => {
  switch (panel) {
    case 'pressure':
      if (!uiState.value.showPanelPressure) {
        setShowPanelPressure(true);
      } else {
        setShowPanelPressure(false);
      }
      break;
    case 'length':
      if (!uiState.value.showPanelLength) {
        setShowPanelLength(true);
      } else {
        setShowPanelLength(false);
      }
      break;
    case 'utilization':
      if (!uiState.value.showPanelUtilization) {
        setShowPanelUtilization(true);
      } else {
        setShowPanelUtilization(false);
      }
      break;
    case 'humidity':
      if (!uiState.value.showPanelHumidity) {
        setShowPanelHumidity(true);
      } else {
        setShowPanelHumidity(false);
      }
      break;
    default:
      break;
  }
};

const activeColor = '#000';
const buttons: { name: panelType; icon: string }[] = [
  { name: 'length', icon: 'fa-ruler-horizontal' },
  // { name: 'utilization', icon: 'fa-chart-simple' },
  { name: 'pressure', icon: 'fa-gauge' },
  { name: 'humidity', icon: 'fa-droplet' }
];
</script>

<template>
  <div class="toolbar-wrapper">
    <span v-for="button in buttons" :key="button.name" @click="onClick(button.name)">
      <ButtonComponent :icon="button.icon" :icon-active-color="activeColor" />
    </span>
  </div>
</template>

<style scoped>
.toolbar-wrapper {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  transform: translateX(-50%);
  left: 50%;
}
</style>
