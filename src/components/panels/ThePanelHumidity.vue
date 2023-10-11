<script setup lang="ts">
import { computed, ref } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';
import ProgressComponent from '@/components/ui/ProgressComponent.vue';

const startValHumidity = ref(50);
const onHumidityClick = (plusOrMinus: 'plus' | 'minus') => {
  plusOrMinus === 'plus' ? (startValHumidity.value += 5) : (startValHumidity.value -= 5);
};
const headingLength = computed(() => {
  return `${startValHumidity.value} %`;
});
</script>

<template>
  <div class="panel-wrapper">
    <!-- pressure -->
    <PanelComponent :heading="headingLength" icon="field_64x64">
      <div class="panel-wrapper-buttons">
        <button @click="onHumidityClick('minus')">- 5 %</button>
        <button @click="onHumidityClick('plus')">+ 5 %</button>
      </div>
      <ProgressComponent :percentage="startValHumidity" />
    </PanelComponent>
  </div>
</template>

<style scoped>
.panel-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 20rem;
  max-width: 40rem;
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
