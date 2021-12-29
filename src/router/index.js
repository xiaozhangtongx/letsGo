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
        component: () => import('../views/home2/Home.vue'),
      },
      // 攻略界面
      {
        path: '/strategy',
        name: 'Strategy',
        component: () => import('../views/strategy/Strategy.vue'),
      },
      // 行程页面
      {
        path: '/journey',
        name: 'Journey',
        redirect: '/journey/create',
        component: () => import('../views/journey/Journey.vue'),
        children: [
          // 行程创建
          {
            path: '/journey/create',
            name: 'Ceatjourney',
            component: () =>
              import('../views/journey/journey_create/Journey_create.vue'),
          },
          // 行程浏览
          {
            path: '/journey/look',
            name: 'Lookjourney',
            component: () =>
              import('../views/journey/journey_look/Journey_look.vue'),
          },
        ],
      },
      // 游记界面
      {
        path: '/travel_notes',
        name: 'Travel_notes',
        component: () => import('../views/note/Note.vue'),
      },
      // 个人中心页面
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my/My.vue'),
      },
      // 地图界面
      {
        path: '/map',
        name: 'Map',
        component: () => import('../map/Map.vue'),
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

// 取消重复点击警报
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}

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
