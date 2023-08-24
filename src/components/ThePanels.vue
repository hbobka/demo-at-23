<script setup lang="ts">
import { computed, ref } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

const startValPressure = ref(50);
const onPressureClick = (plusOrMinus: 'plus' | 'minus') => {
  plusOrMinus === 'plus' ? (startValPressure.value += 5) : (startValPressure.value -= 5);
};
const headingPressure = computed(() => {
  return `${startValPressure.value} `;
});

const startValDistance = ref(50);
const onDistanceClick = (plusOrMinus: 'plus' | 'minus') => {
  plusOrMinus === 'plus' ? (startValDistance.value += 5) : (startValDistance.value -= 5);
};
const headingDistance = computed(() => {
  return `${startValDistance.value} `;
});
</script>

<template>
  <div class="panel-wrapper">
    <!-- pressure -->
    <PanelComponent :heading="headingPressure" icon="field_64x64">
      <div class="panel-wrapper-buttons">
        <button @click="onPressureClick('minus')">- 5%</button>
        <button @click="onPressureClick('plus')">+ 5%</button>
      </div>
      <button @click="startValPressure = 50">Reset</button>
    </PanelComponent>
    <!-- link -->
    <ButtonComponent icon="link_64x64" icon-active-color="#000"/>
    <!-- distance -->
    <PanelComponent :heading="headingDistance" icon="field_64x64">
      <div class="panel-wrapper-buttons">
        <button @click="onDistanceClick('minus')">- 5%</button>
        <button @click="onDistanceClick('plus')">+ 5%</button>
      </div>
      <button @click="startValDistance = 50">Reset</button>
    </PanelComponent>
  </div>
</template>

<style scoped>
.panel-wrapper {
  position: absolute;
  bottom: 1rem;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  align-items: end;
}

.panel-wrapper-buttons {
  display: flex;
  margin-bottom: 1rem;
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
