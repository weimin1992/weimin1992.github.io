<template><div><h1 id="备份-表空间的导出、导入" tabindex="-1"><a class="header-anchor" href="#备份-表空间的导出、导入" aria-hidden="true">#</a> 备份（表空间的导出、导入）</h1>
<div class="custom-container warning"><p class="custom-container-title">代码说明</p>
<ul>
<li>变量使用 {} 包裹，真实环境需要根据实际情况进行修改！</li>
<li>在安装oracle环境的机器上打开终端：cmd（windows）或 zsh（mac）</li>
</ul>
</div>
<h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>exp <span class="token punctuation">{</span>username<span class="token punctuation">}</span>/<span class="token punctuation">{</span>password<span class="token punctuation">}</span>@<span class="token punctuation">{</span>ip<span class="token punctuation">}</span>/<span class="token punctuation">{</span>instance<span class="token punctuation">}</span> <span class="token assign-left variable">ownner</span><span class="token operator">=</span> <span class="token punctuation">{</span>tablespacename<span class="token punctuation">}</span> <span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token punctuation">{</span>yourpathto/filename.dmp<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>imp <span class="token punctuation">{</span>username<span class="token punctuation">}</span>/<span class="token punctuation">{</span>password<span class="token punctuation">}</span>@<span class="token punctuation">{</span>ip<span class="token punctuation">}</span>/<span class="token punctuation">{</span>instance<span class="token punctuation">}</span> <span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token punctuation">{</span>yourpathto/filename.dmp<span class="token punctuation">}</span> <span class="token assign-left variable">fromuser</span><span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
<span class="token assign-left variable">touser</span><span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span> <span class="token assign-left variable">ignore</span><span class="token operator">=</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


