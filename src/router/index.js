<<<<<<< HEAD
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailInfo from '../views/DetailInfo.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailInfo,
  },
];
=======
import { createRouter, createWebHistory } from 'vue-router';
import baseRoute from '@/router/base';

const finalRoute = [].concat(baseRoute);
>>>>>>> 36ebcbd6ecd85b1dd7b9f66f1b050484d55aad6c

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: finalRoute,
});

export default router;
