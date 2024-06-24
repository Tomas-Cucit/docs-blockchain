import{_ as t}from"./chunks/toolkit-network-selection.EpnYezJd.js";import{_ as e}from"./chunks/toolkit-network-selection-modal.xojHyMAQ.js";import{_ as o}from"./chunks/toolkit-tx-success-modal.6KSftreE.js";import{_ as a,c as i,o as n,N as r}from"./chunks/framework.HE4KbJuF.js";const s="/experimental/assets/toolkit-factory-actions-tab-issue.A4p1HeyK.png",l="/experimental/assets/toolkit-issue-b-tx-form.0AUEBtgt.png",c="/experimental/assets/toolkit-issue-b-tx-confirmation.mZ89rxnG.png",u="/experimental/assets/ultra-wallet-sign-issue-b-tx.ua98y9MU.png",h="/experimental/assets/toolkit-user-uniq-explorer-page.6h2lRmdH.png",v=JSON.parse('{"title":"How to mint a Uniq using the Ultra Toolkit","description":"","frontmatter":{"title":"How to mint a Uniq using the Ultra Toolkit","order":5,"outline":[0,4]},"headers":[],"relativePath":"tutorials/uniq-factories/creating-uniq-factories/how-to-mint-uniq-using-toolkit.md","filePath":"tutorials/uniq-factories/creating-uniq-factories/how-to-mint-uniq-using-toolkit.md","lastUpdated":null}'),d={name:"tutorials/uniq-factories/creating-uniq-factories/how-to-mint-uniq-using-toolkit.md"},m=r('<h1 id="how-to-mint-a-uniq-using-the-ultra-toolkit" tabindex="-1">How to mint a Uniq using the Ultra Toolkit <a class="header-anchor" href="#how-to-mint-a-uniq-using-the-ultra-toolkit" aria-label="Permalink to &quot;How to mint a Uniq using the Ultra Toolkit&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>You must have already created a uniq factory. Refer to <a href="./how-to-create-uniq-factory-using-toolkit.html">How to create a Uniq Factory using the Ultra Toolkit</a> for more information.</li><li>Your account must have sufficient UOS tokens for transactions and fees. Refer to <a href="./../../fundamentals/tutorial-obtain-token-and-purchase-ram.html#obtaining-uos-tokens-using-the-faucet">Tutorial - Using the Faucet and Buying RAM on Ultra Testnet</a> for more information.</li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>This guide will help you mint your first Uniq.</p><h2 id="accessing-the-toolkit" tabindex="-1">Accessing the Toolkit <a class="header-anchor" href="#accessing-the-toolkit" aria-label="Permalink to &quot;Accessing the Toolkit&quot;">​</a></h2><p>To access the Ultra Toolkit, please visit: <a href="https://toolkit.ultra.io" target="_blank" rel="noreferrer">https://toolkit.ultra.io</a></p><p>Once you&#39;re on the Toolkit homepage, click on the network selection component on the top right of your screen.</p><p><img src="'+t+'" alt=""></p><p>Clicking on the network selection component will open up a list of available networks that you can use the toolkit on. For the sake of this tutorial, we will be using the Ultra Testnet. From the list of available networks, click on <code>Testnet</code>.</p><p><img src="'+e+'" alt=""></p><p>Login to the Ultra Toolkit using Ultra Wallet. Refer to <a href="./../../fundamentals/tutorial-login-to-toolkit.html">Tutorial - Log in to the Ultra Toolkit</a> for more information.</p><h2 id="minting-a-uniq" tabindex="-1">Minting a Uniq <a class="header-anchor" href="#minting-a-uniq" aria-label="Permalink to &quot;Minting a Uniq&quot;">​</a></h2><h3 id="_1-accessing-factory-management-page" tabindex="-1">1. Accessing Factory Management Page <a class="header-anchor" href="#_1-accessing-factory-management-page" aria-label="Permalink to &quot;1. Accessing Factory Management Page&quot;">​</a></h3><p>Once you&#39;ve logged in to the toolkit, from the toolkit home page, click on the <code>Uniq Actions</code> from the sidebar, and then click on <code>Factory</code> to open the uniq factory actions page.</p><p><img src="'+s+'" alt=""></p><p>On the factory page, search for <code>issue</code> action in the search box, and click on the <code>Issue tokens (eosio.nft.ft::issue.b)</code> action to open up the transaction modal.</p><h3 id="_2-configure-issue-b-action" tabindex="-1">2. Configure <code>issue.b</code> Action <a class="header-anchor" href="#_2-configure-issue-b-action" aria-label="Permalink to &quot;2. Configure `issue.b` Action&quot;">​</a></h3><p>We are going to use the <code>issue.b</code> action to mint a uniq. For more information on the action, refer to <a href="./../../../blockchain/contracts/nft-contract/nft-actions/issue.b.html">issue.b action documentation</a>.</p><p>Once you have opened the transaction modal, fill the required fields for the <code>issue.b</code> action:</p><ul><li><strong>To</strong>: Required, the recipient of the minted token. Input your account if you want to receive the minted uniq in your wallet.</li><li><strong>Token configs</strong>: Click <code>Add</code> to input the <code>Token factory ID</code>, <code>Amount</code>, and <code>Custom data</code>. <ul><li><strong>Token factory ID</strong>: Required, the ID of the factory from which the uniqs will be minted. Use the ID of the uniq factory created in the previous guide. Refer to <a href="./how-to-create-uniq-factory-using-toolkit.html">How to create a Uniq Factory using the Ultra Toolkit</a> for more information.</li><li><strong>Amount</strong>: Required, the number of uniqs to be minted. For the sake of this guide, we will mint <code>1</code> uniq.</li><li><strong>Custom data</strong>: Deprecated, leave blank.</li></ul></li><li><strong>Memo</strong>: Required, enter a text memo for your transaction. For example, <code>Minting my first uniq</code>.</li><li><strong>Authorizer</strong>: Optional, the authorizer of the mint. Must be one of authorized minters of the factory. Leave blank to use <code>null</code>.</li><li><strong>Maximum UOS payment</strong>: Maximum amount of UOS that is allowed to be used for the purposes of contract RAM usage. For simplicity&#39;s sake, we will Leave blank to use <code>null</code>.</li><li><strong>Token metadata</strong>: Click <code>Add</code> to input the <code>Metadata URI</code> and <code>Metadata hash</code>. <ul><li><strong>Metadata URI</strong>: Required, the URI of the token metadata. We are using <code>https://developers.ultra.io/uniq-collections/AngryBananas/1.json</code>, based on the metadata we created during the <a href="./how-to-create-uniq-metadata.html">How to create Uniq metadata</a> guide.</li><li><strong>Metadata hash</strong>: Optional, hash of the token metadata. We are using <code>2da6b5b4d8ecf25ac3b472c16264b02c48d35833196a262db562ea988e34417f</code>, based on the metadata we created during previous guides.</li></ul></li></ul><p><img src="'+l+'" alt=""></p><p>Once you have inputted all the values, click on the <code>Send 1 Action</code> button and it will open up the transaction confirmation modal. You can click on the <code>Details</code> button to view the transaction in JSON form. Click on the <code>Confirm</code> button to submit your transaction.</p><p><img src="'+c+'" alt=""></p><p>Confirm and sign the transaction using the Ultra Wallet extension. This step is crucial as it authorizes the blockchain to execute the transfer under your account.</p><p><img src="'+u+'" alt=""></p><p>After signing the transaction, you will see a confirmation screen indicating that the transaction was successfully completed. To check the transaction on the block explorer, click on the <code>View in Explorer</code> text.</p><p><img src="'+o+'" alt=""></p><h3 id="_3-verifying-minted-uniq" tabindex="-1">3. Verifying Minted Uniq <a class="header-anchor" href="#_3-verifying-minted-uniq" aria-label="Permalink to &quot;3. Verifying Minted Uniq&quot;">​</a></h3><ol><li><p>To verify the successful creation of your Uniq Factory, go to the <code>User Uniq Explorer</code> page on the toolkit (<a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">https://toolkit.ultra.io/user</a>).</p></li><li><p>Make sure you are using the Ultra Testnet environment.</p></li><li><p>Input your account name and click on the search button. You should be able to view the details of your newly minted uniq under the <code>Uniqs</code> section. It may take a few seconds to sync the data, so if your uniq is not shown, please wait a few seconds and reload the page.</p><p><img src="'+h+'" alt=""></p></li></ol><p>You have now successfully minted your first uniq using the Ultra Toolkit.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>Once you have practiced minting Uniqs from your factory, the next steps are to:</p><ul><li><a href="./how-to-update-uniq-metadata-using-toolkit.html">How to update metadata using the Ultra Toolkit</a></li><li><a href="./../factory-management/how-to-perform-advanced-actions-with-uniqs-and-factories.html">How to perform advanced actions with Uniqs and Factories</a></li></ul>',34),p=[m];function f(g,k,q,b,y,w){return n(),i("div",null,p)}const A=a(d,[["render",f]]);export{v as __pageData,A as default};
