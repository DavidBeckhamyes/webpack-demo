// 生产环境配置

// const path = require('path');
const { resolveApp } = require('../utils/path');

// 打包体积分析
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    // 输出
    output: {
        // bundle 文件名称 【只有这里和开发环境不一样】
        filename: '[name].[contenthash:8].bundle.js',

        // bundle 文件路径
        path: resolveApp('dist'),

        // 编译前清除目录
        clean: true
    },
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    // 排除打包依赖项
    externals: {
        'jquery': 'jQuery'
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
    },
    // 生产模式
    mode: 'production',
})
