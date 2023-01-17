--- 
title: docker-compose构建wordpress站点
prev:
  text: Docker根路径（data-root）修改
  link: /posts/docker/setrootdir

---

> 记录使用docker-compose搭建wordpress站点的过程（站点目前已使用Vuepress重新构建)。

-------------

## 服务器环境

- **云服务器**  腾讯云主机

- **操作系统**  Ubuntu Server 20.04 LTS

-------------

## docker环境

- **Docker Engine - Community**  20.10.14

- **Docker Compose -** v2.2.3

-------------

## docker-compose配置

- 目录准备

``` bash
mkdir wordpress && cd wordpress && touch docker-compose.yml && mkdir volumes
```

>在shell中输入以上命令：创建wordpress工作目录，并在其中创建docker-compose.yml(用于启动容器集群)，创建一个volumes目录用于容器配置文件挂载到宿主机

- 创建并编辑docker-compose.yml

``` bash
sudo vi docker-compose.yml
```

 >粘贴如下配置内容，镜像包括 *mysql*、*phpmyadmin*、*wordpress*、*nginx*。其中*phpmyadmin*为数据库管理软件，不是必须的。

 ```yml
version: "3.9"
services:
  db:
    image: mysql
    volumes:
      - ./volumes/database:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: password
  phpmyadmin:
    image: phpmyadmin
    depends_on:
      - db
    ports:
      - "8081:80"
    environment:
      PMA_HOST: db
  wordpress:
    depends_on:
      - db
    image: wordpress
    volumes:
      - ./volumes/html:/var/www/html
    restart: always
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: password
      WORDPRESS_DB_NAME: wordpress
  nginx:
    depends_on:
      - wordpress
    image: nginx
    volumes:
      - ./volumes/nginx/html:/usr/share/nginx/html
      - ./volumes/nginx/conf.d:/etc/nginx/conf.d
    links:
      - wordpress
    ports:
      - "80:80"
      - "443:443"
    restart: always
 ```

-------------

## nginx预配置

>腾讯云有免费一年的SSL证书，申请成功后将压缩包上传到服务器中，并配置已好nginx（[腾讯云文档-nginx配置ssl](https://cloud.tencent.com/document/product/400/35244)）

1. volumes目录下创建nginx配置目录及文件、同时创建存放SSL的目录

    ```shell
    mkdir nginx && cd nginx && mkdir conf.d html && cd conf.d && mkdir certs && touch default.conf
    ```

2. 证书文件上传并解压到刚刚创建的certs目录中

3. 配置default.conf,以下为参照：

``` nginx
server {
  listen       80;
  listen  [::]:80;
  server_name  domain.exapmle.com;
  client_max_body_size 1024M;
  sendfile on;
  location / {
    return 301 https://$host$request_uri;
  }
}
server {
  listen 443 ssl;
  server_tokens off;
  keepalive_timeout 5;
  root /usr/share/nginx/html;
  index index.html;
  server_name domain.exapmle.com;
  ssl_certificate /etc/nginx/conf.d/certs/证书名称.crt;
  ssl_certificate_key /etc/nginx/conf.d/certs/证书名称.key;
  ssl_session_timeout 5m;
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
  ssl_prefer_server_ciphers on;
  client_max_body_size 1024M;
  sendfile on;
  location / {
    proxy_pass http://wordpress;
    proxy_http_version    1.1;
    proxy_cache_bypass    $http_upgrade;
    proxy_set_header Upgrade             $http_upgrade;
    proxy_set_header Connection          "upgrade";
    proxy_set_header Host                $host;
    proxy_set_header X-Real-IP           $remote_addr;
    proxy_set_header X-Forwarded-For     $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto   $scheme;
    proxy_set_header X-Forwarded-Host    $host;
    proxy_set_header X-Forwarded-Port    $server_port;
  }
}
```

-------------

## 启动容器

```shell
docker-compose up -d
```

> 运行以上命令后完成服务器端的配置，首先运行 `docker ps -a` 验证 *mysql*、*phpmyadmin*、*wordpress*、*nginx*容器是否均成功启动。若均处于up状态，再通过访问站点开始配置wordpress！

-------------

[参考地址](https://zhuanlan.zhihu.com/p/462786002)
