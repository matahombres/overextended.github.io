"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9278],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=s(n),m=o,v=y["".concat(l,".").concat(m)]||y[m]||p[m]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(6600),o=(n(9496),n(9613));const a={},i=void 0,c={unversionedId:"ox_inventory/Functions/Server/Inventory/CanCarryItem",id:"ox_inventory/Functions/Server/Inventory/CanCarryItem",title:"CanCarryItem",description:"Returns true or false depending if the inventory can carry the specified item.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/CanCarryItem.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/CanCarryItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CanCarryItem",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/CanCarryItem.md",tags:[],version:"current",lastUpdatedAt:1663497641,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"CanCarryAmount",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CanCarryAmount"},next:{title:"CanSwapItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CanSwapItem"}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns true or false depending if the inventory can carry the specified item."),(0,o.kt)("p",null,"The function checks for inventory weight and available slots."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or number\n-- item: table or string\n-- count: number\n-- metadata: table or string (optional)\nexports.ox_inventory:CanCarryItem(inv, item, count, metadata)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Checks if the player calling the event can carry 3 water items\nif exports.ox_inventory:CanCarryItem(source, 'water', 3) then\n    -- Do stuff if can carry\nelse\n    -- Do stuff if can't carry\nend\n")))}p.isMDXComponent=!0}}]);