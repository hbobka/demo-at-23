<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  logo: {
    type: String
  }
});

const style = computed(() => {
  return `
    background: transparent url('src/assets/images/${props.logo}.svg') center center / 10rem no-repeat;
    width: 10rem;
    height: 4rem;`;
});
</script>

<template>
  <i :style="style"></i>
</template>
