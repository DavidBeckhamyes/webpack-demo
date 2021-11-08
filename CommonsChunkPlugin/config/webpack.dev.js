// 开发环境配置

// output中的path需要绝对路径
// const path = require('path');
const { resolveApp } = require('../utils/path');

// 编译速度分析
// 优化 webpack 构建速度，首先需要知道是哪些插件、哪些 loader 耗时长，方便我们针对性的优化。
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const { merge } = require('webpack-merge');
const common = require('./webpack.common')


module.exports = smp.wrap(merge(common, {
    // 输出
    output: {
        // bundle 文件名称
        filename: '[name].bundle.js',

        // bundle 文件路径
        path: resolveApp('dist'),

        // 编译前清除目录
        clean: true
    },
    // 开发模式
    mode: 'development',
    // 开发工具，开启 source map，编译调试
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        // 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要。
        static: './dist',
        hot: true, // 热更新
    }
}))