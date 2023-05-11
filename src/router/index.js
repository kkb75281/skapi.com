import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/Main/LandingPage.vue';
import Login from '../views/Main/Login.vue';
import Signup from '../views/Main/Signup.vue';
import ResendConfirmation from '../views/Main/ResendConfirmation.vue';
import EmailConfirmed from '../views/Main/EmailConfirmed.vue';
import DeleteConfirmed from '../views/Main/DeleteConfirmed.vue';
import ForgotPassword from '../views/Main/ForgotPassword.vue';
import Main from '../views/Main/Main.vue';
import Admin from '../views/Main/Admin.vue';
import Settings from '../views/Main/Settings.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'home',
          component: LandingPage
        },
        {
          path: 'admin',
          name: 'admin',
          component: Admin
        },
        {
          path: 'account-settings',
          name: 'settings',
          component: Settings
        },
        {
          path: 'signup',
          name: 'signup',
          component: Signup
        },
        {
          path: 'forgotpassword',
          name: 'forgotpassword',
          component: ForgotPassword
        },
        {
          path: 'confirmation',
          name: 'confirmation',
          component: ResendConfirmation
        },
        {
          path: 'success',
          name: 'success',
          component: EmailConfirmed
        },
        {
          path: 'deleted',
          name: 'deleted',
          component: DeleteConfirmed
        },
        {
          path: "/:catchAll(.*)",
          name: 'notFound',
          component: () => import('../views/Main/404.vue')
        }
      ]
    },
    {
      path: '/admin',
      children: [
        {
          path: ':service',
          component: () => import('../views/Service/Main.vue'),
          children: [
            {
              path: '',
              name: 'service',
              component: () => import('../views/Service/Service.vue')
            },
            {
              path: 'records',
              component: () => import('../views/Service/Records/Main.vue'),
              children: [
                {
                  path: '',
                  name: 'records',
                  component: ()=>import('../views/Service/Records/Tables.vue')
                },
                {
                  path: 'search',
                  name: 'recordSearch',
                  component: ()=>import('../views/Service/Records/SearchResult.vue')
                },
                {
                  path: 'mobile-search',
                  name: 'mobileSearchRecord',
                  component: ()=>import('../views/Service/Records/MobileSearch.vue')
                },
                {
                  path: 'mobile-view',
                  name: 'mobileRecordView',
                  component: ()=>import('../views/Service/Records/MobileViewRecord.vue')
                },
                {
                  path: 'list',
                  name: 'recordList',
                  component: ()=>import('../views/Service/Records/TableRecord.vue')
                }
              ]
            },
            {
              path: 'users',
              component: () => import('../views/Service/Users/Main.vue'),
              children: [
                {
                  path: '',
                  name: 'users',
                  component: ()=>import('../views/Service/Users/Users.vue')
                },
                {
                  path: 'user-search',
                  name: 'mobileSearchUser',
                  component: ()=>import('../views/Service/Users/MobileSearch.vue')
                },
                {
                  path: 'user/:user_id',
                  name: 'userView',
                  component: ()=>import('../views/Service/Users/MobileView.vue')
                },
              ]
            },
          ]
        }
      ]
    }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  }
});

export default router;
