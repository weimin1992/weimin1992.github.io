<template><div><blockquote>
<p>与Windows下可视化操作方式不同，Linux操作系统通过shell（终端）进行操作交互，这种方式需要运维人员熟练掌握基础命令，此文基于上述目的总结Linux服务器运维过程中常用的命令，🚀 此文将持续更新...</p>
</blockquote>
<div class="custom-container warning"><p class="custom-container-title">说明</p>
<ul>
<li>变量使用 {} 包裹，真实环境需要根据实际情况进行修改！</li>
<li>Linux有许多发行分支，本文目前只针对较为常用的Ubuntu和CentOS。</li>
</ul>
</div>
<hr>
<h2 id="远程" tabindex="-1"><a class="header-anchor" href="#远程" aria-hidden="true">#</a> 远程</h2>
<p>分为<strong>用户密码</strong>与<strong>密钥文件</strong>两种方式</p>
<CodeGroup>
  <CodeGroupItem title="用户密码" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">sudo ssh {username}@{ipHost}</span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="密钥文件">
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">sudo ssh -i {secretKeyFile} {username}@{ipHost}</span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="用户组" tabindex="-1"><a class="header-anchor" href="#用户组" aria-hidden="true">#</a> 用户组</h2>
<h3 id="用户切换" tabindex="-1"><a class="header-anchor" href="#用户切换" aria-hidden="true">#</a> 用户切换</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">su {username}   </span><span style="color: #616E88">## 执行后输入密码</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="管理员权限" tabindex="-1"><a class="header-anchor" href="#管理员权限" aria-hidden="true">#</a> 管理员权限</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>在非管理员账号(root)下，某些命令会提示权限不足，
通过加<code v-pre>sudo</code>前缀即可临时使用管理员权限执行命令</p>
</div>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">sudo {command}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="软件" tabindex="-1"><a class="header-anchor" href="#软件" aria-hidden="true">#</a> 软件</h2>
<h3 id="包管理器" tabindex="-1"><a class="header-anchor" href="#包管理器" aria-hidden="true">#</a> 包管理器</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>Ubuntu默认使用deb包管理器（<code v-pre>apt-get</code>），CentOS默认使用rpm包管理器（<code v-pre>yum</code>），常用命令如下</p>
</div>
<CodeGroup>
  <CodeGroupItem title="Ubuntu" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">apt-get </span><span style="color: #ECEFF4">[</span><span style="color: #D8DEE9FF">options</span><span style="color: #ECEFF4">]</span><span style="color: #D8DEE9FF"> </span><span style="color: #88C0D0">command</span><span style="color: #D8DEE9FF">   </span><span style="color: #616E88">## 基本语法</span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="CentOS">
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">yum </span><span style="color: #ECEFF4">[</span><span style="color: #D8DEE9FF">options</span><span style="color: #ECEFF4">]</span><span style="color: #D8DEE9FF"> </span><span style="color: #88C0D0">command</span><span style="color: #D8DEE9FF">   </span><span style="color: #616E88">## 基本语法</span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
</CodeGroup>
<h3 id="软件维护常用命令" tabindex="-1"><a class="header-anchor" href="#软件维护常用命令" aria-hidden="true">#</a> 软件维护常用命令</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>软件的安装分为：包管理器在线安装、源码安装、二进制文件安装。
若有互联网环境，推荐使用<strong>包管理器在线安装</strong></p>
</div>
<CodeGroup>
  <CodeGroupItem title="Ubuntu" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">man apt-get                                       </span><span style="color: #616E88">## 查看命令详细手册</span></span>
