"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[557],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||u;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<u;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9701:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),o=["components"],i={sidebar_position:4,title:"Output subcommand",sidebar_label:"Output"},p=void 0,l={unversionedId:"usage/output",id:"usage/output",title:"Output subcommand",description:"quicktest output | qt output",source:"@site/docs/usage/output.md",sourceDirName:"usage",slug:"/usage/output",permalink:"/quicktest/docs/usage/output",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/output.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Output subcommand",sidebar_label:"Output"},sidebar:"tutorialSidebar",previous:{title:"Check",permalink:"/quicktest/docs/usage/check"},next:{title:"Setup",permalink:"/quicktest/docs/usage/setup"}},c={},s=[{value:"<code>quicktest output | qt output</code>",id:"quicktest-output--qt-output",level:3},{value:"Demo",id:"demo",level:3},{value:"Subcommand Structure",id:"subcommand-structure",level:3}],m={toc:s};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h3",{id:"quicktest-output--qt-output"},(0,u.kt)("inlineCode",{parentName:"h3"},"quicktest output | qt output")),(0,u.kt)("p",null,"Run all test cases that match a prefix and save the response to an output file"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"quicktest output --target-file=main.cpp --prefix=testcase_ac\n")),(0,u.kt)("p",null,"or shorter"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"qt output -t main.cpp -p testcase_ac\n")),(0,u.kt)("h3",{id:"demo"},"Demo"),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"output gif",src:n(8804).Z,width:"2051",height:"983"})),(0,u.kt)("h3",{id:"subcommand-structure"},"Subcommand Structure"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"p"},"quicktest output | qt output")),(0,u.kt)("p",{parentName:"li"},"  ",(0,u.kt)("strong",{parentName:"p"},"Required Options")),(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"p"},"-t=<value> | --target-file=<value>"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"p"},"-p=<value> | --prefix=<value>")),(0,u.kt)("p",{parentName:"li"},(0,u.kt)("strong",{parentName:"p"},"Other Options"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"p"},"--timeout=<value> | --tout=<value> [default: 2000]")," Unit of time: ",(0,u.kt)("inlineCode",{parentName:"p"},"ms"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"p"},"--memory-limit=<value> | --ml=<value> [default: 1000000000 - 1GB]")," Unit of time: ",(0,u.kt)("inlineCode",{parentName:"p"},"bytes"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"p"},"--break-bad | --break"),"  Break if WA, TLE or RTE states occurs")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"p"},"--save-out"),"   Save the output of the target file for each test case"))))))}d.isMDXComponent=!0},8804:function(e,t,n){t.Z=n.p+"assets/images/output-aa97666b3be92b7dc835560b330a81b8.gif"}}]);