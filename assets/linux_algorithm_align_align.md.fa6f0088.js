import{_ as n,r as e,o as l,c as t,a as o,b as p}from"./app.caef484b.js";const m=JSON.parse('{"title":"对齐计算ALIGN","description":"","frontmatter":{},"headers":[{"level":2,"title":"对齐的含意","slug":"对齐的含意","link":"#对齐的含意","children":[]},{"level":2,"title":"ALIGN","slug":"align","link":"#align","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"relativePath":"linux/algorithm/align/align.md"}'),r={name:"linux/algorithm/align/align.md"},c=p(`<h1 id="对齐计算align" tabindex="-1">对齐计算ALIGN <a class="header-anchor" href="#对齐计算align" aria-hidden="true">#</a></h1><hr><table><thead><tr><th>软件版本</th><th>硬件版本</th><th>更新内容</th></tr></thead><tbody><tr><td>linux 5.8.18</td><td>arm64</td><td></td></tr></tbody></table><hr><h2 id="对齐的含意" tabindex="-1">对齐的含意 <a class="header-anchor" href="#对齐的含意" aria-hidden="true">#</a></h2><p>A以B对齐的含意就是A加上C这个值之后变为B的整数倍。其中$$ C=B-(A%B) $$，而<code>A+C</code>就是最终要求的结果，但取余计算效率比较低，所以内存通过一种更巧妙的方法来计算,当然这个方法也有局限性就是要求B必须为$$2^n$$</p><h2 id="align" tabindex="-1">ALIGN <a class="header-anchor" href="#align" aria-hidden="true">#</a></h2><p>代码如下</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F92672;">#define</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">ALIGN</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">a</span><span style="color:#F8F8F2;">)		</span><span style="color:#A6E22E;">__ALIGN_KERNEL</span><span style="color:#F8F8F2;">((x), (a))</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">__ALIGN_KERNEL</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">a</span><span style="color:#F8F8F2;">)		</span><span style="color:#A6E22E;">__ALIGN_KERNEL_MASK</span><span style="color:#F8F8F2;">(x, (</span><span style="color:#A6E22E;">typeof</span><span style="color:#F8F8F2;">(x))(a) </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">__ALIGN_KERNEL_MASK</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">x</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">mask</span><span style="color:#F8F8F2;">)	(((x) </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> (mask)) </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">(mask))</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面的<strong>a</strong>必须是$$2^n$$,这样$$2^n - 1$$的值才会最低<strong>nbit</strong>都是连续的1,而最高bit到<strong>n+1</strong>则全为0，执行<code>~(mask)</code>之后正好相反。<code>(((x) + (mask))</code> 其实相当于我们在上面对齐含意中说的$$A+B-1$$,这个比我们要求的<code>A+C</code>,也就是<code>A+B-(A%B)</code>多了一个<code>A%B-1</code>,多出来的部分都是最低的<strong>nbit</strong>上，所以与<code>~(mask)</code>就可以清除。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-hidden="true">#</a></h2><p>这个计算的过程就是利用了<code>A%B</code>的值都是<code>B</code>的最低<code>n</code>bit上，$$n=\\sqrt[2]{B}$$.</p><hr><div class="tip custom-block"><p class="custom-block-title">提示</p><p>欢迎评论、探讨,如果发现错误请指正。转载请注明出处！ <a href="http://www.tsz.wiki" target="_blank" rel="noreferrer">探索者</a></p></div><hr>`,15);function i(s,F,d,y,h,_){const a=e("Vssue");return l(),t("div",null,[c,o(a,{title:s.$title},null,8,["title"])])}const u=n(r,[["render",i]]);export{m as __pageData,u as default};