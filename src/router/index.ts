import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthPage from '../views/AuthPage.vue';
import { useAuth } from '@/composables/auth';

const { checkAuth, isAuthenticated } = useAuth();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta: { requiresAuth: true }
    }
  ]
});


router.beforeEach((to, from, next) => {
  checkAuth();
  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated.value) {
      next({ name: 'auth' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router; 