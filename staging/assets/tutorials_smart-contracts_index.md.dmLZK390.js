import{_ as t,c as e,o as a,N as o}from"./chunks/framework.wVj9vBva.js";const s="/staging/assets/install-vscode-ext.FnduJ7B-.png",r="/staging/assets/vscode-ext-installed.ujP_SMgM.png",n="/staging/assets/select-project-folder.c52z-340.png",i="/staging/assets/open-command-palette.Oz4MwYX5.png",l="/staging/assets/vscode-ultra-headers.yVNNvVuM.png",c="/staging/assets/vscode-ultra-cpp-support.3PsLhKn6.png",d="/staging/assets/intellisense-updating.wqJbCm03.png",p="/staging/assets/intellisense-ready.suT7OpjY.png",w=JSON.parse('{"title":"Tutorial - Install and Setup the Ultra Smart Contract Toolkit Extension","description":"","frontmatter":{"title":"Tutorial - Install and Setup the Ultra Smart Contract Toolkit Extension","outline":[0,5],"order":-98},"headers":[],"relativePath":"tutorials/smart-contracts/index.md","filePath":"tutorials/smart-contracts/index.md","lastUpdated":null}'),h={name:"tutorials/smart-contracts/index.md"},u=o('<h1 id="tutorial-install-and-setup-the-ultra-smart-contract-toolkit-extension" tabindex="-1">Tutorial - Install and Setup the Ultra Smart Contract Toolkit Extension <a class="header-anchor" href="#tutorial-install-and-setup-the-ultra-smart-contract-toolkit-extension" aria-label="Permalink to &quot;Tutorial - Install and Setup the Ultra Smart Contract Toolkit Extension&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>Have <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noreferrer">Docker</a> installed before using the extension.</li><li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools" target="_blank" rel="noreferrer">Microsoft C++ Extension</a> (optional, but recommended)</li></ul></li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to install the Ultra Smart Contract Toolkit extension and getting started with writing smart contracts.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>You can download the extension from <a href="https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp" target="_blank" rel="noreferrer">VS Code Market Place</a>, or you can manually install it via VS Code.</p><p>To install the extension via VSCode, follow these steps:</p><ol><li>Open up your VS Code and click on the <code>Extensions</code> tab, or press <code>Ctrl + Shift + X</code></li><li>Under the <code>Extensions</code> tab, search for <code>ultra-cpp</code></li><li>Click on the <code>Install</code> button</li></ol><p><img src="'+s+'" alt=""></p><p>You have now successfully installed the Ultra Smart Contract Toolkit Extension. To verify the installation, make sure you have <code>ᕫ API</code> item in the VS Code status bar.</p><p><img src="'+r+'" alt=""></p><h2 id="scaffolding" tabindex="-1">Scaffolding <a class="header-anchor" href="#scaffolding" aria-label="Permalink to &quot;Scaffolding&quot;">​</a></h2><p>Depending on where you want to start your project. Always start with a workspace folder and open it in VSCode.</p><p><img src="'+n+'" alt=""></p><p>Once you have the Ultra Smart Contract Toolkit extension installed, you can easily create a starting template.</p><p>Access the <code>Command Palette</code> in VS Code with <code>F1</code> on the keyboard.</p><p><img src="'+i+'" alt=""></p><h3 id="command-palette-command" tabindex="-1">Command Palette Command <a class="header-anchor" href="#command-palette-command" aria-label="Permalink to &quot;Command Palette Command&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Ultra: Create Smart Contract</span></span></code></pre></div><p>It will prompt you for a folder to put the source code under. It is recommended to use <code>src</code> if it&#39;s a single contract.</p><h2 id="header-setup" tabindex="-1">Header Setup <a class="header-anchor" href="#header-setup" aria-label="Permalink to &quot;Header Setup&quot;">​</a></h2><p>After creating the contract, you will need to <strong>install headers</strong> to remove some of the errors you will get from VSCode about the code.</p><p>There are currently <strong>two ways</strong> to install headers.</p><ul><li>First way is to open your <code>.cpp</code> file that was generated, and follow the prompts</li><li>The second way is to open the the <code>Command Palette (F1)</code> and search for <code>Ultra: Add C++ Header Files for EOSIO</code></li></ul><p>Make sure you agree to both prompts (<code>Add Ultra.io Header Files</code> and <code>Add C++ Support</code>):</p><p><img src="'+l+'" alt=""></p><p><img src="'+c+'" alt=""></p><p>After installation, and following the prompts, the VS Code window will restart itself.</p><p>Wait for intellisense to finish updating to ensure everything is working correctly.</p><p><img src="'+d+'" alt=""></p><p><img src="'+p+'" alt=""></p><p>Any other prompts from VS Code can be ignored (including prompts related to Docker or CMake Tools if you have those installed)</p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>The next tutorial will cover compiling smart contracts using the VS Code extension. See <a href="./compile.html">Smart Contract Compiling</a> for more information.</p>',35),m=[u];function g(f,_,k,C,S,x){return a(),e("div",null,m)}const y=t(h,[["render",g]]);export{w as __pageData,y as default};