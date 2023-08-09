<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  text: {
    type: String
  },
  icon: {
    type: String
  }
});

const isActive = ref(false);
</script>

<template>
  <!-- text -->
  <button v-if="text && !icon">
    {{ text }}
  </button>
  <!-- icon -->
  <button v-if="!text && icon" @mousedown="isActive = true" @mouseup="isActive = false">
    <i :class="[{ active: isActive }, icon]"></i>
  </button>
  
  <!-- icon + text -->
  <button v-if="text && icon" @mousedown="isActive = true" @mouseup="isActive = false">
    <i :class="[{ active: isActive }, icon]"></i>
    {{ text }}
  </button>
</template>

<style scoped>
button {
  background: var(--cci-dark-gray);
  border: 1px solid transparent;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: var(--cci-white);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

button:hover {
  cursor: pointer;
}

button:active {
  background: var(--cci-white);
  color: var(--cci-dark-gray);
  cursor: pointer;
}

.active {
  background: var(--cci-dark-gray);
}
</style>
