import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  mode: 'history',  //去除地址路径后的#号
  routes: [
    {
      path: '/',
      name: 'Test',
      meta: { isLogin: false },     // 配置此条，进入页面前判断是否需要登陆 
      component: resolve => require(['@/views/Test'], resolve),
      children: [
        { path: 'bar', name: 'Bar', component: resolve => require(['@/views/Bar'], resolve), },
        { path: 'aaa', name: 'Aaa', component: resolve => require(['@/views/Aaa'], resolve), }
      ]
    },
  ]
});










// 导航守卫 使用 router.beforeEach钩子函数 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
  // TO DO....

  // if (to.path === '/') {
  //   next();
  // } else {
  //   //非跳转到登录界面时，判断本地存储userData是否为null或空，为空则跳回到登录界面，反之到相应的界面(此时有数据)。
  //   let userData = JSON.parse(sessionStorage.getItem('userData'));
  //   if (userData === null || userData === '') {
  //     next('/');
  //   } else {
  //     next();
  //   }
  // }
// });



export default router