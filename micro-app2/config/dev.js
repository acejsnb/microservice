const { resolve, join } = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');
const { name } = require('../package.json');

const baseConfig = require('./base');

// 获取本机ip
const getIp = require('../get_ip');

const port = 2002;

const config = {
    entry: {
        // index: ['core-js/stable', 'regenerator-runtime/runtime', resolve(__dirname, '../src/main.js')] // 入口文件
        index: resolve(__dirname, '../src/main.js') // 入口文件
    },
    output: {
        path: resolve(__dirname, '../development'),
        filename: 'javascript/[name].js', // [name] 是entry的key
        publicPath: '/',
        library: `vue-${name}`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [
                    chalk.blueBright.bold('Your application is running here: ') + chalk.greenBright.bold(`http://${getIp()}:${port}/`),
                    chalk.blueBright.bold('Your application is running here: ') + chalk.greenBright.bold(`http://localhost:${port}/`)
                ]
            }
        }),
        new HtmlWebpackPlugin({
            template: join(__dirname, '../src/indexDev.html'), // 引入模版
            favicon: join(__dirname, '../src/assets/favicon.ico'),
            filename: 'index.html',
            minify: { // 对index.html压缩
                collapseWhitespace: false, // 去掉index.html的空格
                removeAttributeQuotes: false // 去掉引号
            },
            hash: true, // 去掉上次浏览器的缓存（使浏览器每次获取到的是最新的html）
            // ,chunks:['vendor','main'] // 在产出的html文件里面引入哪些代码块，里面的名字要跟entry里面key对应(一般用于多文件入口)
            inlineSource: '.(js|css)'
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        })
    ],
    cache: true,
    devtool: 'inline-source-map',
    // devtool: 'eval-source-map',
    devServer: {
        contentBase: join(__dirname, '../development'), // 将 dist 目录下的文件，作为可访问文件。
        compress: true, // 开启Gzip压缩
        host: '0.0.0.0', // 设置服务器的ip地址，默认localhost
        port, // 端口号
        // open: true, // 自动打开浏览器
        hot: true,
        noInfo: true,
        overlay: { // 当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
            errors: true
        },
        injectClient: false,
        disableHostCheck: true, //  不检查主机
        historyApiFallback: { // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 /
            rewrites: [{ from: /./, to: '/' }]
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/dashboard-static': {
                target: 'http://47.95.122.141:8200/', // 要请求的IP地址
                pathRewrite: { '^/dashboard-static': '' }
            }
        }
    }
};

module.exports = merge(baseConfig, config);
