# jia-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


---
# 从无到有

---
## 安装vue-cli 脚手架

- npm install vue-cli -g
- vue init webpack
    - ? Generate project in current directory? Yes
    - ? Project name jia-vue
    - ? Project description A Vue.js project
    - ? Author JiaLe1 <948962131@qq.com>
    - ? Vue build standalone
    - ? Install vue-router? Yes
    - ? Use ESLint to lint your code? No
    - ? Set up unit tests No
    - ? Setup e2e tests with Nightwatch? No
    - ? Should we run `npm install` for you after the project has been created? (recom
        mended) npm


---
## 调整 `/src` 下的目录结构

- 在 `/src` 下新建页面目录 `pages` ，用来存放各个页面


---
## 可配置 build 输出多页面

- npm install prerender-spa-plugin --save
- 修改 `/build/webpack.prod.conf.js` 文件，引入插件 [`prerender-spa-plugin`](https://www.npmjs.com/package/prerender-spa-plugin)，并配置路由（与 vue-router 配置的路由 `path` 保持一直）

    ``` javascript
    ...
    const PrerenderSpaPlugin = require('prerender-spa-plugin')
    ...
    plugins: [
        ...
        new PrerenderSpaPlugin(
        // build 目录
        path.join(__dirname, '../dist'),
        // 配置需要渲染的页面
        ['/demo', '/test']
        )
    ]
    ```