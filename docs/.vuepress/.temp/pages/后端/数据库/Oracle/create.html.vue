<template><div><h1 id="创建表空间" tabindex="-1"><a class="header-anchor" href="#创建表空间" aria-hidden="true">#</a> 创建表空间</h1>
<div class="custom-container warning"><p class="custom-container-title">代码说明</p>
<ul>
<li>变量使用 {} 包裹，真实环境需要根据实际情况进行修改！</li>
<li>使用SQLPlus或其他客户端工具,建议以sysdba身份登录</li>
</ul>
</div>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 创建表空间</span>
<span class="token keyword">create</span> tablaspace {tablespacename} datafile <span class="token string">'storePath/filename.dbf'</span> size <span class="token number">50</span>M autoextend <span class="token keyword">on</span> <span class="token keyword">next</span> <span class="token number">50</span>M maxsize <span class="token number">500</span>M<span class="token punctuation">;</span>
<span class="token comment">-- 创建用户</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> {username} identified <span class="token keyword">by</span> {tablespacename} <span class="token keyword">default</span> tablaspace {password}<span class="token punctuation">;</span>
<span class="token comment">-- 权限配置</span>
<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span>resource <span class="token keyword">to</span> {username}<span class="token punctuation">;</span>
<span class="token comment">-- 管理员权限配置</span>
<span class="token keyword">grant</span> dba <span class="token keyword">to</span> {username}<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


