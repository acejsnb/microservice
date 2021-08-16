module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3,
                targets: {
                    browsers: [
                        'last 2 versions',
                        'Firefox ESR',
                        '> 1%',
                        'ie >= 11',
                        'iOS >= 8',
                        'Android >= 4'
                    ]
                }
            }
        ],
        ['@babel/preset-react', { runtime: 'automatic' }]
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', { corejs: { version: 3, proposals: true } }],
        [
            'import',
            {
                libraryName: 'double-ui',
                style: (name) => `${name}/style.css`,
                camel2DashComponentName: false
            }
        ]
    ]
};
