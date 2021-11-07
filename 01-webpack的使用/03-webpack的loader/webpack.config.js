const path = require('path')

module.exports = {
    // 入口起点
    entry: './src/main.js',
    output: {
        // 输出路径
        // __dirname nodejs的变量，代表当前文件的目录绝对路径
        path: path.resolve(__dirname, 'dist'),
        // 输出文件名
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    // loader的配置
    module: {
        rules: [
            {
                test: /\.css$/,
                // 要使用多个loader处理用use
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM上
                // 使用多个loader时，是从右向左
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    // 创建style标签，将js中的样式资源插入进去，添加到head中生效
                    loader: "style-loader"
                }, 
                {   
                    // 将css文件变成commonjs模块加载到js中，里面的内容是样式字符串
                    loader: "css-loader"
                }, 
                {
                    loader: "less-loader"
                }]
            },
            {   
                // 问题：默认处理不了html中的img图片
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
                            // 优点：减少请求数量（减轻服务器压力）
                            // 缺点：图片体积会更大（文件请求速度更慢）
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
            }
        ]
    }
}