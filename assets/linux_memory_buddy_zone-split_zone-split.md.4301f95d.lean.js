import{_ as c,r as o,o as n,c as l,d as s,a as t,w as e,e as r,b as a}from"./app.16e13bb9.js";const T="/assets/zone-split_01.92b1e6c0.png",i="/assets/zone-split_02.cdcf20f8.png",I=JSON.parse('{"title":"ZOME的划分与选取","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. ZONE的划分","slug":"_1-zone的划分","link":"#_1-zone的划分","children":[{"level":3,"title":"1.1 x86平台划分","slug":"_1-1-x86平台划分","link":"#_1-1-x86平台划分","children":[]},{"level":3,"title":"1.2 arm64平台划分","slug":"_1-2-arm64平台划分","link":"#_1-2-arm64平台划分","children":[]}]},{"level":2,"title":"2. ZONE的选择","slug":"_2-zone的选择","link":"#_2-zone的选择","children":[]},{"level":2,"title":"3. ZNOE的遍历和页面分配","slug":"_3-znoe的遍历和页面分配","link":"#_3-znoe的遍历和页面分配","children":[]}],"relativePath":"linux/memory/buddy/zone-split/zone-split.md"}'),y={name:"linux/memory/buddy/zone-split/zone-split.md"},d=a("",15),m={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"38.198ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 16883.6 899","aria-hidden":"true"},h=a("",1),b=[h],u=s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"m"),s("mn",null,"64"),s("mi",{mathvariant:"normal"},"_"),s("mi",null,"d"),s("mi",null,"m"),s("mi",null,"a"),s("mi",{mathvariant:"normal"},"_"),s("mi",null,"p"),s("mi",null,"h"),s("mi",null,"y"),s("mi",null,"s"),s("mi",{mathvariant:"normal"},"_"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"t"),s("mo",null,"="),s("mn",null,"2147483648")],-1),H={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"40.461ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 17883.6 899","aria-hidden":"true"},g=a("",1),f=[g],M=s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"a"),s("mi",null,"r"),s("mi",null,"m"),s("mn",null,"64"),s("mi",{mathvariant:"normal"},"_"),s("mi",null,"d"),s("mi",null,"m"),s("mi",null,"a"),s("mn",null,"32"),s("mi",{mathvariant:"normal"},"_"),s("mi",null,"p"),s("mi",null,"h"),s("mi",null,"y"),s("mi",null,"s"),s("mi",{mathvariant:"normal"},"_"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"t"),s("mo",null,"="),s("mn",null,"4294967296")],-1),L=a("",10),A=s("code",null,"GFP_ZONES_SHIFT = 2",-1),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.282ex",height:"2.585ex",role:"img",focusable:"false",viewBox:"0 -893 6754.5 1142.5","aria-hidden":"true"},D=a("",1),k=[D],w=s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msup",null,[s("mn",null,"2"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mn",null,"0"),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("mn",null,"1"),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("mn",null,"2"),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("mn",null,"3")])]),s("mo",null,"="),s("mn",null,"1"),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("mn",null,"2"),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("mn",null,"4"),s("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),s("mn",null,"8")],-1),x=a("",12);function O(Q,N,G,P,v,S){const p=o("mjx-assistive-mml"),F=o("Vssue");return n(),l("div",null,[d,s("mjx-container",m,[(n(),l("svg",_,b)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:e(()=>[u]),_:1})]),s("mjx-container",H,[(n(),l("svg",E,f)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:e(()=>[M]),_:1})]),L,s("p",null,[r("其中"),A,r(",这个比较好理解"),s("mjx-container",V,[(n(),l("svg",Z,k)),t(p,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:e(()=>[w]),_:1})])]),x,t(F,{title:Q.$title},null,8,["title"])])}const C=c(y,[["render",O]]);export{I as __pageData,C as default};