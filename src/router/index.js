import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Callback from '../components/Callback.vue';
import Profile from '@/components/Profile.vue';
import ProjectDetails from '../components/ProjectDetails.vue'; // Note: Renamed to PascalCase for convention
import UserDashboard from '@/components/UserDashboard.vue';
import ProjectOwner from '@/components/ProjectOwner.vue';
import Home from '@/components/Home.vue';
import { userManager } from '@/auth/oidc';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/profile',
    name: '/Profile',
    component: Profile
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/project',
    name: 'ProjectDetails',
    component: ProjectDetails
  },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: UserDashboard
  },
  {
    path: '/projectOwner',
    name: 'ProjectOwner',
    component: ProjectOwner,
    meta: { requiresAuth: true, ownerOnly: true }
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to check authentication
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = await userManager.getUser();
    if (!user || user.expired) {
      // Not logged in, redirect to login
      return next({ name: 'Login', query: { redirect: to.fullPath } });
    }

     // Owner/admin only protection
    if (to.meta.ownerOnly) {
      const groups = user.profile['cognito:groups'] || [];
      if (!groups.includes('owner') && !groups.includes('Admin')) {
        return next('/'); // Or redirect to a "not authorized" page
      }
    }
  }
  next();
});
export default router;