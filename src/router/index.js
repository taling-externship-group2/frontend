import { createRouter, createWebHistory } from 'vue-router';
import baseRoute from '@/router/base';

const finalRoute = [].concat(baseRoute);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: finalRoute,
});

export default router;
