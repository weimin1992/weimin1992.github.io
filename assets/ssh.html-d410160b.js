import{_ as i,M as t,p as d,q as r,N as a,U as l,a1 as c,Q as s,t as e}from"./framework-fb92cdbb.js";const p={},u=c(`<blockquote><p>远程Linux服务器的常规方式为使用<code>xshell</code>、<code>putty</code>等，通过可视化界面输入并记住账号、密码/密钥文件的方式登录远程服务器。但更推荐使用本机自带的<code>shell</code>来远程服务器，因为该方式： ✅ 不依赖第三方软件（xshell需要购买授权）；✅ 同样支持免密登录</p></blockquote><div class="custom-container warning"><p class="custom-container-title">说明</p><p>变量使用 {} 包裹，真实环境需要根据实际情况进行修改！</p></div><h2 id="本机操作" tabindex="-1"><a class="header-anchor" href="#本机操作" aria-hidden="true">#</a> 本机操作</h2><ul><li>生成ssh key公钥</li></ul><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">ssh-keygen -t rsa -C </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{email@example.com}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>上述命令会在本机<code>~/.ssh</code>目录下生成<code>id_rsa</code>与<code>id_rsa.pub</code>两个文件</p></blockquote><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">cat </span><span style="color:#81A1C1;">~</span><span style="color:#D8DEE9FF;">/.ssh/id_rsa.pub</span></span>
<span class="line"></span></code></pre></div><h2 id="复制本机公钥到服务器白名单中" tabindex="-1"><a class="header-anchor" href="#复制本机公钥到服务器白名单中" aria-hidden="true">#</a> 复制本机公钥到服务器白名单中</h2><blockquote><p>本机公钥生成后，可手动粘贴到服务器上或者使用<code>ssh-copy-id</code>命令自动配置远程服务器</p></blockquote>`,9),h=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki",style:{"background-color":"#2e3440ff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"cat "),s("span",{style:{color:"#81A1C1"}},"~"),s("span",{style:{color:"#D8DEE9FF"}},"/.ssh/id_rsa.pub     "),s("span",{style:{color:"#616E88"}},"#本机查看公钥")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"vi "),s("span",{style:{color:"#81A1C1"}},"~"),s("span",{style:{color:"#D8DEE9FF"}},"/.ssh/authorized_keys "),s("span",{style:{color:"#616E88"}},"#将上述公钥粘贴到服务器白名单配置文件中")]),e(`
`),s("span",{class:"line"})])])],-1),E=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki",style:{"background-color":"#2e3440ff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"ssh-copy-id "),s("span",{style:{color:"#ECEFF4"}},"["),s("span",{style:{color:"#D8DEE9FF"}},"OPTIONS"),s("span",{style:{color:"#ECEFF4"}},"]"),s("span",{style:{color:"#D8DEE9FF"}}," {username}@{ipHost}")]),e(`
`),s("span",{class:"line"})])])],-1),F=c(`<blockquote><p>自动配置后提示如下图所示表示配置成功并可以开始免密登陆</p></blockquote><p><img src="https://cdn.porridge.fun/blog/linux/ssh.png$fix.water" alt="自动配置验证"></p><h2 id="免密登录远程服务器" tabindex="-1"><a class="header-anchor" href="#免密登录远程服务器" aria-hidden="true">#</a> 免密登录远程服务器</h2><blockquote><p>远程命令</p></blockquote><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">ssh {username}@{ipHost}</span></span>
<span class="line"></span></code></pre></div><h2 id="别名配置" tabindex="-1"><a class="header-anchor" href="#别名配置" aria-hidden="true">#</a> 别名配置</h2><blockquote><p>实现免密登陆后，当有多台服务器需要运维的时候，建议使用别名来管理多服务器远程（使用ssh用户配置文件管理服务器远程会话）</p></blockquote><div class="custom-container warning"><p class="custom-container-title">说明</p><ul><li>用户配置文件: <code>~/.ssh/config</code></li><li>系统配置文件: <code>/etc/ssh/ssh_config</code></li></ul></div><h3 id="常用的配置项说明及示例" tabindex="-1"><a class="header-anchor" href="#常用的配置项说明及示例" aria-hidden="true">#</a> 常用的配置项说明及示例</h3>`,9),y=s("div",{class:"language-html line-numbers-mode","data-ext":"html"},[s("pre",{class:"shiki",style:{"background-color":"#2e3440ff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"Host                     #别名")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"HostName                 #主机名")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"Port                     #端口")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"User                     #用户名")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"IdentityFile             #密钥文件路径")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"IdentitiesOnly           #只接受ssh key登录")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"PreferedAuthentications  #强制使用public key验证")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),b=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki",style:{"background-color":"#2e3440ff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"Host {custom alias}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  HostName {ip}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  User {username}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  IdentityFile "),s("span",{style:{color:"#81A1C1"}},"~"),s("span",{style:{color:"#D8DEE9FF"}},"/.ssh/id_rsa")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=c(`<h3 id="别名远程" tabindex="-1"><a class="header-anchor" href="#别名远程" aria-hidden="true">#</a> 别名远程</h3><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">ssh {custom alias}</span></span>
<span class="line"></span></code></pre></div><h3 id="别名远程文件管理" tabindex="-1"><a class="header-anchor" href="#别名远程文件管理" aria-hidden="true">#</a> 别名远程文件管理</h3>`,3),m=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki",style:{"background-color":"#2e3440ff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"sftp {custom alias}")]),e(`
`),s("span",{class:"line"})])])],-1),D=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki",style:{"background-color":"#2e3440ff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"scp /local/path/to/files.extension {username}@{custom alias}:/remote/path "),s("span",{style:{color:"#616E88"}},"# 单个本地文件复制到远程服务器")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"scp -r /local/path/ {username}@{custom alias}:/remote/path/ "),s("span",{style:{color:"#616E88"}},"#本地目录复制到远程服务器")]),e(`
`),s("span",{class:"line"})])])],-1),_=c('<div class="custom-container warning"><p class="custom-container-title">说明</p><ul><li><code>sftp</code>文件传输功能更多，且支持断点续传，通过<code>get</code>、<code>put</code>关键词命令实现<code>本地下载远程文件</code>以及<code>本地上传文件到服务器</code>;</li><li><code>sftp</code>交互终端可通过<code>pwd</code>和<code>lpwd</code>查看服务器和本地当前目录、通过<code>cd</code>和<code>lcd</code>切换服务器和本地当前目录(如果本地和服务器都切换到对应的目录，只需要<code>get</code>文件名或<code>put</code>文件名即可)</li><li><code>scp</code>相比<code>sftp</code>更轻量，无需调出交互终端再次输入<code>get</code>、<code>put</code>命令</li></ul></div>',1);function g(v,k){const o=t("CodeGroupItem"),n=t("CodeGroup");return d(),r("div",null,[u,a(n,null,{default:l(()=>[a(o,{title:"手动粘贴"},{default:l(()=>[h]),_:1}),a(o,{title:"自动配置（推荐）",active:""},{default:l(()=>[E]),_:1})]),_:1}),F,a(n,null,{default:l(()=>[a(o,{title:"配置项说明",active:""},{default:l(()=>[y]),_:1}),a(o,{title:"示例"},{default:l(()=>[b]),_:1})]),_:1}),f,a(n,null,{default:l(()=>[a(o,{title:"sftp",active:""},{default:l(()=>[m]),_:1}),a(o,{title:"scp"},{default:l(()=>[D]),_:1})]),_:1}),_])}const C=i(p,[["render",g],["__file","ssh.html.vue"]]);export{C as default};
