import './assets/css/main.css';
import { createApp, watch } from 'vue';
import App from './App.vue';
import router from './router';
import { useUI } from '@/composables/ui';

const app = createApp(App);
app.use(router);
app.mount('#app');

const { uiState, count } = useUI();

watch(
  () => uiState.value.sceneLoaded,
  (loaded) => {
    if (loaded) {
      count();
    }
  }
);
