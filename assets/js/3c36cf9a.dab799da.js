"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[405],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:6,title:"Example subcommand",sidebar_label:"Example"},p=void 0,o={unversionedId:"usage/example",id:"usage/example",title:"Example subcommand",description:"quicktest example | qt example",source:"@site/docs/usage/example.md",sourceDirName:"usage",slug:"/usage/example",permalink:"/quicktest/docs/usage/example",draft:!1,editUrl:"https://github.com/LuchoBazz/quicktest/tree/main/website/docs/usage/example.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Example subcommand",sidebar_label:"Example"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/quicktest/docs/usage/setup"},next:{title:"Stress",permalink:"/quicktest/docs/examples/stress"}},i={},s=[{value:"<code>quicktest example | qt example</code>",id:"quicktest-example--qt-example",level:3},{value:"Demo",id:"demo",level:3},{value:"Subcommand Structure",id:"subcommand-structure",level:3}],m={toc:s};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"quicktest-example--qt-example"},(0,r.kt)("inlineCode",{parentName:"h3"},"quicktest example | qt example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"quicktest example --stress\nquicktest example --cmp\nquicktest example --check\nquicktest example --run\nquicktest example --setup\n")),(0,r.kt)("p",null,"or shorter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"qt example --stress\nqt example --cmp\nqt example --check\nqt example --run\nqt example --setup\n")),(0,r.kt)("h3",{id:"demo"},"Demo"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"example gif",src:a(9154).Z,width:"2051",height:"983"})),(0,r.kt)("h3",{id:"subcommand-structure"},"Subcommand Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quicktest example | qt example"),"  ",(0,r.kt)("strong",{parentName:"li"},"Flags"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--check"),"   Show examples of the check subcommand")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--cmp"),"     Show examples of the cmp subcommand")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--stress"),"  Show examples of the stress subcommand")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--run"),"     Show examples of the run subcommand")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--setup"),"   Show examples of the setup subcommand"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Nota:")," can only use one flag at a time"))))))}c.isMDXComponent=!0},9154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-8ece024b63df6b26df1f55fb41d22c83.gif"}}]);