"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8299],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(r),u=a,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(6600),a=(r(9496),r(9613));const i={},o=void 0,l={unversionedId:"ox_lib/AddCommand/Server",id:"ox_lib/AddCommand/Server",title:"Server",description:"* principal: string or string[] or false",source:"@site/docs/ox_lib/AddCommand/Server.md",sourceDirName:"ox_lib/AddCommand",slug:"/ox_lib/AddCommand/Server",permalink:"/docs/ox_lib/AddCommand/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/AddCommand/Server.md",tags:[],version:"current",lastUpdatedAt:1663497641,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{},sidebar:"ox_lib",previous:{title:"Server",permalink:"/docs/ox_lib/ACL/Server"},next:{title:"Client",permalink:"/docs/ox_lib/Cache/Client"}},c={},m=[],p={toc:m};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.addCommand(principal, command, callback, parameters, help)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"principal: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"command: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"callback: ",(0,a.kt)("inlineCode",{parentName:"li"},"function")),(0,a.kt)("li",{parentName:"ul"},"parameters?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"array"),")"),(0,a.kt)("li",{parentName:"ul"},"help?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.addCommand('group.admin', {'additem', 'giveitem'}, function(source, args)\n    args.item = Items(args.item)\n    if args.item and args.count > 0 then\n        Inventory.AddItem(args.target, args.item.name, args.count, args.metatype)\n    end\nend, {'target:number', 'item:string', 'count:number', 'metatype:?string'})\n")))}d.isMDXComponent=!0}}]);