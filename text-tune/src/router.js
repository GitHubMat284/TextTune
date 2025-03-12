import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/Main.vue';
import About from './components/About.vue';
import Preferences from './components/Preferences.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  { path: '/preferences', component: Preferences }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
