import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import login from '@/view/login/login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const loginRouter ={
    path: '/login',
    name: 'login',
    title:'登陆',
    meta: {requireAuth: false,hidden:true,showInMnueList:false},
    components: {
        loginview:login
    },
    children:[
    ]
}
export const otherRouter = {
    path: '/',
    name: '首页',
    title: '首页',
    component: HelloWorld,
    meta: {requireAuth: true,hidden:false,icon:"al-icon-vue-shouye"},
    children: [
    ]
};

export const paintRouter = {
    path: '/paint',
    name: 'paint',
    title: 'Paint',
    component: HelloWorld,
    meta: {requireAuth: true,hidden:false,icon:"el-icon-picture"},
    children: [
        {
            path: '/paint/album', 
            title: 'Album', 
            name: 'album', 
            meta: {requireAuth: true,hidden:false},
            component: resolve => { require(['@/view/paint/album.vue'], resolve); },
            children: []
        },
        {
            path: '/paint/editPicture', 
            title: 'EditPicture', 
            name: 'editPicture', 
            meta: {requireAuth: true,hidden:false},
            component: resolve => { require(['@/view/paint/editPicture.vue'], resolve); },
            children: []
        }
    ]
}
export const userRouter = {
    path: '/user',
    name: '个人中心',
    title: '个人中心',
    component: HelloWorld,
    meta: {requireAuth: true,hidden:false,icon:"al-icon-vue-wo"},
    children: [
        {
            path: '/user/info', 
            title: '个人信息', 
            name: '个人信息', 
            meta: {requireAuth: true,hidden:false},
            component: resolve => { require(['@/view/user/userInfo.vue'], resolve); },
            children: []
        }
    ]
};
export const settingRouter = {
    path: '/Setting',
    name: 'Setting',
    title: 'Setting',
    component: HelloWorld,
    meta: {requireAuth: true,hidden:false,icon:"el-icon-setting"},
    children: [
        {
            path: '/Set/Setting', 
            title: '系统设置', 
            name: '系统设置', 
            meta: {requireAuth: true,hidden:false},
            component: resolve => { require(['@/view/user/userInfo.vue'], resolve); },
            children: []
        }
    ]
};
export const signRouter = {
    path: '/remark',
    name: 'Remark',
    title: 'Remark',
    component: HelloWorld,
    meta: {requireAuth: true,hidden:false,icon:"al-icon-vue-xinxi"},
    children: [
    ]
};


export const routers = [
    loginRouter,
    otherRouter,
    paintRouter,
    userRouter,
    settingRouter,
    signRouter
];

const router = new Router({
  routes:routers
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
