import { ref } from 'vue';

const uiState = ref({
  sceneLoaded: false,
  videoLoaded: false,
  showPanelLength: false,
  showPanelUtilization: false,
  showPanelPressure: false,
  showPanelHumidity: false
});

export const useUI = () => {
  const setSceneLoaded = (loaded: boolean) => {
    uiState.value.sceneLoaded = loaded;
  };
  const setVideoLoaded = (loaded: boolean) => {
    uiState.value.videoLoaded = loaded;
  };
  const setShowPanelLength = (show: boolean) => {
    uiState.value.showPanelLength = show;
  };
  const setShowPanelUtilization = (show: boolean) => {
    uiState.value.showPanelUtilization = show;
  };
  const setShowPanelPressure = (show: boolean) => {
    uiState.value.showPanelPressure = show;
  };
  const setShowPanelHumidity = (show: boolean) => {
    uiState.value.showPanelHumidity = show;
  };
  const resetPanelVisibilities = () => {
    uiState.value.showPanelLength = false;
    uiState.value.showPanelHumidity = false;
    uiState.value.showPanelPressure = false;
    uiState.value.showPanelUtilization = false;
  };

  return {
    uiState,
    setSceneLoaded,
    setVideoLoaded,
    setShowPanelLength,
    setShowPanelUtilization,
    setShowPanelPressure,
    setShowPanelHumidity,
    resetPanelVisibilities
  };
};
