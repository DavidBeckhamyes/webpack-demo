// output中的path需要绝对路径
const path = require('path');
// 用于将打包的js文件注入到html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpack = require('webpack')
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
    ]
}