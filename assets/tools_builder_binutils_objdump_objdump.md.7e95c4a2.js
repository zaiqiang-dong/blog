import{_ as a,r as s,o,c as n,a as d,b as l}from"./app.caef484b.js";const j=JSON.parse('{"title":"OBJDUMP工具详解","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. OBJDUMP使用方法","slug":"_1-objdump使用方法","link":"#_1-objdump使用方法","children":[]},{"level":2,"title":"2. OBJDUMP选项","slug":"_2-objdump选项","link":"#_2-objdump选项","children":[]}],"relativePath":"tools/builder/binutils/objdump/objdump.md"}'),r={name:"tools/builder/binutils/objdump/objdump.md"},i=l(`<h1 id="objdump工具详解" tabindex="-1">OBJDUMP工具详解 <a class="header-anchor" href="#objdump工具详解" aria-hidden="true">#</a></h1><hr><table><thead><tr><th>软件版本</th><th>硬件版本</th><th>更新内容</th></tr></thead><tbody><tr><td>linux 5.8.18</td><td>arm64</td><td></td></tr></tbody></table><hr><h2 id="_1-objdump使用方法" tabindex="-1">1. OBJDUMP使用方法 <a class="header-anchor" href="#_1-objdump使用方法" aria-hidden="true">#</a></h2><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">objdump [options] objfile</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>objdump: 命令 options: 选项，用于指示objdump以指定的格式显示指定的内容。 objfile: 一般为elf文件</p><h2 id="_2-objdump选项" tabindex="-1">2. OBJDUMP选项 <a class="header-anchor" href="#_2-objdump选项" aria-hidden="true">#</a></h2><hr><div class="tip custom-block"><p class="custom-block-title">提示</p><p>欢迎评论、探讨,如果发现错误请指正。转载请注明出处！ <a href="http://www.tsz.wiki" target="_blank" rel="noreferrer">探索者</a></p></div><hr>`,11);function p(e,c,u,b,h,m){const t=s("Vssue");return o(),n("div",null,[i,d(t,{title:e.$title},null,8,["title"])])}const f=a(r,[["render",p]]);export{j as __pageData,f as default};