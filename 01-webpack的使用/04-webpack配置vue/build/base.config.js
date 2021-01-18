const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

//JS压缩
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
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
                            limit: 8196,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
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
            template: 'index.html'
        }),
        // new UglifyjsWebpackPlugin()
    ],

    resolve: {
        // alias别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // 生产环境用不上的配置先注释掉
    // devServer: {
    //     contentBase: './dist',
    //     inline: true,
        
    // }
}