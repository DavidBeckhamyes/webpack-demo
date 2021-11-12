// 通用环境配置

const { appSrc } = require('../utils/path');
// 用于将打包的js文件注入到html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        include: appSrc,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          'less-loader'
        ],
      },
    ]
  },
  plugins: [
    // 生成html，自动引入所有bundle
    new HtmlWebpackPlugin({
      title: 'release_v0',
      template: './index.html'
    }),
  ]
}
