<template><div><h1 id="docker根路径-data-root-修改" tabindex="-1"><a class="header-anchor" href="#docker根路径-data-root-修改" aria-hidden="true">#</a> Docker根路径（data-root）修改</h1>
<ul>
<li><a href="#%E8%83%8C%E6%99%AF">背景</a></li>
<li><a href="#%E6%93%8D%E4%BD%9C">操作</a></li>
<li><a href="#%E6%A3%80%E6%9F%A5">检查</a></li>
</ul>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<ul>
<li>输入命令<code v-pre>df -h</code>查看系统可使用的磁盘空间发现<code v-pre>/dev/mapper/centos-root</code>根目录磁盘已用空间所占比例很高。</li>
</ul>
<p><img src="https://cdn.porridge.fun/blog/docker/setrootdir/0.png$fix.water" alt="磁盘空间"></p>
<ul>
<li>cd到<code v-pre>/</code>目录后输入命令<code v-pre>find . -type f -size +800M  -print0 | xargs -0 du -h | sort -nr</code>查找大于800M的大文件，如下图所示：</li>
</ul>
<p><img src="https://cdn.porridge.fun/blog/docker/setrootdir/2.png$fix.water" alt="查找大文件"></p>
<ul>
<li>发现很多大文件存在于<code v-pre>/var/lib/docker</code>下，而该目录为Docker默认保存数据的目录，因此考虑将Docker默认保存数据的目录迁移到磁盘空间较多的<code v-pre>/home</code>下</li>
</ul>
<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2>
<blockquote>
<p>进行如下操作：停掉Docker服务后创建用于存放docker数据的<code v-pre>/home/lib/docker</code>目录，再将默认的<code v-pre>var/lib/docker</code>下所有文件复制到新建的目录下，编辑Docker的<code v-pre>daemon.json</code>文件(若无则创建)。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl stop <span class="token function">docker</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lib/docker
<span class="token function">cp</span> <span class="token parameter variable">-R</span> /var/lib/docker/* /home/lib/docker/
<span class="token function">vi</span> /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>粘贴或者修改为如下键值</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data-root"</span><span class="token operator">:</span><span class="token string">"/home/lib/docker"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>再次启动Docker</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查" tabindex="-1"><a class="header-anchor" href="#检查" aria-hidden="true">#</a> 检查</h2>
<ul>
<li>输入<code v-pre>docker info | grep -i root</code>检查路径修改是否生效，如下图所示：</li>
</ul>
<p><img src="https://cdn.porridge.fun/blog/docker/setrootdir/3.png$fix.water" alt="检查docker路径"></p>
<ul>
<li>检查无误后可输入<code v-pre>rm -rf /var/lib/docker</code>删除之前所有默认文件，删除成功后检查一下之前的docker镜像与实例是否存在以及正常运行。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images <span class="token parameter variable">-a</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>最后再输入命令<code v-pre>df -h</code>检查一下是否解决根目录磁盘已用空间所占比例很高的问题（由95%降低到10%）</li>
</ul>
<p><img src="https://cdn.porridge.fun/blog/docker/setrootdir/4.png$fix.water" alt="检查磁盘空间"></p>
</div></template>


