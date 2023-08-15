<script setup lang="ts">
import LogoComponent from '@/components/ui/LogoComponent.vue';
</script>

<template>
  <header>
    <LogoComponent logo="logo_ccisobus" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding: 1rem;
}
</style>
