<script setup lang="ts">
import { computed } from 'vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import ToolbarComponent from '@/components/ui/ToolbarComponent.vue';

const fieldName = computed(() => 'An der Bahn, 24 ha');
const currentTime = computed(() => '14:31');
</script>

<template>
  <header>
    <div>
      <ButtonComponent icon="field_64x64" :text="fieldName" />
    </div>
    <div>
      <i class="logo-ccisobus"></i>
    </div>
    <div>
      <ToolbarComponent
        :icons="['wifi_40x40', 'internet_40x40', 'agrirouter_40x40', 'rtk_40x40']"
        :text="currentTime"
      />
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

.logo-ccisobus {
  position: absolute;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 1400px) {
  .logo-ccisobus {
    left: initial;
    transform: initial;
    right: 2rem;
    top: 4rem;
  }
}

@media (max-width: 1024px) {
  .logo-ccisobus {
    left: initial;
    transform: initial;
    top: initial;
    right: 2rem;
  }
}
</style>
