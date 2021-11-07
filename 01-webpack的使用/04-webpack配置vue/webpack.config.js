const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

//JS压缩
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // 添加打包html的plugin后不再需要
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM上
                // 使用多个loader时，是从右向左
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
                            // 当加载的图片，大于limit时，需要使用file-loader模块进行编译
                            // [hash:8]取图片的hash的前8位
                            limit: 8196,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行打包处理）
                // 问题：因为url-loader默认使用ES6模块化解析，而html-loader引入图片是commonjs
                // 解析时会出现问题：[object Module]
                // 解决：关闭url-loader的es6模块化，使用commonjs解析
                loader: 'html-loader'
            },
            {
                test: /\.m?js$/,
                // exclude:排除
                // include:包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new webpack.BannerPlugin('最终版权归ZLH所有'),
        new HtmlWebpackPlugin({
            // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
            // 需求：需要有结构的HTML文件
            // 复制 './index.html'文件，并自动引入打包输出的所有资源（JS/CSS）
            template: 'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ],

    resolve: {
        // alias别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        contentBase: './dist',
        inline: true,
    }
}