<script setup lang="ts">
import { computed } from 'vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import LogoComponent from '@/components/ui/LogoComponent.vue';

const fieldName = computed(() => 'Am Waldrand');
</script>

<template>
  <header>
    <ButtonComponent text="ISB" />
    <LogoComponent logo="logo-krone" />
    <ButtonComponent icon="fa-chart-area" :text="fieldName" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 1rem;
}
</style>
