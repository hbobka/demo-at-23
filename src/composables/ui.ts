import { ref } from 'vue';

const uiState = ref({
  sceneLoaded: false,
  videoLoaded: false,
  panelSliderLengthPercentage: 0,
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

  const count = () => {
    const duration = 27000;
    const start = 0;
    const end = 100;

    const range = end - start;
    let curr = start;
    const timeStart = Date.now();

    const loop = () => {
      let elaps = Date.now() - timeStart;
      if (elaps > duration) elaps = duration;
      const frac = elaps / duration;
      const step = frac * range;
      curr = start + step;
      uiState.value.panelSliderLengthPercentage = Math.trunc(curr);
      if (elaps < duration) {
        requestAnimationFrame(loop);
      } else {
        uiState.value.panelSliderLengthPercentage = 0;
        setTimeout(() => {
          count();
        }, 7500);
      }
    };

    requestAnimationFrame(loop);
  };

  return {
    uiState,
    setSceneLoaded,
    setVideoLoaded,
    setShowPanelLength,
    setShowPanelUtilization,
    setShowPanelPressure,
    setShowPanelHumidity,
    resetPanelVisibilities,
    count
  };
};
