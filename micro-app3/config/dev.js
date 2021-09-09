const { resolve, join } = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html

const { name } = require('../package.json');

const baseConfig = require('./base');
const port = 2003;

const config = {
    entry: {
        index: resolve(__dirname, '../src/main.js') // 入口文件
    },
    output: {
        path: resolve(__dirname, '../development'),
        filename: 'javascript/[name].js', // [name] 是entry的key
        publicPath: '/',
        assetModuleFilename: 'static/[name][ext]',
        library: `vue-${name}`,
        libraryTarget: 'umd'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, '../src/indexDev.html'), // 引入模版
            favicon: join(__dirname, '../src/assets/favicon.ico'),
            filename: 'index.html',
            minify: { // 对index.html压缩
                collapseWhitespace: false,
                removeAttributeQuotes: false
            },
            hash: true,
            inlineSource: '.(js|css)'
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        })
    ],
    cache: true,
    devtool: 'inline-source-map',
    watchOptions: {
        poll: 1000, //监控间隔
        aggregateTimeout: 500, // 间隔毫秒 （防抖）
        ignored: /node_modules/, // 不要监控的文件
    },
    devServer: {
        static: {
            directory: join(__dirname, '../development')
        },
        compress: true, // 开启Gzip压缩
        host: '0.0.0.0',
        hot: true,
        port, // 端口号
        client: {
            overlay: true
        },
        historyApiFallback: { // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 /
            rewrites: [{ from: /./, to: '/' }]
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
};

module.exports = merge(baseConfig, config);
