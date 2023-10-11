<script setup lang="ts">
import { computed, ref } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';

const startValPressure = ref(50);
const onPressureClick = (plusOrMinus: 'plus' | 'minus') => {
  plusOrMinus === 'plus' ? (startValPressure.value += 5) : (startValPressure.value -= 5);
};
const headingPressure = computed(() => {
  return `${startValPressure.value} bar`;
});
</script>

<template>
  <div class="panel-wrapper">
    <!-- pressure -->
    <PanelComponent :heading="headingPressure" icon="field_64x64">
      <div class="panel-wrapper-buttons">
        <button @click="onPressureClick('minus')">- 5 bar</button>
        <button @click="onPressureClick('plus')">+ 5 bar</button>
      </div>
      <button @click="startValPressure = 50">Reset</button>
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
