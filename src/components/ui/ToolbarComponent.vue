<script setup lang="ts">
defineProps({
  icons: {
    type: Array<string>
  },
  text: {
    type: String
  }
});
</script>

<template>
  <div class="toolbar-wrapper">
    <button v-for="(icon, index) in icons" :key="index">
      <i :class="icon"></i>
    </button>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.toolbar-wrapper {
  background: var(--cci-black);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
}

button {
  background: transparent;
  border: 1px solid transparent;
  padding: 1rem;
  margin: 0 0.25rem;
}

p {
  color: var(--cci-white);
  font-size: 2rem;
}
</style>
