import{_ as a,c as s,o as e,N as t}from"./chunks/framework.C4xwWQPD.js";const u=JSON.parse('{"title":"burn","description":"","frontmatter":{"title":"burn","order":5},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/burn.md","filePath":"blockchain/contracts/nft-contract/nft-actions/burn.md","lastUpdated":null}'),i={name:"blockchain/contracts/nft-contract/nft-actions/burn.md"},n=t(`<h1 id="burn" tabindex="-1">burn <a class="header-anchor" href="#burn" aria-label="Permalink to &quot;burn&quot;">​</a></h1><p>This action can be used to burn a token, see more details in burn.</p><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>Used to burn a non-fungible token from one user. This requires the <strong>token_id</strong> of a minted token in order to successfully burn the token. As well as the permission of the user who owns the token.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>Upon the usage of the burn action the action verifies that the parameters supplied in the action have values. This includes owner, token_ids, and memo. The memo specifically has a 256 byte limitation. The required authorization is the owner user. The token_ids vector is verified to not be empty.</p><p><strong>On-the-fly migration</strong></p><p>After v1 is activated by activers action, token exists either in v0 token table, token.a, or v1 token table, token.b. If the token exists in token.a, then the token factory from which the token was minted exists in v0 factory table, factory.a, which, in this case, is moved to factory.b. In the following descriptions, token factory and token are either v0 or v1 data structures.</p><p><strong>Main operations</strong></p><p>The token from the token table includes a token factory id and this is used to fetch the token factory data. The token factory must exist for a token to be burned. The token will not be able to be burned if the owner does not own this token. If the token is up for resale then the token is removed from the resale table.</p><p>After this data is verified the token quantity in the token factory is subtracted and checked for underflow. The token is then erased from the owner. The owner ensures that the fractional parts are truncated and they go to <code>eosio.pool</code>. <code>eosio.nftram</code> refunds the fee to each account.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><p><strong>Notifications</strong></p><p><code>require_recipient</code> is done for <code>owner</code> account and for asset managers of corresponding uniq factories</p><h3 id="v0" tabindex="-1">V0 <a class="header-anchor" href="#v0" aria-label="Permalink to &quot;V0&quot;">​</a></h3><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>eosio::name</td><td>The token owner</td></tr><tr><td>token_ids</td><td>std::vector<code>&lt;uint64_t&gt;</code></td><td>The array of tokens to burn</td></tr><tr><td>memo</td><td>std::string</td><td>A short operation description.</td></tr></tbody></table><h3 id="v1" tabindex="-1">V1 <a class="header-anchor" href="#v1" aria-label="Permalink to &quot;V1&quot;">​</a></h3><p>No Changes</p><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><h3 id="v0-v1" tabindex="-1">V0 / V1 <a class="header-anchor" href="#v0-v1" aria-label="Permalink to &quot;V0 / V1&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> burn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[{ &quot;owner&quot;: &quot;owner.user.acc&quot;, &quot;token_ids&quot;: [1], &quot;memo&quot;: &quot;bye bye tokens&quot; }]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> owner.user.acc@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><h3 id="v0-v1-1" tabindex="-1">V0 / V1 <a class="header-anchor" href="#v0-v1-1" aria-label="Permalink to &quot;V0 / V1&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;burn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;owner.user.acc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    burn: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        owner: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;owner.user.acc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        token_ids: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bye bye tokens&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h1 id="behavior-changes" tabindex="-1">Behavior Changes <a class="header-anchor" href="#behavior-changes" aria-label="Permalink to &quot;Behavior Changes&quot;">​</a></h1><p>After v1 is activated, if the token has already been migrated to token.b table, the UOS locked up for the token will be refunded from eosio.nfram to the relevant parties. The refund split is as follows:</p><ul><li><p>15% goes to the factory’s asset manager</p></li><li><p>70% goes to the token owner</p></li><li><p>the rest including the fractional part(about 15%) fee goes to eosio.pool</p></li></ul><p>See more detail in RAM rules for NFTs</p><h1 id="changes-in-tables-to-read-write" tabindex="-1">Changes in tables to Read/Write <a class="header-anchor" href="#changes-in-tables-to-read-write" aria-label="Permalink to &quot;Changes in tables to Read/Write&quot;">​</a></h1><p>it will migrate factory.a to factory.b, before reading the factory.b object.</p>`,32),o=[n];function h(r,l,p,k,c,d){return e(),s("div",null,o)}const b=a(i,[["render",h]]);export{u as __pageData,b as default};
