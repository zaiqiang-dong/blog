import{_ as n,r as a,o as l,c as t,a as p,b as r}from"./app.caef484b.js";const o="/assets/1.71cee6c0.png",u=JSON.parse('{"title":"ELF文件格式","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. ELF文件组织形式","slug":"_2-elf文件组织形式","link":"#_2-elf文件组织形式","children":[]},{"level":2,"title":"3. ELF文件中使用的数据类型","slug":"_3-elf文件中使用的数据类型","link":"#_3-elf文件中使用的数据类型","children":[]},{"level":2,"title":"4. ELF文件头","slug":"_4-elf文件头","link":"#_4-elf文件头","children":[{"level":3,"title":"4.1 ELF头中的e_ident","slug":"_4-1-elf头中的e-ident","link":"#_4-1-elf头中的e-ident","children":[]},{"level":3,"title":"4.2 ELF头中的e_type","slug":"_4-2-elf头中的e-type","link":"#_4-2-elf头中的e-type","children":[]},{"level":3,"title":"4.3 ELF头中的e_machine","slug":"_4-3-elf头中的e-machine","link":"#_4-3-elf头中的e-machine","children":[]},{"level":3,"title":"4.4 ELF头中的e_version","slug":"_4-4-elf头中的e-version","link":"#_4-4-elf头中的e-version","children":[]},{"level":3,"title":"4.5 ELF头中的e_entry","slug":"_4-5-elf头中的e-entry","link":"#_4-5-elf头中的e-entry","children":[]},{"level":3,"title":"4.6 ELF头中的e_phoff","slug":"_4-6-elf头中的e-phoff","link":"#_4-6-elf头中的e-phoff","children":[]},{"level":3,"title":"4.7 ELF头中的e_shoff","slug":"_4-7-elf头中的e-shoff","link":"#_4-7-elf头中的e-shoff","children":[]},{"level":3,"title":"4.8 ELF头中的e_flags","slug":"_4-8-elf头中的e-flags","link":"#_4-8-elf头中的e-flags","children":[]},{"level":3,"title":"4.9 ELF头中的e_ehsize","slug":"_4-9-elf头中的e-ehsize","link":"#_4-9-elf头中的e-ehsize","children":[]},{"level":3,"title":"4.10 ELF头中的e_phentsize","slug":"_4-10-elf头中的e-phentsize","link":"#_4-10-elf头中的e-phentsize","children":[]},{"level":3,"title":"4.11 ELF头中的e_phnum","slug":"_4-11-elf头中的e-phnum","link":"#_4-11-elf头中的e-phnum","children":[]},{"level":3,"title":"4.12 ELF头中的e_shentsize","slug":"_4-12-elf头中的e-shentsize","link":"#_4-12-elf头中的e-shentsize","children":[]},{"level":3,"title":"4.13 ELF头中的e_shnum","slug":"_4-13-elf头中的e-shnum","link":"#_4-13-elf头中的e-shnum","children":[]},{"level":3,"title":"4.14 ELF头中的e_shstrndx","slug":"_4-14-elf头中的e-shstrndx","link":"#_4-14-elf头中的e-shstrndx","children":[]}]},{"level":2,"title":"5. SECTIONS节","slug":"_5-sections节","link":"#_5-sections节","children":[]},{"level":2,"title":"6. Section header","slug":"_6-section-header","link":"#_6-section-header","children":[]},{"level":2,"title":"7. Section header table","slug":"_7-section-header-table","link":"#_7-section-header-table","children":[]},{"level":2,"title":"8. Program header","slug":"_8-program-header","link":"#_8-program-header","children":[]},{"level":2,"title":"9. Program header table","slug":"_9-program-header-table","link":"#_9-program-header-table","children":[]},{"level":2,"title":"10. 特殊的一些Section","slug":"_10-特殊的一些section","link":"#_10-特殊的一些section","children":[{"level":3,"title":"10.1 string table section","slug":"_10-1-string-table-section","link":"#_10-1-string-table-section","children":[]}]}],"relativePath":"tools/builder/file-format/elf/elf-format/elf-format.md"}'),i={name:"tools/builder/file-format/elf/elf-format/elf-format.md"},c=r('<h1 id="elf文件格式" tabindex="-1">ELF文件格式 <a class="header-anchor" href="#elf文件格式" aria-hidden="true">#</a></h1><hr><table><thead><tr><th>软件版本</th><th>硬件版本</th><th>更新内容</th></tr></thead><tbody><tr><td>ELF64</td><td>arm64</td><td></td></tr></tbody></table><hr><h2 id="_1-概述" tabindex="-1">1. 概述 <a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a></h2><p>ELF文件，也就是<strong>Executable and Linking Format</strong>.gcc等编译器生成的就是这个类型的文件.存在三种类型的elf文件:</p><ol><li>可重定位文件<strong>relocatable file</strong>, 可用于生成可执行文件或者共享库文件的二进制代码和数据，例如**.o**文件</li><li>可执行文件<strong>executable file</strong>, 可直接执行的二进制文件</li><li>共享库文件<strong>shared object file</strong>, 常见的为**.so**文件，两个作用： <ul><li>用于链接生成新的二进制文件</li><li>用于动态映射到一个可执行文件中创建新的进程</li></ul></li></ol><h2 id="_2-elf文件组织形式" tabindex="-1">2. ELF文件组织形式 <a class="header-anchor" href="#_2-elf文件组织形式" aria-hidden="true">#</a></h2><p>分两种格式，一种可执行文件，<a href="http://xn--4gq6mj8iwzaz3q0pq7fbw27fttcgul214f.xn--o-se9a.so" target="_blank" rel="noreferrer">另外一种用于链接的包括.o和.so</a></p><p><img src="'+o+`" alt="elf file" title="elf file"></p><p>一个有效的ELF文件必须满足如下几条：</p><ol><li>必须存在文件头</li><li>用于连接的ELF必须包括Section head Table,对于可执行文件这部分可选</li><li>Program Header Table，可执行文件必须包括，用于连接的ELF文件可选</li><li>Section由数据，字符串和可重定位的符号</li><li>由头，Section header table, Program header table, Sections组成</li></ol><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这里需要注意在linking view中使用的是section,而在executable view中使用是segment,我们写程序时可以通过链接脚本指定当前代码或者数据存放在那个section中，而且只有控制section,而segment是链接器在生成可执行文件时生成的叫segment.</p></div><h2 id="_3-elf文件中使用的数据类型" tabindex="-1">3. ELF文件中使用的数据类型 <a class="header-anchor" href="#_3-elf文件中使用的数据类型" aria-hidden="true">#</a></h2><table><thead><tr><th>名子</th><th>大小</th><th>对齐方式</th><th>功能</th></tr></thead><tbody><tr><td>Elf64_Addr</td><td>8</td><td>8</td><td>表示程序地址</td></tr><tr><td>Elf64_Off</td><td>8</td><td>8</td><td>g表示文件偏移</td></tr><tr><td>Elf64_Half</td><td>2</td><td>2</td><td>表示无符号的中整数</td></tr><tr><td>Elf64_Word</td><td>4</td><td>4</td><td>表示无符号的整数</td></tr><tr><td>Elf64_Sword</td><td>4</td><td>4</td><td>表示有符号的整数</td></tr><tr><td>Elf64_Xword</td><td>8</td><td>8</td><td>表示无符号的大整数</td></tr><tr><td>Elf64_Sxword</td><td>8</td><td>8</td><td>表示有符号的大整数</td></tr><tr><td>unsigned char</td><td>1</td><td>1</td><td>表示无符号的小整数</td></tr></tbody></table><p>在linux中是如下的定义：</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">unsigned</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">long</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">long</span><span style="color:#F8F8F2;"> Elf64_Addr;</span></span>
<span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">unsigned</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">short</span><span style="color:#F8F8F2;"> Elf64_Half;</span></span>
<span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">signed</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">short</span><span style="color:#F8F8F2;"> Elf64_SHalf;</span></span>
<span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">unsigned</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">long</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">long</span><span style="color:#F8F8F2;"> Elf64_Off;</span></span>
<span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">signed</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> Elf64_Sword;</span></span>
<span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">unsigned</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">int</span><span style="color:#F8F8F2;"> Elf64_Word;</span></span>
<span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">unsigned</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">long</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">long</span><span style="color:#F8F8F2;"> Elf64_Xword;</span></span>
<span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">signed</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">long</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">long</span><span style="color:#F8F8F2;"> Elf64_Sxword;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_4-elf文件头" tabindex="-1">4. ELF文件头 <a class="header-anchor" href="#_4-elf文件头" aria-hidden="true">#</a></h2><p>从linux内核中可以找到头部的数据结构如下：</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">struct</span><span style="color:#F8F8F2;"> elf64_hdr {</span></span>
<span class="line"><span style="color:#F8F8F2;">	</span><span style="color:#66D9EF;font-style:italic;">unsigned</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">char</span><span style="color:#F8F8F2;"> e_ident[</span><span style="color:#AE81FF;">16</span><span style="color:#F8F8F2;">];</span><span style="color:#88846F;">	/* ELF &quot;magic number&quot; */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Half e_type;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Half e_machine;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Word e_version;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Addr e_entry;</span><span style="color:#88846F;">	/* Entry point virtual address */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Off e_phoff;</span><span style="color:#88846F;">	/* Program header table file offset */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Off e_shoff;</span><span style="color:#88846F;">	/* Section header table file offset */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Word e_flags;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Half e_ehsize;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Half e_phentsize;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Half e_phnum;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Half e_shentsize;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Half e_shnum;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Half e_shstrndx;</span></span>
<span class="line"><span style="color:#F8F8F2;">} Elf64_Ehdr;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_4-1-elf头中的e-ident" tabindex="-1">4.1 ELF头中的e_ident <a class="header-anchor" href="#_4-1-elf头中的e-ident" aria-hidden="true">#</a></h3><p>identification魔数将文件标识为 ELF 目标文件，并提供有关目标文件结构的数据表示的信息。 e_ident是一个数组，在linux内核中使用如下index的访问</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"></span>
<span class="line"><span style="color:#88846F;">/* 这个用于区分32位还是64位，=1 为32位， =2 为64 */</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#F8F8F2;">	</span><span style="color:#A6E22E;">EI_CLASS</span><span style="color:#F8F8F2;">	</span><span style="color:#AE81FF;">4</span></span>
<span class="line"><span style="color:#88846F;">/* 这个字段用于表示大小端，=1 为小端， =2 为大端 */</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#F8F8F2;">	</span><span style="color:#A6E22E;">EI_DATA</span><span style="color:#F8F8F2;">		</span><span style="color:#AE81FF;">5</span></span>
<span class="line"><span style="color:#88846F;">/* 这个字段用于表示版本，目前使用固定的 EV_CURRENT = 1*/</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#F8F8F2;">	</span><span style="color:#A6E22E;">EI_VERSION</span><span style="color:#F8F8F2;">	</span><span style="color:#AE81FF;">6</span></span>
<span class="line"><span style="color:#88846F;">/* 这个字段用于表示操作系统和ABI, 有三种 =0为System V ABI, =1为HP-UX operating system， =2为Standalone (embedded) */</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#F8F8F2;">	</span><span style="color:#A6E22E;">EI_OSABI</span><span style="color:#F8F8F2;">	</span><span style="color:#AE81FF;">7</span></span>
<span class="line"><span style="color:#88846F;">/* 起始填充位 */</span></span>
<span class="line"><span style="color:#F92672;">#define</span><span style="color:#F8F8F2;">	</span><span style="color:#A6E22E;">EI_PAD</span><span style="color:#F8F8F2;">		</span><span style="color:#AE81FF;">8</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_4-2-elf头中的e-type" tabindex="-1">4.2 ELF头中的e_type <a class="header-anchor" href="#_4-2-elf头中的e-type" aria-hidden="true">#</a></h3><p>类型如下表：</p><table><thead><tr><th>名子</th><th>值</th><th>含义</th></tr></thead><tbody><tr><td>ET_NONE</td><td>0</td><td>无文件类型</td></tr><tr><td>ET_REL</td><td>1</td><td>可重新定位的文件如.o</td></tr><tr><td>ET_EXEC</td><td>2</td><td>可执行文件</td></tr><tr><td>ET_DYN</td><td>3</td><td>共享库文件</td></tr><tr><td>ET_CORE</td><td>4</td><td>核心文件</td></tr><tr><td>ET_LOOS</td><td>0xFE00</td><td>特定环境使用</td></tr><tr><td>ET_HIOS</td><td>0xFEFF</td><td></td></tr><tr><td>ET_LOPROC</td><td>0xFF00</td><td>特定处理器的使用</td></tr><tr><td>ET_HIPROC</td><td>0xFFFF</td><td></td></tr></tbody></table><h3 id="_4-3-elf头中的e-machine" tabindex="-1">4.3 ELF头中的e_machine <a class="header-anchor" href="#_4-3-elf头中的e-machine" aria-hidden="true">#</a></h3><p>表示目标处理器架构，如arm64 x86</p><h3 id="_4-4-elf头中的e-version" tabindex="-1">4.4 ELF头中的e_version <a class="header-anchor" href="#_4-4-elf头中的e-version" aria-hidden="true">#</a></h3><p>这个和e_ident中版本是一样的</p><h3 id="_4-5-elf头中的e-entry" tabindex="-1">4.5 ELF头中的e_entry <a class="header-anchor" href="#_4-5-elf头中的e-entry" aria-hidden="true">#</a></h3><p>包含程序入口点的虚拟地址。如果没有入口点，则此字段包含零</p><h3 id="_4-6-elf头中的e-phoff" tabindex="-1">4.6 ELF头中的e_phoff <a class="header-anchor" href="#_4-6-elf头中的e-phoff" aria-hidden="true">#</a></h3><p>包含程序头表的文件偏移量，以字节为单位</p><h3 id="_4-7-elf头中的e-shoff" tabindex="-1">4.7 ELF头中的e_shoff <a class="header-anchor" href="#_4-7-elf头中的e-shoff" aria-hidden="true">#</a></h3><p>包含节头表的文件偏移量，以字节为单位</p><h3 id="_4-8-elf头中的e-flags" tabindex="-1">4.8 ELF头中的e_flags <a class="header-anchor" href="#_4-8-elf头中的e-flags" aria-hidden="true">#</a></h3><p>包含特定于处理器的标志</p><h3 id="_4-9-elf头中的e-ehsize" tabindex="-1">4.9 ELF头中的e_ehsize <a class="header-anchor" href="#_4-9-elf头中的e-ehsize" aria-hidden="true">#</a></h3><p>包含 ELF 标头的大小（以字节为单位）</p><h3 id="_4-10-elf头中的e-phentsize" tabindex="-1">4.10 ELF头中的e_phentsize <a class="header-anchor" href="#_4-10-elf头中的e-phentsize" aria-hidden="true">#</a></h3><p>包含程序头表(Program head table)条目的大小（以字节为单位)</p><h3 id="_4-11-elf头中的e-phnum" tabindex="-1">4.11 ELF头中的e_phnum <a class="header-anchor" href="#_4-11-elf头中的e-phnum" aria-hidden="true">#</a></h3><p>包含程序头表(Program head table)中的条目数</p><h3 id="_4-12-elf头中的e-shentsize" tabindex="-1">4.12 ELF头中的e_shentsize <a class="header-anchor" href="#_4-12-elf头中的e-shentsize" aria-hidden="true">#</a></h3><p>每个节头表(section head table)条目的大小（以字节为单位）,也就是每个section head 的大小</p><h3 id="_4-13-elf头中的e-shnum" tabindex="-1">4.13 ELF头中的e_shnum <a class="header-anchor" href="#_4-13-elf头中的e-shnum" aria-hidden="true">#</a></h3><p>节头表(section head table)中的section header条目数</p><h3 id="_4-14-elf头中的e-shstrndx" tabindex="-1">4.14 ELF头中的e_shstrndx <a class="header-anchor" href="#_4-14-elf头中的e-shstrndx" aria-hidden="true">#</a></h3><p>字符串节section header在section header table中的索引</p><h2 id="_5-sections节" tabindex="-1">5. SECTIONS节 <a class="header-anchor" href="#_5-sections节" aria-hidden="true">#</a></h2><p>节是包括除了ELF头，ELF Section header table , ELF Program header table之外的所有东西。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>节的内容中没有节的描述信息，它的描述信息都在section header table中对应该的section header中。</p></div><h2 id="_6-section-header" tabindex="-1">6. Section header <a class="header-anchor" href="#_6-section-header" aria-hidden="true">#</a></h2><p>在linux中section header的定义如下：</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">struct</span><span style="color:#F8F8F2;"> elf64_shdr {</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Word sh_name;</span><span style="color:#88846F;">		/* Section name, index in string tbl */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Word sh_type;</span><span style="color:#88846F;">		/* Type of section */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Xword sh_flags;</span><span style="color:#88846F;">		/* Miscellaneous section attributes */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Addr sh_addr;</span><span style="color:#88846F;">		/* Section virtual addr at execution */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Off sh_offset;</span><span style="color:#88846F;">		/* Section file offset */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Xword sh_size;</span><span style="color:#88846F;">		/* Size of section in bytes */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Word sh_link;</span><span style="color:#88846F;">		/* Index of another section */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Word sh_info;</span><span style="color:#88846F;">		/* Additional section information */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Xword sh_addralign;</span><span style="color:#88846F;">	/* Section alignment */</span></span>
<span class="line"><span style="color:#F8F8F2;">  Elf64_Xword sh_entsize;</span><span style="color:#88846F;">	/* Entry size if section holds table */</span></span>
<span class="line"><span style="color:#F8F8F2;">} Elf64_Shdr;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_7-section-header-table" tabindex="-1">7. Section header table <a class="header-anchor" href="#_7-section-header-table" aria-hidden="true">#</a></h2><p>是section header的集合,这个表的地址在ELF头中有，是e_shoff这个字段</p><h2 id="_8-program-header" tabindex="-1">8. Program header <a class="header-anchor" href="#_8-program-header" aria-hidden="true">#</a></h2><p>在linux中Program header的定义如下：</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F92672;">typedef</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">struct</span><span style="color:#F8F8F2;"> elf64_phdr {</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Word p_type;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Word p_flags;</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Off p_offset;</span><span style="color:#88846F;">	/* Segment file offset */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Addr p_vaddr;</span><span style="color:#88846F;">	/* Segment virtual address */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Addr p_paddr;</span><span style="color:#88846F;">	/* Segment physical address */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Xword p_filesz;</span><span style="color:#88846F;">	/* Segment size in file */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Xword p_memsz;</span><span style="color:#88846F;">	/* Segment size in memory */</span></span>
<span class="line"><span style="color:#F8F8F2;">	Elf64_Xword p_align;</span><span style="color:#88846F;">	/* Segment alignment, file &amp; memory */</span></span>
<span class="line"><span style="color:#F8F8F2;">} Elf64_Phdr;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_9-program-header-table" tabindex="-1">9. Program header table <a class="header-anchor" href="#_9-program-header-table" aria-hidden="true">#</a></h2><p>是Program header的集合,这个表的地址在ELF头中有，是e_phoff这个字段</p><h2 id="_10-特殊的一些section" tabindex="-1">10. 特殊的一些Section <a class="header-anchor" href="#_10-特殊的一些section" aria-hidden="true">#</a></h2><h3 id="_10-1-string-table-section" tabindex="-1">10.1 string table section <a class="header-anchor" href="#_10-1-string-table-section" aria-hidden="true">#</a></h3><p>string table这个节保存了所有的了section的name，也就是说我们可以读取这个段的内容知道，都有那些个section.</p><hr><div class="tip custom-block"><p class="custom-block-title">提示</p><p>欢迎评论、探讨,如果发现错误请指正。转载请注明出处！ <a href="http://www.tsz.wiki" target="_blank" rel="noreferrer">探索者</a></p></div><hr>`,69);function d(s,F,h,f,_,y){const e=a("Vssue");return l(),t("div",null,[c,p(e,{title:s.$title},null,8,["title"])])}const m=n(i,[["render",d]]);export{u as __pageData,m as default};