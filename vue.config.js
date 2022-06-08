module.exports = {
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: "0.0.0.0",
    port: port,
    open: true,
    inline: true,
    proxy: {
      '/company': {
        'target': 'http://192.168.5.55', //打印接口地址
        'changeOrigin': true, // 跨域访问设置，true代表跨域
        'pathRewrite': { // 路径改写规则
          '^/company': '' // 以/proxy/为开头的改写为''
        }
      }

    },
    disableHostCheck: true
  },
}