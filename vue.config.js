// vue.config.js
module.exports = {
  // 保存时输出错误在控制台
  lintOnSave: true,
  // 输出错误在浏览器
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    open: true
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:7003', //这里填入你要请求的接口的前缀
    //     ws: true, //代理websocked
    //     changeOrigin: true, //虚拟的站点需要更管origin
    //     pathRewrite: {
    //       '^/api': '/kjk' //重写路径
    //     }
    //   }
    // }
  },
  publicPath: '/hasaki/',
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  }
}
