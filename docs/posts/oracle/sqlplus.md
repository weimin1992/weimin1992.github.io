---
 title: MacOS 下安装 sqlplus
 date: 2022-12-20
 next:
  text: Windows 下安装 Oracle 11g
  link: /posts/oracle/install
---


::: warning 说明

变量使用 {} 包裹，真实环境需要根据实际情况进行修改！
:::

## 官网下载安装压缩包文件

访问[下载地址](https://www.oracle.com/database/technologies/instant-client/macos-intel-x86-downloads.html)，下载以下文件

``` shell
instantclient-basic-macos.x64-19.8.0.0.0dbru.zip
instantclient-sqlplus-macos.x64-19.8.0.0.0dbru.zip
```

## 将压缩包移动到Homebrew缓存目录

``` shell
cd {path/to/download}
mv instantclient-basic-macos.x64-19.8.0.0.0dbru.zip instantclient-sqlplus-macos.x64-19.8.0.0.0dbru.zip ~/Library/Caches/Homebrew/
```

## brew安装

运行以下命令

``` shell
brew tap InstantClientTap/instantclient
brew install instantclient-basic
brew install instantclient-sqlplus
```

## 验证安装

``` shell
sqlplus -V
```

输出如下结果表示安装成功
![验证安装](https://cdn.porridge.fun/blog/oracle/sqlplus/%E9%AA%8C%E8%AF%81.png$fix.water)

<CommentService />
