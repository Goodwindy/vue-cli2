// 引入vue 和 vuex
import Vue from 'vue';
import Vuex from 'vuex';

// 使用vuex插件,跟router一样
Vue.use(Vuex);              

// 直接导出 一个 Store 的实例
export default new Vuex.Store({
    state: {             
        
    },
    getters: {

    },
    // 同步操作直接修改state里面的数据
    mutations: {
        // 举例： 第一个参数是上面的state数据,第二个参数是commit传过来的数据,用以修改state数据。
        updateName: (state, data) => {   
            state.name = data; // 更改state里的数据
        }
    }
});