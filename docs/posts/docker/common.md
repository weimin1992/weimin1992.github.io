---
title: Docker常用命令
next:
  text: Docker根路径（data-root）修改
  link: /posts/docker/setrootdir
---

::: warning 说明

变量使用 {} 包裹，真实环境需要根据实际情况进行修改！
:::

## 基本概念

### 容器-Container

简单的说，容器是一个在你机器上运行的沙箱进程（sandboxed process），与主机上其他所有其他进程隔离。这种隔离技术的实现基于[Linux内核命名空间与cgroups（自备梯子）](https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504)，该技术作为Linux的特色功能已存在了很久。Docker一直致力于普及这些功能。概括的说，一个容器是：

* 一个可运行的镜像的实例。可以通过Docker API或者CIL创建、开启、关闭、移动或者删除一个容器
* 可以运行在本地机器、需你机器或者部署到云服务器上
* 轻便快捷（可以运行在任意操作系统中）
* 与其他容器相互隔离，运行自己的软件，二进制以及配置

### 镜像-Image

运行容器时，它使用孤立的文件系统。此自定义文件系统由容器镜像提供。由于镜像包含容器的文件系统，因此它必须包含运行应用程序所需的所有内容——所有依赖项、配置、脚本、二进制文件等。该镜像还包含容器的其他配置，例如环境变量、要运行的默认命令和其他元数据。

## Windows推荐安装 WSL

