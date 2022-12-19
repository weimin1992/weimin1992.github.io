<template><div><h1 id="docker-compose构建wordpress站点" tabindex="-1"><a class="header-anchor" href="#docker-compose构建wordpress站点" aria-hidden="true">#</a> docker-compose构建wordpress站点</h1>
<blockquote>
<p>记录使用docker-compose搭建wordpress站点的过程，<a href="https://zhuanlan.zhihu.com/p/462786002" target="_blank" rel="noopener noreferrer">参考地址<ExternalLinkIcon/></a></p>
</blockquote>
<ul>
<li><a href="#%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83">服务器环境</a></li>
<li><a href="#docker%E7%8E%AF%E5%A2%83">docker环境</a></li>
<li><a href="#docker-compose%E9%85%8D%E7%BD%AE">docker-compose配置</a></li>
<li><a href="#nginx%E9%A2%84%E9%85%8D%E7%BD%AE">nginx预配置</a></li>
<li><a href="#%E5%90%AF%E5%8A%A8%E5%AE%B9%E5%99%A8">启动容器</a></li>
</ul>
<hr>
<h2 id="服务器环境" tabindex="-1"><a class="header-anchor" href="#服务器环境" aria-hidden="true">#</a> 服务器环境</h2>
<ul>
<li>
<p><strong>云服务器</strong>  腾讯云主机</p>
</li>
<li>
<p><strong>操作系统</strong>  Ubuntu Server 20.04 LTS</p>
</li>
</ul>
<hr>
<h2 id="docker环境" tabindex="-1"><a class="header-anchor" href="#docker环境" aria-hidden="true">#</a> docker环境</h2>
<ul>
<li>
<p><strong>Docker Engine - Community</strong>  20.10.14</p>
</li>
<li>
<p><strong>Docker Compose -</strong> v2.2.3</p>
</li>
</ul>
<hr>
<h2 id="docker-compose配置" tabindex="-1"><a class="header-anchor" href="#docker-compose配置" aria-hidden="true">#</a> docker-compose配置</h2>
<ul>
<li>目录准备</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> wordpress <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> wordpress <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> docker-compose.yml <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> volumes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>在shell中输入以上命令：创建wordpress工作目录，并在其中创建docker-compose.yml(用于启动容器集群)，创建一个volumes目录用于容器配置文件挂载到宿主机</p>
</blockquote>
<ul>
<li>创建并编辑docker-compose.yml</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>粘贴如下配置内容，镜像包括 <em>mysql</em>、<em>phpmyadmin</em>、<em>wordpress</em>、<em>nginx</em>。其中<em>phpmyadmin</em>为数据库管理软件，不是必须的。</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.9"</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
 <span class="token key atrule">db</span><span class="token punctuation">:</span>
   <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
   <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> ./volumes/database<span class="token punctuation">:</span>/var/lib/mysql
   <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
   <span class="token key atrule">environment</span><span class="token punctuation">:</span>
     <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> password
     <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> wordpress
     <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> wordpress
     <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> password
 <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span>
   <span class="token key atrule">image</span><span class="token punctuation">:</span> phpmyadmin
   <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> db
   <span class="token key atrule">ports</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token string">"8081:80"</span>
   <span class="token key atrule">environment</span><span class="token punctuation">:</span>
     <span class="token key atrule">PMA_HOST</span><span class="token punctuation">:</span> db
 <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
   <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> db
   <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress
   <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> ./volumes/html<span class="token punctuation">:</span>/var/www/html
   <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
   <span class="token key atrule">environment</span><span class="token punctuation">:</span>
     <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> db
     <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> root
     <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> password
     <span class="token key atrule">WORDPRESS_DB_NAME</span><span class="token punctuation">:</span> wordpress
 <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
   <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> wordpress
   <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
   <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> ./volumes/nginx/html<span class="token punctuation">:</span>/usr/share/nginx/html
     <span class="token punctuation">-</span> ./volumes/nginx/conf.d<span class="token punctuation">:</span>/etc/nginx/conf.d
   <span class="token key atrule">links</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> wordpress
   <span class="token key atrule">ports</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token string">"80:80"</span>
     <span class="token punctuation">-</span> <span class="token string">"443:443"</span>
   <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="nginx预配置" tabindex="-1"><a class="header-anchor" href="#nginx预配置" aria-hidden="true">#</a> nginx预配置</h2>
<blockquote>
<p>腾讯云有免费一年的SSL证书，申请成功后将压缩包上传到服务器中，并配置已好nginx（<a href="https://cloud.tencent.com/document/product/400/35244" target="_blank" rel="noopener noreferrer">腾讯云文档-nginx配置ssl<ExternalLinkIcon/></a>）</p>
</blockquote>
<ol>
<li>
<p>volumes目录下创建nginx配置目录及文件、同时创建存放SSL的目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> nginx <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> nginx <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> conf.d html <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> conf.d <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> certs <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>证书文件上传并解压到刚刚创建的certs目录中</p>
</li>
<li>
<p>配置default.conf,以下为参照：</p>
</li>
</ol>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">listen</span>  [::]:80</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>  domain.exapmle.com</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">1024M</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">keepalive_timeout</span> <span class="token number">5</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> domain.exapmle.com</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/nginx/conf.d/certs/证书名称.crt</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/conf.d/certs/证书名称.key</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">5m</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_ciphers</span> ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">1024M</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://wordpress</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_http_version</span>    1.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_cache_bypass</span>    <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade             <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection          <span class="token string">"upgrade"</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host                <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP           <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For     <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto   <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Host    <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Port    <span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器" aria-hidden="true">#</a> 启动容器</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>运行以上命令后完成服务器端的配置，首先运行 <code v-pre>docker ps -a</code> 验证 <em>mysql</em>、<em>phpmyadmin</em>、<em>wordpress</em>、<em>nginx</em>容器是否均成功启动。若均处于up状态，再通过访问站点开始配置wordpress！</p>
</blockquote>
</div></template>


