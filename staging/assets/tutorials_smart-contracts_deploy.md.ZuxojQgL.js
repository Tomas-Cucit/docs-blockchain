import{_ as t}from"./chunks/select-network.twqsAEp9.js";import{_ as e,c as a,o,N as l}from"./chunks/framework.I0_e-zsE.js";const r="/staging/assets/select-contract-to-deploy.n9eCsfX1.png",b=JSON.parse('{"title":"3. Deploy Smart Contract","description":"","frontmatter":{"title":"3. Deploy Smart Contract","outline":[0,5],"order":-96},"headers":[],"relativePath":"tutorials/smart-contracts/deploy.md","filePath":"tutorials/smart-contracts/deploy.md","lastUpdated":null}'),n={name:"tutorials/smart-contracts/deploy.md"},i=l('<h1 id="deploy-smart-contract" tabindex="-1">Deploy Smart Contract <a class="header-anchor" href="#deploy-smart-contract" aria-label="Permalink to &quot;Deploy Smart Contract&quot;">​</a></h1><p>Once you have an <code>abi</code> and <code>wasm</code> file for a contract you are ready for deployment.</p><h2 id="create-a-wallet" tabindex="-1">Create a Wallet <a class="header-anchor" href="#create-a-wallet" aria-label="Permalink to &quot;Create a Wallet&quot;">​</a></h2><p>You can create a wallet through <a href="https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp" target="_blank" rel="noreferrer">Ultra.io Smart Contract Toolkit</a>.</p><p>Using the Command Palette (F1), type <code>Ultra: Create Wallet</code>.</p><p>You can also use <code>Ultra: Create Wallet - Create Key</code> to generate a private key in console</p><p>Take note of both your <code>private key</code> and <code>public key</code>.</p><p><strong>You will need your public key after importing</strong>.</p><ul><li>Fill out the password fields <ul><li>This will be used to unlock your wallet</li></ul></li><li>Fill out the private key field</li></ul><p>Wallet will tell you the account creation was successful in the bottom-right upon completion.</p><h2 id="creating-a-test-network-account" tabindex="-1">Creating a Test Network Account <a class="header-anchor" href="#creating-a-test-network-account" aria-label="Permalink to &quot;Creating a Test Network Account&quot;">​</a></h2><p>You will need a test network account on a supported blockchain to deploy a contract and test it.</p><details class="details custom-block"><summary>Local Environment</summary><ol><li>Generate new key using Smart Contract Toolkit or <a href="./../../blockchain/general/tools/cleos.html">cleos</a></li><li>Start ultratest in detached mode using <a href="./../../tutorials/docker/docker-image-usage.html">docker image usage</a></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ultratest -Dsn</span></span></code></pre></div><ol start="3"><li>Create new account</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cleos system newaccount ultra.eosio test YOUR_PUBLIC_KEY --transfer --gift-ram-kbytes 1024000 -p ultra.eosio</span></span></code></pre></div><ol start="4"><li>Deploy your contract using instructions below</li></ol></details><details class="details custom-block"><summary>Ultra Testnet</summary><ol><li>Use ultra <a href="https://faucet.testnet.app.ultra.io/">faucet</a> to create an Ultra Pro Wallet and receive tokens. Use the key from the step of creating a wallet</li><li>Open VSCode and Command Palette (F1) and type <code>Ultra: Create Transaction</code></li><li>Select Ultra Testnet</li><li>Enter Wallet Password</li><li>Lookup eosio and select action <code>buyrambytes</code></li><li>Look at your .wasm file properties to determine the RAM you need. Buy extra for storing table data. You will want to lookup the total amount of bytes your .wasm file has. For small contracts 65356 bytes should be sufficient</li><li>Fill out the form, and buy some RAM. payer and receiver should be the same.</li><li>Ensure that the transaction is successful</li></ol></details><details class="details custom-block"><summary>Ultra Mainnet</summary><ol><li>Download <a href="https://chrome.google.com/webstore/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln">Ultra Wallet extension</a></li><li>Create an Ultra Pro Wallet using the Ultra Wallet extension <a href="../guides/how-to-create-ultra-pro-wallet.md">tutorial</a></li><li>Use ultra <a href="https://toolkit.ultra.io/contract?actions=buyrambytes">toolkit</a> to to buy RAM. Log in with your Ultra Pro Wallet. Transfer UOS to this account if needed</li></ol></details><h2 id="deploy-contract" tabindex="-1">Deploy Contract <a class="header-anchor" href="#deploy-contract" aria-label="Permalink to &quot;Deploy Contract&quot;">​</a></h2><p>Using the Command Palette (F1), type <code>Ultra: Deploy Contract</code>.</p><p>Select the contract you want to deploy.</p><p><img src="'+r+'" alt=""></p><p>Select the endpoint you want to deploy to.</p><p><img src="'+t+'" alt=""></p><p>Enter your wallet password.</p><p>Type in the <code>account</code> you have access to on the network you have picked.</p><p>If successful you will see the smart contract has been deployed in the output window.</p><h2 id="redeploy-smart-contract" tabindex="-1">Redeploy Smart Contract <a class="header-anchor" href="#redeploy-smart-contract" aria-label="Permalink to &quot;Redeploy Smart Contract&quot;">​</a></h2><p>After you&#39;ve done some changes to your contract you will need to build it again and redeploy</p><p>Redeploying the contract is identical to the first time you&#39;ve deployed the contract. Just follow the above instructions and use the same account to deploy to</p><p>VSCode extension will deploy both ABI and WASM files so there is no manual action needed to redeploy both</p><h1 id="environments" tabindex="-1">Environments <a class="header-anchor" href="#environments" aria-label="Permalink to &quot;Environments&quot;">​</a></h1><p>Environments are specific locations where you can perform tests against your smart contracts, and applications.</p><p>There are three environments; local, testnet, and mainnet.</p><p><a href="./../../products/chain-api/">See this API section</a> for information on block producer endpoints that are publicly available.</p><h2 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-label="Permalink to &quot;Local&quot;">​</a></h2><p>The local environment is where you are browsing this documentation from.</p><p>You would be running code against your local machine on a blockchain that is also running on your local machine.</p><p>In the case of <code>cleos</code> you would not provide any <code>-u</code> parameters to target your own local blockchain inside of a docker image.</p><h3 id="why-use-local" tabindex="-1">Why use local? <a class="header-anchor" href="#why-use-local" aria-label="Permalink to &quot;Why use local?&quot;">​</a></h3><ul><li>Just beginning smart contract development.</li><li>Need to test and write tests before full deployment.</li><li>Easy way to start and stop a blockchain and restart from zero each time.</li></ul><h2 id="test-network" tabindex="-1">Test Network <a class="header-anchor" href="#test-network" aria-label="Permalink to &quot;Test Network&quot;">​</a></h2><p>The test network environment is where you want to deploy your smart contract after going through general testing.</p><p>This should be the first place you will want to deploy your smart contract for other users to interact with.</p><h3 id="why-use-testnet" tabindex="-1">Why use Testnet? <a class="header-anchor" href="#why-use-testnet" aria-label="Permalink to &quot;Why use Testnet?&quot;">​</a></h3><ul><li>Ready to deploy smart contracts to other users.</li><li>Begin getting feedback in a public manner.</li><li>Begin writing frontend for your decentralized application.</li><li>Need a way for others to easily interact and test your smart contract.</li></ul><p>Go to the <a href="./.html">faucet documentation page</a> to start working with testnet.</p><h2 id="main-network" tabindex="-1">Main Network <a class="header-anchor" href="#main-network" aria-label="Permalink to &quot;Main Network&quot;">​</a></h2><p>The main network environment is when you want to partner with ultra to get your smart contract deployed to the world.</p><p>This is the stage where you have a smart contract, you have had that contract audited, you have an application, and you want to get it into ultra ecosystem for everyone to interact with.</p><h3 id="why-use-mainnet" tabindex="-1">Why use Mainnet? <a class="header-anchor" href="#why-use-mainnet" aria-label="Permalink to &quot;Why use Mainnet?&quot;">​</a></h3><ul><li>Ready to go live with your smart contract.</li><li>Smart contract has already been audited.</li><li>Optional frontend application is ready to be used.</li></ul>',49),s=[i];function c(d,u,h,p,m,y){return o(),a("div",null,s)}const g=e(n,[["render",c]]);export{b as __pageData,g as default};
