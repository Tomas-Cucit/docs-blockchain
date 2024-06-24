import{_ as e,c as a,o as t,N as s,aO as i,aP as n,aQ as r,aR as o}from"./chunks/framework.wVj9vBva.js";const y=JSON.parse('{"title":"Testnet Faucet Guide","description":"","frontmatter":{"title":"Testnet Faucet Guide","outline":[0,4],"order":-99},"headers":[],"relativePath":"tutorials/general/faucet/index.md","filePath":"tutorials/general/faucet/index.md","lastUpdated":null}'),l={name:"tutorials/general/faucet/index.md"},c=s('<h1 id="testnet-faucet-guide" tabindex="-1">Testnet Faucet Guide <a class="header-anchor" href="#testnet-faucet-guide" aria-label="Permalink to &quot;Testnet Faucet Guide&quot;">​</a></h1><p>Keys can be created in a variety of ways and through many different websites.</p><p><em>We would never recommend using an external website for a Main Network keypair</em></p><p>Anyway, here&#39;s a few websites you can do it on, or you can use <a href="./../../../blockchain/general/tools/cleos.html">cleos</a></p><ul><li><a href="https://eosauthority.com/generate_eos_private_key" target="_blank" rel="noreferrer">EOS Authority</a></li><li><a href="https://nadejde.github.io/eos-token-sale/" target="_blank" rel="noreferrer">NadeJDE Key Generator</a></li><li><a href="https://github.com/eoscafe/eos-key" target="_blank" rel="noreferrer">EOSCafe Offline Generator</a></li></ul><p>Next go to the <a href="https://faucet.testnet.app.ultra.io/" target="_blank" rel="noreferrer">https://faucet.testnet.app.ultra.io/</a> and paste public key into the form as shown below</p><p><img src="'+i+'" alt=""></p><p>Click on Create Account</p><p><img src="'+n+'" alt=""></p><p>Make sure the account was created</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://ultratest-api.eoseoul.io</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> account</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">aa2aa3aa4ae</span></span></code></pre></div><h2 id="claiming-tokens" tabindex="-1">Claiming tokens <a class="header-anchor" href="#claiming-tokens" aria-label="Permalink to &quot;Claiming tokens&quot;">​</a></h2><p>Once you created an account click on the <code>Token Faucet</code> tab and insert your account name in the form.</p><p><img src="'+r+'" alt=""></p><p>Click on issue and you should get 10 UOS</p><p><img src="'+o+'" alt=""></p><p>If you need more tokens wait for 2 minutes and claim again.</p>',17),p=[c];function h(u,d,k,_,g,f){return t(),a("div",null,p)}const F=e(l,[["render",h]]);export{y as __pageData,F as default};
