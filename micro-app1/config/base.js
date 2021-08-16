const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 文本分离插件，分离js和css
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');
const { VueLoaderPlugin } = require('vue-loader'); // vue加载器

const { NODE_ENV, ENV } = process.env;

// 获取时间
const TimeFn = require('../get_time');

/**
 * 判断是生产环境还是开发环境
 * @type {boolean}
 * isProd为true表示生产
 */
const isProd = NODE_ENV === 'production';

/**
 *  css和stylus开发、生产依赖
 *  生产分离css
 */
const cssConfig = [
    // isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
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
const stylusConfig = [
    // isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            sourceMap: !isProd
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: !isProd
        }
    },
    {
        loader: 'stylus-loader',
        options: {
            sourceMap: !isProd
        }
    }
];
if (ENV !== 'custom') {
    stylusConfig.push({
        loader: 'style-resources-loader',
        options: {
            injector: 'prepend',
            patterns: resolve(
                __dirname,
                ENV === 'dark' ? '../src/assets/stylus/variables-dark.styl' : '../src/assets/stylus/variables.styl'
            )
        }
    });
}

const config = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: cssConfig
            },
            {
                test: /\.styl(us)?$/,
                use: stylusConfig,
                include: [resolve(__dirname, '../src')]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                css: cssConfig,
                                stylus: stylusConfig
                            },
                            preserveWhitespace: false // 不要留空白
                        }
                    }
                ]
                // include: [resolve(__dirname, '../src')]
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
                ]
                // exclude: (file) => (
                //     /node_modules/.test(file) && !/\.vue\.js/.test(file)
                // )
            },
            {
                test: /\.(png|jpe?g|gif|bmp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { // 配置图片编译路径
                            // limit: 1024, // 小于1k将图片转换成base64
                            limit: 1, // 小于1k将图片转换成base64
                            name: '[name].[hash:8].[ext]',
                            outputPath: ENV === 'development' ? './' : './images',
                            // publicPath: '../images',
                            esModule: false
                        }
                    }
                ],
                include: [resolve(__dirname, '../src/assets')]
            },
            {
                test: /\.svg/,
                use: ['vue-loader', 'vuecomponent-svg-loader']
            }
        ]
    },
    resolve: { // 配置路径别名
        extensions: ['.js', '.jsx', '.vue', '.styl'], // import引入文件的时候不用加后缀
        modules: [
            'node_modules',
            resolve(__dirname, '../src')
        ]
    },
    plugins: [
        new webpack.BannerPlugin(`@meri-design ${TimeFn()}`),
        new VueLoaderPlugin(), // vue加载器

        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [
                    chalk.blue.bold('Your application is running here: ') + chalk.green.bold('components 打包成功！')
                ],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            }
            /*
            onErrors(severity, errors) {
                // You can listen to errors transformed and prioritized by the plugin
                // severity can be 'error' or 'warning'
                console.log('onErrors:::::::::', severity, errors);
            },
            clearconsole: true
            */
        }),
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
    externals: {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter'
    },
    bail: true // 在第一个错误出现时抛出失败结果
    // target: 'web'
};

module.exports = config;
