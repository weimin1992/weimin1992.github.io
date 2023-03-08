---
title: terser-webpack-plugin删除控制台打印消息
---
> 项目开发稳定，后期上生产环境的时候，需要进行性能优化，删除开发环境的控制台打印消息是优化中的一项，基于`webpack`打包的项目可以使用`terser-webpack-plugin`，本文对该插件配置过程进行记录。

::: warning 说明

* `webpack 4` 之前使用的可实现相同功能的 [`uglifyjs-webpack-plugin`](https://github.com/webpack-contrib/uglifyjs-webpack-plugin#uglifyoptions)插件已废弃；
* `terser-webpack-plugin` 支持`webpack`4与5版本；
* devtool 的 source maps仅支持以下选项：`source-map`, `inline-source-map`, `hidden-source-map` 以及`nosources-source-map values`。

:::
## 安装
  
  首先将`terser-webpack-plugin` 安装到项目的 `dev` 依赖中

<CodeGroup>
  <CodeGroupItem title="npm" active>

``` bash:no-line-numbers
npm install terser-webpack-plugin --save-dev
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

``` bash:no-line-numbers
yarn add -D terser-webpack-plugin
```

  </CodeGroupItem>

  <CodeGroupItem title="pnpm">

``` bash:no-line-numbers
pnpm add -D terser-webpack-plugin
```

  </CodeGroupItem>
</CodeGroup>

## 配置

``` js{1,4-21}
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  // ...webpack config,
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                },
                format: {
                    comments: false
                }
            },
            extractComments: false
        })
    ],
    // ...otherOptions
  }
}
```

## 验证

> 打包并发布到生产环境后，查看浏览器控制台发现浏览器console空空如也!

[webpack terser-webpack-plugin 官网配置项参考](https://webpack.js.org/plugins/terser-webpack-plugin/)

<CommentService />
