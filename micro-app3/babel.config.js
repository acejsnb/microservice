module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3
            }
        ]
    ],
    plugins: [
        ['@vue/babel-plugin-jsx', { optimize: true, transformOn: true }],
        ['@babel/plugin-transform-runtime', { corejs: { version: 3, proposals: true } }],
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-modules-commonjs'
    ]
};
