---
title: Oracle 表空间创建
prev:
  text: Windows 下安装 Oracle 11g
  link: /posts/oracle/install
next:
  text: Oracle 备份与还原
  link: /posts/oracle/bak
---
<!-- >记录Oracle 11gR2的安装过程 -->
::: warning 说明

* 变量使用 {} 包裹，真实环境需要根据实际情况进行修改！
* 使用SQLPlus或其他客户端工具,建议以sysdba身份登录（Windows环境参照[Oracle安装](./install)、MacOS系统可参照[mac下安装sqlplus](./sqlplus)）。
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

<CommentService />

