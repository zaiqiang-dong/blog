import{_ as i,r as o,o as t,c as l,d as a,a as e,w as T,e as s,b as n}from"./app.6d6d6f97.js";const m="/assets/memory_modle_16.7478d342.png",c="/assets/min-kbytes.83049e88.png",Q1=JSON.parse('{"title":"水位线的计算","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 水位线的使用","slug":"_1-水位线的使用","link":"#_1-水位线的使用","children":[]},{"level":2,"title":"2. 水位线的设置","slug":"_2-水位线的设置","link":"#_2-水位线的设置","children":[]},{"level":2,"title":"3. 小结","slug":"_3-小结","link":"#_3-小结","children":[]}],"relativePath":"linux/memory/buddy/wartermark/watermark.md"}'),d={name:"linux/memory/buddy/wartermark/watermark.md"},F=n("",13),y={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.544ex"},xmlns:"http://www.w3.org/2000/svg",width:"47.577ex",height:"2.851ex",role:"img",focusable:"false",viewBox:"0 -1019.7 21029 1260","aria-hidden":"true"},g=n("",1),u=[g],f=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("mi",null,"n"),a("mi",null,"e"),a("mi",null,"w"),a("mi",{mathvariant:"normal"},"_"),a("mi",null,"m"),a("mi",null,"i"),a("mi",null,"n"),a("mi",{mathvariant:"normal"},"_"),a("mi",null,"f"),a("mi",null,"r"),a("mi",null,"e"),a("mi",null,"e"),a("mi",{mathvariant:"normal"},"_"),a("mi",null,"k"),a("mi",null,"b"),a("mi",null,"y"),a("mi",null,"t"),a("mi",null,"e"),a("mi",null,"s"),a("mo",null,"="),a("msqrt",null,[a("mi",null,"l"),a("mi",null,"o"),a("mi",null,"w"),a("mi",null,"m"),a("mi",null,"e"),a("mi",null,"m"),a("mi",{mathvariant:"normal"},"_"),a("mi",null,"k"),a("mi",null,"b"),a("mi",null,"y"),a("mi",null,"t"),a("mi",null,"e"),a("mi",null,"s"),a("mo",null,"∗"),a("mn",null,"16")])],-1),_=n("",5),b=a("li",null,[a("p",null,[s("代码18～21行： 累加各个zone的页面数到"),a("code",null,"lowmem_pages"),s(".")])],-1),w=a("li",null,[a("p",null,"代码23行： 就是对各个zone都计算一下水位线。")],-1),L=a("p",null,[s("代码27～28行： 这两个是整个函数的核心，这里的"),a("code",null,"pages_min"),s("就是"),a("code",null,"min_free_kbytes"),s("除以4转化为整个系统应该保留的最小页面数。那这里的"),a("code",null,"tmp"),s("计算出来就应该是当前循环的zone所应保留的最小页面数，具体公式如下")],-1),H={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.016ex"},xmlns:"http://www.w3.org/2000/svg",width:"48.597ex",height:"5.319ex",role:"img",focusable:"false",viewBox:"0 -1460 21480 2351","aria-hidden":"true"},x=n("",1),M=[x],Z=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("mi",null,"t"),a("mi",null,"m"),a("mi",null,"p"),a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("mi",null,"p"),a("mi",null,"a"),a("mi",null,"g"),a("mi",null,"e"),a("mi",null,"s"),a("mi",{mathvariant:"normal"},"_"),a("mi",null,"m"),a("mi",null,"i"),a("mi",null,"n"),a("mo",null,"∗"),a("mi",null,"z"),a("mi",null,"o"),a("mi",null,"n"),a("mi",null,"e"),a("mi",{mathvariant:"normal"},"_"),a("mi",null,"m"),a("mi",null,"a"),a("mi",null,"n"),a("mi",null,"a"),a("mi",null,"g"),a("mi",null,"e"),a("mi",null,"d"),a("mi",{mathvariant:"normal"},"_"),a("mi",null,"p"),a("mi",null,"a"),a("mi",null,"g"),a("mi",null,"e"),a("mi",null,"s"),a("mo",{stretchy:"false"},"("),a("mi",null,"z"),a("mi",null,"o"),a("mi",null,"n"),a("mi",null,"e"),a("mo",{stretchy:"false"},")")]),a("mrow",null,[a("mi",null,"l"),a("mi",null,"o"),a("mi",null,"w"),a("mi",null,"m"),a("mi",null,"e"),a("mi",null,"m"),a("mi",{mathvariant:"normal"},"_"),a("mi",null,"p"),a("mi",null,"a"),a("mi",null,"g"),a("mi",null,"e"),a("mi",null,"s")])])],-1),E={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.059ex"},xmlns:"http://www.w3.org/2000/svg",width:"48.543ex",height:"5.285ex",role:"img",focusable:"false",viewBox:"0 -1426 21456.2 2336","aria-hidden":"true"},v=n("",1),A=[v],z=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"整"),a("mi",{mathvariant:"normal"},"个"),a("mi",{mathvariant:"normal"},"系"),a("mi",{mathvariant:"normal"},"统"),a("mi",{mathvariant:"normal"},"保"),a("mi",{mathvariant:"normal"},"留"),a("mi",{mathvariant:"normal"},"最"),a("mi",{mathvariant:"normal"},"少"),a("mi",{mathvariant:"normal"},"页"),a("mi",{mathvariant:"normal"},"面"),a("mi",{mathvariant:"normal"},"数"),a("mo",null,"∗"),a("mi",{mathvariant:"normal"},"当"),a("mi",{mathvariant:"normal"},"前"),a("mi",null,"z"),a("mi",null,"o"),a("mi",null,"n"),a("mi",null,"e"),a("mi",{mathvariant:"normal"},"的"),a("mi",{mathvariant:"normal"},"页"),a("mi",{mathvariant:"normal"},"面"),a("mi",{mathvariant:"normal"},"数")]),a("mrow",null,[a("mi",{mathvariant:"normal"},"所"),a("mi",{mathvariant:"normal"},"有"),a("mi",null,"z"),a("mi",null,"o"),a("mi",null,"n"),a("mi",null,"e"),a("mi",{mathvariant:"normal"},"总"),a("mi",{mathvariant:"normal"},"的"),a("mi",{mathvariant:"normal"},"页"),a("mi",{mathvariant:"normal"},"面"),a("mi",{mathvariant:"normal"},"数")])])],-1),V=a("li",null,[a("p",null,[s("代码49行： 设置"),a("code",null,"zone->_watermark[WMARK_MIN]"),s("值")])],-1),C={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.781ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.782ex",height:"2.862ex",role:"img",focusable:"false",viewBox:"0 -919.8 1671.8 1264.8","aria-hidden":"true"},I=n("",1),R=[I],N=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mfrac",null,[a("mrow",null,[a("mi",null,"t"),a("mi",null,"m"),a("mi",null,"p")]),a("mn",null,"4")])],-1),P={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.816ex"},xmlns:"http://www.w3.org/2000/svg",width:"23.005ex",height:"2.773ex",role:"img",focusable:"false",viewBox:"0 -864.9 10168.2 1225.5","aria-hidden":"true"},B=n("",1),K=[B],G=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",{mathvariant:"normal"},"当"),a("mi",{mathvariant:"normal"},"前"),a("mi",null,"z"),a("mi",null,"o"),a("mi",null,"n"),a("mi",null,"e"),a("mi",{mathvariant:"normal"},"页"),a("mi",{mathvariant:"normal"},"面"),a("mi",{mathvariant:"normal"},"数"),a("mo",null,"∗"),a("mfrac",null,[a("mn",null,"10"),a("mn",null,"10000")])],-1),j={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.781ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.741ex",height:"2.862ex",role:"img",focusable:"false",viewBox:"0 -919.8 4747.3 1264.8","aria-hidden":"true"},J=n("",1),q=[J],$=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"t"),a("mi",null,"m"),a("mi",null,"p"),a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("mi",null,"t"),a("mi",null,"m"),a("mi",null,"p")]),a("mn",null,"4")])],-1),U=a("li",null,[a("p",null,[s("代码62~63行： 设置"),a("code",null,"zone->_watermark[WMARK_LOW]"),s("和"),a("code",null,"zone->_watermark[WMAR]")])],-1),X=n("",5);function Y(p,a1,s1,n1,t1,l1){const Q=o("mjx-assistive-mml"),r=o("Vssue");return t(),l("div",null,[F,a("mjx-container",y,[(t(),l("svg",h,u)),e(Q,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[f]),_:1})]),_,a("ul",null,[b,w,a("li",null,[L,a("mjx-container",H,[(t(),l("svg",k,M)),e(Q,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Z]),_:1})]),a("mjx-container",E,[(t(),l("svg",D,A)),e(Q,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[z]),_:1})])]),V,a("li",null,[a("p",null,[s("代码57～59： 这里就是从"),a("mjx-container",C,[(t(),l("svg",S,R)),e(Q,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[N]),_:1})]),s("和"),a("mjx-container",P,[(t(),l("svg",W,K)),e(Q,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[G]),_:1})]),s("中取一个最大的，这里我的理解是考虑kswapd运行需要的最小内存，而且我的实验平台，最终都是"),a("mjx-container",j,[(t(),l("svg",O,q)),e(Q,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[$]),_:1})]),s(";")])]),U]),X,e(r,{title:p.$title},null,8,["title"])])}const T1=i(d,[["render",Y]]);export{Q1 as __pageData,T1 as default};