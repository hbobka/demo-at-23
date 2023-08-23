<script setup lang="ts">
import { computed, ref } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';

const startValPressure = ref(50);
const onPressureClick = (plusOrMinus: 'plus' | 'minus') => {
  plusOrMinus === 'plus' ? (startValPressure.value += 5) : (startValPressure.value -= 5);
};
const headingPressure = computed(() => {
  return `${startValPressure.value} kg/ha`;
});

const startValDistance = ref(50);
const onDistanceClick = (plusOrMinus: 'plus' | 'minus') => {
  plusOrMinus === 'plus' ? (startValDistance.value += 5) : (startValDistance.value -= 5);
};
const headingDistance = computed(() => {
  return `${startValDistance.value} kg/ha`;
});
</script>

<template>
  <div class="panel-wrapper">
    <!-- pressure -->
    <PanelComponent :heading="headingPressure">
      <div class="panel-wrapper-buttons">
        <button @click="onPressureClick('minus')">- 5%</button>
        <button @click="onPressureClick('plus')">+ 5%</button>
      </div>
      <button @click="startValPressure = 50">Reset</button>
    </PanelComponent>
    <!-- distance -->
    <PanelComponent :heading="headingDistance">
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
  top: 6.5rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
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
