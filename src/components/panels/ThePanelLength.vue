<script setup lang="ts">
import { computed, ref } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';
import ProgressComponent from '@/components/ui/ProgressComponent.vue';

const startValLength = ref(50);
const onPressureClick = (plusOrMinus: 'plus' | 'minus') => {
  if (startValLength.value === 0 && plusOrMinus === 'minus') return;
  if (startValLength.value === 100 && plusOrMinus === 'plus') return;

  plusOrMinus === 'plus' ? (startValLength.value += 5) : (startValLength.value -= 5);
};
const headingLength = computed(() => {
  return `${startValLength.value} cm`;
});
</script>

<template>
  <div class="panel-wrapper">
    <!-- pressure -->
    <PanelComponent :heading="headingLength" icon="field_64x64">
      <div class="panel-wrapper-buttons">
        <button @click="onPressureClick('minus')">- 5 cm</button>
        <button @click="onPressureClick('plus')">+ 5 cm</button>
      </div>
      <ProgressComponent :percentage="startValLength" />
    </PanelComponent>
  </div>
</template>

<style scoped>
.panel-wrapper {
  position: absolute;
  right: 1rem;
  top: 22rem;
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
