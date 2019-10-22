// 多环境配置（不同环境打包命令配置，不同环境下请求地址根路径设配置）

var globalData = {};
if (process.env.NODE_ENV == "testing") {            // 测试环境
  globalData = {
    server: "http://192.168.1.167:8080/tss-system" 
  };
} else if (process.env.NODE_ENV == "production") {  // 生产环境
  globalData = {
    server: "https://www.stlml.net" 

  };
} else if (process.env.NODE_ENV == "fev") {         
    // 开发环境
    globalData = {
    server: "https://localhost:8080/tss-system"     
  };
} else {                                            // 本地开发环境
  globalData = {
    server: "http://192.168.0.105:8080/tss-system-electronic", 
  };
}

module.exports = globalData;
