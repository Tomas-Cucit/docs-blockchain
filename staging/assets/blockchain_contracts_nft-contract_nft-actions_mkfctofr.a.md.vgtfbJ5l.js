import{_ as s,c as i,o as a,N as t}from"./chunks/framework.I0_e-zsE.js";const f=JSON.parse('{"title":"mkfctofr.a","description":"","frontmatter":{"title":"mkfctofr.a","order":40},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/mkfctofr.a.md","filePath":"blockchain/contracts/nft-contract/nft-actions/mkfctofr.a.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/mkfctofr.a.md"},n=t(`<h1 id="mkfctofr-a" tabindex="-1">mkfctofr.a <a class="header-anchor" href="#mkfctofr-a" aria-label="Permalink to &quot;mkfctofr.a&quot;">​</a></h1><p>Make an offer on a Uniq factory.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>The offer should be done at the time which is in the range of trading window of the factory.</p><p>The action stores the offer to <code>fctoffer.a</code> table with the specified arguments. The new offer ID is read from <code>next.fctofr</code> table whose <code>value</code> field is then incremented.</p><p><code>eosio.nftram</code> pays RAM usage.</p><p>The offered price will be transferred to <code>eosio.nftofr</code> account and will be kept until the offer is either accepted or cancelled.</p><p>An account will not be able to make offers on the same factories that they already made.</p><p>An account will not be able to make offers if their total offers (including Uniq and Uniq factory) is more than <code>max_active_offer_per_user</code> of <code>offercfg.a</code>, which records the global configurations.</p><p><code>price</code> should be no less than <code>min_price</code> of <code>offercfg.a</code> and also should be no less than <code>minimum_resell_price</code> of the factory.</p><p><code>promoter_basis_point</code> should be in the range between <code>min_promoter_share_bp</code> and <code>max_promoter_share_bp</code> of <code>saleshrlmcfg</code> table configurations for resale. If <code>saleshrlmcfg</code> table doesn’t exist, the default range is between 250 (2.5 %) and 1000 (10 %).</p><p><code>duration</code> should be in the range between <code>min_duration</code> and <code>max_duration</code> of <code>offercfg.a</code>. If <code>duration</code> is longer than the trading window of the factory, it will be capped by <code>trading_window_end</code>.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Description</th></tr></thead><tbody><tr><td>buyer</td><td>name</td><td>String</td><td>Account who makes an offer</td></tr><tr><td>receiver</td><td>optional&lt;name&gt;</td><td>String/Null</td><td>Account who will receive the Uniq, if not specified, buyer will receive the Uniq.</td></tr><tr><td>price</td><td>asset</td><td>String</td><td>Offered price in UOS</td></tr><tr><td>promoter_basis_point</td><td>uint16_t</td><td>Number</td><td>Promoter share in units of 0.01 %</td></tr><tr><td>factory_id</td><td>uint64_t</td><td>Number</td><td>ID of Uniq factory</td></tr><tr><td>duration</td><td>uint32_t</td><td>Number</td><td>Offer duration in seconds</td></tr><tr><td>memo</td><td>string</td><td>String</td><td>Memo</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkfctofr.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;buyer&quot;: &quot;alice&quot;, &quot;receiver&quot;: null, &quot;price&quot;: &quot;2.00000000 UOS&quot;, &quot;promoter_basis_point&quot;: 250, &quot;factory_id&quot;: 1, &quot;duration&quot;: 86400, &quot;memo&quot;: &quot;new offer&quot;}&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mkfctofr.a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                buyer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                receiver: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                price: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2.00000000 UOS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                promoter_basis_point: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                duration: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">86400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;new offer&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,18),o=[n];function h(l,r,d,p,c,k){return a(),i("div",null,o)}const u=s(e,[["render",h]]);export{f as __pageData,u as default};
