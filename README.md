# vuebox

# 安装依赖
npm install

# 启动项目
npm run dev

# 打包项目
npm run build 

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
# 该模板应用介绍：
    1.jQuery安装；
    2.饿了吗组件安装及使用；
    3.开发环境配置；             --- src/config/config.js
    4.axios安装及请求配置；      --- src/axios/axios.js
        使用方法：this.$http({url: "/index/index"}).then(res =>{ console.log(res) }).catch( err => { console.log(err) });
    5.Vuex安装及使用；
    6.Cookie安装及使用；
    7.MD5加密安装及使用；
    8.style的less方式使用；
    9.router的子路由及router-link的使用；
        子路由:在父组件需要使用router-view标签，子路由配置时path中不需要‘/’，且该方式适合局部刷新的使用，举例：头部导航不变，内容变



# 目录结构:
├── index.html                      入口页面
    ├── build                           构建脚本目录
    │   ├── build-server.js                 运行本地构建服务器，可以访问构建后的页面
    │   ├── build.js                        生产环境构建脚本
    │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
    │   ├── dev-server.js                   运行本地开发服务器
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                          项目配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    │   └── test.env.js                     测试环境变量
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── src                             项目源码目录    
    │   ├── assets                          资源目录，这里的资源会被wabpack构建（用于image、css）
    │   │   └── images
    │   │   └── logo.png
    │   ├── axios                           axios请求配置
    │   ├── components                      公共组件目录（如：头部导航等）
    │   │   └── HelloWorld.vue
    │   ├── config                          多环境配置（不同环境打包命令配置，不同环境下请求地址根路径设配置）
    │   ├── router                          前端路由
    │   │   └── index.js
    ├── store                               状态管理器，应用级数据（state）
    │   │   └── store.js
    ├── utils                               公用函数目录（封装的全局方法）
    ├── views                               页面目录
    │   ├── app.vue                         根组件
    │   ├── main.js                         入口js文件
    ├── static                          纯静态资源，不会被wabpack构建。
    └── test                            测试文件目录（unit&e2e）
        └── unit                            单元测试
            ├── index.js                        入口脚本
            ├── karma.conf.js                   karma配置文件
            └── specs                           单测case目录
                └── Hello.spec.js



