import{_ as e,c as t,o as a,N as o}from"./chunks/framework.eKw9w8LU.js";const y=JSON.parse('{"title":"Uniq First-Hand Purchase Example Project","description":"","frontmatter":{"title":"Uniq First-Hand Purchase Example Project","order":6},"headers":[],"relativePath":"tutorials/uniq-factories/factory-management/uniq-first-hand-purchase-example-project.md","filePath":"tutorials/uniq-factories/factory-management/uniq-first-hand-purchase-example-project.md","lastUpdated":null}'),i={name:"tutorials/uniq-factories/factory-management/uniq-first-hand-purchase-example-project.md"},s=o('<h1 id="uniq-first-hand-purchase-example-project" tabindex="-1">Uniq First-Hand Purchase Example Project <a class="header-anchor" href="#uniq-first-hand-purchase-example-project" aria-label="Permalink to &quot;Uniq First-Hand Purchase Example Project&quot;">​</a></h1><p>This page covers an example project that lets users buy, swap or exchange their Uniqs using first hand purchase functionality. For installation instructions refer to the repository itself.</p><p>Code is available here: <a href="https://github.com/ultraio/example-first-hand-purchase" target="_blank" rel="noreferrer">https://github.com/ultraio/example-first-hand-purchase</a></p><h2 id="use-cases" tabindex="-1">Use cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use cases&quot;">​</a></h2><ul><li><p>This project provides a reference implementation for integrating first hand purchase functionality into your web-based solution.</p></li><li><p>Parts of the implementation can be extracted and reused as needed or you can simply update the code to your needs and deploy it as is.</p></li><li><p>If your project requires users to be able to get Uniqs in any way without having a backend then this example project can benefit you as it operates as a static website and interacts with Ultra Blockchain directly.</p></li><li><p>Since some of the settings of Uniq factories are fixed during creation and cannot be changed you could utilize first-hand purchase functionality to let users exchange their Uniqs from existing factory to a new factory. This new factory could have different values for immutable settings (such as transferability window or tradeability window) and by exchanging a Uniq you will effectively change those values.</p></li></ul><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>Following steps are performed to get the user from the stage of loading the page up to a point of successfully getting a new Uniq:</p><ul><li><p>User is first prompted to connect the <a href="./../../../products/ultra-wallet/">Ultra Wallet Extension</a>. This is used to figure out the user&#39;s blockchain account name and what network he is connected to. Most users will be using the Mainnet but for testing and validation purposes Testnet may be used. This is already supported so no need to do any extra steps besides selecting the correct environment in the wallet extension</p></li><li><p>Factory ID must be provided next to specify which factory should be utilized to get purchase options from. As there potentially could be a high number of factories with purchase options available this filtering step is necessary for smooth operation. Additionally it is an unlikely scenario that you don&#39;t know which factories you are integrating with. In case it is not true you can adjust the code so it scans all the possible purchase option entries</p></li><li><p>User inventory is scanned to figure out which Uniqs user already has and which can be used for any first-hand purchase as a form of payment or proof of ownership</p></li><li><p>Then user is presented with only the purchase options that he has Uniqs available for (and options which require Uniqs as a form of payment or a proof to begin with). The additional UOS/USD price will be listed as well for user awareness.</p></li><li><p>After user selects a first hand purchase option he will need to specify which Uniqs should be used as a payment or a proof of ownership. Uniqs used for <code>burn</code> or <code>transfer</code> will be take from user inventory later on when transaction is executed</p></li><li><p>The final step is for user to sign a transaction. In case something goes wrong a pop up will be created stating a reason for a failure in a short form. This behavior and messaging can be updated based on your needs.</p></li></ul><h2 id="how-to-integrate-or-modify" tabindex="-1">How to integrate or modify <a class="header-anchor" href="#how-to-integrate-or-modify" aria-label="Permalink to &quot;How to integrate or modify&quot;">​</a></h2><p>With this example project you have primarily two options:</p><ol><li>Modify the project directly <ul><li>In this case you don&#39;t need any extra steps besides just introducing the changes you are interested in</li><li>The changes you may want to add include: styling changes, updating logic for filtering of purchase options, adding custom logic or actions into assembled transaction to integrate with any other smart contract</li></ul></li><li>Take out the necessary parts out of the implementation or use it as a reference <ul><li>In case you believe the project does too much for what you need then you can analyze the code and take only parts of the implementation</li></ul></li></ol><h2 id="how-to-deploy" tabindex="-1">How to deploy <a class="header-anchor" href="#how-to-deploy" aria-label="Permalink to &quot;How to deploy&quot;">​</a></h2><p>In case you decide to go with modifying the example project instead of integrating parts of it you can use the provided GitHub workflow within the repository as a reference. Workflow runs the build step which will generate the HTML files and associated JavaScript source code after which it can be deployed to any hosting solution of your choice including GitHub Pages.</p><p>Since this example project works as a static website with no backend you should have no problem hosting, operating or distributing it.</p>',14),r=[s];function n(l,c,h,u,d,p){return a(),t("div",null,r)}const m=e(i,[["render",n]]);export{y as __pageData,m as default};
