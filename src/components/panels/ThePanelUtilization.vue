<script setup lang="ts">
import { computed, ref } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';
import ProgressComponent from '@/components/ui/ProgressComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

const startValUtilization1 = ref(50);
const onUtilization1Click = (plusOrMinus: 'plus' | 'minus') => {
  if (startValUtilization1.value === 0 && plusOrMinus === 'minus') return;
  if (startValUtilization1.value === 100 && plusOrMinus === 'plus') return;

  plusOrMinus === 'plus' ? (startValUtilization1.value += 5) : (startValUtilization1.value -= 5);
};
const headingUtilization1 = computed(() => {
  return `L ${startValUtilization1.value} %`;
});

const startValUtilization2 = ref(50);
const onUtilization2Click = (plusOrMinus: 'plus' | 'minus') => {
  if (startValUtilization2.value === 0 && plusOrMinus === 'minus') return;
  if (startValUtilization2.value === 100 && plusOrMinus === 'plus') return;

  plusOrMinus === 'plus' ? (startValUtilization2.value += 5) : (startValUtilization2.value -= 5);
};
const headingUtilization2 = computed(() => {
  return `R ${startValUtilization2.value} %`;
});
</script>

<template>
  <div class="panel-wrapper">
    <!-- pressure -->
    <PanelComponent :heading="headingUtilization1" icon="field_64x64">
      <div class="panel-wrapper-buttons">
        <button @click="onUtilization1Click('minus')">- 5%</button>
        <button @click="onUtilization1Click('plus')">+ 5%</button>
      </div>
      <ProgressComponent :percentage="startValUtilization1" />
    </PanelComponent>
    <!-- link -->
    <div class="panel-link-button">
      <ButtonComponent icon="link_64x64" icon-active-color="#000" />
    </div>
    <!-- distance -->
    <div>
      <PanelComponent :heading="headingUtilization2" icon="field_64x64">
        <div class="panel-wrapper-buttons">
          <button @click="onUtilization2Click('minus')">- 5%</button>
          <button @click="onUtilization2Click('plus')">+ 5%</button>
        </div>
        <ProgressComponent :percentage="startValUtilization2" />
      </PanelComponent>
    </div>
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
