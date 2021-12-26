import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

/*--------------------------------------------------------路由部分--------------------------------------------------------*/
const routes = [
  // 路由重定向
  {
    path: '/',
    redirect: '/home',
  },
  // 用户登录路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
  },
  // 用户注册路由
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue'),
  },
  // 系统功能模块
  {
    path: '/',
    name: 'Main',
    component: () => import('../layout/BasicLayout.vue'),
    children: [
      // 系统首页
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/Home.vue'),
      },
      // 行程页面
      {
        path: '/journey',
        name: 'Journey',
        redirect: '/journey/create',
        component: () => import('../views/journey/Journey.vue'),
        children: [
          {
            path: '/journey/create',
            name: 'Ceatjourney',
            component: () =>
              import('../views/journey_create/Journey_create.vue'),
          },
        ],
      },
    ],
  },
  //401权限不足
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hideInMenu: true,
  },
  // 404页面为找到
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hideInMenu: true,
  },
  { path: '*', redirect: '/404', hidden: true },
]

const router = new VueRouter({
  routes,
})

/*--------------------------------------------------------路由守卫--------------------------------------------------------*/
router.beforeEach((to, from, next) => {
  if (to.path != from.path) {
    NProgress.start()
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
