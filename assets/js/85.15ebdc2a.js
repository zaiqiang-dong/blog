(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{582:function(a,t,l){"use strict";l.r(t);var r=l(37),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,l=a._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h2",{attrs:{id:"编译如下"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#编译如下"}},[a._v("#")]),a._v(" 编译如下：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("gcc -fsanitize=address -fno-omit-frame-pointer -O0 ./global-buffer-overflow.c\n")])])]),l("h2",{attrs:{id:"注意需要以-o0编译"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#注意需要以-o0编译"}},[a._v("#")]),a._v(" 注意需要以 -O0编译")]),a._v(" "),l("h2",{attrs:{id:"fsanitize-hwaddress"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#fsanitize-hwaddress"}},[a._v("#")]),a._v(" -fsanitize=hwaddress")]),a._v(" "),l("p",[a._v("目前理解：")]),a._v(" "),l("ol",[l("li",[a._v("gcc需要11之后才可以支持")]),a._v(" "),l("li",[a._v("如果使用ndk中的clang编译，提示没有\n"),l("ul",[l("li",[a._v("ld: error: cannot open toolchains/llvm/prebuilt/linux-x86_64/lib64/clang/12.0.8/lib/linux/libclang_rt.hwasan-x86_64.a: No such file or directory")]),a._v(" "),l("li",[a._v("ld: error: cannot open toolchains/llvm/prebuilt/linux-x86_64/lib64/clang/12.0.8/lib/linux/libclang_rt.hwasan_cxx-x86_64.a: No such file or directory")])])]),a._v(" "),l("li",[a._v("如果使用ndk中的arm64平台clang编译可以成功，所以是否是只有aarch64目前提供了支持")])])])}),[],!1,null,null,null);t.default=e.exports}}]);