import{_ as t,c as e,o,N as a}from"./chunks/framework.wVj9vBva.js";const n="/staging/assets/transfer-Uniq-search-transfer.8GqylN93.png",i="/staging/assets/transfer-Uniq-form.Yk80mXQn.png",r="/staging/assets/burn-Uniq-search-burn.qEDGobIx.png",s="/staging/assets/burn-Uniq-form.Oi0tbwZC.png",c="/staging/assets/authorized-minter-search-authmint.9ysrluwf.png",l="/staging/assets/authorized-minter-form._OvtMuhv.png",h="/staging/assets/authorized-minter-search-issue.oIew8vKg.png",u="/staging/assets/authorized-minter-issue-form.x0BIvrIc.png",d="/staging/assets/authorized-minter-result.5TDT5x6F.png",v=JSON.parse('{"title":"How to perform advanced actions with Uniqs and Factories using Ultra Toolkit","description":"","frontmatter":{"title":"How to perform advanced actions with Uniqs and Factories using Ultra Toolkit","order":1,"outline":[0,4]},"headers":[],"relativePath":"tutorials/uniq-factories/factory-management/how-to-perform-advanced-actions-with-uniqs-and-factories.md","filePath":"tutorials/uniq-factories/factory-management/how-to-perform-advanced-actions-with-uniqs-and-factories.md","lastUpdated":null}'),f={name:"tutorials/uniq-factories/factory-management/how-to-perform-advanced-actions-with-uniqs-and-factories.md"},m=a('<h1 id="how-to-perform-advanced-actions-with-uniqs-and-factories" tabindex="-1">How to perform advanced actions with Uniqs and Factories <a class="header-anchor" href="#how-to-perform-advanced-actions-with-uniqs-and-factories" aria-label="Permalink to &quot;How to perform advanced actions with Uniqs and Factories&quot;">​</a></h1><p>After you have successfully created a factory and minted some Uniqs, you may now want to check what else you can do potentially.</p><p>This guide will cover some advanced actions that apply to Uniqs and Factories using the Ultra Toolkit.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>Created a Uniq Factory and minted some Uniqs. Follow the <a href="./../creating-uniq-factories/how-to-create-uniq-metadata.html">Factory creation guide</a> and the <a href="./../creating-uniq-factories/how-to-mint-uniq-using-toolkit.html">Uniq minting guide</a> for details.</li><li>Your account must have sufficient UOS tokens for transactions and fees. If you don&#39;t have tokens, see <a href="./../../fundamentals/tutorial-obtain-token-and-purchase-ram.html">how to use Faucet</a> for Testnet or <a href="./../../guides/how-to-buy-uos.html">how to buy UOS</a> for Mainnet.</li><li>A developer account on the Ultra Testnet or Mainnet and to be logged into the Ultra Toolkit. If you don&#39;t have it, please follow our previous tutorial: <a href="./../../fundamentals/tutorial-login-to-toolkit.html">Tutorial - Log in to the Ultra Toolkit</a>.</li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this guide is to demonstrate the usage of some of the actions you can perform with your Uniqs and Factories using Ultra Toolkit. This includes the transferring and burning Uniqs; adding authorized minters to a factory.</p><h2 id="how-to-transfer-a-uniq-to-another-account" tabindex="-1">How to transfer a Uniq to another account <a class="header-anchor" href="#how-to-transfer-a-uniq-to-another-account" aria-label="Permalink to &quot;How to transfer a Uniq to another account&quot;">​</a></h2><p>For testing it may be necessary to transfer Uniqs manually and in greater quantities. You can use the toolkit to quickly assemble a transfer transaction and run it. For more details see the <a href="./../../../blockchain/contracts/nft-contract/nft-actions/transfer.html">action documentation</a>.</p><p>First, navigate to <a href="https://toolkit.ultra.io/uniqManagement" target="_blank" rel="noreferrer">Uniq management actions</a>, search <code>transfer</code>, and select the <code>Transfer token (eosio.nft.ft::transfer)</code> action.</p><p><img src="'+n+'" alt=""></p><p>You need to fill the following fields:</p><ul><li><strong>From</strong> - The account that currently owns the Uniq, you have logged in with, and want to transfer the Uniq from.</li><li><strong>To</strong> - The receiver of the Uniq.</li><li><strong>Token IDs</strong> - A list of Uniqs that will be transferred, you can add multiple and send them all at once. To know the Uniq ID you can use the user <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory page</a>.</li><li><strong>Memo</strong> - Simple text message that can be used for various purposes. Does not affect the result of the transaction. Optional, can leave it empty.</li></ul><p><img src="'+i+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, you should be able to see the Uniq on the receiver account <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory</a>.</p><h2 id="how-to-burn-a-uniq-manually" tabindex="-1">How to burn a Uniq manually <a class="header-anchor" href="#how-to-burn-a-uniq-manually" aria-label="Permalink to &quot;How to burn a Uniq manually&quot;">​</a></h2><p>Burn action allows you to delete a token and get a UOS refund based on the portion of UOS that was spent to mint it. This effectively lets you get rid of Uniqs that are no longer needed. For more details see the <a href="./../../../blockchain/contracts/nft-contract/nft-actions/burn.html">action documentation</a>.</p><p>First, navigate to <a href="https://toolkit.ultra.io/uniqManagement" target="_blank" rel="noreferrer">Uniq management actions</a>, search <code>burn</code>, and select the <code>Burn a token (eosio.nft.ft::burn)</code> action.</p><p><img src="'+r+'" alt=""></p><p>You need to fill the following fields:</p><ul><li><strong>Owner</strong> - The account that owns a Uniq and that you have logged in with.</li><li><strong>Token IDs</strong> - A list of Uniqs that will be burned. You can burn multiple Uniqs at a time.</li><li><strong>Memo</strong> - Simple text message that can be used for various purposes. Does not affect the result of the transaction. Optional, can leave it empty.</li></ul><p><img src="'+s+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, you should no longer see the Uniq on the owner account <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory</a>.</p><h2 id="how-to-add-authorized-minters-to-a-factory" tabindex="-1">How to add authorized minters to a factory <a class="header-anchor" href="#how-to-add-authorized-minters-to-a-factory" aria-label="Permalink to &quot;How to add authorized minters to a factory&quot;">​</a></h2><p>Sometimes it may be desired to allow accounts other than the factory manager to mint Uniqs from the factory. For this purpose the authorized minter feature is used. For more details see the <a href="./../../../blockchain/contracts/nft-contract/nft-actions/authmint.b.html">action documentation</a>.</p><p>To do so, first navigate to <a href="https://toolkit.ultra.io/factoryManagement" target="_blank" rel="noreferrer">Factory management actions</a>, and search again for <code>authmint</code> and select <code>Authorize minter (eosio.nft.ft::authmint.b)</code>.</p><p><img src="'+c+'" alt=""></p><p>You need to fill the following fields:</p><ul><li><strong>Authorizer</strong> - The account that manages the factory or was previously authorized using authorized minter action.</li><li><strong>Authorized minter</strong> - The account that will be authorized to mint Uniqs from the factory or to delegate the minting authorization to other accounts.</li><li><strong>Token factory ID</strong> - The ID of the factory that the authorized minter will be allowed to mint from.</li><li><strong>Quantity</strong> - The maximum number of Uniqs that authorized minter will be allowed to mint. Mandatory to specify even if the factory has no limit on the number of Uniqs that can be minted.</li><li><strong>Maximum UOS payment</strong> - The maximum amount of UOS you are ok to pay to assign the authorized minter. The payment is only used to cover RAM costs and is predictable. Optional, can leave it empty.</li><li><strong>Memo</strong> - Simple text message that can be used for various purposes. Does not affect the result of the transaction. Optional, can leave it empty.</li></ul><p><img src="'+l+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, the <code>Authorized minter</code> account will be allowed to mint the specific number of Uniqs from the factory.</p><p>To actually mint the Uniqs as authorized minter you need to utilize the <code>Authorizer</code> field of <code>issue</code> action. Navigate to <a href="https://toolkit.ultra.io/factoryManagement" target="_blank" rel="noreferrer">Factory management actions</a>, and search for <code>issue</code> and select <code>Issue tokens (eosio.nft.ft::issue.b)</code>.</p><p><img src="'+h+'" alt=""></p><p>Similar to <a href="./../creating-uniq-factories/how-to-mint-uniq-using-toolkit.html">How to mint a Uniq using the Ultra Toolkit</a> guide you need to fill <code>To</code>, <code>Token factory ID</code> and <code>Amount</code>. But now you also need to additionally specify the <code>Authorizer</code>. The <code>Authorizer</code> must be an authorized minter assigned using the authorized minter action.</p><p><img src="'+u+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, you should be able to see the Uniq in the receiver account <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory</a>.</p><p><img src="'+d+'" alt=""></p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><ul><li><a href="./../factory-management/how-to-add-first-hand-purchase-using-toolkit.html">How to add a first-hand purchase options using Ultra Toolkit</a></li></ul>',39),g=[m];function p(q,y,w,b,k,U){return o(),e("div",null,g)}const T=t(f,[["render",p]]);export{v as __pageData,T as default};