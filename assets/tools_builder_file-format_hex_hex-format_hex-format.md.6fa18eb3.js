import{_ as a,c as l,a as e,b as p,r as t,o}from"./app.07a1ad52.js";const r="/assets/hex-format.c3145700.png",g=JSON.parse('{"title":"HEX文件详解","description":"","frontmatter":{},"headers":[{"level":2,"title":"1 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2 HEX文件的生成","slug":"_2-hex文件的生成","link":"#_2-hex文件的生成","children":[]},{"level":2,"title":"3 HEX文件格式","slug":"_3-hex文件格式","link":"#_3-hex文件格式","children":[]},{"level":2,"title":"4 扩展地址段","slug":"_4-扩展地址段","link":"#_4-扩展地址段","children":[]}],"relativePath":"tools/builder/file-format/hex/hex-format/hex-format.md"}'),c={name:"tools/builder/file-format/hex/hex-format/hex-format.md"},i=p(`<h1 id="hex文件详解" tabindex="-1">HEX文件详解 <a class="header-anchor" href="#hex文件详解" aria-hidden="true">#</a></h1><hr><table><thead><tr><th>软件版本</th><th>硬件版本</th><th>更新内容</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table><hr><h2 id="_1-概述" tabindex="-1">1 概述 <a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a></h2><p>HEX文件是在单片机开发量产时常用的一种编译生成的文件格式，用于烧写代码到特定的<strong>flash</strong>位置，在hex中包含地址信息和数据信息。</p><h2 id="_2-hex文件的生成" tabindex="-1">2 HEX文件的生成 <a class="header-anchor" href="#_2-hex文件的生成" aria-hidden="true">#</a></h2><p>通过在linux下使用GCC只能生成ELF文件，而不能生成HEX文件，那可以<strong>objcopy</strong>来将ELF转化为HEX文件，过程如下：</p><p>下面是一段C语言的代码,保存在<strong>test.c</strong>文件中</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F92672;">#include</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">static</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> var </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">argc</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">char</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">*</span><span style="color:#FD971F;font-style:italic;">argv</span><span style="color:#F92672;">[]</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">printf</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;this is a test program. var = </span><span style="color:#AE81FF;">%d\\n</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">, var);</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>我们通过gcc来生成ELF文件</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">gcc test.c </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">o test</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后可以再通过<strong>objcopy</strong>来生成hex文件</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">objcopy </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">O ihex test test.hex</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-hex文件格式" tabindex="-1">3 HEX文件格式 <a class="header-anchor" href="#_3-hex文件格式" aria-hidden="true">#</a></h2><p>使用<strong>vim</strong>打开hex文件可以年到如下内容：</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">100318002F6C696236342F6C642D6C696E75782D7C</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">0C0328007838362D36342E736F2E3200DC</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">10033800040000001000000005000000474E5500B2</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">10034800020000C0040000000300000000000000DC</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">10035800040000001400000003000000474</span><span style="color:#F92672;">E</span><span style="color:#AE81FF;">550090</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">10036800FE24AC15903EE8E4AE5B8A254C1CBB51DC</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">04037800622885660C</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">10037C00040000001000000001000000474E550072</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">10038C00000000000300000002000000000000005C</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>HEX文件是以行为单位来存储数据，每一行的格式如下： <img src="`+r+`" alt="hex format" title="opt title"></p><ul><li>第1个字节表示后面记录的是数据</li><li>第2和3个字节表示该行的起始地址</li><li>第4个字节表示数据段的类型</li></ul><table><thead><tr><th>值</th><th>含义</th></tr></thead><tbody><tr><td>00</td><td>表示后面记录的是数据</td></tr><tr><td>01</td><td>表示文件结束</td></tr><tr><td>02</td><td>表示扩展段地址</td></tr><tr><td>03</td><td>表示开始段地址</td></tr><tr><td>04</td><td>表示扩展线性地址</td></tr><tr><td>05</td><td>表示开始线性地址</td></tr></tbody></table><ul><li>第5~N-1个字节是数据部分</li><li>第N个字节是数据校验部分，校验值为：0x100 - (从0到N-1个字节相加的和)</li></ul><h2 id="_4-扩展地址段" tabindex="-1">4 扩展地址段 <a class="header-anchor" href="#_4-扩展地址段" aria-hidden="true">#</a></h2><p>从上面可以看到地址部分只有两个字节，可以表示的地址范围为<strong>0x0000</strong>到<strong>0xFFFF</strong>,如果地址超过<strong>0xFFFF</strong>,这个时候就需要使用扩展地址来表示了，如下面的数据：</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">020000040800F2</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">10033800040000001000000005000000474E5500B2</span></span>
<span class="line"><span style="color:#F8F8F2;">:</span><span style="color:#F44747;">10034800020000C0040000000300000000000000DC</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>其中第1行中每4个字节为<strong>0x04</strong>,表示扩展地址开始，那么下面所有行的地址都要使用该行数据部分左移16位来作为基地址 也就是 <code>0x0800 &lt;&lt; 16</code> 也就是 <code>0x0800 0000</code></li><li>第2行的地址就是<code>0x0800 0000 + 0x0338</code></li><li>第3行的地址就是<code>0x0800 0000 + 0x0348</code></li></ul><hr><div class="tip custom-block"><p class="custom-block-title">提示</p><p>欢迎评论、探讨,如果发现错误请指正。转载请注明出处！ <a href="http://www.tsz.wiki" target="_blank" rel="noreferrer">探索者</a></p></div><hr>`,28);function F(s,d,h,y,b,u){const n=t("Vssue");return o(),l("div",null,[i,e(n,{title:s.$title},null,8,["title"])])}const _=a(c,[["render",F]]);export{g as __pageData,_ as default};