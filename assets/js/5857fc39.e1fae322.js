"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[265],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},u=Object.keys(e);for(a=0;a<u.length;a++)r=u[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)r=u[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(r),g=n,y=c["".concat(p,".").concat(g)]||c[g]||m[g]||u;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,o=new Array(u);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<u;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>l});var a=r(8168),n=(r(6540),r(5680));const u={sidebar_position:4,title:"Output subcommand",sidebar_label:"Output"},o=void 0,i={unversionedId:"usage/output",id:"usage/output",title:"Output subcommand",description:"quicktest output | qt output",source:"@site/docs/usage/output.md",sourceDirName:"usage",slug:"/usage/output",permalink:"/quicktest/docs/usage/output",draft:!1,editUrl:"https://github.com/LuchoBazz/quicktest/tree/main/website/docs/usage/output.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Output subcommand",sidebar_label:"Output"},sidebar:"tutorialSidebar",previous:{title:"Check",permalink:"/quicktest/docs/usage/check"},next:{title:"Setup",permalink:"/quicktest/docs/usage/setup"}},p={},l=[{value:"<code>quicktest output | qt output</code>",id:"quicktest-output--qt-output",level:3},{value:"Demo",id:"demo",level:3},{value:"Subcommand Structure",id:"subcommand-structure",level:3}],s={toc:l},c="wrapper";function m(e){let{components:t,...u}=e;return(0,n.yg)(c,(0,a.A)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"quicktest-output--qt-output"},(0,n.yg)("inlineCode",{parentName:"h3"},"quicktest output | qt output")),(0,n.yg)("p",null,"Run all test cases that match a prefix and save the response to an output file"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"quicktest output --target-file=main.cpp --prefix=testcase_ac\n")),(0,n.yg)("p",null,"or shorter"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"qt output -t main.cpp -p testcase_ac\n")),(0,n.yg)("h3",{id:"demo"},"Demo"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"output gif",src:r(9366).A,width:"2051",height:"983"})),(0,n.yg)("h3",{id:"subcommand-structure"},"Subcommand Structure"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"quicktest output | qt output")),(0,n.yg)("p",{parentName:"li"},"  ",(0,n.yg)("strong",{parentName:"p"},"Required Options")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-t=<value> | --target-file=<value>"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-p=<value> | --prefix=<value>")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Other Options"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"--timeout=<value> | --tout=<value> [default: 2000]")," Unit of time: ",(0,n.yg)("inlineCode",{parentName:"p"},"ms"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"--memory-limit=<value> | --ml=<value> [default: 1000000000 - 1GB]")," Unit of time: ",(0,n.yg)("inlineCode",{parentName:"p"},"bytes"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"--break-bad | --break"),"  Break if WA, TLE or RTE states occurs")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"--save-out"),"   Save the output of the target file for each test case"))))))}m.isMDXComponent=!0},9366:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/output-aa97666b3be92b7dc835560b330a81b8.gif"}}]);