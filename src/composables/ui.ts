import { ref } from 'vue';

const uiState = ref({
  sceneLoaded: false,
  videoLoaded: false
});

export const useUI = () => {
  const setSceneLoaded = (loaded: boolean) => {
    uiState.value.sceneLoaded = loaded;
  };
  const setVideoLoaded = (loaded: boolean) => {
    uiState.value.videoLoaded = loaded;
  };

  return {
    uiState,
    setSceneLoaded,
    setVideoLoaded
  };
};
