// output中的path需要绝对路径
const path = require('path');
// 用于将打包的js文件注入到html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpack = require('webpack');
const { resolve } = require('path');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
    entry: {
        indexa: './src/indexa.js',
        indexb: './src/indexb.js',
        jquery: ['jquery'] // 依赖的第三方库node_modules中
    },
    output: {
        path: path.resolve('./dist/'),
        filename: '[name].[chunkHash].js'
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'jquery', // 如果有该名称的chunk则选择这个chunk提取公共文件，这里是jquery，如果没有则生成的文件是这个名称的chunk
          }),
          
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    mode: 'development',

    // 开发服务器 devServer：用来自动化(自动编译，自动打开浏览器，自动刷新浏览器~~~)
    // 特点：只会在内存中编译打包，不会有任何输出
    // 启动devServer指令为：npx webpack-dev-server
    devServer: {
        // 项目构建后的路径
        contentBase: resolve(__dirname, 'dist'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true
    }
}