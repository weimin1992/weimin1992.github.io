<template><div><div class="custom-container warning"><p class="custom-container-title">说明</p>
<ul>
<li>变量使用 {} 包裹，真实环境需要根据实际情况进行修改！</li>
<li>在安装oracle环境的机器上打开终端：cmd（windows）或 zsh（mac）。</li>
</ul>
</div>
<h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">exp {username}/{password}@{ip}/{instance} ownner= {tablespacename} file={yourpathto/filename.dmp}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">imp {username}/{password}@{ip}/{instance} file={yourpathto/filename.dmp} fromuser={username}</span></span>
<span class="line"><span style="color: #D8DEE9FF">touser={username} ignore=y</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


