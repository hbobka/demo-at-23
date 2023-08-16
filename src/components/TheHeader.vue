<script setup lang="ts">
import { computed } from 'vue';
import LogoComponent from '@/components/ui/LogoComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import ToolbarComponent from '@/components/ui/ToolbarComponent.vue';

const fieldName = computed(() => 'Hinter dem Waldrand, 24 ha');
const currentTime = computed(() => '14:31');
</script>

<template>
  <header>
    <div>
      <ButtonComponent icon="field_64x64" />
      <ButtonComponent icon="field_64x64" :text="fieldName" />
    </div>
    <LogoComponent class="logo" logo="logo_ccisobus" />
    <div>
      <ToolbarComponent
        :icons="['wifi_40x40', 'internet_40x40', 'agrirouter_40x40', 'rtk_40x40']"
        :text="currentTime"
      />
      <ButtonComponent icon="tractor_64x64" />
    </div>
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
  flex-wrap: wrap;
}

header div {
  display: flex;
  align-items: center;
}

.logo {
  position: absolute;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .logo {
    right: 1rem;
    top: 1rem;
    left: initial;
    transform: initial;
  }
}
</style>
