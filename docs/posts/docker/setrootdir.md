---
title: Docker根路径（data-root）修改
prev:
  text: Docker常用命令
  link: /posts/docker/common
next:
  text: docker-compose构建wordpress站点
  link: /posts/docker/wordpress
---

::: warning 注意事项

* 修改根路径之前，需要检查是否有运行的容器会受到影响：比如**Oracle**、**MySql**等实例;
* 迁移前建议做好数据备份，迁移后要确保已运行实例不受影响的前提下再删除旧的目录。
:::

## 背景

- 输入命令`df -h`查看系统可使用的磁盘空间发现`/dev/mapper/centos-root`根目录磁盘已用空间所占比例很高。
  
![磁盘空间](https://cdn.porridge.fun/blog/docker/setrootdir/0.png$fix.water)

- cd到`/`目录后输入命令`find . -type f -size +800M  -print0 | xargs -0 du -h | sort -nr`查找大于800M的大文件，如下图所示：

![查找大文件](https://cdn.porridge.fun/blog/docker/setrootdir/2.png$fix.water)

- 发现很多大文件存在于`/var/lib/docker`下，而该目录为Docker默认保存数据的目录，因此考虑将Docker默认保存数据的目录迁移到磁盘空间较多的`/home`下

## 操作

> 进行如下操作：停掉Docker服务后创建用于存放docker数据的`/home/lib/docker`目录，再将默认的`var/lib/docker`下所有文件复制到新建的目录下，编辑Docker的`daemon.json`文件(若无则创建)。

``` shell
systemctl stop docker
mkdir -p /home/lib/docker
cp -R /var/lib/docker/* /home/lib/docker/
vi /etc/docker/daemon.json
```

> 粘贴或者修改为如下键值

``` json
{
  "data-root":"/home/lib/docker"
}
```

> 再次启动Docker

``` shell
systemctl daemon-reload
systemctl restart docker
systemctl enable docker
```

## 检查

- 输入`docker info | grep -i root`检查路径修改是否生效，如下图所示：

![检查docker路径](https://cdn.porridge.fun/blog/docker/setrootdir/3.png$fix.water)

- 检查无误后可输入`rm -rf /var/lib/docker`删除之前所有默认文件，删除成功后检查一下之前的docker镜像与实例是否存在以及正常运行。

``` shell
docker images -a
docker ps -a
```

- 最后再输入命令`df -h`检查一下是否解决根目录磁盘已用空间所占比例很高的问题（由95%降低到10%）

![检查磁盘空间](https://cdn.porridge.fun/blog/docker/setrootdir/4.png$fix.water)

<CommentService />
