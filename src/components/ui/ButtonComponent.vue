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

const emit = defineEmits<{
  (event: 'isActive', state: boolean): void;
}>();

const isActive = ref(false);
const onMouseDown = () => {
  isActive.value = !isActive.value;
  emit('isActive', isActive.value);
};
</script>

<template>
  <!-- text -->
  <button v-if="text && !icon">
    {{ text }}
  </button>
  <!-- icon -->
  <button v-if="!text && icon" :class="[{ active: isActive }]" @mousedown="onMouseDown">
    <i :class="icon"></i>
  </button>
  <!-- icon + text -->
  <button v-if="text && icon" :class="[{ active: isActive }]" @mousedown="onMouseDown">
    <i :class="icon"></i>
    {{ text }}
  </button>
</template>

<style scoped>
button {
  background: var(--cci-black);
  color: var(--cci-white);
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 1.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  white-space: nowrap;
}

button:hover {
  cursor: pointer;
}

button:active {
  background: var(--cci-light-gray);
  color: var(--cci-dark-gray);
  cursor: pointer;
}

.active {
  background: var(--cci-light-gray);
  color: var(--cci-dark-gray);
}
</style>
