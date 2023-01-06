import{_ as o,c,a as s,b as n,d as a,e as r,r as l,o as i}from"./app.846178b4.js";const G=JSON.parse('{"title":"页分配掩码","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 掩码介绍","slug":"_1-掩码介绍","link":"#_1-掩码介绍","children":[{"level":3,"title":"1.1 原始掩码","slug":"_1-1-原始掩码","link":"#_1-1-原始掩码","children":[]},{"level":3,"title":"1.2 掩码组合","slug":"_1-2-掩码组合","link":"#_1-2-掩码组合","children":[]},{"level":3,"title":"1.3 最终掩码","slug":"_1-3-最终掩码","link":"#_1-3-最终掩码","children":[]}]},{"level":2,"title":"2 掩码使用","slug":"_2-掩码使用","link":"#_2-掩码使用","children":[]}],"relativePath":"linux/memory/buddy/alloc-flags/alloc-flags.md"}'),y={name:"linux/memory/buddy/alloc-flags/alloc-flags.md"},b=r(`<h1 id="页分配掩码" tabindex="-1">页分配掩码 <a class="header-anchor" href="#页分配掩码" aria-hidden="true">#</a></h1><hr><table><thead><tr><th>软件版本</th><th>硬件版本</th><th>更新内容</th></tr></thead><tbody><tr><td>linux 4.19</td><td>arm64</td><td></td></tr></tbody></table><hr><h2 id="_1-掩码介绍" tabindex="-1">1. 掩码介绍 <a class="header-anchor" href="#_1-掩码介绍" aria-hidden="true">#</a></h2><h3 id="_1-1-原始掩码" tabindex="-1">1.1 原始掩码 <a class="header-anchor" href="#_1-1-原始掩码" aria-hidden="true">#</a></h3><p>最原始的一部分flags（前面带三个_）,后面的flags基本都是用这部分“组合”出来的,具体信息如下：</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Plain integer GFP bitmasks. Do not use this directly. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 分配区域指定 一般占用整个掩码的最低 1~4 BIT</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//从ZONE_DMA区域分配内存</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_DMA</span><span style="color:#A6ACCD;"> 		</span><span style="color:#F78C6C;">0x01u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//从ZONE_HIGHMEM活ZONE_NORMAL中分配内存</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_HIGHMEM</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x02u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//从ZONE_DMA32中分配内存</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_DMA32</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x04u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//页是可移动的</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_MOVABLE</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x08u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 分配行为指定, 占用掩码的第 5～16 BIT </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//页是可回收的</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_RECLAIMABLE</span><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">0x10u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_HIGH</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x20u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知			</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_IO</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x40u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_FS</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x80u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//需要非缓存的冷页</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_COLD</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x100u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//禁止分配失败警告</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_NOWARN</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x200u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//一直重试直到成功				</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_REPEAT</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x400u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_NOFAIL</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x800u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//失败返回不重试</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_NORETRY</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x1000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//使用紧急分配链表</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_MEMALLOC</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x2000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_COMP</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x4000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//返回的页面初始化为0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_ZERO</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x8000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 分配类型指定， 占用掩码第 17～23 BIT</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//不使用紧急分配链表</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_NOMEMALLOC</span><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">0x10000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//只允许在进程允许运行的CPU所关联的PCP分配内存</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_HARDWALL</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x20000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_THISNODE</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x40000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//用于原子分配，在任何情况下都不能中断</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_ATOMIC</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x80000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_NOACCOUNT</span><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">0x100000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//避免被内存检测工具kmemcheck检测</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_NOTRACK</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x200000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//当内存不足时，直接进入内存回收</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_DIRECT_RECLAIM</span><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">0x400000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_OTHER_NODE</span><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">0x800000u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_WRITE</span><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">0x1000000u</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//当内存不足时，唤醒内存回收</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">___GFP_KSWAPD_RECLAIM</span><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">0x2000000u</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><h3 id="_1-2-掩码组合" tabindex="-1">1.2 掩码组合 <a class="header-anchor" href="#_1-2-掩码组合" aria-hidden="true">#</a></h3><p>这个部分一分是由第一部分的flags中的一个或者多个组合而成。</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* If the above are modified, __GFP_BITS_SHIFT may need updating */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Physical address zone modifiers (see linux/mmzone.h - low four bits)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Do not put any conditional on these. If necessary modify the definitions</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * without the underscores and use them consistently. The definitions here may</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * be used in bit comparisons.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 这个基本和第一部分一样</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 使用了__force修饰的变量可以进行强制类型转换, 没有使用 __force修饰的变量进行强制类型转换时, Sparse会给出警告.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//和第一部分基本一样</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_DMA</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_DMA</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_HIGHMEM</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_HIGHMEM</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_DMA32</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_DMA32</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//是页迁移机制所需的标志，可移动的</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_MOVABLE</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_MOVABLE</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;font-style:italic;">  /* Page is movable */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_MOVABLE</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_MOVABLE</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;font-style:italic;">  /* ZONE_MOVABLE allowed */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//第一部分的组合</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_ZONEMASK</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_DMA</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">__GFP_HIGHMEM</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">__GFP_DMA32</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">__GFP_MOVABLE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Page mobility and placement hints</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * These flags provide hints about how mobile the page is. Pages with similar</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * mobility are placed within the same pageblocks to minimise problems due</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * to external fragmentation.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_MOVABLE (also a zone modifier) indicates that the page can be</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   moved by page migration during memory compaction or can be reclaimed.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_RECLAIMABLE is used for slab allocations that specify</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   SLAB_RECLAIM_ACCOUNT and whose pages can be freed via shrinkers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_WRITE indicates the caller intends to dirty the page. Where possible,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   these pages will be spread between local zones to avoid all the dirty</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   pages being in one zone (fair zone allocation policy).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_HARDWALL enforces the cpuset memory allocation policy.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_THISNODE forces the allocation to be satisified from the requested</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   node with no fallbacks or placement policy enforcements.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//是页迁移机制所需的标志，可回收的</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_RECLAIMABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_RECLAIMABLE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_WRITE</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_WRITE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_HARDWALL</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_HARDWALL</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_THISNODE</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_THISNODE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Watermark modifiers -- controls access to emergency reserves</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_HIGH indicates that the caller is high-priority and that granting</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   the request is necessary before the system can make forward progress.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   For example, creating an IO context to clean pages.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_ATOMIC indicates that the caller cannot reclaim or sleep and is</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   high priority. Users are typically interrupt handlers. This may be</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   used in conjunction with __GFP_HIGH</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_MEMALLOC allows access to all memory. This should only be used when</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   the caller guarantees the allocation will allow more memory to be freed</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   very shortly e.g. process exiting or swapping. Users either should</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   be the MM or co-ordinating closely with the VM (e.g. swap over NFS).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_NOMEMALLOC is used to explicitly forbid access to emergency reserves.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   This takes precedence over the __GFP_MEMALLOC flag if both are set.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_NOACCOUNT ignores the accounting for kmemcg limit enforcement.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//中断中分配内存会使用，表明不允许打断</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_ATOMIC</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_ATOMIC</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//高优先级分配内存，</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_HIGH</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_HIGH</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//调用者需要很快释放分配的内存</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_MEMALLOC</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_MEMALLOC</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//禁止从应急的内存空间分配 </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_NOMEMALLOC</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_NOMEMALLOC</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_NOACCOUNT</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_NOACCOUNT</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Reclaim modifiers</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_IO can start physical IO.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_FS can call down to the low-level FS. Clearing the flag avoids the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   allocator recursing into the filesystem which might already be holding</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   locks.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_DIRECT_RECLAIM indicates that the caller may enter direct reclaim.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   This flag can be cleared to avoid unnecessary delays when a fallback</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   option is available.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_KSWAPD_RECLAIM indicates that the caller wants to wake kswapd when</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   the low watermark is reached and have it reclaim pages until the high</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   watermark is reached. A caller may wish to clear this flag when fallback</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   options are available and the reclaim is likely to disrupt the system. The</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   canonical example is THP allocation where a fallback is cheap but</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   reclaim/compaction may cause indirect stalls.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_RECLAIM is shorthand to allow/forbid both direct and kswapd reclaim.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_REPEAT: Try hard to allocate the memory, but the allocation attempt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   _might_ fail.  This depends upon the particular VM implementation.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_NOFAIL: The VM implementation _must_ retry infinitely: the caller</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   cannot handle allocation failures. New users should be evaluated carefully</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   (and the flag should be used only when there is no reasonable failure</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   policy) but it is definitely preferable to use the flag rather than</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   opencode endless loop around allocator.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_NORETRY: The VM implementation must not retry indefinitely and will</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   return NULL when direct reclaim and memory compaction have failed to allow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   the allocation to succeed.  The OOM killer is not called with the current</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   implementation.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//说明在查找空闲内存期间内核可以进行I/O操作</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_IO</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_IO</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//允许内核执行VFS操作</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_FS</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_FS</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//当内存不足时，直接进入内存回收</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_DIRECT_RECLAIM</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_DIRECT_RECLAIM</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;font-style:italic;"> /* Caller can reclaim */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//当内存不足时，希望唤醒内存回收，回收成功后分配</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_KSWAPD_RECLAIM</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_KSWAPD_RECLAIM</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;font-style:italic;"> /* kswapd can wake */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//上面两个flag的组合</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_RECLAIM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">___GFP_DIRECT_RECLAIM</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">___GFP_KSWAPD_RECLAIM</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在分配失败后自动重试，但在尝试若干次之后会停止</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_REPEAT</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_REPEAT</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在分配失败后一直重试，直至成功</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_NOFAIL</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_NOFAIL</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在分配失败后不重试直接返回</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_NORETRY</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_NORETRY</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Action modifiers</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_COLD indicates that the caller does not expect to be used in the near</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   future. Where possible, a cache-cold page will be returned.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_NOWARN suppresses allocation failure reports.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_COMP address compound page metadata.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_ZERO returns a zeroed page on success.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_NOTRACK avoids tracking with kmemcheck.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_NOTRACK_FALSE_POSITIVE is an alias of __GFP_NOTRACK. It&#39;s a means of</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   distinguishing in the source between false positives and allocations that</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   cannot be supported (e.g. page tables).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_OTHER_NODE is for allocations that are on a remote node but that</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   should not be accounted for as a remote allocation in vmstat. A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   typical user would be khugepaged collapsing a huge page on a remote</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   node.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//分配一个不在cpu 缓存中的内存</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_COLD</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_COLD</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在分配失败时禁止内核故障警告</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_NOWARN</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_NOWARN</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//分配大页时会使用</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_COMP</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_COMP</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//返回的页面初始化为0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_ZERO</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_ZERO</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//避免被内存检测工具kmemcheck检测</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_NOTRACK</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_NOTRACK</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_NOTRACK_FALSE_POSITIVE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_NOTRACK</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//未知</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_OTHER_NODE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">___GFP_OTHER_NODE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Room for N __GFP_FOO bits */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_BITS_SHIFT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__GFP_BITS_MASK</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__force </span><span style="color:#FFCB6B;">gfp_t</span><span style="color:#89DDFF;">)((</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> __GFP_BITS_SHIFT</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br></div></div><h3 id="_1-3-最终掩码" tabindex="-1">1.3 最终掩码 <a class="header-anchor" href="#_1-3-最终掩码" aria-hidden="true">#</a></h3><p>这部分的掩码就是我们在分配内存过程经常会使用的掩码。</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Useful GFP flag combinations that are commonly used. It is recommended</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * that subsystems start with one of these combinations and then set/clear</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * __GFP_FOO flags as necessary.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_ATOMIC users can not sleep and need the allocation to succeed. A lower</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   watermark is applied to allow access to &quot;atomic reserves&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_KERNEL is typical for kernel-internal allocations. The caller requires</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   ZONE_NORMAL or a lower zone for direct access but can direct reclaim.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_NOWAIT is for kernel allocations that should not stall for direct</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   reclaim, start physical IO or use any filesystem callback.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_NOIO will use direct reclaim to discard clean pages or slab pages</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   that do not require the starting of any physical IO.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_NOFS will use direct reclaim but will not use any filesystem interfaces.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_USER is for userspace allocations that also need to be directly</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   accessibly by the kernel or hardware. It is typically used by hardware</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   for buffers that are mapped to userspace (e.g. graphics) that hardware</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   still must DMA to. cpuset limits are enforced for these allocations.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_DMA exists for historical reasons and should be avoided where possible.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   The flags indicates that the caller requires that the lowest zone be</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   used (ZONE_DMA or 16M on x86-64). Ideally, this would be removed but</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   it would require careful auditing as some users really require it and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   others use the flag to avoid lowmem reserves in ZONE_DMA and treat the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   lowest zone as a type of emergency reserve.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_DMA32 is similar to GFP_DMA except that the caller requires a 32-bit</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   address.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_HIGHUSER is for userspace allocations that may be mapped to userspace,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   do not need to be directly accessible by the kernel but that cannot</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   move once in use. An example may be a hardware allocation that maps</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   data directly into userspace but has no addressing limitations.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_HIGHUSER_MOVABLE is for userspace allocations that the kernel does not</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   need direct access to but can use kmap() when access is required. They</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   are expected to be movable via page reclaim or page migration. Typically,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   pages on the LRU would also be allocated with GFP_HIGHUSER_MOVABLE.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * GFP_TRANSHUGE is used for THP allocations. They are compound allocations</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   that will fail quickly if memory is not available and will not wake</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   kswapd on failure.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//用于原子分配，不能中断, 可使用紧急分配链表中的内存, 这个标志用在中断处理程序, 下半部, </span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//持有自旋锁以及其他不能睡眠的地方</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_ATOMIC</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_HIGH</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">__GFP_ATOMIC</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">__GFP_KSWAPD_RECLAIM</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//这是一种常规的分配方式, 可能会阻塞. 这个标志在睡眠安全时用在进程的长下文代码中. 为了获取调用者所需的内存,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//内核会尽力而为. 这个标志应该是首选标志</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_KERNEL</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_RECLAIM </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_IO </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_FS</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//与GFP_ATOMIC类似</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_NOWAIT</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_KSWAPD_RECLAIM</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//这种分配可以阻塞, 但不会启动磁盘I/O, 这个标志在不能引发更多的磁盘I/O时阻塞I/O代码</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_NOIO</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_RECLAIM</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//这种分配在必要时可以阻塞, 但是也可能启动磁盘, 但是不会启动文件系统操作</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_NOFS</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_RECLAIM </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_IO</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_TEMPORARY</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_RECLAIM </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_IO </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_FS </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">			 __GFP_RECLAIMABLE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//这是一种常规的分配方式, 可能会阻塞. 这个标志用于为用户空间进程分配内存时使用</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_USER</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__GFP_RECLAIM </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_IO </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_FS </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_HARDWALL</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//用于分配适用于DMA的内存</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_DMA</span><span style="color:#A6ACCD;">		__GFP_DMA</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_DMA32</span><span style="color:#A6ACCD;">	__GFP_DMA32</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//是GFP_USER的一个扩展, 也用于用户空间. 它允许分配无法直接映射的高端内存</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_HIGHUSER</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">GFP_USER </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_HIGHMEM</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_HIGHUSER_MOVABLE</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">GFP_HIGHUSER </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_MOVABLE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GFP_TRANSHUGE</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">GFP_HIGHUSER_MOVABLE </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_COMP </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">			 __GFP_NOMEMALLOC </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_NORETRY </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> __GFP_NOWARN</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">			 </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">__GFP_KSWAPD_RECLAIM</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div>`,14),F={id:"_2-掩码使用",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#_2-掩码使用","aria-hidden":"true"},"#",-1),_=s("p",null,"经常使用是就是上面1.3中描述的掩码组合，具体含义如1.3注释。",-1),D=s("hr",null,null,-1),C=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[n("转载请注明出处！ "),s("a",{href:"http://www.cxy.wiki",target:"_blank",rel:"noreferrer"},"探索者")])],-1);function u(p,m,f,E,d,h){const e=l("Badge"),t=l("Vssue");return i(),c("div",null,[b,s("h2",F,[n("2 掩码使用 "),a(e,{type:"tip",text:"^1.9.0"}),n(),A]),_,D,C,a(t,{title:p.$title},null,8,["title"])])}const g=o(y,[["render",u]]);export{G as __pageData,g as default};
