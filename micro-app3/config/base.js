const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 文本分离插件，分离js和css
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const { VueLoaderPlugin } = require('vue-loader'); // vue加载器

const { WEBPACK_SERVE } = process.env;

// 获取时间
const TimeFn = require('../get_time');

/**
 * 判断是生产环境还是开发环境
 * @type {boolean}
 * isProd为true表示生产
 */
const isProd = !WEBPACK_SERVE;

const cssConfig = (step = 1) => [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: step,
            sourceMap: !isProd
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: !isProd
        }
    }
];

const config = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: cssConfig(1)
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    ...cssConfig(2),
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: !isProd
                        }
                    }
                ],
                include: [resolve(__dirname, '../src')]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            preserveWhitespace: false // 不要留空白
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: !isProd
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|bmp|svg)$/,
                type: 'asset/resource',
                include: [
                    resolve(__dirname, '../src/assets')
                ]
            }
        ]
    },
    resolve: { // 配置路径别名
        extensions: ['.js', '.jsx', '.vue'], // import引入文件的时候不用加后缀
        modules: [
            'node_modules',
            resolve(__dirname, '../src')
        ],
        alias: {
            '@': resolve(__dirname, '../src')
        }
    },
    plugins: [
        new webpack.BannerPlugin(`@meri-design ${TimeFn()}`),
        new VueLoaderPlugin(), // vue加载器

        new ProgressBarPlugin(
            {
                format: chalk.blue(`[  build :bar ${chalk.green.bold(':percent')} (:elapsed seconds) ]`),
                clear: true,
                summary: false,
                customSummary: res => {
                    process.stderr.write(chalk.yellow(` 耗时：${res} `));
                }
            }
        )
    ],
    bail: true, // 在第一个错误出现时抛出失败结果
    target: 'web'
};

module.exports = config;
