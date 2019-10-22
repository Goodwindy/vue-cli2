// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import ElementUI from 'element-ui'                      // element-ui组件
import 'element-ui/lib/theme-chalk/index.css'           // 组件样式         
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // 中文简体语言包
import axios from "./axios/axios.js";                   // axios请求
import Qs from 'qs'        
import config from "@/config/config.js";                // 多环境后台地址配置
import store from "./store/store.js";                   // 状态管理
import VueCookies from 'vue-cookies'                    // cookie存储
import md5 from 'js-md5';                               // md5加密


// 引入echarts
// import echarts from 'echarts'
 
// Vue.prototype.$echarts = echarts 


Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueCookies);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;              // 异步请求
Vue.prototype.$server = config.server;    // 服务器ip地址
Vue.prototype.$store = store;
Vue.prototype.$md5 = md5;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
