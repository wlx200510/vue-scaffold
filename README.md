# vue-scaffold-webpack3

1. add Vuex for example/404
3. add axios for api request
4. add sass/scss for style
5. add mockjs for axios request api
6. import component with split
7. import lib-flexible for mobile use
8. add postcss-pxtorem for rem use
## 介绍

基于 Webpack3 的 Vue2 SPA 开发环境，支持 ES6、Scss、ESlint，项目已集成 vuex、vue-router、axios、mockjs 等。
在Vue-cli脚手架基础上封装而成，此分支不包括测试和组件引入，用于小型快速项目
此分支集成了`postcss`中的`pxtorem` 设定`rootValue`为75(对应750设计稿) 可以在`postcssrc.js`中修改 开发时直接用`px`做单位
PS: 使用`pxtorem`代替`px2rem`从而通过使用`Px`来取消转换 达到特定属性不转换的目的

## Use

``` bash
# 安装依赖项
npm install

# 8080端口启动开发
npm run dev

# 打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 单元测试
npm run unit

# run all tests
npm test
```

## 目录结构

```bash
├── build/                      # 环境配置文件
│   ├── build.js
│   ├── check-versions.js       # 版本检查文件
│   ├── utils.js                # 工具函数文件
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
|—— config/                     # 目录及端口等常用配置项
|   |——dev.env.js               # 生成环境
|   |——index.js                 # 环境输出文件
|   |——prod.env.js              # 打包环境
├── mock/
│   └── ...                     # mock路由和数据配置
|—— static/                    
|   └── ...                     # 静态资源文件
├── src/
│   ├── main.js                 # 项目入口文件
│   ├── router/                 # 路由配置
│   │   └── ...
│   ├── App.vue                 # main app component
│   ├── components/             # 可复用组件
│   │   └── ...
│   ├── view/                   # 视图组件
│   │   └── ...
│   ├── libs/                   # 第三方库文件
│   │   └── ...
│   ├── plugins/                # Vue插件
│   │   └── ...
│   ├── util/                   # 常用工具库
│   │   └── ...
│   ├── assets/                 # 资源文件
│   │   └── images
│   ├── store/                  # vuex
│   │   ├── index.js            # 组合 vuex 模块
│   │   ├── actions.js          # 根 actions
│   │   ├── mutations.js        # 根 mutations
|   |   |—— getters.js          # 根 getters
│   │   ├── modules/            # 根据业务逻辑划分子模块
│   │   │   └── ...
│   ├── api/
│   │   └── index.js            # 最终请求后端的地方
├── upload/                     # 模拟文件上传目录
│   └── ...
├── index.html                  # index.html
├── .editorconfig               # 编辑器配置
├── .eslintignore               # eslint ignore conf
|—— .babelrc                    # babel conf
|—— .postcssrc.js               # postcss conf
└── package.json                # build scripts and dependencies
```