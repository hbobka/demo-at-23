import { ref } from 'vue';

const isAuthenticated = ref(false);

export const useAuth = () => {
  const checkAuth = () => {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }
    return false;
  };

  const setAuth = (token: string) => {
    localStorage.setItem('token', token);
    isAuthenticated.value = true;
  };

  const unsetAuth = () => {
    localStorage.removeItem('token');
    isAuthenticated.value = false;
  };

  return {
    isAuthenticated,
    checkAuth,
    setAuth,
    unsetAuth
  };
};
