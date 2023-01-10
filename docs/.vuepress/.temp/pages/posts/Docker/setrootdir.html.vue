<template><div><div class="custom-container warning"><p class="custom-container-title">注意事项</p>
<ul>
<li>修改根路径之前，需要检查是否有运行的容器会受到影响：比如<strong>Oracle</strong>、<strong>MySql</strong>等实例;</li>
<li>迁移前建议做好数据备份，迁移后要确保已运行实例不受影响的前提下再删除旧的目录。</li>
</ul>
</div>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">systemctl stop docker</span></span>
<span class="line"><span style="color: #D8DEE9FF">mkdir -p /home/lib/docker</span></span>
<span class="line"><span style="color: #D8DEE9FF">cp -R /var/lib/docker/</span><span style="color: #81A1C1">*</span><span style="color: #D8DEE9FF"> /home/lib/docker/</span></span>
<span class="line"><span style="color: #D8DEE9FF">vi /etc/docker/daemon.json</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>粘贴或者修改为如下键值</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">  </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">data-root</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">/home/lib/docker</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>再次启动Docker</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">systemctl daemon-reload</span></span>
<span class="line"><span style="color: #D8DEE9FF">systemctl restart docker</span></span>
<span class="line"><span style="color: #D8DEE9FF">systemctl </span><span style="color: #88C0D0">enable</span><span style="color: #D8DEE9FF"> docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查" tabindex="-1"><a class="header-anchor" href="#检查" aria-hidden="true">#</a> 检查</h2>
<ul>
<li>输入<code v-pre>docker info | grep -i root</code>检查路径修改是否生效，如下图所示：</li>
</ul>
<p><img src="https://cdn.porridge.fun/blog/docker/setrootdir/3.png$fix.water" alt="检查docker路径"></p>
<ul>
<li>检查无误后可输入<code v-pre>rm -rf /var/lib/docker</code>删除之前所有默认文件，删除成功后检查一下之前的docker镜像与实例是否存在以及正常运行。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">docker images -a</span></span>
<span class="line"><span style="color: #D8DEE9FF">docker ps -a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>最后再输入命令<code v-pre>df -h</code>检查一下是否解决根目录磁盘已用空间所占比例很高的问题（由95%降低到10%）</li>
</ul>
<p><img src="https://cdn.porridge.fun/blog/docker/setrootdir/4.png$fix.water" alt="检查磁盘空间"></p>
</div></template>


