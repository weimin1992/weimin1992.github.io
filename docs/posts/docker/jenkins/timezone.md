---
title: Docker 环境下Jenkins 时区设置
next:
  text: Docker常用命令
  link: /posts/docker/common
---

> Jenkins Docker 容器启动后时区默认是`Etc/UTC`，每次运行作业会发现构建历史中的时间都会比本地时间早8个小时，本文记录修改Jenkins 默认时区的方法

## 进入 Docker 容器后台

``` bash:no-line-numbers
sudo docker exec -it -u root {container id}
cat /etc/timezone
```

> 查看`/etc/timezone`内容是否为默认的`Etc/UTC`

## 修改时区

``` bash:no-line-numbers
echo Asia/Shanghai >/etc/timezone
```

> 将默认时区修改为东八区`Asia/Shanghai`

## 退出后台并重启容器

``` bash:no-line-numbers
exit
sudo docker restart {container id}
```

## 完成

> 通过以上三小步即可完成时区修改，登录Jenkins后验证时间是否与本地时间保持一致

## 补充

> 除了上述命令行交互方式修改时区之外，官网提供了通过 Jenkins 管理界面进行设置的方法，[参考地址](https://www.jenkins.io/doc/book/using/change-time-zone/)
