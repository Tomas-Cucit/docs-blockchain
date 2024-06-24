import{_ as s,c as i,o as a,N as n}from"./chunks/framework.HE4KbJuF.js";const E=JSON.parse('{"title":"CDT Overview","description":"","frontmatter":{"title":"CDT Overview","order":-99999,"oultine":[0,4],"prev":false},"headers":[],"relativePath":"blockchain/general/tools/cdt/index.md","filePath":"blockchain/general/tools/cdt/index.md","lastUpdated":null}'),t={name:"blockchain/general/tools/cdt/index.md"},h=n(`<h1 id="contract-development-kit-cdt" tabindex="-1">Contract Development Kit (CDT) <a class="header-anchor" href="#contract-development-kit-cdt" aria-label="Permalink to &quot;Contract Development Kit (CDT)&quot;">​</a></h1><p>All information about Contract Development Kit on how to develop a smart contract.</p><p>EOSIO.CDT (Contract Development Toolkit) is a toolchain for WebAssembly (WASM) and a set of tools to facilitate smart contract development for the EOSIO platform. In addition to being a general purpose WebAssembly toolchain, EOSIO specific optimizations are available to support building EOSIO smart contracts.</p><p>This toolchain is built around Clang 9, which means that EOSIO.CDT has the most currently available optimizations and analyses from LLVM, but as the WASM target is still considered experimental, some optimizations are incomplete or not available.</p><h2 id="cdt-cpp" tabindex="-1">cdt-cpp <a class="header-anchor" href="#cdt-cpp" aria-label="Permalink to &quot;cdt-cpp&quot;">​</a></h2><p>cdt-cpp is a tool for compiling smart contracts.</p><p>It will compile c++ source code to corresponding compiled binary wasm and generated ABI file.</p><h3 id="common-command-reference" tabindex="-1">Common Command Reference <a class="header-anchor" href="#common-command-reference" aria-label="Permalink to &quot;Common Command Reference&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">USAGE:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cdt-cpp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">input file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OPTIONS:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Options:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Display</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (-help-hidden </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> more</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -help-list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Display</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (-help-list-hidden </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> more</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Display</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> program</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> options:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -I</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -L</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> library</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -abigen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ABI</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -abigen_output</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ABIGEN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                       -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Only</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preprocess,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compile,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assemble</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> steps</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -contract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Contract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -include</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> before</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parsing</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> library</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -no-abigen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ABI</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -o</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                       -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commands</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verbose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                       -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Suppress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> warnings</span></span></code></pre></div><h2 id="useful-links" tabindex="-1">Useful Links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful Links&quot;">​</a></h2><ul><li><a href="./../../../../tutorials/docker/">Docker Image Usage</a></li><li><a href="./create-a-contract.html">Create A Contract</a></li><li><a href="./compile-a-contract.html">Compile A Contract</a></li></ul>`,11),l=[h];function k(p,e,F,r,d,g){return a(),i("div",null,l)}const y=s(t,[["render",k]]);export{E as __pageData,y as default};