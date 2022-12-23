import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import HomeView from '@/views/HomeView.vue'
import AccountView from '@/views/AccountView.vue'
import AccountLayout from '@/layout/AppLayout'

function isLoggedIn() {
  return localStorage.getItem('token')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/user',
    // name: 'account',
    component: AccountLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/user',
        name: 'account',
        component: AccountView
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth  && !isLoggedIn()) {
    next({ name: 'login' })
  } else if (('auth' === to.name) && isLoggedIn()) {
    next({ name: 'account' })
  } else {
    next();
  }
});

export default router
