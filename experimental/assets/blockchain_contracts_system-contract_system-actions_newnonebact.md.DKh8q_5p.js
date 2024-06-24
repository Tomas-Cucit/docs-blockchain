import{_ as s,c as a,o as i,N as t}from"./chunks/framework.HE4KbJuF.js";const y=JSON.parse('{"title":"newnonebact","description":"","frontmatter":{"title":"newnonebact"},"headers":[],"relativePath":"blockchain/contracts/system-contract/system-actions/newnonebact.md","filePath":"blockchain/contracts/system-contract/system-actions/newnonebact.md","lastUpdated":null}'),n={name:"blockchain/contracts/system-contract/system-actions/newnonebact.md"},e=t(`<h1 id="newnonebact-create-an-ultra-pro-wallet" tabindex="-1">newnonebact - create an Ultra Pro Wallet <a class="header-anchor" href="#newnonebact-create-an-ultra-pro-wallet" aria-label="Permalink to &quot;newnonebact - create an Ultra Pro Wallet&quot;">​</a></h1><p>Allows creating a new Ultra Pro Wallet, with expected cost not larger than max payment. The cost calculation will be based on the config from <code>newactconfig</code> table.</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>creator</td><td>eosio::name</td><td>The account that will pay for Ultra Pro Wallet account creation</td></tr><tr><td>owner</td><td>eosio::authority</td><td>The <code>owner</code> authority for the new account</td></tr><tr><td>active</td><td>eosio::authority</td><td>The <code>active</code> authority for the new account</td></tr><tr><td>max_payment</td><td>eosio::asset</td><td>Maximum payment in UOS that creator is willing to pay to account for possible USD/UOS conversion fluctuations</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newnonebact</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;creator&quot;:&quot;alice&quot;, &quot;owner&quot;:{&quot;threshold&quot;:1,&quot;keys&quot;:[{&quot;key&quot;:&quot;EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9&quot;,&quot;weight&quot;:1}],&quot;accounts&quot;:[],&quot;waits&quot;:[]}, &quot;active&quot;:{&quot;threshold&quot;:1,&quot;keys&quot;:[{&quot;key&quot;:&quot;EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9&quot;,&quot;weight&quot;:1}],&quot;accounts&quot;:[],&quot;waits&quot;:[]}, &quot;max_payment&quot;:&quot;50.00000000 UOS&quot;}&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;newnonebact&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;creator&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                creator: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;creator&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                owner: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    threshold: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    keys: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    accounts: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    waits: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                active: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    threshold: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    keys: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    accounts: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    waits: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                max_payment: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50.00000000 UOS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,7),l=[e];function h(p,k,E,o,c,r){return i(),a("div",null,l)}const g=s(n,[["render",h]]);export{y as __pageData,g as default};
