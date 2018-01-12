import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import login from '@/view/login/login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      meta: {
          hidden: true,
          requireAuth: false
      },
      components: {
        loginview:login
      } 
    }, {
      path: '/',
      name: 'HelloWorld',
      meta: {
        hidden: false,
        requireAuth: true
      },
      component: HelloWorld
  }]
})

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
      // 判断是否是登录状态
      if (Cookies.get('isLogin') == '1') {
          next()
      } else {
          // 否则跳回登录页
          next('/login')
      }
  } else {
      // 如果不需要登录权限，就直接resolve这个钩子
      next()
  }
})

export default router
