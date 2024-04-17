import{_ as a,c as s,o as e,N as t,aS as i}from"./chunks/framework.I0_e-zsE.js";const m=JSON.parse('{"title":"7. Troubleshooting Deployment","description":"","frontmatter":{"title":"7. Troubleshooting Deployment","order":-93,"outline":[0,5]},"headers":[],"relativePath":"tutorials/smart-contracts/troubleshooting.md","filePath":"tutorials/smart-contracts/troubleshooting.md","lastUpdated":null}'),o={name:"tutorials/smart-contracts/troubleshooting.md"},n=t(`<h1 id="troubleshooting-deployment" tabindex="-1">Troubleshooting Deployment <a class="header-anchor" href="#troubleshooting-deployment" aria-label="Permalink to &quot;Troubleshooting Deployment&quot;">​</a></h1><h2 id="invalid-uos-precision" tabindex="-1">Invalid UOS precision <a class="header-anchor" href="#invalid-uos-precision" aria-label="Permalink to &quot;Invalid UOS precision&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3050003</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio_assert_message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assertion</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failure</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Details:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertion</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failure</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> must</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> buy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ram</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> token</span></span></code></pre></div><p>Make sure UOS is specified with <strong>exactly</strong> 8 decimals as in <a href="https://developers.ultra.io/experimental/contracts/System%20Contract/system-actions/buyram.html#buyram-buy-ram-with-uos" target="_blank" rel="noreferrer">buyram</a> page.</p><h2 id="docker-container-start-issues" tabindex="-1">Docker container start issues <a class="header-anchor" href="#docker-container-start-issues" aria-label="Permalink to &quot;Docker container start issues&quot;">​</a></h2><p>You may get a port allocated</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1f9fd2ba03b243b5c8dabff76b9ffa49a8141af0fc9f7d46b37f9054e8cc945f</span></span>
<span class="line"><span>docker: Error response from daemon: driver failed programming external connectivity on endpoint ultra (2da26f7837141bd89470ce839b24c5ce9784376c7bdf8ffdcbaa6e93495773cf): Bind for 0.0.0.0:9876 failed: port is already allocated.</span></span></code></pre></div><p>Consider stoppping a process listening to that port or reassigning a mapping to a different port on your host machine, i.e <code>-p 9876:1234</code></p><p>You can also change your workdir (output directory) with <code>-v</code>. Refer to docker <a href="https://docs.docker.com/storage/volumes/#choose-the--v-or---mount-flag" target="_blank" rel="noreferrer">documentation</a>.</p><h2 id="vscode-extension-docker-unavailable" tabindex="-1">Vscode extension docker unavailable <a class="header-anchor" href="#vscode-extension-docker-unavailable" aria-label="Permalink to &quot;Vscode extension docker unavailable&quot;">​</a></h2><p><img src="`+i+'" alt=""></p><p>If you get <code>docker unavailable</code> error message make sure you have disconnected from docker container by clicking on the bottom-left corner.</p><p><br> For any further assistance don&#39;t hestitate to contract the team on <a href="https://discord.com/invite/U7raPf6qZu" target="_blank" rel="noreferrer">discord</a>.</p>',13),r=[n];function l(c,h,p,d,k,u){return e(),s("div",null,r)}const b=a(o,[["render",l]]);export{m as __pageData,b as default};
