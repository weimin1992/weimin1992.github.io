<template><div><blockquote>
<p>记录使用docker-compose搭建wordpress站点的过程（站点目前已使用Vuepress重新构建)，<a href="https://zhuanlan.zhihu.com/p/462786002" target="_blank" rel="noopener noreferrer">参考地址<ExternalLinkIcon/></a></p>
</blockquote>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">mkdir wordpress </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> </span><span style="color: #88C0D0">cd</span><span style="color: #D8DEE9FF"> wordpress </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> touch docker-compose.yml </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> mkdir volumes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>在shell中输入以上命令：创建wordpress工作目录，并在其中创建docker-compose.yml(用于启动容器集群)，创建一个volumes目录用于容器配置文件挂载到宿主机</p>
</blockquote>
<ul>
<li>创建并编辑docker-compose.yml</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">sudo vi docker-compose.yml</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>粘贴如下配置内容，镜像包括 <em>mysql</em>、<em>phpmyadmin</em>、<em>wordpress</em>、<em>nginx</em>。其中<em>phpmyadmin</em>为数据库管理软件，不是必须的。</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #8FBCBB">version</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">3.9</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #8FBCBB">services</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #8FBCBB">db</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">image</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">mysql</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">volumes</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">./volumes/database:/var/lib/mysql</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">restart</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">always</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">environment</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">MYSQL_ROOT_PASSWORD</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">password</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">MYSQL_DATABASE</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">wordpress</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">MYSQL_USER</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">wordpress</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">MYSQL_PASSWORD</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">password</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #8FBCBB">phpmyadmin</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">image</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">phpmyadmin</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">depends_on</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">db</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">ports</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">8081:80</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">environment</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">PMA_HOST</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">db</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #8FBCBB">wordpress</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">depends_on</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">db</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">image</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">wordpress</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">volumes</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">./volumes/html:/var/www/html</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">restart</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">always</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">environment</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">WORDPRESS_DB_HOST</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">db</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">WORDPRESS_DB_USER</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">root</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">WORDPRESS_DB_PASSWORD</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">password</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #8FBCBB">WORDPRESS_DB_NAME</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">wordpress</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #8FBCBB">nginx</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">depends_on</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">wordpress</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">image</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">nginx</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">volumes</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">./volumes/nginx/html:/usr/share/nginx/html</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">./volumes/nginx/conf.d:/etc/nginx/conf.d</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">links</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">wordpress</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">ports</span><span style="color: #ECEFF4">:</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">80:80</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">     </span><span style="color: #ECEFF4">-</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">443:443</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #8FBCBB">restart</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">always</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="nginx预配置" tabindex="-1"><a class="header-anchor" href="#nginx预配置" aria-hidden="true">#</a> nginx预配置</h2>
<blockquote>
<p>腾讯云有免费一年的SSL证书，申请成功后将压缩包上传到服务器中，并配置已好nginx（<a href="https://cloud.tencent.com/document/product/400/35244" target="_blank" rel="noopener noreferrer">腾讯云文档-nginx配置ssl<ExternalLinkIcon/></a>）</p>
</blockquote>
<ol>
<li>
<p>volumes目录下创建nginx配置目录及文件、同时创建存放SSL的目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">mkdir nginx </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> </span><span style="color: #88C0D0">cd</span><span style="color: #D8DEE9FF"> nginx </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> mkdir conf.d html </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> </span><span style="color: #88C0D0">cd</span><span style="color: #D8DEE9FF"> conf.d </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> mkdir certs </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> touch default.conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>证书文件上传并解压到刚刚创建的certs目录中</p>
</li>
<li>
<p>配置default.conf,以下为参照：</p>
</li>
</ol>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #81A1C1">server</span><span style="color: #D8DEE9FF"> {</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> listen </span><span style="color: #D8DEE9FF">      </span><span style="color: #B48EAD">80</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> listen </span><span style="color: #D8DEE9FF"> [::]:80</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> server_name </span><span style="color: #D8DEE9FF"> domain.exapmle.com</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> client_max_body_size </span><span style="color: #D8DEE9FF">1024M</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> sendfile </span><span style="color: #D8DEE9FF">on</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">  </span><span style="color: #81A1C1">location</span><span style="color: #D8DEE9FF"> / {</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #81A1C1">return</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">301</span><span style="color: #D8DEE9FF"> https://</span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">host</span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">request_uri</span><span style="color: #D8DEE9FF">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">  }</span></span>
<span class="line"><span style="color: #D8DEE9FF">}</span></span>
<span class="line"><span style="color: #81A1C1">server</span><span style="color: #D8DEE9FF"> {</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> listen </span><span style="color: #D8DEE9FF">443 ssl</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> server_tokens </span><span style="color: #D8DEE9FF">off</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> keepalive_timeout </span><span style="color: #D8DEE9FF">5</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> root </span><span style="color: #D8DEE9FF">/usr/share/nginx/html</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> index </span><span style="color: #D8DEE9FF">index.html</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> server_name </span><span style="color: #D8DEE9FF">domain.exapmle.com</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> ssl_certificate </span><span style="color: #D8DEE9FF">/etc/nginx/conf.d/certs/证书名称.crt</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> ssl_certificate_key </span><span style="color: #D8DEE9FF">/etc/nginx/conf.d/certs/证书名称.key</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> ssl_session_timeout </span><span style="color: #D8DEE9FF">5m</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> ssl_protocols </span><span style="color: #D8DEE9FF">TLSv1.2 TLSv1.3</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> ssl_ciphers </span><span style="color: #D8DEE9FF">ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> ssl_prefer_server_ciphers </span><span style="color: #D8DEE9FF">on</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> client_max_body_size </span><span style="color: #D8DEE9FF">1024M</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1"> sendfile </span><span style="color: #D8DEE9FF">on</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">  </span><span style="color: #81A1C1">location</span><span style="color: #D8DEE9FF"> / {</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_pass </span><span style="color: #D8DEE9FF">http://wordpress</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_http_version </span><span style="color: #D8DEE9FF">   </span><span style="color: #B48EAD">1.1</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_cache_bypass </span><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">http_upgrade</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_set_header </span><span style="color: #D8DEE9FF">Upgrade             </span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">http_upgrade</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_set_header </span><span style="color: #D8DEE9FF">Connection          </span><span style="color: #A3BE8C">&quot;upgrade&quot;</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_set_header </span><span style="color: #D8DEE9FF">Host                </span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">host</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_set_header </span><span style="color: #D8DEE9FF">X-Real-IP           </span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">remote_addr</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_set_header </span><span style="color: #D8DEE9FF">X-Forwarded-For     </span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">proxy_add_x_forwarded_for</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_set_header </span><span style="color: #D8DEE9FF">X-Forwarded-Proto   </span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">scheme</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_set_header </span><span style="color: #D8DEE9FF">X-Forwarded-Host    </span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">host</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">   </span><span style="color: #81A1C1"> proxy_set_header </span><span style="color: #D8DEE9FF">X-Forwarded-Port    </span><span style="color: #81A1C1">$</span><span style="color: #D8DEE9">server_port</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #D8DEE9FF">  }</span></span>
<span class="line"><span style="color: #D8DEE9FF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器" aria-hidden="true">#</a> 启动容器</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">docker-compose up -d</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>运行以上命令后完成服务器端的配置，首先运行 <code v-pre>docker ps -a</code> 验证 <em>mysql</em>、<em>phpmyadmin</em>、<em>wordpress</em>、<em>nginx</em>容器是否均成功启动。若均处于up状态，再通过访问站点开始配置wordpress！</p>
</blockquote>
</div></template>