在通过[Docker 官网安装指引](https://docs.docker.com/get-docker/)安装好 Docker 环境之后，推荐安装WSL(`Windows Subsystem for Linux`)，目前已升级到 WSL2 版本。

WSL2 使用虚拟化技术在轻量级虚拟机 (VM) 中运行 Linux 内核，同时保留了WSL1的操作体验，可以把通过 WSL2 启动的 Linux 系统认为是虚拟机中的一个 Linux 系统，因此，相对于通过用户模式和内核模式组件构成兼容性底层来运行Linux的WSL1来说，WSL2 的 Linux 系统更完整，功能更完善。例如，WSL1 不支持 Docker，而 WSL2 可以以原生的方式运行 Docker。

WSL2 的安装可参考：[使用 WSL 在 Windows 上安装 Linux](https://learn.microsoft.com/zh-cn/windows/wsl/install)。安装完成后在 Docker Desktop 中开启 WSL2选项：
![docker 开启wsl2](https://cdn.porridge.fun/blog/docker/common/wsl.png$fix.water)

## 帮助启动类命令

### 查看docker服务状态

``` bash:no-line-numbers
systemctl status docker
```

### 启动

``` bash:no-line-numbers
systemctl start docker
```

### 停止

``` bash:no-line-numbers
systemctl stop docker
```

### 重启

``` bash:no-line-numbers
systemctl restart docker
```

### 状态查看

``` bash:no-line-numbers
systemctl status docker
```

### 版本信息查看

<CodeGroup>
  <CodeGroupItem title="版本简略信息" active>

```bash:no-line-numbers
docker -v
```

  </CodeGroupItem>

  <CodeGroupItem title="版本详细信息">

``` bash:no-line-numbers
docker version
```

  </CodeGroupItem>

  <CodeGroupItem title="概要信息">

``` bash:no-line-numbers
docker info
```

  </CodeGroupItem>
</CodeGroup>

### 帮助信息查看

<CodeGroup>
  <CodeGroupItem title="总体帮助文档" active>

```bash:no-line-numbers
docker --help
```

  </CodeGroupItem>

  <CodeGroupItem title="命令帮助文档">

``` bash:no-line-numbers
docker {keyword} --help
```

  </CodeGroupItem>

</CodeGroup>

## 镜像命令

### 列出镜像列表

``` bash:no-line-numbers
docker images [OPTIONS] [ARGS]
```

::: warning 注意

* `[OPTIONS]`: 可以通过`docker images --help`查看帮助
* `-a`: `-all`的简写，即列出所有本地所有镜像
* `-q`: 只显示镜像id
* `[ARGS]`: 可以直接写镜像名，比如`centos`、`nginx`等

:::

### 在远程仓库中搜索某个镜像

``` bash:no-line-numbers
docker search [OPTIONS] {image name}
```

::: warning 注意

* `[OPTIONS]`: 可以通过`docker search --help`查看帮助
* `--limit int`: 只列出`int`个镜像，默认为25
:::

``` bash:no-line-numbers
docker search --limit 3 nginx
```

### 从远程仓库下载某个镜像

``` bash:no-line-numbers
docker pull {image name}[:TAG]
```

::: warning 注意

* 不写TAG默认就是最新版`:latest`
:::

### 查看镜像详细信息

``` bash:no-line-numbers
docker inspect {image name}
```

### 查看镜像/容器/数据卷所占的空间

``` bash:no-line-numbers
docker system df
```

### 删除镜像

<CodeGroup>
  <CodeGroupItem title="单个删除" active>

```bash:no-line-numbers
docker rmi -f {image id}
```

  </CodeGroupItem>

  <CodeGroupItem title="批量删除">

``` bash:no-line-numbers
docker rmi -f {image name}:{tag name} {image name}:{tag name}
```

  </CodeGroupItem>

  <CodeGroupItem title="删除全部">

``` bash:no-line-numbers
docker rmi -f $(docker images -qa)
```

  </CodeGroupItem>

</CodeGroup>

### 拉取镜像

``` bash:no-line-numbers
docker pull {image name}
```

## 容器命令

### 创建+启动

<CodeGroup>
  <CodeGroupItem title="命令" active>

``` bash:no-line-numbers
docker run [OPTIONS] {image name} [COMMAND] [ARG...]
```

  </CodeGroupItem>

  <CodeGroupItem title="示例" active>

``` bash:no-line-numbers
docker run -d -p 80:80 -p 443:443 --name=default_site -v /home/default/page:/etc/nginx/html -v /home/default/nginx/conf.d:/etc/nginx/conf.d nginx
```

  </CodeGroupItem>
</CodeGroup>

::: warning 注意

* `[OPTIONS]`: 大部分是一个`-`(例如`-p`、`-v`)，个别会是是两个`-`(例如`--name=`)
* `--name=`: 容器名称（不可与已存在容器同名），不指定该参数则会随机生成
* `-d`: `--detach`的简写，后台运行容器并返回容器id，即启动`守护式容器`
* `-i`: `--interactive`的简写，以交互模式运行容器，通常搭配`-t`使用
* `-t`: `--tty`的简写，为容器重新分配一个伪输入终端，通常搭配`-i`使用，即启动`交互式容器`（前台有伪终端，等待交互）
* `-p`: 指定端口映射，`:`分隔(分隔符左边为宿主机端口，右边为容器端口)
* `-v`: `--volume`的简写，表示为容器指定一个外部的卷，`:`分隔(分隔符左边为宿主机磁盘目录，右边为容器内部目录)

:::

### 启动容器

<CodeGroup>
  <CodeGroupItem title="交互式容器" active>

``` bash:no-line-numbers
docker run -it {image name} /bin/bash
```

  </CodeGroupItem>

  <CodeGroupItem title="守护式容器">

``` bash:no-line-numbers
docker run -d {image name}
```

  </CodeGroupItem>

</CodeGroup>

### 列出所有正在运行的容器

``` bash:no-line-numbers
docker ps [OPTIONS]
```

::: warning 注意

* `-a`: 列出当前所有正在运行的容器+历史上运行过的容器
* `-l`: 显示最近创建的容器
* `-n`: 显示最近创建的n个容器
* `-q`: 静默模式，只显示容器编号
:::

### 退出容器

### 启动已停止运行的容器

``` bash:no-line-numbers
docker start {container id or container name}
```

### 重启容器

``` bash:no-line-numbers
docker restart {container id or container name}
```

### 停止容器

``` bash:no-line-numbers
docker stop {container id or container name}
```

### 强制停止容器

``` bash:no-line-numbers
docker kill {container id or container name}
```

### 删除容器

``` bash:no-line-numbers
docker rm {container id}
```

::: warning 注意

* 删除之前先停止容器
:::

### 强制删除容器

``` bash:no-line-numbers
docker rm -f {container id}
```

::: warning 注意

* 容器运行时可以直接删除
:::

### 设置容器开机自启动

<CodeGroup>
  <CodeGroupItem title="新建容器" active>

``` bash:no-line-numbers
docker run {image name} [OPTIONS] --restart=always
```

  </CodeGroupItem>

  <CodeGroupItem title="已创建容器">

``` bash:no-line-numbers
docker update --restart=always {container id or container name}
```

  </CodeGroupItem>

</CodeGroup>
