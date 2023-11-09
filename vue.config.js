module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // 101.35.201.95
        // http://localhost:3300
        // localhost
        // target: "http://localhost:3300/", //要跨域的域名 目标地址
        target: "http://www.leftcloud.top:3300/", //要跨域的域名 目标地址
        changeOrigin: true, //是否开启跨域  是否更改源路径
        ws: true,
        pathRewrite: {
          // "^/api": "" // /api/ / 凡是/api开头的地址都可以跨域
          "^/": "" // /api/ / 凡是/api开头的地址都可以跨域
        }
      },
      "/api2": {
        // 101.35.201.95
        // http://localhost:3300
        // localhost
        // target: "http://localhost:127.0.0.1:18081/", //要跨域的域名 目标地址
        // target: "http://localhost:3300/", //要跨域的域名 目标地址
        target: "http://www.leftcloud.top:3300/", //要跨域的域名 目标地址
        changeOrigin: true, //是否开启跨域  是否更改源路径
        ws: true,
        pathRewrite: {
          // "^/api": "" // /api/ / 凡是/api开头的地址都可以跨域
          "^/": "" // /api/ / 凡是/api开头的地址都可以跨域
        }
      },
      "/hello": {
        // 101.35.201.95
        // http://localhost:3300
        // localhost
        // target: "http://localhost:127.0.0.1:18081/", //要跨域的域名 目标地址
        // target: "http://localhost:3300/", //要跨域的域名 目标地址
        target: "http://www.leftcloud.top:30080/", //要跨域的域名 目标地址
        changeOrigin: true, //是否开启跨域  是否更改源路径
        ws: true,
        pathRewrite: {
          // "^/api": "" // /api/ / 凡是/api开头的地址都可以跨域
          "^/": "" // /api/ / 凡是/api开头的地址都可以跨域
        }
      }
    }
  }
}
