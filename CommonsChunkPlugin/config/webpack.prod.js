// 生产环境配置

const path = require('path');

// 打包体积分析
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    // 输出
    output: {
        // bundle 文件名称 【只有这里和开发环境不一样】
        filename: '[name].[contenthash].bundle.js',

        // bundle 文件路径
        path: path.resolve('./dist/'),

        // 编译前清除目录
        clean: true
    },
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    // 生产模式
    mode: 'production',
})
