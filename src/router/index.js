import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Callback from '../components/Callback.vue';
import Profile from '@/components/Profile.vue';
import ProjectDetails from '../components/ProjectDetails.vue'; // Note: Renamed to PascalCase for convention
import UserDashboard from '@/components/UserDashboard.vue';
import ProjectOwner from '@/components/ProjectOwner.vue';
import Home from '@/components/Home.vue';
import AllProjects from '@/components/AllProjects.vue';
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
    path: '/project/object/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    meta: { requiresAuth: true }
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
    meta: { requiresAuth: true }
  },
  {
    path: '/allProjects',
    name: 'AllProjects',
    component: AllProjects,
  }

  
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
  }
  next();
});
export default router;
