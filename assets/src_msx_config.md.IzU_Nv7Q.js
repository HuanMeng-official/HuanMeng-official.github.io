import{_ as i,c as a,o as n,ae as l}from"./chunks/framework.U1Gow_7P.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{"prev":{"text":"安装与使用","link":"src/msx/install"},"next":false},"headers":[],"relativePath":"src/msx/config.md","filePath":"src/msx/config.md"}'),p={name:"src/msx/config.md"};function e(h,s,t,k,r,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h2 id="编辑config-yml" tabindex="-1">编辑config.yml <a class="header-anchor" href="#编辑config-yml" aria-label="Permalink to &quot;编辑config.yml&quot;">​</a></h2><p>找到插件目录中的config.yml文件。使用任意编辑器打开。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is the MengServerX configuration file</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这是MengServerX的配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Plugin&#39;s language (zh, en, fr, es)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 插件语言（汉语&#39;zh&#39;，英语&#39;en&#39;，法语&#39;fr&#39;，西班牙语&#39;es&#39;）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Modify the format of messages sent by players</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改玩家发送的消息格式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ChatFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to enable server welcome</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启服务器欢迎</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">JoinTip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to enable player exit reminders</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启玩家退出提醒</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">QuitTip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Specifies whether to enable the whitelist</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启白名单</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">WhiteList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This feature is KeepInventory for Minecraft</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启保留物品栏</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">KeepInventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to stop Creeper from exploding and destroying terrain</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否阻止苦力怕爆炸摧毁地形</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AntiCreeperBoom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to disable farmland trample</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否禁用耕地践踏</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AntiTrample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to turn on Drop Cleanup</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启掉落物清理</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DropCleaner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Dropped items are cleared at regular intervals</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 掉落物清理时常间隔</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">CleanTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to enable the scoreboard</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否启用挖掘榜</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Board</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Scoreboard name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 挖掘榜名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">BoardName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Board&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OpenAI API&#39;s configuration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OpenAI API 配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">openai</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # API Key</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 密钥</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  api_key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Your-OpenAI-API-Key&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # API&#39;s address</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # API 地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  api_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://api.openai.com/v1/chat/completions&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Model&#39;s name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 模型名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gpt-3.5-turbo&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # System prompt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 系统提示词</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  system_prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你是一个Minecraft AI助手，帮助玩家解答问题。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Prevent unwhitelisted players from logging in prompts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 阻止无白名单玩家登录提示词</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">NotAllow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c您并没有白名单，请联系服务器管理员&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A notification sent when the player whitelist is revoked by an administrator</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家白名单被管理员撤销时发送的提示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Repeal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c您因违反服务器规则被撤销了白名单&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A list of player whitelists</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家白名单列表</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span></code></pre></div><h2 id="保存修改" tabindex="-1">保存修改 <a class="header-anchor" href="#保存修改" aria-label="Permalink to &quot;保存修改&quot;">​</a></h2><p>修改完成后按下 Ctrl + S 或其他快捷键保存文件。</p>`,5)]))}const A=i(p,[["render",e]]);export{y as __pageData,A as default};
