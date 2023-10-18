<script setup lang="ts">
import { computed, ref } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';
import ProgressComponent from '@/components/ui/ProgressComponent.vue';

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
      <div class="progressbars">
        <div>
          <ProgressComponent :percentage="startValPressure" />
        </div>
        <div>
          <ProgressComponent :percentage="startValPressure" />
        </div>
      </div>
      <div class="panel-wrapper-buttons">
        <button @click="onPressureClick('minus')">- 5 bar</button>
        <button @click="onPressureClick('plus')">+ 5 bar</button>
      </div>
    </PanelComponent>
  </div>
</template>

<style scoped>
.progressbars > div {
  margin-bottom: 1rem;
}
.panel-wrapper {
  position: absolute;
  left: 1rem;
  top: 7rem;
  display: flex;
}

.panel-wrapper-buttons {
  display: flex;
  margin: 1rem 0;
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
