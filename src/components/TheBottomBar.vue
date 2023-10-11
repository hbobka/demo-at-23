<script setup lang="ts">
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import { useUI } from '@/composables/ui';
import { ref } from 'vue';

const {
  uiState,
  setShowPanelPressure,
  setShowPanelLength,
  setShowPanelUtilization,
  setShowPanelHumidity
} = useUI();

type panelType = 'length' | 'pressure' | 'utilization' | 'humidity';

const selectedButton = ref('');
const onClick = (panel: panelType) => {
  switch (panel) {
    case 'pressure':
      if (!uiState.value.showPanelPressure) {
        setShowPanelPressure(true);
        selectedButton.value = 'pressure';
      } else {
        setShowPanelPressure(false);
        selectedButton.value = '';
      }
      break;
    case 'length':
      if (!uiState.value.showPanelLength) {
        setShowPanelLength(true);
        selectedButton.value = 'length';
      } else {
        setShowPanelLength(false);
        selectedButton.value = '';
      }
      break;
    case 'utilization':
      if (!uiState.value.showPanelUtilization) {
        setShowPanelUtilization(true);
        selectedButton.value = 'utilization';
      } else {
        setShowPanelUtilization(false);
        selectedButton.value = '';
      }
      break;
    case 'humidity':
      if (!uiState.value.showPanelHumidity) {
        selectedButton.value = 'humidity';
        setShowPanelHumidity(true);
      } else {
        setShowPanelHumidity(false);
        selectedButton.value = '';
      }
      break;
    default:
      break;
  }
};

const activeColor = '#000';
const buttons: { name: panelType; icon: string }[] = [
  { name: 'length', icon: 'fa-ruler-horizontal' },
  { name: 'utilization', icon: 'fa-chart-simple' },
  { name: 'pressure', icon: 'fa-gauge' },
  { name: 'humidity', icon: 'fa-droplet' }
];
</script>

<template>
  <div class="toolbar-wrapper">
    <span v-for="button in buttons" :key="button.name" @click="onClick(button.name)">
      <ButtonComponent
        :icon="button.icon"
        :icon-active-color="activeColor"
        :isDisabled="selectedButton != button.name && selectedButton.length > 0"
      />
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
