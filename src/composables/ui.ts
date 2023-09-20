import { ref } from 'vue';

const uiState = ref({
  sceneAssetsLoaded: false
});

export const useUI = () => {
  const setSceneAssetsLoaded = (loaded: boolean) => {
    uiState.value.sceneAssetsLoaded = loaded;
  };

  return {
    uiState,
    setSceneAssetsLoaded
  };
};