<span class="line"><span style="color: #D8DEE9FF">apt-get -h                                        </span><span style="color: #616E88">## 查看常用命令简略说明</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo vim /etc/apt/sources.list                    </span><span style="color: #616E88">## 编辑软件源站点</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo apt-get update                               </span><span style="color: #616E88">## 根据/etc/apt/sources.list文件更新本地索引文件</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo apt list --upgradable                        </span><span style="color: #616E88">## 查看哪些软件可以更新</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo apt-get upgrade                              </span><span style="color: #616E88">## 执行软件更新</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo apt-get dist-upgrade                         </span><span style="color: #616E88">## 在执行软件更新的基础上智能处理软件依赖项</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo apt-get clean </span><span style="color: #81A1C1">&amp;&amp;</span><span style="color: #D8DEE9FF"> sudo apt-get autoclean      </span><span style="color: #616E88">## 清理无用的包</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo apt-get install {packagename}                </span><span style="color: #616E88">## 安装包/软件</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo apt-get remove {packagename}                 </span><span style="color: #616E88">## 卸载包/软件</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo apt-get update {packagename}                 </span><span style="color: #616E88">## 更新包/软件</span></span>
<span class="line"><span style="color: #D8DEE9FF">...</span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="CentOS">
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">man yum                                           </span><span style="color: #616E88">## 查看命令详细手册</span></span>
<span class="line"><span style="color: #D8DEE9FF">yum -h                                            </span><span style="color: #616E88">## 查看常用命令简略说明</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum repolist                                 </span><span style="color: #616E88">## 列出所有的yum repo</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo vim /etc/yum.repos.d/{file}.repo         </span><span style="color: #616E88">## 编辑软件源站点</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum -y update                                </span><span style="color: #616E88">## 升级所有包、同时升级软件和系统内核</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum -y upgrade                               </span><span style="color: #616E88">## 只升级所有包、不升级软件和系统内核</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum list                                     </span><span style="color: #616E88">## 列出所有可安装的包</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum list installed                           </span><span style="color: #616E88">## 列出所有已安装的包</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum info {packagename}                       </span><span style="color: #616E88">## 查看包信息</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum check-update                             </span><span style="color: #616E88">## 检查系统中需要更新的包</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum search {packagename}                     </span><span style="color: #616E88">## 查找包</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum install {packagename}                    </span><span style="color: #616E88">## 安装包</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum remove {packagename}                     </span><span style="color: #616E88">## 卸载包</span></span>
<span class="line"><span style="color: #D8DEE9FF">sudo yum clean                                    </span><span style="color: #616E88">## 清除使用yum生成的缓存文件</span></span>
<span class="line"><span style="color: #D8DEE9FF">...</span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h2>
<blockquote>
<p>Windows操作系统下文件夹/文件常用的操作包括：跳转、创建、删除、批量删除、复制、剪切、重命名等。Linux下文件操作相关命令如下</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #88C0D0">pwd</span><span style="color: #D8DEE9FF">                                   </span><span style="color: #616E88">## 显示当前绝对路径</span></span>
<span class="line"><span style="color: #88C0D0">cd</span><span style="color: #D8DEE9FF"> {path}                             </span><span style="color: #616E88">## 转到目标路径（支持根目录绝对路径以及当前目录的相对路径）</span></span>
<span class="line"><span style="color: #88C0D0">cd</span><span style="color: #D8DEE9FF"> ..                                 </span><span style="color: #616E88">## 转到当前路径的父级目录</span></span>
<span class="line"><span style="color: #D8DEE9FF">mkdir {folder}                        </span><span style="color: #616E88">## 创建文件夹</span></span>
<span class="line"><span style="color: #D8DEE9FF">rmdir {folder}                        </span><span style="color: #616E88">## 删除文件夹</span></span>
<span class="line"><span style="color: #D8DEE9FF">mkdir -p {pathto/folder}              </span><span style="color: #616E88">## 创建多级目录</span></span>
<span class="line"><span style="color: #D8DEE9FF">rmdir -p {pathto/folder}              </span><span style="color: #616E88">## 删除多级目录</span></span>
<span class="line"><span style="color: #D8DEE9FF">touch {file}                          </span><span style="color: #616E88">## 创建文件</span></span>
<span class="line"><span style="color: #D8DEE9FF">rm </span><span style="color: #ECEFF4">[</span><span style="color: #D8DEE9FF">options</span><span style="color: #ECEFF4">]</span><span style="color: #D8DEE9FF"> {file or folder}         </span><span style="color: #616E88">## 删除文件/文件夹（需要谨慎操作）</span></span>
<span class="line"><span style="color: #D8DEE9FF">cp </span><span style="color: #ECEFF4">[</span><span style="color: #D8DEE9FF">options</span><span style="color: #ECEFF4">]</span><span style="color: #D8DEE9FF"> {soucefile or sourcefolder} {destfile or destfolder} </span><span style="color: #616E88">## 复制文件/文件夹</span></span>
<span class="line"><span style="color: #D8DEE9FF">mv {soucefile} {destfile}                 </span><span style="color: #616E88">## 重命名文件</span></span>
<span class="line"><span style="color: #D8DEE9FF">mv {soucefile} {pathto/folder}            </span><span style="color: #616E88">## 将文件移动到目标路径</span></span>
<span class="line"><span style="color: #D8DEE9FF">mv {soucefolder} {destfolder}     </span><span style="color: #616E88">## 当前路径若存在destfolder则将soucefolder移动到destfolder文件夹，若不存在则将soucefolder重命名为destfolder</span></span>
<span class="line"><span style="color: #D8DEE9FF">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


