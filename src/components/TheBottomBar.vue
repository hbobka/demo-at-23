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

const onClick = (panel: string) => {
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
</script>

<template>
  <div class="toolbar-wrapper">
    <span @click="onClick('length')">
      <ButtonComponent icon="field_64x64" />
    </span>
    <span @click="onClick('utilization')">
      <ButtonComponent icon="field_64x64" />
    </span>
    <span @click="onClick('pressure')">
      <ButtonComponent icon="field_64x64" />
    </span>
    <span @click="onClick('humidity')">
      <ButtonComponent icon="field_64x64" />
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
