// 开发环境配置

// output中的path需要绝对路径
// const path = require('path');
const { resolveApp } = require('../utils/path');

// 编译速度分析
// 优化 webpack 构建速度，首先需要知道是哪些插件、哪些 loader 耗时长，方便我们针对性的优化。
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = smp.wrap(merge(common, {
    // 输出
    output: {
        // bundle 文件名称 【只有这里和开发环境不一样】
        filename: '[name].[contenthash:8].bundle.js',

        // bundle 文件路径
        path: resolveApp('dist'),

        // 编译前清除目录
        clean: true
    },
    // 开发模式
    mode: 'development',
    // 开发工具，开启 source map，编译调试
    // Tree Shaking 仅支持 source-map | inline-source-map | hidden-source-map | nosources-source-map
    // 原因：eval模式，将JS输出为字符串（不是 ES Modules 规范），导致Tree Shaking失败
    // devtool: 'eval-cheap-module-source-map',
    devtool: 'source-map',
    // 模块的解析规则
    resolve: {
        // 指定路径的别名
        alias: {
            "@": resolveApp('src')
        },
        // 指定引入文件的后缀名（指定之后，在引入文件时，后缀名可以省略）
        extensions: ['.js', '.json', 'less']
    },
    // 优化策略
    optimization: {
        // 检测函数有没有副作用
        sideEffects: true,
        // 标记未被使用的代码
        usedExports: true,
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        // 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要。
        static: './dist',
        hot: true, // 热更新
    }
}))