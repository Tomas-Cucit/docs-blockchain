import{_ as i,c as s,o as a,N as t}from"./chunks/framework.wVj9vBva.js";const E=JSON.parse('{"title":"Ultra SSO integration guide","description":"","frontmatter":{"title":"Ultra SSO integration guide","outline":[0,5],"order":1},"headers":[],"relativePath":"game-developers/web/index.md","filePath":"game-developers/web/index.md","lastUpdated":null}'),e={name:"game-developers/web/index.md"},n=t(`<h1 id="ultra-sso-integration-guide" tabindex="-1">Ultra SSO integration guide <a class="header-anchor" href="#ultra-sso-integration-guide" aria-label="Permalink to &quot;Ultra SSO integration guide&quot;">​</a></h1><p>The ultra platform Identity and Access Management (IAM) is provided by an OpenID Connect compliant server.</p><p>The ultra platform OpenID Connect server is Keycloak. Each development partner must <a href="./get-client-id.html">request a client_id</a> from Ultra.</p><p>OpenID Connect is an interoperable authentication protocol based on the OAuth 2.0 family of specifications.</p><h2 id="requesting-access-from-ultra" tabindex="-1">Requesting access from Ultra <a class="header-anchor" href="#requesting-access-from-ultra" aria-label="Permalink to &quot;Requesting access from Ultra&quot;">​</a></h2><p>Before being able to successfully start this tutorial, you will need to send a client request to the Ultra team to the <a href="mailto:support@ultra.io" target="_blank" rel="noreferrer">support@ultra.io</a> email address giving:</p><ul><li>a description of the purpose of the web application</li><li>a redirect URL which will be used by our auth server to redirect the user when logged in (we will take <code>https://redirecturi/callback</code> as example in the tutorial)</li></ul><p>Once the <a href="./get-client-id.html">client_id</a> for your web application has been created by the Ultra team, an email response will be sent back to you with the corresponding client_id (and clientSecret which will be useless for the flow used in the Single Sign On - i.e. SSO).</p><h3 id="domains" tabindex="-1">Domains <a class="header-anchor" href="#domains" aria-label="Permalink to &quot;Domains&quot;">​</a></h3><p>For different domains, Ultra provides different URLs that you must use for authentication purposes. These are the ones that are open to the public.</p><table><thead><tr><th>Auth Domain</th><th>Blockchain network</th><th>Example URL</th></tr></thead><tbody><tr><td>auth.ultra.io</td><td>Mainnet</td><td><a href="https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect/auth" target="_blank" rel="noreferrer">https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect/auth</a></td></tr><tr><td>auth.staging.ultra.io</td><td>Testnet</td><td><a href="https://auth.staging.ultra.io/auth/realms/ultraio/protocol/openid-connect/auth" target="_blank" rel="noreferrer">https://auth.staging.ultra.io/auth/realms/ultraio/protocol/openid-connect/auth</a></td></tr></tbody></table><h2 id="requesting-oauth-authorization-code" tabindex="-1">Requesting OAuth Authorization Code <a class="header-anchor" href="#requesting-oauth-authorization-code" aria-label="Permalink to &quot;Requesting OAuth Authorization Code&quot;">​</a></h2><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><p>Below is an example of a request URL that you can open in the browser windows (Ultra client) to request an OAuth Authorization Code. Replace the parameter values with the ones relevant to your project.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://auth.staging.ultra.io/auth/realms/ultraio/protocol/openid-connect/auth</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client_id=third-party-client</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;response_type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fj8o3n7bdy1op5</span></span></code></pre></div><p>In this example, the parts above are:</p><ul><li><p><a href="http://auth.staging.ultra.io" target="_blank" rel="noreferrer">http://auth.staging.ultra.io</a> – is the domain on which our authorization server is running (for production environment staging will need to be replaced by <a href="https://auth.ultra.io" target="_blank" rel="noreferrer">https://auth.ultra.io</a> as described in the openId flows documentation)</p></li><li><p>ultraio – is the Ultra Realm</p></li><li><p>third-party-client – is the OAuth client_id you received from the Ultra team (see the above prerequisite)</p></li><li><p>code – is a response_type (OAuth Response Type). This value must be “code” for the OAuth Code Grant flow to work. If you provide a different value here, the request will not work. The response_type is a required parameter in OAuth Code Grant flow,</p></li><li><p>fj8o3n7bdy1op5 – is a RECOMMENDED, opaque value used by the client to maintain state between the request and callback. You will need to generate this random alphanumeric string of characters and include them in the request. The authorization server includes this value when redirecting the user-agent back to the client. The parameter SHOULD be used for preventing cross-site request forgery. The page that handles the response from the authorization server will need to read this value and compare it to the original one that was sent with this request. The two values must match.</p></li></ul><p>Remember that this parameter should be:</p><ol><li>Unique per user session.</li><li>Secret</li><li>Unpredictable (large random value generated by a secure method. Ex.: java.security.SecureRandom).</li></ol><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><p>In the case of a successful request, the authorization server will generate the authorization code and will redirect the client application to a Redirect URI configured in our auth server for this OAuth client.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//redirecturi/callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?state=fj</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">o</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bdy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">op</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;session_state=f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">109</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">89</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-cd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34-4374</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">084</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;code=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aaca</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">314-4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">07-8212-818</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7e8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">109</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">89</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-cd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34-4374</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">084</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">06</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9-4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f-a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">042-727</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">eaa</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">98</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span></span></code></pre></div><h2 id="optional-request-parameters" tabindex="-1">Optional Request Parameters <a class="header-anchor" href="#optional-request-parameters" aria-label="Permalink to &quot;Optional Request Parameters&quot;">​</a></h2><p>A request for an authorization code can include other optional parameters:</p><ul><li><p>scope – OPTIONAL. The scope of the access request,</p></li><li><p>redirect_uri – OPTIONAL. After completing its interaction with the resource owner, the authorization server directs the resource owner’s user-agent back to the client. The authorization server redirects the user-agent to the client’s redirection endpoint previously established with the authorization server during the client registration process or when making the authorization request. If you include this request parameter in the request, then its value must match the one configured in Ultra authorization server. Otherwise, an error will take place.</p></li></ul><p>Below is a Request URL that contains all required, recommended, and optional request parameters you can use in the request for an OAuth Authorization Code.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://auth.staging.ultra.io/auth/realms/ultraio/protocol/openid-connect/auth</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client_id=third-party-client</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;response_type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;scope</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">blockchainid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;redirect_uri</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://redirecturi/callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fj8o3n7bdy1op5</span></span></code></pre></div><h2 id="exchanging-authorization-code-for-the-id-token" tabindex="-1">Exchanging Authorization Code for the Id token <a class="header-anchor" href="#exchanging-authorization-code-for-the-id-token" aria-label="Permalink to &quot;Exchanging Authorization Code for the Id token&quot;">​</a></h2><p>Once you have the Authorization Code, you are ready to exchange it for an access token. Below is an example of a curl command you can use to exchange an authorization code for an access token. Replace the request parameter values with the ones relevant to your project.</p><h3 id="request-1" tabindex="-1">Request <a class="header-anchor" href="#request-1" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --location</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://auth.staging.ultra.io/auth/realms/ultraio/protocol/openid-connect/token&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Content-Type: application/x-www-form-urlencoded&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--data-urlencode </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;grant_type=authorization_code&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--data-urlencode </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;client_id=third-party-client&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--data-urlencode </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;code=0aaca7b5-a314-4c07-8212-818cb4b7e8d0.f109bb89-cd34-4374-b084-c3c1cf2c8a0b.1dc15d06-d8b9-4f0f-a042-727eaa6b98f7&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--data-urlencode </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;redirect_uri=https://redirecturi/callback&#39;</span></span></code></pre></div><p>Where:</p><ul><li><a href="https://redirecturi/callback" target="_blank" rel="noreferrer">https://redirecturi/callback</a> – is a redirect_uri which is REQUIRED, if the redirect_uri parameter was included in the authorization request to acquire the Authorization Code,</li><li>authorization_code – is a REQUIRED grant_type parameter which value must be “authorization_code”. If you provide a different value here, the request will not be successful.</li><li>The value of a code request parameter must be an OAuth Authorization Code that was received from an authorization server. It is this value we are exchanging for an access token.</li></ul><h3 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1" aria-label="Permalink to &quot;Response&quot;">​</a></h3><p>In case of a successful request, below is an example of a response that contains an idtoken (containing the requested user information / ex: walletId, username, email), an access token and a refresh token.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eyJdewfregtrgtgerse6ICItNUlsX2I0cUktdWFvaEI3d244UHY3WEM2UEktU3BNbmZCRnlJZUx6QTJNIn0.eyJleHAiOjE1OTIzNDM5NDEsImlhdCI6MTU5MjM0MzY0MSwiYXV0aF90aW1lIjoxNTkyMzQwODA1LCJqdGkiOiJlYjlhNTc2NS1jYmVhLTQ2ZWMtYTk4NS0wOWFkYTM5NTk5YjIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvYXBwc2RldmVsb3BlcmJsb2ciLCJzdWIiOiIxZGRlM2ZjMy1jNmRiLTQ5ZmItOWIzZC03OTY0YzVjMDY4N2EiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwaG90by1hcHAtY29kZS1mbG93LWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiJmMTA5YmI4OS1jZDM0LTQzNzQtYjA4NC1jM2MxY2YyYzhhMGIiLCJhY3IiOiIwIiwic2NvcGUiOiJwcm9maWxlIiwibmFtZSI6IkthcmdvcG9sb3YiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJnZXkiLCJmYW1pbHlfbmFtZSI6IkthcmdvcG9sb3YifQ.KHCNF0Rn-I7iFosB3oEaWetRw9lhSkkP0-Ef6iW2GAZuuI-GQtZUBDAD_aEDtLTdUpvGL8MKx8Os0qbUZKJJhBhTAJyz2DycgY--ROc_vLbPtJSll-F68tHT6KgC2etbTjpz4Ira6PaLigkT80zGb6tpnQmm1o7a4IGQ40-faKC4fivdfblypGqgRnniOGXMLGpzO2Ln92w1azjFAyOCIBhe3Nlcofjupi26qNGrJKuwBudzZgZCla9RDWm2MUTqMW65AOUpOmiJCd5E4JxbwOuG6H2tbYI2Z-ajQXzzcodmCAWfWu2oRkMaAuNImph8W9tRrqCQ0wlb55tXnUvEuw&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;access_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICItNUlsX2I0cUktdWFvaEI3d244UHY3WEM2UEktU3BNbmZCRnlJZUx6QTJNIn0.eyJleHAiOjE1OTIzNDM5NDEsImlhdCI6MTU5MjM0MzY0MSwiYXV0aF90aW1lIjoxNTkyMzQwODA1LCJqdGkiOiJlYjlhNTc2NS1jYmVhLTQ2ZWMtYTk4NS0wOWFkYTM5NTk5YjIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvYXBwc2RldmVsb3BlcmJsb2ciLCJzdWIiOiIxZGRlM2ZjMy1jNmRiLTQ5ZmItOWIzZC03OTY0YzVjMDY4N2EiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwaG90by1hcHAtY29kZS1mbG93LWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiJmMTA5YmI4OS1jZDM0LTQzNzQtYjA4NC1jM2MxY2YyYzhhMGIiLCJhY3IiOiIwIiwic2NvcGUiOiJwcm9maWxlIiwibmFtZSI6IkthcmdvcG9sb3YiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJnZXkiLCJmYW1pbHlfbmFtZSI6IkthcmdvcG9sb3YifQ.KHCNF0Rn-I7iFosB3oEaWetRw9lhSkkP0-Ef6iW2GAZuuI-GQtZUBDAD_aEDtLTdUpvGL8MKx8Os0qbUZKJJhBhTAJyz2DycgY--ROc_vLbPtJSll-F68tHT6KgC2etbTjpz4Ira6PaLigkT80zGb6tpnQmm1o7a4IGQ40-faKC4fivdfblypGqgRnniOGXMLGpzO2Ln92w1azjFAyOCIBhe3Nlcofjupi26qNGrJKuwBudzZgZCla9RDWm2MUTqMW65AOUpOmiJCd5E4JxbwOuG6H2tbYI2Z-ajQXzzcodmCAWfWu2oRkMaAuNImph8W9tRrqCQ0wlb55tXnUvEuw&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;expires_in&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;refresh_expires_in&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;refresh_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlYWQyMDZmOS05MzczLTQ1OTAtOGQ4OC03YWNkYmZjYTU5MmMifQ.eyJleHAiOjE1OTIzNDU0NDEsImlhdCI6MTU5MjM0MzY0MSwianRpIjoiOGE2NTdhMDktYTQ3My00OTAyLTk1MjItYWYxMGFkMzUwYzUyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2FwcHNkZXZlbG9wZXJibG9nIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2FwcHNkZXZlbG9wZXJibG9nIiwic3ViIjoiMWRkZTNmYzMtYzZkYi00OWZiLTliM2QtNzk2NGM1YzA2ODdhIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6InBob3RvLWFwcC1jb2RlLWZsb3ctY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6ImYxMDliYjg5LWNkMzQtNDM3NC1iMDg0LWMzYzFjZjJjOGEwYiIsInNjb3BlIjoicHJvZmlsZSJ9.WevUHYd7DV3Ft7mFJnM2iLlArotBvLlMfQxlcy0nig8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;token_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bearer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;not-before-policy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;session_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f109bb89-cd34-4374-b084-c3c1cf2c8a0b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;scope&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blockchainid&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Within the access token, you will be able to extract user information.</p>`,37),h=[n];function l(r,p,k,o,d,c){return a(),s("div",null,h)}const g=i(e,[["render",l]]);export{E as __pageData,g as default};