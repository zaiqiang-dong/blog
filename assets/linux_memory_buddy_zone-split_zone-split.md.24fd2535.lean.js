import{_,c as Q,d as r,a as s,w as a,e as n,b as o,r as e,o as F}from"./app.52781502.js";const h="/assets/zone-split_01.92b1e6c0.png",u="/assets/zone-split_02.cdcf20f8.png",R=JSON.parse('{"title":"ZOME的划分与选取","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. ZONE的划分","slug":"_1-zone的划分","link":"#_1-zone的划分","children":[{"level":3,"title":"1.1 x86平台划分","slug":"_1-1-x86平台划分","link":"#_1-1-x86平台划分","children":[]},{"level":3,"title":"1.2 arm64平台划分","slug":"_1-2-arm64平台划分","link":"#_1-2-arm64平台划分","children":[]}]},{"level":2,"title":"2. ZONE的选择","slug":"_2-zone的选择","link":"#_2-zone的选择","children":[]},{"level":2,"title":"3. ZNOE的遍历和页面分配","slug":"_3-znoe的遍历和页面分配","link":"#_3-znoe的遍历和页面分配","children":[]}],"relativePath":"linux/memory/buddy/zone-split/zone-split.md"}'),b={name:"linux/memory/buddy/zone-split/zone-split.md"},f=o("",15),H={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"38.198ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 16883.6 899","aria-hidden":"true"},g=o("",1),M=[g],L={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},A={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"40.461ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 17883.6 899","aria-hidden":"true"},V=o("",1),Z=[V],D=o("",10),w=r("code",null,"GFP_ZONES_SHIFT = 2",-1),k={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.282ex",height:"2.585ex",role:"img",focusable:"false",viewBox:"0 -893 6754.5 1142.5","aria-hidden":"true"},O=o("",1),N=[O],G=o("",12);function P(i,v,S,z,I,C){const l=e("mi"),t=e("mn"),p=e("mo"),c=e("math"),T=e("mjx-assistive-mml"),y=e("mrow"),d=e("msup"),m=e("Vssue");return F(),Q("div",null,[f,r("mjx-container",H,[(F(),Q("svg",E,M)),s(T,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[s(c,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[s(l,null,{default:a(()=>[n("a")]),_:1}),s(l,null,{default:a(()=>[n("r")]),_:1}),s(l,null,{default:a(()=>[n("m")]),_:1}),s(t,null,{default:a(()=>[n("64")]),_:1}),s(l,{mathvariant:"normal"},{default:a(()=>[n("_")]),_:1}),s(l,null,{default:a(()=>[n("d")]),_:1}),s(l,null,{default:a(()=>[n("m")]),_:1}),s(l,null,{default:a(()=>[n("a")]),_:1}),s(l,{mathvariant:"normal"},{default:a(()=>[n("_")]),_:1}),s(l,null,{default:a(()=>[n("p")]),_:1}),s(l,null,{default:a(()=>[n("h")]),_:1}),s(l,null,{default:a(()=>[n("y")]),_:1}),s(l,null,{default:a(()=>[n("s")]),_:1}),s(l,{mathvariant:"normal"},{default:a(()=>[n("_")]),_:1}),s(l,null,{default:a(()=>[n("l")]),_:1}),s(l,null,{default:a(()=>[n("i")]),_:1}),s(l,null,{default:a(()=>[n("m")]),_:1}),s(l,null,{default:a(()=>[n("i")]),_:1}),s(l,null,{default:a(()=>[n("t")]),_:1}),s(p,null,{default:a(()=>[n("=")]),_:1}),s(t,null,{default:a(()=>[n("2147483648")]),_:1})]),_:1})]),_:1})]),r("mjx-container",L,[(F(),Q("svg",A,Z)),s(T,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[s(c,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[s(l,null,{default:a(()=>[n("a")]),_:1}),s(l,null,{default:a(()=>[n("r")]),_:1}),s(l,null,{default:a(()=>[n("m")]),_:1}),s(t,null,{default:a(()=>[n("64")]),_:1}),s(l,{mathvariant:"normal"},{default:a(()=>[n("_")]),_:1}),s(l,null,{default:a(()=>[n("d")]),_:1}),s(l,null,{default:a(()=>[n("m")]),_:1}),s(l,null,{default:a(()=>[n("a")]),_:1}),s(t,null,{default:a(()=>[n("32")]),_:1}),s(l,{mathvariant:"normal"},{default:a(()=>[n("_")]),_:1}),s(l,null,{default:a(()=>[n("p")]),_:1}),s(l,null,{default:a(()=>[n("h")]),_:1}),s(l,null,{default:a(()=>[n("y")]),_:1}),s(l,null,{default:a(()=>[n("s")]),_:1}),s(l,{mathvariant:"normal"},{default:a(()=>[n("_")]),_:1}),s(l,null,{default:a(()=>[n("l")]),_:1}),s(l,null,{default:a(()=>[n("i")]),_:1}),s(l,null,{default:a(()=>[n("m")]),_:1}),s(l,null,{default:a(()=>[n("i")]),_:1}),s(l,null,{default:a(()=>[n("t")]),_:1}),s(p,null,{default:a(()=>[n("=")]),_:1}),s(t,null,{default:a(()=>[n("4294967296")]),_:1})]),_:1})]),_:1})]),D,r("p",null,[n("其中"),w,n(",这个比较好理解"),r("mjx-container",k,[(F(),Q("svg",x,N)),s(T,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:a(()=>[s(c,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:a(()=>[s(d,null,{default:a(()=>[s(t,null,{default:a(()=>[n("2")]),_:1}),s(y,{"data-mjx-texclass":"ORD"},{default:a(()=>[s(t,null,{default:a(()=>[n("0")]),_:1}),s(p,{"data-mjx-texclass":"ORD",stretchy:"false"},{default:a(()=>[n("|")]),_:1}),s(t,null,{default:a(()=>[n("1")]),_:1}),s(p,{"data-mjx-texclass":"ORD",stretchy:"false"},{default:a(()=>[n("|")]),_:1}),s(t,null,{default:a(()=>[n("2")]),_:1}),s(p,{"data-mjx-texclass":"ORD",stretchy:"false"},{default:a(()=>[n("|")]),_:1}),s(t,null,{default:a(()=>[n("3")]),_:1})]),_:1})]),_:1}),s(p,null,{default:a(()=>[n("=")]),_:1}),s(t,null,{default:a(()=>[n("1")]),_:1}),s(p,{"data-mjx-texclass":"ORD",stretchy:"false"},{default:a(()=>[n("|")]),_:1}),s(t,null,{default:a(()=>[n("2")]),_:1}),s(p,{"data-mjx-texclass":"ORD",stretchy:"false"},{default:a(()=>[n("|")]),_:1}),s(t,null,{default:a(()=>[n("4")]),_:1}),s(p,{"data-mjx-texclass":"ORD",stretchy:"false"},{default:a(()=>[n("|")]),_:1}),s(t,null,{default:a(()=>[n("8")]),_:1})]),_:1})]),_:1})])]),G,s(m,{title:i.$title},null,8,["title"])])}const j=_(b,[["render",P]]);export{R as __pageData,j as default};