---
title: ssh key免密登录远程服务器
---

> 远程Linux服务器的常规方式为使用`xshell`、`putty`等，通过可视化界面输入并记住账号、密码/密钥文件的方式登录远程服务器。但更推荐使用本机自带的`shell`来远程服务器，因为该方式： &#x2705; 不依赖第三方软件（xshell需要购买授权）；&#x2705; 同样支持免密登录

::: warning 说明

变量使用 {} 包裹，真实环境需要根据实际情况进行修改！
:::

## 本机操作

* 生成ssh key公钥

``` bash:no-line-numbers
ssh-keygen -t rsa -C "{email@example.com}"
```

> 上述命令会在本机`~/.ssh`目录下生成`id_rsa`与`id_rsa.pub`两个文件

``` bash:no-line-numbers
cat ~/.ssh/id_rsa.pub
```

## 复制本机公钥到服务器白名单中

> 本机公钥生成后，可手动粘贴到服务器上或者使用`ssh-copy-id`命令自动配置远程服务器

<CodeGroup>
  <CodeGroupItem title="手动粘贴">

``` bash:no-line-numbers
cat ~/.ssh/id_rsa.pub     #本机查看公钥
vi ~/.ssh/authorized_keys #将上述公钥粘贴到服务器白名单配置文件中
```

  </CodeGroupItem>

  <CodeGroupItem title="自动配置（推荐）" active>

``` bash:no-line-numbers
ssh-copy-id [OPTIONS] {username}@{ipHost}
```

  </CodeGroupItem>
</CodeGroup>

> 自动配置后提示如下图所示表示配置成功并可以开始免密登陆

![自动配置验证](https://cdn.porridge.fun/blog/linux/ssh.png$fix.water)

## 免密登录远程服务器

> 远程命令

``` bash:no-line-numbers
ssh {username}@{ipHost}
```

## 别名配置

> 实现免密登陆后，当有多台服务器需要运维的时候，建议使用别名来管理多服务器远程（使用ssh用户配置文件管理服务器远程会话）

::: warning 说明

* 用户配置文件: `~/.ssh/config`
* 系统配置文件: `/etc/ssh/ssh_config`
:::

### 常用的配置项说明及示例

<CodeGroup>
  <CodeGroupItem title="配置项说明" active>

``` html
Host                     #别名
HostName                 #主机名
Port                     #端口
User                     #用户名
IdentityFile             #密钥文件路径
IdentitiesOnly           #只接受ssh key登录
PreferedAuthentications  #强制使用public key验证
```

  </CodeGroupItem>

  <CodeGroupItem title="示例">

``` bash
Host {custom alias}
  HostName {ip}
  User {username}
  IdentityFile ~/.ssh/id_rsa
```

  </CodeGroupItem>
</CodeGroup>

### 别名远程

``` bash:no-line-numbers
ssh {custom alias}
```

### 别名远程文件管理

<CodeGroup>
  <CodeGroupItem title="sftp" active>

```bash:no-line-numbers
sftp {custom alias}
```

  </CodeGroupItem>

  <CodeGroupItem title="scp">

``` bash:no-line-numbers
scp /local/path/to/files.extension {username}@{custom alias}:/remote/path # 单个本地文件复制到远程服务器
scp -r /local/path/ {username}@{custom alias}:/remote/path/ #本地目录复制到远程服务器
```

  </CodeGroupItem>
</CodeGroup>

::: warning 说明

* `sftp`文件传输功能更多，且支持断点续传，通过`get`、`put`关键词命令实现`本地下载远程文件`以及`本地上传文件到服务器`;
* `sftp`交互终端可通过`pwd`和`lpwd`查看服务器和本地当前目录、通过`cd`和`lcd`切换服务器和本地当前目录(如果本地和服务器都切换到对应的目录，只需要`get`文件名或`put`文件名即可)
* `scp`相比`sftp`更轻量，无需调出交互终端再次输入`get`、`put`命令
:::
