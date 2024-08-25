import { createRouter, createWebHistory } from 'vue-router'
import {store} from '@/store/index'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect: '/login',
    },
    {
      path: '/',
      component: () => import('@/layouts/client/ClientLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginPage')
        },
      ],
    },
    { path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundPage.vue')
     },
  ]
})

router.beforeEach((to,from,next)=>{
  //console.log(to)
  //console.log(from)
  if(to.meta.auth && !store.getters.isLogin){
    console.log('인증이 필요합니다.')
    next('/login')
    return // next 를 한 후 중복 실행 방지
  }
  next();
})

export default router
