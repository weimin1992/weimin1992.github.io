---
title: Oracle 备份与还原
prev:
  text: Oracle 表空间创建
  link: /posts/oracle/create
---


::: warning 说明

* 变量使用 {} 包裹，真实环境需要根据实际情况进行修改！
* 在安装oracle环境的机器上打开终端：cmd（windows）或 zsh（mac）。
:::

## 导出

``` shell
exp {username}/{password}@{ip}/{instance} ownner= {tablespacename} file={yourpathto/filename.dmp}
```

## 导入

``` shell
imp {username}/{password}@{ip}/{instance} file={yourpathto/filename.dmp} fromuser={username}
touser={username} ignore=y
```
