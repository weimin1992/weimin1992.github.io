---
title: Linux常用命令
---


>与Windows下可视化操作方式不同，Linux操作系统通过shell（终端）进行操作交互，这种方式需要运维人员熟练掌握基础命令，此文基于上述目的总结Linux服务器运维过程中常用的命令，&#x1F680; 此文将持续更新...

::: warning 说明

* 变量使用 {} 包裹，真实环境需要根据实际情况进行修改！
* Linux有许多发行分支，本文目前只针对较为常用的Ubuntu和CentOS。
:::

-------------

## 远程

分为**用户密码**与**密钥文件**两种方式

<CodeGroup>
  <CodeGroupItem title="用户密码" active>

```bash:no-line-numbers
sudo ssh {username}@{ipHost}
```

  </CodeGroupItem>

  <CodeGroupItem title="密钥文件">

``` bash:no-line-numbers
sudo ssh -i {secretKeyFile} {username}@{ipHost}
```

  </CodeGroupItem>
</CodeGroup>

## 用户组

### 用户切换

``` bash
su {username}   ## 执行后输入密码
```

### 管理员权限

::: warning 注意
在非管理员账号(root)下，某些命令会提示权限不足，
通过加`sudo`前缀即可临时使用管理员权限执行命令
:::

``` bash
sudo {command}
```

## 软件

### 包管理器

::: warning 注意
Ubuntu默认使用deb包管理器（`apt-get`），CentOS默认使用rpm包管理器（`yum`），常用命令如下
:::

<CodeGroup>
  <CodeGroupItem title="Ubuntu" active>

```bash:no-line-numbers
apt-get [options] command   ## 基本语法
```

  </CodeGroupItem>

  <CodeGroupItem title="CentOS">

``` bash:no-line-numbers
yum [options] command   ## 基本语法
```

  </CodeGroupItem>
</CodeGroup>

### 软件维护常用命令

::: warning 注意
软件的安装分为：包管理器在线安装、源码安装、二进制文件安装。
若有互联网环境，推荐使用**包管理器在线安装**
:::

<CodeGroup>
  <CodeGroupItem title="Ubuntu" active>

```bash:no-line-numbers
man apt-get                                       ## 查看命令详细手册
apt-get -h                                        ## 查看常用命令简略说明
sudo vim /etc/apt/sources.list                    ## 编辑软件源站点
sudo apt-get update                               ## 根据/etc/apt/sources.list文件更新本地索引文件
sudo apt list --upgradable                        ## 查看哪些软件可以更新
sudo apt-get upgrade                              ## 执行软件更新
sudo apt-get dist-upgrade                         ## 在执行软件更新的基础上智能处理软件依赖项
sudo apt-get clean && sudo apt-get autoclean      ## 清理无用的包
sudo apt-get install {packagename}                ## 安装包/软件
sudo apt-get remove {packagename}                 ## 卸载包/软件
sudo apt-get update {packagename}                 ## 更新包/软件
...
```

  </CodeGroupItem>

  <CodeGroupItem title="CentOS">

``` bash:no-line-numbers
man yum                                           ## 查看命令详细手册
yum -h                                            ## 查看常用命令简略说明
sudo yum repolist                                 ## 列出所有的yum repo
sudo vim /etc/yum.repos.d/{file}.repo         ## 编辑软件源站点
sudo yum -y update                                ## 升级所有包、同时升级软件和系统内核
sudo yum -y upgrade                               ## 只升级所有包、不升级软件和系统内核
sudo yum list                                     ## 列出所有可安装的包
sudo yum list installed                           ## 列出所有已安装的包
sudo yum info {packagename}                       ## 查看包信息
sudo yum check-update                             ## 检查系统中需要更新的包
sudo yum search {packagename}                     ## 查找包
sudo yum install {packagename}                    ## 安装包
sudo yum remove {packagename}                     ## 卸载包
sudo yum clean                                    ## 清除使用yum生成的缓存文件
...
```

  </CodeGroupItem>
</CodeGroup>

## 文件管理

> Windows操作系统下文件夹/文件常用的操作包括：跳转、创建、删除、批量删除、复制、剪切、重命名等。Linux下文件操作相关命令如下

``` bash
pwd                                   ## 显示当前绝对路径
cd {path}                             ## 转到目标路径（支持根目录绝对路径以及当前目录的相对路径）
cd ..                                 ## 转到当前路径的父级目录
mkdir {folder}                        ## 创建文件夹
rmdir {folder}                        ## 删除文件夹
mkdir -p {pathto/folder}              ## 创建多级目录
rmdir -p {pathto/folder}              ## 删除多级目录
touch {file}                          ## 创建文件
rm [options] {file or folder}         ## 删除文件/文件夹（需要谨慎操作）
cp [options] {soucefile or sourcefolder} {destfile or destfolder} ## 复制文件/文件夹
mv {soucefile} {destfile}                 ## 重命名文件
mv {soucefile} {pathto/folder}            ## 将文件移动到目标路径
mv {soucefolder} {destfolder}     ## 当前路径若存在destfolder则将soucefolder移动到destfolder文件夹，若不存在则将soucefolder重命名为destfolder
...
```

<CommentService />
