<script setup lang="ts">
import ThePanelPressure from '@/components/panels/ThePanelPressure.vue';
import ThePanelLength from '@/components/panels/ThePanelLength.vue';
import ThePanelUtilization from '@/components/panels/ThePanelUtilization.vue';
import ThePanelHumidity from '@/components/panels/ThePanelHumidity.vue';
import { useUI } from '@/composables/ui';

const { uiState } = useUI();
</script>

<template>
  <ThePanelLength v-if="uiState.showPanelLength" />
  <ThePanelUtilization v-if="uiState.showPanelUtilization" />
  <ThePanelPressure v-if="uiState.showPanelPressure" />
  <ThePanelHumidity v-if="uiState.showPanelHumidity" />
</template>
