<template><div><h1 id="创建表空间" tabindex="-1"><a class="header-anchor" href="#创建表空间" aria-hidden="true">#</a> 创建表空间</h1>
<div class="custom-container warning"><p class="custom-container-title">代码说明</p>
<ul>
<li>变量使用 {} 包裹，真实环境需要根据实际情况进行修改！</li>
<li>使用SQLPlus或其他客户端工具,建议以sysdba身份登录</li>
</ul>
</div>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #616E88">-- 创建表空间</span></span>
<span class="line"><span style="color: #81A1C1">create</span><span style="color: #D8DEE9FF"> tablaspace {tablespacename} datafile </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">storePath/filename.dbf</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> size 50M autoextend </span><span style="color: #81A1C1">on</span><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1">next</span><span style="color: #D8DEE9FF"> 50M maxsize 500M;</span></span>
<span class="line"><span style="color: #616E88">-- 创建用户</span></span>
<span class="line"><span style="color: #81A1C1">create</span><span style="color: #D8DEE9FF"> user {username} identified </span><span style="color: #81A1C1">by</span><span style="color: #D8DEE9FF"> {tablespacename} </span><span style="color: #81A1C1">default</span><span style="color: #D8DEE9FF"> tablaspace {</span><span style="color: #81A1C1">password</span><span style="color: #D8DEE9FF">};</span></span>
<span class="line"><span style="color: #616E88">-- 权限配置</span></span>
<span class="line"><span style="color: #81A1C1">grant</span><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1">connect</span><span style="color: #D8DEE9FF">,</span><span style="color: #81A1C1">resource</span><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1">to</span><span style="color: #D8DEE9FF"> {username};</span></span>
<span class="line"><span style="color: #616E88">-- 管理员权限配置</span></span>
<span class="line"><span style="color: #81A1C1">grant</span><span style="color: #D8DEE9FF"> dba </span><span style="color: #81A1C1">to</span><span style="color: #D8DEE9FF"> {username}; </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


