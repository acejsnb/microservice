module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true,
        amd: true,
        jest: true
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        lodash: true,
        _: true,
        moment: true,
        systemCode: true,
        systemConfig: true,
        ActiveXObject: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        'vue'
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: './config/base.js'
            }
        },
        'import/extensions': ['.js', '.jsx']
    },
    rules: {
        // 生产环境出现console报警告
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 生产环境出现debugger报警告
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 禁用require引入静态资源
        'global-require': 1,
        // 缩进4
        indent: [2, 4],
        // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        'array-bracket-spacing': [2, 'never'],
        // 在块级作用域外访问块内定义的变量是否报错提示
        'block-scoped-var': 0,
        // if while function 后面的{必须与if在同一行，java风格。
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        // 双峰驼命名格式
        camelcase: 2,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'comma-dangle': [2, 'never'],
        // 控制逗号前后的空格
        'comma-spacing': [2, { before: false, after: true }],
        // 控制逗号在行尾出现还是在行首出现
        // http://eslint.org/docs/rules/comma-style
        'comma-style': [2, 'last'],
        // 圈复杂度
        complexity: [2, 40],
        // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
        'computed-property-spacing': [2, 'never'],
        // switch语句强制default分支，也可添加 // no default 注释取消此次警告
        'default-case': 2,
        // 强制object.key 中 . 的位置参数
        'dot-location': [2, 'property'],
        // 强制使用.号取属性
        'dot-notation': [2, { allowKeywords: true }],
        // 文件末尾强制换行
        'eol-last': 2,
        // 使用 === 替代 ==
        eqeqeq: [2, 'allow-null'],
        // 不检测引用路径别名
        'import/no-unresolved': [2, { ignore: [''] }],
        // 检查是项目依赖还是dev依赖
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        // 不用检测后缀名
        'import/extensions': ['error', 'always', {
            js: 'never', jsx: 'never', vue: 'never'
        }],
        // 单行100个字符
        'max-len': ['error', { code: 160 }],
        // 关闭箭头函数在一个参数时的括号限制
        'arrow-parens': 'off',
        // 不改变原对象(数组)并重新给字段赋值
        'no-param-reassign': ['error', { props: false }],
        // 关闭++操作符检查
        'no-plusplus': 0,
        // 关闭强制执行统一的行结尾，而不受操作系统、VCS、WS或整个代码库中使用的编辑器的影响
        'linebreak-style': [0, 'error', 'windows'],
        // 标识符不能以_开头或结尾
        'no-underscore-dangle': 1,
        // 关闭方法必须返回值
        'consistent-return': 0,
        // 不能使用var声明变量
        'no-unused-vars': 'off',
        // 代码块中多个let放在一起
        'one-var': ['error', { var: 'always', let: 'always' }],
        // 声明变量换行
        'one-var-declaration-per-line': ['error', 'initializations'],
        // 在 return 语句中赋值表达式要用括号包裹 return (result = a + b)
        'no-return-assign': ['error', 'always'],
        // 关闭限制使用对象原型上的方法
        'no-prototype-builtins': 'off',
        // 开发阴影变量检查
        'no-shadow': 1,
        // 获取变量使用解构
        'prefer-destructuring': ['error', { object: true, array: false }],
        // 使用parseInt等不用提供第二个参数
        radix: ['error', 'as-needed'],
        // 禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中
        'no-case-declarations': 1,
        // 允许使用嵌套的三目运算
        'no-nested-ternary': 'off',
        // 允许在else中写if
        'no-lonely-if': 'off',
        // 允许运算符简写
        'operator-assignment': 'off',
        // 对象应在大括号内换行
        'object-curly-newline': 1
    }
};
