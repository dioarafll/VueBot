// src/routes.ts
import { createRouter, createWebHistory } from 'vue-router';

// Import views
import Home from './views/Home.vue';
//import NotFound from '@/views/NotFound.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import ForgotPassword from './views/ForgotPassword.vue';
import VerifyPhone from './views/VerifyPhone.vue';
import EnterOTP from './views/EnterOTP.vue';
import M2FA from './views/M2FA.vue';
import Plans from './views/Plans.vue';
import Chat from './views/Chat.vue';

import Test from './views/Test.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tests',
    name: 'Test',
    component: Test,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    //   meta: { hideNavbar: true, hideFooter: true },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    //   meta: { hideNavbar: true, hideFooter: true },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    //   meta: { hideNavbar: true, hideFooter: true },
  },
  {
    path: '/verify-phone',
    name: 'VerifyPhone',
    component: VerifyPhone,
    //   meta: { hideNavbar: true, hideFooter: true },
  },
  {
    path: '/verify',
    name: 'EnterOTP',
    component: EnterOTP,
    //   meta: { hideNavbar: true, hideFooter: true },
  },
  {
    path: '/m2fa',
    name: 'M2FA',
    component: M2FA,
    //   meta: { hideNavbar: true, hideFooter: true },
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans,
    //   meta: { hideNavbar: true, hideFooter: true },
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    //   meta: { hideNavbar: true, hideFooter: true },
  },
  /**
  {
    path: '/:pathMatch(.*)*', // Catch-all for undefined routes
    name: 'NotFound',
    component: NotFound,
  },
  **/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
