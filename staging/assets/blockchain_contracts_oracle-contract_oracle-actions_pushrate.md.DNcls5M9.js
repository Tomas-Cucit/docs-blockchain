import{_ as s,c as a,o as i,N as e}from"./chunks/framework.wVj9vBva.js";const g=JSON.parse('{"title":"pushrate","description":"","frontmatter":{"title":"pushrate","order":5},"headers":[],"relativePath":"blockchain/contracts/oracle-contract/oracle-actions/pushrate.md","filePath":"blockchain/contracts/oracle-contract/oracle-actions/pushrate.md","lastUpdated":null}'),t={name:"blockchain/contracts/oracle-contract/oracle-actions/pushrate.md"},n=e(`<h1 id="pushrate" tabindex="-1">pushrate <a class="header-anchor" href="#pushrate" aria-label="Permalink to &quot;pushrate&quot;">​</a></h1><p>Pushes a new USD to UOS exchange rate and latest 24 hours trading volume information to the oracle contract.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Exchange used in the action must be one of the registered exchanges (see <a href="./regexchange.html">regexchange</a>).</p><p>Timestamp for exchange rate must be at most 120 seconds older or 15 seconds ahead of the current chain time.</p><p>The action will update <code>feeddata</code> entry for the specified exchange writing the information about the new rate pushed. Will also update <code>oraclestate</code> to indicate the new latest rate timestamp and <code>lastknwnrate</code> singleton in case rate received is newer than the previous one.</p><p>In case the new rate has different UTC minute compared to the latest rate the finalization procedure will start which will calculate the SMA for 1 minute period using all the rates supplied in the last 60 seconds. All minute level averages defined in <code>finalaverage</code> table will also be updated. Similar procedure occurs when different UTC hour or UTC day starts.</p><p>For more details on logic and calculations see <a href="./../how-does-oracle-contract-calculate-uos-conversion-rate.html">this page</a></p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>exchange</code></td><td>name</td><td>Name of the exchange registered in the oracle contract</td></tr><tr><td><code>rates</code></td><td>std::vector&lt;rate&gt;</td><td>Exchange rate received from the exchange. Must have a single value</td></tr><tr><td><code>volume</code></td><td>eosio::asset</td><td>24 hour trading volume for only the specified exchange. Symbol must match <code>trading_volume_symbol</code> in <a href="./../oracle-tables.html#oraclestate"><code>oraclestate</code></a> (8 digit USD by default)</td></tr></tbody></table><p><code>rate</code> type is defined as follows:</p><table><thead><tr><th><code>rate</code> fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>timestamp</code></td><td>uint64_t</td><td>UTC timestamp of the rate received from the exchange. Specified in seconds</td></tr><tr><td><code>price</code></td><td>eosio::asset</td><td>UOS to USD conversion rate. Symbol must match <code>trading_volume_symbol</code> in <a href="./../oracle-tables.html#oraclestate"><code>oraclestate</code></a> (8 digit DUOS by default)</td></tr></tbody></table><p>Required Permissions: <code>ultra.oracle</code></p><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.oracle</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pushrate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[&quot;ugateio&quot;, [[1706615754, &quot;0.17900000 DUOS&quot;]], &quot;50149.76699157 USD&quot;]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.oracle</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.oracle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pushrate&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    authorization: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ultra.oracle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        exchange: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ugateio&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        rates: [{timestamp: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1706615754</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, price: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.17900000 DUOS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        volume: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;50149.76699157 USD&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div>`,17),h=[n];function l(p,r,o,c,d,k){return i(),a("div",null,h)}const u=s(t,[["render",l]]);export{g as __pageData,u as default};
