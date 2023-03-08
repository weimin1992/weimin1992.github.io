---
title: Windows下设置Nginx开机自启
---

> Windows 服务器环境中安装的 nginx，通过nginx.exe启动后，默认不会开机自启，本文介绍两种方法设置nginx服务开机自动启动

## 使用 Windows自带的任务计划程序

1. 创建`nginx.start.bat`文件，粘贴如下示例代码（第一行代码根据nginx实际路径进行修改）

``` bat
cd /d D:\nginx
start nginx
nginx -s reload
```

2.配置任务计划程序（详细过程略）

* 打开任务计划程序
* 创建基本任务进入创建基本任务向导
* [触发器]中勾选`计算机启动时`
* [操作/启动程序/程序与脚本]文件选择指向步骤1中创建的`nginx.start.bat`
* 点击`完成`
* 任务列表中右击该任务，并选中`启用[N]`选项

## 使用 WinSW 工具注册 Windows 服务

1.下载对应位数的 [WinSW安装包](https://github.com/winsw/winsw/releases)（64位对应`WinSW-x64.exe`,32位对应`WinSW-x86.exe`）并重命名为`nginx-service.exe`放入 nginx 安装目录中

2.在nginx安装目录中创建`nginx-service.xml`文件，粘贴如下内容

``` xml
<service>
    <id>nginx</id>
    <name>nginx</name>
    <description>nginx</description>
    <logpath>D:\nginx</logpath>
    <logmode>roll</logmode>
    <depend></depend>
    <executable>D:\nginx\nginx.exe</executable>
    <stopexecutable>D:\nginx\nginx.exe -s stop</stopexecutable>
</service>
```

3.以管理员身份运行`cmd`并`cd`到 nginx 安装目录，输入以下命令

``` cmd
nginx-service.exe install
```

4.在 Windows 服务中验证是否已经存在名为`nginx`的服务，若存在则右击配置服务自动启动即可

<CommentService />
