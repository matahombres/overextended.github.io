"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3754],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(6600),o=(n(9496),n(9613));const a={},i="Usage",s={unversionedId:"ox_target/Usage/index",id:"ox_target/Usage/index",title:"Usage",description:"When calling exports to add options, the input is an array of tables with the following properties.",source:"@site/docs/ox_target/Usage/index.md",sourceDirName:"ox_target/Usage",slug:"/ox_target/Usage/",permalink:"/docs/ox_target/Usage/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_target/Usage/index.md",tags:[],version:"current",lastUpdatedAt:1663497641,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{},sidebar:"ox_target",previous:{title:"Config",permalink:"/docs/ox_target/Getting Started/config"},next:{title:"Globals",permalink:"/docs/ox_target/Usage/Globals"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"When calling exports to add options, the input is an array of tables with the following properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"{\n  -- an identifier used when removing options\n  name? = string,\n  -- an icon from font-awesome\n  icon? = string,\n  -- display text\n  label = string,\n  -- range to display (default: 2, max: 7)\n  distance? = number,\n  -- a group, array of groups, or groups and grades needed to display\n  groups? = string | string[] | { [string]: number }\n  -- an item, array of items, or items and counts needed to display\n  items? = string | string[] | { [string]: number }\n  -- custom check to hide or display the option\n  canInteract? = function(entity, distance, coords, name),\n  -- triggered on option selection (one only)\n  onSelect? = function(data),\n  export? = string,\n  event? = string,\n  serverEvent? = string,\n  command? = string\n}\n")))}d.isMDXComponent=!0}}]);