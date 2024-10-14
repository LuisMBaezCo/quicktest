"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[601],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(a),g=n,y=u["".concat(o,".").concat(g)]||u[g]||m[g]||p;return a?r.createElement(y,s(s({ref:t},c),{},{components:a})):r.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,s=new Array(p);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<p;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=a(8168),n=(a(6540),a(5680));const p={sidebar_position:4,title:"Output Examples",sidebar_label:"Output"},s=void 0,l={unversionedId:"examples/output",id:"examples/output",title:"Output Examples",description:"Run Examples",source:"@site/docs/examples/output.md",sourceDirName:"examples",slug:"/examples/output",permalink:"/quicktest/docs/examples/output",draft:!1,editUrl:"https://github.com/LuchoBazz/quicktest/tree/main/website/docs/examples/output.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Output Examples",sidebar_label:"Output"},sidebar:"tutorialSidebar",previous:{title:"Check",permalink:"/quicktest/docs/examples/check"},next:{title:"Supported Languages",permalink:"/quicktest/docs/languages/supported-languages"}},o={},i=[{value:"Run Examples",id:"run-examples",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"run-examples"},"Run Examples"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/LuchoBazz/quicktest.git\n\ncd quicktest/examples/output\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("h3",{parentName:"li",id:"cpp-examples"},"cpp examples"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"quicktest output --target-file=cpp/main.cpp --prefix=test_cases/testcase_ac\n")),(0,n.yg)("p",{parentName:"li"},"  Or which saves the output to a file"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"quicktest output --target-file=cpp/main.cpp --prefix=test_cases/testcase_ac --save-out\n")),(0,n.yg)("p",{parentName:"li"},"  or shorter"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"quicktest output -t cpp/main.cpp -p test_cases/testcase_ac --save-out\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("h3",{parentName:"li",id:"python-examples"},"python examples"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"quicktest output --target-file=python/main.py --prefix=test_cases/testcase_ac\n")),(0,n.yg)("p",{parentName:"li"},"  Or which saves the output to a file"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"quicktest output --target-file=python/main.py --prefix=test_cases/testcase_ac --save-out\n")),(0,n.yg)("p",{parentName:"li"},"  or shorter"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"quicktest output -t python/main.py -p test_cases/testcase_ac --save-out\n")))))}m.isMDXComponent=!0}}]);