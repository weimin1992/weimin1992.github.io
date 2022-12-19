---
title: 创建表空间
prev:
  text: Oracle安装
  link: /posts/oracle/install
next:
  text: 表空间备份
  link: /posts/oracle/bak
---
# 创建表空间

::: warning 代码说明

* 变量使用 {} 包裹，真实环境需要根据实际情况进行修改！
* 使用SQLPlus或其他客户端工具,建议以sysdba身份登录
:::

``` sql
-- 创建表空间
create tablaspace {tablespacename} datafile 'storePath/filename.dbf' size 50M autoextend on next 50M maxsize 500M;
-- 创建用户
create user {username} identified by {tablespacename} default tablaspace {password};
-- 权限配置
grant connect,resource to {username};
-- 管理员权限配置
grant dba to {username}; 
```
