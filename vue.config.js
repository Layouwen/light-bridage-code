const path = require('path')

// 路径拼接函数
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  // 设置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('views', resolve('src/views'))
      .set('styles', resolve('src/assets/styles'))
      .set('components', resolve('src/components'))
  },
  // 添加API Mock重定向
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
