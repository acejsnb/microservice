module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true,
        amd: true
    },
    settings: {
        react: {
            version: '17.0.2'
        },
        polyfills: ['Promise', 'URL'],
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    globals: {
        Babel: true,
        React: true,
        ReactDOM: true,
        mountNode: true
    },
    plugins: [
        'react', 'babel', '@typescript-eslint', 'react-hooks'
    ],
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:compat/recommended',
        'plugin:react/recommended',
        'plugin:import/typescript'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/jsx-uses-react': 'error', // 防止react被错误地标记为未使用
        'react/jsx-uses-vars': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'react/jsx-key': 2, // 在数组或迭代器中验证JSX具有key属性
        'react/jsx-props-no-spreading': 'off',
        // Indent JSX with 4 spaces
        'react/jsx-indent': ['error', 4],
        // Indent props with 4 spaces
        'react/jsx-indent-props': ['error', 4],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': [2, { ignore: [''] }],
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,
        'arrow-body-style': [2, 'as-needed'], // 箭头函数
        'class-methods-use-this': 0, // 强制类方法使用 this
        // 缩进Indent with 4 spaces
        indent: [2, 4],
        'no-console': 0, // 不禁用console
        'no-debugger': 2, // 禁用debugger
        'no-shadow': 0,
        'comma-dangle': [2, 'never'],
        'no-use-before-define': 'off',
        'import/extensions': ['error', {
            js: 'never',
            ts: 'never',
            tsx: 'never',
            png: 'always',
            jpg: 'always',
            svg: 'always',
            styl: 'always'
        }],
        quotes: [1, 'single'],
        'eol-last': 2,
        'no-else-return': 2,
        'no-empty': 2,
        eqeqeq: 2,
        'no-multiple-empty-lines': [1, { max: 2 }],
        'no-trailing-spaces': 1,
        'key-spacing': [0, { beforeColon: false, afterColon: true }],
        'padded-blocks': 2,
        'no-unused-vars': 0,
        'no-dupe-else-if': 0,
        'no-control-regex': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/mouse-events-have-key-events': 0,
        'no-nested-ternary': 0,
        'no-plusplus': 0,
        'no-param-reassign': 1
    }
};
