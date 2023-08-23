<script setup lang="ts">
import { computed } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';

const headingPressure = computed(() => 'Pressure');
const contentPressure = computed(() => '50 bar');
const headingDistance = computed(() => 'Distance');
</script>

<template>
  <div class="panel-wrapper">
    <!-- pressure -->
    <PanelComponent :heading="headingPressure">
      <p>{{ contentPressure }}</p>
    </PanelComponent>
    <!-- distance -->
    <PanelComponent :heading="headingDistance">
      <p>hello 2</p>
      <div>
        <button>1</button>
        <button>2</button>
      </div>
    </PanelComponent>
  </div>
</template>

<style scoped>
.panel-wrapper {
  position: absolute;
  top: 6rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: end;
}

button {
  color: red;
}
</style>
