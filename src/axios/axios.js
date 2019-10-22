import Vue from 'vue';
import Axios from 'axios';
import router from '../router'
import qs from 'querystring';

import config from '@/config/config.js';                    // 多环境下地址配置
import { Message } from 'element-ui';                       // Element-ui的message消息提示组件                        
import store from '../store/store.js';                      // 状态管理
// import Language from '../config/Language/Language.js';   // 多语言设置文件

// 封装axios
export default params => {
    params.method = params.type || 'post';
    params.data = params.data || {};

    if (params.type == 'get') params.params = params.data;
    
    return new Promise((resolve,reject) => {

        // 创建axios实例，把基本的配置放进去
        const instance = Axios.create({
            timeout: 10 * 100000,       // 请求时间
            withCredentials: true,
            baseURL: config.server,     // 定义请求根目录
        });

        // request拦截器——（在每次请求之前判断该请求如果是post请求，则把请求的参数格式转换为字符串格式。）
        instance.interceptors.request.use(config => {
            if(config.method == 'post') {
                config.data = qs.stringify(config.data);
            }
            return config;
        }, error => {
            console.log("request拦截器：", error); // for debug
            Promise.reject(error);
        });

        // params.headers = { 'Content-Type': 'application/x-www-form-urlencoded' } // 参数设置请求头

        instance(params).then(res => {  // 请求成功后的函数
            console.log("封装的请求 请求success：", res);
            // TODO...
            if (res.data.status != 1) {
                Message({  type: "error", message: res.data.msg });
                if (res.data.status == 10000) {
                //   router.push({ path: "/login" });
                console.log(11111)
                }
              } else if (params.tips) {
                Message({ type: "success", message: res.data.msg });
              }

            resolve(res.data);
        }).catch( err => {
            console.log("封装的请求 请求error：", err);
            // TODO... 
            if (err == 'Error: timeout of 10000ms exceeded') {
                Message({ type: 'error',message: '网络异常，请稍后再试！'});
            } else {
                Message({ type: 'error', message: '服务器请求人数过多，请按F5刷新重试！'});
            }

            reject(err);
        });
    });
}

