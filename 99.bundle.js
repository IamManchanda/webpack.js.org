(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{393:function(n,s,a){"use strict";a.r(s),s.default='<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="colorsjson">./colors.json<a href="#colorsjson" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-javascript"><span class="token punctuation">{</span>\n\t<span class="token string">"red"</span><span class="token punctuation">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>\n\t<span class="token string">"green"</span><span class="token punctuation">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span>\n\t<span class="token string">"blue"</span><span class="token punctuation">:</span> <span class="token string">"blue"</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="de-decolorsjson">./de-de.colors.json<a href="#de-decolorsjson" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-javascript"><span class="token punctuation">{</span>\n\t<span class="token string">"red"</span><span class="token punctuation">:</span> <span class="token string">"rot"</span><span class="token punctuation">,</span>\n\t<span class="token string">"green"</span><span class="token punctuation">:</span> <span class="token string">"gr�n"</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="call-it">call it<a href="#call-it" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-javascript"><span class="token comment">// assuming our locale is "de-de-berlin"</span>\n<span class="token keyword">var</span> locale <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"i18n!./colors.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// wait for ready, this is only required once for all locales in a web app</span>\n<span class="token comment">// because all locales of the same language are merged into one chuck</span>\n<span class="token function">locale</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints rot</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints blue</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="options">options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>You should tell the loader about all your locales, if you want to load them once\nand than want to use them synchronous.</p>\n<pre><code class="hljs language-javascript"><span class="token punctuation">{</span>\n\t<span class="token string">"i18n"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token string">"locales"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token string">"de"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"de-de"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"fr"</span>\n\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t<span class="token comment">// "bundleTogether": false</span>\n\t\t<span class="token comment">// this can disable the bundling of locales</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="alternative-calls">alternative calls<a href="#alternative-calls" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-javascript"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"i18n/choose!./file.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// chooses the correct file by locale,</span>\n\t\t\t\t\t<span class="token comment">// but it do not merge the objects</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"i18n/concat!./file.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// concatinate all fitting locales</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"i18n/merge!./file.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// merges the resulting objects</span>\n\t\t\t\t\t<span class="token comment">// ./file.js is excuted while compiling</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"i18n!./file.json"</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"i18n/merge!json!./file.json"</span><span class="token punctuation">)</span></code></pre>\n<p>Don\'t forget to polyfill <code>require</code> if you want to use it in node.\nSee <code>webpack</code> documentation.</p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>MIT (<a href="http://www.opensource.org/licenses/mit-license.php">http://www.opensource.org/licenses/mit-license.php</a>)</p>\n'}}]);