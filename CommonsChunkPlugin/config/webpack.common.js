// 通用环境配置

// 用于将打包的js文件注入到html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {   
  // 入口
  entry: {
    index: './src/index.js',
  },
  plugins: [
    // 生成html，自动引入所有bundle
    new HtmlWebpackPlugin({
      title: 'release_v0',
    }),
  ]
}
