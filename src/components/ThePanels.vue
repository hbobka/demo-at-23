<script setup lang="ts">
import { computed } from 'vue';
import PanelComponent from '@/components/ui/PanelComponent.vue';

const headingPressure = computed(() => 'Pressure');
const headingDistance = computed(() => 'Distance');
</script>

<template>
  <div class="panel-wrapper">
    <PanelComponent :heading="headingPressure">
      <p>hello 1</p>
    </PanelComponent>
    <PanelComponent :heading="headingDistance">
      <p>hello 2</p>
    </PanelComponent>
  </div>
</template>

<style scoped>
.panel-wrapper {
  position: absolute;
  top: 6rem;
  right: 1rem;
}
</style>
