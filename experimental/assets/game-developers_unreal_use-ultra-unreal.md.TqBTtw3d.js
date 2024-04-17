import{_ as a,c as e,o as s,N as t}from"./chunks/framework.DlKUEHLQ.js";const g=JSON.parse('{"title":"Using the Ultra Unreal Subsystem","description":"","frontmatter":{"title":"Using the Ultra Unreal Subsystem","outline":[0,5],"order":5},"headers":[],"relativePath":"game-developers/unreal/use-ultra-unreal.md","filePath":"game-developers/unreal/use-ultra-unreal.md","lastUpdated":null}'),n={name:"game-developers/unreal/use-ultra-unreal.md"},i=t(`<h1 id="using-the-ultra-unreal-subsystem" tabindex="-1">Using the Ultra Unreal Subsystem <a class="header-anchor" href="#using-the-ultra-unreal-subsystem" aria-label="Permalink to &quot;Using the Ultra Unreal Subsystem&quot;">​</a></h1><h2 id="example-project" tabindex="-1">Example Project <a class="header-anchor" href="#example-project" aria-label="Permalink to &quot;Example Project&quot;">​</a></h2><p>We&#39;ve put together an example project which illustrates the expected flow. You can grab the <a href="https://github.com/ultraio/UnrealSampleProject" target="_blank" rel="noreferrer">example project here</a>.</p><h2 id="access" tabindex="-1">Access <a class="header-anchor" href="#access" aria-label="Permalink to &quot;Access&quot;">​</a></h2><p>You&#39;ll need a <code>client_id</code> for this. To get one, <a href="https://developers.ultra.io/guides/Integrating%20Ultra/requesting-a-client_id.html" target="_blank" rel="noreferrer">you can request one directly from Ultra</a>.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>To configure Ultra&#39;s Unreal Online Subsystem, you need to edit the DefaultEngine.ini:</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[OnlineSubsystem]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DefaultPlatformService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=Ultra </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Set OnlineSubsystemUltra as default online subsystem</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[OnlineSubsystemUltra]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bEnabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Authentication</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ClientId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; Mandatory - The Client Id given by Ultra</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DispatcherUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://api.ultracloud.ultra.io/dispatcherv2&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; Optional - The dispatcher URL (default: https://api.ultracloud.ultra.io/dispatcherv2)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AuthenticationUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; Optional - The openid authentication URL (default: https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bUseBrowser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=false </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Optional - If true, the browser will be launched to prompt the user credentials otherwise the &#39;ApplicationProtocol&#39; will be used to handle the login (default: false)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ApplicationProtocol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=ultra </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Optional - If set to &quot;ultra&quot;, the Ultra launcher will be called to login the user (default: ultra)</span></span></code></pre></div><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const IOnlineIdentityPtr IdentityInterface = Online-&gt;GetIdentityInterface();</span></span>
<span class="line"><span>FDelegateHandle Handle;</span></span>
<span class="line"><span>IdentityInterface-&gt;AddOnLoginCompleteDelegate_Handle(UserIndex, FOnLoginCompleteDelegate::CreateLambda([IdentityInterface, Handle](int32 LocalUserNum, bool Success, const FUniqueNetId&amp; UserId, const FString&amp; Error)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  IdentityInterface-&gt;ClearOnLoginCompleteDelegate_Handle(LocalUserNum, Handle);</span></span>
<span class="line"><span>  FString Nickname = IdentityInterface-&gt;GetPlayerNickname(LocalUserNum);</span></span>
<span class="line"><span>  // do something</span></span>
<span class="line"><span>}));</span></span>
<span class="line"><span>IdentityInterface-&gt;AutoLogin(UserIndex);</span></span></code></pre></div>`,10),l=[i];function r(p,o,h,c,d,u){return s(),e("div",null,l)}const m=a(n,[["render",r]]);export{g as __pageData,m as default};
